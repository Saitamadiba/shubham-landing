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
  FileText,
  Users,
  Shield,
  Zap,
  BookOpen,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

// Pricing data
const pricingPlans = [
  {
    name: 'Essential',
    sanskrit: 'Pratham',
    price: 67,
    originalPrice: 97,
    description: 'Perfect for beginners seeking cosmic clarity',
    phases: '5 Phases',
    features: [
      'Birth Chart Analysis (D1)',
      'Planetary Positions & Dignities',
      'Major Yoga Detection',
      'Nakshatra Analysis',
      'Basic Life Purpose Insights',
      'PDF Report (25+ pages)',
    ],
    popular: false,
    color: 'neon-cyan',
  },
  {
    name: 'Complete',
    sanskrit: 'Sampurna',
    price: 197,
    originalPrice: 297,
    description: 'Full 14-phase Shubham Method analysis',
    phases: '14 Phases',
    features: [
      'Everything in Essential, plus:',
      'Dispositor Chain Analysis',
      'All Varga Charts (D9, D10, D3)',
      'Dasha Timing Predictions',
      'Career & Marriage Analysis',
      'Trauma & Healing Patterns',
      'Remedial Recommendations',
      'PDF Report (80+ pages)',
    ],
    popular: true,
    color: 'sacred-gold',
  },
  {
    name: 'Premium',
    sanskrit: 'Vishesh',
    price: 497,
    originalPrice: 697,
    description: 'Complete analysis + personal consultation',
    phases: '14 Phases + Live',
    features: [
      'Everything in Complete, plus:',
      '60-min Video Consultation',
      'Personalized Q&A Session',
      'Custom Remedial Plan',
      'Annual Transit Forecast',
      '30-day Email Support',
      'Priority Report Delivery',
    ],
    popular: false,
    color: 'saffron',
  },
]

// Testimonials
const testimonials = [
  {
    name: 'Marie L.',
    location: 'Paris, France',
    text: 'The depth of this analysis is unlike anything I have seen. The Shubham Method revealed patterns in my life I never understood before.',
    rating: 5,
  },
  {
    name: 'David K.',
    location: 'London, UK',
    text: 'Professional, accurate, and beautifully presented. The career analysis was spot-on and helped me make a major life decision.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    location: 'Mumbai, India',
    text: 'As someone familiar with Jyotish, I was impressed by the methodology. The 14-phase approach is comprehensive and traditional.',
    rating: 5,
  },
]

// FAQ
const faqs = [
  {
    question: 'What is the Shubham Method?',
    answer: 'The Shubham Method is a comprehensive 14-phase Vedic astrology analysis system that combines traditional Jyotish wisdom with systematic interpretation. It covers everything from basic planetary positions to deep psychological patterns and life timing.',
  },
  {
    question: 'How accurate is Vedic Astrology?',
    answer: 'Vedic astrology (Jyotish) has been practiced for over 5,000 years. While we present this as guidance rather than prediction, many find the insights remarkably aligned with their life experiences. We use precise astronomical calculations with the Lahiri ayanamsa.',
  },
  {
    question: 'What information do I need to provide?',
    answer: 'You will need your exact birth date, birth time (as accurate as possible), and birth location. The more precise your birth time, the more accurate your analysis will be.',
  },
  {
    question: 'How long until I receive my report?',
    answer: 'Essential reports are delivered within 24-48 hours. Complete reports take 2-3 business days. Premium consultations are scheduled within 5-7 days of purchase.',
  },
  {
    question: 'Is my information kept private?',
    answer: 'Absolutely. Your birth data is used solely for generating your report and is never shared with third parties. We take privacy seriously and comply with GDPR regulations.',
  },
]

