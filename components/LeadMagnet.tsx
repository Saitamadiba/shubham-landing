'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { Gift, CheckCircle, Loader2, Mail, Sparkles } from 'lucide-react'

export default function LeadMagnet() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="vedic-card p-8 md:p-12 bg-gradient-to-br from-cosmic to-secondary relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sacred-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-cyan/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sacred-gold/20 border border-sacred-gold/50 rounded-full px-4 py-1.5 mb-6">
              <Gift className="w-4 h-4 text-sacred-gold" />
              <span className="text-sm font-semibold text-sacred-gold">{t.leadMagnet.badge}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div>
                <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
                  {t.leadMagnet.title}
                </h2>
                <p className="text-gray-400 mb-6">
                  {t.leadMagnet.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {t.leadMagnet.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Form */}
              <div className="bg-primary/50 rounded-2xl p-6 border border-sacred-gold/20">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-sacred-gold mb-2">
                      {t.leadMagnet.success}
                    </h3>
                    <p className="text-gray-400">
                      Your free Nakshatra guide is on its way.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="text-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-sacred-gold/20 to-saffron/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-7 h-7 text-sacred-gold" />
                      </div>
                      <p className="text-gray-300 font-semibold">Get instant access</p>
                    </div>

                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.leadMagnet.placeholder}
                        required
                        className="w-full bg-cosmic border border-sacred-gold/30 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-sacred-gold focus:outline-none transition text-center"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-sacred-gold to-saffron text-primary py-4 rounded-xl font-bold text-lg hover:shadow-sacred transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t.leadMagnet.sending}
                        </>
                      ) : (
                        t.leadMagnet.button
                      )}
                    </button>

                    <p className="text-center text-gray-500 text-xs">
                      {t.leadMagnet.privacy}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
