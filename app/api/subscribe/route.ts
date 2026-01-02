import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    console.log('New subscriber:', email)

    // ConvertKit Integration - Tag-based subscription
    const convertKitApiSecret = process.env.CONVERTKIT_API_SECRET
    const convertKitTagId = process.env.CONVERTKIT_TAG_ID || '13994780' // nakshatra-guide tag

    if (convertKitApiSecret) {
      const ckResponse = await fetch(
        `https://api.convertkit.com/v3/tags/${convertKitTagId}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_secret: convertKitApiSecret,
            email: email,
          }),
        }
      )

      if (!ckResponse.ok) {
        const errorData = await ckResponse.json()
        console.error('ConvertKit error:', errorData)
        return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
      }

      const ckData = await ckResponse.json()
      console.log('ConvertKit subscription successful:', ckData.subscription?.subscriber?.id)
    } else {
      console.warn('ConvertKit not configured - CONVERTKIT_API_SECRET required')
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
