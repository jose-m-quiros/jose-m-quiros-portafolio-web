'use client';

import { Rocket, ShieldCheck } from 'lucide-react';
import Section from './Section';
import { inDevelopmentByLocale } from '@/data/projects';
import { useI18n } from '../ui/locale-provider';

const sectionCopy = {
  es: {
    title: 'Caso Técnico',
    highlight: 'En Desarrollo',
    description:
      'BLACK MONARCH muestra criterio de arquitectura, seguridad e inferencia local aplicado a una plataforma de ciberdefensa en evolución.',
    objective: 'El Reto Técnico',
    currentFocus: 'La Decisión',
    expectedImpact: 'El Resultado Operativo',
    securityScope: 'La Ejecución (Seguridad y Clean Architecture)',
    stack: 'Stack técnico',
  },
  en: {
    title: 'Technical Case',
    highlight: 'In Development',
    description:
      'BLACK MONARCH shows architecture, security and local inference judgment applied to an evolving cyber defense platform.',
    objective: 'The Technical Challenge',
    currentFocus: 'The Decision',
    expectedImpact: 'Operational Result',
    securityScope: 'Execution (Security and Clean Architecture)',
    stack: 'Technical stack',
  },
} as const;

export default function InDevelopment() {
  const { lang } = useI18n();
  const copy = sectionCopy[lang];
  const items = inDevelopmentByLocale[lang];
  const hasSingleItem = items.length === 1;

  return (
    <Section
      id="development"
      title={copy.title}
      highlight={copy.highlight}
      description={copy.description}
      className="section-alt"
    >
      <div className={`grid gap-6 ${hasSingleItem ? 'max-w-5xl mx-auto' : 'lg:grid-cols-2'}`}>
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-primary/20 bg-card/95 p-6 shadow-sm md:p-8"
          >
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{item.title}</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 text-left">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {copy.objective}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{item.objective}</p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 text-left">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {copy.currentFocus}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{item.currentFocus}</p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 text-left">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {copy.expectedImpact}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{item.expectedImpact}</p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-left">
                <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">
                  <ShieldCheck className="h-4 w-4" />
                  {copy.securityScope}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{item.securityScope}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border/80 bg-background/50 p-5">
              <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">
                {copy.stack}
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/80 bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
