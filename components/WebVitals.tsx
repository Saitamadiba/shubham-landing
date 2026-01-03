'use client'

import { useEffect } from 'react'

/**
 * WebVitals - Core Web Vitals monitoring component
 *
 * Tracks and reports:
 * - LCP (Largest Contentful Paint) - Loading performance
 * - INP (Interaction to Next Paint) - Interactivity (replaces FID)
 * - CLS (Cumulative Layout Shift) - Visual stability
 * - FCP (First Contentful Paint) - Initial render
 * - TTFB (Time to First Byte) - Server response
 *
 * Results are logged to console in development
 * In production, you can send these to an analytics endpoint
 */
export function WebVitals() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return

    // Dynamically import web-vitals to avoid SSR issues
    import('web-vitals').then(({ onCLS, onLCP, onFCP, onTTFB, onINP }) => {
      const reportVital = (metric: { name: string; value: number; rating: string }) => {
        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Web Vital] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`)
        }

        // In production, you could send to analytics
        // Example: sendToAnalytics(metric)
      }

      onCLS(reportVital)
      onLCP(reportVital)
      onFCP(reportVital)
      onTTFB(reportVital)
      onINP(reportVital) // Interaction to Next Paint (replaces FID)
    }).catch(() => {
      // web-vitals not available, skip monitoring
    })
  }, [])

  // This component doesn't render anything
  return null
}

/**
 * Performance thresholds (based on Google's recommendations)
 *
 * LCP: Good < 2.5s, Needs Improvement < 4s, Poor >= 4s
 * INP: Good < 200ms, Needs Improvement < 500ms, Poor >= 500ms
 * CLS: Good < 0.1, Needs Improvement < 0.25, Poor >= 0.25
 * FCP: Good < 1.8s, Needs Improvement < 3s, Poor >= 3s
 * TTFB: Good < 800ms, Needs Improvement < 1800ms, Poor >= 1800ms
 */

export default WebVitals
