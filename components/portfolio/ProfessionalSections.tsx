'use client';

import { professionalContentByLocale } from '@/data/professional';
import { Award, Braces, Cloud, LockKeyhole, Network, ShieldCheck, Target } from 'lucide-react';
import { useI18n } from '../ui/locale-provider';
import Section from './Section';

const sectionIcons = [ShieldCheck, Braces, Cloud, Target];

function CardGrid({
  items,
}: {
  items: { title: string; description: string; points: string[] }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = sectionIcons[index % sectionIcons.length];
        return (
          <article key={item.title} className="card h-full rounded-xl border shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="icon-circle">
                <Icon className="icon-svg text-primary" />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {item.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}

export function Specialties() {
  const { lang } = useI18n();
  const content = professionalContentByLocale[lang].specialties;

  return (
    <Section id="specialties" title={content.title} description={content.subtitle}>
      <CardGrid items={content.items} />
    </Section>
  );
}

export function Architecture() {
  const { lang } = useI18n();
  const content = professionalContentByLocale[lang].architecture;

  return (
    <Section
      id="architecture"
      title={content.title}
      description={content.subtitle}
      className="section-alt"
    >
      <CardGrid items={content.items} />
    </Section>
  );
}

export function Security() {
  const { lang } = useI18n();
  const content = professionalContentByLocale[lang].security;

  return (
    <Section id="security" title={content.title} description={content.subtitle}>
      <CardGrid items={content.items} />
    </Section>
  );
}

export function Certifications() {
  const { lang } = useI18n();
  const content = professionalContentByLocale[lang].certifications;

  return (
    <Section
      id="certifications"
      title={content.title}
      description={content.subtitle}
      className="section-alt"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {content.items.map((item) => (
          <article key={item.name} className="card rounded-xl border shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="icon-circle">
                <Award className="icon-svg text-primary" />
              </div>
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-primary">{item.issuer}</p>
              </div>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">{item.focus}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              {item.status}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Roadmap() {
  const { lang } = useI18n();
  const content = professionalContentByLocale[lang].roadmap;

  return (
    <Section
      id="roadmap"
      title={content.title}
      description={content.subtitle}
      className="section-alt"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {content.items.map((item, index) => {
          const Icon = index % 2 === 0 ? Network : LockKeyhole;
          return (
            <article key={item.title} className="card rounded-xl border shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="icon-circle">
                  <Icon className="icon-svg text-primary" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-md bg-secondary px-2 py-1 text-xs font-medium"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
