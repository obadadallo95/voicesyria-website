# تعليمات الإعداد - Setup Instructions

## 📋 المعلومات المطلوبة منك

### 1. ✅ معلومات Supabase (موجودة)

المعلومات التالية موجودة في المشروع الأساسي:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL_HERE
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY_HERE
```

⚠️ **مهم**: احصل على هذه المفاتيح من [Supabase Dashboard](https://supabase.com/dashboard) → مشروعك → Settings → API

### 2. ⚠️ خطوات الإعداد المطلوبة

#### الخطوة 1: إنشاء ملف `.env.local`

في مجلد المشروع `voicesyria-website`، أنشئ ملف `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL_HERE
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY_HERE
```

⚠️ **مهم**: احصل على هذه المفاتيح من [Supabase Dashboard](https://supabase.com/dashboard) → مشروعك → Settings → API

#### الخطوة 2: التحقق من جدول `donations` في Supabase

اذهب إلى [Supabase Dashboard](https://supabase.com/dashboard) → مشروعك → Table Editor

**تحقق من وجود جدول `donations`:**

إذا لم يكن موجوداً، أنشئه باستخدام SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS donations (
  id BIGSERIAL PRIMARY KEY,
  donor_name VARCHAR(200),
  is_anonymous BOOLEAN DEFAULT true,
  currency VARCHAR(10) NOT NULL,
  declared_amount DECIMAL(10, 2),
  actual_amount DECIMAL(10, 2),
  amount DECIMAL(10, 2) NOT NULL,
  transaction_hash VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pending',
  verification_note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### الخطوة 3: إعداد Row Level Security (RLS)

في Supabase Dashboard → Authentication → Policies → `donations`:

```sql
-- تفعيل RLS
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- السماح للجميع بقراءة التبرعات المُتحقق منها
DROP POLICY IF EXISTS "Anyone can view verified donations" ON donations;
CREATE POLICY "Anyone can view verified donations" ON donations
  FOR SELECT USING (status = 'verified');

-- السماح للجميع بإدراج تبرعات جديدة
DROP POLICY IF EXISTS "Anyone can insert donations" ON donations;
CREATE POLICY "Anyone can insert donations" ON donations
  FOR INSERT WITH CHECK (true);
```

#### الخطوة 4: التحقق من الجداول الأخرى

تأكد من وجود الجداول التالية:
- ✅ `governorates` (14 محافظة سورية)
- ✅ `daily_votes`
- ✅ `user_preferences`
- ❓ `donations` (يحتاج التحقق)

#### الخطوة 5: التحقق من RLS Policies للجداول الأخرى

**للجدول `governorates`:**
```sql
-- يجب أن يكون SELECT مفتوح للجميع
DROP POLICY IF EXISTS "Anyone can view governorates" ON governorates;
CREATE POLICY "Anyone can view governorates" ON governorates
  FOR SELECT USING (true);
```

**للجدول `daily_votes`:**
```sql
-- يجب أن يكون SELECT مفتوح للجميع (للإحصائيات)
DROP POLICY IF EXISTS "Anyone can view votes for stats" ON daily_votes;
CREATE POLICY "Anyone can view votes for stats" ON daily_votes
  FOR SELECT USING (true);
```

**للجدول `user_preferences`:**
```sql
-- يجب أن يكون SELECT مفتوح للجميع (للإحصائيات)
DROP POLICY IF EXISTS "Anyone can view user preferences for stats" ON user_preferences;
CREATE POLICY "Anyone can view user preferences for stats" ON user_preferences
  FOR SELECT USING (true);
```

#### الخطوة 6: إعادة تشغيل الخادم

بعد إنشاء ملف `.env.local`:

```bash
# أوقف الخادم (Ctrl+C)
# ثم أعد تشغيله
npm run dev
```

### 3. ✅ اختبار الاتصال

بعد الإعداد، اختبر الصفحات التالية:

1. **الصفحة الرئيسية** (`/`) - يجب أن تعرض الإحصائيات
2. **صفحة الإحصائيات** (`/stats`) - يجب أن تعرض المحافظات
3. **صفحة التبرعات** (`/donations`) - يجب أن تعرض التبرعات

### 4. 🔍 معلومات إضافية قد نحتاجها

إذا كان هناك أخطاء، قد نحتاج:

1. **معلومات الاتصال بقاعدة البيانات:**
   - هل يمكنك الوصول إلى Supabase Dashboard؟
   - هل الجداول موجودة؟

2. **معلومات RLS Policies:**
   - ما هي السياسات الحالية للجداول؟
   - هل تحتاج إلى تعديلها؟

3. **معلومات البيانات:**
   - هل هناك بيانات في الجداول؟
   - هل تحتاج إلى إضافة بيانات تجريبية؟

### 5. 📝 ملاحظات مهمة

- ⚠️ **ملف `.env.local`** يجب أن يكون في مجلد المشروع `voicesyria-website`
- ⚠️ **لا تشارك** ملف `.env.local` أبداً (موجود في `.gitignore`)
- ✅ **الملفات الأخرى** (`.env.example`) يمكن مشاركتها
- ✅ **المفاتيح** التي تبدأ بـ `NEXT_PUBLIC_` يمكن استخدامها في Client Components

## 🆘 إذا واجهت مشاكل

1. **تحقق من ملف `.env.local`** - تأكد من وجوده وصحة المتغيرات
2. **تحقق من Supabase Dashboard** - تأكد من وجود الجداول
3. **تحقق من Console** - ابحث عن أخطاء في Terminal
4. **أعد تشغيل الخادم** - بعد إضافة `.env.local`

## ✅ قائمة التحقق النهائية

- [ ] ملف `.env.local` موجود وصحيح
- [ ] جدول `donations` موجود في قاعدة البيانات
- [ ] RLS Policies مُعدة بشكل صحيح
- [ ] الجداول الأخرى موجودة
- [ ] الخادم يعمل بدون أخطاء
- [ ] الصفحات تعرض البيانات من قاعدة البيانات

