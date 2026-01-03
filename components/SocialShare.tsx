'use client'

import { useState } from 'react'
import { Twitter, Facebook, Linkedin, Link2, Check, Mail } from 'lucide-react'

interface SocialShareProps {
  url: string
  title: string
  description?: string
  hashtags?: string[]
}

/**
 * SocialShare - Social media sharing buttons for blog posts
 * Improves content distribution and backlink potential
 */
export function SocialShare({ url, title, description = '', hashtags = [] }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const hashtagString = hashtags.map(tag => tag.replace('#', '')).join(',')

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtagString}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0ARead more: ${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const buttonClass = `
    flex items-center justify-center w-10 h-10 rounded-full
    bg-secondary border border-sacred-gold/20
    hover:border-sacred-gold/50 hover:bg-sacred-gold/10
    transition-all duration-200
    text-gray-400 hover:text-sacred-gold
  `

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500 mr-1">Share:</span>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on Twitter"
        title="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.email}
        className={buttonClass}
        aria-label="Share via Email"
        title="Share via Email"
      >
        <Mail className="w-4 h-4" />
      </a>

      <button
        onClick={copyToClipboard}
        className={buttonClass}
        aria-label="Copy link"
        title="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Link2 className="w-4 h-4" />
        )}
      </button>
    </div>
  )
}

export default SocialShare
