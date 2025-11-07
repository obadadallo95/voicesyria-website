/**
 * 🔒 نظام Rate Limiting لحماية API Routes
 * Rate Limiting System for API Routes Protection
 * 
 * يحمي من:
 * - هجمات DDoS
 * - إساءة استخدام API
 * - الطلبات المتكررة المشبوهة
 */

interface RateLimitConfig {
  interval: number; // الفترة الزمنية بالميلي ثانية
  maxRequests: number; // عدد الطلبات المسموح بها
}

interface RateLimitStore {
  count: number;
  resetTime: number;
}

// تخزين مؤقت للطلبات (في الإنتاج، استخدم Redis)
const requestStore = new Map<string, RateLimitStore>();

/**
 * التحقق من معدل الطلبات
 * @param identifier - معرف فريد (IP أو User ID)
 * @param config - إعدادات Rate Limiting
 * @returns true إذا كان مسموحاً، false إذا تجاوز الحد
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = {
    interval: 60 * 1000, // دقيقة واحدة
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '60'),
  }
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = requestStore.get(identifier);

  // إذا لم يكن هناك سجل أو انتهت المدة
  if (!record || now > record.resetTime) {
    const resetTime = now + config.interval;
    requestStore.set(identifier, { count: 1, resetTime });
    
    // تنظيف السجلات القديمة
    cleanupOldRecords(now);
    
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime,
    };
  }

  // زيادة العداد
  record.count++;

  // التحقق من تجاوز الحد
  if (record.count > config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  return {
    allowed: true,
    remaining: config.maxRequests - record.count,
    resetTime: record.resetTime,
  };
}

/**
 * تنظيف السجلات القديمة لتوفير الذاكرة
 */
function cleanupOldRecords(now: number): void {
  for (const [key, record] of requestStore.entries()) {
    if (now > record.resetTime) {
      requestStore.delete(key);
    }
  }
}

/**
 * الحصول على IP من الطلب
 * @param headers - Headers من NextRequest
 * @returns IP address
 */
export function getClientIP(headers: Headers): string {
  // محاولة الحصول على IP من headers مختلفة
  const forwarded = headers.get('x-forwarded-for');
  const realIP = headers.get('x-real-ip');
  const cfConnectingIP = headers.get('cf-connecting-ip'); // Cloudflare
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  return 'unknown';
}

/**
 * إعادة تعيين rate limit لمعرف معين (للاختبار)
 */
export function resetRateLimit(identifier: string): void {
  requestStore.delete(identifier);
}

/**
 * مسح جميع سجلات rate limiting (للاختبار)
 */
export function clearAllRateLimits(): void {
  requestStore.clear();
}
