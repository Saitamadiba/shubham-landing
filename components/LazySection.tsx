'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  className?: string
  rootMargin?: string
  threshold?: number
  fallback?: ReactNode
}

/**
 * LazySection - Defers rendering of below-fold content until visible
 * Improves LCP by reducing initial JavaScript execution and DOM size
 */
export function LazySection({
  children,
  className = '',
  rootMargin = '100px',
  threshold = 0.1,
  fallback,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Use IntersectionObserver for efficient visibility detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback || <SectionSkeleton />}
    </div>
  )
}

/**
 * Default skeleton placeholder for lazy sections
 */
function SectionSkeleton() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="h-8 w-48 bg-sacred-gold/10 rounded animate-pulse mx-auto mb-8" />
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-64 bg-secondary/50 rounded-2xl border border-sacred-gold/10 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LazySection
