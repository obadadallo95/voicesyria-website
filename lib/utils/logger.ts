/**
 * 📊 نظام Logging آمن واحترافي
 * Secure Professional Logging System
 * 
 * الميزات:
 * - إخفاء المعلومات الحساسة
 * - مستويات مختلفة (info, warn, error)
 * - تنسيق موحد للرسائل
 * - دعم البيئات المختلفة
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: string;
  data?: any;
  stack?: string;
}

/**
 * إخفاء المعلومات الحساسة من البيانات
 */
function sanitizeData(data: any): any {
  if (!data) return data;

  const sensitiveKeys = [
    'password',
    'token',
    'secret',
    'api_key',
    'apikey',
    'authorization',
    'cookie',
    'session',
    'private',
    'key',
  ];

  if (typeof data === 'object') {
    const sanitized = Array.isArray(data) ? [...data] : { ...data };

    for (const key in sanitized) {
      const lowerKey = key.toLowerCase();
      
      // إخفاء المفاتيح الحساسة
      if (sensitiveKeys.some(sensitive => lowerKey.includes(sensitive))) {
        sanitized[key] = '***REDACTED***';
      } else if (typeof sanitized[key] === 'object') {
        // معالجة العناصر المتداخلة
        sanitized[key] = sanitizeData(sanitized[key]);
      }
    }

    return sanitized;
  }

  return data;
}

/**
 * تنسيق رسالة Log
 */
function formatLog(entry: LogEntry): string {
  const { timestamp, level, message, context, data, stack } = entry;
  
  let log = `[${timestamp}] [${level.toUpperCase()}]`;
  
  if (context) {
    log += ` [${context}]`;
  }
  
  log += ` ${message}`;
  
  if (data) {
    log += `\nData: ${JSON.stringify(sanitizeData(data), null, 2)}`;
  }
  
  if (stack && process.env.NODE_ENV !== 'production') {
    log += `\nStack: ${stack}`;
  }
  
  return log;
}

/**
 * Logger Class
 */
class Logger {
  private context?: string;
  private isDevelopment: boolean;

  constructor(context?: string) {
    this.context = context;
    this.isDevelopment = process.env.NODE_ENV !== 'production';
  }

  /**
   * معلومات عامة
   */
  info(message: string, data?: any): void {
    this.log('info', message, data);
  }

  /**
   * تحذيرات
   */
  warn(message: string, data?: any): void {
    this.log('warn', message, data);
  }

  /**
   * أخطاء
   */
  error(message: string, error?: Error | any, data?: any): void {
    const logData = {
      ...data,
      errorMessage: error?.message,
      errorName: error?.name,
    };

    this.log('error', message, logData, error?.stack);
  }

  /**
   * معلومات تطوير فقط
   */
  debug(message: string, data?: any): void {
    if (this.isDevelopment) {
      this.log('debug', message, data);
    }
  }

  /**
   * تسجيل عام
   */
  private log(level: LogLevel, message: string, data?: any, stack?: string): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context: this.context,
      data: data ? sanitizeData(data) : undefined,
      stack,
    };

    const formattedLog = formatLog(entry);

    // اختيار طريقة العرض حسب المستوى
    switch (level) {
      case 'error':
        console.error(formattedLog);
        // هنا يمكن إضافة إرسال إلى خدمة مثل Sentry
        this.sendToExternalService(entry);
        break;
      case 'warn':
        console.warn(formattedLog);
        break;
      case 'debug':
        if (this.isDevelopment) {
          console.debug(formattedLog);
        }
        break;
      default:
        console.log(formattedLog);
    }
  }

  /**
   * إرسال الأخطاء الحرجة لخدمة خارجية (Sentry، LogRocket، إلخ)
   */
  private sendToExternalService(entry: LogEntry): void {
    // في الإنتاج، يمكن إرسال الأخطاء لـ Sentry أو خدمة مشابهة
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
      // TODO: تكامل مع Sentry
      // Sentry.captureException(entry);
    }
  }
}

/**
 * إنشاء logger مع سياق
 */
export function createLogger(context: string): Logger {
  return new Logger(context);
}

/**
 * Logger افتراضي
 */
export const logger = new Logger();

/**
 * دالة مساعدة لتسجيل طلبات API
 */
export function logAPIRequest(
  method: string,
  path: string,
  statusCode: number,
  duration: number,
  error?: Error
): void {
  const apiLogger = createLogger('API');
  
  const data = {
    method,
    path,
    statusCode,
    duration: `${duration}ms`,
  };

  if (error) {
    apiLogger.error('API Request Failed', error, data);
  } else if (statusCode >= 400) {
    apiLogger.warn('API Request Warning', data);
  } else {
    apiLogger.info('API Request Success', data);
  }
}

/**
 * دالة مساعدة لتسجيل أخطاء التطبيق
 */
export function logAppError(
  component: string,
  error: Error,
  additionalData?: any
): void {
  const appLogger = createLogger(component);
  appLogger.error('Application Error', error, additionalData);
}

export default Logger;
