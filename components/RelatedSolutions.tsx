import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type SolutionKey =
  | 'privat'
  | 'foretag'
  | 'fastighetsbolag'
  | 'publik'
  | 'dc-laddstation'
  | 'monta'
  | 'produkter';

type SolutionLink = {
  title: string;
  href: string;
  desc: string;
};

const LINKS: Record<SolutionKey, SolutionLink> = {
  privat: {
    title: 'Ladda hemma',
    href: '/privat',
    desc: 'Laddbox för villa och radhus – nyckelfärdigt med 50% Grön Teknik-avdrag.',
  },
  foretag: {
    title: 'Laddbox för företag',
    href: '/foretag',
    desc: 'Skalbara laddlösningar för arbetsplatser med smart lastbalansering.',
  },
  fastighetsbolag: {
    title: 'BRF & fastighetsbolag',
    href: '/fastighetsbolag',
    desc: 'Gemensam laddning med individuell debitering via Monta.',
  },
  publik: {
    title: 'Publik laddning',
    href: '/publik',
    desc: 'Laddstationer för parkeringar och besökare med betalning och drift.',
  },
  'dc-laddstation': {
    title: 'DC-snabbladdning',
    href: '/dc-laddstation',
    desc: 'Snabbladdare 50–360 kW för publika och kommersiella anläggningar.',
  },
  monta: {
    title: 'Smart laddning med Monta',
    href: '/monta',
    desc: 'Betalning, debitering och drift av dina laddare via Monta-plattformen.',
  },
  produkter: {
    title: 'Våra produkter',
    href: '/produkter',
    desc: 'AC- och DC-laddboxar från Zaptec, Easee och Autel.',
  },
};

const RELATED: Record<SolutionKey, SolutionKey[]> = {
  privat: ['produkter', 'foretag', 'fastighetsbolag'],
  foretag: ['fastighetsbolag', 'monta', 'produkter'],
  fastighetsbolag: ['foretag', 'monta', 'produkter'],
  publik: ['dc-laddstation', 'foretag', 'monta'],
  'dc-laddstation': ['publik', 'foretag', 'produkter'],
  monta: ['foretag', 'fastighetsbolag', 'publik'],
  produkter: ['foretag', 'privat', 'fastighetsbolag'],
};

const DEFAULT_RELATED: SolutionKey[] = ['privat', 'foretag', 'produkter'];

export default function RelatedSolutions({ current }: { current?: SolutionKey }) {
  const items = (current ? RELATED[current] : DEFAULT_RELATED).map((key) => LINKS[key]);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-4">
          Utforska fler lösningar
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-xl">
          Vi täcker hela kedjan – hitta laddlösningen som passar ditt behov.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#00b182]/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
              <span
                aria-hidden="true"
                className="inline-flex items-center gap-2 text-[#00b182] font-bold text-sm uppercase tracking-wider mt-auto"
              >
                Läs mer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
