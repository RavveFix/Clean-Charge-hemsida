import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HeroSegments from '@/components/HeroSegments';
import VideoSection from '@/components/VideoSection';
import FeaturesBento from '@/components/FeaturesBento';
import MontaSection from '@/components/MontaSection';
import StatsStrip from '@/components/StatsStrip';
import SolutionsSection from '@/components/SolutionsSection';
import AboutSection from '@/components/AboutSection';
import ClientLayout from '@/app/ClientLayout';
import { openGraphImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'Clean Charge AB | Laddbox för Företag & Fastighetsbolag' },
  description:
    'Clean Charge AB levererar, konfigurerar och driftar laddboxar för företag och fastighetsbolag i Sverige. Auktoriserad Zaptec & Monta-partner. Få offert idag.',
  alternates: { canonical: 'https://www.cleancharge.se' },
  openGraph: {
    title: 'Clean Charge AB | Laddbox för Företag & Fastighetsbolag',
    description:
      'Vi levererar, konfigurerar och driftar er laddinfrastruktur – från offert till färdig drift. Auktoriserad Zaptec & Monta-partner.',
    url: 'https://www.cleancharge.se',
    images: openGraphImages(),
  },
};

export default function HomePage() {
  return (
    <ClientLayout>
      <div className="min-h-screen flex flex-col bg-white">
        <Hero />
        <HeroSegments />
        <VideoSection />
        <StatsStrip />
        <FeaturesBento />
        <MontaSection />
        <SolutionsSection />
        <AboutSection />
      </div>
    </ClientLayout>
  );
}
