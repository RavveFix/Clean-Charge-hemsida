'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Zap, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 border-t border-slate-100 font-monta">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-24 md:mb-32">
          <div className="space-y-6 sm:space-y-10 col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://cleancharge.se/wp-content/uploads/CC_logo_1row_5.svg"
                  alt="Clean Charge AB"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('footer-text-logo-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <span id="footer-text-logo-fallback" className="hidden text-2xl font-black text-slate-900 tracking-tighter uppercase font-sans">
                  Clean Charge<span className="text-brand-green">.</span>
                </span>
              </div>
              <div className="space-y-3">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">In partnership with</span>
                <div className="flex flex-wrap items-center gap-6">
                  {['MONTA', 'ZAPTEC', 'EASEE', 'AUTEL'].map((brand) => (
                    <span key={brand} className="text-sm font-black text-slate-300 opacity-40 hover:opacity-60 transition-opacity">{brand}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
              Vi skapar smartare laddlösningar för en hållbar framtid. Som din certifierade Zaptec-partner och Monta-operatör garanterar vi högsta kvalitet.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/cleancharge', label: 'Facebook' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/clean-charge-ab', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center hover:bg-cc-green transition-all group"
                >
                  <Icon className="w-5 h-5 text-slate-700 group-hover:text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-cc-green">Lösningar</h4>
            <ul className="space-y-5">
              {[
                { label: 'För Privatpersoner', href: '/privat' },
                { label: 'För Företag', href: '/foretag' },
                { label: 'För BRF', href: '/fastighetsbolag' },
                { label: 'Snabbladdning (DC)', href: '/dc-laddstation' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm font-bold text-slate-500 hover:text-cc-green transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-cc-green">Support</h4>
            <ul className="space-y-5">
              {[
                { label: 'Support & Manualer', href: '/support' },
                { label: 'Installation', href: '/support#installation' },
                { label: 'Monta Hjälpcenter', href: 'https://monta.com/se/help-center/' },
                { label: 'Felanmälan', href: '/kontakt' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm font-bold text-slate-500 hover:text-cc-green transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-cc-green">Kontakt</h4>
            <ul className="space-y-5">
              <li><span className="text-sm font-bold text-slate-500">Dialoggatan 12B, Örebro</span></li>
              <li><a href="mailto:info@cleancharge.se" className="text-sm font-bold text-slate-500 hover:text-cc-green transition-colors">info@cleancharge.se</a></li>
              <li><a href="tel:0197604290" className="text-sm font-bold text-slate-500 hover:text-cc-green transition-colors">019-760 42 90</a></li>
              <li className="pt-4 space-y-1">
                <p className="text-sm font-bold text-slate-800 leading-tight">Ravon Eric Albin Strawder</p>
                <p className="text-[9px] font-black text-cc-green uppercase tracking-widest">Delägare</p>
                <a href="tel:0722110026" className="text-sm font-bold text-slate-500 hover:text-cc-green transition-colors block">072-211 00 26</a>
                <a href="mailto:ravon.strawder@cleancharge.se" className="text-sm font-bold text-slate-500 hover:text-cc-green transition-colors block">ravon.strawder@cleancharge.se</a>
              </li>
              <li className="pt-4 space-y-1">
                <p className="text-sm font-bold text-slate-800 leading-tight">Elisabeth Lindh</p>
                <p className="text-[9px] font-black text-cc-green uppercase tracking-widest">Säljansvarig</p>
                <a href="mailto:elisabeth.lindh@cleancharge.se" className="text-sm font-bold text-slate-500 hover:text-cc-green transition-colors block">elisabeth.lindh@cleancharge.se</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 sm:pt-16 border-t border-slate-100 flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center space-x-6">
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">© 2026 Clean Charge AB</p>
              <div className="h-4 w-px bg-slate-100"></div>
              <img src="https://monta.com/app/themes/monta-sage-latest/public/build/assets/logo_soc2-t2-BsbIKEuK.png" className="h-8 opacity-30 grayscale" alt="SOC2" />
            </div>
            <div className="hidden md:block h-4 w-px bg-slate-100"></div>
            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-400">Design by Rávon Eric Albin Strawder & AI</p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-12 justify-center md:justify-end">
            <Link href="/integritetspolicy" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-700 transition-colors">Integritetspolicy</Link>
            <Link href="/villkor" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-700 transition-colors">Köpvillkor</Link>
            <Link href="/cookies" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-700 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
