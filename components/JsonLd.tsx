export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shubham Method',
    url: 'https://shubham-landing.vercel.app',
    logo: 'https://shubham-landing.vercel.app/logo.png',
    description: 'Professional Vedic Astrology Reports using the comprehensive 14-phase Shubham Method analysis.',
    email: 'Vedastro@pm.me',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'Vedastro@pm.me',
      contactType: 'customer service',
      availableLanguage: ['English', 'French'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ServiceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Vedic Astrology Consultation',
    provider: {
      '@type': 'Organization',
      name: 'Shubham Method',
    },
    name: 'Vedic Astrology Birth Chart Analysis',
    description: 'Comprehensive 14-phase Vedic astrology analysis including Nakshatra wisdom, Dasha timing, Yoga detection, and personalized guidance.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Essential Report',
        description: '5-phase analysis with birth chart, planetary positions, major yoga detection, and Nakshatra analysis. PDF report (25+ pages).',
        price: '67',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Complete Report',
        description: 'Full 14-phase Shubham Method analysis with all Varga charts, Dasha timing, career & marriage analysis, and remedial recommendations. PDF report (80+ pages).',
        price: '197',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Premium Report',
        description: 'Complete analysis plus 60-min video consultation, personalized Q&A session, custom remedial plan, and 30-day email support.',
        price: '497',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Shubham Method?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Shubham Method is a comprehensive 14-phase Vedic astrology analysis system that combines traditional Jyotish wisdom with systematic interpretation. It covers everything from basic planetary positions to deep psychological patterns and life timing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is Vedic Astrology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vedic astrology (Jyotish) has been practiced for over 5,000 years. While we present this as guidance rather than prediction, many find the insights remarkably aligned with their life experiences. We use precise astronomical calculations with the Lahiri ayanamsa.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information do I need to provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will need your exact birth date, birth time (as accurate as possible), and birth location. The more precise your birth time, the more accurate your analysis will be.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long until I receive my report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Essential reports are delivered within 24-48 hours. Complete reports take 2-3 business days. Premium consultations are scheduled within 5-7 days of purchase.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my information kept private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Your birth data is used solely for generating your report and is never shared with third parties. We take privacy seriously and comply with GDPR regulations.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shubham Method',
    url: 'https://shubham-landing.vercel.app',
    description: 'Professional Vedic Astrology Reports - Discover your cosmic blueprint with the comprehensive 14-phase Shubham Method analysis.',
    inLanguage: ['en', 'fr'],
    publisher: {
      '@type': 'Organization',
      name: 'Shubham Method',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Person schema for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * Helps Google understand the author's credentials
 */
export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://shubham-landing.vercel.app/#author',
    name: 'Shubham Alock',
    jobTitle: 'Vedic Astrologer',
    description: 'Expert Vedic astrologer and creator of the 14-phase Shubham Method for comprehensive birth chart analysis. Specializes in Nakshatra wisdom, Dasha timing, and life purpose guidance.',
    url: 'https://shubham-landing.vercel.app',
    worksFor: {
      '@type': 'Organization',
      name: 'Shubham Method',
    },
    knowsAbout: [
      'Vedic Astrology',
      'Jyotish',
      'Nakshatra Analysis',
      'Dasha System',
      'Birth Chart Interpretation',
      'Yoga Detection',
      'Varga Charts',
    ],
    sameAs: [
      'https://twitter.com/shubhammethod',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * AggregateRating and Review schema for social proof
 * Displays star ratings in search results
 */
export function ReviewJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Shubham Method Vedic Astrology Report',
    description: 'Comprehensive 14-phase Vedic astrology analysis including birth chart interpretation, Nakshatra wisdom, Dasha timing, and personalized guidance.',
    brand: {
      '@type': 'Brand',
      name: 'Shubham Method',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127',
      reviewCount: '89',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah M.',
        },
        datePublished: '2024-11-15',
        reviewBody: 'The depth of insight in my Complete Report was remarkable. The Nakshatra analysis helped me understand patterns I have struggled with for years.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael R.',
        },
        datePublished: '2024-10-28',
        reviewBody: 'As someone skeptical of astrology, I was impressed by the precision and practical guidance. The Dasha timing predictions were incredibly accurate.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Priya K.',
        },
        datePublished: '2024-12-02',
        reviewBody: 'The Premium consultation exceeded expectations. Shubham explained complex concepts clearly and provided actionable remedies.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '67',
      highPrice: '497',
      priceCurrency: 'USD',
      offerCount: '3',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
