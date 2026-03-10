'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Zap, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-charcoal pt-32 pb-16 border-t border-slate-100 font-monta">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://cleancharge.se/wp-content/uploads/CC_logo_1row_5.svg"
                  alt="Clean Charge AB"
                  className="h-10 w-auto"
                />
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
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center hover:bg-[#003DFF] transition-all group">
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
                { label: 'För Företag', href: '/publik' },
                { label: 'För BRF', href: '/publik' },
                { label: 'Snabbladdning (DC)', href: '/dc-laddstation' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
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
                { label: 'Installation', href: '/support' },
                { label: 'Monta Hjälpcenter', href: 'https://monta.com/se/help-center/' },
                { label: 'Felanmälan', href: '/kontakt' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
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
              <li><a href="mailto:info@cleancharge.se" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">info@cleancharge.se</a></li>
              <li><a href="tel:0197604290" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">019-760 42 90</a></li>
              <li className="pt-4 space-y-1">
                <p className="text-sm font-bold text-slate-800 leading-tight">Ravon Eric Albin Strawder</p>
                <p className="text-[9px] font-black text-cc-green uppercase tracking-widest">Delägare</p>
                <a href="tel:0722110026" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors block">072-211 00 26</a>
                <a href="mailto:ravon.strawder@cleancharge.se" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors block">ravon.strawder@cleancharge.se</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center space-x-6">
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">© 2026 Clean Charge AB</p>
              <div className="h-4 w-px bg-slate-100"></div>
              <img src="https://monta.com/app/themes/monta-sage-latest/public/build/assets/logo_soc2-t2-BsbIKEuK.png" className="h-8 opacity-30 grayscale" alt="SOC2" />
            </div>
            <div className="hidden md:block h-4 w-px bg-slate-100"></div>
            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-400">Design by Rávon Eric Albin Strawder & AI</p>
          </div>
          <div className="flex space-x-12">
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
