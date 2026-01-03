import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import { OrganizationJsonLd, ServiceJsonLd, FAQJsonLd, WebsiteJsonLd } from '@/components/JsonLd'

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
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <ServiceJsonLd />
        <FAQJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="font-rajdhani text-gray-100 antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
