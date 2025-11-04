"use client";

import { useI18n } from "@/lib/i18n/context";

export default function PrivacyPolicyPage() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('footer_privacy')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Privacy Policy
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                    <strong>تاريخ آخر تحديث:</strong> يناير 2025
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    <strong>Last Updated:</strong> January 2025
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">1. مقدمة | Introduction</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نحن في تطبيق "صوت سوريا" نلتزم بحماية خصوصيتك وأمان بياناتك. هذه السياسة توضح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                    We at "Syria Voice" app are committed to protecting your privacy and data security. This policy explains how we collect, use, and protect your personal information.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">2. المعلومات التي نجمعها | Information We Collect</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">2.1 معلومات الجهاز | Device Information</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6 text-lg transition-colors">
                      <li>Device Hash (معرف فريد للجهاز)</li>
                      <li>نوع الجهاز ونظام التشغيل</li>
                      <li>إصدار التطبيق</li>
                      <li>معلومات الاتصال بالإنترنت</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      <strong>الغرض من الجمع:</strong> ضمان أمان التصويت ومنع التصويت المتعدد، تحسين أداء التطبيق، توفير الدعم الفني.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">3. ما لا نجمع | What We Don't Collect</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نحن <strong>لا نجمع</strong> المعلومات الشخصية الحساسة مثل:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>الأسماء الحقيقية</li>
                    <li>أرقام الهوية أو جوازات السفر</li>
                    <li>أرقام الهواتف</li>
                    <li>العناوين الفعلية</li>
                    <li>المعلومات المالية الشخصية</li>
                    <li>معلومات الموقع الجغرافي الدقيقة</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">4. كيفية استخدام المعلومات | How We Use Information</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نستخدم معلوماتك فقط للأغراض التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>توفير خدمات التطبيق الأساسية</li>
                    <li>ضمان أمان التصويت</li>
                    <li>تحسين تجربة المستخدم</li>
                    <li>تطوير الميزات الجديدة</li>
                    <li>إنشاء الإحصائيات العامة (مجموعة ومجهولة)</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">5. مشاركة المعلومات | Information Sharing</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    <strong>نحن لا نشارك معلوماتك مع أي أطراف ثالثة.</strong> نشارك فقط الإحصائيات العامة المجمعة والمجهولة تماماً.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">6. حماية البيانات | Data Protection</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نستخدم تقنيات الحماية التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>التشفير المتقدم (AES-256)</li>
                    <li>نظام Device Hash الآمن</li>
                    <li>حماية قاعدة البيانات (RLS)</li>
                    <li>مراقبة الأمان المستمرة</li>
                    <li>جميع الاتصالات مشفرة (HTTPS/TLS)</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">7. حقوق المستخدم | User Rights</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    لديك الحق في:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>الوصول إلى بياناتك</li>
                    <li>تصحيح أي معلومات غير دقيقة</li>
                    <li>حذف بياناتك</li>
                    <li>تقييد معالجة بياناتك</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">8. الاتصال بنا | Contact Us</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    للاستفسارات حول الخصوصية، يرجى التواصل معنا:
                  </p>
                  <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:info@voicesyria.com" className="text-primary dark:text-primary-light hover:underline text-lg font-semibold transition-colors">
                        info@voicesyria.com
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="https://voicesyria.com" className="text-primary dark:text-primary-light hover:underline text-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                        voicesyria.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                    © 2025 صوت سوريا - Syria Voice. جميع الحقوق محفوظة.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 transition-colors">
                    هذه السياسة مكتوبة باللغات العربية والإنجليزية لضمان الوضوح والفهم الكامل لجميع المستخدمين.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
