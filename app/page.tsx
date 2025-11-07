"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n/context";
import SocialLinks from "@/components/SocialLinks";
import { useEffect, useState } from "react";

// ⚡ Lazy Loading للمكونات الثقيلة
const Logo3D = dynamic(() => import('@/components/Logo3D'), {
  loading: () => <div className="w-[400px] h-[400px] bg-gray-100 dark:bg-gray-800 rounded-full animate-pulse" />,
  ssr: false,
});

const ParallaxSection = dynamic(() => import('@/components/ParallaxSection'), {
  loading: () => <div className="min-h-[100px]" />,
  ssr: true,
});

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-24 mobile-safe-top">
        {/* 🌟 Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-primary-light/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/15 via-secondary-light/8 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-accent/10 via-transparent to-transparent rounded-full blur-3xl animate-float"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-20 h-20 border-2 border-primary/20 rounded-full animate-float" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-lg rotate-45 animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute top-40 left-20 w-12 h-12 border-2 border-secondary/20 rounded-lg animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10 pt-8 md:pt-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <ParallaxSection speed={0.2} className="text-center lg:text-right space-y-8 animate-fade-in-up">
              <div className="inline-block mb-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 dark:from-primary/20 dark:via-primary-light/20 dark:to-primary/20 text-primary dark:text-primary-light rounded-full text-sm font-bold border-2 border-primary/20 dark:border-primary-light/30 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 backdrop-blur-sm">
                  <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t('hero_badge')}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up pt-4 md:pt-0" style={{ animationDelay: '0.2s' }}>
                <span className="block mb-3 text-gray-900 dark:text-white transform hover:scale-105 inline-block transition-transform duration-300 pt-2 drop-shadow-sm">
                  صوت
                </span>
                <span className="block bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] drop-shadow-lg">
                  سوريا
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 font-normal text-gray-700 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Syria Voice
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 transition-colors animate-fade-in-up font-medium" style={{ animationDelay: '0.3s' }}>
                {t('hero_subtitle')}
                <br />
                <span className="text-primary dark:text-primary-light font-bold drop-shadow-sm">{t('hero_subtitle_2')}</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Link 
                  href="/download" 
                  className="btn-primary group relative overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-bold text-lg">{t('hero_download')}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Link>
                <Link 
                  href="/features" 
                  className="btn-secondary group relative overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-bold text-lg">{t('hero_discover')}</span>
                  </span>
                </Link>
              </div>

              {/* Stats Mini */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {isLoadingStats ? (
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="font-bold">جاري التحميل...</span>
                  </div>
                ) : (
                  [
                    { value: `+${stats.users.toLocaleString()}`, label: t('stats_users'), icon: '👥', color: 'from-primary to-primary-light' },
                    { value: `+${stats.votes.toLocaleString()}`, label: t('stats_votes'), icon: '🗳️', color: 'from-secondary to-secondary-light' },
                    { value: stats.governorates.toString(), label: t('stats_governorates'), icon: '📍', color: 'from-accent to-accent-light' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl" style={{ background: `linear-gradient(135deg, var(--primary), var(--primary-light))` }}></div>
                      <div className="relative bg-white/[0.95] dark:bg-gray-800/[0.90] backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300/60 dark:border-gray-700/50 group-hover:border-primary/60 dark:group-hover:border-primary-light/50 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:translate-y-[-5px] shadow-lg group-hover:shadow-2xl">
                        <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                        <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                          {stat.value}
                        </div>
                        <div className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">{stat.label}</div>
                      </div>
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
        <section className="section-padding relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 transition-colors duration-300">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary dark:text-primary-light rounded-full text-sm font-bold border border-primary/20">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                  روابط سريعة
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-sm">
                اكتشف المزيد | Discover More
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
                استكشف جميع صفحات الموقع | Explore all website pages
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  href: '/features',
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'الميزات | Features',
                  description: 'اكتشف جميع ميزات التطبيق | Discover all app features',
                  gradient: 'from-blue-500 to-blue-600',
                  bgGradient: 'from-blue-500/10 to-blue-600/10',
                },
                {
                  href: '/stats',
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: 'الإحصائيات | Statistics',
                  description: 'إحصائيات تفاعلية ومقارنات | Interactive statistics and comparisons',
                  gradient: 'from-green-500 to-green-600',
                  bgGradient: 'from-green-500/10 to-green-600/10',
                },
                {
                  href: '/faq',
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'أسئلة شائعة | FAQ',
                  description: 'إجابات على الأسئلة الأكثر شيوعاً | Answers to common questions',
                  gradient: 'from-purple-500 to-purple-600',
                  bgGradient: 'from-purple-500/10 to-purple-600/10',
                },
                {
                  href: '/how-it-works',
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'كيف يعمل | How It Works',
                  description: 'خطوات بسيطة لاستخدام التطبيق | Simple steps to use the app',
                  gradient: 'from-orange-500 to-orange-600',
                  bgGradient: 'from-orange-500/10 to-orange-600/10',
                },
              ].map((link, index) => (
                <ParallaxSection key={index} speed={0.15}>
                  <Link
                    href={link.href}
                    className="card-modern dark:bg-gray-800 dark:border-gray-700 group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up block text-center h-full relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br ${link.gradient} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                        {link.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors drop-shadow-sm">
                        {link.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 font-medium">
                        {link.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-primary dark:text-primary-light font-bold group-hover:gap-3 transition-all duration-300">
                        <span>ابدأ الآن</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
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
                    <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
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
        <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary-light/5 to-secondary/10 dark:from-primary/20 dark:via-primary-light/10 dark:to-secondary/20 transition-colors duration-300 text-gray-800 dark:text-white">
          <div className="absolute inset-0 bg-black/5 dark:bg-black/10"></div>
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
                className="btn-primary bg-gradient-to-r from-primary to-primary-light text-white hover:from-primary-light hover:to-secondary inline-block text-lg px-10 py-4 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-glow-pulse"
              >
                <span className="flex items-center gap-3 font-bold">
                  <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
