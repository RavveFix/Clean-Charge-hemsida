import type { Metadata } from 'next';

const DEFAULT_OG_IMAGE_ALT =
  'Clean Charge AB — laddboxar, installation och drift för företag och fastighetsbolag';

export function openGraphImages(
  alt = DEFAULT_OG_IMAGE_ALT,
): NonNullable<NonNullable<Metadata['openGraph']>['images']> {
  return [
    {
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt,
      type: 'image/png',
    },
  ];
}
