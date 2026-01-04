import { NextResponse } from 'next/server'

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

// Convert degrees to radians
const toRadians = (deg: number): number => deg * Math.PI / 180

// Convert radians to degrees
const toDegrees = (rad: number): number => rad * 180 / Math.PI

// Normalize angle to 0-360 range
const normalizeAngle = (angle: number): number => {
  let result = angle % 360
  if (result < 0) result += 360
  return result
}

function degreesToDMS(degrees: number): string {
  const d = Math.floor(degrees)
  const m = Math.floor((degrees - d) * 60)
  const s = Math.floor(((degrees - d) * 60 - m) * 60)
  return `${d}°${m.toString().padStart(2, '0')}'${s.toString().padStart(2, '0')}"`
}

function getNakshatra(longitude: number): { name: string; pada: number } {
  const nakshatraSpan = 360 / 27 // 13.333... degrees
  const nakshatraIndex = Math.floor(normalizeAngle(longitude) / nakshatraSpan) % 27
  const pada = Math.floor((normalizeAngle(longitude) % nakshatraSpan) / (nakshatraSpan / 4)) + 1
  return {
    name: NAKSHATRA_NAMES[nakshatraIndex],
    pada: Math.min(pada, 4)
  }
}

/**
 * Calculate Julian Day Number
 * Based on the algorithm from Astronomical Algorithms by Jean Meeus
 */
function calculateJulianDay(year: number, month: number, day: number, ut: number): number {
  let y = year
  let m = month

  if (m <= 2) {
    y -= 1
    m += 12
  }

  const a = Math.floor(y / 100)
  const b = 2 - a + Math.floor(a / 4)

  const jd = Math.floor(365.25 * (y + 4716)) +
             Math.floor(30.6001 * (m + 1)) +
             day + ut / 24 + b - 1524.5

  return jd
}

/**
 * Calculate Greenwich Mean Sidereal Time in degrees
 */
function calculateGMST(jd: number): number {
  const T = (jd - 2451545.0) / 36525.0

  // GMST at 0h UT in degrees
  let gmst = 280.46061837 +
             360.98564736629 * (jd - 2451545.0) +
             0.000387933 * T * T -
             T * T * T / 38710000.0

  return normalizeAngle(gmst)
}

/**
 * Calculate the mean obliquity of the ecliptic
 */
function calculateObliquity(jd: number): number {
  const T = (jd - 2451545.0) / 36525.0

  // Mean obliquity (IAU 2006)
  const eps0 = 23.439291111 -
               0.0130042 * T -
               0.00000016 * T * T +
               0.000000504 * T * T * T

  return eps0
}

/**
 * Calculate Lahiri Ayanamsa
 * Based on the formula: ayanamsa = 23.85 + (JD - 2451545) * 50.29 / 36525 / 3600
 */
function calculateLahiriAyanamsa(jd: number): number {
  // Lahiri ayanamsa reference: 23°51'11" on Jan 1, 2000 (JD 2451545)
  // Precession rate: approximately 50.29 arcseconds per year
  const T = (jd - 2451545.0) / 36525.0

  // More accurate Lahiri formula
  const ayanamsa = 23.85306 + (50.29 * T * 100) / 3600

  return ayanamsa
}

/**
 * Calculate the Ascendant using the standard formula
 * tan(ASC) = cos(RAMC) / -(sin(ε)tan(φ) + cos(ε)sin(RAMC))
 */
function calculateAscendantDegrees(lst: number, latitude: number, obliquity: number): number {
  const lstRad = toRadians(lst)
  const latRad = toRadians(latitude)
  const oblRad = toRadians(obliquity)

  // RAMC (Right Ascension of MC) = LST
  const ramc = lstRad

  // Calculate ascendant
  const sinObl = Math.sin(oblRad)
  const cosObl = Math.cos(oblRad)
  const tanLat = Math.tan(latRad)
  const sinRAMC = Math.sin(ramc)
  const cosRAMC = Math.cos(ramc)

  const y = cosRAMC
  const x = -(sinObl * tanLat + cosObl * sinRAMC)

  let asc = toDegrees(Math.atan2(y, x))

  // Normalize to 0-360
  asc = normalizeAngle(asc)

  return asc
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
  let adjustedYear = year
  let adjustedMonth = month
  let adjustedDay = day

  // Handle day overflow/underflow
  if (ut < 0) {
    ut += 24
    adjustedDay -= 1
    if (adjustedDay < 1) {
      adjustedMonth -= 1
      if (adjustedMonth < 1) {
        adjustedMonth = 12
        adjustedYear -= 1
      }
      // Get days in previous month
      const daysInMonth = new Date(adjustedYear, adjustedMonth, 0).getDate()
      adjustedDay = daysInMonth
    }
  } else if (ut >= 24) {
    ut -= 24
    adjustedDay += 1
    const daysInMonth = new Date(adjustedYear, adjustedMonth, 0).getDate()
    if (adjustedDay > daysInMonth) {
      adjustedDay = 1
      adjustedMonth += 1
      if (adjustedMonth > 12) {
        adjustedMonth = 1
        adjustedYear += 1
      }
    }
  }

  // Calculate Julian Day
  const jd = calculateJulianDay(adjustedYear, adjustedMonth, adjustedDay, ut)

  // Calculate GMST
  const gmst = calculateGMST(jd)

  // Calculate Local Sidereal Time (LST)
  // LST = GMST + longitude (in degrees)
  const lst = normalizeAngle(gmst + longitude)

  // Calculate obliquity
  const obliquity = calculateObliquity(jd)

  // Calculate TROPICAL ascendant
  const tropicalAsc = calculateAscendantDegrees(lst, latitude, obliquity)

  const tropicalSignIndex = Math.floor(tropicalAsc / 30) % 12
  const tropicalDegreeInSign = tropicalAsc % 30
  const tropicalNakshatra = getNakshatra(tropicalAsc)

  // Calculate Lahiri ayanamsa
  const ayanamsa = calculateLahiriAyanamsa(jd)

  // Calculate SIDEREAL ascendant
  const siderealAsc = normalizeAngle(tropicalAsc - ayanamsa)

  const siderealSignIndex = Math.floor(siderealAsc / 30) % 12
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
