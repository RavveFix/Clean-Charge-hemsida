
import React from 'react';
import { Building2, Zap, BarChart3, ArrowRight, CheckCircle2, LayoutGrid, Users, Coins } from 'lucide-react';
import { PRODUCTS } from '../constants';

const CommercialChargingSection: React.FC<{ onNavigate: (tab: any) => void }> = ({ onNavigate }) => {
    // Filtrera produkter för kommersiellt bruk
    const commercialProducts = PRODUCTS.filter(p => p.id === 'zaptec-pro' || p.id === 'autel-dh480');

    const valueProps = [
        {
            icon: LayoutGrid,
            title: "Publika Anläggningar",
            desc: "Vi specialiserar oss på publika laddmiljöer där driftsäkerhet är avgörande. Våra system är byggda för hög belastning och maximal tillgänglighet för allmänheten."
        },
        {
            icon: Coins,
            title: "Betallösning i Fokus",
            desc: "Maximera avkastningen på din investering. Vi implementerar marknadsledande betallösningar som låter besökare betala direkt via app, QR eller kort."
        },
        {
            icon: Users,
            title: "Helhetsansvar",
            desc: "Det är viktigt att ta hand om publika anläggningar. Vi erbjuder kompletta serviceavtal med proaktiv övervakning och snabb support på plats."
        }
    ];

    return (
        <div className="bg-white font-monta animate-in fade-in duration-500">
             {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden min-h-[80vh] flex items-center">
                 {/* Background effects */}
                 <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?auto=format&fit=crop&q=80&w=1200" 
                        alt="Kommersiell laddning bakgrund" 
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
                 </div>
                 
                 <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="inline-flex items-center space-x-2 text-cc-green mb-6 border border-cc-green/20 bg-cc-green/10 px-4 py-2 rounded-full backdrop-blur-md">
                             <Building2 className="w-4 h-4" />
                             <span className="text-xs font-bold uppercase tracking-widest">För Företag & BRF</span>
                        </div>
                        <h1 className="text-5xl md:text-[5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            Publik <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cc-green to-[#003DFF]">Laddning.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-12">
                             Vi är experter på betallösningar för publika anläggningar. Clean Charge säkerställer att era laddstationer är driftsäkra, lättillgängliga och genererar intäkter från dag ett.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button 
                                onClick={() => onNavigate('contact')}
                                className="bg-cc-green text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-cc-green transition-all flex items-center justify-center group shadow-xl shadow-cc-green/20"
                            >
                                Begär Offert
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => {
                                    const element = document.getElementById('commercial-products');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="border border-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
                            >
                                Se Lösningar
                            </button>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Value Props - Premium Hover Effects */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {valueProps.map((item, i) => (
                            <div 
                                key={i} 
                                className="group p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-[0_20px_60px_-15px_rgba(0,177,130,0.25)] hover:border-cc-green/30 transition-all duration-500 bg-slate-50 hover:bg-white hover:scale-[1.03] hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-cc-green transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-cc-green/20 group-hover:scale-110">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-cc-green transition-colors duration-300">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{item.desc}</p>
                                
                                {/* Subtle accent line that appears on hover */}
                                <div className="h-1 w-0 bg-gradient-to-r from-cc-green to-[#003DFF] rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Products Grid */}
             <section id="commercial-products" className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <div className="h-1 w-20 bg-[#003DFF] mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-6">Professionell Hårdvara</h2>
                        <p className="text-slate-500 text-xl font-medium">Vi arbetar uteslutande med marknadsledande tillverkare som garanterar driftsäkerhet och lång livslängd.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                         {commercialProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-[3.5rem] p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center group hover:shadow-2xl hover:border-[#003DFF]/20 transition-all duration-500">
                                <div className="w-full md:w-1/2 aspect-square bg-slate-50 rounded-[2.5rem] p-8 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#003DFF]/5 rounded-[2.5rem] transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
                                    <img src={product.image} alt={product.name} className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="space-y-3">
                                        <div className="inline-block bg-slate-900 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                            {product.category === 'snabbladdare' ? 'DC High Power' : 'AC Professional'}
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 leading-[0.9] uppercase tracking-tight">{product.name}</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{product.description}</p>
                                    <ul className="space-y-3">
                                        {product.features.map((f, i) => (
                                            <li key={i} className="flex items-center space-x-3 text-xs font-bold text-slate-700 uppercase tracking-wide">
                                                <div className="w-5 h-5 rounded-full bg-[#003DFF]/10 flex items-center justify-center">
                                                    <CheckCircle2 className="w-3 h-3 text-[#003DFF]" />
                                                </div>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button 
                                        onClick={() => onNavigate('contact')}
                                        className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#003DFF] transition-all shadow-lg hover:shadow-[#003DFF]/30 mt-4"
                                    >
                                        Offertförfrågan
                                    </button>
                                </div>
                            </div>
                         ))}
                    </div>
                </div>
             </section>

             {/* CTA */}
             <section className="py-24 bg-[#003DFF] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 rounded-l-full blur-3xl pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">Redo att växla upp?</h2>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-medium">Boka en kostnadsfri genomgång av er fastighet. Vi tar fram en skräddarsydd kalkyl som visar investering och återbetalningstid.</p>
                    <button 
                        onClick={() => onNavigate('contact')}
                        className="bg-white text-[#003DFF] px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
                    >
                        Boka Platsbesök
                    </button>
                </div>
             </section>
        </div>
    );
};

export default CommercialChargingSection;
