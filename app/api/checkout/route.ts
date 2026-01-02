import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Stripe Price IDs - created via API
const PRICE_IDS: Record<string, string> = {
  essential: 'price_1SlFF3BTRJszg4YGWURFFCAN',
  complete: 'price_1SlFF8BTRJszg4YG9IRMvY9x',
  premium: 'price_1SlFFIBTRJszg4YG4el0W7s5',
}

export async function POST(request: Request) {
  try {
    // Initialize Stripe lazily to ensure env vars are available
    const stripeKey = process.env.STRIPE_SECRET_KEY
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }

    const stripe = new Stripe(stripeKey, {
      timeout: 30000,
      maxNetworkRetries: 3,
    })

    const { plan, email, birthData } = await request.json()

    const priceId = PRICE_IDS[plan]

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid plan selected' }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shubham-landing.vercel.app'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#pricing`,
      customer_email: email,
      metadata: {
        plan,
        birthData: JSON.stringify(birthData),
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Failed to create checkout session', details: errorMessage }, { status: 500 })
  }
}
