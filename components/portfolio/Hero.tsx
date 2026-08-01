'use client';

import { PROFILE_LINKS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { useI18n } from '../ui/locale-provider';

export default function Hero() {
  const { t, lang } = useI18n();
  const impactPoints: string[] = t('hero.impact_points') as unknown as string[];
  const quickFacts =
    lang === 'es'
      ? ['Python + FastAPI', 'APIs seguras', 'Automatización', 'DevSecOps']
      : ['Python + FastAPI', 'Secure APIs', 'Cloud Security', 'DevSecOps'];
  const valueStatement =
    lang === 'es'
      ? 'Construyo backends escalables, APIs seguras y automatizaciones que garantizan la confiabilidad, trazabilidad y defensa de tus operaciones.'
      : 'I build scalable backends, secure APIs and automation that protect reliability, traceability and operational defense.';
  const businessChips =
    lang === 'es'
      ? ['Datos protegidos', 'Operaciones trazables', 'Menos trabajo manual']
      : ['Protected data', 'Traceable operations', 'Less manual work'];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_38%),linear-gradient(to_bottom,hsl(var(--background)/0.72),hsl(var(--background))_72%)]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" />
              {t('hero.badge')}
            </div>

            <h1 className="mb-6 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Jose Manuel Quiros
              <span className="mt-3 block gradient-text">Backend & Cybersecurity Engineer</span>
            </h1>

            <p className="mb-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
              {valueStatement}
            </p>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {t('hero.description')}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {businessChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mb-10 flex flex-wrap gap-3">
              <Link href="#projects" className="btn-primary group">
                {lang === 'es' ? 'Ver proyectos' : 'View projects'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#contact" className="btn-secondary">
                <Mail className="mr-2 h-4 w-4" />
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </Link>
              <a
                href={PROFILE_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>

            </div>

            <ul className="grid max-w-4xl gap-3 text-left md:grid-cols-3">
              {impactPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-lg border border-border/70 bg-card/70 px-4 py-3 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-2xl backdrop-blur">
            <div className="mb-4 flex items-center justify-between border-b border-border/70 pb-3">
              <span className="text-sm font-semibold text-muted-foreground">system.profile</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-semibold text-emerald-300">
                online
              </span>
            </div>
            <div className="space-y-3 font-mono text-sm text-muted-foreground">
              <p>
                <span className="text-primary">role</span>: backend_security_engineer
              </p>
              <p>
                <span className="text-primary">focus</span>: business_resilient_apis
              </p>
              <p>
                <span className="text-primary">stack</span>: python_fastapi_cloud
              </p>
              <p>
                <span className="text-primary">principles</span>: clean_architecture_owasp_devsecops
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-lg border border-border/70 bg-background/70 px-3 py-3 text-sm font-semibold text-foreground shadow-sm"
                >
                  {fact}
                </div>
              ))}
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
