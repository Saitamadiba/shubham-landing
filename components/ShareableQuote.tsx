'use client'

import { Twitter, Linkedin } from 'lucide-react'

interface ShareableQuoteProps {
  quote: string
  author?: string
  url?: string
}

/**
 * ShareableQuote - A visually styled quote block with one-click sharing
 * Encourages social sharing and increases content reach
 */
export function ShareableQuote({ quote, author = 'Shubham Method', url = '' }: ShareableQuoteProps) {
  const encodedQuote = encodeURIComponent(`"${quote}" - ${author}`)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedQuote}&url=${encodedUrl}&hashtags=VedicAstrology,Jyotish`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  return (
    <blockquote className="relative my-8 p-6 bg-gradient-to-br from-cosmic via-secondary to-cosmic border-l-4 border-sacred-gold rounded-r-xl">
      {/* Decorative quote marks */}
      <div className="absolute top-2 left-4 text-6xl text-sacred-gold/20 font-cinzel leading-none">
        &ldquo;
      </div>

      <p className="relative z-10 text-lg md:text-xl text-gray-200 italic leading-relaxed pl-6">
        {quote}
      </p>

      <footer className="mt-4 flex items-center justify-between">
        <cite className="text-sacred-gold font-medium not-italic">
          &mdash; {author}
        </cite>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 mr-2">Share:</span>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-sacred-gold/20 text-gray-400 hover:text-sacred-gold transition"
            aria-label="Share quote on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-sacred-gold/20 text-gray-400 hover:text-sacred-gold transition"
            aria-label="Share quote on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </blockquote>
  )
}

export default ShareableQuote
