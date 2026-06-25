import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HeroSegments from '@/components/HeroSegments';
import VideoSection from '@/components/VideoSection';
import FeaturesBento from '@/components/FeaturesBento';
import MontaSection from '@/components/MontaSection';
import StatsStrip from '@/components/StatsStrip';
import SolutionsSection from '@/components/SolutionsSection';
import AboutSection from '@/components/AboutSection';
import FaqSection from '@/components/FaqSection';
import ClientLayout from '@/app/ClientLayout';
import { faqJsonLd } from '@/lib/jsonld';
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

const faqEntries = [
  {
    question: 'Vad gör Clean Charge AB?',
    answer:
      'Vi levererar, konfigurerar och driftar laddboxar och laddstationer för företag, fastighetsbolag och privatpersoner – från offert och projektering till installation av behörig elektriker och löpande drift. Vi är auktoriserad Zaptec- och Monta-partner.',
  },
  {
    question: 'Installerar ni laddboxar i hela Sverige?',
    answer:
      'Ja, vi projekterar och installerar laddboxar och DC-laddstationer i hela Sverige via vårt nätverk av behöriga elektriker. Kontakta oss så tar vi fram en kostnadsfri offert utifrån er plats och era behov.',
  },
  {
    question: 'Vilka märken av laddboxar arbetar ni med?',
    answer:
      'Vi erbjuder AC- och DC-laddboxar från Zaptec, Easee och Autel, uppkopplade via Monta. Vi handplockar hårdvaran för driftsäkerhet, säkerhet och design och hjälper er välja rätt laddbox för företag, fastighet eller hem.',
  },
  {
    question: 'Vad kostar det att installera en laddbox?',
    answer:
      'Priset beror på antal laddpunkter, elnätets förutsättningar och vald hårdvara. Vi tar alltid fram en kostnadsfri offert. Som privatperson kan du dessutom få 50 % grönt teknik-avdrag på material och arbete – avdraget dras direkt på fakturan.',
  },
  {
    question: 'Sköter ni drift och support efter installationen?',
    answer:
      'Ja. Efter installationen ansvarar vi för konfiguration, uppkoppling mot Monta och löpande drift. Vår support når du måndag–fredag om du behöver hjälp med din laddbox eller laddstation.',
  },
];

const faq = faqJsonLd(faqEntries);

export default function HomePage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
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
      <FaqSection entries={faqEntries} />
    </ClientLayout>
  );
}
