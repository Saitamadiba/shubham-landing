import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const PRODUCTS = {
  essential: {
    name: 'Shubham Method - Essential Report',
    description: '5-Phase Vedic Astrology Analysis (25+ pages)',
    price: 6700, // in cents
  },
  complete: {
    name: 'Shubham Method - Complete Report',
    description: '14-Phase Full Shubham Method Analysis (80+ pages)',
    price: 19700,
  },
  premium: {
    name: 'Shubham Method - Premium Package',
    description: 'Complete Report + 60-min Video Consultation',
    price: 49700,
  },
}

export async function POST(request: Request) {
  try {
    const { plan, email, birthData } = await request.json()

    const product = PRODUCTS[plan as keyof typeof PRODUCTS]

    if (!product) {
      return NextResponse.json({ error: 'Invalid plan selected' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
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
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
