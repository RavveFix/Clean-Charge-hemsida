
import React, { useEffect, useRef, useState } from 'react';
import { History, Leaf, ShieldCheck, Globe, Lightbulb, Heart, Shield, ArrowRight, Users, Zap, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const aboutImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";

  // Simple reveal on scroll
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const milestones = [
    { year: '2021', title: 'Clean Charge grundas', desc: 'Företaget startar med fokus på hemmaladdning för villor i Örebroregionen.' },
    { year: '2022', title: 'BRF & Företag', desc: 'Vi expanderar till kommersiella sektorn och tecknar de första BRF-avtalen.' },
    { year: '2023', title: 'Monta-partnerskap', desc: 'Officiellt auktoriserad partner för Monta – marknadens ledande laddhanteringssystem.' },
    { year: '2024', title: '12 000+ installationer', desc: 'Vi passerar ett historiskt milstolpe med tusentals nöjda kunder i 24 kommuner.' },
  ];

  return (
    <div className="bg-white font-monta">

      {/* ── Dark Hero ────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden">
        {/* Atmospheric glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cc-green/15 rounded-full blur-[180px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cc-green/8 rounded-full blur-[120px] pointer-events-none" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="about-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>
        </div>

        {/* Full-bleed image right half */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
          <img src={aboutImage} alt="Clean Charge kontor" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-slate-950/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-28">
          <div className="max-w-2xl space-y-10">
            <div className="inline-flex items-center space-x-3 bg-cc-green/10 text-cc-green px-5 py-2.5 rounded-full border border-cc-green/20">
              <span className="h-1.5 w-1.5 rounded-full bg-cc-green animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Vilka vi är</span>
            </div>

            <h1 className="text-6xl md:text-[7rem] font-black text-white tracking-tighter leading-[0.88] uppercase">
              Vi laddar med<br />
              <span className="text-cc-green">kvalitet</span><br />
              i fokus.
            </h1>

            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
              Clean Charge AB är din expertpartner för hållbara laddsystem. Vi kombinerar marknadsledande hårdvara från Zaptec med marknadens vassaste mjukvara från Monta.
            </p>

            {/* Quick numbers */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { icon: Zap, value: '50 000+', label: 'Genomförda laddningar' },
                { icon: Award, value: '4.6 ★', label: 'Monta Operatörsbetyg' },
                { icon: Users, value: '4 år', label: 'Erfarenhet' },
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <s.icon className="w-5 h-5 text-cc-green mb-2 opacity-70" />
                  <p className="text-3xl font-black text-white tracking-tight">{s.value}</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision section ──────────────────────────── */}
      <section className="py-28">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 aspect-video">
              <img src={aboutImage} alt="Kontorsmiljö" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="bg-cc-green/10 p-3 rounded-2xl">
                  <History className="text-cc-green w-7 h-7" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-800">Grundat 2021</p>
                  <p className="text-slate-400 font-bold uppercase text-[9px] tracking-widest">Clean Charge AB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 text-cc-green">
              <span className="h-px w-8 bg-cc-green" />
              <span className="text-[10px] font-black uppercase tracking-widest">Vår vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
              En framtid där alla<br />laddar enkelt.
            </h2>
            <div className="space-y-5 text-slate-500 leading-relaxed text-lg font-medium">
              <p>Clean Charge strävar efter att göra övergången till eldrift så enkel och effektiv som möjligt. Vi specialiserar oss på att leverera skalbara och framtidssäkrade lösningar för allt från villor till stora bostadsrättsföreningar.</p>
              <p>Genom att kombinera robust hårdvara med intelligent mjukvara skapar vi värde för både fastighetsägare och slutanvändare.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-3 text-cc-green font-black text-sm uppercase tracking-widest hover:gap-5 transition-all">
              Läs mer om oss <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────── */}
      <section ref={sectionRef} className="py-28 bg-slate-950 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="tl-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tl-dots)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-3 text-cc-green mb-6">
              <span className="h-px w-8 bg-cc-green" />
              <span className="text-[10px] font-black uppercase tracking-widest">Vår resa</span>
              <span className="h-px w-8 bg-cc-green" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">Milstolpar</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Left (even: content, odd: empty) */}
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:order-3'}`}>
                    {i % 2 === 0 && (
                      <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/8 transition-colors">
                        <p className="text-cc-green font-black text-xs uppercase tracking-widest mb-2">{m.year}</p>
                        <h3 className="text-xl font-black text-white mb-3">{m.title}</h3>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{m.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-cc-green/20 border-2 border-cc-green flex items-center justify-center z-10 hidden md:flex">
                    <div className="w-3 h-3 rounded-full bg-cc-green" />
                  </div>

                  {/* Right (odd: content, even: empty) */}
                  <div className={`md:w-1/2 ${i % 2 !== 0 ? '' : 'md:order-3'}`}>
                    {i % 2 !== 0 && (
                      <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/8 transition-colors">
                        <p className="text-cc-green font-black text-xs uppercase tracking-widest mb-2">{m.year}</p>
                        <h3 className="text-xl font-black text-white mb-3">{m.title}</h3>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{m.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 text-cc-green mb-6">
              <span className="h-px w-8 bg-cc-green" />
              <span className="text-[10px] font-black uppercase tracking-widest">Vad vi tror på</span>
              <span className="h-px w-8 bg-cc-green" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight uppercase mb-6">Våra Värderingar</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Vår kompass i vardagen. Dessa principer guidar oss i varje beslut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: 'Hållbarhet', text: 'Vi väljer lösningar som håller över tid och minimerar klimatavtrycket.' },
              { icon: Lightbulb, title: 'Innovation', text: 'Vi ligger steget före med den senaste tekniken och smartaste mjukvaran.' },
              { icon: Heart, title: 'Kundfokus', text: 'Er nöjdhet är vårt enda mål. Vi finns med er hela vägen.' },
              { icon: Shield, title: 'Pålitlighet', text: 'Vi håller vad vi lovar. Leveranssäkerhet och transparens i alla led.' },
            ].map((value, i) => (
              <div key={i} className="group relative bg-slate-50 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-cc-green/8 border border-slate-100 hover:border-cc-green/20 transition-all duration-500 hover:-translate-y-2">
                {/* Background number */}
                <span className="absolute top-6 right-8 text-[64px] font-black text-slate-100 leading-none select-none group-hover:text-cc-green/5 transition-colors duration-500">
                  0{i + 1}
                </span>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-cc-green group-hover:text-white transition-all duration-300 text-slate-800 border border-slate-100 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cc-green/20">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-cc-green transition-colors">{value.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{value.text}</p>
                {/* Gradient line */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-cc-green to-emerald-300 rounded-full mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability banner ─────────────────── */}
      <section className="py-28 bg-cc-green relative overflow-hidden mx-6 mb-28 rounded-[3rem]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe className="w-full h-full scale-150 rotate-12" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase">Hållbarhet i varje led.</h2>
            <p className="text-white/80 text-xl font-medium leading-relaxed mb-14 max-w-2xl mx-auto">
              Vi bygger för framtiden. Genom att optimera elnätets kapacitet minskar vi behovet av dyra nätutbyggnader och gör det billigare att köra elbil.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: 'Trygghet', desc: 'Certifierade installatörer över hela Sverige.' },
                { icon: Leaf, title: 'Hållbart', desc: 'Produkter valda för sin långa livslängd.' },
                { icon: Globe, title: 'Framtidssäkert', desc: 'Mjukvara som alltid är uppdaterad.' },
              ].map((card, i) => (
                <div key={i} className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                  <card.icon className="w-10 h-10 mb-4 mx-auto" />
                  <h4 className="font-black text-xl mb-2">{card.title}</h4>
                  <p className="text-sm text-white/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
