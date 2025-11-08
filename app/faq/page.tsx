"use client";

import React from "react";
import { useI18n } from "@/lib/i18n/context";
import ParallaxSection from "@/components/ParallaxSection";

export default function FAQPage() {
  const { t } = useI18n();

  // دالة لتحويل "سوريا" إلى JSX باللون الأخضر
  const highlightSyria = (text: string) => {
    const parts = text.split('سوريا');
    if (parts.length === 1) return text;
    
    const result: (string | React.ReactElement)[] = [];
    parts.forEach((part, index) => {
      if (part) result.push(part);
      if (index < parts.length - 1) {
        result.push(
          <span key={`syria-${index}`} className="text-primary dark:text-primary-light font-semibold">
            سوريا
          </span>
        );
      }
    });
    return result;
  };

  const faqs = [
    {
      q: 'ما هو تطبيق صوت سوريا؟ | What is Syria Voice app?',
      a: 'تطبيق صوت سوريا هو منصة التصويت اليومي الآمنة والخدمات الحكومية للمواطنين السوريين. يمكنك التصويت يومياً وتقييم الخدمات الحكومية بشكل آمن ومجهول. | Syria Voice is a secure daily voting platform and government services app for Syrian citizens. You can vote daily and rate government services safely and anonymously.',
      icon: '📱',
      category: 'عام | General',
    },
    {
      q: 'هل التصويت مجهول؟ | Is voting anonymous?',
      a: 'نعم، التصويت 100% مجهول. لا نحتاج إلى تسجيل الدخول أو معلومات شخصية. كل ما نستخدمه هو معرف فريد للجهاز لا يمكن ربطه بهويتك. | Yes, voting is 100% anonymous. We don\'t require login or personal information. We only use a unique device identifier that cannot be linked to your identity.',
      icon: '🔒',
      category: 'الأمان | Security',
    },
    {
      q: 'كيف يتم استخدام التبرعات؟ | How are donations used?',
      a: 'تُستخدم جميع التبرعات لصيانة الخوادم، تطوير الميزات الجديدة، تحسين الأمان، ودعم فريق التطوير. نضمن الشفافية الكاملة في استخدام الأموال. | All donations are used for server maintenance, developing new features, improving security, and supporting the development team. We ensure full transparency in fund usage.',
      icon: '💰',
      category: 'التبرعات | Donations',
    },
    {
      q: 'هل التطبيق مجاني؟ | Is the app free?',
      a: 'نعم، التطبيق مجاني تماماً ولا يحتوي على إعلانات. نحن نؤمن بأن كل صوت مهم ويجب أن يكون الوصول إليه متاحاً للجميع. | Yes, the app is completely free and contains no advertisements. We believe every voice matters and access should be available to everyone.',
      icon: '🆓',
      category: 'عام | General',
    },
    {
      q: 'ما هي اللغات المدعومة؟ | What languages are supported?',
      a: 'التطبيق يدعم ثلاث لغات: العربية (اللغة الأساسية)، الإنجليزية، والكردية (أحرف لاتينية). | The app supports three languages: Arabic (primary), English, and Kurdish (Latin script).',
      icon: '🌐',
      category: 'اللغات | Languages',
    },
    {
      q: 'كيف يمكنني التحميل؟ | How can I download?',
      a: 'يمكنك تحميل ملف APK مباشرة من صفحة التحميل. سيتم إضافة التطبيق على Google Play قريباً. | You can download the APK file directly from the download page. The app will be added to Google Play soon.',
      icon: '⬇️',
      category: 'التحميل | Download',
    },
    {
      q: 'هل يمكنني التصويت أكثر من مرة في اليوم؟ | Can I vote more than once per day?',
      a: 'لا، يمكنك التصويت مرة واحدة فقط في اليوم. هذا يضمن عدالة التصويت ويمنع التلاعب. | No, you can only vote once per day. This ensures voting fairness and prevents manipulation.',
      icon: '⏰',
      category: 'التصويت | Voting',
    },
    {
      q: 'كيف يمكنني تغيير المحافظة؟ | How can I change my governorate?',
      a: 'المحافظة مرتبطة بجهازك. لا يمكن تغييرها بعد الاختيار الأولي لضمان دقة الإحصائيات. | The governorate is linked to your device. It cannot be changed after the initial selection to ensure statistics accuracy.',
      icon: '📍',
      category: 'الإعدادات | Settings',
    },
    {
      q: 'هل بياناتي آمنة؟ | Is my data safe?',
      a: 'نعم، جميع بياناتك مشفرة ومحمية. لا نحتفظ بأي معلومات شخصية. كل ما نستخدمه هو معرف فريد للجهاز. | Yes, all your data is encrypted and protected. We don\'t store any personal information. We only use a unique device identifier.',
      icon: '🛡️',
      category: 'الأمان | Security',
    },
    {
      q: 'كيف يمكنني الإبلاغ عن مشكلة؟ | How can I report an issue?',
      a: 'يمكنك الإبلاغ عن المشاكل من صفحة الدعم. نحن نفحص جميع التقارير ونعمل على حل المشاكل بسرعة. | You can report issues from the support page. We review all reports and work to resolve problems quickly.',
      icon: '📧',
      category: 'الدعم | Support',
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
              <span className="text-6xl">❓</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="block">أسئلة شائعة</span>
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">Frequently Asked Questions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              إجابات على الأسئلة الأكثر شيوعاً | Answers to the most common questions
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary-light/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <ParallaxSection key={index} speed={0.1}>
                  <div className="card-modern dark:bg-gray-800 dark:border-gray-700 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full font-semibold">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary dark:text-primary-light group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">
                          {highlightSyria(faq.q)}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {highlightSyria(faq.a)}
                        </p>
                      </div>
                    </div>
                  </div>
                </ParallaxSection>
              ))}
            </div>

            {/* Contact Section */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center mt-12 animate-slide-up">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  لم تجد إجابة؟ | Didn't find an answer?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  تواصل معنا وسنكون سعداء لمساعدتك | Contact us and we'll be happy to help you
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/support" 
                    className="btn-primary inline-block"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      صفحة الدعم | Support Page
                    </span>
                  </a>
                  <a 
                    href="/contact" 
                    className="btn-secondary inline-block"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      اتصل بنا | Contact Us
                    </span>
                  </a>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>
    </div>
  );
}

