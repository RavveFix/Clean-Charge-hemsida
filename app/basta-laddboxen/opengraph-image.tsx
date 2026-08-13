import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Bästa laddboxen 2026 — Zaptec, Easee och Autel jämförda';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Bästa laddboxen 2026.',
    subtitle: 'Zaptec, Easee och Autel jämförda utifrån verkliga behov.',
  });
}
