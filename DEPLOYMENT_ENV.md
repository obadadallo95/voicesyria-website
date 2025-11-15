# 🔐 دليل متغيرات البيئة للنشر - Environment Variables Deployment Guide

## ⚠️ تحذير أمني مهم

**لا ترفع المفاتيح الحساسة إلى Git أبداً!**
**Never commit sensitive keys to Git!**

## 📋 المتغيرات المطلوبة

### 1. Supabase Keys (مطلوبة)

هذه المفاتيح مطلوبة لعمل الموقع:

- `NEXT_PUBLIC_SUPABASE_URL` - رابط مشروع Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - مفتاح Supabase العام (Anon Key)

**ملاحظة مهمة**: في Next.js، `NEXT_PUBLIC_` يعني أن هذه المتغيرات تُعرض في client-side bundle. هذا صحيح لـ Supabase Anon Key لأنه يُستخدم في المتصفح.

### 2. Site URL (اختياري)

- `NEXT_PUBLIC_SITE_URL` - رابط الموقع (افتراضي: `https://voicesyria.com`)

### 3. Rate Limiting (اختياري)

- `RATE_LIMIT_MAX_REQUESTS` - عدد الطلبات المسموحة (افتراضي: `60`)

## 🚀 النشر على Vercel

### الخطوة 1: إضافة Environment Variables

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اختر مشروعك
3. اذهب إلى **Settings** → **Environment Variables**
4. أضف المتغيرات التالية:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_SITE_URL=https://voicesyria.com
```

### الخطوة 2: اختيار البيئة

لكل متغير، اختر البيئة المناسبة:
- ✅ **Production** - للإنتاج
- ✅ **Preview** - للمعاينة (اختياري)
- ✅ **Development** - للتطوير (اختياري)

### الخطوة 3: إعادة النشر

بعد إضافة المتغيرات:
1. اذهب إلى **Deployments**
2. اختر آخر deployment
3. اضغط على **Redeploy** لإعادة النشر مع المتغيرات الجديدة

## 🌐 النشر على Netlify

### الخطوة 1: إضافة Environment Variables

1. اذهب إلى [Netlify Dashboard](https://app.netlify.com)
2. اختر موقعك
3. اذهب إلى **Site Settings** → **Environment Variables**
4. أضف المتغيرات بنفس الطريقة

### الخطوة 2: إعادة النشر

بعد إضافة المتغيرات، أعد نشر الموقع.

## 🔄 تغيير المفاتيح المسربة

إذا تم تسريب المفاتيح:

### 1. تغيير المفاتيح في Supabase

1. اذهب إلى [Supabase Dashboard](https://supabase.com/dashboard)
2. اختر مشروعك
3. اذهب إلى **Settings** → **API**
4. اضغط على **Reset** بجانب المفتاح الذي تريد تغييره
5. انسخ المفاتيح الجديدة

### 2. تحديث Environment Variables

1. في Vercel/Netlify، حدّث المتغيرات بالمفاتيح الجديدة
2. أعد نشر الموقع

### 3. تنظيف Git History (إذا لزم الأمر)

إذا كانت المفاتيح في Git history:

```bash
# تحذير: هذا سيغير Git history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env .env.local" \
  --prune-empty --tag-name-filter cat -- --all

# دفع التغييرات (فقط إذا كنت متأكداً)
git push origin --force --all
```

## 🔍 التحقق من الأمان

### فحص الملفات الحالية

```bash
# فحص وجود مفاتيح مكشوفة
grep -r "https://.*\.supabase\.co" --exclude-dir=node_modules --exclude-dir=.next
grep -r "eyJ[a-zA-Z0-9_-]\{20,\}" --exclude-dir=node_modules --exclude-dir=.next
```

### فحص Git History

```bash
# فحص Git history للمفاتيح
git log --all --source -S "supabase.co" -- "*.ts" "*.tsx" "*.js" "*.jsx"
```

## ✅ قائمة التحقق

قبل النشر، تأكد من:

- [ ] جميع المفاتيح موجودة في Environment Variables في Vercel/Netlify
- [ ] لا توجد مفاتيح مكشوفة في الكود المصدري
- [ ] ملف `.env.local` موجود في `.gitignore`
- [ ] تم تغيير المفاتيح القديمة إذا تم تسريبها
- [ ] تم إعادة نشر الموقع بعد تحديث المفاتيح

## 📚 موارد إضافية

- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/platform/security)

---

**آخر تحديث**: 2025-01-XX
**Last Updated**: 2025-01-XX

