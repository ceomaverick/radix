import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://radixinfra.com'

  const staticRoutes = [
    { route: '', freq: 'daily', prio: 1.0 },
    { route: '/about/ethics', freq: 'monthly', prio: 0.5 },
    { route: '/about/profile', freq: 'monthly', prio: 0.5 },
    { route: '/about/team', freq: 'monthly', prio: 0.5 },
    { route: '/about/vision', freq: 'monthly', prio: 0.5 },
    { route: '/careers', freq: 'monthly', prio: 0.5 },
    { route: '/contact', freq: 'monthly', prio: 0.5 },
    { route: '/projects', freq: 'weekly', prio: 0.8 },
    { route: '/projects/completed', freq: 'weekly', prio: 0.8 },
    { route: '/projects/current', freq: 'weekly', prio: 0.8 },
  ].map(({ route, freq, prio }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: freq as any,
    priority: prio,
  }))

  const projectSlugs = ['koshi', 'sonbhadra']
  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as any,
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes]
}
