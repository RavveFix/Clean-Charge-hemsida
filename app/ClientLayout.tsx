'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import CartDrawer from '@/components/CartDrawer';
import PreFooterCTA from '@/components/PreFooterCTA';
import { CartItem, Product } from '@/types';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.quantity + delta);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

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
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onSearchClick={() => setIsChatOpen(true)}
      />
      <main className="flex-grow">
        {children}
      </main>
      {showPreFooter && <PreFooterCTA />}
      <Footer />
      <ChatWidget isOpen={isChatOpen} onToggle={setIsChatOpen} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </>
  );
}
