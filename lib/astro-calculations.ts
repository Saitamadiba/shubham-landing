// Astronomical calculations for ascendant computation
// Using standard astronomical formulas

const DEG_TO_RAD = Math.PI / 180
const RAD_TO_DEG = 180 / Math.PI

// Mean obliquity of the ecliptic (J2000.0)
const MEAN_OBLIQUITY = 23.439291

// Zodiac signs with descriptions
export const ZODIAC_SIGNS = [
  {
    name: 'Aries',
    symbol: '♈',
    sanskrit: 'Mesha',
    element: 'Fire',
    ruler: 'Mars',
    description: {
      en: 'Aries rising gives a pioneering, courageous, and energetic personality. You approach life with enthusiasm and directness, often taking initiative and leading others. Your physical presence is typically athletic and dynamic.',
      fr: 'L\'ascendant Bélier donne une personnalité pionnière, courageuse et énergique. Vous abordez la vie avec enthousiasme et franchise, prenant souvent l\'initiative et guidant les autres. Votre présence physique est généralement athlétique et dynamique.'
    }
  },
  {
    name: 'Taurus',
    symbol: '♉',
    sanskrit: 'Vrishabha',
    element: 'Earth',
    ruler: 'Venus',
    description: {
      en: 'Taurus rising creates a stable, sensual, and grounded presence. You value security, comfort, and the finer things in life. Your approach is patient and persistent, with a natural appreciation for beauty and material pleasures.',
      fr: 'L\'ascendant Taureau crée une présence stable, sensuelle et ancrée. Vous valorisez la sécurité, le confort et les bonnes choses de la vie. Votre approche est patiente et persistante, avec une appréciation naturelle pour la beauté et les plaisirs matériels.'
    }
  },
  {
    name: 'Gemini',
    symbol: '♊',
    sanskrit: 'Mithuna',
    element: 'Air',
    ruler: 'Mercury',
    description: {
      en: 'Gemini rising gives a curious, communicative, and versatile personality. You are naturally adaptable and intellectually curious, often juggling multiple interests. Your wit and charm make social interactions effortless.',
      fr: 'L\'ascendant Gémeaux donne une personnalité curieuse, communicative et polyvalente. Vous êtes naturellement adaptable et intellectuellement curieux, jonglant souvent avec plusieurs intérêts. Votre esprit et votre charme rendent les interactions sociales faciles.'
    }
  },
  {
    name: 'Cancer',
    symbol: '♋',
    sanskrit: 'Karka',
    element: 'Water',
    ruler: 'Moon',
    description: {
      en: 'Cancer rising creates a nurturing, protective, and emotionally sensitive presence. You approach life through feelings and intuition, with a strong connection to home and family. Your caring nature draws others seeking comfort.',
      fr: 'L\'ascendant Cancer crée une présence nourricière, protectrice et émotionnellement sensible. Vous abordez la vie à travers les sentiments et l\'intuition, avec une forte connexion au foyer et à la famille. Votre nature attentionnée attire ceux qui cherchent du réconfort.'
    }
  },
  {
    name: 'Leo',
    symbol: '♌',
    sanskrit: 'Simha',
    element: 'Fire',
    ruler: 'Sun',
    description: {
      en: 'Leo rising gives a confident, dramatic, and generous personality. You naturally command attention and express yourself with warmth and creativity. Your presence is radiant, and you inspire others with your enthusiasm.',
      fr: 'L\'ascendant Lion donne une personnalité confiante, dramatique et généreuse. Vous attirez naturellement l\'attention et vous vous exprimez avec chaleur et créativité. Votre présence est rayonnante et vous inspirez les autres par votre enthousiasme.'
    }
  },
  {
    name: 'Virgo',
    symbol: '♍',
    sanskrit: 'Kanya',
    element: 'Earth',
    ruler: 'Mercury',
    description: {
      en: 'Virgo rising creates a practical, analytical, and service-oriented presence. You approach life with attention to detail and a desire to improve and perfect. Your helpful nature and sharp mind make you invaluable to others.',
      fr: 'L\'ascendant Vierge crée une présence pratique, analytique et orientée vers le service. Vous abordez la vie avec attention aux détails et un désir d\'améliorer et de perfectionner. Votre nature serviable et votre esprit vif vous rendent précieux pour les autres.'
    }
  },
  {
    name: 'Libra',
    symbol: '♎',
    sanskrit: 'Tula',
    element: 'Air',
    ruler: 'Venus',
    description: {
      en: 'Libra rising gives a charming, diplomatic, and aesthetically refined personality. You seek harmony and balance in all relationships, with a natural grace in social situations. Partnership and fairness are central to your approach.',
      fr: 'L\'ascendant Balance donne une personnalité charmante, diplomatique et esthétiquement raffinée. Vous recherchez l\'harmonie et l\'équilibre dans toutes les relations, avec une grâce naturelle dans les situations sociales. Le partenariat et l\'équité sont au cœur de votre approche.'
    }
  },
  {
    name: 'Scorpio',
    symbol: '♏',
    sanskrit: 'Vrishchika',
    element: 'Water',
    ruler: 'Mars',
    description: {
      en: 'Scorpio rising creates an intense, magnetic, and deeply perceptive presence. You approach life with passion and determination, seeing beyond surface appearances. Your transformative nature draws profound experiences.',
      fr: 'L\'ascendant Scorpion crée une présence intense, magnétique et profondément perspicace. Vous abordez la vie avec passion et détermination, voyant au-delà des apparences superficielles. Votre nature transformatrice attire des expériences profondes.'
    }
  },
  {
    name: 'Sagittarius',
    symbol: '♐',
    sanskrit: 'Dhanu',
    element: 'Fire',
    ruler: 'Jupiter',
    description: {
      en: 'Sagittarius rising gives an optimistic, adventurous, and philosophical personality. You approach life as a journey of discovery, seeking truth and meaning. Your enthusiasm and humor are contagious.',
      fr: 'L\'ascendant Sagittaire donne une personnalité optimiste, aventurière et philosophique. Vous abordez la vie comme un voyage de découverte, cherchant la vérité et le sens. Votre enthousiasme et votre humour sont contagieux.'
    }
  },
  {
    name: 'Capricorn',
    symbol: '♑',
    sanskrit: 'Makara',
    element: 'Earth',
    ruler: 'Saturn',
    description: {
      en: 'Capricorn rising creates an ambitious, disciplined, and responsible presence. You approach life with seriousness and long-term planning, building toward lasting achievements. Your reliability earns deep respect.',
      fr: 'L\'ascendant Capricorne crée une présence ambitieuse, disciplinée et responsable. Vous abordez la vie avec sérieux et planification à long terme, construisant vers des réalisations durables. Votre fiabilité vous vaut un profond respect.'
    }
  },
  {
    name: 'Aquarius',
    symbol: '♒',
    sanskrit: 'Kumbha',
    element: 'Air',
    ruler: 'Saturn',
    description: {
      en: 'Aquarius rising gives an independent, innovative, and humanitarian personality. You approach life as a unique individual, often ahead of your time in thinking. Your progressive ideals inspire collective change.',
      fr: 'L\'ascendant Verseau donne une personnalité indépendante, innovante et humanitaire. Vous abordez la vie comme un individu unique, souvent en avance sur votre temps dans votre pensée. Vos idéaux progressistes inspirent le changement collectif.'
    }
  },
  {
    name: 'Pisces',
    symbol: '♓',
    sanskrit: 'Meena',
    element: 'Water',
    ruler: 'Jupiter',
    description: {
      en: 'Pisces rising creates a compassionate, imaginative, and spiritually attuned presence. You approach life with sensitivity and intuition, often absorbing the emotions of others. Your artistic and mystical nature seeks transcendence.',
      fr: 'L\'ascendant Poissons crée une présence compatissante, imaginative et spirituellement accordée. Vous abordez la vie avec sensibilité et intuition, absorbant souvent les émotions des autres. Votre nature artistique et mystique cherche la transcendance.'
    }
  },
]

