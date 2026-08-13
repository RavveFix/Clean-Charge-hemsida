import Link from 'next/link';
import { CalendarDays, ShieldCheck } from 'lucide-react';

type ArticleMetaProps = {
  published: string;
  modified: string;
};

const dateFormatter = new Intl.DateTimeFormat('sv-SE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Stockholm',
});

function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T12:00:00+02:00`));
}

export default function ArticleMeta({ published, modified }: ArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-500 mb-10">
      <span className="inline-flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-[#00b182]" aria-hidden="true" />
        Faktagranskad av{' '}
        <Link href="/om-oss" className="text-slate-800 hover:text-[#00b182] transition-colors">
          Clean Charge AB
        </Link>
      </span>
      <span className="inline-flex items-center gap-2">
        <CalendarDays className="w-4 h-4 text-[#00b182]" aria-hidden="true" />
        Publicerad <time dateTime={published}>{formatDate(published)}</time>
        <span aria-hidden="true">·</span>
        Uppdaterad <time dateTime={modified}>{formatDate(modified)}</time>
      </span>
    </div>
  );
}
