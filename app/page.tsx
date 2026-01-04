'use client'

import { useState } from 'react'
import {
  Star,
  Sparkles,
  Moon,
  Sun,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  BookOpen,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import CheckoutModal from '@/components/CheckoutModal'
import LeadMagnet from '@/components/LeadMagnet'
import AscendantCalculator from '@/components/AscendantCalculator'

// Price data (not translated)
const priceData = [
  { price: 67, originalPrice: 97, color: 'neon-cyan', popular: false },
  { price: 197, originalPrice: 297, color: 'sacred-gold', popular: true },
  { price: 380, originalPrice: 697, color: 'saffron', popular: false },
]

// Feature icons
const featureIcons = [
  <Moon key="moon" className="w-8 h-8" />,
  <Star key="star" className="w-8 h-8" />,
  <Sun key="sun" className="w-8 h-8" />,
  <Sparkles key="sparkles" className="w-8 h-8" />,
  <BookOpen key="book" className="w-8 h-8" />,
  <Shield key="shield" className="w-8 h-8" />,
]

export default function LandingPage() {
  const { t, language } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [checkoutModal, setCheckoutModal] = useState<{ open: boolean; plan: string; planKey: string }>({
    open: false,
    plan: '',
    planKey: '',
  })

  const planKeys = ['essential', 'complete', 'premium']

  const handleCheckout = (planName: string, planKey: string) => {
    setCheckoutModal({ open: true, plan: planName, planKey })
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-sacred-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sacred-gold to-saffron rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <span className="font-cinzel text-xl font-bold text-sacred-gold">Vedic Astrology</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-sacred-gold transition">{t.nav.features}</a>
              <a href="#calculator" className="text-gray-300 hover:text-sacred-gold transition">{language === 'en' ? 'Calculator' : 'Calculateur'}</a>
              <a href="#pricing" className="text-gray-300 hover:text-sacred-gold transition">{t.nav.pricing}</a>
              <a href="#testimonials" className="text-gray-300 hover:text-sacred-gold transition">{t.nav.reviews}</a>
              <a href="#faq" className="text-gray-300 hover:text-sacred-gold transition">{t.nav.faq}</a>
              <a href="/blog" className="text-gray-300 hover:text-sacred-gold transition">{t.nav.blog}</a>
              <LanguageSwitcher />
              <a
                href="#pricing"
                className="bg-gradient-to-r from-sacred-gold to-saffron text-primary px-6 py-2 rounded-full font-semibold hover:shadow-sacred transition"
              >
                {t.nav.getReport}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <LanguageSwitcher />
              <button
                className="text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-sacred-gold/20 p-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-sacred-gold transition py-2">{t.nav.features}</a>
              <a href="#calculator" className="text-gray-300 hover:text-sacred-gold transition py-2">{language === 'en' ? 'Calculator' : 'Calculateur'}</a>
              <a href="#pricing" className="text-gray-300 hover:text-sacred-gold transition py-2">{t.nav.pricing}</a>
              <a href="#testimonials" className="text-gray-300 hover:text-sacred-gold transition py-2">{t.nav.reviews}</a>
              <a href="#faq" className="text-gray-300 hover:text-sacred-gold transition py-2">{t.nav.faq}</a>
              <a href="/blog" className="text-gray-300 hover:text-sacred-gold transition py-2">{t.nav.blog}</a>
              <a
                href="#pricing"
                className="bg-gradient-to-r from-sacred-gold to-saffron text-primary px-6 py-3 rounded-full font-semibold text-center"
              >
                {t.nav.getReport}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-sacred-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-deep-maroon/30 border border-sacred-gold/50 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-sacred-gold" />
            <span className="text-sm text-sacred-gold">{t.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-100">{t.hero.title1}</span>
            <br />
            <span className="text-sacred-gold text-glow-gold">{t.hero.title2}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            {t.hero.subtitle}
          </p>

          {/* Sanskrit motto */}
          <p className="sanskrit text-lg mb-10">{t.hero.motto}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#pricing"
              className="group bg-gradient-to-r from-sacred-gold to-saffron text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-sacred transition flex items-center gap-2"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#features"
              className="border-2 border-neon-cyan/50 text-neon-cyan px-8 py-4 rounded-full font-semibold text-lg hover:bg-neon-cyan/10 transition"
            >
              {t.hero.learnMore}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{t.hero.trust.reports}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-neon-cyan" />
              <span>{t.hero.trust.delivery}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sacred-gold" />
              <span>{t.hero.trust.confidential}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* Sample Report Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              {t.preview.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.preview.subtitle}
            </p>
          </div>

          {/* Report mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="vedic-card p-8 shadow-sacred">
              <div className="bg-gradient-to-br from-primary to-cosmic rounded-xl p-6 border border-sacred-gold/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sacred-gold font-cinzel text-sm tracking-wider">{t.preview.phase}</p>
                    <h3 className="font-cinzel text-2xl font-bold text-sacred-gold">{t.preview.phaseName}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{t.preview.version}</p>
                  </div>
                </div>

                {/* Sample content */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-cosmic/50 rounded-lg p-4 border border-sacred-gold/20">
                    <p className="text-neon-cyan text-sm mb-1">{t.preview.ascendant}</p>
                    <p className="font-cinzel text-xl text-sacred-gold">Cancer 24°49&apos;</p>
                  </div>
                  <div className="bg-cosmic/50 rounded-lg p-4 border border-sacred-gold/20">
                    <p className="text-neon-cyan text-sm mb-1">{t.preview.moonNakshatra}</p>
                    <p className="font-cinzel text-xl text-sacred-gold">Rohini Pada 2</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">{t.preview.moonExalted}</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">{t.preview.mercuryExalted}</span>
                  <span className="bg-neon-cyan/20 text-neon-cyan px-3 py-1 rounded-full text-sm border border-neon-cyan/30">{t.preview.saturnOwn}</span>
                </div>

                <p className="text-gray-400 text-sm">
                  {t.preview.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neon-cyan text-sm tracking-wider mb-2">{t.features.label}</p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              {t.features.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className="vedic-card p-6 hover:border-sacred-gold/40 transition group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-sacred-gold/20 to-saffron/20 rounded-xl flex items-center justify-center mb-4 text-sacred-gold group-hover:scale-110 transition">
                  {featureIcons[index]}
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-sacred-gold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ascendant Calculator */}
      <AscendantCalculator onGetReport={() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
      }} />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neon-cyan text-sm tracking-wider mb-2">{t.pricing.label}</p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className={`vedic-card p-8 relative ${priceData[index].popular ? 'border-sacred-gold/50 shadow-sacred' : ''}`}
              >
                {priceData[index].popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sacred-gold to-saffron text-primary px-4 py-1 rounded-full text-sm font-bold">
                    {t.pricing.popular}
                  </div>
                )}

                <div className="text-center mb-6">
                  <p className={`text-${priceData[index].color} text-sm tracking-wider mb-1`}>{plan.sanskrit}</p>
                  <h3 className="font-cinzel text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-gray-500 line-through text-lg">${priceData[index].originalPrice}</span>
                    <span className={`font-cinzel text-5xl font-bold text-${priceData[index].color}`}>${priceData[index].price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{plan.phases}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 text-${priceData[index].color} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCheckout(plan.name, planKeys[index])}
                  className={`w-full py-4 rounded-xl font-semibold transition ${
                    priceData[index].popular
                      ? 'bg-gradient-to-r from-sacred-gold to-saffron text-primary hover:shadow-sacred'
                      : 'border-2 border-sacred-gold/50 text-sacred-gold hover:bg-sacred-gold/10'
                  }`}
                >
                  {t.pricing.getReport} {plan.name} {t.pricing.report}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            {t.pricing.footer}
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neon-cyan text-sm tracking-wider mb-2">{t.testimonials.label}</p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="vedic-card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sacred-gold fill-sacred-gold" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neon-cyan text-sm tracking-wider mb-2">{t.faq.label}</p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              {t.faq.title}
            </h2>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <div key={index} className="vedic-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-sacred-gold flex-shrink-0 transition ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="vedic-card p-12 bg-gradient-to-br from-secondary to-cosmic shadow-sacred">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <p className="sanskrit text-lg mb-8">{t.cta.motto}</p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sacred-gold to-saffron text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-sacred transition"
            >
              {t.cta.button}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-sacred-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sacred-gold to-saffron rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <span className="font-cinzel text-xl font-bold text-sacred-gold">Vedic Astrology</span>
            </div>

            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-sacred-gold transition">{t.footer.privacy}</a>
              <a href="#" className="hover:text-sacred-gold transition">{t.footer.terms}</a>
              <a href="#" className="hover:text-sacred-gold transition">{t.footer.contact}</a>
            </div>

            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Vedic Astrology. {t.footer.rights}
            </p>
          </div>

          <p className="text-center text-gray-600 text-xs mt-8">
            {t.footer.disclaimer}
          </p>
        </div>
      </footer>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModal.open}
        onClose={() => setCheckoutModal({ open: false, plan: '', planKey: '' })}
        plan={checkoutModal.plan}
        planKey={checkoutModal.planKey}
      />
    </main>
  )
}