export interface ZodiacSign {
  name: string
  symbol: string
  sanskrit: string
  element: string
  ruler: string
  description: { en: string; fr: string }
}

export function getZodiacSignData(index: number): ZodiacSign {
  return ZODIAC_SIGNS[index]
}

export interface AscendantResult {
  tropical: {
    absoluteDegrees: number
    signIndex: number
    signName: string
    signSymbol: string
    signSanskrit: string
    degreesInSign: number
    minutes: number
  }
  sidereal: {
    absoluteDegrees: number
    signIndex: number
    signName: string
    signSymbol: string
    signSanskrit: string
    degreesInSign: number
    minutes: number
  }
  ayanamsa: number
  nakshatra: {
    index: number
    name: string
    pada: number
    lord: string
    deity: string
  }
}

/**
 * Calculate Julian Day from date and time
 * @param year - Full year (e.g., 1990)
 * @param month - Month (1-12)
 * @param day - Day of month
 * @param hour - Hour in 24h format
 * @param minute - Minutes
 * @param utcOffset - UTC offset in hours (e.g., -5 for EST, 5.5 for IST)
 */
export function calculateJulianDay(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  utcOffset: number = 0
): number {
  // Convert local time to UT
  const utHour = hour - utcOffset + minute / 60

  // Adjust for January/February
  let y = year
  let m = month
  if (month <= 2) {
    y = year - 1
    m = month + 12
  }

  // Calculate Julian Day
  const A = Math.floor(y / 100)
  const B = 2 - A + Math.floor(A / 4)

  const JD = Math.floor(365.25 * (y + 4716)) +
             Math.floor(30.6001 * (m + 1)) +
             day + utHour / 24 + B - 1524.5

  return JD
}

