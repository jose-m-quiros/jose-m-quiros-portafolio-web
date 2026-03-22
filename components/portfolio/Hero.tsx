"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useI18n } from "../ui/locale-provider";
import { PROFILE_LINKS } from '@/lib/constants';

export default function Hero() {
  const { t, lang } = useI18n();
  const roles: string[] = t('hero.roles') as unknown as string[];
  const impactPoints: string[] = t('hero.impact_points') as unknown as string[];
  const cvDownloadPath = lang === 'en' ? '/CVEnglish.pdf' : '/CV.pdf';
  const quickFacts =
    lang === 'es'
      ? ['C# / .NET', 'SQL Server + APIs', 'Seguridad aplicada']
      : ['C# / .NET', 'SQL Server + APIs', 'Applied security'];

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/30" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse animation-delay-400" />

      <div className="section-container relative z-10 text-center">
        <div className="animate-fadeIn">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium tracking-wide">
              {t('hero.badge')}
            </span>
          </div>

          <h1 className="font-bold mb-2">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {t('hero.greeting')}
            </span>
            <br />
            <span className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Jose Manuel Quiros
            </span>
          </h1>

          <div className="mb-8 min-h-[60px] sm:min-h-[80px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
              {t('hero.iam')}{" "}
              <span className="text-primary">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {t('hero.description')}
          </p>

          <ul className="max-w-3xl mx-auto mb-10 grid md:grid-cols-3 gap-3 text-left">
            {impactPoints.map((point) => (
              <li key={point} className="rounded-lg border border-primary/20 bg-card/80 backdrop-blur px-3 py-2 text-sm font-medium shadow-sm">
                {point}
              </li>
            ))}
          </ul>

          <div className="max-w-3xl mx-auto mb-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quickFacts.map((fact) => (
              <div key={fact} className="rounded-lg border border-border/70 bg-background/80 px-3 py-2 text-sm font-semibold text-foreground shadow-sm">
                {fact}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#contact"
              className="btn-primary w-full sm:w-auto group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              {t('hero.cta_contact')}
            </Link>
            <a
              href={cvDownloadPath}
              download
              className="btn-secondary w-full sm:w-auto group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              {t('hero.cta_cv')}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={PROFILE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground smooth-transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PROFILE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground smooth-transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${PROFILE_LINKS.email}`}
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground smooth-transition"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Link
          href="#projects"
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
