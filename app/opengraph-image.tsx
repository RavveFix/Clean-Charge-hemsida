import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt =
  'Clean Charge AB — Laddbox för företag och fastighetsbolag';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Laddbox för företag & fastighetsbolag.',
    subtitle:
      'Vi levererar, konfigurerar och driftar er laddinfrastruktur. Auktoriserad Zaptec & Monta-partner.',
  });
}
