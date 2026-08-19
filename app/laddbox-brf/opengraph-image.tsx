import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Laddbox till BRF — lastbalansering, debitering och bidrag';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Laddbox till BRF.',
    subtitle: 'Lastbalansering, individuell debitering och drift med Monta.',
  });
}
