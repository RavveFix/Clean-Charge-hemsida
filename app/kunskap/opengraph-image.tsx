import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Clean Charges kunskapsbank — guider om laddboxar, priser och bidrag';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Guider om laddboxar.',
    subtitle: 'Faktagranskade råd om priser, bidrag, installation och produktval.',
  });
}
