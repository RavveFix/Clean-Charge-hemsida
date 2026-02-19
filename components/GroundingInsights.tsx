
import React, { useState, useEffect } from 'react';
import { generateMarketInsights } from '../services/geminiService';
import { Search, ExternalLink, Globe, Loader2, RefreshCw, Zap, CreditCard, TrendingUp, AlertCircle } from 'lucide-react';

const GroundingInsights: React.FC = () => {
  const [news, setNews] = useState<string>('');
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const cleanMarkdown = (text: string) => {
    // Tar bort de vanligaste markdown-elementen för ett renare utseende utan att behöva externa bibliotek
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Tar bort fetstil (**)
      .replace(/###\s*(.*)/g, '$1')    // Tar bort H3-rubriker
      .replace(/##\s*(.*)/g, '$1')     // Tar bort H2-rubriker
      .replace(/#\s*(.*)/g, '$1')      // Tar bort H1-rubriker
      .replace(/\*(.*?)\*/g, '$1')     // Tar bort kursiv stil (*)
      .replace(/^- (.*)/gm, '• $1')    // Gör om list-streck till snygga punkter
      .trim();
  };

  const fetchLatestInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await generateMarketInsights();

      if (!response.text) {
        throw new Error("Inget svar från AI-motorn.");
      }

      setNews(cleanMarkdown(response.text));
      
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const extractedSources = chunks
        .filter((chunk: any) => chunk.web)
        .map((chunk: any) => ({
          title: chunk.web.title,
          uri: chunk.web.uri
        }));
      
      setSources(extractedSources);
    } catch (err: any) {
      console.error("Search failed:", err);
      // More friendly error message if it was a rate limit or other API issue
      const isRateLimit = err?.message?.includes('429') || err?.status === 429;
      if (isRateLimit) {
         setError("Hög belastning just nu. Visar sparade marknadsinsikter.");
      } else {
         setError("Anslutningen till live-webben avbröts. Visar sparade marknadsinsikter.");
      }
      
      // Fallback content
      setNews("Marknaden för elbilsladdning i Sverige konsolideras nu kring robusta OCPP-plattformar. Easee har gjort en stark comeback med Charge Lite/Core, medan Zaptec Pro förblir standarden för stora BRF-anläggningar. Mjukvaruplattformar som Monta dominerar nu marknaden genom att erbjuda automatiserad debitering och roaming-integrationer som förenklar vardagen för både administratörer och användare.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestInfo();
  }, []);

  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative font-monta">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cc-green to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-cc-green rounded-full blur-[300px] opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          <div className="lg:w-2/5 flex flex-col justify-between py-8">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-cc-green/10 text-cc-green px-5 py-2.5 rounded-full border border-cc-green/20 backdrop-blur-md">
                  <Globe className="w-4 h-4 animate-spin-slow" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Multi-Brand Intelligence</span>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                  Marknadens <br />
                  <span className="text-cc-green">Puls.</span>
                </h2>
                
                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-md">
                  Vi bevakar hela ekosystemet i realtid. Från hårdvarutest av Zaptec till de senaste uppdateringarna i Montas betalsystem.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, label: "Laddboxar", sub: "Trendanalys" },
                  { icon: CreditCard, label: "Betalsystem", sub: "Debitering" },
                  { icon: TrendingUp, label: "Trender", sub: "Analys" },
                  { icon: Search, label: "Live Sök", sub: "Realtid" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col space-y-2 p-5 bg-white/5 rounded-[2rem] border border-white/10 hover:border-cc-green/30 transition-all group">
                    <item.icon className="w-5 h-5 text-cc-green group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white">{item.label}</p>
                      <p className="text-[9px] font-medium text-slate-500 uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 lg:mt-20">
              <button 
                onClick={fetchLatestInfo}
                disabled={loading}
                className="flex items-center space-x-4 text-white font-black uppercase text-xs tracking-[0.4em] hover:text-cc-green transition-all group"
              >
                <div className="bg-cc-green p-4 rounded-full group-hover:rotate-180 transition-transform duration-1000 shadow-xl shadow-cc-green/20">
                  <RefreshCw className={`w-5 h-5 text-white ${loading ? 'animate-spin' : ''}`} />
                </div>
                <div className="flex flex-col items-start">
                  <span>Uppdatera Engine</span>
                  <span className="text-[8px] text-slate-500 opacity-60">Status: {loading ? 'Söker...' : 'Online'}</span>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[4.5rem] p-10 md:p-16 relative shadow-2xl overflow-hidden group h-full flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cc-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              {loading ? (
                <div className="flex-grow flex flex-col items-center justify-center space-y-8 py-20">
                  <div className="relative">
                    <div className="w-24 h-24 border-2 border-cc-green/20 border-t-cc-green rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Search className="w-8 h-8 text-cc-green animate-pulse" />
                    </div>
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-sm">Deep Web Analysis</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Ansluter till marknadsdata...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 flex-grow">
                  {error && (
                    <div className="flex items-center space-x-3 bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl text-amber-400 text-[10px] font-black uppercase tracking-widest">
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="prose prose-invert max-w-none">
                    <div className="text-xl md:text-2xl text-slate-100 leading-[1.6] font-medium tracking-tight whitespace-pre-wrap">
                      {news}
                    </div>
                  </div>

                  {sources.length > 0 && (
                    <div className="pt-10 border-t border-white/10 mt-auto">
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8 flex items-center">
                        <div className="w-2 h-2 bg-cc-green rounded-full mr-3 animate-pulse"></div>
                        Verifierade Källor & Nyheter
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sources.slice(0, 4).map((source, i) => (
                          <a 
                            key={i} 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-5 rounded-[1.5rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cc-green/40 transition-all group/source"
                          >
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover/source:text-white truncate mr-4">{source.title}</span>
                            <ExternalLink className="w-4 h-4 text-cc-green shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundingInsights;
