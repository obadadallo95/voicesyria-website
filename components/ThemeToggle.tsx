"use client";

import { useTheme } from '@/lib/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 active:scale-95 border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light shadow-sm hover:shadow-md"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ease-in-out ${
            theme === 'dark' 
              ? 'opacity-0 rotate-90 scale-0 text-gray-400' 
              : 'opacity-100 rotate-0 scale-100 text-orange-500 drop-shadow-lg'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        {/* Moon Icon */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ease-in-out ${
            theme === 'light' 
              ? 'opacity-0 -rotate-90 scale-0 text-gray-400' 
              : 'opacity-100 rotate-0 scale-100 text-blue-300'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
}

