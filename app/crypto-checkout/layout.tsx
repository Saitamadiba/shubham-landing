import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crypto Payment',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function CryptoCheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
