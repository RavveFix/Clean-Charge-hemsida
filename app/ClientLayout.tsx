'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import PreFooterCTA from '@/components/PreFooterCTA';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const [isChatOpen, setIsChatOpen] = useState(false);

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
      <Navbar
        activeTab={getActiveTab()}
        onSearchClick={() => setIsChatOpen(true)}
      />
      <main className="flex-grow">
        {children}
      </main>
      {showPreFooter && <PreFooterCTA />}
      <Footer />
      <ChatWidget isOpen={isChatOpen} onToggle={setIsChatOpen} />
    </>
  );
}
