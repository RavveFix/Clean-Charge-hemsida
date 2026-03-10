import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cleancharge.se';
  const now = new Date();

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/foretag', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/fastighetsbolag', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/dc-laddstation', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/monta', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/produkter', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/privat', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/publik', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/om-oss', priority: 0.65, changeFrequency: 'monthly' as const },
    { url: '/kontakt', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/support', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/integritetspolicy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/villkor', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
