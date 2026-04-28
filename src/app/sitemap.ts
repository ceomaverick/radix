import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://radixinfra.com'

  const staticRoutes = [
    '',
    '/about/ethics',
    '/about/profile',
    '/about/team',
    '/about/vision',
    '/careers',
    '/contact',
    '/projects',
    '/projects/completed',
    '/projects/current',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly' as any,
    priority: route === '' ? 1.0 : 0.5,
  }))

  const projectSlugs = ['koshi', 'sonbhadra']
  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as any,
    priority: 0.7,
  }))

  return [...staticRoutes, ...projectRoutes]
}
