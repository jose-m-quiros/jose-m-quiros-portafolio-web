'use client';

import { Code2, Lightbulb, Rocket, ShieldCheck, Users, Zap } from 'lucide-react';
import { useI18n } from '../ui/locale-provider';

export default function About() {
  const { t } = useI18n();
  const intro: string[] = t('about.intro') as unknown as string[];
  const facts: string[] = t('about.quick_facts') as unknown as string[];
  const highlights: { title: string; description: string }[] = t('about.highlights') as unknown as {
    title: string;
    description: string;
  }[];
  const valuesTitle: string = t('about.values_title');
  const values: { title: string; description: string }[] = t('about.values') as unknown as {
    title: string;
    description: string;
  }[];

  const valueIcons = [ShieldCheck, Zap, Users];
  const highlightIcons = [Code2, Lightbulb, Rocket];

  const combined = [...values.slice(0, 3), ...highlights.slice(0, 3)];
  const icons = [...valueIcons, ...highlightIcons];

  return (
    <section id="about" className="section-container">
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.title_main')}{' '}
              <span className="gradient-text">{t('about.title_highlight')}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto prose-lite">
              {t('about.subtitle')}
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="surface-panel mx-auto max-w-5xl px-5 py-7 text-center sm:px-8 sm:py-9 lg:px-12 lg:py-10">
            <div className="mx-auto max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
              {facts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary md:text-base"
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-center text-2xl font-semibold">{valuesTitle}</h3>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {combined.map((item, idx) => {
                const IconComp = icons[idx % icons.length];
                return (
                  <div key={idx} className="card flex items-start gap-4 min-h-[110px] w-full">
                    <div className="icon-circle">
                      <IconComp className="icon-svg text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
