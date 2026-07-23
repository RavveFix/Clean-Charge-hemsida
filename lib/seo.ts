import type { Metadata } from 'next';

// Gemensam og-bas för sidor med eget openGraph-objekt. Next.js gör shallow
// merge per toppfält, så en sidas openGraph ersätter layoutens helt – utan
// denna spread tappar undersidorna og:site_name och og:locale.
export const openGraphBase = {
  siteName: 'Clean Charge AB',
  locale: 'sv_SE',
} satisfies Metadata['openGraph'];

const DEFAULT_OG_IMAGE_ALT =
  'Clean Charge AB — laddboxar, installation och drift för företag och fastighetsbolag';

export function openGraphImages(
  alt = DEFAULT_OG_IMAGE_ALT,
  path = '/opengraph-image',
): NonNullable<NonNullable<Metadata['openGraph']>['images']> {
  return [
    {
      url: path,
      width: 1200,
      height: 630,
      alt,
      type: 'image/png',
    },
  ];
}
