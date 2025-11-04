"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import SocialLinks from "@/components/SocialLinks";
import ParallaxSection from "@/components/ParallaxSection";

export default function AboutPage() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('nav_about')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              تعرف على تطبيق صوت سوريا ومهمتنا
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Mission */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">مهمتنا</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors">
                  تطبيق صوت سوريا يهدف إلى تمكين المواطنين السوريين من التعبير عن آرائهم بأمان ومشاركتهم في تقييم الخدمات الحكومية. نسعى لبناء منصة شفافة وآمنة تعزز المشاركة المدنية الإيجابية.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                  نؤمن بأن كل صوت مهم وأن مشاركة المواطنين هي أساس بناء مستقبل أفضل لسوريا.
                </p>
              </div>
            </ParallaxSection>

            {/* Vision */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">رؤيتنا</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                  سوريا ديمقراطية حيث يُسمع كل صوت ويُحترم كل رأي. نطمح ليكون صوت سوريا المنصة الرائدة للمشاركة المدنية والتواصل بين المواطنين والحكومة.
                </p>
              </div>
            </ParallaxSection>

            {/* Values */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">قيمنا</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'الشفافية', desc: 'كل شيء مفتوح وواضح. نؤمن بالشفافية الكاملة في جميع العمليات.' },
                    { title: 'الأمان', desc: 'حماية خصوصية المستخدمين هي أولويتنا القصوى. بياناتك آمنة ومحمية.' },
                    { title: 'الديمقراطية', desc: 'نؤمن بحق كل مواطن في التعبير عن رأيه ومشاركته في صنع القرار.' },
                    { title: 'المصداقية', desc: 'نضمن أن البيانات حقيقية وموثوقة. كل صوت يهم وكل تصويت محسوب.' },
                  ].map((value, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group/item">
                      <h3 className="text-2xl font-bold mb-3 text-primary dark:text-primary-light transition-colors group-hover/item:scale-105 inline-block">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 transition-colors">
                        {value.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ParallaxSection>

            {/* App Info */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">معلومات التطبيق</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-5 border-b border-gray-200 dark:border-gray-700 transition-colors">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors">اسم التطبيق</span>
                  <span className="text-lg text-gray-900 dark:text-white font-bold transition-colors">صوت سوريا - Syria Voice</span>
                </div>
                <div className="flex justify-between items-center py-5 border-b border-gray-200 dark:border-gray-700 transition-colors">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors">الإصدار</span>
                  <span className="text-lg text-gray-900 dark:text-white font-bold transition-colors">1.0.0</span>
                </div>
                <div className="flex justify-between items-center py-5 border-b border-gray-200 dark:border-gray-700 transition-colors">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors">نظام التشغيل</span>
                  <span className="text-lg text-gray-900 dark:text-white font-bold transition-colors">Android 7.0+</span>
                </div>
                <div className="flex justify-between items-center py-5 border-b border-gray-200 dark:border-gray-700 transition-colors">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors">اللغات المدعومة</span>
                  <span className="text-lg text-gray-900 dark:text-white font-bold transition-colors">العربية، الإنجليزية، الكردية</span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors">الحجم</span>
                  <span className="text-lg text-gray-900 dark:text-white font-bold transition-colors">~50 MB</span>
                </div>
              </div>
            </div>

            {/* Features Summary */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">الميزات الرئيسية</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "نظام التصويت اليومي الآمن والمجهول",
                  "دليل شامل للخدمات الحكومية",
                  "إحصائيات تفاعلية وتقارير قابلة للتصدير",
                  "مساعد ذكي مدعوم بالذكاء الاصطناعي",
                  "نظام الإنجازات والملف الشخصي",
                  "دعم ثلاث لغات (عربي، إنجليزي، كردي)",
                  "عمل بدون إنترنت مع مزامنة تلقائية"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-700 dark:text-gray-300 transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
            تابعنا على وسائل التواصل الاجتماعي
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            تواصل معنا عبر حساباتنا الرسمية على وسائل التواصل الاجتماعي
          </p>
          <div className="flex justify-center mb-8">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
            انضم إلينا اليوم
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            حمّل التطبيق وكن جزءاً من التغيير
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

      {/* Timeline Section */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
                  مسيرة التطبيق | App Journey
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
                  محطات مهمة في تطوير صوت سوريا | Important milestones in Syria Voice development
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-light to-primary-dark dark:from-primary-light dark:via-primary dark:to-primary-light transform translate-x-1/2"></div>

                {[
                  {
                    year: '2024',
                    title: 'بداية المشروع | Project Start',
                    description: 'تم إطلاق فكرة تطبيق صوت سوريا لتمكين المواطنين من التعبير عن آرائهم بأمان. | Syria Voice app idea was launched to enable citizens to express their opinions safely.',
                  },
                  {
                    year: '2024',
                    title: 'الإصدار الأول | First Release',
                    description: 'تم إطلاق النسخة الأولى من التطبيق مع ميزات التصويت اليومي والخدمات الحكومية. | First version of the app was released with daily voting and government services features.',
                  },
                  {
                    year: '2025',
                    title: 'إضافة الذكاء الاصطناعي | AI Integration',
                    description: 'تم إضافة المساعد الذكي المدعوم بالذكاء الاصطناعي لمساعدة المستخدمين في العثور على المعلومات. | AI-powered smart assistant was added to help users find information.',
                  },
                  {
                    year: '2025',
                    title: 'إطلاق الموقع | Website Launch',
                    description: 'تم إطلاق موقع صوت سوريا الرسمي ليكون نافذة إعلامية عن التطبيق. | Syria Voice official website was launched to be an informational window about the app.',
                  },
                ].map((milestone, index) => (
                  <ParallaxSection key={index} speed={0.1}>
                    <div
                      className={`relative mb-12 animate-slide-up ${
                        index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                      }`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className={`card-modern dark:bg-gray-800 dark:border-gray-700 max-w-md group hover:border-primary/50 dark:hover:border-primary-light/50 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark dark:from-primary-light dark:to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {milestone.year}
                          </div>
                          <div className="absolute top-8 right-1/2 transform translate-x-1/2 w-4 h-4 bg-primary dark:bg-primary-light rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </ParallaxSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
}
