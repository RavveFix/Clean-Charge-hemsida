'use client';

import React, { useEffect, useState } from 'react';

// Use module-level variables to persist mouse position between page/route client-side transitions,
// ensuring the cursor never jumps to (0,0) or resets when navigating!
let globalMousePosition = { x: 0, y: 0 };
let globalHasMoved = false;

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState(() => globalMousePosition);
  const [trail, setTrail] = useState(() => globalMousePosition);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(() => globalHasMoved);

  useEffect(() => {
    // Only enable on desktop/pointing devices
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      globalMousePosition = { x: e.clientX, y: e.clientY };
      globalHasMoved = true;
      setPosition(globalMousePosition);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId: number;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    
    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible]);

  // Safeguard: Hide cursor if it's uninitialized or positioned at the exact top-left coordinate (0,0)
  if (!isVisible || (position.x === 0 && position.y === 0)) return null;

  return (
    <>
      {/* Small precision cursor dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-green rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      {/* Large glowing ambient trace */}
      <div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-brand-green/30 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out mix-blend-difference bg-brand-green/5"
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0) scale(${isHovering ? 1.6 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
