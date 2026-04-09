import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
  
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Explicitly tell Google NOT to crawl dashboard or admin routes
      disallow: ['/restaurant/dashboard/', '/admin/', '/api/'],
    },
    sitemap: 'https://dished.co.ke/sitemap.xml',
  }
}