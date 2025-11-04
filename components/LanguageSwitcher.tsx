"use client";

import { useState } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { Language } from '@/lib/i18n/context';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'ar', name: 'العربية', flag: '🇸🇾' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ku', name: 'Kurdî', flag: '🇮🇶' },
  ];

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
        aria-label="Language selector"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
        <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
          {languages.find(l => l.code === language)?.name}
        </span>
        <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 min-w-[120px] z-50 transition-colors duration-300">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-right px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 ${
                language === lang.code 
                  ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-semibold' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <svg className="w-4 h-4 mr-auto text-primary dark:text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

