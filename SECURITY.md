# 🔐 دليل الأمان - Security Guide

## ⚠️ تحذير مهم - Important Warning

**لا ترفع المفاتيح الحساسة إلى Git أبداً!**
**Never commit sensitive keys to Git!**

## 🔑 المفاتيح المطلوبة

يحتاج الموقع إلى المفاتيح التالية:

### Supabase Keys
- `NEXT_PUBLIC_SUPABASE_URL` - رابط مشروع Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - مفتاح Supabase العام

## 📝 إعداد المفاتيح

### 1. إنشاء ملف `.env.local`

```bash
# انسخ ملف .env.example
cp .env.example .env.local

# أو أنشئ ملف .env.local جديد
touch .env.local
```

### 2. إضافة المفاتيح

افتح ملف `.env.local` وأضف المفاتيح الحقيقية:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. الحصول على المفاتيح

1. اذهب إلى [Supabase Dashboard](https://supabase.com/dashboard)
2. اختر مشروعك
3. اذهب إلى Settings → API
4. انسخ `Project URL` و `anon public` key

## 🛡️ حماية المفاتيح

### ✅ ما يجب فعله:

1. **استخدم `.env.local` فقط** - هذا الملف محمي في `.gitignore`
2. **لا ترفع `.env.local` إلى Git** - تأكد من أنه في `.gitignore`
3. **استخدم مفاتيح مختلفة** للإنتاج والتطوير
4. **غيّر المفاتيح فوراً** إذا تم تسريبها

### ❌ ما لا يجب فعله:

1. ❌ **لا تضع المفاتيح في الكود المصدري**
2. ❌ **لا ترفع ملفات `.env` إلى Git**
3. ❌ **لا تشارك المفاتيح في الرسائل أو المحادثات**
4. ❌ **لا تستخدم نفس المفاتيح في مشاريع متعددة**

## 🔍 التحقق من الأمان

### فحص Git History

إذا كنت تعتقد أن المفاتيح تم تسريبها في Git history:

```bash
# فحص Git history للمفاتيح
git log --all --source -S "supabase.co" -- "*.ts" "*.tsx" "*.js" "*.jsx" "*.md"

# فحص الملفات الحالية
grep -r "https://.*\.supabase\.co" --exclude-dir=node_modules
```

### تنظيف Git History (إذا لزم الأمر)

⚠️ **تحذير**: هذا سيغير Git history - استخدم بحذر!

```bash
# حذف المفاتيح من Git history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env .env.local" \
  --prune-empty --tag-name-filter cat -- --all

# دفع التغييرات (فقط إذا كنت متأكداً)
git push origin --force --all
```

## 🌐 النشر على Vercel/Netlify

### ⚠️ مهم جداً: استخدام Environment Variables

**لا تضع المفاتيح في الكود المصدري أبداً!** يجب استخدام Environment Variables في منصة النشر.

### Vercel

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard) → مشروعك
2. اذهب إلى **Settings** → **Environment Variables**
3. أضف المفاتيح:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://your-project-id.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `your-anon-key-here`
   - `NEXT_PUBLIC_SITE_URL` = `https://voicesyria.com` (اختياري)
4. اختر Environment (Production, Preview, Development)
5. احفظ التغييرات
6. **أعد نشر الموقع** (Redeploy) لتطبيق المتغيرات الجديدة

### Netlify

1. اذهب إلى [Netlify Dashboard](https://app.netlify.com) → موقعك
2. اذهب إلى **Site Settings** → **Environment Variables**
3. أضف المفاتيح بنفس الطريقة
4. احفظ التغييرات
5. **أعد نشر الموقع** لتطبيق المتغيرات الجديدة

### 📖 للمزيد من التفاصيل

راجع ملف `DEPLOYMENT_ENV.md` للتعليمات الكاملة.

## 🔄 تغيير المفاتيح المسربة

إذا تم تسريب المفاتيح:

1. **غيّر المفاتيح فوراً** في Supabase Dashboard
2. **حدّث `.env.local`** بالمفاتيح الجديدة
3. **أعد نشر الموقع** على Vercel/Netlify
4. **نظّف Git history** إذا لزم الأمر

## 📚 موارد إضافية

- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/platform/security)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)

## 🆘 في حالة الطوارئ

إذا تم تسريب المفاتيح:

1. **غيّر المفاتيح فوراً** في Supabase Dashboard
2. **راجع سجلات الوصول** في Supabase Dashboard
3. **اتصل بالدعم** إذا لزم الأمر

---

**آخر تحديث**: 2025-01-XX
**Last Updated**: 2025-01-XX

