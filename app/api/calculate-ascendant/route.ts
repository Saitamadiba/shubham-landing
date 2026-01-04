import { NextResponse } from 'next/server'
import * as swe from 'swisseph-v2'

const SIGN_NAMES = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
]

const NAKSHATRA_NAMES = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishtha', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
]

function degreesToDMS(degrees: number): string {
  const d = Math.floor(degrees)
  const m = Math.floor((degrees - d) * 60)
  const s = Math.floor(((degrees - d) * 60 - m) * 60)
  return `${d}°${m.toString().padStart(2, '0')}'${s.toString().padStart(2, '0')}"`
}

function getNakshatra(longitude: number): { name: string; pada: number } {
  const nakshatraSpan = 360 / 27 // 13.333... degrees
  const nakshatraIndex = Math.floor(longitude / nakshatraSpan) % 27
  const pada = Math.floor((longitude % nakshatraSpan) / (nakshatraSpan / 4)) + 1
  return {
    name: NAKSHATRA_NAMES[nakshatraIndex],
    pada: Math.min(pada, 4) // Ensure pada is 1-4
  }
}

interface CalculationParams {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  latitude: number
  longitude: number
  timezone: number
}

function calculateAscendant(params: CalculationParams) {
  const { year, month, day, hour, minute, second, latitude, longitude, timezone } = params

  // Convert local time to UT
  let ut = hour + minute / 60 + second / 3600 - timezone
  let adjustedDay = day

  // Handle day overflow/underflow
  if (ut < 0) {
    ut += 24
    adjustedDay -= 1
  } else if (ut >= 24) {
    ut -= 24
    adjustedDay += 1
  }

  // Calculate Julian Day
  const jd = swe.swe_julday(year, month, adjustedDay, ut, swe.SE_GREG_CAL)

  // Calculate TROPICAL ascendant
  const housesTropical = swe.swe_houses(jd, latitude, longitude, 'P')
  if ('error' in housesTropical) {
    throw new Error(`Tropical calculation failed: ${housesTropical.error}`)
  }
  const tropicalAsc = housesTropical.ascendant

  const tropicalSignIndex = Math.floor(tropicalAsc / 30)
  const tropicalDegreeInSign = tropicalAsc % 30
  const tropicalNakshatra = getNakshatra(tropicalAsc)

  // Set sidereal mode (Lahiri ayanamsa)
  swe.swe_set_sid_mode(swe.SE_SIDM_LAHIRI, 0, 0)

  // Get ayanamsa value
  const ayanamsa = swe.swe_get_ayanamsa_ut(jd)

  // Calculate SIDEREAL ascendant
  const housesSidereal = swe.swe_houses_ex(jd, swe.SEFLG_SIDEREAL, latitude, longitude, 'P')
  if ('error' in housesSidereal) {
    throw new Error(`Sidereal calculation failed: ${housesSidereal.error}`)
  }
  const siderealAsc = housesSidereal.ascendant

  const siderealSignIndex = Math.floor(siderealAsc / 30)
  const siderealDegreeInSign = siderealAsc % 30
  const siderealNakshatra = getNakshatra(siderealAsc)

  return {
    julian_day: Math.round(jd * 1000000) / 1000000,
    ayanamsa: Math.round(ayanamsa * 1000000) / 1000000,
    ayanamsa_dms: degreesToDMS(ayanamsa),
    tropical: {
      longitude: Math.round(tropicalAsc * 10000) / 10000,
      sign: SIGN_NAMES[tropicalSignIndex],
      sign_index: tropicalSignIndex,
      degree_in_sign: Math.round(tropicalDegreeInSign * 10000) / 10000,
      degree_dms: degreesToDMS(tropicalDegreeInSign),
      nakshatra: tropicalNakshatra.name,
      nakshatra_pada: tropicalNakshatra.pada
    },
    sidereal: {
      longitude: Math.round(siderealAsc * 10000) / 10000,
      sign: SIGN_NAMES[siderealSignIndex],
      sign_index: siderealSignIndex,
      degree_in_sign: Math.round(siderealDegreeInSign * 10000) / 10000,
      degree_dms: degreesToDMS(siderealDegreeInSign),
      nakshatra: siderealNakshatra.name,
      nakshatra_pada: siderealNakshatra.pada
    }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { year, month, day, hour, minute, second, latitude, longitude, timezone } = body

    // Validate required fields
    if (
      year === undefined ||
      month === undefined ||
      day === undefined ||
      hour === undefined ||
      minute === undefined ||
      latitude === undefined ||
      longitude === undefined ||
      timezone === undefined
    ) {
      return NextResponse.json(
        { error: 'Missing required fields: year, month, day, hour, minute, latitude, longitude, timezone' },
        { status: 400 }
      )
    }

    const result = calculateAscendant({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      hour: parseInt(hour),
      minute: parseInt(minute),
      second: second ? parseInt(second) : 0,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      timezone: parseFloat(timezone),
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Ascendant calculation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Calculation failed' },
      { status: 500 }
    )
  }
}

// Also support GET for simple testing
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const year = searchParams.get('year')
  const month = searchParams.get('month')
  const day = searchParams.get('day')
  const hour = searchParams.get('hour')
  const minute = searchParams.get('minute')
  const second = searchParams.get('second')
  const latitude = searchParams.get('latitude')
  const longitude = searchParams.get('longitude')
  const timezone = searchParams.get('timezone')

  if (!year || !month || !day || !hour || !minute || !latitude || !longitude || !timezone) {
    return NextResponse.json(
      { error: 'Missing required query parameters' },
      { status: 400 }
    )
  }

  try {
    const result = calculateAscendant({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      hour: parseInt(hour),
      minute: parseInt(minute),
      second: second ? parseInt(second) : 0,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      timezone: parseFloat(timezone),
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Ascendant calculation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Calculation failed' },
      { status: 500 }
    )
  }
}