/**
 * Calculate Greenwich Mean Sidereal Time
 * @param jd - Julian Day
 * @returns GMST in degrees (0-360)
 */
export function calculateGMST(jd: number): number {
  const T = (jd - 2451545.0) / 36525

  // GMST at 0h UT in degrees
  let gmst = 280.46061837 +
             360.98564736629 * (jd - 2451545.0) +
             0.000387933 * T * T -
             T * T * T / 38710000

  // Normalize to 0-360
  gmst = gmst % 360
  if (gmst < 0) gmst += 360

  return gmst
}

/**
 * Calculate Local Sidereal Time
 * @param gmst - Greenwich Mean Sidereal Time in degrees
 * @param longitude - Geographic longitude (positive = East)
 * @returns LST in degrees (0-360)
 */
export function calculateLST(gmst: number, longitude: number): number {
  let lst = gmst + longitude
  lst = lst % 360
  if (lst < 0) lst += 360
  return lst
}

/**
 * Calculate the obliquity of the ecliptic for a given Julian Day
 * @param jd - Julian Day
 * @returns Obliquity in degrees
 */
export function calculateObliquity(jd: number): number {
  const T = (jd - 2451545.0) / 36525
  const eps = MEAN_OBLIQUITY - 0.013004167 * T - 0.0000001639 * T * T + 0.0000005036 * T * T * T
  return eps
}

/**
 * Calculate Tropical Ascendant
 * @param lst - Local Sidereal Time in degrees
 * @param latitude - Geographic latitude
 * @param obliquity - Obliquity of ecliptic in degrees
 * @returns Ascendant in absolute degrees (0-360)
 */
export function calculateTropicalAscendant(
  lst: number,
  latitude: number,
  obliquity: number
): number {
  const lstRad = lst * DEG_TO_RAD
  const latRad = latitude * DEG_TO_RAD
  const oblRad = obliquity * DEG_TO_RAD

  // Calculate ascendant using the standard formula
  const y = -Math.cos(lstRad)
  const x = Math.sin(oblRad) * Math.tan(latRad) + Math.cos(oblRad) * Math.sin(lstRad)

  let asc = Math.atan2(y, x) * RAD_TO_DEG

  // Normalize to 0-360
  asc = asc % 360
  if (asc < 0) asc += 360

  return asc
}

