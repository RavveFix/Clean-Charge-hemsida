import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Laddbox Örebro — lokal installation med 50% Grön Teknik';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Laddbox Örebro.',
    subtitle:
      'Lokala laddexperter med kontor i Örebro. Installation med 50 % Grön Teknik-avdrag.',
  });
}
