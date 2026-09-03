'use client';

import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const PrivacyPolicySection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-monta animate-in fade-in duration-500">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cc-green/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumbs items={[{ name: 'Integritetspolicy', href: '/integritetspolicy' }]} variant="dark" />
          <div className="inline-flex items-center space-x-2 text-cc-green mb-6 border border-cc-green/20 bg-cc-green/10 px-4 py-2 rounded-full backdrop-blur-md">
            <Shield className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">GDPR & Säkerhet</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Integritetspolicy</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Vi värnar om din personliga integritet. Här beskriver vi hur Clean Charge AB samlar in, använder och skyddar dina personuppgifter.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-cc-green" />
                1. Personuppgiftsansvarig
              </h2>
              <p className="text-slate-500">
                Clean Charge AB (org.nr 559294-6833) är personuppgiftsansvarig för behandlingen av dina personuppgifter på denna webbplats och i samband med våra tjänster.
                <br /><br />
                <strong>Kontaktuppgifter:</strong><br />
                Dialoggatan 12B, 703 74 Örebro<br />
                E-post: info@cleancharge.se
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-cc-green" />
                2. Vilka uppgifter samlar vi in?
              </h2>
              <p className="text-slate-500 mb-4">Vi samlar bara in uppgifter som behövs för att hantera din förfrågan, leverera och installera laddutrustning, ge support eller uppfylla lagkrav. Detta kan inkludera:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-500">
                <li><strong>Kontaktuppgifter:</strong> Namn, e-postadress, telefonnummer och adress.</li>
                <li><strong>Identitetsuppgifter:</strong> Personnummer endast när det krävs för Grön Teknik-avdrag eller annan laglig skyldighet.</li>
                <li><strong>Fastighetsuppgifter:</strong> Fastighetsbeteckning och anläggningsID (för installation).</li>
                <li><strong>Ärendeuppgifter:</strong> Uppgifter som du själv lämnar i kontakt- eller supportformulär.</li>
                <li><strong>Teknisk data:</strong> Begränsad teknisk information som behövs för säkerhet, drift och samtyckesval.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-cc-green" />
                3. Hur vi använder dina uppgifter
              </h2>
              <p className="text-slate-500">Vi behandlar dina uppgifter för följande ändamål och rättsliga grunder:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-500 mt-4">
                <li><strong>Kontakt, offert och support:</strong> För att hantera din begäran och vidta åtgärder inför eller fullgöra ett avtal.</li>
                <li><strong>Installation och skattereduktion:</strong> För att fullgöra avtal och uppfylla rättsliga skyldigheter, bland annat gentemot Skatteverket när Grön Teknik-avdrag används.</li>
                <li><strong>Säkerhet och drift:</strong> Med stöd av vårt berättigade intresse av att skydda och driva webbplatsen.</li>
                <li><strong>Analys:</strong> Endast när du har lämnat samtycke till analys i cookie-inställningarna.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-cc-green" />
                4. Mottagare och leverantörer
              </h2>
              <p className="text-slate-500">
                För att driva webbplatsen och hantera ärenden kan vi anlita tekniska leverantörer. Kontakt- och supportmeddelanden skickas via Resend till Clean Charge AB:s e-post. Vercel Analytics används endast när du godkänt analys i cookie-inställningarna. Vi lämnar bara ut uppgifter när det behövs för tjänsten, på grund av lagkrav eller med ditt stöd.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-cc-green" />
                5. Lagring och säkerhet
              </h2>
              <p className="text-slate-500">
                Vi sparar personuppgifter bara så länge de behövs för ändamålet, för att fullgöra ett avtal eller för att uppfylla lagkrav. Kontakt- och supportuppgifter raderas när ärendet är avslutat och uppgifterna inte längre behövs, om inte ett pågående kundförhållande eller lag kräver längre lagring. Vi vidtar tekniska och organisatoriska säkerhetsåtgärder för att skydda uppgifterna mot obehörig åtkomst, förlust och ändring.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
              <h3 className="text-xl font-black text-slate-800 mb-2">6. Dina rättigheter</h3>
              <p className="text-slate-500 text-sm mb-4">Enligt GDPR har du rätt att:</p>
              <ul className="grid md:grid-cols-2 gap-4">
                {['Begära utdrag', 'Rätta felaktig info', 'Begära radering', 'Invända mot behandling'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm font-bold text-slate-700">
                    <div className="w-2 h-2 bg-cc-green rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-5">
                Kontakta oss på <a href="mailto:info@cleancharge.se" className="font-bold underline hover:text-cc-green">info@cleancharge.se</a> om du vill använda dina rättigheter. Du har också rätt att lämna klagomål till <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-cc-green">Integritetsskyddsmyndigheten (IMY)</a>.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-cc-green" />
                7. Cookies och lokal lagring
              </h2>
              <p className="text-slate-500">
                Nödvändiga funktioner använder lokal lagring för att komma ihåg dina cookieval. Analys via Vercel Analytics aktiveras först efter ditt samtycke. Du kan när som helst ändra eller återkalla ditt samtycke via sidan <a href="/cookies" className="font-bold underline hover:text-cc-green">Cookies</a>.
              </p>
            </div>

            <p className="text-xs text-slate-400 italic">
              Senast uppdaterad: 2026-09-02. Vi uppdaterar policyn när våra behandlingar eller lagkrav ändras.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicySection;
