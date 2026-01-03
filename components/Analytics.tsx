'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

// Google Analytics Measurement ID - Replace with your actual ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

/**
 * Google Analytics 4 Integration
 *
 * Setup Instructions:
 * 1. Go to https://analytics.google.com
 * 2. Create a new GA4 property for your website
 * 3. Copy your Measurement ID (format: G-XXXXXXXXXX)
 * 4. Add to .env.local: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 5. Redeploy your site
 */

// Track page views
function usePageTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    // Send page view to GA4
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])
}

function AnalyticsTracker() {
  usePageTracking()
  return null
}

export function GoogleAnalytics() {
  // Don't render if no measurement ID
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure',
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  )
}

/**
 * Track custom events in Google Analytics
 *
 * Usage:
 * import { trackEvent } from '@/components/Analytics'
 * trackEvent('button_click', { button_name: 'Get Report' })
 */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params)
  }
}

/**
 * Pre-defined conversion events for the Shubham Method site
 */
export const AnalyticsEvents = {
  // Pricing interactions
  viewPricing: () => trackEvent('view_pricing', { section: 'pricing' }),
  selectPlan: (plan: string, price: number) =>
    trackEvent('select_plan', { plan_name: plan, value: price, currency: 'USD' }),

  // Checkout events
  beginCheckout: (plan: string, price: number) =>
    trackEvent('begin_checkout', { plan_name: plan, value: price, currency: 'USD' }),
  purchase: (plan: string, price: number, transactionId: string) =>
    trackEvent('purchase', {
      transaction_id: transactionId,
      plan_name: plan,
      value: price,
      currency: 'USD'
    }),

  // Lead generation
  downloadGuide: (guideName: string) =>
    trackEvent('generate_lead', { lead_type: 'guide_download', guide_name: guideName }),
  subscribeNewsletter: () =>
    trackEvent('generate_lead', { lead_type: 'newsletter' }),

  // Engagement
  readBlogPost: (slug: string, title: string) =>
    trackEvent('view_item', { item_id: slug, item_name: title, content_type: 'blog' }),
  shareContent: (platform: string, url: string) =>
    trackEvent('share', { method: platform, content_id: url }),
  scrollDepth: (percentage: number) =>
    trackEvent('scroll', { percent_scrolled: percentage }),

  // FAQ interactions
  expandFaq: (question: string) =>
    trackEvent('faq_expand', { question: question }),

  // Language preference
  changeLanguage: (language: string) =>
    trackEvent('select_language', { language: language }),
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export default GoogleAnalytics
