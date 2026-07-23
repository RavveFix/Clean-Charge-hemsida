import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Vad kostar en laddbox 2026 — prisguide villa, BRF och företag';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Vad kostar en laddbox 2026?',
    subtitle:
      'Riktpriser för villa, BRF, samfällighet och företag – inklusive installation.',
  });
}
