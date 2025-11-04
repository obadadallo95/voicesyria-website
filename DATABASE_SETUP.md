# إعداد قاعدة البيانات - Database Setup

## ملاحظات مهمة - Important Notes

### 1. جدول التبرعات - Donations Table

يجب أن يكون جدول `donations` في قاعدة البيانات Supabase يحتوي على الأعمدة التالية:

The `donations` table in your Supabase database should have the following columns:

```sql
CREATE TABLE IF NOT EXISTS donations (
  id BIGSERIAL PRIMARY KEY,
  donor_name VARCHAR(200),
  is_anonymous BOOLEAN DEFAULT true,
  currency VARCHAR(10) NOT NULL, -- 'bitcoin', 'ethereum', 'solana', 'paypal'
  declared_amount DECIMAL(10, 2), -- المبلغ المُعلن
  actual_amount DECIMAL(10, 2), -- المبلغ الفعلي المحول
  amount DECIMAL(10, 2) NOT NULL, -- المبلغ المسجل (الفعلي)
  transaction_hash VARCHAR(255), -- رقم المعاملة (اختياري)
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'verified', 'unverified'
  verification_note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 2. إعدادات Row Level Security (RLS)

يجب أن تكون السياسات التالية مفعلة:

The following RLS policies should be enabled:

```sql
-- السماح للجميع بقراءة التبرعات المُتحقق منها
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view verified donations" ON donations;
CREATE POLICY "Anyone can view verified donations" ON donations
  FOR SELECT USING (status = 'verified');

-- السماح للجميع بإدراج تبرعات جديدة
DROP POLICY IF EXISTS "Anyone can insert donations" ON donations;
CREATE POLICY "Anyone can insert donations" ON donations
  FOR INSERT WITH CHECK (true);
```

### 3. متغيرات البيئة - Environment Variables

قم بإنشاء ملف `.env.local` في جذر المشروع:

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://cljksetjseqnaragtlvb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsamtzZXRqc2VxbmFyYWd0bHZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3OTkzMjQsImV4cCI6MjA3NTM3NTMyNH0.cNu0az1z_xbragHobZmgihb1O10DeNMthdyDlu4hAa8
```

⚠️ **مهم**: لا تشارك ملف `.env.local` أبداً! - **Important**: Never share your `.env.local` file!

### 4. التحقق من الجداول - Verify Tables

تأكد من وجود الجداول التالية في قاعدة البيانات:

Make sure the following tables exist in your database:

- ✅ `donations` - جدول التبرعات
- ✅ `daily_votes` - جدول التصويتات اليومية
- ✅ `user_preferences` - جدول تفضيلات المستخدمين
- ✅ `governorates` - جدول المحافظات

### 5. اختبار الاتصال - Test Connection

يمكنك اختبار الاتصال بقاعدة البيانات من خلال:

You can test the database connection by:

1. زيارة `/api/stats` - يجب أن تعرض الإحصائيات
2. زيارة `/api/donations` - يجب أن تعرض التبرعات

إذا كانت هناك أخطاء، تحقق من:
- متغيرات البيئة في `.env.local`
- سياسات RLS في Supabase
- وجود الجداول في قاعدة البيانات

If there are errors, check:
- Environment variables in `.env.local`
- RLS policies in Supabase
- Table existence in the database

