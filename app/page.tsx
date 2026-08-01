import Footer from '@/components/portfolio/Footer';
import Hero from '@/components/portfolio/Hero';
import Navigation from '@/components/portfolio/Navigation';
import ScrollProgress from '@/components/ui/scroll-progress';
import ScrollReveal from '@/components/ui/scroll-reveal';
import dynamic from 'next/dynamic';

function SectionFallback() {
  return (
    <section className="section-container" aria-hidden="true">
      <div className="mx-auto grid w-full max-w-[96rem] gap-4 md:grid-cols-3 2xl:max-w-[110rem]">
        <div className="h-32 animate-pulse rounded-xl border bg-card" />
        <div className="h-32 animate-pulse rounded-xl border bg-card" />
        <div className="h-32 animate-pulse rounded-xl border bg-card" />
      </div>
    </section>
  );
}

const About = dynamic(() => import('@/components/portfolio/About'), { loading: SectionFallback });
const Skills = dynamic(() => import('@/components/portfolio/Skills'), { loading: SectionFallback });
const Experience = dynamic(() => import('@/components/portfolio/Experience'), {
  loading: SectionFallback,
});
const Projects = dynamic(() => import('@/components/portfolio/Projects'), {
  loading: SectionFallback,
});
const InDevelopment = dynamic(() => import('@/components/portfolio/InDevelopment'), {
  loading: SectionFallback,
});
const Education = dynamic(() => import('@/components/portfolio/Education'), {
  loading: SectionFallback,
});
const Contact = dynamic(() => import('@/components/portfolio/Contact'), {
  loading: SectionFallback,
});
const Specialties = dynamic(
  () => import('@/components/portfolio/ProfessionalSections').then((module) => module.Specialties),
  { loading: SectionFallback }
);
const Architecture = dynamic(
  () => import('@/components/portfolio/ProfessionalSections').then((module) => module.Architecture),
  { loading: SectionFallback }
);
const Security = dynamic(
  () => import('@/components/portfolio/ProfessionalSections').then((module) => module.Security),
  { loading: SectionFallback }
);
const Certifications = dynamic(
  () =>
    import('@/components/portfolio/ProfessionalSections').then((module) => module.Certifications),
  { loading: SectionFallback }
);
const Roadmap = dynamic(
  () => import('@/components/portfolio/ProfessionalSections').then((module) => module.Roadmap),
  { loading: SectionFallback }
);

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={80}>
        <Specialties />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <Projects />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Roadmap />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={120}>
        <Certifications />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Architecture />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={120}>
        <Security />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <Experience />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <InDevelopment />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Education />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={150}>
        <Contact />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
