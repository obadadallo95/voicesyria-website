# 🔐 إعداد متغيرات البيئة - Environment Variables Setup

## ⚠️ تحذير أمني

**لا ترفع المفاتيح الحساسة إلى Git أبداً!**
**Never commit sensitive keys to Git!**

## 📝 الخطوات

### 1. إنشاء ملف `.env.local`

في جذر المشروع، أنشئ ملف `.env.local`:

```bash
# في Linux/Mac
touch .env.local

# في Windows
type nul > .env.local
```

### 2. إضافة المفاتيح

افتح ملف `.env.local` وأضف المفاتيح التالية:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Site URL (اختياري)
NEXT_PUBLIC_SITE_URL=https://voicesyria.com

# Rate Limiting (اختياري)
RATE_LIMIT_MAX_REQUESTS=60
```

### 3. الحصول على مفاتيح Supabase

1. اذهب إلى [Supabase Dashboard](https://supabase.com/dashboard)
2. اختر مشروعك
3. اذهب إلى **Settings** → **API**
4. انسخ:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. التحقق

بعد إضافة المفاتيح، أعد تشغيل خادم التطوير:

```bash
npm run dev
```

يجب أن يعمل الموقع بدون أخطاء.

## 🚀 للنشر على Vercel/Netlify

راجع ملف `DEPLOYMENT_ENV.md` للتعليمات الكاملة.

## ✅ قائمة التحقق

- [ ] تم إنشاء ملف `.env.local`
- [ ] تم إضافة جميع المفاتيح المطلوبة
- [ ] ملف `.env.local` موجود في `.gitignore` (يجب أن يكون محمياً تلقائياً)
- [ ] تم اختبار الموقع محلياً
- [ ] تم إضافة المفاتيح في Vercel/Netlify للنشر

---

**ملاحظة**: ملف `.env.local` محمي في `.gitignore` ولن يُرفع إلى Git.

