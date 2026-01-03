'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Shield } from 'lucide-react'

const CONSENT_KEY = 'cookie-consent'
const CONSENT_EXPIRY_DAYS = 365

interface ConsentPreferences {
  necessary: boolean // Always true
  analytics: boolean
  marketing: boolean
  timestamp: number
}

/**
 * CookieConsent - GDPR-compliant cookie consent banner
 *
 * Features:
 * - Remembers user preference for 1 year
 * - Granular control over cookie categories
 * - Blocks analytics until consent given
 * - Clean, accessible UI
 */
export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: 0,
  })

  useEffect(() => {
    // Check for existing consent
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ConsentPreferences
        // Check if consent is still valid (within expiry period)
        const expiryTime = parsed.timestamp + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000
        if (Date.now() < expiryTime) {
          setPreferences(parsed)
          // Enable analytics if consented
          if (parsed.analytics) {
            enableAnalytics()
          }
          return
        }
      } catch {
        // Invalid stored data, show banner
      }
    }
    // No valid consent, show banner after short delay
    const timer = setTimeout(() => setShowBanner(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const enableAnalytics = () => {
    // Signal to Google Analytics that consent was given
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const savePreferences = (prefs: ConsentPreferences) => {
    const withTimestamp = { ...prefs, timestamp: Date.now() }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(withTimestamp))
    setPreferences(withTimestamp)

    if (prefs.analytics) {
      enableAnalytics()
    }

    setShowBanner(false)
    setShowPreferences(false)
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    })
  }

  const acceptNecessary = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    })
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-secondary border border-sacred-gold/30 rounded-2xl shadow-2xl overflow-hidden">
        {!showPreferences ? (
          // Main banner
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-sacred-gold/10 shrink-0">
                <Cookie className="w-6 h-6 text-sacred-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-cinzel text-lg text-white mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                  By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2 bg-gradient-to-r from-sacred-gold to-saffron text-primary font-semibold rounded-lg hover:shadow-sacred transition"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-2 bg-cosmic border border-sacred-gold/30 text-white rounded-lg hover:border-sacred-gold/50 transition"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-6 py-2 text-gray-400 hover:text-sacred-gold transition"
                  >
                    Customize
                  </button>
                </div>
              </div>
              <button
                onClick={acceptNecessary}
                className="text-gray-500 hover:text-white transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          // Preferences panel
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-sacred-gold" />
                <h3 className="font-cinzel text-lg text-white">Cookie Preferences</h3>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 bg-cosmic rounded-lg">
                <div>
                  <h4 className="text-white font-medium mb-1">Necessary Cookies</h4>
                  <p className="text-gray-400 text-sm">
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
                <div className="shrink-0 ml-4">
                  <div className="w-12 h-6 bg-sacred-gold/30 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-sacred-gold rounded-full" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 bg-cosmic rounded-lg">
                <div>
                  <h4 className="text-white font-medium mb-1">Analytics Cookies</h4>
                  <p className="text-gray-400 text-sm">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                  className="shrink-0 ml-4"
                >
                  <div className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
                    preferences.analytics ? 'bg-sacred-gold/30 justify-end' : 'bg-gray-700 justify-start'
                  }`}>
                    <div className={`w-4 h-4 rounded-full transition ${
                      preferences.analytics ? 'bg-sacred-gold' : 'bg-gray-500'
                    }`} />
                  </div>
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 bg-cosmic rounded-lg">
                <div>
                  <h4 className="text-white font-medium mb-1">Marketing Cookies</h4>
                  <p className="text-gray-400 text-sm">
                    Used to deliver personalized advertisements.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                  className="shrink-0 ml-4"
                >
                  <div className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
                    preferences.marketing ? 'bg-sacred-gold/30 justify-end' : 'bg-gray-700 justify-start'
                  }`}>
                    <div className={`w-4 h-4 rounded-full transition ${
                      preferences.marketing ? 'bg-sacred-gold' : 'bg-gray-500'
                    }`} />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={acceptNecessary}
                className="px-6 py-2 text-gray-400 hover:text-white transition"
              >
                Reject All
              </button>
              <button
                onClick={saveCustomPreferences}
                className="px-6 py-2 bg-gradient-to-r from-sacred-gold to-saffron text-primary font-semibold rounded-lg hover:shadow-sacred transition"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Hook to check if analytics consent was given
 */
export function useAnalyticsConsent(): boolean {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ConsentPreferences
        setHasConsent(parsed.analytics)
      } catch {
        setHasConsent(false)
      }
    }
  }, [])

  return hasConsent
}

export default CookieConsent
