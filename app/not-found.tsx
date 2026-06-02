import type { Metadata } from 'next';
import Link from 'next/link';
import ClientLayout from '@/app/ClientLayout';
import { Home, Zap, MessageSquare, Box } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sidan kunde inte hittas (404)',
  description:
    'Sidan du letar efter finns inte längre. Hitta tillbaka till Clean Charge AB:s startsida, se våra laddboxar och tjänster eller kontakta oss på 019-760 42 90.',
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  {
    href: '/',
    label: 'Startsida',
    description: 'Tillbaka till hem',
    icon: Home,
  },
  {
    href: '/produkter',
    label: 'Produkter',
    description: 'Laddboxar & snabbladdare',
    icon: Box,
  },
  {
    href: '/foretag',
    label: 'För Företag',
    description: 'Laddinfrastruktur för företag',
    icon: Zap,
  },
  {
    href: '/kontakt',
    label: 'Kontakt',
    description: 'Få offert eller rådgivning',
    icon: MessageSquare,
  },
];

export default function NotFound() {
  return (
    <ClientLayout>
      <section className="min-h-[80vh] flex items-center justify-center bg-white px-6 py-32">
        <div className="max-w-3xl w-full text-center">
          <p className="text-[12px] font-black uppercase tracking-[0.3em] text-cc-green mb-6">
            404 – Sidan kunde inte hittas
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
            Den här sidan finns inte.
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 font-medium mb-12 max-w-xl mx-auto">
            Länken kan vara trasig eller så har sidan flyttat. Här är några
            vägar tillbaka.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {QUICK_LINKS.map(({ href, label, description, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-cc-green hover:bg-white hover:shadow-lg transition-all text-left"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-cc-green/10 group-hover:bg-cc-green/20 flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-cc-green" />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-base">{label}</p>
                  <p className="text-xs font-semibold text-slate-500">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Behöver du hjälp direkt?
            </p>
            <a
              href="tel:0197604290"
              className="text-2xl font-black text-slate-900 hover:text-cc-green transition-colors mt-2 inline-block"
            >
              019-760 42 90
            </a>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}
