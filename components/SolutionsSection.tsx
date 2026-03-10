'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Building2, Building } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SolutionsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.solution-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
      gsap.utils.toArray<HTMLElement>('.solution-image').forEach((img) => {
        gsap.to(img, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const solutions = [
    {
      id: 'private',
      title: 'För Elektriker & Grossister',
      desc: 'Vi erbjuder anpassade laddlösningar och support för er som installerar mot privatpersoner. Nyttja Grön Teknik-avdraget direkt och säkerställ en premiumupplevelse för kund.',
      icon: <Home className="w-5 h-5 text-brand-green" />,
      image: '/images/solutions/installer.png',
      href: '/privat',
    },
    {
      id: 'brf',
      title: 'För Bostadsrättsföreningar',
      desc: 'Skapa mervärde för medlemmarna. Vi levererar skalbara system med automatisk debitering via Monta.',
      icon: <Building className="w-5 h-5 text-brand-green" />,
      image: '/images/solutions/brf.png',
      href: '/publik',
    },
    {
      id: 'commercial',
      title: 'För Företag',
      desc: 'Framtidssäkra arbetsplatsen. Smarta laddlösningar för anställda och besökare med full administrativ kontroll.',
      icon: <Building2 className="w-5 h-5 text-brand-green" />,
      image: '/images/solutions/commercial.png',
      href: '/foretag',
    }
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-green font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 block">Lösningar</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4 md:mb-6">
            Laddning anpassad för <br className="hidden sm:block" />din verklighet.
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Oavsett om du laddar hemma, på jobbet eller i föreningen har vi en helhetslösning som passar perfekt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              href={solution.href}
              className="solution-card group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="solution-image absolute top-[-15%] left-0 w-full h-[130%] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <div className="mb-4 md:mb-6 text-slate-700">{solution.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 md:mb-3 leading-tight">{solution.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6 md:mb-8 flex-grow text-sm md:text-base">{solution.desc}</p>
                <div className="flex items-center text-text-primary font-bold text-sm group-hover:text-brand-green transition-colors mt-auto">
                  Läs mer
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
