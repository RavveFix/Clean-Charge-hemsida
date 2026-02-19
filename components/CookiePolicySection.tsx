
import React, { useEffect } from 'react';
import { Cookie, Settings, BarChart2 } from 'lucide-react';

const CookiePolicySection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-monta animate-in fade-in duration-500">
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm text-slate-900">
                <Cookie className="w-8 h-8" />
            </div>
          <h1 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">Om Cookies</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Vi använder cookies för att ge dig en bättre upplevelse, analysera trafik och anpassa innehåll. Här förklarar vi hur det fungerar.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-12">
          
          <div>
            <h2 className="text-2xl font-black text-slate-800 mb-4">Vad är en cookie?</h2>
            <p className="text-slate-600 leading-relaxed">
              En cookie är en liten textfil som webbplatsen sparar på din dator eller mobil när du besöker den. Cookien gör det möjligt för webbplatsen att komma ihåg dina handlingar och inställningar (såsom inloggning, språk, fontstorlek och andra visningsinställningar) under en viss tid, så att du inte behöver ställa in dem varje gång du besöker webbplatsen.
            </p>
          </div>

          <div className="grid gap-6">
            <h2 className="text-2xl font-black text-slate-800">Typer av cookies vi använder</h2>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <div className="mt-1 text-cc-green"><Settings className="w-6 h-6" /></div>
                <div>
                    <h3 className="font-bold text-slate-800 mb-2">Nödvändiga cookies</h3>
                    <p className="text-sm text-slate-500">Dessa cookies är absolut nödvändiga för att webbplatsen ska fungera korrekt. De säkerställer grundläggande funktioner och säkerhetsfunktioner på webbplatsen, anonymt.</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <div className="mt-1 text-[#003DFF]"><BarChart2 className="w-6 h-6" /></div>
                <div>
                    <h3 className="font-bold text-slate-800 mb-2">Analys & Statistik</h3>
                    <p className="text-sm text-slate-500">Dessa cookies används för att förstå hur besökare interagerar med webbplatsen. Informationen hjälper oss att förbättra användarupplevelsen och optimera vårt innehåll.</p>
                </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-800 mb-4">Hantera inställningar</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Du kan när som helst ändra eller dra tillbaka ditt samtycke till cookie-deklarationen på vår webbplats. Du kan också blockera cookies i din webbläsares inställningar, men observera att vissa delar av webbplatsen då kanske inte fungerar som tänkt.
            </p>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-cc-green transition-colors">
                Öppna Cookie-inställningar
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CookiePolicySection;
