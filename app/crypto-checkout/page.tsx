'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Copy, Check, ArrowLeft, Mail, Bitcoin, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { translations, Language } from '@/lib/translations'
import QRCode from 'qrcode'

const WALLET_ADDRESSES = {
  btc: '113TatoGaZqKM5nEwmLxr9cwKpMZkm9rcQ',
  eth: '0xeffd497c02d15e0b15655ead1136d8a9903c13ee',
}

type CryptoOption = 'btc' | 'eth' | 'usdt' | 'usdc'

const cryptoOptions: { id: CryptoOption; name: string; symbol: string; network: string; address: string }[] = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', network: 'Bitcoin Network', address: WALLET_ADDRESSES.btc },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', network: 'ERC-20', address: WALLET_ADDRESSES.eth },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', network: 'ERC-20', address: WALLET_ADDRESSES.eth },
  { id: 'usdc', name: 'USD Coin', symbol: 'USDC', network: 'ERC-20', address: WALLET_ADDRESSES.eth },
]

function CryptoCheckoutContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'essential'
  const planName = searchParams.get('planName') || 'Essential'
  const price = searchParams.get('price') || '67'
  const lang = (searchParams.get('lang') || 'en') as Language
  const email = searchParams.get('email') || ''

  const t = translations[lang]?.cryptoCheckout || translations.en.cryptoCheckout

  const [selectedCrypto, setSelectedCrypto] = useState<CryptoOption>('btc')
  const [copied, setCopied] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  const selectedOption = cryptoOptions.find(c => c.id === selectedCrypto) || cryptoOptions[0]

  useEffect(() => {
    const generateQR = async () => {
      try {
        const qrData = selectedCrypto === 'btc'
          ? `bitcoin:${selectedOption.address}?amount=${price}`
          : selectedOption.address
        const url = await QRCode.toDataURL(qrData, {
          width: 200,
          margin: 2,
          color: {
            dark: '#d4af37',
            light: '#0a0a0f',
          },
        })
        setQrCodeUrl(url)
      } catch (err) {
        console.error('QR generation error:', err)
      }
    }
    generateQR()
  }, [selectedCrypto, selectedOption.address, price])

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(selectedOption.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  const emailSubject = encodeURIComponent(t.emailSubjectText.replace('{plan}', planName))
  const emailBody = encodeURIComponent(`Plan: ${planName}\nAmount: $${price} USD\n\nTransaction ID: [Your transaction hash here]\n\nBirth Details:\n- Name: \n- Date: \n- Time: \n- Place: `)
  const mailtoLink = `mailto:${t.contactEmail}?subject=${emailSubject}&body=${emailBody}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-cosmic to-primary">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          href="/#pricing"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-sacred-gold transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backToCheckout}
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-sacred-gold/10 border border-sacred-gold/30 rounded-full px-4 py-2 mb-4">
            <Bitcoin className="w-5 h-5 text-sacred-gold" />
            <span className="text-sacred-gold font-medium">Crypto Payment</span>
          </div>
          <h1 className="font-cinzel text-3xl font-bold text-sacred-gold mb-2">
            {t.title}
          </h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        {/* Order Summary */}
        <div className="bg-secondary border border-sacred-gold/30 rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">{t.amount}</p>
              <p className="text-2xl font-bold text-white">{planName}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-sacred-gold">${price}</p>
              <p className="text-gray-500 text-sm">USD</p>
            </div>
          </div>
        </div>

        {/* Crypto Selector */}
        <div className="bg-secondary border border-sacred-gold/30 rounded-2xl p-6 mb-6">
          <label className="block text-sm text-gray-400 mb-3">{t.selectCurrency}</label>
          <div className="grid grid-cols-4 gap-2">
            {cryptoOptions.map((crypto) => (
              <button
                key={crypto.id}
                onClick={() => setSelectedCrypto(crypto.id)}
                className={`py-3 px-2 rounded-lg border-2 transition text-center ${
                  selectedCrypto === crypto.id
                    ? 'border-sacred-gold bg-sacred-gold/10 text-sacred-gold'
                    : 'border-gray-700 text-gray-400 hover:border-gray-600'
                }`}
              >
                <div className="font-bold">{crypto.symbol}</div>
                <div className="text-xs opacity-70">{crypto.network}</div>
              </button>
            ))}
          </div>
        </div>

        {/* QR Code & Address */}
        <div className="bg-secondary border border-sacred-gold/30 rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* QR Code */}
            <div className="flex-shrink-0">
              <p className="text-sm text-gray-400 mb-2 text-center">{t.scanQr}</p>
              <div className="bg-primary p-3 rounded-xl border border-sacred-gold/20">
                {qrCodeUrl && (
                  <img
                    src={qrCodeUrl}
                    alt={`${selectedOption.symbol} QR Code`}
                    className="w-48 h-48"
                  />
                )}
              </div>
            </div>

            {/* Address */}
            <div className="flex-1 w-full">
              <p className="text-sm text-gray-400 mb-2">{t.orCopyAddress}</p>
              <div className="bg-primary border border-sacred-gold/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sacred-gold font-bold">{selectedOption.symbol}</span>
                  <span className="text-gray-500 text-sm">({selectedOption.network})</span>
                </div>
                <div className="break-all text-sm text-gray-300 font-mono mb-3">
                  {selectedOption.address}
                </div>
                <button
                  onClick={copyAddress}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg transition ${
                    copied
                      ? 'bg-green-600/20 text-green-400 border border-green-500/30'
                      : 'bg-sacred-gold/10 text-sacred-gold border border-sacred-gold/30 hover:bg-sacred-gold/20'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      {t.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>

              {/* Network Note */}
              <p className="text-xs text-amber-500/80 mt-2">
                {selectedCrypto === 'btc' ? t.btcNote : t.ethNote}
              </p>
            </div>
          </div>
        </div>

        {/* After Payment Instructions */}
        <div className="bg-secondary border border-sacred-gold/30 rounded-2xl p-6">
          <h3 className="font-cinzel text-lg font-bold text-sacred-gold mb-4">
            {t.afterPayment}
          </h3>

          <p className="text-gray-300 mb-4">
            {t.afterPaymentInstructions}{' '}
            <a href={`mailto:${t.contactEmail}`} className="text-sacred-gold hover:underline">
              {t.contactEmail}
            </a>
          </p>

          <div className="bg-primary border border-sacred-gold/10 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-400 mb-2">{t.includeInEmail}:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• {t.transactionId}</li>
              <li>• {t.yourBirthDetails}</li>
              <li>• Plan: {planName} (${price})</li>
            </ul>
          </div>

          <a
            href={mailtoLink}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sacred-gold to-saffron text-primary py-3 rounded-xl font-bold hover:shadow-sacred transition"
          >
            <Mail className="w-5 h-5" />
            Send Payment Confirmation Email
          </a>

          <p className="text-center text-gray-500 text-sm mt-4">
            {t.deliveryNote}
          </p>
        </div>
      </div>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-cosmic to-primary flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-sacred-gold animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Loading checkout...</p>
      </div>
    </div>
  )
}

export default function CryptoCheckoutPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CryptoCheckoutContent />
    </Suspense>
  )
}
