import type { NextConfig } from 'next';

// Permissiv baslinje-CSP: tillåter kända integrationer (Spline 3D, Vercel
// Analytics, Google Fonts/Maps, bildvärdar) men låser ner object/base/form
// och förbjuder framing. 'unsafe-inline'/'unsafe-eval' krävs av Next.js
// hydrering och Spline-runtime så länge vi inte kör nonce-baserad CSP.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://unpkg.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  "media-src 'self' blob: https://videos.pexels.com",
  "connect-src 'self' https://prod.spline.design https://*.spline.design https://unpkg.com https://www.elprisetjustnu.se https://fonts.googleapis.com https://fonts.gstatic.com https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "worker-src 'self' blob: https://unpkg.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cleancharge.se' },
      { protocol: 'https', hostname: 'www.cleancharge.se' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'monta.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        // Apex → www (308) för att undvika duplicerat innehåll. Canonical,
        // sitemap och robots pekar redan på www; detta tvingar dit besökare/bottar.
        source: '/:path*',
        has: [{ type: 'host', value: 'cleancharge.se' }],
        destination: 'https://www.cleancharge.se/:path*',
        permanent: true,
      },
      // 301-karta för gamla WordPress-sajtens URL:er (inventerade via Wayback
      // CDX + Googles index 2026-07-13). Relansen till Next.js släppte alla
      // gamla paths till 404 — dessa behåller länkkraft och fångar besökare
      // från gamla SERP-träffar. Specifika regler före wildcard (första träff vinner).
      { source: '/brf', destination: '/fastighetsbolag', permanent: true },
      { source: '/kommersiellt', destination: '/foretag', permanent: true },
      { source: '/kopvillkor', destination: '/villkor', permanent: true },
      { source: '/gdpr', destination: '/integritetspolicy', permanent: true },
      { source: '/vanliga-fragor', destination: '/support', permanent: true },
      { source: '/skatteavdrag', destination: '/ladda-bilen-bidrag', permanent: true },
      { source: '/installation', destination: '/vad-kostar-laddbox', permanent: true },
      { source: '/installation-utford-i-orebro', destination: '/laddbox-orebro', permanent: true },
      { source: '/installation-prylify-se-i-vasteras', destination: '/laddbox-orebro', permanent: true },
      { source: '/installatorer', destination: '/kontakt', permanent: true },
      { source: '/3-skal-att-valja-clean-charge', destination: '/om-oss', permanent: true },
      { source: '/inkopslista', destination: '/produkter', permanent: true },
      { source: '/webshop', destination: '/produkter', permanent: true },
      { source: '/varukorg', destination: '/produkter', permanent: true },
      // Siemens-produkterna var DC-laddare; övriga produkt-URL:er → /produkter.
      { source: '/produkt/siemens-:slug', destination: '/dc-laddstation', permanent: true },
      { source: '/produkt/:slug*', destination: '/produkter', permanent: true },
      { source: '/produkt-kategori/snabbladdare', destination: '/dc-laddstation', permanent: true },
      { source: '/produkt-kategori/:slug*', destination: '/produkter', permanent: true },
      // Produktblad-PDF:er m.m. under wp-content → produktsidan.
      { source: '/wp-content/:path*', destination: '/produkter', permanent: true },
      // WP-cruft utan motsvarighet på nya sajten → startsidan.
      { source: '/en/:path*', destination: '/', permanent: true },
      { source: '/nyheter/:path*', destination: '/', permanent: true },
      { source: '/mitt-konto/:path*', destination: '/', permanent: true },
      { source: '/category/:path*', destination: '/', permanent: true },
      { source: '/tag/:path*', destination: '/', permanent: true },
      { source: '/author/:path*', destination: '/', permanent: true },
      { source: '/comments/feed', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/woodmart_slide/:path*', destination: '/', permanent: true },
      { source: '/evercompare', destination: '/', permanent: true },
      { source: '/404-2', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
