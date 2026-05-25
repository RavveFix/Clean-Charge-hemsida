import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import SupportSection from '@/components/SupportSection';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Support & Hjälp med din Laddbox',
  description:
    'Behöver du hjälp med din laddbox? Clean Charge AB erbjuder support under kontorstid. Ring 019-760 42 90 eller skicka ett mejl.',
  alternates: { canonical: 'https://www.cleancharge.se/support' },
  openGraph: {
    title: 'Support – Hjälp med din laddbox | Clean Charge AB',
    description:
      'Support måndag–fredag 08:00–17:00. Ring 019-760 42 90 eller mejla info@cleancharge.se så hjälper vi dig.',
    url: 'https://www.cleancharge.se/support',
    images: ['/opengraph-image'],
  },
};

const breadcrumb = breadcrumbJsonLd([{ name: 'Support', path: '/support' }]);

const faq = faqJsonLd([
  {
    question: 'Vad gör jag om min laddbox inte fungerar?',
    answer:
      'Börja med att starta om laddboxen genom att stänga av huvudsäkringen i 30 sekunder och sedan slå på den igen. Hjälper inte det – ring oss på 019-760 42 90 så felsöker vi tillsammans på distans. I de flesta fall kan vi lösa problemet utan ett servicebesök.',
  },
  {
    question: 'När kan jag nå er support?',
    answer:
      'Vår support är bemannad måndag till fredag 08:00–17:00 via telefon 019-760 42 90 och e-post info@cleancharge.se. Vid akuta driftproblem för servicekunder finns jour efter ordinarie tid.',
  },
  {
    question: 'Var hittar jag manualen till min laddbox?',
    answer:
      'Användarmanualer för Zaptec, Easee och Autel finns på respektive tillverkares webbplats. Vi kan också skicka manualen till dig på e-post – kontakta oss så hjälper vi dig.',
  },
  {
    question: 'Hur loggar jag in på Monta-appen?',
    answer:
      'Ladda ner Monta-appen från App Store eller Google Play, registrera ett konto med samma e-postadress som du angav vid installationen, och välj din laddbox. Du hittar mer hjälp i Monta:s hjälpcenter (monta.com/se/help-center).',
  },
  {
    question: 'Kan jag uppgradera min befintliga installation?',
    answer:
      'Ja. Många kunder börjar med några laddare och bygger ut efter hand. Vi hjälper er att projektera utbyggnaden så att lastbalansering och elinstallation klarar den nya kapaciteten utan att huvudsäkringen behöver höjas.',
  },
]);

export default function SupportPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <SupportSection />
    </ClientLayout>
  );
}
