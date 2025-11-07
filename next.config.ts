import type { NextConfig } from "next";

/**
 * 🔒 إعدادات الأمان والأداء
 * Next.js Configuration with Security & Performance
 */
const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  
  // ⚡ تحسين الأداء
  reactStrictMode: true,
  
  // 🖼️ تحسين الصور
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // 🔐 Security Headers
  async headers() {
    return [
      {
        // تطبيق على جميع المسارات
        source: '/:path*',
        headers: [
          // 🛡️ Content Security Policy (CSP)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://vercel.live",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // 🔒 HSTS - إجبار HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // 🚫 منع Clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // 🔍 منع MIME Sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // 🌐 التحكم في Referrer
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // 🎯 Permissions Policy
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=(self)',
              'interest-cohort=()',
            ].join(', '),
          },
          // 🛡️ XSS Protection (legacy browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // 🔐 DNS Prefetch Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // إعدادات خاصة بملفات APK
      {
        source: '/apk/:path*.apk',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="souria_voice.apk"',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Enable static export if needed
  // output: 'export',
};

export default nextConfig;
