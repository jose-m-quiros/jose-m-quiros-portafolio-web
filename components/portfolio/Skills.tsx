"use client";

import { useI18n } from '../ui/locale-provider';
import { ShieldCheck, Server, BookOpenCheck } from 'lucide-react';
import { skillGroupsByLocale } from '@/data/skills';
import Section from './Section';

export default function Skills() {
  const { lang } = useI18n();
  const groups = skillGroupsByLocale[lang];
  const title = lang === 'es' ? 'Stack Tecnico' : 'Technical Stack';
  const subtitle =
    lang === 'es'
      ? 'Capacidades priorizadas para construir backends robustos, seguros y medibles.'
      : 'Capabilities prioritized to build robust, secure and measurable backend systems.';

  const iconByLevel = {
    core: ShieldCheck,
    intermediate: Server,
    knowledge: BookOpenCheck,
  } as const;

  return (
    <Section id="skills" title={title} description={subtitle}>
      <div className="grid lg:grid-cols-3 gap-6">
        {groups.map((group) => {
          const Icon = iconByLevel[group.level];
          return (
            <article key={group.level} className="card rounded-xl border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-circle">
                  <Icon className="icon-svg text-primary" />
                </div>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{group.description}</p>

              <div className="space-y-2">
                {group.items.map((skill) => (
                  <div key={skill.name} className="rounded-lg border border-border px-3 py-2 bg-background/60">
                    <p className="font-medium text-sm">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.area}</p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}