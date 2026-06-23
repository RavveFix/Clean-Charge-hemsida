import { ChevronDown } from 'lucide-react';
import type { FaqEntry } from '@/lib/jsonld';

export default function FaqSection({
  entries,
  title = 'Vanliga frågor',
}: {
  entries: FaqEntry[];
  title?: string;
}) {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-12">
          {title}
        </h2>
        <div className="divide-y divide-slate-100">
          {entries.map((entry) => (
            <details key={entry.question} className="group py-6">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-bold text-slate-900">{entry.question}</h3>
                <ChevronDown className="w-5 h-5 text-[#00b182] shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="text-slate-500 leading-relaxed mt-4">{entry.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