/**
 * Calculate Lahiri Ayanamsa for a given Julian Day
 * Lahiri ayanamsa is based on the vernal equinox being at 0° Aries in 285 AD
 * @param jd - Julian Day
 * @returns Ayanamsa in degrees
 */
export function getLahiriAyanamsa(jd: number): number {
  // Reference: Lahiri ayanamsa on Jan 1, 2000 (JD 2451545.0) is approximately 23.85306°
  // Precession rate: approximately 50.29 arcseconds per year
  const J2000 = 2451545.0
  const baseAyanamsa = 23.85306
  const precessionRate = 50.29 / 3600 // Convert arcseconds to degrees

  const years = (jd - J2000) / 365.25
  const ayanamsa = baseAyanamsa + years * precessionRate

  return ayanamsa
}

/**
 * Convert tropical degrees to sidereal
 * @param tropicalDegrees - Tropical longitude in degrees
 * @param ayanamsa - Ayanamsa value in degrees
 * @returns Sidereal longitude in degrees (0-360)
 */
export function tropicalToSidereal(tropicalDegrees: number, ayanamsa: number): number {
  let sidereal = tropicalDegrees - ayanamsa
  if (sidereal < 0) sidereal += 360
  return sidereal
}

/**
 * Get zodiac sign information from absolute degrees
 * @param degrees - Absolute degrees (0-360)
 * @returns Sign information
 */
export function getZodiacSign(degrees: number): {
  signIndex: number
  signName: string
  signSymbol: string
  signSanskrit: string
  degreesInSign: number
  minutes: number
} {
  const normalizedDegrees = ((degrees % 360) + 360) % 360
  const signIndex = Math.floor(normalizedDegrees / 30)
  const degreesInSign = normalizedDegrees % 30
  const wholeDegrees = Math.floor(degreesInSign)
  const minutes = Math.round((degreesInSign - wholeDegrees) * 60)

  const sign = ZODIAC_SIGNS[signIndex]

  return {
    signIndex,
    signName: sign.name,
    signSymbol: sign.symbol,
    signSanskrit: sign.sanskrit,
    degreesInSign: wholeDegrees,
    minutes,
  }
}

/**
 * Get Nakshatra information from sidereal degrees
 * @param siderealDegrees - Sidereal longitude in degrees
 * @returns Nakshatra information
 */
