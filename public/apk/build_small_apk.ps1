# بناء APK أصغر للأجهزة الحديثة فقط (64-bit)
# Build smaller APK for modern devices only (64-bit)

Write-Host "بناء APK أصغر للأجهزة الحديثة فقط..." -ForegroundColor Green
Write-Host "Building smaller APK for modern devices only..." -ForegroundColor Green

# بناء APK للأجهزة الحديثة فقط (arm64-v8a)
flutter build apk --release --target-platform android-arm64 `
  --dart-define=SUPABASE_URL=YOUR_SUPABASE_URL `
  --dart-define=SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY `
  --dart-define=GROQ_API_KEY=YOUR_GROQ_API_KEY `
  --dart-define=FCM_SERVER_KEY=YOUR_FCM_SERVER_KEY

Write-Host "تم الانتهاء من البناء!" -ForegroundColor Green
Write-Host "Build completed!" -ForegroundColor Green

# حجم النتيجة: ~25 MB (بدلاً من 68 MB)
# لكن لا يعمل على الأجهزة القديمة (32-bit)

# انسخ APK إلى مجلد الموقع
Copy-Item -Path "build\app\outputs\flutter-apk\app-release.apk" -Destination "c:\Users\obada\voicesyria-website\public\apk\souria_voice_small.apk" -Force

Write-Host "تم نسخ APK الصغير إلى مجلد الموقع!" -ForegroundColor Green
Write-Host "Small APK copied to website folder!" -ForegroundColor Green

Write-Host "تحذير: هذا APK لا يعمل على الأجهزة القديمة (32-bit)!" -ForegroundColor Yellow
Write-Host "Warning: This APK won't work on older devices (32-bit)!" -ForegroundColor Yellow
