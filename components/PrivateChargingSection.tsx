
import React from 'react';
import { Check, Zap, Smartphone, ShieldCheck, ArrowRight, Home, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';

const PrivateChargingSection: React.FC<{ onNavigate: (tab: any) => void }> = ({ onNavigate }) => {
    // Filter products for private use (usually simpler ones like Zaptec Go, Easee Charge Lite)
    const privateProducts = PRODUCTS.filter(p => p.id === 'zaptec-go' || p.id === 'easee-charge-lite');

    return (
        <div className="bg-white font-monta animate-in fade-in duration-500">
            {/* Hero */}
            <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-cc-green/5 rounded-l-full blur-3xl pointer-events-none"></div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-cc-green/10 rounded-full blur-xl animate-pulse"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 text-cc-green bg-white border border-slate-100 px-5 py-2.5 rounded-full shadow-sm">
                                <Home className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">För Villa & Radhus</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-[5rem] font-black text-slate-800 tracking-tighter uppercase leading-[0.9]">
                                Ladda Hemma <br/> <span className="text-cc-green">Laddbox för Villa.</span>
                            </h1>
                            
                            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                                Vakna till en fulladdad bil varje morgon. Vi installerar marknadens säkraste laddboxar med 50% Grön Teknik-avdrag direkt på fakturan.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-5 pt-4">
                                 <button 
                                    onClick={() => onNavigate('contact')} 
                                    className="bg-cc-green text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-cc-green/20 hover:scale-105 active:scale-95 flex items-center justify-center group"
                                >
                                    Beställ Installation
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                 <button 
                                    onClick={() => {
                                        const element = document.getElementById('products');
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                    }} 
                                    className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:border-slate-900 transition-all hover:scale-105 active:scale-95"
                                >
                                    Se Laddboxar
                                </button>
                            </div>
                            
                            <div className="flex items-center gap-6 pt-4 text-slate-400">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-cc-green" />
                                    <span className="text-xs font-bold uppercase tracking-wide">Certifierad Partner</span>
                                </div>
                                <div className="w-px h-4 bg-slate-300"></div>
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3" style={{ fill: '#00b182', color: '#00b182' }} />)}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wide">4.9/5 Kundbetyg</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:h-[600px] hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cc-green/20 to-transparent rounded-[4rem] transform rotate-3"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200" 
                                alt="Modern villa med elbil" 
                                className="w-full h-full object-cover rounded-[4rem] shadow-2xl relative z-10 border-4 border-white"
                            />
                            {/* Floating Card */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-xs border border-slate-100 animate-bounce-slow">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="bg-cc-green/10 p-3 rounded-2xl">
                                        <Zap className="w-6 h-6 text-cc-green fill-cc-green" />
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-800 uppercase text-lg">Smart Laddning</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Optimera kostnaden</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">Vi ställer in din laddare att ladda när elpriset är som lägst.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grön Teknik Info */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cc-green rounded-full blur-[200px]"></div>
                </div>
                
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="md:w-1/2 space-y-8">
                         <div className="inline-flex items-center space-x-2 text-cc-green mb-4">
                            <Zap className="w-4 h-4 fill-cc-green" />
                            <span className="text-xs font-bold uppercase tracking-widest">Skatteverket</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight leading-[0.9]">
                            50% Avdrag <br />
                            <span className="text-cc-green">Direkt.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                            När du beställer installation av laddbox via oss får du 50% avdrag på både material och arbetskostnad direkt på fakturan (Grön Teknik). Vi sköter all administration och kontakt med Skatteverket åt dig.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                <p className="text-4xl font-black text-white mb-2">50%</p>
                                <p className="text-[10px] font-bold text-cc-green uppercase tracking-widest">På totalkostnaden</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                <p className="text-4xl font-black text-white mb-2">0 kr</p>
                                <p className="text-[10px] font-bold text-cc-green uppercase tracking-widest">Administrationsavgift</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2">
                         <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] relative">
                            <h3 className="text-2xl font-black mb-6 uppercase">Räkneexempel</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-4 border-b border-white/10">
                                    <span className="text-slate-400 font-medium">Laddbox & Material</span>
                                    <span className="text-white font-bold">8 900 kr</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-white/10">
                                    <span className="text-slate-400 font-medium">Installation & Resa</span>
                                    <span className="text-white font-bold">5 000 kr</span>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <span className="text-slate-400 font-medium">Totalt innan avdrag</span>
                                    <span className="text-slate-400 font-bold line-through">13 900 kr</span>
                                </div>
                                <div className="bg-cc-green/20 p-6 rounded-2xl flex justify-between items-center mt-4 border border-cc-green/30">
                                    <span className="text-cc-green font-black uppercase tracking-wider">Ditt Pris (Efter 50%)</span>
                                    <span className="text-white text-2xl font-black">6 950 kr</span>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </section>

            {/* Products Showcase */}
            <section id="products" className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <div className="h-1 w-20 bg-cc-green mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 uppercase tracking-tight mb-6">Våra Favoriter för Hemmet</h2>
                        <p className="text-slate-500 text-xl font-medium">Vi har valt ut marknadens bästa laddboxar för nordiskt klimat. Kompakta, säkra och uppkopplade.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {privateProducts.map((product) => (
                             <div key={product.id} className="group bg-white rounded-[3.5rem] p-10 border border-slate-100 hover:border-cc-green/30 hover:shadow-2xl hover:shadow-cc-green/10 transition-all duration-500 flex flex-col md:flex-row gap-10 items-center">
                                <div className="w-full md:w-1/2 aspect-square bg-slate-50 rounded-[2.5rem] p-8 flex items-center justify-center relative overflow-hidden">
                                     <div className="absolute inset-0 bg-cc-green/5 rounded-[2.5rem] transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
                                    <img src={product.image} alt={product.name} className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-black text-slate-800 uppercase leading-none mb-2">{product.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3" style={{ fill: '#00b182', color: '#00b182' }} />)}
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Choice</span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-500 font-medium leading-relaxed">{product.description}</p>
                                    
                                    <ul className="space-y-3">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center space-x-3 text-xs font-bold text-slate-700 uppercase tracking-wide">
                                                <div className="w-5 h-5 rounded-full bg-cc-green/10 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-cc-green" />
                                                </div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="pt-6 mt-2 border-t border-slate-100">
                                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pris med Grön Teknik</p>
                                         <p className="text-4xl font-black text-slate-900 tracking-tight">{Math.round(product.price * 0.5).toLocaleString()} kr</p>
                                    </div>
                                    
                                    <button 
                                        onClick={() => onNavigate('contact')} 
                                        className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-cc-green transition-all shadow-lg hover:shadow-cc-green/20"
                                    >
                                        Välj {product.name}
                                    </button>
                                </div>
                             </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Features */}
            <section className="py-32 bg-slate-50 border-t border-slate-200">
                 <div className="container mx-auto px-6">
                     <div className="grid md:grid-cols-3 gap-8">
                         {[
                             { icon: ShieldCheck, title: "Säker Installation", desc: "Våra elektriker är specialiserade på elbilsladdning och garanterar en installation enligt högsta säkerhetsstandard." },
                             { icon: Smartphone, title: "Smart App-styrning", desc: "Starta, stoppa och schemalägg laddningen direkt i mobilen. Få full kontroll över förbrukning och historik." },
                             { icon: Zap, title: "Lastbalansering", desc: "Vi installerar dynamisk lastbalansering som skyddar din huvudsäkring när du lagar mat och laddar samtidigt." }
                         ].map((item, i) => (
                             <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-cc-green/20 transition-all duration-500 group">
                                 <div className="w-16 h-16 bg-cc-green/10 rounded-2xl flex items-center justify-center mb-8 text-cc-green group-hover:scale-110 transition-transform">
                                     <item.icon className="w-8 h-8" />
                                 </div>
                                 <h3 className="text-2xl font-black text-slate-800 mb-4 uppercase tracking-tight">{item.title}</h3>
                                 <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                             </div>
                         ))}
                     </div>
                 </div>
            </section>
        </div>
    );
};

export default PrivateChargingSection;
