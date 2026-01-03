import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

function BlogPostJsonLd({ post }: { post: NonNullable<ReturnType<typeof getBlogPost>> }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://shubham-landing.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Shubham Method',
      url: 'https://shubham-landing.vercel.app',
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://shubham-landing.vercel.app/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

function parseMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="font-cinzel text-xl text-sacred-gold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="font-cinzel text-2xl text-sacred-gold mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="font-cinzel text-3xl text-sacred-gold mt-10 mb-4">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-sacred-gold hover:text-saffron underline">$1</a>')
    // Tables
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.every(c => c.trim().match(/^-+$/))) {
        return '' // Skip separator row
      }
      const isHeader = cells.some(c => c.includes('Planet') || c.includes('Period'))
      const cellTag = isHeader ? 'th' : 'td'
      const cellClass = isHeader ? 'px-4 py-2 text-sacred-gold font-semibold' : 'px-4 py-2 text-gray-300'
      return `<tr>${cells.map(c => `<${cellTag} class="${cellClass}">${c.trim()}</${cellTag}>`).join('')}</tr>`
    })
    // Lists
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 list-decimal">$1</li>')
    .replace(/^- (.*$)/gim, '<li class="ml-6 mb-2 list-disc">$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="text-gray-300 leading-relaxed mb-4">')
    // Wrap in paragraph
    .replace(/^(?!<)(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match
      return match
    })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <>
      <BlogPostJsonLd post={post} />
      <main className="min-h-screen bg-gradient-to-b from-primary via-cosmic to-primary">
        {/* Header */}
        <div className="border-b border-sacred-gold/20">
          <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
            <Link href="/" className="text-sacred-gold hover:text-saffron transition font-cinzel text-xl">
              Shubham Method
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-sacred-gold transition flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
          </div>
        </div>

        {/* Article */}
        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-sacred-gold/20 text-sacred-gold text-sm px-3 py-1 rounded">
                {post.category}
              </span>
              <span className="text-gray-500 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-gray-500 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-sacred-gold mb-6">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 mb-8 pb-8 border-b border-sacred-gold/20">
              {post.description}
            </p>

            {/* Content */}
            <div
              className="prose prose-invert max-w-none [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:bg-cosmic/50 [&_table]:rounded-lg [&_table]:overflow-hidden [&_tr]:border-b [&_tr]:border-sacred-gold/10"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-sacred-gold/20">
              <Tag className="w-4 h-4 text-gray-500" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-cosmic text-gray-400 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Navigation */}
        <nav className="py-8 px-4 border-t border-sacred-gold/20">
          <div className="max-w-3xl mx-auto flex justify-between">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-2 text-gray-400 hover:text-sacred-gold transition"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
                <div className="text-right">
                  <div className="text-sm text-gray-500">Previous</div>
                  <div className="font-medium line-clamp-1 max-w-[200px]">{prevPost.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-2 text-gray-400 hover:text-sacred-gold transition text-right"
              >
                <div>
                  <div className="text-sm text-gray-500">Next</div>
                  <div className="font-medium line-clamp-1 max-w-[200px]">{nextPost.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>

        {/* CTA */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-cinzel text-2xl text-sacred-gold mb-4">
              Experience Personalized Vedic Wisdom
            </h2>
            <p className="text-gray-400 mb-6">
              Get your comprehensive birth chart analysis with the 14-phase Shubham Method.
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
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