export function getNakshatraInfo(siderealDegrees: number): {
  index: number
  name: string
  pada: number
  lord: string
  deity: string
} {
  const NAKSHATRA_SPAN = 360 / 27 // 13.333... degrees
  const PADA_SPAN = NAKSHATRA_SPAN / 4 // 3.333... degrees

  const normalizedDegrees = ((siderealDegrees % 360) + 360) % 360
  const nakshatraIndex = Math.floor(normalizedDegrees / NAKSHATRA_SPAN)
  const degreesInNakshatra = normalizedDegrees % NAKSHATRA_SPAN
  const pada = Math.floor(degreesInNakshatra / PADA_SPAN) + 1

  // Nakshatra data
  const NAKSHATRAS = [
    { name: 'Ashwini', lord: 'Ketu', deity: 'Ashwini Kumaras' },
    { name: 'Bharani', lord: 'Venus', deity: 'Yama' },
    { name: 'Krittika', lord: 'Sun', deity: 'Agni' },
    { name: 'Rohini', lord: 'Moon', deity: 'Brahma' },
    { name: 'Mrigashira', lord: 'Mars', deity: 'Soma' },
    { name: 'Ardra', lord: 'Rahu', deity: 'Rudra' },
    { name: 'Punarvasu', lord: 'Jupiter', deity: 'Aditi' },
    { name: 'Pushya', lord: 'Saturn', deity: 'Brihaspati' },
    { name: 'Ashlesha', lord: 'Mercury', deity: 'Nagas' },
    { name: 'Magha', lord: 'Ketu', deity: 'Pitris' },
    { name: 'Purva Phalguni', lord: 'Venus', deity: 'Bhaga' },
    { name: 'Uttara Phalguni', lord: 'Sun', deity: 'Aryaman' },
    { name: 'Hasta', lord: 'Moon', deity: 'Savitar' },
    { name: 'Chitra', lord: 'Mars', deity: 'Vishvakarma' },
    { name: 'Swati', lord: 'Rahu', deity: 'Vayu' },
    { name: 'Vishakha', lord: 'Jupiter', deity: 'Indra-Agni' },
    { name: 'Anuradha', lord: 'Saturn', deity: 'Mitra' },
    { name: 'Jyeshtha', lord: 'Mercury', deity: 'Indra' },
    { name: 'Mula', lord: 'Ketu', deity: 'Nirriti' },
    { name: 'Purva Ashadha', lord: 'Venus', deity: 'Apas' },
    { name: 'Uttara Ashadha', lord: 'Sun', deity: 'Vishvadevas' },
    { name: 'Shravana', lord: 'Moon', deity: 'Vishnu' },
    { name: 'Dhanishta', lord: 'Mars', deity: 'Vasus' },
    { name: 'Shatabhisha', lord: 'Rahu', deity: 'Varuna' },
    { name: 'Purva Bhadrapada', lord: 'Jupiter', deity: 'Aja Ekapada' },
    { name: 'Uttara Bhadrapada', lord: 'Saturn', deity: 'Ahir Budhnya' },
    { name: 'Revati', lord: 'Mercury', deity: 'Pushan' },
  ]

  const nakshatra = NAKSHATRAS[nakshatraIndex]

  return {
    index: nakshatraIndex,
    name: nakshatra.name,
    pada,
    lord: nakshatra.lord,
    deity: nakshatra.deity,
  }
}

/**
 * Main function to calculate complete ascendant data
 * @param birthDate - Birth date string (YYYY-MM-DD)
 * @param birthTime - Birth time string (HH:MM)
 * @param latitude - Geographic latitude
 * @param longitude - Geographic longitude
 * @param utcOffset - UTC offset in hours
 * @returns Complete ascendant result with tropical, sidereal, and nakshatra info
 */
export function calculateAscendant(
  birthDate: string,
  birthTime: string,
  latitude: number,
  longitude: number,
  utcOffset: number = 0
): AscendantResult {
  // Parse date and time
  const [year, month, day] = birthDate.split('-').map(Number)
  const [hour, minute] = birthTime.split(':').map(Number)

  // Calculate Julian Day
  const jd = calculateJulianDay(year, month, day, hour, minute, utcOffset)

  // Calculate sidereal time
  const gmst = calculateGMST(jd)
  const lst = calculateLST(gmst, longitude)

  // Calculate obliquity
  const obliquity = calculateObliquity(jd)

  // Calculate tropical ascendant
  const tropicalAsc = calculateTropicalAscendant(lst, latitude, obliquity)

  // Get Lahiri ayanamsa
  const ayanamsa = getLahiriAyanamsa(jd)

  // Calculate sidereal ascendant
  const siderealAsc = tropicalToSidereal(tropicalAsc, ayanamsa)

  // Get sign information
  const tropicalSign = getZodiacSign(tropicalAsc)
  const siderealSign = getZodiacSign(siderealAsc)

  // Get nakshatra information
  const nakshatra = getNakshatraInfo(siderealAsc)

  return {
    tropical: {
      absoluteDegrees: tropicalAsc,
      ...tropicalSign,
    },
    sidereal: {
      absoluteDegrees: siderealAsc,
      ...siderealSign,
    },
    ayanamsa,
    nakshatra,
  }
}

/**
 * Format degrees as degrees and minutes string
 */
export function formatDegrees(degrees: number, minutes: number): string {
  return `${degrees}°${minutes.toString().padStart(2, '0')}'`
}
