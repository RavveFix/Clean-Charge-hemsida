import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import AboutSection from '@/components/AboutSection';

export const metadata: Metadata = {
  title: 'Om Oss – Clean Charge AB',
  description:
    'Clean Charge AB grundades 2021 i Örebro. Vi är en auktoriserad partner för Zaptec och Monta och hjälper företag och fastighetsbolag med komplett laddinfrastruktur.',
  alternates: { canonical: 'https://www.cleancharge.se/om-oss' },
};

export default function OmOssPage() {
  return (
    <ClientLayout>
      <div className="pt-32">
        <AboutSection />
      </div>
    </ClientLayout>
  );
}
