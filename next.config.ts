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
};

export default nextConfig;