// Features
const features = [
  {
    icon: <Moon className="w-8 h-8" />,
    title: '14-Phase Analysis',
    description: 'Comprehensive methodology covering every aspect of your cosmic blueprint',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Nakshatra Wisdom',
    description: 'Deep dive into the 27 lunar mansions and their influence on your soul',
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: 'Dasha Timing',
    description: 'Understand your life cycles and optimal timing for major decisions',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Yoga Detection',
    description: 'Identify powerful planetary combinations shaping your destiny',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Varga Analysis',
    description: 'Divisional charts for career, marriage, and spiritual insights',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Remedial Guidance',
    description: 'Practical recommendations aligned with Vedic traditions',
  },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleCheckout = async (planName: string, price: number) => {
    // TODO: Implement Stripe checkout
    alert(`Checkout for ${planName} - $${price}\n\nStripe integration coming soon!`)
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
              <span className="font-cinzel text-xl font-bold text-sacred-gold">Shubham Method</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-sacred-gold transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-sacred-gold transition">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-sacred-gold transition">Reviews</a>
              <a href="#faq" className="text-gray-300 hover:text-sacred-gold transition">FAQ</a>
              <a
                href="#pricing"
                className="bg-gradient-to-r from-sacred-gold to-saffron text-primary px-6 py-2 rounded-full font-semibold hover:shadow-sacred transition"
              >
                Get Your Report
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-sacred-gold/20 p-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-sacred-gold transition py-2">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-sacred-gold transition py-2">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-sacred-gold transition py-2">Reviews</a>
              <a href="#faq" className="text-gray-300 hover:text-sacred-gold transition py-2">FAQ</a>
              <a
                href="#pricing"
                className="bg-gradient-to-r from-sacred-gold to-saffron text-primary px-6 py-3 rounded-full font-semibold text-center"
              >
                Get Your Report
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
            <span className="text-sm text-sacred-gold">Ancient Wisdom, Modern Clarity</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-100">Discover Your</span>
            <br />
            <span className="text-sacred-gold text-glow-gold">Cosmic Blueprint</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            The Shubham Method delivers the depth of a traditional Jyotish consultation
            in a beautifully designed, comprehensive report.
          </p>

          {/* Sanskrit motto */}
          <p className="sanskrit text-lg mb-10">|| Jyotisham Surya Chandra Manso ||</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#pricing"
              className="group bg-gradient-to-r from-sacred-gold to-saffron text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-sacred transition flex items-center gap-2"
            >
              Get Your Report
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#features"
              className="border-2 border-neon-cyan/50 text-neon-cyan px-8 py-4 rounded-full font-semibold text-lg hover:bg-neon-cyan/10 transition"
            >
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>500+ Reports Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-neon-cyan" />
              <span>24-48hr Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sacred-gold" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              Beautiful, Comprehensive Reports
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Each report is meticulously crafted with our Vedic-Futuristic design,
              combining sacred aesthetics with modern clarity.
            </p>
          </div>

          {/* Report mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="vedic-card p-8 shadow-sacred">
              <div className="bg-gradient-to-br from-primary to-cosmic rounded-xl p-6 border border-sacred-gold/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sacred-gold font-cinzel text-sm tracking-wider">PHASE 1 / 14</p>
                    <h3 className="font-cinzel text-2xl font-bold text-sacred-gold">Evaluation Initiale</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Shubham Method V3.2</p>
                  </div>
                </div>

                {/* Sample content */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-cosmic/50 rounded-lg p-4 border border-sacred-gold/20">
                    <p className="text-neon-cyan text-sm mb-1">Ascendant</p>
                    <p className="font-cinzel text-xl text-sacred-gold">Cancer 24°49'</p>
                  </div>
                  <div className="bg-cosmic/50 rounded-lg p-4 border border-sacred-gold/20">
                    <p className="text-neon-cyan text-sm mb-1">Moon Nakshatra</p>
                    <p className="font-cinzel text-xl text-sacred-gold">Rohini Pada 2</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">Moon Exalted</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">Mercury Exalted</span>
                  <span className="bg-neon-cyan/20 text-neon-cyan px-3 py-1 rounded-full text-sm border border-neon-cyan/30">Saturn Own Sign</span>
                </div>

                <p className="text-gray-400 text-sm">
                  Your report includes 14 comprehensive phases covering planetary positions,
                  yoga formations, dasha timing, career analysis, relationship patterns, and more...
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
            <p className="text-neon-cyan text-sm tracking-wider mb-2">WHAT'S INCLUDED</p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              The 14-Phase Shubham Method
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic approach to Vedic astrology that leaves no stone unturned
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="vedic-card p-6 hover:border-sacred-gold/40 transition group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-sacred-gold/20 to-saffron/20 rounded-xl flex items-center justify-center mb-4 text-sacred-gold group-hover:scale-110 transition">
                  {feature.icon}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neon-cyan text-sm tracking-wider mb-2">PRICING</p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              Choose Your Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Select the depth of analysis that resonates with your seeking
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`vedic-card p-8 relative ${plan.popular ? 'border-sacred-gold/50 shadow-sacred' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sacred-gold to-saffron text-primary px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <p className={`text-${plan.color} text-sm tracking-wider mb-1`}>{plan.sanskrit}</p>
                  <h3 className="font-cinzel text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-gray-500 line-through text-lg">${plan.originalPrice}</span>
                    <span className={`font-cinzel text-5xl font-bold text-${plan.color}`}>${plan.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{plan.phases}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 text-${plan.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCheckout(plan.name, plan.price)}
                  className={`w-full py-4 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-sacred-gold to-saffron text-primary hover:shadow-sacred'
                      : 'border-2 border-sacred-gold/50 text-sacred-gold hover:bg-sacred-gold/10'
                  }`}
                >
                  Get {plan.name} Report
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            All prices in USD. Secure payment via Stripe. 7-day satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neon-cyan text-sm tracking-wider mb-2">TESTIMONIALS</p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="vedic-card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sacred-gold fill-sacred-gold" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
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
            <p className="text-neon-cyan text-sm tracking-wider mb-2">FAQ</p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
              Begin Your Cosmic Journey
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Unlock the wisdom of your birth chart with the comprehensive Shubham Method analysis.
              Your cosmic blueprint awaits.
            </p>
            <p className="sanskrit text-lg mb-8">|| Om Gurave Namah ||</p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sacred-gold to-saffron text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-sacred transition"
            >
              Get Your Report Now
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
              <span className="font-cinzel text-xl font-bold text-sacred-gold">Shubham Method</span>
            </div>

            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-sacred-gold transition">Privacy Policy</a>
              <a href="#" className="hover:text-sacred-gold transition">Terms of Service</a>
              <a href="#" className="hover:text-sacred-gold transition">Contact</a>
            </div>

            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Shubham Method. All rights reserved.
            </p>
          </div>

          <p className="text-center text-gray-600 text-xs mt-8">
            For entertainment and spiritual guidance purposes. Not a substitute for professional advice.
          </p>
        </div>
      </footer>
    </main>
  )
}
