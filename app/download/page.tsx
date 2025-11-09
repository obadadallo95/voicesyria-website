"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

export default function DownloadPage() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('download_cta_title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('download_cta_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center mb-12">
                <div className="relative w-40 h-40 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl blur-xl opacity-30"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary-dark rounded-3xl flex items-center justify-center shadow-2xl">
                    <Image
                      src="/logo.png"
                      alt="صوت سوريا"
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 transition-colors">
                  <span className="inline-flex items-center gap-2">
                    {/* Solid dark background for "صوت" in light mode */}
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-gray-900 dark:bg-transparent rounded-lg px-3 py-2 -z-10 dark:hidden"></span>
                      <span className="relative text-white dark:text-white inline-block px-3 py-2 rounded-lg font-black" style={{ 
                        textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)',
                        WebkitTextStroke: '0.5px rgba(255,255,255,0.3)',
                        WebkitTextFillColor: '#FFFFFF'
                      }}>صوت</span>
                    </span>
                    {/* Light background for "سوريا" in light mode for better contrast */}
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-white/90 dark:bg-transparent rounded-lg px-3 py-2 -z-10 dark:hidden shadow-lg"></span>
                      <span className="relative text-primary dark:text-primary-light inline-block px-3 py-2 rounded-lg font-black" style={{ 
                        textShadow: '0 2px 6px rgba(15, 157, 88, 0.3), 0 1px 3px rgba(15, 157, 88, 0.2)',
                        WebkitTextStroke: '0.5px rgba(15, 157, 88, 0.1)',
                        WebkitTextFillColor: 'var(--color-primary)'
                      }}>سوريا</span>
                    </span> - Syria Voice
                  </span>
                </h2>
                <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400 transition-colors">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-lg font-semibold">الإصدار: 1.0.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                    <span className="text-lg font-semibold">~30.7 MB</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center mb-12">
                <a
                  href="/apk/souria_voice.apk"
                  download="souria_voice.apk"
                  className="btn-primary inline-flex items-center gap-3 px-12 py-6 text-xl relative overflow-hidden group"
                  style={{ cursor: 'pointer', pointerEvents: 'auto', zIndex: 10 }}
                >
                  <svg className="w-7 h-7 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="relative z-10">{t('download_cta_button')}</span>
                </a>
              </div>

              {/* Installation Instructions */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">تعليمات التثبيت</h3>
                </div>
                <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <span className="pt-1">حمّل ملف APK من الزر أعلاه</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <span className="pt-1">افتح ملف APK بعد اكتمال التحميل</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div className="pt-1">
                      <span>إذا ظهرت رسالة "غير مسموح بتثبيت تطبيقات من مصادر غير معروفة":</span>
                      <ul className="list-disc list-inside mr-4 mt-3 space-y-2 text-gray-600 dark:text-gray-400">
                        <li>اذهب إلى الإعدادات → الأمان</li>
                        <li>فعّل "مصادر غير معروفة" أو "تثبيت تطبيقات من مصادر غير معروفة"</li>
                        <li>ارجع إلى ملف APK وثبّته</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <span className="pt-1">اتبع تعليمات التثبيت على الشاشة</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-500 dark:bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</span>
                    <span className="pt-1 font-semibold text-green-600 dark:text-green-400">استمتع بالتطبيق!</span>
                  </li>
                </ol>
              </div>

              {/* Requirements */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">متطلبات النظام</h3>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">Android 7.0 (Nougat) أو أحدث</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">اتصال بالإنترنت (للتصويت والمزامنة)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">مساحة تخزين: 100 MB على الأقل</span>
                  </li>
                </ul>
              </div>

              {/* Security Note */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 dark:bg-yellow-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">ملاحظة أمنية</h3>
                </div>
                <p className="text-yellow-800 dark:text-yellow-200 leading-relaxed text-lg">
                  هذا التطبيق آمن تماماً ومحمي من الفيروسات. يتم تحديث التطبيق بشكل دوري لضمان الأمان والاستقرار.
                  إذا واجهت أي مشكلة في التثبيت، يرجى التواصل معنا على:{" "}
                  <a href="mailto:info@voicesyria.com" className="underline font-semibold hover:text-yellow-900 dark:hover:text-yellow-100 transition-colors">
                    info@voicesyria.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Download */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">طرق تحميل أخرى</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 transition-colors">
              سيتم إضافة التطبيق على متاجر التطبيقات قريباً
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <div className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Google Play</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">قريباً</div>
              </div>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🍎</div>
                <div className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Apple App Store</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">قريباً</div>
              </div>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🔗</div>
                <div className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">رابط مباشر</div>
                <div className="text-sm text-green-600 dark:text-green-400 font-semibold">متاح الآن</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
