# مثال على كيفية بناء APK مع المفاتيح البيئية
# Example of how to build APK with environment keys

# تأكد من وجود ملف .env.local في مجلد المشروع
# Make sure .env.local exists in the project directory

Write-Host "بناء APK النهائي مع المفاتيح البيئية..." -ForegroundColor Green
Write-Host "Building final APK with environment keys..." -ForegroundColor Green

# بناء APK مع المفاتيح (استبدل YOUR_* بمفاتيحك الحقيقية)
# Build APK with keys (replace YOUR_* with your actual keys)
flutter build apk --release `
  --dart-define=SUPABASE_URL=YOUR_SUPABASE_URL `
  --dart-define=SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY `
  --dart-define=GROQ_API_KEY=YOUR_GROQ_API_KEY `
  --dart-define=FCM_SERVER_KEY=YOUR_FCM_SERVER_KEY

# أو لتقليل الحجم - APK للأجهزة الحديثة فقط (64-bit)
# flutter build apk --release --target-platform android-arm64 `
#   --dart-define=SUPABASE_URL=YOUR_SUPABASE_URL `
#   --dart-define=SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY `
#   --dart-define=GROQ_API_KEY=YOUR_GROQ_API_KEY `
#   --dart-define=FCM_SERVER_KEY=YOUR_FCM_SERVER_KEY

# النتيجة: APK أصغر (25 MB بدلاً من 68 MB) لكن لا يعمل على الأجهزة القديمة

Write-Host "تم الانتهاء من البناء!" -ForegroundColor Green
Write-Host "Build completed!" -ForegroundColor Green

# انسخ APK إلى مجلد الموقع
# Copy APK to website folder
Copy-Item -Path "build\app\outputs\flutter-apk\app-release.apk" -Destination "c:\Users\obada\voicesyria-website\public\apk\souria_voice.apk" -Force

Write-Host "تم نسخ APK إلى مجلد الموقع!" -ForegroundColor Green
Write-Host "APK copied to website folder!" -ForegroundColor Green
