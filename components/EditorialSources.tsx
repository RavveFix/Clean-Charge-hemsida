import { ExternalLink, FileCheck2 } from 'lucide-react';

type Source = {
  label: string;
  href: string;
};

export default function EditorialSources({ sources }: { sources: Source[] }) {
  return (
    <aside className="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9" aria-labelledby="editorial-sources-heading">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
          <FileCheck2 className="w-5 h-5 text-[#00b182]" aria-hidden="true" />
        </div>
        <h2 id="editorial-sources-heading" className="text-xl font-black text-slate-900">
          Källor &amp; faktagranskning
        </h2>
      </div>
      <p className="text-slate-600 leading-relaxed mb-5 max-w-3xl">
        Guiden bygger på vår praktiska erfarenhet av laddinstallationer och uppgifter från följande primärkällor.
      </p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-sm font-bold text-slate-700 hover:text-[#00b182] transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
