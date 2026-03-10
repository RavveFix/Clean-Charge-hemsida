'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  activeTab?: string;
  onSearchClick?: () => void;
  cartCount?: number;
  onCartClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSearchClick,
  cartCount = 0,
  onCartClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { id: 'home', label: 'Hem', href: '/' },
    { id: 'products', label: 'Produkter', href: '/produkter' },
    { id: 'private', label: 'Ladda Privat', href: '/privat' },
    { id: 'commercial', label: 'Publik Laddning', href: '/publik' },
    { id: 'about', label: 'Om Oss', href: '/om-oss' },
    { id: 'contact', label: 'Kontakta Oss', href: '/kontakt' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

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

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-500 rounded-full px-6 lg:px-8 py-3 flex items-center justify-between bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/80 [&.scrolled]:shadow-[0_8px_30px_rgb(0,0,0,0.08)] [&.scrolled]:bg-white/98"
      >
        <Link
          href="/"
          className="flex items-center cursor-pointer shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="https://cleancharge.se/wp-content/uploads/CC_logo_1row_5.svg"
            alt="Clean Charge AB"
            className="h-6 md:h-7 lg:h-8 w-auto transition-all duration-500"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-1 lg:space-x-2 ml-4 xl:ml-8">
          {navLinks.map((tab) => (
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
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Varukorg"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-brand-green text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold text-white leading-none">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-bg-primary z-50 transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-10 right-6 p-2 text-text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center space-y-8 w-full px-8">
          {navLinks.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-bold tracking-tight ${
                isActive(tab.href) ? 'text-brand-green' : 'text-text-primary'
              }`}
            >
              {tab.label}
            </Link>
          ))}
          <div className="pt-12 w-full space-y-4">
            <a
              href="tel:0197604290"
              className="w-full flex items-center justify-center gap-3 bg-slate-100 text-text-primary text-lg font-bold uppercase tracking-widest py-5 rounded-[2rem]"
            >
              <Phone className="w-5 h-5" />
              019-760 42 90
            </a>
            <Link
              href="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="w-full block text-center bg-brand-green text-white text-lg font-bold uppercase tracking-widest py-6 rounded-[2rem] shadow-xl hover:scale-[1.02] transition-transform"
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
