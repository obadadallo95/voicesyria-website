"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="صوت سوريا"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold relative">
                  {/* Dark backdrop for "صوت" in light mode */}
                  <span className="absolute -inset-1 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 dark:from-transparent dark:via-transparent dark:to-transparent rounded-lg blur-md -z-10 dark:hidden"></span>
                  <span className="relative inline-block px-2 py-1 rounded-md">
                    <span className="text-white dark:text-white inline-block font-black" style={{ 
                      textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)'
                    }}>صوت</span>{' '}
                    <span className="text-primary dark:text-primary-light font-black">سوريا</span>
                  </span>
                </h3>
                <p className="text-xs text-gray-400">Syria Voice</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('footer_about')}
            </p>
            
            {/* Social Media Links */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">
                تابعنا على
              </h5>
              <SocialLinks />
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@voicesyria.com"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="mailto:info@voicesyria.com"
                className="text-gray-300 hover:text-primary transition-colors font-medium"
              >
                info@voicesyria.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('footer_quick_links')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors inline-block hover:translate-x-2 duration-300">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-primary transition-colors inline-block hover:translate-x-2 duration-300">
                  {t('nav_features')}
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-300 hover:text-primary transition-colors inline-block hover:translate-x-2 duration-300">
                  {t('nav_download')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors inline-block hover:translate-x-2 duration-300">
                  {t('nav_about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('footer_legal')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors inline-block hover:translate-x-2 duration-300">
                  {t('footer_privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-primary transition-colors inline-block hover:translate-x-2 duration-300">
                  {t('footer_terms')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors inline-block hover:translate-x-2 duration-300">
                  {t('nav_contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('footer_contact')}</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@voicesyria.com" className="hover:text-primary transition-colors">
                  info@voicesyria.com
                </a>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://voicesyria.com" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  voicesyria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 mt-8 text-center">
          <div className="mb-6">
            <SocialLinks className="justify-center" />
          </div>
          <p className="text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()}{' '}
            <span className="relative inline-block">
              {/* Dark backdrop for "صوت" in light mode */}
              <span className="absolute -inset-1 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 dark:from-transparent dark:via-transparent dark:to-transparent rounded blur-md -z-10 dark:hidden"></span>
              <span className="relative inline-block px-1 py-0.5 rounded">
                <span className="text-white dark:text-white inline-block font-black" style={{ 
                  textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)'
                }}>صوت</span>{' '}
                <span className="text-primary dark:text-primary-light font-black">سوريا</span>
              </span>
            </span> - Syria Voice. {t('footer_copyright')}
          </p>
          <p className="text-gray-500 dark:text-gray-600 text-sm mt-2">
            {t('footer_made_with')}
          </p>
        </div>
      </div>
    </footer>
  );
}
