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
  return (
    <div className="relative grid md:grid-cols-2 gap-8">
      <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

      <div className={`${isRight ? 'md:col-start-2 md:pl-12' : 'md:pr-12'} text-left`}>
        <article className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md smooth-transition">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{entry.position}</h3>
              <p className="text-primary font-semibold mb-2">{entry.company}</p>
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {entry.period}
              </span>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{entry.summary}</p>

          <div className="space-y-3">
            {entry.items.map((item, index) => (
              <div key={`${entry.company}-${index}`} className="rounded-lg border border-border p-3 bg-background/60">
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
