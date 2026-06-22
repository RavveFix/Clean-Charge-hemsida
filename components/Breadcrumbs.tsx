'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type Crumb = { name: string; href: string };

interface BreadcrumbsProps {
  /** Crumbs after "Hem" — mirrors the page's breadcrumbJsonLd input. */
  items: Crumb[];
  /** 'light' = on light backgrounds (dark text), 'dark' = on dark backgrounds (light text). */
  variant?: 'light' | 'dark';
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'light', className = '' }) => {
  const muted = variant === 'dark' ? 'text-white/60' : 'text-slate-400';
  const hover = variant === 'dark' ? 'hover:text-white' : 'hover:text-cc-green';
  const current = variant === 'dark' ? 'text-white' : 'text-slate-700';

  return (
    <nav aria-label="Brödsmulor" className={`mb-6 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-bold">
        <li className="flex items-center gap-1.5">
          <Link href="/" className={`${muted} ${hover} transition-colors`}>
            Hem
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${muted}`} aria-hidden="true" />
              {isLast ? (
                <span className={current} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className={`${muted} ${hover} transition-colors`}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
