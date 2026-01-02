import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    // For now, we'll log and return success
    // In production, you would:
    // 1. Add to Mailchimp: await mailchimp.lists.addListMember(listId, { email_address: email })
    // 2. Or ConvertKit: await fetch('https://api.convertkit.com/v3/forms/{form_id}/subscribe', ...)
    // 3. Or send via your own SMTP

    console.log('New subscriber:', email)

    // You can also store in a database or send to a webhook
    // Example webhook to Zapier/Make:
    if (process.env.WEBHOOK_URL) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'nakshatra-guide',
          timestamp: new Date().toISOString()
        }),
      }).catch(console.error)
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
