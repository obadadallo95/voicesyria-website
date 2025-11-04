"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import SocialLinks from "@/components/SocialLinks";

export default function SupportPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    category: "general",
    subject: "",
    message: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Create report text
      const reportText = `Category: ${formData.category}\nSubject: ${formData.subject}\nMessage: ${formData.message}\nEmail: ${formData.email || 'Not provided'}`;
      
      // Copy to clipboard
      navigator.clipboard.writeText(reportText);
      
      setFormData({ category: "general", subject: "", message: "", email: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const categories = [
    { value: "general", label: { ar: "عام", en: "General", ku: "Giştî" } },
    { value: "bug", label: { ar: "خطأ", en: "Bug", ku: "Çewtî" } },
    { value: "feature", label: { ar: "ميزة", en: "Feature Request", ku: "Taybetmendî" } },
    { value: "performance", label: { ar: "الأداء", en: "Performance", ku: "Performans" } },
    { value: "ui", label: { ar: "واجهة المستخدم", en: "User Interface", ku: "Dîzayna Bikarhêner" } },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              الدعم الفني | Technical Support
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك | We are here to help you
            </p>
          </div>
        </div>
      </section>

      {/* Support Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Welcome Card */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">
                    مرحباً بك في الدعم الفني | Welcome to Technical Support
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg transition-colors">
                    نحن هنا لمساعدتك. إذا كان لديك مشكلة أو اقتراح، يرجى التواصل معنا.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                    We are here to help you. If you have a problem or suggestion, please contact us.
                  </p>
                </div>
              </div>
              <div className="bg-primary/10 dark:bg-primary-light/10 rounded-lg p-4 mt-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary dark:text-primary-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-primary dark:text-primary-light font-semibold text-lg">
                    نرد خلال 24 ساعة | We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                التواصل السريع | Quick Contact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <a
                  href="mailto:info@voicesyria.com?subject=دعم فني - صوت سوريا"
                  className="card-modern dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer group"
                >
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors">
                      البريد الإلكتروني | Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      info@voicesyria.com
                    </p>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/SyriaVoice_Official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-modern dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer group"
                >
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors">
                      Telegram
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      @SyriaVoice_Official
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/obadadallo95/souria_voice/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-modern dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer group"
                >
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors">
                      GitHub
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      الإبلاغ عن خطأ | Report Bug
                    </p>
                  </div>
                </a>

                {/* Social Links */}
                <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors">
                      المجتمع | Community
                    </h3>
                    <div className="mt-4">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Form */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                الإبلاغ عن مشكلة | Report Issue
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors">
                    الفئة | Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors"
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label.ar} | {cat.label.en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors">
                    الموضوع | Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="اكتب موضوع المشكلة | Write the problem subject"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors">
                    الرسالة | Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="اكتب وصف المشكلة بالتفصيل | Write the problem description in detail"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors resize-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors">
                    البريد الإلكتروني (اختياري) | Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="اكتب بريدك الإلكتروني | Write your email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال... | Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        إرسال | Send
                      </>
                    )}
                  </button>
                </div>

                {/* Success/Error Message */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-green-800 dark:text-green-300 text-sm">
                      تم إعداد التقرير ونسخه إلى الحافظة. يرجى إرساله عبر البريد الإلكتروني أو تيليجرام.
                      <br />
                      Report has been prepared and copied to clipboard. Please send it via email or Telegram.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Useful Links */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                الروابط المفيدة | Useful Links
              </h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/obadadallo95/souria_voice/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 dark:bg-primary-light/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20 transition-colors">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">
                      دليل المستخدم | User Guide
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      تعلم كيفية استخدام التطبيق | Learn how to use the app
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary dark:group-hover:text-primary-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://github.com/obadadallo95/souria_voice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 dark:bg-primary-light/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20 transition-colors">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">
                      دليل المطورين | Developer Guide
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      دليل للمطورين والمبرمجين | Guide for developers and programmers
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary dark:group-hover:text-primary-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://github.com/obadadallo95/souria_voice/blob/main/CHANGELOG.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 dark:bg-primary-light/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20 transition-colors">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">
                      سجل التغييرات | Changelog
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      آخر التحديثات والتغييرات | Latest updates and changes
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary dark:group-hover:text-primary-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

