
import React, { useEffect } from 'react';
import { Smartphone, Globe, Zap, CreditCard, LayoutDashboard, ShieldCheck, ArrowLeft, Check, Terminal } from 'lucide-react';

interface MontaHubSectionProps {
  onNavigate: (tab: any) => void;
}

const MontaHubSection: React.FC<MontaHubSectionProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-monta animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="relative bg-[#003DFF] text-white py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 rounded-l-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-cc-green/20 rounded-tr-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center space-x-2 text-blue-200 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Tillbaka till start</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white/10 border border-white/20 px-5 py-2 rounded-full backdrop-blur-md">
                <img 
                  src="https://monta.com/app/themes/monta-sage-latest/public/build/assets/Monta_Logo-6IYbGNWl.svg" 
                  alt="Monta" 
                  className="h-4 brightness-0 invert" 
                />
                <span className="text-[10px] font-bold uppercase tracking-widest border-l border-white/20 pl-3">Powered by Clean Charge</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                Ett operativsystem <br />
                <span className="text-blue-300">för elbilister.</span>
              </h1>
              
              <p className="text-xl text-blue-100 font-medium leading-relaxed max-w-xl">
                Monta Hub är mer än bara en app. Det är plattformen som kopplar ihop din laddbox med energimarknaden, betalsystem och hela Europas laddnätverk.
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-video group">
                <img 
                  src="/Charge_2.png" 
                  alt="Monta App Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003DFF]/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
                        <p className="text-white font-black text-2xl">SmartCharge Aktiv</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Sparat idag</p>
                        <p className="text-cc-green font-black text-2xl">-42 kr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-6">Varför välja Monta?</h2>
            <p className="text-slate-500 text-lg font-medium">Vi integrerar Monta som standard i våra installationer för att ge dig full frihet och kontroll.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                color: "bg-yellow-400",
                title: "SmartCharge",
                desc: "Ställ in när bilen ska vara färdigladdad. Monta sköter resten och laddar automatiskt när elpriset är som lägst på dygnet."
              },
              {
                icon: Globe,
                color: "bg-blue-400",
                title: "Roaming",
                desc: "Få tillgång till över 500 000 publika laddpunkter i Europa direkt i appen. En app för hemma och borta."
              },
              {
                icon: CreditCard,
                color: "bg-purple-400",
                title: "Betalning & Terminaler",
                desc: "Vi erbjuder fysiska kortläsare för drop-in laddning, samt fullt stöd för Apple Pay och Google Pay i appen."
              }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 ${feat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <feat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{feat.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For BRF/Companies - Monta Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#020817] rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#003DFF]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-2 gap-20 relative z-10 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                  Full kontroll på <br/>flottan.
                </h2>
                
                <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
                  För BRF:er och företag erbjuder Monta en kraftfull portal. Hantera användare, sätt priser och få automatiska utbetalningar utan manuell handpåläggning.
                </p>
                
                <ul className="space-y-5 mb-12">
                  {[
                    "Automatisk debitering av medlemmar",
                    "Fysiska kortterminaler för gäster",
                    "Dynamisk prissättning (Spotpris + påslag)",
                    "Gästbetalning via QR-kod"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 group">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full border border-[#00C28A]/30 text-[#00C28A] group-hover:bg-[#00C28A] group-hover:text-[#020817] transition-all">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                  <li className="flex items-center space-x-4 group">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full border border-[#00C28A]/30 text-[#00C28A] group-hover:bg-[#00C28A] group-hover:text-[#020817] transition-all">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Lastbalansering i molnet</span>
                  </li>
                </ul>

                <button 
                  onClick={() => {
                    onNavigate('commercial');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#00C28A] text-[#020817] px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-xl hover:shadow-[#00C28A]/20"
                >
                  Läs mer för Företag
                </button>
              </div>

              <div className="relative group">
                <div className="relative z-10 p-2 bg-gradient-to-b from-slate-700 to-slate-900 rounded-[2.8rem] shadow-2xl">
                    <div className="rounded-[2.5rem] overflow-hidden bg-[#0a0f1c] border border-slate-800">
                      <img 
                        src="/Charge_1.png" 
                        alt="Monta Admin Dashboard" 
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                </div>
                
                {/* Floating badge aligned to screenshot */}
                <div className="absolute top-6 right-6 z-20 bg-[#00C28A] text-[#020817] px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-wider shadow-lg animate-pulse">
                  Live Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Redo att komma igång?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                    onClick={() => {
                      onNavigate('products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-[#003DFF] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl hover:shadow-blue-900/20"
                >
                    Se kompatibla boxar
                </button>
                <button 
                    onClick={() => window.open('https://monta.com', '_blank')}
                    className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:border-slate-900 transition-all"
                >
                    Besök Monta.com
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MontaHubSection;
