import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cleancharge.se';

  // lastModified speglar när varje sidas innehåll senast ändrades på riktigt.
  // Statiska datum (inte new Date()) så signalen är stabil mellan deploys –
  // uppdatera datumet när sidans innehåll faktiskt ändras.
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: '2026-06-25' },
    { url: '/foretag', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-06-22' },
    { url: '/fastighetsbolag', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-06-22' },
    { url: '/dc-laddstation', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-06-22' },
    { url: '/monta', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-23' },
    { url: '/produkter', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: '2026-06-19' },
    { url: '/privat', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: '2026-06-19' },
    { url: '/publik', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: '2026-06-19' },
    { url: '/om-oss', priority: 0.65, changeFrequency: 'monthly' as const, lastModified: '2026-06-22' },
    { url: '/kontakt', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-06-22' },
    { url: '/support', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: '2026-06-19' },
    { url: '/integritetspolicy', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-06-19' },
    { url: '/villkor', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-06-19' },
    { url: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-06-19' },
  ];

  return routes.map(({ url, priority, changeFrequency, lastModified }) => ({
    url: `${baseUrl}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
