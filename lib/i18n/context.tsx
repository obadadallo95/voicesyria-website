"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

export type Language = 'ar' | 'en' | 'ku';
export type TranslationKey = keyof typeof translations.ar;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load language from localStorage
    const savedLang = localStorage.getItem('website-language') as Language;
    if (savedLang && (savedLang === 'ar' || savedLang === 'en' || savedLang === 'ku')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('website-language', lang);
    // Update HTML dir and lang attributes
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.ar[key] || key;
  };

  useEffect(() => {
    // Update HTML attributes when language changes
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

