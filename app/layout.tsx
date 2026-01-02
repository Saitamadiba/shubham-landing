import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Shubham Method | Professional Vedic Astrology Reports',
  description: 'Discover your cosmic blueprint with the Shubham Method - a comprehensive 14-phase Vedic astrology analysis. Get your personalized birth chart interpretation today.',
  keywords: 'vedic astrology, jyotish, birth chart, horoscope, nakshatra, dasha, yoga analysis',
  openGraph: {
    title: 'Shubham Method | Professional Vedic Astrology Reports',
    description: 'Discover your cosmic blueprint with comprehensive 14-phase Vedic astrology analysis',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-rajdhani text-gray-100 antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
