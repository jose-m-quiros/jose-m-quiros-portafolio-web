import { getStructuredData, rootMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { headers } from 'next/headers';
import I18nProvider from '../components/ui/locale-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = rootMetadata;

function resolveInitialLanguage(acceptLanguage: string | null): 'en' | 'es' {
  if (!acceptLanguage) return 'en';

  const preferredLanguage = acceptLanguage
    .split(',')
    .map((entry, index) => {
      const [language = '', qualityValue] = entry.trim().toLowerCase().split(';q=');
      const quality = qualityValue ? Number.parseFloat(qualityValue) : 1;
      return { language, quality: Number.isFinite(quality) ? quality : 0, index };
    })
    .filter(({ language }) => language.startsWith('es') || language.startsWith('en'))
    .sort(
      (current, next) => next.quality - current.quality || current.index - next.index
    )[0]?.language;

  return preferredLanguage?.startsWith('es') ? 'es' : 'en';
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const requestHeaders = await headers();
  const initialLang = resolveInitialLanguage(requestHeaders.get('accept-language'));
  const structuredData = getStructuredData();

  return (
    <html lang={initialLang} className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {/* Theme is applied client-side by ThemeToggle after mount to avoid hydration mismatch */}
        <I18nProvider initialLang={initialLang}>{children}</I18nProvider>
      </body>
    </html>
  );
}
