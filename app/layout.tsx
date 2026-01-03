import type { Metadata } from 'next'
import { Cinzel, Rajdhani } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import { OrganizationJsonLd, ServiceJsonLd, FAQJsonLd, WebsiteJsonLd, PersonJsonLd, ReviewJsonLd } from '@/components/JsonLd'
import { WebVitals } from '@/components/WebVitals'
import { GoogleAnalytics } from '@/components/Analytics'
import { CookieConsent } from '@/components/CookieConsent'

// Optimized font loading with next/font - eliminates render-blocking CSS
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cinzel',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rajdhani',
})

const BASE_URL = 'https://shubham-landing.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Shubham Method | Professional Vedic Astrology Reports',
    template: '%s | Shubham Method',
  },
  description: 'Discover your cosmic blueprint with the Shubham Method - a comprehensive 14-phase Vedic astrology analysis. Get your personalized birth chart interpretation today.',
  keywords: [
    'vedic astrology',
    'jyotish',
    'birth chart',
    'horoscope',
    'nakshatra',
    'dasha',
    'yoga analysis',
    'vedic astrology report',
    'birth chart analysis',
    'jyotish consultation',
    'nakshatra reading',
    'vedic horoscope online',
  ],
  authors: [{ name: 'Shubham Method' }],
  creator: 'Shubham Method',
  publisher: 'Shubham Method',
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': BASE_URL,
      'fr': `${BASE_URL}?lang=fr`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    url: BASE_URL,
    siteName: 'Shubham Method',
    title: 'Shubham Method | Professional Vedic Astrology Reports',
    description: 'Discover your cosmic blueprint with comprehensive 14-phase Vedic astrology analysis. Ancient wisdom meets modern clarity.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shubham Method - Vedic Astrology Reports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Method | Professional Vedic Astrology Reports',
    description: 'Discover your cosmic blueprint with comprehensive 14-phase Vedic astrology analysis.',
    images: ['/og-image.png'],
    creator: '@shubhammethod',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console - Add your verification code from:
    // https://search.google.com/search-console → Settings → Ownership verification
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    // Bing Webmaster Tools
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${rajdhani.variable}`}>
      <head>
        {/* Performance hints for faster resource loading */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://js.stripe.com" />
        <link rel="dns-prefetch" href="https://api.stripe.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data */}
        <OrganizationJsonLd />
        <ServiceJsonLd />
        <FAQJsonLd />
        <WebsiteJsonLd />
        <PersonJsonLd />
        <ReviewJsonLd />
      </head>
      <body className={`${rajdhani.className} text-gray-100 antialiased`}>
        <GoogleAnalytics />
        <WebVitals />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <CookieConsent />
      </body>
    </html>
  )
}
