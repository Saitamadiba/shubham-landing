'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  /**
   * Priority images are preloaded and never lazy loaded
   * Use for above-the-fold images (LCP optimization)
   */
  priority?: boolean
  /**
   * Show blur placeholder while loading
   */
  showBlur?: boolean
}

/**
 * OptimizedImage - Wrapper around next/image with performance defaults
 *
 * Features:
 * - Automatic WebP/AVIF format selection
 * - Lazy loading by default (priority images exempt)
 * - Blur placeholder option
 * - Fade-in animation on load
 */
export function OptimizedImage({
  priority = false,
  showBlur = true,
  className = '',
  alt,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Image
      {...props}
      alt={alt}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      placeholder={showBlur ? 'blur' : 'empty'}
      blurDataURL={showBlur ? generateBlurPlaceholder() : undefined}
      className={`
        ${className}
        transition-opacity duration-300
        ${isLoaded ? 'opacity-100' : 'opacity-0'}
      `}
      onLoad={() => setIsLoaded(true)}
    />
  )
}

/**
 * Generate a minimal blur placeholder (prevents CLS)
 * This is a tiny 1x1 transparent placeholder
 */
function generateBlurPlaceholder(): string {
  return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxYTFhMmUiLz48L3N2Zz4='
}

export default OptimizedImage
