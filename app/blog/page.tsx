import { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts, getFeaturedPosts } from '@/lib/blog'
import { Calendar, Clock, ArrowRight, Sparkles, Globe } from 'lucide-react'
import { Language } from '@/lib/translations'

export const metadata: Metadata = {
  title: 'Vedic Astrology Blog | Learn Jyotish Wisdom',
  description: 'Explore our collection of articles on Vedic astrology, Nakshatras, Dasha timing, birth chart interpretation, and ancient Jyotish wisdom for modern seekers.',
  keywords: [
    'vedic astrology blog',
    'jyotish articles',
    'nakshatra guide',
    'dasha system explained',
    'learn vedic astrology',
    'birth chart interpretation',
  ],
  openGraph: {
    title: 'Vedic Astrology Blog | Shubham Method',
    description: 'Learn the wisdom of Vedic astrology through our comprehensive articles on Nakshatras, Dashas, and birth chart interpretation.',
  },
}

const blogTranslations = {
  en: {
    badge: 'VEDIC WISDOM',
    title: 'Jyotish Insights',
    subtitle: 'Explore the ancient wisdom of Vedic astrology through our comprehensive guides and articles.',
    featured: 'Featured Articles',
    all: 'All Articles',
    readMore: 'Read more',
    ctaTitle: 'Ready for Your Personal Reading?',
    ctaText: 'Go beyond theory with a comprehensive birth chart analysis using the Shubham Method.',
    ctaButton: 'Get Your Report',
  },
  fr: {
    badge: 'SAGESSE VÉDIQUE',
    title: 'Perspectives Jyotish',
    subtitle: 'Explorez la sagesse ancienne de l\'astrologie védique à travers nos guides et articles complets.',
    featured: 'Articles en Vedette',
    all: 'Tous les Articles',
    readMore: 'Lire la suite',
    ctaTitle: 'Prêt pour Votre Lecture Personnelle ?',
    ctaText: 'Allez au-delà de la théorie avec une analyse complète de votre thème natal selon la Méthode Shubham.',
    ctaButton: 'Obtenir Votre Rapport',
  },
}

interface BlogPageProps {
  searchParams: Promise<{ lang?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const lang = (params.lang === 'fr' ? 'fr' : 'en') as Language
  const allPosts = getAllBlogPosts(lang)
  const featuredPosts = getFeaturedPosts(lang)
  const t = blogTranslations[lang]
  const otherLang = lang === 'en' ? 'fr' : 'en'
  const dateLocale = lang === 'fr' ? 'fr-FR' : 'en-US'

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-cosmic to-primary">
      {/* Header */}
      <div className="border-b border-sacred-gold/20">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href={lang === 'fr' ? '/?lang=fr' : '/'} className="text-sacred-gold hover:text-saffron transition font-cinzel text-xl">
            Shubham Method
          </Link>
          <Link
            href={`/blog?lang=${otherLang}`}
            className="flex items-center gap-2 text-gray-400 hover:text-sacred-gold transition text-sm"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'Français' : 'English'}
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-sacred-gold/10 border border-sacred-gold/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-sacred-gold" />
            <span className="text-sacred-gold text-sm font-medium">{t.badge}</span>
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-sacred-gold mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cinzel text-2xl text-sacred-gold mb-8">{t.featured}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-secondary border border-sacred-gold/20 rounded-2xl p-6 hover:border-sacred-gold/50 transition"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-sacred-gold/20 text-sacred-gold text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl text-white group-hover:text-sacred-gold transition mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="text-sacred-gold flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                      {t.readMore} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-2xl text-sacred-gold mb-8">{t.all}</h2>
          <div className="grid gap-6">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-secondary/50 border border-sacred-gold/10 rounded-xl p-6 hover:border-sacred-gold/30 transition flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-cosmic text-sacred-gold text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readingTime}</span>
                  </div>
                  <h3 className="font-cinzel text-lg text-white group-hover:text-sacred-gold transition mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 md:flex-col md:items-end">
                  <span className="text-gray-500 text-sm">
                    {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <ArrowRight className="w-5 h-5 text-sacred-gold opacity-0 group-hover:opacity-100 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl text-sacred-gold mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-gray-400 mb-6">
            {t.ctaText}
          </p>
          <Link
            href={lang === 'fr' ? '/?lang=fr#pricing' : '/#pricing'}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sacred-gold to-saffron text-primary px-8 py-3 rounded-xl font-bold hover:shadow-sacred transition"
          >
            {t.ctaButton}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sacred-gold/20 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href={lang === 'fr' ? '/?lang=fr' : '/'} className="text-sacred-gold font-cinzel">
            Shubham Method
          </Link>
          <nav className="flex gap-6 text-sm text-gray-400">
            <Link href={lang === 'fr' ? '/?lang=fr' : '/'} className="hover:text-sacred-gold transition">
              {lang === 'fr' ? 'Accueil' : 'Home'}
            </Link>
            <Link href={lang === 'fr' ? '/?lang=fr#pricing' : '/#pricing'} className="hover:text-sacred-gold transition">
              {lang === 'fr' ? 'Tarifs' : 'Pricing'}
            </Link>
            <Link href={lang === 'fr' ? '/?lang=fr#faq' : '/#faq'} className="hover:text-sacred-gold transition">
              FAQ
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
