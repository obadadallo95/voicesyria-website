"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";
import ParallaxSection from "@/components/ParallaxSection";

interface Governorate {
  id: number;
  name_ar: string;
  name_en: string;
  name_ku: string;
  avg_rate: number;
  slogan: string;
  todayVotes: number;
  totalVotes: number;
}

export default function StatsPage() {
  const { t } = useI18n();
  const [governorates, setGovernorates] = useState<Governorate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGov, setSelectedGov] = useState<Governorate | null>(null);

  useEffect(() => {
    const fetchGovernorates = async () => {
      try {
        const response = await fetch('/api/governorates');
        if (response.ok) {
          const data = await response.json();
          setGovernorates(data);
          if (data.length > 0) {
            setSelectedGov(data[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching governorates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGovernorates();
  }, []);

  // حساب المتوسط الوطني
  const nationalAverage = governorates.length > 0
    ? governorates.reduce((sum, gov) => sum + (gov.avg_rate || 0), 0) / governorates.length
    : 0;

  // حساب إجمالي التصويتات
  const totalVotes = governorates.reduce((sum, gov) => sum + gov.totalVotes, 0);
  const totalTodayVotes = governorates.reduce((sum, gov) => sum + gov.todayVotes, 0);

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
              <span className="text-6xl">📊</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="block">الإحصائيات</span>
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">Statistics</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              إحصائيات تفاعلية ومقارنات بين المحافظات | Interactive statistics and governorate comparisons
            </p>
          </div>
        </div>
      </section>

      {/* National Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* National Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <ParallaxSection speed={0.1}>
                <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0s' }}>
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    🎯
                  </div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    {isLoading ? '...' : nationalAverage.toFixed(1)}%
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    المتوسط الوطني | National Average
                  </div>
                </div>
              </ParallaxSection>

              <ParallaxSection speed={0.15}>
                <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    📈
                  </div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    {isLoading ? '...' : totalVotes.toLocaleString()}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    إجمالي التصويتات | Total Votes
                  </div>
                </div>
              </ParallaxSection>

              <ParallaxSection speed={0.2}>
                <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center group hover:border-primary/50 dark:hover:border-primary-light/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    ⚡
                  </div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    {isLoading ? '...' : totalTodayVotes.toLocaleString()}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    تصويتات اليوم | Today's Votes
                  </div>
                </div>
              </ParallaxSection>
            </div>

            {/* Governorates Ranking */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                ترتيب المحافظات | Governorates Ranking
              </h2>
              {isLoading ? (
                <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                  جاري التحميل... | Loading...
                </div>
              ) : (
                <div className="space-y-4">
                  {governorates.map((gov, index) => (
                    <ParallaxSection key={gov.id} speed={0.1}>
                      <div
                        className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                          selectedGov?.id === gov.id
                            ? 'border-primary dark:border-primary-light bg-primary/10 dark:bg-primary-light/10'
                            : 'border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light'
                        }`}
                        onClick={() => setSelectedGov(gov)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark dark:from-primary-light dark:to-primary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {gov.name_ar} | {gov.name_en}
                              </h3>
                              {gov.slogan && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {gov.slogan}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="text-3xl font-bold text-primary dark:text-primary-light mb-1">
                              {gov.avg_rate.toFixed(1)}%
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {gov.totalVotes.toLocaleString()} {t('stats_votes')}
                            </div>
                          </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-primary-dark dark:from-primary-light dark:to-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${gov.avg_rate}%` }}
                          ></div>
                        </div>
                      </div>
                    </ParallaxSection>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Governorate Details */}
            {selectedGov && (
              <ParallaxSection speed={0.2}>
                <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                    تفاصيل {selectedGov.name_ar} | {selectedGov.name_en} Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          متوسط التقييم | Average Rating
                        </div>
                        <div className="text-4xl font-bold text-primary dark:text-primary-light">
                          {selectedGov.avg_rate.toFixed(1)}%
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          إجمالي التصويتات | Total Votes
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {selectedGov.totalVotes.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          تصويتات اليوم | Today's Votes
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {selectedGov.todayVotes.toLocaleString()}
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          الشعار | Slogan
                        </div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          {selectedGov.slogan || 'لا يوجد شعار'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

