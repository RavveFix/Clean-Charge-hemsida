'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  activeTab?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  activeTab,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const homeLink = { id: 'home', label: 'Hem', href: '/' };

  const solutionLinks = [
    { id: 'private', label: 'Ladda Privat', href: '/privat' },
    { id: 'foretag', label: 'Företag', href: '/foretag' },
    { id: 'fastighet', label: 'BRF & Fastighet', href: '/fastighetsbolag' },
    { id: 'publik', label: 'Publik Laddning', href: '/publik' },
    { id: 'dc', label: 'DC-snabbladdning', href: '/dc-laddstation' },
  ];

  const tailLinks = [
    { id: 'products', label: 'Produkter', href: '/produkter' },
    { id: 'about', label: 'Om Oss', href: '/om-oss' },
    { id: 'contact', label: 'Kontakta Oss', href: '/kontakt' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const solutionsActive = solutionLinks.some((link) => isActive(link.href));

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          targets: navRef.current,
          className: 'scrolled',
        },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Close menus on route change
  useEffect(() => {
    setSolutionsOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  // Close the Lösningar dropdown on outside click / Escape
  useEffect(() => {
    if (!solutionsOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSolutionsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [solutionsOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] transition-all duration-500 rounded-full px-6 lg:px-8 py-3 flex items-center justify-between bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/80 [&.scrolled]:shadow-[0_8px_30px_rgb(0,0,0,0.08)] [&.scrolled]:bg-white/98"
      >
        <Link
          href="/"
          className="flex items-center cursor-pointer shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
          {logoError ? (
            <span className="text-lg md:text-xl font-black tracking-tight text-slate-800">
              Clean <span className="text-brand-green">Charge</span>
            </span>
          ) : (
            <Image
              src="/images/brand/cc-logo.png"
              alt="Clean Charge AB"
              width={160}
              height={40}
              priority
              className="h-6 md:h-7 lg:h-8 w-auto transition-all duration-500"
              onError={() => setLogoError(true)}
            />
          )}
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-1 lg:space-x-2 ml-4 xl:ml-8">
          <Link
            href={homeLink.href}
            className={`text-[15px] font-bold tracking-wide transition-all duration-300 px-5 py-2.5 rounded-[1.25rem] ${
              isActive(homeLink.href)
                ? 'border border-slate-200 text-text-primary bg-slate-50/80 shadow-sm'
                : 'text-text-primary hover:bg-slate-50/80'
            }`}
          >
            {homeLink.label}
          </Link>

          {/* Lösningar dropdown */}
          <div ref={solutionsRef} className="relative group">
            <button
              type="button"
              onClick={() => setSolutionsOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={solutionsOpen}
              className={`flex items-center gap-1.5 text-[15px] font-bold tracking-wide transition-all duration-300 px-5 py-2.5 rounded-[1.25rem] ${
                solutionsActive
                  ? 'border border-slate-200 text-text-primary bg-slate-50/80 shadow-sm'
                  : 'text-text-primary hover:bg-slate-50/80'
              }`}
            >
              Lösningar
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${
                  solutionsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Panel is always rendered (only visually toggled) so links stay crawlable */}
            <div
              role="menu"
              aria-label="Lösningar"
              className={`absolute left-0 top-full pt-3 w-64 transition-all duration-200 ${
                solutionsOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200/80 p-2">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setSolutionsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-[14px] font-bold transition-colors ${
                      isActive(link.href)
                        ? 'text-brand-green bg-slate-50'
                        : 'text-text-primary hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {tailLinks.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`text-[15px] font-bold tracking-wide transition-all duration-300 px-5 py-2.5 rounded-[1.25rem] ${
                isActive(tab.href)
                  ? 'border border-slate-200 text-text-primary bg-slate-50/80 shadow-sm'
                  : 'text-text-primary hover:bg-slate-50/80'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 text-text-primary pl-2">
          {/* Phone number – always visible on desktop */}
          <a
            href="tel:0197604290"
            className="hidden lg:flex items-center gap-2 text-[15px] font-bold text-text-primary hover:text-brand-green transition-colors duration-300 px-3 py-2"
            aria-label="Ring oss"
          >
            <Phone className="w-[18px] h-[18px]" />
            <span>019-760 42 90</span>
          </a>



          <button
            className="lg:hidden p-3 rounded-full hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-[150] transition-all duration-500 ease-in-out flex flex-col pt-24 pb-12 overflow-y-auto ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-10 right-6 p-2 text-text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center space-y-6 w-full px-8">
          <Link
            href={homeLink.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl sm:text-3xl font-black uppercase tracking-tight inline-flex items-center min-h-[48px] px-4 ${
              isActive(homeLink.href) ? 'text-brand-green' : 'text-slate-800'
            }`}
          >
            {homeLink.label}
          </Link>

          {/* Lösningar group */}
          <div className="w-full flex flex-col items-center space-y-4">
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400">Lösningar</span>
            {solutionLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl font-bold tracking-tight inline-flex items-center min-h-[44px] px-4 ${
                  isActive(link.href) ? 'text-brand-green' : 'text-slate-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {tailLinks.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl sm:text-3xl font-black uppercase tracking-tight inline-flex items-center min-h-[48px] px-4 ${
                isActive(tab.href) ? 'text-brand-green' : 'text-slate-800'
              }`}
            >
              {tab.label}
            </Link>
          ))}
          <div className="pt-10 w-full space-y-4 max-w-sm mx-auto">
            <a
              href="tel:0197604290"
              className="w-full flex items-center justify-center gap-3 bg-slate-50 border border-slate-100 text-slate-800 text-base font-black uppercase tracking-widest py-5 rounded-[2rem] hover:bg-slate-100 transition-all"
            >
              <Phone className="w-5 h-5 text-brand-green" />
              019-760 42 90
            </a>
            <Link
              href="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="w-full block text-center bg-brand-green text-white text-base font-black uppercase tracking-widest py-5 rounded-[2rem] shadow-xl shadow-brand-green/20 active:scale-95 transition-all"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
