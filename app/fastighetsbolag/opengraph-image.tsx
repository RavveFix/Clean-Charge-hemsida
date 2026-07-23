import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Laddbox för BRF och fastighetsbolag — debitering via Monta';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Laddbox för BRF & fastighet.',
    subtitle:
      'Projektering, installation och individuell debitering – nyckelfärdigt.',
  });
}
