'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function resolveThemePreference(): 'light' | 'dark' {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    window.requestAnimationFrame(() => setTheme(resolveThemePreference()));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle theme"
      className="p-2 rounded hover:bg-secondary smooth-transition"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
