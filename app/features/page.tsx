"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import ParallaxSection from "@/components/ParallaxSection";

export default function FeaturesPage() {
  const { t } = useI18n();
  
  const features = [
    {
      icon: "🗳️",
      title: t('feature_voting_title'),
      description: t('feature_voting_desc'),
      details: [
        "تصويت مجهول 100%",
        "حماية من التلاعب",
        "ربط بالجهاز لمنع التصويت المتعدد",
        "تحليل المشاعر للآراء"
      ]
    },
    {
      icon: "🏛️",
      title: t('feature_services_title'),
      description: t('feature_services_desc'),
      details: [
        "دليل شامل لجميع الخدمات",
        "معلومات الاتصال والعناوين",
        "أوقات العمل والجداول",
        "نظام اقتراحات التعديل"
      ]
    },
    {
      icon: "📊",
      title: t('feature_stats_title'),
      description: t('feature_stats_desc'),
      details: [
        "إحصائيات وطنية ومحلية",
        "مقارنات بين المحافظات",
        "تقارير PDF و Excel",
        "رسوم بيانية تفاعلية"
      ]
    },
    {
      icon: "🤖",
      title: t('feature_ai_title'),
      description: t('feature_ai_desc'),
      details: [
        "إجابات فورية",
        "دعم ثلاث لغات",
        "معلومات محدثة",
        "تحليل ذكي للبيانات"
      ]
    },
    {
      icon: "🏆",
      title: t('feature_achievements_title'),
      description: t('feature_achievements_desc'),
      details: [
        "15 إنجاز مختلف",
        "نظام النقاط",
        "مشاركة الإنجازات",
        "تتبع التقدم"
      ]
    },
    {
      icon: "🌍",
      title: t('feature_languages_title'),
      description: t('feature_languages_desc'),
      details: [
        "العربية (اللغة الأساسية)",
        "الإنجليزية",
        "الكردية (أحرف لاتينية)",
        "واجهة سهلة الاستخدام"
      ]
    },
    {
      icon: "🔒",
      title: "الأمان والخصوصية",
      description: "حماية كاملة لبياناتك وخصوصيتك مع تشفير متقدم.",
      details: [
        "لا حاجة لتسجيل الدخول",
        "بيانات مجهولة 100%",
        "تشفير متقدم",
        "حماية من التلاعب"
      ]
    },
    {
      icon: "📡",
      title: "العمل بدون إنترنت",
      description: "احفظ تصويتاتك محلياً ومزامنها تلقائياً عند الاتصال بالإنترنت.",
      details: [
        "عمل بدون إنترنت",
        "حفظ محلي آمن",
        "مزامنة تلقائية",
        "مؤشر حالة الاتصال"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-block mb-4">
              <span className="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                {t('features_badge')}
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {t('features_title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('features_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ParallaxSection key={index} speed={0.15}>
                <div
                  className="card-modern dark:bg-gray-800 dark:border-gray-700 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                        {feature.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-base transition-colors">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
            جاهز للبدء؟
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            حمّل التطبيق الآن واستمتع بجميع هذه الميزات
          </p>
          <Link href="/download" className="btn-primary inline-block">
            <span className="flex items-center gap-2">
              {t('download_cta_button')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
