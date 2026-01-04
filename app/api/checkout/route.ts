import { NextResponse } from 'next/server'

// Stripe Price IDs - created via API
const PRICE_IDS: Record<string, string> = {
  essential: 'price_1SlFF3BTRJszg4YGWURFFCAN',
  complete: 'price_1SlFF8BTRJszg4YG9IRMvY9x',
  premium: 'price_1SlFFIBTRJszg4YG4el0W7s5',
}

export async function POST(request: Request) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }

    const { plan, email, birthData } = await request.json()

    const priceId = PRICE_IDS[plan]

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid plan selected' }, { status: 400 })
    }

    // Hardcode the base URL since env vars may not be available at runtime
    const baseUrl = 'https://vedastro-ten.vercel.app'

    // Use fetch API directly instead of Stripe SDK
    const formData = new URLSearchParams()
    formData.append('payment_method_types[0]', 'card')
    formData.append('line_items[0][price]', priceId)
    formData.append('line_items[0][quantity]', '1')
    formData.append('mode', 'payment')
    formData.append('success_url', `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`)
    formData.append('cancel_url', `${baseUrl}/#pricing`)
    formData.append('customer_email', email)
    formData.append('metadata[plan]', plan)
    formData.append('metadata[birthData]', JSON.stringify(birthData))

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Stripe API error:', errorData)
      return NextResponse.json({ error: 'Stripe API error', details: errorData }, { status: response.status })
    }

    const session = await response.json()
    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Failed to create checkout session', details: errorMessage }, { status: 500 })
  }
}
