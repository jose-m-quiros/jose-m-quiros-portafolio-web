'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from '../../locales/en.json';
import es from '../../locales/es.json';

type Lang = 'en' | 'es';
type TranslationLeaf = string | number | boolean | null | undefined;
type TranslationValue = TranslationLeaf | TranslationValue[] | { [key: string]: TranslationValue };
type TranslationMap = Record<string, TranslationValue>;

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T = string>(key: string) => T;
};

const translations: Record<Lang, TranslationMap> = { en, es };

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

function resolveKey(obj: TranslationValue, path: string): TranslationValue | undefined {
  return path.split('.').reduce<TranslationValue | undefined>((acc, part) => {
    if (acc && typeof acc === 'object' && !Array.isArray(acc) && part in acc) return acc[part];
    return undefined;
  }, obj);
}

function resolveBrowserLanguage(): Lang {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const preferredLanguage = languages.find((language) => {
    const normalizedLanguage = language?.toLowerCase();
    return normalizedLanguage?.startsWith('es') || normalizedLanguage?.startsWith('en');
  });

  return preferredLanguage?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export default function I18nProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const browserLang = resolveBrowserLanguage();
    if (browserLang !== initialLang) window.requestAnimationFrame(() => setLang(browserLang));
  }, [initialLang]);

  const t = useCallback(
    <T = string,>(key: string): T => {
      const val = resolveKey(translations[lang], key);
      if (typeof val !== 'undefined') return val as T;
      return key as T;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
