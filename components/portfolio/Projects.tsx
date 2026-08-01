'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';
import { useI18n } from '../ui/locale-provider';
import { projectsByLocale } from '@/data/projects';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Projects() {
  const ALL_CATEGORY = '__all__';
  const { lang } = useI18n();
  const projects = projectsByLocale[lang];

  const copy =
    lang === 'es'
      ? {
          title: 'Casos de Estudio Técnicos',
          subtitle:
            'Casos reales donde se evidencia análisis técnico, implementación backend y criterio de seguridad.',
          filter: 'Filtrar por categoría:',
          all: 'Todos',
          noResults: 'No hay proyectos para esta categoría.',
          summary: 'Resumen operativo',
          problem: 'El Reto Técnico',
          objective: 'Objetivo',
          architecture: 'La Decisión',
          solution: 'Síntesis',
          role: 'Rol',
          features: 'La Ejecución (Seguridad y Clean Architecture)',
          result: 'El Resultado Operativo',
          impact: 'Impacto',
          challenges: 'Desafíos técnicos',
          lessons: 'Lecciones aprendidas',
          roadmap: 'Roadmap',
          security: 'Seguridad',
          tech: 'Stack',
          documentation: 'Leer arquitectura detallada',
          repository: 'Ver repositorio',
          demo: 'Ver web',
          details: 'Leer caso técnico',
          published: 'Publicado',
          inProgress: 'En desarrollo',
        }
      : {
          title: 'Technical Case Studies',
          subtitle:
            'Real cases showcasing technical analysis, backend implementation and security focus.',
          filter: 'Filter by category:',
          all: 'All',
          noResults: 'No projects available for this category.',
          summary: 'Operational summary',
          problem: 'The Technical Challenge',
          objective: 'Objective',
          architecture: 'The Decision',
          solution: 'Synthesis',
          role: 'Role',
          features: 'Execution (Security and Clean Architecture)',
          result: 'Operational Result',
          impact: 'Impact',
          challenges: 'Technical challenges',
          lessons: 'Lessons learned',
          roadmap: 'Roadmap',
          security: 'Security',
          tech: 'Tech stack',
          documentation: 'Read detailed architecture',
          repository: 'View repository',
          demo: 'View website',
          details: 'Read technical case',
          published: 'Published',
          inProgress: 'In development',
        };

  const categories = [
    { value: ALL_CATEGORY, label: copy.all },
    ...Array.from(new Set(projects.map((p) => p.category))).map((category) => ({
      value: category,
      label: category,
    })),
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);

  const filteredProjects =
    selectedCategory === ALL_CATEGORY
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Section id="projects" title={copy.title} description={copy.subtitle}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12 p-3 rounded-xl bg-muted/40 border border-border/70">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">{copy.filter}</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              aria-pressed={selectedCategory === category.value}
              className={`px-4 py-2 rounded-full font-medium smooth-transition ${
                selectedCategory === category.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={{
                summary: copy.summary,
                problem: copy.problem,
                objective: copy.objective,
                architecture: copy.architecture,
                solution: copy.solution,
                role: copy.role,
                features: copy.features,
                result: copy.result,
                impact: copy.impact,
                challenges: copy.challenges,
                lessons: copy.lessons,
                roadmap: copy.roadmap,
                security: copy.security,
                tech: copy.tech,
                documentation: copy.documentation,
                repository: copy.repository,
                demo: copy.demo,
                details: copy.details,
                published: copy.published,
                inProgress: copy.inProgress,
              }}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{copy.noResults}</p>
          </div>
        )}
      </div>
    </Section>
  );
}
