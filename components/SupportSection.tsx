
import React, { useState } from 'react';
import { FileText, Wrench, AlertTriangle, Download, ChevronRight, CheckCircle2, Search } from 'lucide-react';

const SupportSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manuals' | 'installation' | 'error'>('manuals');

  const manuals = [
    { name: "Zaptec Go - Användarmanual", size: "1.2 MB", type: "PDF" },
    { name: "Zaptec Go - Installationsmanual", size: "2.4 MB", type: "PDF" },
    { name: "Zaptec Pro - Produktblad", size: "0.8 MB", type: "PDF" },
    { name: "Easee Charge Lite - Manual", size: "1.5 MB", type: "PDF" },
    { name: "Autel DC Fast Charger - Specifikation", size: "3.1 MB", type: "PDF" },
    { name: "Monta App - Kom igång guide", size: "0.5 MB", type: "PDF" }
  ];

  return (
    <div className="bg-white font-monta min-h-screen animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#003DFF]/20 rounded-full blur-[150px]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-cc-green font-black uppercase tracking-[0.2em] mb-4">Clean Charge Support</p>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Hur kan vi <br/><span className="text-[#003DFF]">hjälpa dig?</span></h1>
          
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Sök manualer eller felkoder..." 
              className="w-full py-5 px-8 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 focus:border-cc-green transition-all"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-100 sticky top-20 bg-white/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-2 md:space-x-8 overflow-x-auto py-4">
            {[
              { id: 'manuals', label: 'Manualer & Dokument', icon: FileText },
              { id: 'installation', label: 'Installationsprocess', icon: Wrench },
              { id: 'error', label: 'Felanmälan', icon: AlertTriangle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <section className="py-24 bg-slate-50 min-h-[600px]">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* MANUALS TAB */}
          {activeTab === 'manuals' && (
            <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 duration-500">
              {manuals.map((manual, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-cc-green/30 hover:shadow-lg transition-all group flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-cc-green group-hover:text-white transition-colors text-slate-400">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 group-hover:text-cc-green transition-colors">{manual.name}</h3>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{manual.type} • {manual.size}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-slate-300 group-hover:text-cc-green transition-colors" />
                </div>
              ))}
            </div>
          )}

          {/* INSTALLATION TAB */}
          {activeTab === 'installation' && (
            <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center">
                <h2 className="text-3xl font-black text-slate-800 mb-4">Så går en installation till</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">Från beställning till första laddning. Vi sköter allt det tekniska och administrativa.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "Beställning & Granskning", desc: "När du lagt din order kontaktar vi dig för att stämma av förutsättningarna (säkring, kabeldragning)." },
                  { step: "02", title: "Installation & Konfiguration", desc: "Vår certifierade elektriker monterar laddboxen, drar kabel och konfigurerar lastbalansering." },
                  { step: "03", title: "Igångkörning & App", desc: "Vi hjälper dig komma igång med appen (Monta/Easee/Zaptec) och visar hur allt fungerar." }
                ].map((item, i) => (
                  <div key={i} className="relative p-8 bg-white rounded-[2.5rem] border border-slate-100">
                    <span className="text-6xl font-black text-slate-100 absolute top-4 right-6">{item.step}</span>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-cc-green rounded-full flex items-center justify-center text-white mb-6">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ERROR REPORT TAB */}
          {activeTab === 'error' && (
            <div className="max-w-2xl mx-auto bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 animate-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-800">Felanmälan</h2>
                <p className="text-slate-500 mt-2">Beskriv problemet så återkommer vår tekniska support inom 24h.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Serienummer (Laddbox)</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-medium focus:outline-none focus:border-red-400 transition-all" placeholder="T.ex. ZAP-12345" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Telefon</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-medium focus:outline-none focus:border-red-400 transition-all" placeholder="Ditt nummer" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Beskrivning av felet</label>
                  <textarea className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-medium h-32 resize-none focus:outline-none focus:border-red-400 transition-all" placeholder="Lyser laddboxen rött? Vad hände innan felet uppstod?" />
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-red-500 transition-colors shadow-lg">
                  Skicka Felanmälan
                </button>
              </form>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default SupportSection;
