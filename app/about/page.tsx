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
              تعرف على تطبيق صوت <span className="text-primary dark:text-primary-light font-bold">سوريا</span> ومهمتنا
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Founding Story */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">
                      قصة التأسيس | Our Founding Story
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="text-xl font-semibold text-primary dark:text-primary-light">
                      🌅 البداية: حلم وطن حر
                    </p>
                    <p>
                      بعد تحرر <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> وانفتاحها على العالم، ولدت فكرة تطبيق "صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span>" من قلب مواطن يحلم بوطن حر يسوده الشفافية والعدالة. بعد أكثر من خمسة عقود من القطيعة بين الشعب والحكومة، جاءت لحظة التغيير لبناء جسر جديد يربط بين المواطنين ومؤسسات الدولة.
                    </p>
                    
                    <p className="text-xl font-semibold text-primary dark:text-primary-light mt-8">
                      💡 الإلهام: رؤية لمستقبل أفضل
                    </p>
                    <p>
                      <strong className="text-primary dark:text-primary-light">من الشعب وإلى الشعب</strong> - هذا هو شعارنا. نؤمن إيماناً راسخاً أن أي تغيير حقيقي يبدأ عندما يجد الشعب صوته ويستطيع التعبير عنه بحرية وأمان. لقد عانت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> من انقطاع الصلة بين المواطنين والحكومة لعقود طويلة، مما أدى إلى ضعف التواصل وفقدان الثقة.
                    </p>
                    
                    <p className="text-xl font-semibold text-primary dark:text-primary-light mt-8">
                      🛠️ الرحلة: 8 أشهر من العمل والعزم
                    </p>
                    <p>
                      بدأت الرحلة كحلم بسيط في قلب مواطن عادي، لكنه حلم كبير ببلد حر. استمر العمل على التطبيق لأكثر من 8 أشهر من التصميم والتطوير، شهراً بعد شهر، سطراً بعد سطر، بكل حب وأمل وتفاؤل أن <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> ستنهض وتصبح دولة متقدمة.
                    </p>
                    
                    <p className="text-xl font-semibold text-primary dark:text-primary-light mt-8">
                      🚀 المستقبل: نواة لمشروع عظيم
                    </p>
                    <p>
                      هذا التطبيق، في حال لقى دعم شعبي وحكومي ومؤسساتي، هو نواة لمشروع عظيم ليسهل حياة المواطن ويساعد الحكومة بشكل أفضل. نحن نؤمن أن المستقبل مشرق، وأن <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> تستحق الأفضل.
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxSection>

            {/* Mission */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">مهمتنا | Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors">
                  هدفنا الأساسي هو بناء صلة وصل بين الشعب والحكومة، لتسهيل التواصل بينهما بعد سنوات طويلة من القطيعة. نؤمن أن التواصل الشفاف والمباشر هو أساس بناء دولة قوية ومتقدمة.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                  نؤمن بأن كل صوت مهم وأن مشاركة المواطنين هي أساس بناء مستقبل أفضل ل<span className="text-primary dark:text-primary-light font-semibold">سوريا</span>.
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
                  <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> ديمقراطية حيث يُسمع كل صوت ويُحترم كل رأي. نطمح ليكون صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> المنصة الرائدة للمشاركة المدنية والتواصل بين المواطنين والحكومة.
                </p>
              </div>
            </ParallaxSection>

            {/* What Makes Us Unique */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.15s' }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">ما يميزنا | What Makes Us Unique</h2>
                </div>
                <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20 p-8 rounded-2xl border-2 border-primary/20 dark:border-primary-light/20">
                  <p className="text-2xl font-bold text-center text-primary dark:text-primary-light mb-4">
                    من الشعب وإلى الشعب
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                    هذا ما يميزنا. نؤمن أن أي تغيير حقيقي يبدأ عندما يجد الشعب صوته ويستطيع التعبير عنه. نحن لسنا مؤسسة حكومية، نحن مواطنون عاديون يحلمون بوطن أفضل.
                  </p>
                </div>
              </div>
            </ParallaxSection>

            {/* The Problem We Solve */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">المشكلة التي نحلها | The Problem We Solve</h2>
                </div>
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    نوفر للحكومة قاعدة بيانات متكاملة تعرفها على المشاكل الأساسية في كل محافظة بشكل دقيق. فمثلاً، في حمص قد تكون مشكلة الماء أكثر إلحاحاً من مشكلة الكهرباء، بينما حلب قد تعاني من مشاكل في البنى التحتية.
                  </p>
                  <p>
                    هذا يسمح للمواطن بالتعبير عن مشاكله بشكل شفاف ومؤمن وموضوعي، مما يوفر للحكومة موارد كبيرة لحل المشاكل بشكل دقيق لكل محافظة على حدة.
                  </p>
                </div>
              </div>
            </ParallaxSection>

            {/* Values */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.25s' }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">قيمنا الأساسية | Our Core Values</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { 
                      title: 'الشفافية', 
                      titleEn: 'Transparency',
                      desc: 'نؤمن بالشفافية الكاملة في كل ما نقوم به. كل صوت يُسمع، كل رأي يُحترم، وكل إحصائية تُعرض بكل وضوح.',
                      icon: '👁️',
                      color: 'from-blue-500 to-blue-600'
                    },
                    { 
                      title: 'الأمان', 
                      titleEn: 'Security',
                      desc: 'نحمي خصوصية كل مواطن بأقوى تقنيات الأمان. صوتك آمن معنا، بياناتك محمية، وهوية المستخدمين مجهولة تماماً.',
                      icon: '🔒',
                      color: 'from-green-500 to-green-600'
                    },
                    { 
                      title: 'المصداقية', 
                      titleEn: 'Credibility',
                      desc: 'نلتزم بالمصداقية في كل معلومة نقدمها. لا تلاعب، لا تزيف، فقط الحقائق والأرقام الحقيقية.',
                      icon: '✅',
                      color: 'from-purple-500 to-purple-600'
                    },
                  ].map((value, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary-light/50 transition-all duration-300 group/item">
                      <div className="text-5xl mb-4 text-center">{value.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 text-primary dark:text-primary-light transition-colors text-center group-hover/item:scale-105 inline-block">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">{value.titleEn}</p>
                      <p className="text-gray-700 dark:text-gray-300 transition-colors text-center">
                        {value.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ParallaxSection>

            {/* Achievement */}
            <ParallaxSection speed={0.2}>
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">إنجازنا | Our Achievement</h2>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl border-2 border-yellow-200 dark:border-yellow-800">
                  <p className="text-2xl font-bold text-center text-primary dark:text-primary-light mb-4">
                    <span className="text-primary dark:text-primary-light">💚</span> صُنع بحب وأمل وتفاؤل
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                    إنجازنا الوحيد والأكبر هو أن هذا التطبيق صنع بحب وأمل وتفاؤل أن <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> ستنهض وتصبح دولة متقدمة. كل سطر كُتب بحب، كل ميزة صُممت بأمل، وكل تحدٍ وُاجه بتفاؤل.
                  </p>
                </div>
              </div>
            </ParallaxSection>

            {/* App Info */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700 mb-10">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">معلومات التطبيق</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-5 border-b border-gray-200 dark:border-gray-700 transition-colors">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors">اسم التطبيق</span>
                  <span className="text-lg font-bold transition-colors">
                    <span className="inline-flex items-center gap-1">
                      {/* Solid dark background for "صوت" in light mode */}
                      <span className="relative inline-block">
                        <span className="absolute inset-0 bg-gray-900 dark:bg-transparent rounded-md px-2 py-1 -z-10 dark:hidden"></span>
                        <span className="relative text-white dark:text-white inline-block px-2 py-1 rounded-md font-black" style={{ 
                          textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.6)',
                          WebkitTextStroke: '0.5px rgba(255,255,255,0.3)',
                          WebkitTextFillColor: '#FFFFFF'
                        }}>صوت</span>
                      </span>
                      {/* Light background for "سوريا" in light mode for better contrast */}
                      <span className="relative inline-block">
                        <span className="absolute inset-0 bg-white/90 dark:bg-transparent rounded-md px-2 py-1 -z-10 dark:hidden shadow-md"></span>
                        <span className="relative text-primary dark:text-primary-light inline-block px-2 py-1 rounded-md font-black" style={{ 
                          textShadow: '0 2px 4px rgba(15, 157, 88, 0.3), 0 1px 2px rgba(15, 157, 88, 0.2)',
                          WebkitTextStroke: '0.5px rgba(15, 157, 88, 0.1)',
                          WebkitTextFillColor: 'var(--color-primary)'
                        }}>سوريا</span>
                      </span> - Syria Voice
                    </span>
                  </span>
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

      {/* Message from the Heart */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20 transition-colors duration-300 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="card-modern dark:bg-gray-800/80 dark:border-gray-700 border-2 border-primary/30 dark:border-primary-light/30 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up">
                <div className="text-center">
                  {/* Icon */}
                  <div className="inline-block mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-2xl mx-auto">
                      <span className="text-5xl">💚</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white transition-colors">
                    رسالة من القلب | A Message from the Heart
                  </h2>
                  
                  {/* Message */}
                  <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="font-semibold">
                      نحن مواطنون عاديون، نحلم بوطن حر، نؤمن بالشفافية، ونعمل بكل حب وأمل.
                    </p>
                    <p>
                      هذا التطبيق ليس مجرد تطبيق، إنه رسالة من القلب إلى كل مواطن سوري: <strong className="text-primary dark:text-primary-light">صوتك مسموع، رأيك مهم، ومستقبل <span className="text-primary dark:text-primary-light font-bold">سوريا</span> يبدأ منك</strong>.
                    </p>
                    <p className="text-2xl font-bold text-primary dark:text-primary-light mt-8">
                      صُنع بحب وأمل وتفاؤل <span className="text-primary dark:text-primary-light">💚</span>
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                      Made with Love, Hope, and Optimism <span className="text-primary dark:text-primary-light">💚</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
            انضم إلينا اليوم | Join Us Today
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            حمّل التطبيق وكن جزءاً من التغيير | Download the app and be part of the change
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
                  محطات مهمة في تطوير صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> | Important milestones in Syria Voice development
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-light to-primary-dark dark:from-primary-light dark:via-primary dark:to-primary-light transform translate-x-1/2"></div>

                {[
                  {
                    year: '2024',
                    title: 'بداية المشروع | Project Start',
                    description: 'تم إطلاق فكرة تطبيق صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> لتمكين المواطنين من التعبير عن آرائهم بأمان. | Syria Voice app idea was launched to enable citizens to express their opinions safely.',
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
                    description: 'تم إطلاق موقع صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> الرسمي ليكون نافذة إعلامية عن التطبيق. | Syria Voice official website was launched to be an informational window about the app.',
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
