"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (you can integrate with your backend here)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('nav_contact')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو دعم
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">معلومات الاتصال</h2>
              
              <div className="space-y-6">
                <div className="card-modern dark:bg-gray-800 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">البريد الإلكتروني</h3>
                      <a href="mailto:info@voicesyria.com" className="text-primary dark:text-primary-light hover:underline text-lg font-semibold transition-colors">
                        info@voicesyria.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-modern dark:bg-gray-800 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">الموقع الإلكتروني</h3>
                      <a href="https://voicesyria.com" className="text-primary dark:text-primary-light hover:underline text-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                        voicesyria.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-modern dark:bg-gray-800 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">أوقات الاستجابة</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors">
                        نرد على جميع الرسائل خلال 24-48 ساعة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">أرسل رسالة</h2>
              
              <form onSubmit={handleSubmit} className="card-modern dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                      الاسم
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="أدخل اسمك"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="موضوع الرسالة"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 px-5 py-4 rounded-xl">
                      تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-5 py-4 rounded-xl">
                      حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed text-lg py-5"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        إرسال الرسالة
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Social Media Section */}
            <div className="mt-12">
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
                  تابعنا على وسائل التواصل الاجتماعي
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg transition-colors">
                  تواصل معنا عبر حساباتنا الرسمية على وسائل التواصل الاجتماعي
                </p>
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
