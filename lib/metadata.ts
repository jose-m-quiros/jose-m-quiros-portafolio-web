import type { Metadata } from 'next';
import { PROFILE_LINKS } from './constants';

export const siteConfig = {
  name: 'Jose Manuel Quiros',
  title: 'Jose Manuel Quiros | Backend & Cybersecurity Engineer',
  description:
    'Backend and cybersecurity portfolio focused on Python, FastAPI, secure APIs, cloud security, automation, DevSecOps and software architecture.',
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://josemquiros.dev',
  locale: 'es_CR',
  keywords: [
    'Backend Engineer',
    'Cybersecurity Engineer',
    'Software Engineer',
    'Security Analyst',
    'DevSecOps Engineer',
    'Cloud Security Engineer',
    'Python',
    'FastAPI',
    'API Security',
    'OWASP',
    'Clean Architecture',
    'Costa Rica',
  ],
} as const;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/projects/logojm.png',
  },
  openGraph: {
    type: 'profile',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/projects/logojm.png',
        width: 512,
        height: 512,
        alt: `${siteConfig.name} professional profile`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/projects/logojm.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export function getStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: PROFILE_LINKS.email,
        jobTitle: [
          'Backend Engineer',
          'Cybersecurity Engineer',
          'Software Engineer',
          'DevSecOps Engineer',
          'Cloud Security Engineer',
        ],
        sameAs: [PROFILE_LINKS.github, PROFILE_LINKS.linkedin],
        knowsAbout: [
          'Backend Engineering',
          'Cybersecurity',
          'Python',
          'FastAPI',
          'Cloud Security',
          'API Security',
          'OWASP',
          'DevSecOps',
          'Software Architecture',
          'Automation',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: ['es-CR', 'en'],
        publisher: { '@id': `${siteConfig.url}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.url}/#profile`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        mainEntity: { '@id': `${siteConfig.url}/#person` },
      },
    ],
  };
}
