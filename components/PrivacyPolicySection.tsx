
import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicySection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-monta animate-in fade-in duration-500">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cc-green/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10">
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
              <h3 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-cc-green" />
                1. Personuppgiftsansvarig
              </h3>
              <p className="text-slate-500">
                Clean Charge AB (Org.nr: 559321-XXXX) är personuppgiftsansvarig för behandlingen av dina personuppgifter på denna webbplats och i samband med våra tjänster.
                <br /><br />
                <strong>Kontaktuppgifter:</strong><br />
                Dialoggatan 12B, 703 74 Örebro<br />
                Email: info@cleancharge.se
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-cc-green" />
                2. Vilka uppgifter samlar vi in?
              </h3>
              <p className="text-slate-500 mb-4">Vi samlar in uppgifter för att kunna leverera och installera din laddbox samt hantera ROT/Grön Teknik-avdrag. Detta inkluderar:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-500">
                <li><strong>Identitetsuppgifter:</strong> Namn, personnummer (krävs för skatteavdrag).</li>
                <li><strong>Kontaktuppgifter:</strong> Adress, e-post, telefonnummer.</li>
                <li><strong>Fastighetsuppgifter:</strong> Fastighetsbeteckning och anläggningsID (för installation).</li>
                <li><strong>Teknisk data:</strong> IP-adress och webbläsarhistorik via cookies.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-cc-green" />
                3. Hur vi använder dina uppgifter
              </h3>
              <p className="text-slate-500">Vi behandlar dina uppgifter för följande ändamål:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-500 mt-4">
                <li>För att fullgöra vårt avtal med dig (leverans och installation).</li>
                <li>För att ansöka om Skattereduktion för Grön Teknik hos Skatteverket.</li>
                <li>För att ge kundservice och support.</li>
                <li>För att skicka relevant information och erbjudanden (du kan alltid avregistrera dig).</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
              <h4 className="text-xl font-black text-slate-800 mb-2">Dina rättigheter</h4>
              <p className="text-slate-500 text-sm mb-4">Enligt GDPR har du rätt att:</p>
              <ul className="grid md:grid-cols-2 gap-4">
                {['Begära utdrag', 'Rätta felaktig info', 'Begära radering', 'Invända mot behandling'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm font-bold text-slate-700">
                    <div className="w-2 h-2 bg-cc-green rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-slate-400 italic">
              Senast uppdaterad: 2024-02-20. Vi förbehåller oss rätten att ändra denna policy för att följa lagkrav.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicySection;
