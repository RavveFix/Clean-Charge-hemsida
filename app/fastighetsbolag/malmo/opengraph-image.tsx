import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Laddbox för nyare BRF i Malmö och Lund — Öresundsregionen';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Laddbox för BRF i Malmö.',
    subtitle: 'Nyare föreningsgarage i Malmö, Lund och Öresund.',
  });
}
