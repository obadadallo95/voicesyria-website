# متطلبات قاعدة البيانات - Database Requirements

## 📋 المعلومات المطلوبة

### 1. معلومات Supabase ✅ (موجودة)
- **URL**: `YOUR_SUPABASE_URL_HERE` (احصل عليه من [Supabase Dashboard](https://supabase.com/dashboard) → مشروعك → Settings → API)
- **Anon Key**: `YOUR_SUPABASE_ANON_KEY_HERE` (احصل عليه من [Supabase Dashboard](https://supabase.com/dashboard) → مشروعك → Settings → API)

### 2. الجداول المطلوبة في قاعدة البيانات

#### ✅ جداول موجودة (يجب التحقق منها):

**أ) جدول `governorates`**
```sql
CREATE TABLE IF NOT EXISTS governorates (
  id SERIAL PRIMARY KEY,
  name_ar VARCHAR(100) NOT NULL,
  name_en VARCHAR(100) NOT NULL,
  name_ku VARCHAR(100) NOT NULL,
  slogan TEXT,
  avg_rate DECIMAL(5,2) DEFAULT 0.0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**ب) جدول `daily_votes`**
```sql
CREATE TABLE IF NOT EXISTS daily_votes (
  id SERIAL PRIMARY KEY,
  device_hash VARCHAR(64) NOT NULL,
  governorate_id INTEGER REFERENCES governorates(id),
  rate INTEGER CHECK (rate >= 0 AND rate <= 100),
  chips VARCHAR(50),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**ج) جدول `user_preferences`**
```sql
CREATE TABLE IF NOT EXISTS user_preferences (
  id SERIAL PRIMARY KEY,
  device_hash VARCHAR(64) UNIQUE NOT NULL,
  user_gov INTEGER REFERENCES governorates(id),
  language VARCHAR(5) DEFAULT 'ar',
  theme VARCHAR(20) DEFAULT 'light',
  notifications BOOLEAN DEFAULT true,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**د) جدول `donations`** ⚠️ **يحتاج إلى إنشاء**
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

#### ⚠️ Row Level Security (RLS) Policies المطلوبة:

**للجدول `donations`:**
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

**للجداول الأخرى:**
- `governorates`: يجب أن يكون SELECT مفتوح للجميع
- `daily_votes`: يجب أن يكون SELECT مفتوح للجميع (للإحصائيات)
- `user_preferences`: يجب أن يكون SELECT مفتوح للجميع (للإحصائيات)

### 3. إعداد ملف `.env.local`

**الخطوة الأولى**: إنشاء ملف `.env.local` في مجلد المشروع:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL_HERE
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY_HERE
```

⚠️ **مهم**: احصل على هذه المفاتيح من [Supabase Dashboard](https://supabase.com/dashboard) → مشروعك → Settings → API

### 4. التحقق من الجداول

**تحقق من وجود الجداول التالية:**
- ✅ `governorates` - يجب أن يحتوي على 14 محافظة سورية
- ✅ `daily_votes` - يجب أن يحتوي على التصويتات
- ✅ `user_preferences` - يجب أن يحتوي على بيانات المستخدمين
- ❓ `donations` - **يحتاج إلى التحقق من وجوده**

### 5. البيانات الثابتة (لا تحتاج قاعدة بيانات)

هذه البيانات صحيحة ولا تحتاج قاعدة بيانات:
- ✅ FAQ - محتوى ثابت
- ✅ Timeline - محتوى ثابت
- ✅ How It Works - محتوى ثابت
- ✅ Features - محتوى ثابت (وصف الميزات)

### 6. البيانات الديناميكية (تحتاج قاعدة بيانات) ✅

- ✅ الإحصائيات (`/api/stats`) - مرتبطة
- ✅ المحافظات (`/api/governorates`) - مرتبطة
- ✅ التبرعات (`/api/donations`) - مرتبطة

## 📝 قائمة التحقق

### قبل البدء:
- [ ] إنشاء ملف `.env.local` مع متغيرات Supabase
- [ ] التحقق من وجود جدول `donations` في قاعدة البيانات
- [ ] التحقق من RLS Policies للجداول
- [ ] التحقق من وجود بيانات في الجداول

### بعد الإعداد:
- [ ] اختبار `/api/stats` - يجب أن يعرض الإحصائيات
- [ ] اختبار `/api/governorates` - يجب أن يعرض المحافظات
- [ ] اختبار `/api/donations` - يجب أن يعرض التبرعات
- [ ] اختبار صفحة `/stats` - يجب أن تعرض البيانات
- [ ] اختبار صفحة `/donations` - يجب أن تعرض البيانات

## 🔧 إصلاح الأخطاء

إذا ظهرت أخطاء `TypeError: fetch failed`:
1. تأكد من وجود ملف `.env.local`
2. تأكد من صحة متغيرات البيئة
3. أعد تشغيل الخادم (`npm run dev`)
4. تحقق من اتصال قاعدة البيانات

