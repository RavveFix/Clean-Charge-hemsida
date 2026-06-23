import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import MontaHubSection from '@/components/MontaHubSection';
import FaqSection from '@/components/FaqSection';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';
import { openGraphImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Monta & IT-drift – Konfiguration',
  description:
    'Clean Charge AB programmerar och konfigurerar dina laddboxar med Monta som betalplattform. Vi sköter driften och ser till att laddarna alltid är online.',
  alternates: { canonical: 'https://www.cleancharge.se/monta' },
  openGraph: {
    title: 'Monta Hub – Operativsystem för Elbilister | Clean Charge AB',
    description:
      'SmartCharge, roaming till 500 000+ laddpunkter och betalning via app eller terminal. Authorized Operator Partner.',
    url: 'https://www.cleancharge.se/monta',
    images: openGraphImages('Monta och IT-drift — konfiguration, betalning och fjärrövervakning'),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Monta & IT-drift', path: '/monta' },
]);

const jsonLd = serviceJsonLd({
  name: 'Monta Konfiguration och IT-drift',
  path: '/monta',
  description:
    'Konfiguration, betalplattform, fjärrövervakning och löpande IT-drift för laddboxar via Monta.',
  serviceType: 'EV Charging Software Configuration and Operations',
});

const faqEntries = [
  {
    question: 'Vad är Monta och varför använder Clean Charge det?',
    answer:
      'Monta är plattformen som kopplar ihop laddboxen med betalsystem, energimarknaden och Europas publika laddnätverk. Vi integrerar Monta som standard i våra installationer eftersom det ger dig betalning, fjärrstyrning och statistik i en och samma app – oavsett om du är privatperson, BRF eller företag.',
  },
  {
    question: 'Måste jag betala en abonnemangsavgift för att använda Monta?',
    answer:
      'För hemmabruk kan du komma igång med Montas kostnadsfria nivå och bara betala för den el du laddar. För BRF:er och företag tillkommer en löpande plattformsavgift per laddpunkt som täcker debitering, support och drift. Vi går igenom vilken nivå som passar er i offerten.',
  },
  {
    question: 'Kan jag ladda vid publika laddstationer med Monta-appen?',
    answer:
      'Ja. Via Montas roaming får du tillgång till över 500 000 publika laddpunkter i Europa direkt i appen. Du använder samma app hemma och borta och ser priset innan du startar laddningen.',
  },
  {
    question: 'Hur fungerar betalning och debitering via Monta?',
    answer:
      'Du betalar enkelt i appen med kort, Apple Pay eller Google Pay, och vi kan även installera fysiska kortterminaler för drop-in-laddning. För BRF:er och företag sköter Monta automatisk debitering per användare med dynamisk prissättning (spotpris plus påslag) och utbetalningar utan manuell handpåläggning.',
  },
  {
    question: 'Vad är SmartCharge och hur sparar det pengar?',
    answer:
      'Med SmartCharge anger du när bilen ska vara färdigladdad, så laddar Monta automatiskt under dygnets billigaste timmar utifrån spotpriset. Du behöver inte göra något själv – bilen är laddad till morgonen och du betalar mindre för elen.',
  },
  {
    question: 'Sköter ni driften om en laddare slutar fungera?',
    answer:
      'Ja. Vi konfigurerar och fjärrövervakar laddarna via Monta och agerar proaktivt vid driftstörningar. Många fel kan vi felsöka och åtgärda på distans, och vid behov bokar vi servicebesök – så att laddarna alltid är online.',
  },
];

const faq = faqJsonLd(faqEntries);

export default function MontaPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <MontaHubSection />
      <FaqSection entries={faqEntries} />
    </ClientLayout>
  );
}
