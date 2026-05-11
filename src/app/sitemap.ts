import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://basavaraj.tech',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}