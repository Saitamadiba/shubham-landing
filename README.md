# Shubham Method Landing Page

A modern, Vedic-Futuristic landing page for selling astrology reports using Next.js, Tailwind CSS, and Stripe.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file and add your Stripe keys
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Setup Stripe

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
3. Add keys to `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

## Deploy to Vercel

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

## Project Structure

```
shubham-landing/
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts      # Stripe checkout API
│   ├── success/
│   │   └── page.tsx          # Post-payment success page
│   ├── globals.css           # Global styles + Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main landing page
├── components/
│   └── CheckoutModal.tsx     # Birth data collection modal
├── public/                   # Static assets
├── .env.example              # Environment template
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Customization

### Colors (tailwind.config.js)
- `sacred-gold`: #d4af37 - Primary accent
- `saffron`: #ff9933 - Secondary accent
- `neon-cyan`: #00e5cc - Tertiary accent
- `primary`: #14141f - Background

### Pricing (app/page.tsx)
Edit the `pricingPlans` array to change products and prices.

### Stripe Products (app/api/checkout/route.ts)
Update the `PRODUCTS` object to match your pricing.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Payments**: Stripe Checkout
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Cinzel + Rajdhani

## License

Private - All rights reserved.
