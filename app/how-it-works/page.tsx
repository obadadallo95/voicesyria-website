"use client";

import { useI18n } from "@/lib/i18n/context";
import ParallaxSection from "@/components/ParallaxSection";
import Link from "next/link";

export default function HowItWorksPage() {
  const { t } = useI18n();

  const steps = [
    {
      step: '1',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: 'حمّل التطبيق | Download App',
      description: 'قم بتحميل ملف APK من صفحة التحميل وثبّته على جهازك | Download the APK file from the download page and install it on your device',
      details: [
        'انتقل إلى صفحة التحميل | Go to the download page',
        'حمّل ملف APK | Download the APK file',
        'فعّل التثبيت من مصادر غير معروفة | Enable installation from unknown sources',
        'ثبّت التطبيق | Install the app',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      step: '2',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'اختر محافظتك | Choose Governorate',
      description: 'اختر المحافظة التي تريد التصويت لها | Select the governorate you want to vote for',
      details: [
        'افتح التطبيق | Open the app',
        'اختر محافظتك من القائمة | Select your governorate from the list',
        'تأكد من اختيارك | Confirm your selection',
        'ملاحظة: لا يمكن تغيير المحافظة بعد الاختيار | Note: Governorate cannot be changed after selection',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      step: '3',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'صوّت يومياً | Vote Daily',
      description: 'قيّم يومك من 0 إلى 100 وأضف تعليقاً اختيارياً | Rate your day from 0 to 100 and add an optional comment',
      details: [
        'افتح شاشة التصويت | Open the voting screen',
        'حرّك الشريط لتقييم يومك | Move the slider to rate your day',
        'اختر العبارات المناسبة (اختياري) | Select appropriate phrases (optional)',
        'أضف تعليقاً (اختياري) | Add a comment (optional)',
        'أرسل تصويتك | Submit your vote',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      step: '4',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'تابع الإحصائيات | Track Statistics',
      description: 'شاهد إحصائيات محافظتك ومقارنات مع المحافظات الأخرى | View your governorate statistics and comparisons with other governorates',
      details: [
        'افتح صفحة الإحصائيات | Open the statistics page',
        'شاهد متوسط تقييم محافظتك | View your governorate average rating',
        'قارن مع المحافظات الأخرى | Compare with other governorates',
        'تابع التطورات اليومية | Track daily developments',
      ],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block mb-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-6xl">⚙️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="block">كيف يعمل التطبيق</span>
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">How It Works</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              خطوات بسيطة لاستخدام تطبيق صوت سوريا | Simple steps to use Syria Voice app
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {steps.map((item, index) => (
                <ParallaxSection key={index} speed={0.15}>
                  <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Icon Section */}
                    <div className="flex-shrink-0 w-full lg:w-1/3">
                      <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="relative mb-6">
                          <div className={`w-32 h-32 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}>
                            {item.icon}
                          </div>
                          <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary dark:bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            {item.step}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 w-full lg:w-2/3">
                      <div className="card-modern dark:bg-gray-800 dark:border-gray-700 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Details List */}
                        <div className="space-y-3">
                          {item.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                              <div className="w-6 h-6 bg-primary/20 dark:bg-primary-light/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxSection>
              ))}
            </div>

            {/* CTA Section */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center mt-16 animate-slide-up">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  جاهز للبدء؟ | Ready to Start?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  حمّل التطبيق الآن وابدأ التصويت | Download the app now and start voting
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/download" 
                    className="btn-primary inline-block"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      حمّل التطبيق | Download App
                    </span>
                  </Link>
                  <Link 
                    href="/features" 
                    className="btn-secondary inline-block"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      اكتشف الميزات | Discover Features
                    </span>
                  </Link>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>
    </div>
  );
}

