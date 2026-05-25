'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PreFooterCTA from '@/components/PreFooterCTA';
import LiveImpactWidget from '@/components/LiveImpactWidget';
import ScrollToTop from '@/components/ScrollToTop';
import PageTransition from '@/components/PageTransition';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  // Derive active tab from pathname for Navbar highlight
  const getActiveTab = () => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/produkter')) return 'products';
    if (pathname.startsWith('/privat')) return 'private';
    if (pathname.startsWith('/publik')) return 'commercial';
    if (pathname.startsWith('/kontakt')) return 'contact';
    if (pathname.startsWith('/om-oss')) return 'about';
    if (pathname.startsWith('/support')) return 'support';
    if (pathname.startsWith('/monta')) return 'monta-hub';
    return 'home';
  };

  const showPreFooter = !['/integritetspolicy', '/villkor', '/cookies'].includes(pathname);

  return (
    <>
      <LiveImpactWidget />
      <ScrollToTop />
      <Navbar
        activeTab={getActiveTab()}
      />
      <main className="flex-grow">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      {showPreFooter && <PreFooterCTA />}
      <Footer />
    </>
  );
}

