import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://vedastro-ten.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/crypto-checkout',
          '/success',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
