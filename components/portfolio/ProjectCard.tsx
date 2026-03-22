import { ExternalLink, Github, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { ProjectCase } from '@/lib/types';

type ProjectCardProps = {
  project: ProjectCase;
  labels: {
    summary: string;
    problem: string;
    solution: string;
    role: string;
    result: string;
    security: string;
    tech: string;
    details: string;
    published: string;
    inProgress: string;
  };
};

export default function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="group bg-card rounded-xl border shadow-sm hover:shadow-xl smooth-transition overflow-hidden flex flex-col h-full">
      <div className="relative h-52 w-full overflow-hidden rounded-t-xl bg-secondary/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 smooth-transition"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs px-2 py-1 rounded font-medium bg-primary/10 text-primary">
            {project.status === 'published' ? labels.published : labels.inProgress}
          </span>
          <span className="text-xs px-2 py-1 rounded font-medium bg-secondary text-secondary-foreground">
            {project.category}
          </span>
          {project.highlights.map((item) => (
            <span key={item} className="text-xs px-2 py-1 bg-secondary rounded-md font-medium">
              {item}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold group-hover:text-primary smooth-transition">{project.title}</h3>

        <div className="rounded-lg border border-border/70 bg-background/70 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">{labels.summary}</p>
          <p className="text-sm text-muted-foreground">{project.solution}</p>
        </div>

        <details className="rounded-lg border border-border/70 bg-background/40 p-3 open:bg-background/70">
          <summary className="cursor-pointer list-none font-semibold text-sm inline-flex items-center gap-2">
            {labels.details}
          </summary>
          <dl className="space-y-2 text-sm mt-3">
            <div>
              <dt className="font-semibold">{labels.problem}</dt>
              <dd className="text-muted-foreground">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold">{labels.role}</dt>
              <dd className="text-muted-foreground">{project.role}</dd>
            </div>
            <div>
              <dt className="font-semibold">{labels.result}</dt>
              <dd className="text-muted-foreground">{project.result}</dd>
            </div>
            {project.security ? (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
                <dt className="font-semibold inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  {labels.security}
                </dt>
                <dd className="text-muted-foreground mt-1">{project.security}</dd>
              </div>
            ) : null}
          </dl>
        </details>

        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2">{labels.tech}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-md font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-1 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground smooth-transition"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground smooth-transition"
              aria-label="Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
