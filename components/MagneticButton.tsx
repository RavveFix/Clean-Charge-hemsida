'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import useReducedMotion from '@/lib/useReducedMotion';

interface MagneticButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: React.ReactNode;
  href: string;
  strength?: number;
  magneticRadius?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  href,
  strength = 30,
  magneticRadius = 100,
  ...props
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isHovered = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const link = linkRef.current;
    const text = textRef.current;
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!link || prefersReducedMotion || !supportsHover) {
      if (link) gsap.set(link, { clearProps: 'transform' });
      if (text) gsap.set(text, { clearProps: 'transform' });
      return;
    }

    const resetPosition = () => {
      isHovered.current = false;
      gsap.to(link, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
      if (text) {
        gsap.to(text, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = link.getBoundingClientRect();
      const distanceX = event.clientX - (rect.left + rect.width / 2);
      const distanceY = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(distanceX, distanceY);

      if (distance >= magneticRadius) {
        if (isHovered.current) resetPosition();
        return;
      }

      isHovered.current = true;
      const pullX = (distanceX / magneticRadius) * strength;
      const pullY = (distanceY / magneticRadius) * strength;

      gsap.to(link, { x: pullX, y: pullY, duration: 0.4, ease: 'power2.out' });
      if (text) {
        gsap.to(text, {
          x: pullX * 0.4,
          y: pullY * 0.4,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.killTweensOf([link, text]);
    };
  }, [magneticRadius, prefersReducedMotion, strength]);

  return (
    <Link
      ref={linkRef}
      href={href}
      className={`relative inline-flex ${className}`}
      {...props}
    >
      <span
        ref={textRef}
        className="pointer-events-none flex h-full w-full items-center justify-center gap-2"
      >
        {children}
      </span>
    </Link>
  );
};

export default MagneticButton;
