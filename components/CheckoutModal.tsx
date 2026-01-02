'use client'

import { useState } from 'react'
import { X, Loader2 } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  plan: string
  planKey: string
}

const prices: Record<string, number> = {
  essential: 67,
  complete: 197,
  premium: 497,
}

export default function CheckoutModal({ isOpen, onClose, plan, planKey }: CheckoutModalProps) {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: planKey,
          email: formData.email,
          birthData: {
            name: formData.name,
            birthDate: formData.birthDate,
            birthTime: formData.birthTime,
            birthPlace: formData.birthPlace,
          },
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  const price = prices[planKey] || 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-secondary border border-sacred-gold/30 rounded-2xl p-8 max-w-md w-full shadow-sacred">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="font-cinzel text-2xl font-bold text-sacred-gold mb-2">
            {t.checkout.title}
          </h2>
          <p className="text-gray-400 text-sm mb-2">{t.checkout.subtitle}</p>
          <p className="text-xl font-semibold text-white">{plan} - <span className="text-sacred-gold">${price}</span></p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">{t.checkout.fullName}</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 text-white focus:border-sacred-gold focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">{t.checkout.email}</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 text-white focus:border-sacred-gold focus:outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t.checkout.birthDate}</label>
              <input
                type="date"
                required
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 text-white focus:border-sacred-gold focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t.checkout.birthTime}</label>
              <input
                type="time"
                required
                value={formData.birthTime}
                onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 text-white focus:border-sacred-gold focus:outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">{t.checkout.birthPlace}</label>
            <input
              type="text"
              required
              value={formData.birthPlace}
              onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
              className="w-full bg-cosmic border border-sacred-gold/30 rounded-lg px-4 py-3 text-white focus:border-sacred-gold focus:outline-none transition"
              placeholder="Paris, France"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-gray-600 text-gray-400 py-3 rounded-xl font-semibold hover:border-gray-500 hover:text-gray-300 transition"
            >
              {t.checkout.cancel}
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-sacred-gold to-saffron text-primary py-3 rounded-xl font-bold hover:shadow-sacred transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.checkout.processing}
                </>
              ) : (
                t.checkout.proceed
              )}
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-xs mt-4">
          Secure payment powered by Stripe
        </p>
      </div>
    </div>
  )
}
