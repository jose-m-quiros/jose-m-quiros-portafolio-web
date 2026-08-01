'use client';

import { useI18n } from '../ui/locale-provider';
import { Cloud, Code2, Database, ShieldCheck, Terminal, Wrench } from 'lucide-react';
import type { IconType } from 'react-icons';
import { FaDocker, FaGithub, FaMicrosoft, FaPython, FaReact } from 'react-icons/fa';
import {
  SiDotnet,
  SiFastapi,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiOpenapiinitiative,
  SiPostman,
  SiPowers,
  SiPrettier,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { skillGroupsByLocale } from '@/data/skills';
import Section from './Section';

export default function Skills() {
  const { lang } = useI18n();
  const groups = skillGroupsByLocale[lang];
  const title = lang === 'es' ? 'Stack Técnico' : 'Technical Stack';
  const subtitle =
    lang === 'es'
      ? 'Tecnologías organizadas por valor operativo: backend, seguridad, datos, cloud y entrega.'
      : 'Capabilities prioritized to build robust, secure and measurable backend systems.';

  const iconBySkill: Record<string, IconType> = {
    Python: FaPython,
    FastAPI: SiFastapi,
    'C# / .NET': SiDotnet,
    OpenAPI: SiOpenapiinitiative,
    'OWASP Top 10': ShieldCheck,
    'JWT / RBAC': SiJsonwebtokens,
    'Security Headers': ShieldCheck,
    'Input Validation': ShieldCheck,
    Docker: FaDocker,
    'CI/CD': Wrench,
    'AWS / Azure / GCP': Cloud,
    Vercel: SiVercel,
    'SQL Server': FaMicrosoft,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    'Next.js': Code2,
    React: FaReact,
    TypeScript: SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    'Git / GitHub': FaGithub,
    Postman: SiPostman,
    PowerShell: SiPowers,
    'ESLint / Prettier': SiPrettier,
  };

  const iconByLevel = {
    backend: Terminal,
    frontend: Code2,
    cloud: Cloud,
    database: Database,
    security: ShieldCheck,
    tools: Wrench,
  } as const;

  return (
    <Section id="skills" title={title} description={subtitle}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

              <div className="grid grid-cols-2 gap-3">
                {group.items.map((skill) => {
                  const SkillIcon = iconBySkill[skill.name] ?? Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group/minicard rounded-lg border border-border bg-background/60 p-3 smooth-transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <SkillIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                          {skill.area}
                        </span>
                      </div>
                      <p className="text-sm font-semibold leading-tight">{skill.name}</p>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
