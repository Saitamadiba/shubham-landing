'use client'

/**
 * Skeleton components for loading states
 * Improves perceived performance by showing content placeholders
 */

interface SkeletonProps {
  className?: string
}

// Base skeleton with shimmer animation
export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`bg-sacred-gold/10 rounded animate-pulse ${className}`}
      aria-hidden="true"
    />
  )
}

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Skeleton className="h-6 w-32 mx-auto mb-4 rounded-full" />
        <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-12 w-1/2 mx-auto mb-6" />
        <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-12 w-40 rounded-xl" />
          <Skeleton className="h-12 w-40 rounded-xl" />
        </div>
      </div>
    </section>
  )
}

// Pricing card skeleton
export function PricingCardSkeleton() {
  return (
    <div className="bg-secondary/50 rounded-2xl border border-sacred-gold/10 p-6">
      <Skeleton className="h-6 w-24 mb-4" />
      <Skeleton className="h-10 w-32 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
      <Skeleton className="h-12 w-full mt-6 rounded-xl" />
    </div>
  )
}

// Pricing section skeleton
export function PricingSkeleton() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto mb-12" />
        <div className="grid md:grid-cols-3 gap-6">
          <PricingCardSkeleton />
          <PricingCardSkeleton />
          <PricingCardSkeleton />
        </div>
      </div>
    </section>
  )
}

// FAQ skeleton
export function FAQSkeleton() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-10 w-48 mx-auto mb-12" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-secondary/50 rounded-xl p-4">
              <Skeleton className="h-6 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Blog card skeleton
export function BlogCardSkeleton() {
  return (
    <div className="bg-secondary/50 rounded-xl border border-sacred-gold/10 p-6">
      <div className="flex items-center gap-2 mb-3">
        <Skeleton className="h-5 w-20 rounded" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="flex justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  )
}

// Testimonial skeleton
export function TestimonialSkeleton() {
  return (
    <div className="bg-secondary/50 rounded-2xl border border-sacred-gold/10 p-6">
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24 mb-1" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  )
}

export default Skeleton
