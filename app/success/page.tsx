'use client'

import { CheckCircle, Mail, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="vedic-card p-12">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>

          {/* Heading */}
          <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-sacred-gold mb-4">
            Payment Successful!
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Thank you for your purchase. Your cosmic journey with the Shubham Method begins now.
          </p>

          {/* Next Steps */}
          <div className="bg-cosmic/50 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-cinzel text-xl text-sacred-gold mb-4">What Happens Next?</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sacred-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-sacred-gold" />
                </div>
                <div>
                  <p className="font-semibold text-white">Check Your Email</p>
                  <p className="text-gray-400 text-sm">
                    You'll receive a confirmation email with a form to submit your birth details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-neon-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-neon-cyan" />
                </div>
                <div>
                  <p className="font-semibold text-white">Report Generation</p>
                  <p className="text-gray-400 text-sm">
                    Once we receive your birth data, your personalized report will be prepared within 24-48 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-saffron/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-saffron" />
                </div>
                <div>
                  <p className="font-semibold text-white">Receive Your Report</p>
                  <p className="text-gray-400 text-sm">
                    Your comprehensive Shubham Method analysis will be delivered to your email as a beautiful PDF.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sanskrit blessing */}
          <p className="sanskrit text-lg mb-8">|| Om Shubham Bhavatu ||</p>

          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sacred-gold hover:text-saffron transition"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
