'use client';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';
const storageKey = 'theme-preference';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const getColorPreference = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      const storedPreference = localStorage.getItem(storageKey);
      if (storedPreference) {
        return storedPreference as 'light' | 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return 'light';
  };

  const reflectPreference = (theme: 'light' | 'dark') => {
    document.documentElement.classList.remove('bg-light', 'bg-dark');
    document.documentElement.classList.add(`bg-${theme}`);
    setCurrentTheme(theme);
    setTheme(theme);
  };

  useEffect(() => {
    const initTheme = getColorPreference();
    reflectPreference(initTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  return (
    <button
      id="theme-toggle"
      aria-label={`${currentTheme} mode`}
      onClick={toggleTheme}
      className="flex items-center align-middle justify-center transition-opacity duration-300 hover:opacity-90"
    >
      {currentTheme === 'dark' ? (
        <p>
          <FiSun className="text-[#D4D4D4] text-xs" />
        </p>
      ) : (
        <p>
          <FiMoon className="text-[#1c1c1c] text-xs" />
        </p>
      )}
    </button>
  );
};
