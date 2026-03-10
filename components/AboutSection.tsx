'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-item', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-bg-surface overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-3 block">Varför Clean Charge?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-6 leading-tight">
              Vi bygger infrastrukturen för imorgon.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              För oss handlar elbilsladdning inte bara om hårdvara, utan om en sömlös helhetsupplevelse. Som oberoende experter installerar vi branschens ledande märken med ett system som automatiskt hanterar lastbalansering, uppdateringar och debitering.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div className="stat-item">
                <span className="block text-4xl font-bold text-text-primary mb-1">100%</span>
                <span className="text-sm font-semibold text-text-secondary uppercase">Certifierade</span>
              </div>
              <div className="stat-item">
                <span className="block text-4xl font-bold text-brand-green mb-1">24/7</span>
                <span className="text-sm font-semibold text-text-secondary uppercase">Support & Service</span>
              </div>
            </div>
          </div>

          {/* Trusted Partners Grid */}
          <div className="w-full lg:w-1/2">
             <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Våra Hårdvaru & Mjukvarupartners</h3>
                <div className="grid grid-cols-2 gap-8 items-center justify-items-center opacity-70">
                   
                   {/* Monta */}
                   <div className="stat-item grayscale hover:grayscale-0 transition-all duration-300">
                      <svg width="100" height="30" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="800" fill="#003dff">
                          MONTA
                        </text>
                      </svg>
                   </div>

                   {/* Zaptec */}
                   <div className="stat-item grayscale hover:grayscale-0 transition-all duration-300">
                      <svg width="100" height="30" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="800" fill="#111111">
                          ZAPTEC
                        </text>
                      </svg>
                   </div>

                   {/* Easee */}
                   <div className="stat-item grayscale hover:grayscale-0 transition-all duration-300">
                      <svg width="100" height="30" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="800" fill="#111111">
                          EASEE
                        </text>
                      </svg>
                   </div>

                   {/* Autel */}
                   <div className="stat-item grayscale hover:grayscale-0 transition-all duration-300">
                      <svg width="100" height="30" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="800" fill="#D2232A">
                          AUTEL
                        </text>
                      </svg>
                   </div>

                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
