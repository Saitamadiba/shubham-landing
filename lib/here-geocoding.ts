// HERE Geocoding API integration for location autocomplete

const HERE_API_KEY = 'Tev_mnC4SQhRKutsjH-ae72qg0wx14w0BkBemWFsLMM'

export interface LocationResult {
  id: string
  title: string
  address: string
  city: string
  country: string
  latitude: number
  longitude: number
  timezone?: string
}

export interface AutocompleteResult {
  items: LocationResult[]
}

/**
 * Search for locations using HERE Autocomplete API
 * @param query - Search query string
 * @param limit - Maximum number of results (default 5)
 * @returns Array of location results
 */
export async function searchLocations(
  query: string,
  limit: number = 5
): Promise<LocationResult[]> {
  if (!query || query.length < 2) {
    return []
  }

  try {
    const params = new URLSearchParams({
      q: query,
      limit: limit.toString(),
      apiKey: HERE_API_KEY,
      // Required: geographic context (using 0,0 for global search)
      at: '0,0',
    })

    const response = await fetch(
      `https://autosuggest.search.hereapi.com/v1/autosuggest?${params}`
    )

    if (!response.ok) {
      throw new Error(`HERE API error: ${response.status}`)
    }

    const data = await response.json()

    // Transform HERE API response to our format
    const results: LocationResult[] = data.items
      ?.filter((item: any) => item.position) // Only items with coordinates
      .map((item: any) => ({
        id: item.id,
        title: item.title,
        address: item.address?.label || item.title,
        city: item.address?.city || item.address?.county || '',
        country: item.address?.countryName || item.address?.countryCode || '',
        latitude: item.position.lat,
        longitude: item.position.lng,
      })) || []

    return results
  } catch (error) {
    console.error('HERE geocoding error:', error)
    return []
  }
}

/**
 * Get timezone for a location using HERE API
 * Note: HERE doesn't provide timezone directly, we estimate from longitude
 * For accurate timezone, you might want to use a dedicated timezone API
 * @param latitude - Location latitude
 * @param longitude - Location longitude
 * @returns Estimated UTC offset in hours
 */
export function estimateTimezoneOffset(longitude: number): number {
  // Simple estimation: 15 degrees = 1 hour
  // This doesn't account for DST or political timezone boundaries
  return Math.round(longitude / 15)
}

/**
 * Get full location details using HERE Lookup API
 * @param locationId - HERE location ID
 * @returns Location details
 */
export async function getLocationDetails(
  locationId: string
): Promise<LocationResult | null> {
  try {
    const params = new URLSearchParams({
      id: locationId,
      apiKey: HERE_API_KEY,
    })

    const response = await fetch(
      `https://lookup.search.hereapi.com/v1/lookup?${params}`
    )

    if (!response.ok) {
      throw new Error(`HERE API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.position) {
      return null
    }

    return {
      id: data.id,
      title: data.title,
      address: data.address?.label || data.title,
      city: data.address?.city || data.address?.county || '',
      country: data.address?.countryName || data.address?.countryCode || '',
      latitude: data.position.lat,
      longitude: data.position.lng,
      timezone: undefined, // HERE doesn't provide timezone
    }
  } catch (error) {
    console.error('HERE lookup error:', error)
    return null
  }
}

/**
 * Geocode a location by text query (get first result)
 * @param query - Location search string
 * @returns Location result or null
 */
export async function geocodeLocation(
  query: string
): Promise<LocationResult | null> {
  const results = await searchLocations(query, 1)
  return results.length > 0 ? results[0] : null
}

/**
 * Common timezone offsets for major regions
 * Used as a fallback when precise timezone detection isn't available
 */
export const COMMON_TIMEZONES: Record<string, number> = {
  // Americas
  'New York': -5,
  'Los Angeles': -8,
  'Chicago': -6,
  'Toronto': -5,
  'Mexico City': -6,
  'São Paulo': -3,
  'Buenos Aires': -3,

  // Europe
  'London': 0,
  'Paris': 1,
  'Berlin': 1,
  'Rome': 1,
  'Madrid': 1,
  'Moscow': 3,

  // Asia
  'Dubai': 4,
  'Mumbai': 5.5,
  'Delhi': 5.5,
  'Kolkata': 5.5,
  'Chennai': 5.5,
  'Bangkok': 7,
  'Singapore': 8,
  'Hong Kong': 8,
  'Tokyo': 9,
  'Seoul': 9,
  'Shanghai': 8,
  'Beijing': 8,

  // Oceania
  'Sydney': 10,
  'Melbourne': 10,
  'Auckland': 12,

  // Africa
  'Cairo': 2,
  'Johannesburg': 2,
  'Lagos': 1,
}

/**
 * Try to match a city name to get its timezone
 * @param cityName - Name of the city
 * @returns UTC offset in hours or null if not found
 */
export function getTimezoneForCity(cityName: string): number | null {
  const normalizedCity = cityName.toLowerCase().trim()

  for (const [city, offset] of Object.entries(COMMON_TIMEZONES)) {
    if (normalizedCity.includes(city.toLowerCase())) {
      return offset
    }
  }

  return null
}

/**
 * Get timezone offset from coordinates using our API route (avoids CORS)
 * @param latitude - Location latitude
 * @param longitude - Location longitude
 * @returns UTC offset in hours
 */
export async function getTimezoneFromCoordinates(
  latitude: number,
  longitude: number
): Promise<number> {
  try {
    // Use our own API route to avoid CORS issues
    const response = await fetch(
      `/api/timezone?latitude=${latitude}&longitude=${longitude}`
    )

    if (!response.ok) {
      throw new Error(`Timezone API error: ${response.status}`)
    }

    const data = await response.json()
    return data.offset ?? estimateTimezoneOffset(longitude)
  } catch (error) {
    console.error('Timezone lookup error:', error)
    // Fallback to longitude-based estimation
    return estimateTimezoneOffset(longitude)
  }
}
