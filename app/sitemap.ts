import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'

const BASE_URL = 'https://shubham-landing.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts()

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: BASE_URL,
          fr: `${BASE_URL}?lang=fr`,
        },
      },
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE_URL}/blog`,
          fr: `${BASE_URL}/blog?lang=fr`,
        },
      },
    },
    {
      url: `${BASE_URL}/guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...blogUrls,
  ]
}
