'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import LanguageToggle from '../ui/language-toggle';
import { useI18n } from '../ui/locale-provider';
import MoreMenu from '../ui/more-menu';
import ThemeToggle from '../ui/theme-toggle';

const sectionIds = [
  'home',
  'about',
  'specialties',
  'skills',
  'projects',
  'roadmap',
  'certifications',
  'architecture',
  'security',
  'experience',
  'development',
  'education',
  'contact',
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const allLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#roadmap', label: t('nav.roadmap') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const secondaryLinks = [
    { href: '#specialties', label: t('nav.specialties') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#certifications', label: t('nav.certifications') },
    { href: '#architecture', label: t('nav.architecture') },
    { href: '#security', label: t('nav.security') },
    { href: '#development', label: t('nav.development') },
    { href: '#education', label: t('nav.education') },
  ];

  const primaryLinks = allLinks;
  const extraLinks = secondaryLinks;

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const sections = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((entry): entry is { id: string; el: HTMLElement } => Boolean(entry.el));

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 20;
        setScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));

        if (window.innerWidth < 768) {
          ticking = false;
          return;
        }

        let current = 'home';
        for (const section of sections) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 120) current = section.id;
        }

        setActiveSection((prev) => (prev !== current ? current : prev));
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeMobileMenu = () => {
    const activeElement = document.activeElement;

    if (activeElement instanceof HTMLElement && mobileMenuRef.current?.contains(activeElement)) {
      menuButtonRef.current?.focus();
    }

    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:max-w-[110rem] 2xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="#home"
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              JM
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-3">
                  {primaryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium smooth-transition px-3 py-1 rounded ${
                        activeSection === link.href.replace('#', '')
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <MoreMenu items={extraLinks} />
                </div>
              </div>
              <div className="flex items-center space-x-2 border border-input rounded-md p-1">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => {
                if (isOpen) {
                  closeMobileMenu();
                  return;
                }

                setIsOpen(true);
              }}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-150"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation — always mounted, toggled via CSS for instant open/close */}
      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`md:hidden fixed inset-0 z-[9999] transition-[opacity,visibility] duration-200 ease-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '4rem' }}
        aria-hidden={!isOpen}
      >
        {/* Solid background layer */}
        <div className="absolute inset-0" style={{ backgroundColor: 'hsl(var(--background))' }} />

        {/* Content layer */}
        <div
          className={`relative z-10 flex h-full w-full flex-col items-center justify-center space-y-7 px-6 transition-transform duration-200 ease-out ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-base font-medium transition-colors duration-150 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-base font-medium transition-colors duration-150 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
