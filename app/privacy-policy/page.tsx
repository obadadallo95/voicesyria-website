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
                    <strong>تاريخ آخر تحديث:</strong> نوفمبر 2025
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    <strong>Last Updated:</strong> November 2025
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">1. مقدمة | Introduction</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نحن في تطبيق "صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span>" نلتزم بحماية خصوصيتك وأمان بياناتك. هذه السياسة توضح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.
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
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">2.2 معلومات الاستخدام | Usage Information</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6 text-lg transition-colors">
                      <li>اختيارات المحافظة</li>
                      <li>بيانات التصويت (بدون معلومات شخصية)</li>
                      <li>إحصائيات الاستخدام</li>
                      <li>تفضيلات اللغة والثيم</li>
                      <li>كود الاسترداد الآمن (لحماية بياناتك)</li>
                      <li>معرف الحساب المجهول (Display ID)</li>
                      <li>بيانات الأمان وتتبع النشاط</li>
                      <li>نقاط المستخدم وإنجازاته</li>
                      <li><strong>FCM Token (لإرسال الإشعارات)</strong></li>
                      <li><strong>تفضيلات الإشعارات</strong></li>
                      <li><strong>سجل الإشعارات</strong></li>
                      <li><strong>استعلامات المساعد الذكي (إن كانت تُحفظ)</strong></li>
                      <li><strong>Transaction Hash (للتبرعات المشفرة)</strong></li>
                    </ul>
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
                    <li>النسخ الاحتياطية المشفرة</li>
                    <li>جميع الاتصالات مشفرة (HTTPS/TLS)</li>
                    <li>نظام الحساب المجهول (Anonymous Account System)</li>
                    <li>كود الاسترداد الآمن (SHA-256)</li>
                    <li>حماية Rate Limiting</li>
                    <li>تتبع أنشطة الأمان</li>
                    <li>نظام Trust Score للأمان</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">7. تخزين البيانات | Data Storage</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نحتفظ بالبيانات لمدة:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>بيانات التصويت: 5 سنوات</li>
                    <li>بيانات الاستخدام: 3 سنوات</li>
                    <li>بيانات الدعم الفني: 2 سنوات</li>
                    <li>Device Hash: فترة استخدام التطبيق</li>
                    <li>بيانات المعاملات: 2 سنوات</li>
                    <li><strong>البيانات المحفوظة محلياً: حتى 24 ساعة (للوظائف بدون إنترنت)</strong></li>
                    <li><strong>سجل الإشعارات: سنة واحدة</strong></li>
                    <li><strong>استعلامات المساعد الذكي: لا تُحفظ (تُعالج فقط أثناء الطلب)</strong></li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-lg transition-colors">
                    البيانات مخزنة في خوادم آمنة. البيانات المحفوظة محلياً محمية بالتشفير.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-lg transition-colors">
                    Data is stored on secure servers. Local cached data is protected with encryption.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">8. حقوق المستخدم | User Rights</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    لديك الحق في:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>الوصول إلى بياناتك</li>
                    <li>تصحيح أي معلومات غير دقيقة</li>
                    <li>حذف بياناتك</li>
                    <li>تقييد معالجة بياناتك</li>
                    <li>نسخة من بياناتك</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-lg transition-colors">
                    نستجيب خلال 30 يوماً.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-lg transition-colors">
                    We respond within 30 days.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">9. خصوصية الأطفال | Children's Privacy</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نحن لا نجمع معلومات شخصية من الأطفال دون سن 13.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    إذا اكتشفنا جمع معلومات من طفل، سنحذفها فوراً.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                    نشجع الآباء على مراقبة استخدام أطفالهم للتطبيق.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-lg transition-colors">
                    We do NOT collect personal information from children under 13. If we discover collection of information from a child, we will delete it immediately. We encourage parents to monitor their children's use of the app.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">10. التحديثات على سياسة الخصوصية | Privacy Policy Updates</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    سنقوم بإشعارك بالتغييرات عبر:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>إشعار في التطبيق</li>
                    <li>رسالة بريد إلكتروني</li>
                    <li>تحديث على موقعنا الإلكتروني</li>
                    <li>منشور على وسائل التواصل الاجتماعي</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-lg transition-colors">
                    ننصح بمراجعة هذه السياسة دورياً.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-lg transition-colors">
                    We will notify you of policy changes via: In-app notification, Email message, Website update, Social media post. We recommend reviewing this policy periodically.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">11. النظام الأساسي للحساب المجهول | Core Anonymous Account System</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    النظام الأساسي للحساب المجهول:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>إنشاء الحساب التلقائي: عند اختيارك للمحافظة، يتم إنشاء حساب جديد تلقائياً</li>
                    <li>كود الاسترداد الآمن: يتم إنشاء كود استرداد آمن لحماية بياناتك</li>
                    <li>معرف الحساب المجهول (Display ID): معرف فريد لحسابك</li>
                    <li>حماية Rate Limiting: منع المحاولات المفرطة للأمان</li>
                    <li>تتبع أنشطة الأمان: تسجيل جميع أنشطة الأمان</li>
                    <li>نظام Trust Score: تقييم أمان حسابك</li>
                    <li>إدارة الأجهزة: إدارة أجهزتك وحماية بياناتك</li>
                    <li>استرداد الحساب: بكود الاسترداد الخاص بك، يمكنك استرداد حسابك</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-lg transition-colors">
                    تم إنشاء هذا النظام لحماية خصوصيتك وأمان بياناتك.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-lg transition-colors">
                    This system was created to protect your privacy and data security.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">12. التبرعات والشفافية المالية | Donations and Financial Transparency</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نحتفظ بمعلومات التبرعات التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                    <li>مبلغ التبرع (بدون معلومات شخصية)</li>
                    <li>تاريخ التبرع</li>
                    <li>نوع العملة</li>
                    <li>حالة التحقق من المعاملة</li>
                    <li><strong>Transaction Hash (للتبرعات المشفرة)</strong></li>
                    <li><strong>اسم المتبرع (إن لم يكن مجهولاً)</strong></li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-lg transition-colors">
                    تُستخدم التبرعات لـ: صيانة الخوادم، تطوير الميزات الجديدة، تحسين الأمان، دعم فريق التطوير.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-lg transition-colors">
                    Donations are used for: Server maintenance, Developing new features, Improving security, Supporting the development team.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">13. نظام الإشعارات | Notifications System</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">13.1 أنواع الإشعارات | Notification Types</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                      <li>الإشعارات المحلية (Local Notifications): إشعارات تُرسل على جهازك</li>
                      <li>الإشعارات الذكية (Smart Notifications): نظام إشعارات ذكي يرسل الإشعارات حسب تفضيلاتك</li>
                      <li>تذكير بالتصويت</li>
                      <li>إشعارات الإنجازات الجديدة</li>
                      <li>تحديثات الخدمات</li>
                      <li>التقارير الأسبوعية</li>
                      <li>تحديثات النظام</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">13.2 تفضيلات الإشعارات | Notification Preferences</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                      <li>يمكنك تخصيص تفضيلات الإشعارات</li>
                      <li>ساعات الهدوء</li>
                      <li>مستوى الأولوية</li>
                      <li>الحد اليومي</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">13.3 بيانات الإشعارات | Notification Data</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                      <li>نجمع FCM Token (Firebase Cloud Messaging) لإرسال الإشعارات</li>
                      <li>نحفظ تفضيلات الإشعارات</li>
                      <li>نحتفظ بسجل الإشعارات لمدة سنة واحدة</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">14. خدمات الطرف الثالث | Third-Party Services</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نستخدم الخدمات التالية من أطراف ثالثة:
                  </p>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                      <li><strong>Groq API:</strong> للمساعد الذكي وتحليل البيانات</li>
                      <li><strong>Firebase Cloud Messaging (FCM):</strong> لإرسال الإشعارات</li>
                      <li><strong>Supabase:</strong> لقاعدة البيانات وخدمات الخلفية</li>
                      <li><strong>HuggingFace API:</strong> لمعالجة اللغة العربية</li>
                    </ul>
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">14.1 حماية البيانات | Data Protection</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg transition-colors">
                      <li>جميع خدمات الطرف الثالث تلتزم بأعلى معايير حماية البيانات</li>
                      <li>لا نشارك بياناتك مع أطراف ثالثة</li>
                      <li>نرسل فقط البيانات الضرورية للخدمة</li>
                      <li>جميع الاتصالات مشفرة (HTTPS/TLS)</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">14.2 مسؤولية الطرف الثالث | Third-Party Liability</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                      لسنا مسؤولين عن الأضرار الناتجة عن استخدام خدمات الطرف الثالث. إذا كانت هناك مشكلة مع خدمة طرف ثالث، سنقوم بإشعارك.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-lg transition-colors">
                      We are not liable for damages resulting from the use of third-party services. If there is an issue with a third-party service, we will notify you.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">15. الاتصال بنا | Contact Us</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    للاستفسارات حول الخصوصية، يرجى التواصل معنا:
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
                        <a href="mailto:info@voicesyria.com" className="text-primary dark:text-primary-light hover:underline text-lg transition-colors">
                          info@voicesyria.com
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
                    نستجيب خلال 48 ساعة. نقدم الدعم باللغات العربية والإنجليزية والكردية.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-lg transition-colors">
                    We respond within 48 hours. We provide support in Arabic, English, and Kurdish.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                    © 2025 صوت <span className="text-primary dark:text-primary-light font-semibold">سوريا</span> - Syria Voice. جميع الحقوق محفوظة.
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
