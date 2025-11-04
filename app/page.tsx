"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import SocialLinks from "@/components/SocialLinks";
import Logo3D from "@/components/Logo3D";
import ParallaxSection from "@/components/ParallaxSection";
import { useEffect, useState } from "react";

interface Stats {
  users: number;
  votes: number;
  governorates: number;
  languages: number;
  nationalAverage?: number;
}

export default function Home() {
  const { t } = useI18n();
  const [stats, setStats] = useState<Stats>({
    users: 0,
    votes: 0,
    governorates: 14,
    languages: 3,
    nationalAverage: 0,
  });
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  useEffect(() => {
    // جلب الإحصائيات من API
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoadingStats(false);
      }
    };

    fetchStats();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section with Particles */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg pt-24 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <ParallaxSection speed={0.2} className="text-center lg:text-right space-y-8 animate-fade-in-up">
              <div className="inline-block mb-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <span className="inline-block px-5 py-2.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-sm font-semibold animate-fade-in border border-primary/20 dark:border-primary-light/30 transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  {t('hero_badge')}
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <span className="block text-gray-900 dark:text-white mb-3 transition-colors transform hover:scale-105 inline-block transition-transform duration-300">صوت</span>
                <span className="block text-gradient animate-shimmer bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent bg-[length:200%_auto]">
                  سوريا
                </span>
                <span className="block text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 mt-4 font-normal transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Syria Voice
                </span>
          </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 transition-colors animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                {t('hero_subtitle')}
                <br />
                <span className="text-primary dark:text-primary-light font-semibold">{t('hero_subtitle_2')}</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Link 
                  href="/download" 
                  className="btn-primary group relative overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('hero_download')}
                  </span>
                </Link>
                <Link 
                  href="/features" 
                  className="btn-secondary group relative overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {t('hero_discover')}
                  </span>
                </Link>
              </div>

              {/* Stats Mini */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {isLoadingStats ? (
                  <div className="text-gray-600 dark:text-gray-400">جاري التحميل...</div>
                ) : (
                  [
                    { value: `+${stats.users.toLocaleString()}`, label: t('stats_users') },
                    { value: `+${stats.votes.toLocaleString()}`, label: t('stats_votes') },
                    { value: stats.governorates.toString(), label: t('stats_governorates') },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center transform transition-all duration-300 hover:scale-110 hover:translate-y-[-5px] group"
                    >
                      <div className="text-3xl font-bold text-primary group-hover:text-primary-dark transition-colors animate-glow-pulse">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{stat.label}</div>
                    </div>
                  ))
                )}
              </div>
            </ParallaxSection>

            {/* Right Content - Logo 3D */}
            <ParallaxSection speed={0.3} className="flex justify-center lg:justify-start">
              <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <Logo3D size={400} className="mx-auto lg:mx-0" />
              </div>
            </ParallaxSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Links Section */}
      <ParallaxSection speed={0.2}>
        <section className="section-padding relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900 transition-colors duration-300">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
                اكتشف المزيد | Discover More
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
                استكشف جميع صفحات الموقع | Explore all website pages
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  href: '/features',
                  icon: '✨',
                  title: 'الميزات | Features',
                  description: 'اكتشف جميع ميزات التطبيق | Discover all app features',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  href: '/stats',
                  icon: '📊',
                  title: 'الإحصائيات | Statistics',
                  description: 'إحصائيات تفاعلية ومقارنات | Interactive statistics and comparisons',
                  color: 'from-green-500 to-green-600',
                },
                {
                  href: '/faq',
                  icon: '❓',
                  title: 'أسئلة شائعة | FAQ',
                  description: 'إجابات على الأسئلة الأكثر شيوعاً | Answers to common questions',
                  color: 'from-purple-500 to-purple-600',
                },
                {
                  href: '/how-it-works',
                  icon: '⚙️',
                  title: 'كيف يعمل | How It Works',
                  description: 'خطوات بسيطة لاستخدام التطبيق | Simple steps to use the app',
                  color: 'from-orange-500 to-orange-600',
                },
              ].map((link, index) => (
                <ParallaxSection key={index} speed={0.15}>
                  <Link
                    href={link.href}
                    className="card-modern dark:bg-gray-800 dark:border-gray-700 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up block text-center h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                    <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {link.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 text-primary dark:text-primary-light font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-2">
                      ابدأ الآن
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </Link>
                </ParallaxSection>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* National Average Widget */}
      {stats.nationalAverage !== undefined && stats.nationalAverage > 0 && (
        <ParallaxSection speed={0.25}>
          <section className="section-padding bg-gradient-to-br from-primary/10 via-primary-light/5 to-primary-dark/10 dark:from-primary/20 dark:via-primary-light/10 dark:to-primary-dark/20 transition-colors duration-300 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="container-custom relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="card-modern dark:bg-gray-800/80 dark:border-gray-700 border-2 border-primary/30 dark:border-primary-light/30 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up">
                  <div className="text-center">
                    {/* Icon */}
                    <div className="inline-block mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-2xl mx-auto">
                        <span className="text-5xl">🎯</span>
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm uppercase tracking-wider text-primary dark:text-primary-light font-bold mb-4 opacity-80">
                      المتوسط الوطني | National Average
                    </div>
                    
                    {/* Value */}
                    <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary-lighter bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                      {isLoadingStats ? '...' : stats.nationalAverage.toFixed(1)}%
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                      متوسط تقييم جميع المحافظات السورية | Average rating of all Syrian governorates
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mt-8 max-w-md mx-auto">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary via-primary-light to-primary-lighter rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ width: `${Math.min(stats.nationalAverage || 0, 100)}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>0%</span>
                        <span className="font-semibold text-primary dark:text-primary-light">{stats.nationalAverage.toFixed(1)}%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    {/* Link to Stats Page */}
                    <div className="mt-8">
                      <Link 
                        href="/stats" 
                        className="btn-secondary inline-block"
                      >
                        <span className="flex items-center gap-2">
                          عرض الإحصائيات التفصيلية | View Detailed Statistics
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>
      )}

      {/* Download CTA Section */}
      <ParallaxSection speed={0.4}>
        <section className="section-padding relative overflow-hidden gradient-bg text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${10 + (i % 5)}s`,
                }}
              ></div>
            ))}
          </div>
          <div className="container-custom relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-8 animate-slide-up">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 animate-scale-in">
                {t('download_cta_title')}
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                {t('download_cta_subtitle')}
                <br />
                <span className="font-semibold">{t('download_cta_subtitle_2')}</span>
              </p>
              <Link 
                href="/download" 
                className="btn-primary bg-white text-primary hover:bg-gray-100 inline-block text-lg px-10 py-4 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-glow-pulse"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('download_cta_button')}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
}
