'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // Route changed — trigger exit animation
      setIsTransitioning(true);

      const timeout = setTimeout(() => {
        setDisplayedChildren(children);
        setIsTransitioning(false);
        prevPathname.current = pathname;
      }, 280); // Match CSS transition duration

      return () => clearTimeout(timeout);
    } else {
      // Initial mount or same route — show immediately
      setDisplayedChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      className={`transition-all duration-[280ms] ease-out ${
        isTransitioning
          ? 'opacity-0 translate-y-2 scale-[0.998]'
          : 'opacity-100 translate-y-0 scale-100'
      }`}
    >
      {displayedChildren}
    </div>
  );
};

export default PageTransition;
