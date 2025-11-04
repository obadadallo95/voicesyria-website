"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-gray-800/30" 
        : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 space-x-reverse group">
            <div className="relative w-16 h-16 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-primary/50">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
                  alt="صوت سوريا - Syria Voice"
                  fill
                  className="object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary dark:text-primary-light transition-colors group-hover:text-primary-dark dark:group-hover:text-primary">
                صوت سوريا
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Syria Voice</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {t('nav_home')}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            <Link 
              href="/features" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {t('nav_features')}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            <Link 
              href="/download" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {t('nav_download')}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {t('nav_about')}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {t('nav_contact')}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            <Link 
              href="/support" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {t('nav_support')}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            <Link 
              href="/donations" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {t('nav_donations')}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            <Link 
              href="/stats" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {t('nav_stats')}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-300 font-semibold text-base relative group px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              FAQ
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </Link>
            
            {/* Separator */}
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700 mx-1"></div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Download Button */}
            <Link
              href="/download"
              className="btn-primary text-sm px-6 py-2.5 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('nav_download_now')}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[600px] pb-6" : "max-h-0"
        }`}>
          <div className="space-y-3 pt-6">
            <Link
              href="/"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_home')}
            </Link>
            <Link
              href="/features"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_features')}
            </Link>
            <Link
              href="/download"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_download')}
            </Link>
            <Link
              href="/about"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_about')}
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_contact')}
            </Link>
            <Link
              href="/support"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_support')}
            </Link>
            <Link
              href="/donations"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_donations')}
            </Link>
            <Link
              href="/stats"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_stats')}
            </Link>
            <Link
              href="/faq"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/how-it-works"
              className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              كيف يعمل | How It Works
            </Link>
            
            {/* Mobile Actions */}
            <div className="flex items-center gap-4 px-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            
            <Link
              href="/download"
              className="block btn-primary text-center mt-4 mx-6"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_download_now')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
