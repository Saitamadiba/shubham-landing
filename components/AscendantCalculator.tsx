'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { getZodiacSignData, ZodiacSign, ZODIAC_SIGNS } from '@/lib/astro-calculations'
import { searchLocations, LocationResult, getTimezoneFromCoordinates } from '@/lib/here-geocoding'
import { getNakshatraData, NakshatraData } from '@/lib/nakshatra-data'
import { Calculator, MapPin, Clock, Calendar, Star, Sparkles, ChevronRight, ChevronDown, Loader2, Search, Info } from 'lucide-react'

// API response type from Swiss Ephemeris calculation
interface SwissEphResult {
  julian_day: number
  ayanamsa: number
  ayanamsa_dms: string
  tropical: {
    longitude: number
    sign: string
    sign_index: number
    degree_in_sign: number
    degree_dms: string
    nakshatra: string
    nakshatra_pada: number
  }
  sidereal: {
    longitude: number
    sign: string
    sign_index: number
    degree_in_sign: number
    degree_dms: string
    nakshatra: string
    nakshatra_pada: number
  }
}

interface AscendantCalculatorProps {
  onGetReport?: () => void
}

export default function AscendantCalculator({ onGetReport }: AscendantCalculatorProps) {
  const { t, language } = useLanguage()

  // Form state
  const [birthDate, setBirthDate] = useState('')
  const [birthTime, setBirthTime] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<LocationResult | null>(null)
  const [timezoneOffset, setTimezoneOffset] = useState<number>(0)
  const [isLoadingTimezone, setIsLoadingTimezone] = useState(false)

  // UI state
  const [isCalculating, setIsCalculating] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [locationResults, setLocationResults] = useState<LocationResult[]>([])
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Results state - now using Swiss Ephemeris API response
  const [result, setResult] = useState<SwissEphResult | null>(null)
  const [tropicalNakshatraData, setTropicalNakshatraData] = useState<NakshatraData | null>(null)
  const [siderealNakshatraData, setSiderealNakshatraData] = useState<NakshatraData | null>(null)
  const [tropicalNakshatraPada, setTropicalNakshatraPada] = useState<number>(1)
  const [siderealNakshatraPada, setSiderealNakshatraPada] = useState<number>(1)
  const [tropicalSignData, setTropicalSignData] = useState<ZodiacSign | null>(null)
  const [siderealSignData, setSiderealSignData] = useState<ZodiacSign | null>(null)

  // Expanded state for sign descriptions - defaults to sidereal (Vedic)
  const [expandedSign, setExpandedSign] = useState<'tropical' | 'sidereal' | null>('sidereal')

  // Debounced location search
  useEffect(() => {
    if (locationQuery.length < 2) {
      setLocationResults([])
      return
    }

    const timer = setTimeout(async () => {
      setIsSearching(true)
      const results = await searchLocations(locationQuery)
      setLocationResults(results)
      setIsSearching(false)
      setShowLocationDropdown(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [locationQuery])

  const handleLocationSelect = async (location: LocationResult) => {
    setSelectedLocation(location)
    setLocationQuery(location.title)
    setShowLocationDropdown(false)

    // Auto-fetch timezone from coordinates
    setIsLoadingTimezone(true)
    try {
      const tz = await getTimezoneFromCoordinates(location.latitude, location.longitude)
      setTimezoneOffset(tz)
    } catch (err) {
      console.error('Timezone fetch error:', err)
      // Fallback to rough estimation
      setTimezoneOffset(Math.round(location.longitude / 15))
    } finally {
      setIsLoadingTimezone(false)
    }
  }

  const handleCalculate = useCallback(async () => {
    setError(null)
    // Keep sidereal expanded by default after calculation
    setExpandedSign('sidereal')

    // Validation
    if (!birthDate) {
      setError(t.calculator.errors.enterDate)
      return
    }
    if (!birthTime) {
      setError(t.calculator.errors.enterTime)
      return
    }
    if (!selectedLocation) {
      setError(t.calculator.errors.selectLocation)
      return
    }

    setIsCalculating(true)

    try {
      // Parse date and time
      const [year, month, day] = birthDate.split('-').map(Number)
      const [hour, minute] = birthTime.split(':').map(Number)

      // Call Swiss Ephemeris API for accurate calculations
      const response = await fetch('/api/calculate-ascendant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year,
          month,
          day,
          hour,
          minute,
          second: 0,
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
          timezone: timezoneOffset,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Calculation failed')
      }

      const ascendantResult: SwissEphResult = await response.json()
      setResult(ascendantResult)

      // Get nakshatra data using the indices from API response
      // The API already calculates nakshatras using Swiss Ephemeris
      const NAKSHATRA_SPAN = 360 / 27 // 13.333... degrees

      // Tropical nakshatra
      const tropicalNakshatraIndex = Math.floor(ascendantResult.tropical.longitude / NAKSHATRA_SPAN) % 27
      setTropicalNakshatraData(getNakshatraData(tropicalNakshatraIndex))
      setTropicalNakshatraPada(ascendantResult.tropical.nakshatra_pada)

      // Sidereal nakshatra
      const siderealNakshatraIndex = Math.floor(ascendantResult.sidereal.longitude / NAKSHATRA_SPAN) % 27
      setSiderealNakshatraData(getNakshatraData(siderealNakshatraIndex))
      setSiderealNakshatraPada(ascendantResult.sidereal.nakshatra_pada)

      // Get zodiac sign data for both tropical and sidereal
      setTropicalSignData(getZodiacSignData(ascendantResult.tropical.sign_index))
      setSiderealSignData(getZodiacSignData(ascendantResult.sidereal.sign_index))
    } catch (err) {
      console.error('Calculation error:', err)
      setError(err instanceof Error ? err.message : 'An error occurred during calculation. Please try again.')
    } finally {
      setIsCalculating(false)
    }
  }, [birthDate, birthTime, selectedLocation, timezoneOffset, t])

  // Get translated sign name
  const getSignName = (signName: string): string => {
    return (t.calculator.signs as Record<string, string>)[signName] || signName
  }

  // Format timezone for display
  const formatTimezone = (offset: number): string => {
    const sign = offset >= 0 ? '+' : ''
    const hours = Math.floor(Math.abs(offset))
    const minutes = Math.round((Math.abs(offset) - hours) * 60)
    if (minutes === 0) {
      return `UTC${sign}${offset}`
    }
    return `UTC${sign}${Math.floor(offset)}:${minutes.toString().padStart(2, '0')}`
  }

  const toggleSignExpand = (sign: 'tropical' | 'sidereal') => {
    setExpandedSign(expandedSign === sign ? null : sign)
  }

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary via-secondary to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sacred-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-sacred-gold/10 border border-sacred-gold/30 text-sacred-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            {t.calculator.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-white mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="vedic-card p-6 md:p-8">
            <h3 className="text-xl font-cinzel text-sacred-gold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {language === 'en' ? 'Enter Your Birth Details' : 'Entrez Vos Détails de Naissance'}
            </h3>

            <div className="space-y-5">
              {/* Birth Date */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sacred-gold" />
                  {t.calculator.form.birthDate}
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 text-white focus:border-sacred-gold focus:outline-none transition"
                />
              </div>

              {/* Birth Time */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sacred-gold" />
                  {t.calculator.form.birthTime}
                </label>
                <input
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 text-white focus:border-sacred-gold focus:outline-none transition"
                />
              </div>

              {/* Birth Location */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sacred-gold" />
                  {t.calculator.form.birthPlace}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={locationQuery}
                    onChange={(e) => {
                      setLocationQuery(e.target.value)
                      setSelectedLocation(null)
                    }}
                    onFocus={() => locationResults.length > 0 && setShowLocationDropdown(true)}
                    placeholder={t.calculator.form.birthPlacePlaceholder}
                    className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 pr-10 text-white placeholder-gray-500 focus:border-sacred-gold focus:outline-none transition"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isSearching ? (
                      <Loader2 className="w-5 h-5 text-sacred-gold animate-spin" />
                    ) : (
                      <Search className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>

                {/* Location Dropdown */}
                {showLocationDropdown && locationResults.length > 0 && (
                  <div className="absolute z-20 w-full mt-1 bg-cosmic border border-sacred-gold/30 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                    {locationResults.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => handleLocationSelect(loc)}
                        className="w-full px-4 py-3 text-left hover:bg-sacred-gold/10 transition flex items-start gap-3 border-b border-sacred-gold/10 last:border-0"
                      >
                        <MapPin className="w-4 h-4 text-sacred-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white">{loc.title}</div>
                          <div className="text-sm text-gray-400">{loc.address}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {showLocationDropdown && locationQuery.length >= 2 && locationResults.length === 0 && !isSearching && (
                  <div className="absolute z-20 w-full mt-1 bg-cosmic border border-sacred-gold/30 rounded-lg shadow-xl p-4 text-gray-400 text-center">
                    {t.calculator.form.noResults}
                  </div>
                )}
              </div>

              {/* Timezone - Auto-detected but editable */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sacred-gold" />
                  {t.calculator.form.timezone}
                  {isLoadingTimezone && (
                    <Loader2 className="w-4 h-4 text-sacred-gold animate-spin ml-2" />
                  )}
                  {selectedLocation && !isLoadingTimezone && (
                    <span className="text-xs text-green-400 ml-2">
                      {language === 'en' ? '(auto-detected)' : '(auto-détecté)'}
                    </span>
                  )}
                </label>
                <select
                  value={timezoneOffset}
                  onChange={(e) => setTimezoneOffset(parseFloat(e.target.value))}
                  className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 text-white focus:border-sacred-gold focus:outline-none transition"
                >
                  {/* Common timezones with half-hour offsets */}
                  <option value={-12}>UTC-12:00</option>
                  <option value={-11}>UTC-11:00</option>
                  <option value={-10}>UTC-10:00</option>
                  <option value={-9.5}>UTC-9:30</option>
                  <option value={-9}>UTC-9:00</option>
                  <option value={-8}>UTC-8:00 (PST)</option>
                  <option value={-7}>UTC-7:00 (MST)</option>
                  <option value={-6}>UTC-6:00 (CST)</option>
                  <option value={-5}>UTC-5:00 (EST)</option>
                  <option value={-4}>UTC-4:00</option>
                  <option value={-3.5}>UTC-3:30 (Newfoundland)</option>
                  <option value={-3}>UTC-3:00</option>
                  <option value={-2}>UTC-2:00</option>
                  <option value={-1}>UTC-1:00</option>
                  <option value={0}>UTC+0:00 (GMT)</option>
                  <option value={1}>UTC+1:00 (CET)</option>
                  <option value={2}>UTC+2:00 (EET)</option>
                  <option value={3}>UTC+3:00</option>
                  <option value={3.5}>UTC+3:30 (Iran)</option>
                  <option value={4}>UTC+4:00</option>
                  <option value={4.5}>UTC+4:30 (Afghanistan)</option>
                  <option value={5}>UTC+5:00</option>
                  <option value={5.5}>UTC+5:30 (India)</option>
                  <option value={5.75}>UTC+5:45 (Nepal)</option>
                  <option value={6}>UTC+6:00</option>
                  <option value={6.5}>UTC+6:30 (Myanmar)</option>
                  <option value={7}>UTC+7:00</option>
                  <option value={8}>UTC+8:00 (China, Singapore)</option>
                  <option value={9}>UTC+9:00 (Japan, Korea)</option>
                  <option value={9.5}>UTC+9:30 (Australia Central)</option>
                  <option value={10}>UTC+10:00 (Australia Eastern)</option>
                  <option value={10.5}>UTC+10:30</option>
                  <option value={11}>UTC+11:00</option>
                  <option value={12}>UTC+12:00 (New Zealand)</option>
                  <option value={13}>UTC+13:00</option>
                  <option value={14}>UTC+14:00</option>
                </select>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full bg-gradient-to-r from-sacred-gold to-saffron text-primary font-bold py-4 px-6 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.calculator.form.calculating}
                  </>
                ) : (
                  <>
                    <Calculator className="w-5 h-5" />
                    {t.calculator.form.calculate}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="vedic-card p-6 md:p-8">
            {result ? (
              <div className="space-y-6">
                <h3 className="text-xl font-cinzel text-sacred-gold mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  {t.calculator.results.title}
                </h3>

                {/* Tropical vs Sidereal - Clickable Cards */}
                <div className="space-y-4">
                  {/* Tropical Card */}
                  <div
                    onClick={() => toggleSignExpand('tropical')}
                    className="bg-primary/50 border border-neon-cyan/30 rounded-xl p-5 cursor-pointer hover:border-neon-cyan/60 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{ZODIAC_SIGNS[result.tropical.sign_index]?.symbol || '♈'}</span>
                        <div>
                          <div className="text-sm text-neon-cyan mb-1 flex items-center gap-2">
                            {t.calculator.results.tropical}
                            <Info className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                          </div>
                          <div className="text-2xl font-cinzel text-white">
                            {getSignName(result.tropical.sign)}
                          </div>
                          <div className="text-gray-400">
                            {result.tropical.degree_dms}
                          </div>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-neon-cyan transition-transform ${expandedSign === 'tropical' ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Expanded Description */}
                    {expandedSign === 'tropical' && tropicalSignData && (
                      <div className="mt-4 pt-4 border-t border-neon-cyan/20 animate-fadeIn">
                        <div className="flex gap-4 mb-3 text-sm">
                          <span className="text-gray-400">
                            {language === 'en' ? 'Element' : 'Élément'}: <span className="text-neon-cyan">{tropicalSignData.element}</span>
                          </span>
                          <span className="text-gray-400">
                            {language === 'en' ? 'Ruler' : 'Maître'}: <span className="text-neon-cyan">{tropicalSignData.ruler}</span>
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {language === 'en' ? tropicalSignData.description.en : tropicalSignData.description.fr}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Sidereal Card */}
                  <div
                    onClick={() => toggleSignExpand('sidereal')}
                    className="bg-primary/50 border border-sacred-gold/30 rounded-xl p-5 cursor-pointer hover:border-sacred-gold/60 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{ZODIAC_SIGNS[result.sidereal.sign_index]?.symbol || '♈'}</span>
                        <div>
                          <div className="text-sm text-sacred-gold mb-1 flex items-center gap-2">
                            {t.calculator.results.sidereal}
                            <Info className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                          </div>
                          <div className="text-2xl font-cinzel text-white">
                            {getSignName(result.sidereal.sign)}
                          </div>
                          <div className="text-gray-400">
                            {result.sidereal.degree_dms}
                          </div>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-sacred-gold transition-transform ${expandedSign === 'sidereal' ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Expanded Description */}
                    {expandedSign === 'sidereal' && siderealSignData && (
                      <div className="mt-4 pt-4 border-t border-sacred-gold/20 animate-fadeIn">
                        <div className="flex gap-4 mb-3 text-sm">
                          <span className="text-gray-400">
                            {language === 'en' ? 'Element' : 'Élément'}: <span className="text-sacred-gold">{siderealSignData.element}</span>
                          </span>
                          <span className="text-gray-400">
                            {language === 'en' ? 'Ruler' : 'Maître'}: <span className="text-sacred-gold">{siderealSignData.ruler}</span>
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {language === 'en' ? siderealSignData.description.en : siderealSignData.description.fr}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ayanamsa */}
                <div className="bg-cosmic/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{t.calculator.results.ayanamsa}</span>
                    <span className="text-white font-mono">
                      {result.ayanamsa.toFixed(4)}°
                    </span>
                  </div>
                </div>

                {/* Nakshatra Section - Shows based on expanded sign */}
                {(() => {
                  const currentNakshatraData = expandedSign === 'tropical' ? tropicalNakshatraData : siderealNakshatraData
                  const currentPada = expandedSign === 'tropical' ? tropicalNakshatraPada : siderealNakshatraPada
                  const borderColor = expandedSign === 'tropical' ? 'border-neon-cyan/30' : 'border-sacred-gold/20'
                  const accentColor = expandedSign === 'tropical' ? 'text-neon-cyan' : 'text-sacred-gold'
                  const bgGradient = expandedSign === 'tropical' ? 'from-primary/60 to-cosmic/60' : 'from-secondary/80 to-cosmic/80'

                  if (!currentNakshatraData) return null

                  return (
                    <div className={`bg-gradient-to-br ${bgGradient} rounded-xl p-6 border ${borderColor}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${expandedSign === 'tropical' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-sacred-gold/20 text-sacred-gold'}`}>
                          {expandedSign === 'tropical'
                            ? (language === 'en' ? 'Tropical Nakshatra' : 'Nakshatra Tropical')
                            : (language === 'en' ? 'Sidereal Nakshatra (Vedic)' : 'Nakshatra Sidéral (Védique)')}
                        </span>
                      </div>

                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 ${expandedSign === 'tropical' ? 'bg-neon-cyan/20' : 'bg-sacred-gold/20'} rounded-full flex items-center justify-center text-2xl`}>
                          {currentNakshatraData.symbol === 'Horse head' ? '🐴' :
                           currentNakshatraData.symbol === 'Yoni (female organ)' ? '🌸' :
                           currentNakshatraData.symbol.includes('Flame') ? '🔥' :
                           currentNakshatraData.symbol.includes('Ox') ? '🐂' :
                           currentNakshatraData.symbol.includes('Deer') ? '🦌' :
                           currentNakshatraData.symbol.includes('Teardrop') ? '💧' :
                           currentNakshatraData.symbol.includes('Bow') ? '🏹' :
                           currentNakshatraData.symbol.includes('Lotus') ? '🪷' :
                           currentNakshatraData.symbol.includes('serpent') ? '🐍' :
                           currentNakshatraData.symbol.includes('throne') ? '👑' :
                           currentNakshatraData.symbol.includes('bed') ? '🛏️' :
                           currentNakshatraData.symbol.includes('hand') ? '✋' :
                           currentNakshatraData.symbol.includes('jewel') ? '💎' :
                           currentNakshatraData.symbol.includes('plant') ? '🌱' :
                           currentNakshatraData.symbol.includes('arch') ? '🎯' :
                           currentNakshatraData.symbol.includes('Ear') ? '👂' :
                           currentNakshatraData.symbol.includes('Drum') ? '🥁' :
                           currentNakshatraData.symbol.includes('Fish') ? '🐟' :
                           '⭐'}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`text-xl font-cinzel ${accentColor}`}>
                              {currentNakshatraData.name}
                            </h4>
                            <span className="text-sm text-gray-400">
                              {currentNakshatraData.sanskrit}
                            </span>
                          </div>
                          <div className="text-sm text-gray-300">
                            {language === 'en' ? currentNakshatraData.meaning.en : currentNakshatraData.meaning.fr}
                          </div>
                        </div>
                      </div>

                      {/* Nakshatra Details */}
                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">{t.calculator.results.pada}</span>
                          <span className="text-white">{currentPada}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">{t.calculator.results.lord}</span>
                          <span className="text-white">{currentNakshatraData.lord}</span>
                        </div>
                        <div className="flex justify-between col-span-2">
                          <span className="text-gray-400">{t.calculator.results.deity}</span>
                          <span className="text-white">{currentNakshatraData.deity}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {language === 'en' ? currentNakshatraData.description.en : currentNakshatraData.description.fr}
                      </p>

                      {/* Pada Description */}
                      <div className={`mt-4 pt-4 border-t ${expandedSign === 'tropical' ? 'border-neon-cyan/20' : 'border-sacred-gold/20'}`}>
                        <div className={`text-sm ${accentColor} mb-2`}>
                          {t.calculator.results.pada} {currentPada}:
                        </div>
                        <p className="text-gray-400 text-sm">
                          {language === 'en'
                            ? currentNakshatraData.padas[currentPada as 1 | 2 | 3 | 4].en
                            : currentNakshatraData.padas[currentPada as 1 | 2 | 3 | 4].fr}
                        </p>
                      </div>
                    </div>
                  )
                })()}

                {/* Explanation */}
                <p className="text-gray-500 text-sm italic">
                  {t.calculator.results.difference}
                </p>
              </div>
            ) : (
              // Empty state
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-sacred-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-10 h-10 text-sacred-gold/50" />
                </div>
                <h3 className="text-xl font-cinzel text-gray-400 mb-2">
                  {t.calculator.results.title}
                </h3>
                <p className="text-gray-500 max-w-sm">
                  {language === 'en'
                    ? 'Enter your birth details and click calculate to discover your rising signs'
                    : 'Entrez vos détails de naissance et cliquez sur calculer pour découvrir vos signes ascendants'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        {result && (
          <div className="mt-12 text-center">
            <div className="vedic-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-cinzel text-white mb-3">
                {t.calculator.cta.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {t.calculator.cta.subtitle}
              </p>
              <button
                onClick={onGetReport}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sacred-gold to-saffron text-primary font-bold py-4 px-8 rounded-lg hover:opacity-90 transition"
              >
                {t.calculator.cta.button}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
