"use client";

import { useI18n } from "@/lib/i18n/context";

export default function TermsPage() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('footer_terms')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Terms of Service - Syria Voice App
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">1. قبول الشروط | Acceptance of Terms</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    باستخدامك تطبيق "صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span>" (Syria Voice)، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام التطبيق.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                    By using the "Syria Voice" app, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">2. وصف الخدمة | Service Description</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">2.1 الغرض من التطبيق | App Purpose</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      تطبيق "صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span>" هو منصة رقمية تهدف إلى:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>تمكين المواطنين السوريين من التعبير عن آرائهم حول الخدمات الحكومية</li>
                      <li>توفير معلومات حيوية حول المحافظات والخدمات الحكومية</li>
                      <li>إنشاء نظام تصويت آمن وشفاف</li>
                      <li>تعزيز المشاركة المدنية والديمقراطية</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      Syria Voice is a digital platform that aims to: Empower Syrian citizens to express their opinions about government services, provide vital information about governorates and government services, create a secure and transparent voting system, and promote civic participation and democracy.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">2.2 الميزات الرئيسية | Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>نظام التصويت الذكي | Smart Voting System</li>
                      <li>الإحصائيات التفاعلية | Interactive Statistics</li>
                      <li>المساعد الذكي بالذكاء الاصطناعي | AI Smart Assistant</li>
                      <li>نظام الإنجازات والنقاط | Achievements and Points System</li>
                      <li>الدعم متعدد اللغات | Multi-language Support</li>
                      <li><strong>العمل بدون إنترنت | Offline Operation</strong></li>
                      <li><strong>نظام التخزين المحلي الذكي | Smart Local Storage System</strong></li>
                      <li><strong>المزامنة التلقائية | Automatic Synchronization</strong></li>
                      <li><strong>قائمة انتظار العمليات | Operation Queue System</strong></li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">2.3 الميزات التقنية الجديدة | New Technical Features</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      <strong>نظام التخزين المحلي والمزامنة الذكية | Offline Cache & Smart Sync System</strong>
                    </p>
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white transition-colors">2.3.1 العمل بدون إنترنت | Offline Operation</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                        <li><strong>الوصول للبيانات:</strong> يمكنك الوصول لجميع البيانات المحفوظة محلياً حتى بدون اتصال بالإنترنت</li>
                        <li><strong>العمليات المحلية:</strong> يمكنك التصويت وإضافة التعليقات حتى بدون إنترنت</li>
                        <li><strong>قائمة الانتظار:</strong> يتم حفظ عملياتك في قائمة انتظار وإرسالها عند عودة الاتصال</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed text-lg transition-colors">
                        <strong>Data Access:</strong> You can access all locally cached data even without internet connection<br />
                        <strong>Local Operations:</strong> You can vote and add comments even without internet<br />
                        <strong>Operation Queue:</strong> Your operations are saved in a queue and sent when connection is restored
                      </p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white transition-colors">2.3.2 تحسين الأداء | Performance Optimization</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                        <li><strong>تحميل فوري:</strong> البيانات المحفوظة محلياً تُعرض فوراً</li>
                        <li><strong>توفير البيانات:</strong> تقليل 90% من استهلاك البيانات</li>
                        <li><strong>مزامنة ذكية:</strong> تحديث البيانات فقط عند الحاجة</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed text-lg transition-colors">
                        <strong>Instant Loading:</strong> Locally cached data displays instantly<br />
                        <strong>Data Savings:</strong> 90% reduction in data consumption<br />
                        <strong>Smart Sync:</strong> Data updates only when needed
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white transition-colors">2.3.3 حماية البيانات | Data Protection</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                        <li><strong>تشفير محلي:</strong> البيانات المحفوظة محلياً مشفرة</li>
                        <li><strong>تنظيف تلقائي:</strong> حذف البيانات المنتهية الصلاحية تلقائياً</li>
                        <li><strong>حماية الخصوصية:</strong> لا يتم حفظ معلومات شخصية حساسة</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed text-lg transition-colors">
                        <strong>Local Encryption:</strong> Locally cached data is encrypted<br />
                        <strong>Automatic Cleanup:</strong> Expired data is automatically deleted<br />
                        <strong>Privacy Protection:</strong> No sensitive personal information is stored
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">3. استخدام التطبيق | App Usage</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">3.1 الاستخدام المسموح | Permitted Use</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      يمكنك استخدام التطبيق للأغراض التالية:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>التصويت على الخدمات الحكومية</li>
                      <li>الاطلاع على الإحصائيات والتقارير</li>
                      <li>استخدام المساعد الذكي</li>
                      <li>المشاركة في نظام الإنجازات</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      You may use the app for the following purposes: Voting on government services, viewing statistics and reports, using the smart assistant, and participating in the achievements system.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">3.2 الاستخدام المحظور | Prohibited Use</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      يحظر عليك:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>استخدام التطبيق لأغراض غير قانونية</li>
                      <li>محاولة اختراق أو تلف التطبيق</li>
                      <li>إنشاء حسابات وهمية متعددة</li>
                      <li>نشر محتوى مسيء أو غير مناسب</li>
                      <li>انتهاك حقوق الملكية الفكرية</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      You are prohibited from: Using the app for illegal purposes, attempting to hack or damage the app, creating multiple fake accounts, publishing offensive or inappropriate content, and violating intellectual property rights.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">4. الحساب والهوية | Account and Identity</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">4.1 إنشاء الحساب | Account Creation</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>التطبيق يستخدم نظام Device Hash لتحديد الهوية</li>
                      <li>لا يتطلب التطبيق إنشاء حساب تقليدي</li>
                      <li>يتم ربط البيانات بجهازك بشكل آمن</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      The app uses Device Hash system for identity verification. The app does not require traditional account creation. Data is securely linked to your device.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">4.2 المسؤولية | Responsibility</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      أنت مسؤول عن:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>الحفاظ على أمان جهازك</li>
                      <li>عدم مشاركة معلومات الجهاز مع الآخرين</li>
                      <li>استخدام التطبيق بطريقة مسؤولة</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      You are responsible for: Maintaining the security of your device, not sharing device information with others, and using the app responsibly.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">5. الخصوصية وحماية البيانات | Privacy and Data Protection</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">5.1 جمع البيانات | Data Collection</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      نقوم بجمع البيانات التالية:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>معلومات الجهاز (Device Hash)</li>
                      <li>اختيارات المحافظة</li>
                      <li>بيانات التصويت (بدون معلومات شخصية)</li>
                      <li>إحصائيات الاستخدام</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We collect the following data: Device information (Device Hash), governorate selections, voting data (without personal information), and usage statistics.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">5.2 استخدام البيانات | Data Usage</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      نستخدم البيانات لـ:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>تحسين خدمات التطبيق</li>
                      <li>توفير الإحصائيات العامة</li>
                      <li>ضمان أمان التصويت</li>
                      <li>تطوير الميزات الجديدة</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We use data to: Improve app services, provide public statistics, ensure voting security, and develop new features.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">6. الأمان | Security</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">6.1 أمان التصويت | Voting Security</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>نستخدم تقنيات التشفير المتقدمة</li>
                      <li>نظام Device Hash يمنع التصويت المتعدد</li>
                      <li>جميع البيانات محمية بتقنيات الأمان الحديثة</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We use advanced encryption technologies. Device Hash system prevents multiple voting. All data is protected with modern security technologies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">6.2 حماية الخصوصية | Privacy Protection</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>لا نجمع معلومات شخصية حساسة</li>
                      <li>البيانات مجهولة الهوية</li>
                      <li>نلتزم بأعلى معايير حماية البيانات</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We do not collect sensitive personal information. Data is anonymized. We adhere to the highest data protection standards.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">7. الملكية الفكرية | Intellectual Property</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">7.1 حقوق التطبيق | App Rights</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      جميع حقوق الملكية الفكرية للتطبيق محفوظة لـ:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>عبادة دللو (المطور الرئيسي)</li>
                      <li>فريق تطوير صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span></li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      All intellectual property rights of the app are reserved for: Obada Dallo (Lead Developer) and Syria Voice Development Team.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">7.2 المحتوى | Content</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>المحتوى المقدم من المستخدمين يبقى ملكاً لهم</li>
                      <li>نحتفظ بالحق في استخدام البيانات المجمعة لأغراض إحصائية</li>
                      <li>لا نستخدم المحتوى الشخصي لأغراض تجارية</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      User-provided content remains their property. We reserve the right to use aggregated data for statistical purposes. We do not use personal content for commercial purposes.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">8. التحديثات والتطوير | Updates and Development</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">8.1 التحديثات | Updates</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>نحتفظ بالحق في تحديث التطبيق في أي وقت</li>
                      <li>قد تتطلب التحديثات إعادة تثبيت التطبيق</li>
                      <li>سنقوم بإشعار المستخدمين بالتغييرات المهمة</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We reserve the right to update the app at any time. Updates may require app reinstallation. We will notify users of important changes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">8.2 التطوير المستقبلي | Future Development</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>نعمل باستمرار على تحسين التطبيق</li>
                      <li>نرحب بالاقتراحات والملاحظات من المستخدمين</li>
                      <li>قد نضيف ميزات جديدة بناءً على احتياجات المستخدمين</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We continuously work on improving the app. We welcome suggestions and feedback from users. We may add new features based on user needs.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">9. الدعم الفني | Technical Support</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">9.1 قنوات الدعم | Support Channels</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      يمكنك التواصل معنا عبر:
                    </p>
                    <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div>
                          <p className="font-semibold mb-2 text-lg">المطور الرئيسي | Lead Developer: عبادة دللو</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="font-semibold mb-2 text-lg">البريد الشخصي | Personal Email:</p>
                          <a href="mailto:obada.dallo95@gmail.com" className="text-primary dark:text-primary-light hover:underline text-lg transition-colors">
                            obada.dallo95@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="font-semibold mb-2 text-lg">البريد الرسمي | Official Email:</p>
                          <a href="mailto:syriavoice.app@gmail.com" className="text-primary dark:text-primary-light hover:underline text-lg transition-colors">
                            syriavoice.app@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <div>
                          <p className="font-semibold mb-2 text-lg">Telegram:</p>
                          <a href="https://t.me/SyriaVoice_Official" className="text-primary dark:text-primary-light hover:underline text-lg transition-colors" target="_blank" rel="noopener noreferrer">
                            @SyriaVoice_Official
                          </a>
                        </div>
                      </li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-lg transition-colors">
                      You can contact us via: Personal Email: obada.dallo95@gmail.com, Official Email: syriavoice.app@gmail.com, Telegram: @SyriaVoice_Official
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">9.2 أوقات الاستجابة | Response Times</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>نحاول الرد على الاستفسارات خلال 24-48 ساعة</li>
                      <li>قد تكون أوقات الاستجابة أطول خلال العطل الرسمية</li>
                      <li>نقدم الدعم باللغات العربية والإنجليزية والكردية</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We try to respond to inquiries within 24-48 hours. Response times may be longer during official holidays. We provide support in Arabic, English, and Kurdish.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">10. التبرعات | Donations</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">10.1 نظام التبرعات | Donation System</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>التطبيق يدعم التبرعات لضمان استمرارية الخدمة</li>
                      <li>جميع التبرعات طوعية وغير إلزامية</li>
                      <li>نضمن الشفافية في استخدام الأموال المتبرع بها</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      The app supports donations to ensure service continuity. All donations are voluntary and non-mandatory. We ensure transparency in the use of donated funds.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">10.2 استخدام التبرعات | Use of Donations</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      تُستخدم التبرعات لـ:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>صيانة الخوادم والاستضافة</li>
                      <li>تطوير الميزات الجديدة</li>
                      <li>تحسين الأمان والحماية</li>
                      <li>دعم فريق التطوير</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      Donations are used for: Server maintenance and hosting, developing new features, improving security and protection, and supporting the development team.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">11. الإعفاء من المسؤولية | Disclaimer</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">11.1 عدم الضمان | No Warranty</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>نقدم التطبيق "كما هو" دون ضمانات</li>
                      <li>لا نضمن عدم وجود أخطاء أو انقطاع في الخدمة</li>
                      <li>المستخدم يستخدم التطبيق على مسؤوليته الخاصة</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We provide the app "as is" without warranties. We do not guarantee the absence of errors or service interruption. Users use the app at their own risk.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">11.2 الحد من المسؤولية | Limitation of Liability</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة</li>
                      <li>المسؤولية محدودة بقيمة التبرعات المستلمة</li>
                      <li>نستثني المسؤولية عن الأضرار الناتجة عن سوء الاستخدام</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We will not be liable for any direct or indirect damages. Liability is limited to the value of donations received. We exclude liability for damages resulting from misuse.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">12. التعديلات على الشروط | Modifications to Terms</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">12.1 حق التعديل | Right to Modify</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>نحتفظ بالحق في تعديل هذه الشروط في أي وقت</li>
                      <li>سنقوم بإشعار المستخدمين بالتغييرات المهمة</li>
                      <li>الاستمرار في استخدام التطبيق يعني الموافقة على الشروط المحدثة</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We reserve the right to modify these terms at any time. We will notify users of important changes. Continued use of the app means agreement to updated terms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">12.2 الإشعارات | Notifications</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>سنقوم بنشر التحديثات على موقعنا الإلكتروني</li>
                      <li>قد نرسل إشعارات عبر التطبيق</li>
                      <li>يُنصح بمراجعة الشروط دورياً</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We will publish updates on our website. We may send notifications through the app. Users are advised to review terms periodically.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">13. القانون المطبق | Governing Law</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">13.1 القانون السوري | Syrian Law</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>تخضع هذه الشروط للقانون السوري</li>
                      <li>أي نزاعات تُحل وفقاً للقوانين السورية</li>
                      <li>نحترم القوانين المحلية والدولية</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      These terms are subject to Syrian law. Any disputes are resolved according to Syrian laws. We respect local and international laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">13.2 حل النزاعات | Dispute Resolution</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>نفضل الحل الودي للنزاعات</li>
                      <li>يمكن اللجوء للتحكيم في حالة عدم التوصل لحل</li>
                      <li>نحترم حقوق المستخدمين ونعمل على حمايتها</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We prefer amicable resolution of disputes. Arbitration can be resorted to if no solution is reached. We respect user rights and work to protect them.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">14. الاتصال | Contact</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">14.1 معلومات الاتصال | Contact Information</h3>
                    <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div>
                          <p className="font-semibold mb-2 text-lg">المطور الرئيسي | Lead Developer: عبادة دللو</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="font-semibold mb-2 text-lg">البريد الشخصي | Personal Email:</p>
                          <a href="mailto:obada.dallo95@gmail.com" className="text-primary dark:text-primary-light hover:underline text-lg transition-colors">
                            obada.dallo95@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="font-semibold mb-2 text-lg">البريد الرسمي | Official Email:</p>
                          <a href="mailto:syriavoice.app@gmail.com" className="text-primary dark:text-primary-light hover:underline text-lg transition-colors">
                            syriavoice.app@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <div>
                          <p className="font-semibold mb-2 text-lg">Telegram:</p>
                          <a href="https://t.me/SyriaVoice_Official" className="text-primary dark:text-primary-light hover:underline text-lg transition-colors" target="_blank" rel="noopener noreferrer">
                            @SyriaVoice_Official
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">14.2 ساعات العمل | Working Hours</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>الأحد - الخميس: 9:00 ص - 6:00 م (توقيت دمشق)</li>
                      <li>الجمعة - السبت: حسب الحاجة</li>
                      <li>نقدم الدعم على مدار الساعة للقضايا الحرجة</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      Sunday - Thursday: 9:00 AM - 6:00 PM (Damascus Time). Friday - Saturday: As needed. We provide 24/7 support for critical issues.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">15. الختام | Conclusion</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">15.1 التزامنا | Our Commitment</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                      نلتزم بـ:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 text-lg transition-colors">
                      <li>حماية خصوصية المستخدمين</li>
                      <li>توفير خدمة آمنة وموثوقة</li>
                      <li>الشفافية في جميع عملياتنا</li>
                      <li>تطوير التطبيق باستمرار</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      We are committed to: Protecting user privacy, providing a secure and reliable service, transparency in all our operations, and continuous app development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">15.2 رؤيتنا | Our Vision</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      نؤمن بأن كل صوت يهم، ونسعى لبناء مستقبل أفضل ل<span className="text-primary dark:text-primary-light font-semibold">سوريا</span> من خلال التكنولوجيا والمشاركة المدنية.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors mt-4">
                      We believe that every voice matters, and we strive to build a better future for Syria through technology and civic participation.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                    © 2025 صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> - Syria Voice. جميع الحقوق محفوظة.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 transition-colors">
                    هذه الشروط مكتوبة باللغات العربية والإنجليزية لضمان الوضوح والفهم الكامل لجميع المستخدمين.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 transition-colors">
                    These terms are written in Arabic and English to ensure clarity and full understanding for all users.
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
