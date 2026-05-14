import { Briefcase, Calendar, Cpu } from 'lucide-react';
import { ExperienceEntry } from '@/lib/types';

type ExperienceItemProps = {
  entry: ExperienceEntry;
  isRight: boolean;
  labels: {
    action: string;
    technology: string;
    result: string;
    visitSite: string;
  };
};

export default function ExperienceItem({ entry, isRight, labels }: ExperienceItemProps) {
  const currentLabel = entry.period.includes('Actualidad')
    ? 'Actualidad'
    : entry.period.includes('Present')
      ? 'Present'
      : null;

  return (
    <div className="relative grid md:grid-cols-2 gap-8">
      <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

      <div className={`${isRight ? 'md:col-start-2 md:pl-12' : 'md:pr-12'} text-left`}>
        <article className="rounded-2xl border border-border/70 bg-card/95 p-6 shadow-sm smooth-transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start gap-3 mb-5">
            <div className="flex-shrink-0 rounded-xl bg-primary/10 p-2.5">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">{entry.company}</p>
                {currentLabel ? (
                  <span className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                    {currentLabel}
                  </span>
                ) : null}
              </div>
              <h3 className="text-xl font-bold leading-snug text-foreground">{entry.position}</h3>
              <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {entry.period}
              </span>
            </div>
          </div>

          <div className="mb-5 rounded-xl border border-primary/10 bg-primary/5 p-4">
            <p className="text-sm leading-6 text-muted-foreground">{entry.summary}</p>
          </div>

          <div className="space-y-3">
            {entry.items.map((item, index) => (
              <div key={`${entry.company}-${index}`} className="rounded-xl border border-border/80 bg-background/70 p-4 shadow-sm">
                <p className="text-sm">
                  <span className="font-semibold">{labels.action}: </span>
                  <span className="text-muted-foreground">{item.action}</span>
                </p>
                <p className="text-sm mt-1 inline-flex items-center gap-1.5">
                  <Cpu className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{labels.technology}: </span>
                  <span className="text-muted-foreground">{item.technology}</span>
                </p>
                <p className="text-sm mt-1">
                  <span className="font-semibold">{labels.result}: </span>
                  <span className="text-muted-foreground">{item.result}</span>
                </p>
              </div>
            ))}

            {entry.link ? (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-primary font-medium hover:underline"
              >
                {labels.visitSite}
              </a>
            ) : null}
          </div>
        </article>
      </div>

      <div className="hidden md:block" />
    </div>
  );
}
