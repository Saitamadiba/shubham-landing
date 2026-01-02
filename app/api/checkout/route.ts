import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Stripe Price IDs - created via API
const PRICE_IDS = {
  essential: process.env.STRIPE_PRICE_ESSENTIAL || 'price_1SlFF3BTRJszg4YGWURFFCAN',
  complete: process.env.STRIPE_PRICE_COMPLETE || 'price_1SlFF8BTRJszg4YG9IRMvY9x',
  premium: process.env.STRIPE_PRICE_PREMIUM || 'price_1SlFFIBTRJszg4YG4el0W7s5',
}

export async function POST(request: Request) {
  try {
    const { plan, email, birthData } = await request.json()

    const priceId = PRICE_IDS[plan as keyof typeof PRICE_IDS]

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid plan selected' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#pricing`,
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
