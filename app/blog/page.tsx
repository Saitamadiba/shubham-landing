import { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts, getFeaturedPosts } from '@/lib/blog'
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'

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

export default function BlogPage() {
  const allPosts = getAllBlogPosts()
  const featuredPosts = getFeaturedPosts()

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-cosmic to-primary">
      {/* Header */}
      <div className="border-b border-sacred-gold/20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-sacred-gold hover:text-saffron transition font-cinzel text-xl">
            Shubham Method
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-sacred-gold/10 border border-sacred-gold/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-sacred-gold" />
            <span className="text-sacred-gold text-sm font-medium">VEDIC WISDOM</span>
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-sacred-gold mb-4">
            Jyotish Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the ancient wisdom of Vedic astrology through our comprehensive guides and articles.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cinzel text-2xl text-sacred-gold mb-8">Featured Articles</h2>
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
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="text-sacred-gold flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
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
          <h2 className="font-cinzel text-2xl text-sacred-gold mb-8">All Articles</h2>
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
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
            Ready for Your Personal Reading?
          </h2>
          <p className="text-gray-400 mb-6">
            Go beyond theory with a comprehensive birth chart analysis using the Shubham Method.
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
            <Link href="/#pricing" className="hover:text-sacred-gold transition">Pricing</Link>
            <Link href="/#faq" className="hover:text-sacred-gold transition">FAQ</Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
