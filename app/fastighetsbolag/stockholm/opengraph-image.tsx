import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Laddbox för BRF i Stockholm — lastbalansering i innerstadsgarage';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Laddbox för BRF i Stockholm.',
    subtitle: 'Lastbalansering i innerstadsgarage – Zaptec och Monta.',
  });
}
