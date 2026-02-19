
import React, { useEffect } from 'react';
import { ShoppingBag, Truck, RefreshCw, CreditCard, CheckCircle2 } from 'lucide-react';

const TermsSection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-monta animate-in fade-in duration-500">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003DFF]/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center space-x-2 text-[#003DFF] mb-6 border border-[#003DFF]/30 bg-[#003DFF]/10 px-4 py-2 rounded-full backdrop-blur-md">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Villkor & Info</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Köpvillkor</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Tydliga villkor för trygga affärer. Här hittar du information om betalning, leverans, installation och garantier.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Grön Teknik Box */}
          <div className="bg-cc-green/5 border border-cc-green/20 p-8 rounded-3xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cc-green/10 rounded-bl-full"></div>
            <h3 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-cc-green w-6 h-6" />
              Skatteavdrag Grön Teknik
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Vi tillämpar fakturamodellen för Grön Teknik. Det innebär att du som privatperson får 50% avdrag direkt på fakturan för både arbete och material (laddbox och tillbehör).
            </p>
            <p className="text-sm text-slate-500 font-medium">
              * Förutsätter att du är berättigad till avdraget hos Skatteverket. Om avdraget nekas av Skatteverket har Clean Charge AB rätt att efterdebitera det motsvarande beloppet.
            </p>
          </div>

          <div className="grid gap-12">
            <div className="border-b border-slate-100 pb-12">
              <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-slate-400" />
                1. Beställning & Betalning
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Alla priser anges i svenska kronor (SEK) inklusive 25% moms. I kassan visas priset både före och efter det preliminära skatteavdraget.
              </p>
              <ul className="list-disc pl-6 text-slate-500 space-y-2">
                <li>Vi erbjuder betalning via Faktura (14 dagar), Kortbetalning eller Delbetalning.</li>
                <li>Orderbekräftelse skickas via e-post direkt efter beställning.</li>
                <li>Avtal om installation ingås när vi bekräftat en installationstid.</li>
              </ul>
            </div>

            <div className="border-b border-slate-100 pb-12">
              <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Truck className="w-6 h-6 text-slate-400" />
                2. Leverans & Installation
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Vid köp inklusive installation tar installatören med sig laddboxen till installationstillfället.
              </p>
              <ul className="list-disc pl-6 text-slate-500 space-y-2">
                <li>Standardinstallation ingår enligt specifikation på produktsidan (upp till 10m kabel, montering på vägg, etc).</li>
                <li>Eventuella tilläggsarbeten (t.ex. grävning, längre kabeldragning) debiteras extra efter överenskommelse.</li>
                <li>Du ansvarar för att vägen fram till installationsplatsen är fri och tillgänglig.</li>
              </ul>
            </div>

            <div className="border-b border-slate-100 pb-12">
              <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-slate-400" />
                3. Ångerrätt & Retur
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Enligt Distansavtalslagen har du som privatperson 14 dagars ångerrätt från det att du mottagit varan.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <p className="font-bold text-slate-800 mb-2">Undantag för installation</p>
                <p className="text-sm text-slate-500">
                  Om installationen har påbörjats med ditt samtycke under ångerfristen, upphör ångerrätten för den utförda tjänsten. Material som monterats (t.ex. kabel) kan ej returneras.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-800 mb-6">4. Garanti</h3>
              <p className="text-slate-500 leading-relaxed">
                Vi lämnar alltid minst 2 års garanti på installation och upp till 5 års produktgaranti beroende på tillverkare (se respektive produktblad för Easee och Zaptec).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsSection;
