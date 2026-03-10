import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import FeaturesBento from '@/components/FeaturesBento';
import MontaSection from '@/components/MontaSection';
import StatsStrip from '@/components/StatsStrip';
import SolutionsSection from '@/components/SolutionsSection';
import AboutSection from '@/components/AboutSection';
import ClientLayout from '@/app/ClientLayout';

export const metadata: Metadata = {
  title: 'Laddbox för Företag & Fastighetsbolag | Clean Charge AB',
  description:
    'Clean Charge AB levererar, konfigurerar och driftar laddboxar för företag och fastighetsbolag i hela Sverige. Auktoriserad Zaptec & Monta-partner. Få offert idag.',
  alternates: { canonical: 'https://www.cleancharge.se' },
};

export default function HomePage() {
  return (
    <ClientLayout>
      <div className="min-h-screen flex flex-col bg-white">
        <Hero />
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
