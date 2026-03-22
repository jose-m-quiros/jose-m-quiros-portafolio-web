'use client';

import { useI18n } from '../ui/locale-provider';
import { experienceByLocale } from '@/data/experience';
import ExperienceItem from './ExperienceItem';
import Section from './Section';

export default function Experience() {
  const { lang } = useI18n();
  const experiences = experienceByLocale[lang];

  const copy =
    lang === 'es'
      ? {
          title: 'Experiencia Profesional',
          subtitle:
            'Experiencia orientada a ejecucion tecnica en backend, operacion y seguridad aplicada.',
          action: 'Accion',
          technology: 'Tecnologia',
          result: 'Resultado',
          visitSite: 'Visitar sitio',
        }
      : {
          title: 'Professional Experience',
          subtitle:
            'Experience focused on backend execution, operations and applied security.',
          action: 'Action',
          technology: 'Technology',
          result: 'Result',
          visitSite: 'Visit site',
        };

  return (
    <Section id="experience" title={copy.title} description={copy.subtitle}>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((entry, index) => (
              <ExperienceItem
                key={`${entry.company}-${entry.position}`}
                entry={entry}
                isRight={index % 2 !== 0}
                labels={{
                  action: copy.action,
                  technology: copy.technology,
                  result: copy.result,
                  visitSite: copy.visitSite,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}