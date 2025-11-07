import { MetadataRoute } from 'next';

/**
 * 🗺️ Sitemap Generator
 * يتم إنشاؤه تلقائياً عند البناء
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://voicesyria.com';
  
  // الصفحات الرئيسية
  const routes = [
    '',
    '/features',
    '/download',
    '/about',
    '/contact',
    '/support',
    '/donations',
    '/stats',
    '/faq',
    '/how-it-works',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
