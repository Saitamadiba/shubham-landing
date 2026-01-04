import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Search, ArrowRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vedic Astrology Glossary | 100+ Jyotish Terms Explained',
  description: 'Comprehensive glossary of Vedic astrology terms. Learn the meaning of Nakshatra, Dasha, Yoga, Graha, Rashi, Bhava, and 100+ Jyotish concepts with clear definitions.',
  keywords: [
    'vedic astrology glossary',
    'jyotish terms',
    'nakshatra meaning',
    'dasha definition',
    'yoga astrology',
    'graha planets',
    'rashi zodiac signs',
    'bhava houses',
    'vedic astrology dictionary',
    'jyotish vocabulary',
  ],
  openGraph: {
    title: 'Vedic Astrology Glossary | 100+ Jyotish Terms Explained',
    description: 'The most comprehensive glossary of Vedic astrology terms. Perfect for students and practitioners of Jyotish.',
    type: 'website',
  },
}

// Glossary data organized alphabetically
const glossaryTerms = [
  // A
  { term: 'Ashtakavarga', sanskrit: 'अष्टकवर्ग', definition: 'A system of planetary strengths using an 8-fold division. Each planet contributes points (bindus) to determine favorable positions in a chart.', category: 'Analysis' },
  { term: 'Atmakaraka', sanskrit: 'आत्मकारक', definition: 'The planet with the highest degree in a chart, representing the soul\'s desire and life purpose. Key in Jaimini astrology.', category: 'Planets' },
  { term: 'Ayanamsa', sanskrit: 'अयनांश', definition: 'The angular difference between the tropical and sidereal zodiacs, approximately 24 degrees. Lahiri ayanamsa is most commonly used.', category: 'Technical' },

  // B
  { term: 'Bhava', sanskrit: 'भाव', definition: 'The twelve houses of a horoscope, each governing specific life areas. Derived from the Ascendant (Lagna).', category: 'Houses' },
  { term: 'Bhukti', sanskrit: 'भुक्ति', definition: 'A sub-period within a major Dasha period. Also called Antardasha. Used for precise timing of events.', category: 'Timing' },

  // C
  { term: 'Chandra', sanskrit: 'चंद्र', definition: 'The Moon, one of the most important planets in Vedic astrology. Governs mind, emotions, and mother.', category: 'Planets' },
  { term: 'Combustion', sanskrit: 'अस्त', definition: 'When a planet is too close to the Sun (within specific degrees), its significations become weakened or hidden.', category: 'Conditions' },

  // D
  { term: 'Dasha', sanskrit: 'दशा', definition: 'Planetary period system unique to Vedic astrology. The most common is Vimshottari Dasha (120-year cycle).', category: 'Timing' },
  { term: 'Debilitation', sanskrit: 'नीच', definition: 'When a planet is in its weakest sign, opposite to its exaltation sign. The planet\'s positive qualities are diminished.', category: 'Dignity' },
  { term: 'Divisional Chart', sanskrit: 'वर्ग', definition: 'Charts derived by dividing signs into smaller portions. D-9 (Navamsa) is for marriage, D-10 (Dasamsa) for career.', category: 'Charts' },
  { term: 'Drekkana', sanskrit: 'द्रेष्काण', definition: 'The D-3 divisional chart, dividing each sign into three parts. Used for siblings and courage.', category: 'Charts' },

  // E
  { term: 'Exaltation', sanskrit: 'उच्च', definition: 'When a planet is in its strongest sign, expressing its highest qualities. Each planet has one exaltation sign.', category: 'Dignity' },

  // G
  { term: 'Graha', sanskrit: 'ग्रह', definition: 'Literally "that which seizes." The nine planets including Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu.', category: 'Planets' },
  { term: 'Gandanta', sanskrit: 'गण्डान्त', definition: 'Critical junction points between water and fire signs (Pisces-Aries, Cancer-Leo, Scorpio-Sagittarius). Considered spiritually significant.', category: 'Technical' },

  // J
  { term: 'Jyotish', sanskrit: 'ज्योतिष', definition: 'The Sanskrit term for Vedic astrology, meaning "science of light." One of the six Vedangas (limbs of the Vedas).', category: 'General' },

  // K
  { term: 'Kendra', sanskrit: 'केंद्र', definition: 'The angular houses: 1st, 4th, 7th, and 10th. Planets here gain strength and visibility in life.', category: 'Houses' },
  { term: 'Ketu', sanskrit: 'केतु', definition: 'The south lunar node, representing spirituality, past life karma, and liberation. Headless body of the serpent.', category: 'Planets' },

  // L
  { term: 'Lagna', sanskrit: 'लग्न', definition: 'The Ascendant or rising sign at the exact moment of birth. The starting point for all house calculations.', category: 'Technical' },

  // M
  { term: 'Mahadasha', sanskrit: 'महादशा', definition: 'The major planetary period in the Vimshottari Dasha system, lasting from 6 to 20 years depending on the planet.', category: 'Timing' },
  { term: 'Moolatrikona', sanskrit: 'मूलत्रिकोण', definition: 'A special section within a planet\'s own sign where it functions optimally. Between own sign and exaltation.', category: 'Dignity' },

  // N
  { term: 'Nakshatra', sanskrit: 'नक्षत्र', definition: 'The 27 lunar mansions, each spanning 13°20\' of the zodiac. They reveal deeper personality traits and karma.', category: 'Nakshatras' },
  { term: 'Navamsa', sanskrit: 'नवांश', definition: 'The D-9 divisional chart, crucial for marriage analysis and dharma. Divides each sign into nine parts.', category: 'Charts' },
  { term: 'Neecha Bhanga', sanskrit: 'नीच भंग', definition: 'Cancellation of debilitation. When specific conditions exist, a debilitated planet\'s weakness is neutralized.', category: 'Conditions' },

  // P
  { term: 'Pada', sanskrit: 'पद', definition: 'Each Nakshatra is divided into four padas (quarters) of 3°20\' each. Important for precise chart analysis.', category: 'Nakshatras' },
  { term: 'Pushkara', sanskrit: 'पुष्कर', definition: 'Auspicious degrees within signs where planets gain special strength and bestow positive results.', category: 'Technical' },

  // R
  { term: 'Rahu', sanskrit: 'राहु', definition: 'The north lunar node, representing worldly desires, obsessions, and areas of karmic growth. Head of the serpent.', category: 'Planets' },
  { term: 'Raja Yoga', sanskrit: 'राज योग', definition: 'Planetary combinations that bestow power, success, and authority. Formed by lords of Kendra and Trikona houses.', category: 'Yogas' },
  { term: 'Rashi', sanskrit: 'राशि', definition: 'The twelve zodiac signs in Vedic astrology, starting from Aries (Mesha) to Pisces (Meena).', category: 'Signs' },
  { term: 'Retrograde', sanskrit: 'वक्री', definition: 'When a planet appears to move backward from Earth\'s perspective. Retrograde planets gain strength in Vedic astrology.', category: 'Conditions' },

  // S
  { term: 'Shadbala', sanskrit: 'षड्बल', definition: 'Six-fold strength calculation for planets, measuring positional, directional, temporal, and other strengths.', category: 'Analysis' },
  { term: 'Shani', sanskrit: 'शनि', definition: 'Saturn, the planet of karma, discipline, delays, and life lessons. Slowest moving visible planet.', category: 'Planets' },

  // T
  { term: 'Trikona', sanskrit: 'त्रिकोण', definition: 'The trinal houses: 1st, 5th, and 9th. Most auspicious houses representing dharma, creativity, and fortune.', category: 'Houses' },

  // U
  { term: 'Upachaya', sanskrit: 'उपचय', definition: 'Houses 3, 6, 10, and 11 where malefic planets give good results. These houses improve over time.', category: 'Houses' },

  // V
  { term: 'Varga', sanskrit: 'वर्ग', definition: 'Divisional charts that provide detailed analysis of specific life areas. 16 main Vargas are used.', category: 'Charts' },
  { term: 'Vimshottari Dasha', sanskrit: 'विंशोत्तरी दशा', definition: 'The 120-year planetary period system based on Moon\'s Nakshatra at birth. Most widely used Dasha system.', category: 'Timing' },

  // Y
  { term: 'Yoga', sanskrit: 'योग', definition: 'Specific planetary combinations that produce particular results. Hundreds of yogas exist in classical texts.', category: 'Yogas' },
  { term: 'Yogakaraka', sanskrit: 'योगकारक', definition: 'A single planet ruling both a Kendra and Trikona house, becoming highly beneficial for the chart.', category: 'Planets' },
]

