export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shubham Method',
    url: 'https://vedastro.vercel.app',
    logo: 'https://vedastro.vercel.app/logo.png',
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
    url: 'https://vedastro.vercel.app',
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
    '@id': 'https://vedastro.vercel.app/#author',
    name: 'Shubham Alock',
    jobTitle: 'Vedic Astrologer',
    description: 'Expert Vedic astrologer and creator of the 14-phase Shubham Method for comprehensive birth chart analysis. Specializes in Nakshatra wisdom, Dasha timing, and life purpose guidance.',
    url: 'https://vedastro.vercel.app',
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
 * LocalBusiness schema for Geneva/Switzerland local SEO
 * Helps Google understand service location for local search results
 */
export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://vedastro.vercel.app/#localbusiness',
    name: 'Shubham Method - Astrologie Védique Genève',
    alternateName: ['Shubham Method', 'Astrologie Védique Suisse', 'Vedic Astrology Geneva'],
    description: 'Service professionnel d\'astrologie védique à Genève et en Suisse romande. Analyse complète du thème astral selon la méthode Shubham en 14 phases.',
    url: 'https://vedastro.vercel.app',
    email: 'Vedastro@pm.me',
    priceRange: '$$',
    image: 'https://vedastro.vercel.app/og-image.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Genève',
      addressRegion: 'GE',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.2044,
      longitude: 6.1432,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Genève',
        '@id': 'https://www.wikidata.org/wiki/Q71',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Suisse romande',
      },
      {
        '@type': 'Country',
        name: 'Suisse',
        '@id': 'https://www.wikidata.org/wiki/Q39',
      },
      {
        '@type': 'Country',
        name: 'France',
      },
    ],
    serviceType: [
      'Astrologie védique',
      'Thème astral',
      'Consultation astrologique',
      'Analyse de naissance',
      'Vedic Astrology',
      'Birth Chart Analysis',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Rapports d\'astrologie védique',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rapport Essentiel',
            description: 'Analyse en 5 phases avec thème natal, positions planétaires et analyse Nakshatra.',
          },
          price: '67',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rapport Complet',
            description: 'Analyse complète en 14 phases selon la méthode Shubham avec tous les graphiques Varga.',
          },
          price: '197',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rapport Premium',
            description: 'Analyse complète plus consultation vidéo de 60 minutes et support par email.',
          },
          price: '497',
          priceCurrency: 'USD',
        },
      ],
    },
    knowsLanguage: ['fr', 'en'],
    availableLanguage: [
      {
        '@type': 'Language',
        name: 'Français',
        alternateName: 'fr',
      },
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
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

/**
 * French FAQ schema for Swiss/French speaking audience
 */
export function FAQFrenchJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Qu\'est-ce que la méthode Shubham ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La méthode Shubham est un système d\'analyse astrologique védique complet en 14 phases qui combine la sagesse traditionnelle du Jyotish avec une interprétation systématique. Elle couvre tout, des positions planétaires de base aux schémas psychologiques profonds et au timing de vie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des consultations d\'astrologie à Genève ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous offrons des consultations d\'astrologie védique pour les clients de Genève, de Suisse romande et du monde entier. Nos rapports sont disponibles en français et en anglais. Les consultations Premium incluent des sessions vidéo personnalisées.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle est la différence entre l\'astrologie védique et l\'astrologie occidentale ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'astrologie védique (Jyotish) utilise le zodiaque sidéral basé sur les positions réelles des étoiles, tandis que l\'astrologie occidentale utilise le zodiaque tropical. Le Jyotish intègre également les Nakshatras (27 constellations lunaires) et le système Dasha pour le timing des événements de vie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment calculez-vous mon ascendant ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous utilisons l\'ayanamsa Lahiri (Chitrapaksha) pour nos calculs sidéraux. Votre ascendant est calculé à partir de votre heure et lieu de naissance exacts en utilisant des algorithmes astronomiques précis. Utilisez notre calculateur gratuit pour découvrir votre ascendant.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps faut-il pour recevoir mon rapport ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les rapports Essentiels sont livrés sous 24-48 heures. Les rapports Complets prennent 2-3 jours ouvrables. Les consultations Premium sont planifiées dans les 5-7 jours suivant l\'achat.',
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
