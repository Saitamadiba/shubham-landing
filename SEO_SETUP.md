# SEO Setup Guide - Shubham Method

This document contains all the configuration steps needed to complete the SEO setup for your Vedic Astrology website.

## Table of Contents
1. [Google Analytics 4 Setup](#google-analytics-4-setup)
2. [Google Search Console Setup](#google-search-console-setup)
3. [Environment Variables](#environment-variables)
4. [Vercel Configuration](#vercel-configuration)
5. [Monitoring Checklist](#monitoring-checklist)

---

## Google Analytics 4 Setup

### Step 1: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** (gear icon)
3. Click **Create Property**
4. Enter property name: "Shubham Method"
5. Select your timezone and currency
6. Choose **Web** as the platform
7. Enter your website URL: `https://shubham-landing.vercel.app`
8. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Configure Data Streams
1. In GA4, go to **Admin** → **Data Streams**
2. Click on your web stream
3. Enable **Enhanced Measurement** for:
   - Page views ✓
   - Scrolls ✓
   - Outbound clicks ✓
   - Site search ✓
   - Form interactions ✓
   - File downloads ✓

### Step 3: Set Up Conversions
In GA4, go to **Configure** → **Events** and mark these as conversions:
- `purchase` - When someone buys a report
- `begin_checkout` - When someone starts checkout
- `generate_lead` - When someone downloads guide/subscribes
- `select_plan` - When someone selects a pricing tier

---

## Google Search Console Setup

### Step 1: Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Choose **URL prefix** method
4. Enter: `https://shubham-landing.vercel.app`

### Step 2: Verify Ownership
1. Select **HTML tag** verification method
2. Copy the verification code (just the content value)
   - Example: `<meta name="google-site-verification" content="ABC123XYZ" />`
   - You need: `ABC123XYZ`
3. Add to your environment variables (see below)

### Step 3: Submit Sitemap
1. In Search Console, go to **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**

### Step 4: Request Indexing
1. Go to **URL Inspection**
2. Enter your homepage URL
3. Click **Request Indexing**
4. Repeat for key pages:
   - `/blog`
   - `/glossary`
   - `/guide`

---

## Environment Variables

Create a `.env.local` file in your project root with these variables:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code

# Stripe (existing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
```

---

## Vercel Configuration

### Add Environment Variables in Vercel
1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Production, Preview, Development |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `your-code` | Production |

5. Click **Save**
6. Redeploy your site for changes to take effect

---

## Monitoring Checklist

### Weekly Tasks
- [ ] Check Google Analytics for traffic trends
- [ ] Review Search Console for crawl errors
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Check for new backlinks

### Monthly Tasks
- [ ] Review keyword rankings
- [ ] Analyze top-performing content
- [ ] Check for broken links
- [ ] Update sitemap if new pages added
- [ ] Review and respond to any manual actions

### Quarterly Tasks
- [ ] Comprehensive SEO audit
- [ ] Competitor analysis
- [ ] Content gap analysis
- [ ] Schema markup validation
- [ ] Mobile usability review

---

## Key Metrics to Track

### Google Analytics
| Metric | Good | Warning | Action Needed |
|--------|------|---------|---------------|
| Bounce Rate | <50% | 50-70% | >70% |
| Avg. Session Duration | >2min | 1-2min | <1min |
| Pages per Session | >2 | 1.5-2 | <1.5 |
| Conversion Rate | >2% | 1-2% | <1% |

### Google Search Console
| Metric | Good | Warning | Action Needed |
|--------|------|---------|---------------|
| CTR | >3% | 1-3% | <1% |
| Avg. Position | <20 | 20-50 | >50 |
| Indexed Pages | All | 80%+ | <80% |
| Core Web Vitals | Green | Yellow | Red |

### Core Web Vitals Thresholds
| Metric | Good | Needs Work | Poor |
|--------|------|------------|------|
| LCP | <2.5s | 2.5-4s | >4s |
| INP | <200ms | 200-500ms | >500ms |
| CLS | <0.1 | 0.1-0.25 | >0.25 |

---

## Troubleshooting

### Analytics Not Tracking
1. Check if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
2. Verify user has accepted analytics cookies
3. Check browser console for errors
4. Use GA4 DebugView for real-time testing

### Search Console Issues
1. Verify sitemap is accessible at `/sitemap.xml`
2. Check robots.txt isn't blocking pages
3. Ensure pages have proper meta tags
4. Validate structured data at [Schema Validator](https://validator.schema.org/)

### Cookie Consent Issues
1. Clear localStorage and refresh
2. Check browser console for errors
3. Verify consent key: `cookie-consent`

---

## Useful Links

- [Google Analytics 4](https://analytics.google.com)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## Support

For technical issues with the SEO implementation, check:
1. Browser console for JavaScript errors
2. Network tab for failed requests
3. Vercel deployment logs

Contact: Vedastro@pm.me