// Group terms by first letter
const groupedTerms = glossaryTerms.reduce((acc, term) => {
  const letter = term.term[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(term)
  return acc
}, {} as Record<string, typeof glossaryTerms>)

const categories = [...new Set(glossaryTerms.map(t => t.category))]

function GlossaryJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Vedic Astrology Glossary',
    description: 'Comprehensive glossary of Vedic astrology (Jyotish) terms with Sanskrit translations and definitions.',
    url: 'https://vedastro.vercel.app/glossary',
    inLanguage: 'en',
    hasDefinedTerm: glossaryTerms.map(term => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      inDefinedTermSet: 'https://vedastro.vercel.app/glossary',
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function GlossaryPage() {
  return (
    <>
      <GlossaryJsonLd />
      <main className="min-h-screen bg-gradient-to-b from-primary via-cosmic to-primary">
        {/* Header */}
        <div className="border-b border-sacred-gold/20">
          <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
            <Link href="/" className="text-sacred-gold hover:text-saffron transition font-cinzel text-xl">
              Shubham Method
            </Link>
            <nav className="flex gap-6 text-sm text-gray-400">
              <Link href="/blog" className="hover:text-sacred-gold transition">Blog</Link>
              <Link href="/#pricing" className="hover:text-sacred-gold transition">Pricing</Link>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sacred-gold/10 border border-sacred-gold/30 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-sacred-gold" />
              <span className="text-sacred-gold text-sm font-medium">REFERENCE GUIDE</span>
            </div>
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-sacred-gold mb-4">
              Vedic Astrology Glossary
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Comprehensive definitions of {glossaryTerms.length}+ Jyotish terms with Sanskrit translations.
              Your essential reference for understanding Vedic astrology.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-sacred-gold font-bold">{glossaryTerms.length}+</span> Terms
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-sacred-gold font-bold">{categories.length}</span> Categories
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-sacred-gold font-bold">Sanskrit</span> Translations
              </div>
            </div>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <nav className="sticky top-0 z-10 bg-primary/95 backdrop-blur border-y border-sacred-gold/20 py-3 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
            {Object.keys(groupedTerms).sort().map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded bg-cosmic hover:bg-sacred-gold/20 text-gray-400 hover:text-sacred-gold transition font-medium"
              >
                {letter}
              </a>
            ))}
          </div>
        </nav>

        {/* Glossary Terms */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {Object.keys(groupedTerms).sort().map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="mb-12">
                <h2 className="font-cinzel text-3xl text-sacred-gold mb-6 pb-2 border-b border-sacred-gold/20">
                  {letter}
                </h2>
                <div className="space-y-6">
                  {groupedTerms[letter].map((item) => (
                    <div
                      key={item.term}
                      className="bg-secondary/50 border border-sacred-gold/10 rounded-xl p-6 hover:border-sacred-gold/30 transition"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-cinzel text-xl text-white">
                          {item.term}
                        </h3>
                        <span className="text-xs bg-cosmic text-sacred-gold px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                      {item.sanskrit && (
                        <p className="text-saffron text-lg mb-2 font-medium">
                          {item.sanskrit}
                        </p>
                      )}
                      <p className="text-gray-400 leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-cinzel text-2xl text-sacred-gold mb-4">
              See These Concepts in Your Chart
            </h2>
            <p className="text-gray-400 mb-6">
              Understanding the terminology is just the beginning. Get a personalized analysis
              of how these principles manifest in your unique birth chart.
            </p>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sacred-gold to-saffron text-primary px-8 py-3 rounded-xl font-bold hover:shadow-sacred transition"
            >
              Get Your Report
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-sacred-gold/20 py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-sacred-gold font-cinzel">
              Shubham Method
            </Link>
            <nav className="flex gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-sacred-gold transition">Home</Link>
              <Link href="/blog" className="hover:text-sacred-gold transition">Blog</Link>
              <Link href="/#pricing" className="hover:text-sacred-gold transition">Pricing</Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  )
}
