import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const latitude = searchParams.get('latitude')
  const longitude = searchParams.get('longitude')

  if (!latitude || !longitude) {
    return NextResponse.json(
      { error: 'latitude and longitude are required' },
      { status: 400 }
    )
  }

  try {
    // Try TimeAPI.io first
    const response = await fetch(
      `https://timeapi.io/api/timezone/coordinate?latitude=${latitude}&longitude=${longitude}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`TimeAPI error: ${response.status}`)
    }

    const data = await response.json()

    // Parse the timezone offset
    let offsetHours = 0

    if (data.currentUtcOffset) {
      if (typeof data.currentUtcOffset.seconds === 'number') {
        offsetHours = data.currentUtcOffset.seconds / 3600
      } else if (typeof data.currentUtcOffset === 'string') {
        // Handle format like "+01:00" or "-05:00"
        const match = data.currentUtcOffset.match(/([+-])(\d{2}):(\d{2})/)
        if (match) {
          const sign = match[1] === '+' ? 1 : -1
          const hours = parseInt(match[2], 10)
          const minutes = parseInt(match[3], 10)
          offsetHours = sign * (hours + minutes / 60)
        }
      }
    }

    return NextResponse.json({
      timezone: data.timeZone,
      offset: offsetHours,
      currentTime: data.currentLocalTime,
    })
  } catch (error) {
    console.error('Timezone API error:', error)

    // Fallback: estimate from longitude
    const lng = parseFloat(longitude)
    const estimatedOffset = Math.round(lng / 15)

    return NextResponse.json({
      timezone: 'estimated',
      offset: estimatedOffset,
      estimated: true,
    })
  }
}
