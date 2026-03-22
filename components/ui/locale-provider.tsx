"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from '../../locales/en.json';
import es from '../../locales/es.json';

type Lang = 'en' | 'es';

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => any;
};

const translations: Record<Lang, any> = { en, es };

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

function resolveKey(obj: any, path: string) {
  return path.split('.').reduce((acc: any, part: string) => {
    if (acc && typeof acc === 'object' && part in acc) return acc[part];
    return undefined;
  }, obj);
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  // Keep the initial language deterministic to avoid SSR/client hydration mismatches.
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'en' || stored === 'es') {
        setLang(stored);
        return;
      }

      if (navigator.language?.startsWith('es')) {
        setLang('es');
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  const t = useCallback((key: string) => {
    const val = resolveKey(translations[lang], key);
    if (typeof val !== 'undefined') return val;
    return key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
