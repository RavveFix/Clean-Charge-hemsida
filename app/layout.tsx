import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cleancharge.se'),
  title: {
    default: 'Clean Charge AB | Laddbox för Företag & Fastighetsbolag',
    template: '%s | Clean Charge AB',
  },
  description:
    'Clean Charge AB levererar, konfigurerar och driftar laddboxar för företag och fastighetsbolag. Auktoriserad Zaptec & Monta-partner. Ring 019-760 42 90.',
  keywords: [
    'laddbox företag',
    'laddstation fastighetsbolag',
    'AC laddbox installation',
    'DC laddstation',
    'Monta installation',
    'laddbox konfiguration',
    'elbilsladdning Sverige',
    'Clean Charge',
  ],
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://www.cleancharge.se',
    siteName: 'Clean Charge AB',
    title: 'Clean Charge AB | Laddbox för Företag & Fastighetsbolag',
    description:
      'Vi levererar, konfigurerar och driftar er laddinfrastruktur – helt klart. Auktoriserad Zaptec & Monta-partner.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Charge AB | Laddbox för Företag & Fastighetsbolag',
    description:
      'Vi levererar, konfigurerar och driftar er laddinfrastruktur – helt klart.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.cleancharge.se',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Clean Charge AB',
  image: 'https://www.cleancharge.se/logo.png',
  '@id': 'https://www.cleancharge.se',
  url: 'https://www.cleancharge.se',
  telephone: '+46197604290',
  email: 'info@cleancharge.se',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dialoggatan 12B',
    addressLocality: 'Örebro',
    postalCode: '70374',
    addressCountry: 'SE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 59.278,
    longitude: 15.197,
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={instrumentSans.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans bg-white text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
