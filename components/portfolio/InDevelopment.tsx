"use client";

import { Rocket, ShieldCheck } from 'lucide-react';
import Section from './Section';
import { inDevelopmentByLocale } from '@/data/projects';
import { useI18n } from '../ui/locale-provider';

const sectionCopy = {
  es: {
    title: 'En',
    highlight: 'Desarrollo',
    description:
      'Iniciativas tecnicas en curso orientadas a fortalecer mi perfil como Backend Developer con prioridad en seguridad.',
    objective: 'Objetivo',
    currentFocus: 'Foco actual',
    expectedImpact: 'Impacto esperado',
    securityScope: 'Alcance de seguridad',
  },
  en: {
    title: 'In',
    highlight: 'Development',
    description:
      'Ongoing technical initiatives designed to strengthen my profile as a security-focused backend developer.',
    objective: 'Objective',
    currentFocus: 'Current focus',
    expectedImpact: 'Expected impact',
    securityScope: 'Security scope',
  },
} as const;

export default function InDevelopment() {
  const { lang } = useI18n();
  const copy = sectionCopy[lang];
  const items = inDevelopmentByLocale[lang];

  return (
    <Section
      id="development"
      title={copy.title}
      highlight={copy.highlight}
      description={copy.description}
      className="section-alt"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <article key={item.id} className="card rounded-xl border-primary/20 bg-card">
            <h3 className="text-xl font-bold mb-2 inline-flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              {item.title}
            </h3>

            <div className="space-y-3 text-sm">
              <p><span className="font-semibold">{copy.objective}: </span><span className="text-muted-foreground">{item.objective}</span></p>
              <p><span className="font-semibold">{copy.currentFocus}: </span><span className="text-muted-foreground">{item.currentFocus}</span></p>
              <p><span className="font-semibold">{copy.expectedImpact}: </span><span className="text-muted-foreground">{item.expectedImpact}</span></p>
              <p className="rounded-md border border-primary/30 bg-primary/5 p-3 inline-flex items-start gap-2 w-full">
                <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                <span><span className="font-semibold">{copy.securityScope}: </span><span className="text-muted-foreground">{item.securityScope}</span></span>
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-md font-medium">
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
