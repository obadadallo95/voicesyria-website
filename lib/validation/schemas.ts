/**
 * 🛡️ مخططات التحقق من البيانات
 * Data Validation Schemas using Zod
 * 
 * يستخدم لـ:
 * - التحقق من بيانات النماذج
 * - التحقق من طلبات API
 * - حماية من البيانات المشبوهة
 */

import { z } from 'zod';

/**
 * مخطط التبرع
 */
export const donationSchema = z.object({
  donor_name: z
    .string()
    .min(2, { message: 'الاسم يجب أن يكون حرفين على الأقل' })
    .max(100, { message: 'الاسم طويل جداً' })
    .optional()
    .or(z.literal('')),
  
  is_anonymous: z.boolean().default(true),
  
  currency: z.enum(['USD', 'EUR', 'TRY', 'SYP'], {
    message: 'العملة غير مدعومة',
  }).default('USD'),
  
  declared_amount: z
    .number()
    .positive({ message: 'المبلغ يجب أن يكون أكبر من صفر' })
    .max(1000000, { message: 'المبلغ كبير جداً' }),
  
  actual_amount: z
    .number()
    .positive({ message: 'المبلغ يجب أن يكون أكبر من صفر' })
    .max(1000000, { message: 'المبلغ كبير جداً' }),
  
  transaction_hash: z
    .string()
    .min(10, { message: 'رقم المعاملة غير صحيح' })
    .max(200, { message: 'رقم المعاملة طويل جداً' })
    .optional()
    .or(z.literal('')),
});

export type DonationInput = z.infer<typeof donationSchema>;

/**
 * مخطط نموذج الاتصال
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'الاسم يجب أن يكون حرفين على الأقل' })
    .max(100, { message: 'الاسم طويل جداً' }),
  
  email: z
    .string()
    .email({ message: 'البريد الإلكتروني غير صحيح' })
    .max(255, { message: 'البريد الإلكتروني طويل جداً' }),
  
  subject: z
    .string()
    .min(5, { message: 'الموضوع يجب أن يكون 5 أحرف على الأقل' })
    .max(200, { message: 'الموضوع طويل جداً' }),
  
  message: z
    .string()
    .min(10, { message: 'الرسالة يجب أن تكون 10 أحرف على الأقل' })
    .max(2000, { message: 'الرسالة طويلة جداً' }),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * مخطط التصويت
 */
export const voteSchema = z.object({
  rate: z
    .number()
    .int({ message: 'التقييم يجب أن يكون رقماً صحيحاً' })
    .min(0, { message: 'التقييم لا يمكن أن يكون أقل من 0' })
    .max(100, { message: 'التقييم لا يمكن أن يكون أكبر من 100' }),
  
  governorate_id: z
    .number()
    .int({ message: 'معرف المحافظة يجب أن يكون رقماً صحيحاً' })
    .positive({ message: 'معرف المحافظة غير صحيح' }),
  
  device_hash: z
    .string()
    .min(32, { message: 'معرف الجهاز غير صحيح' })
    .max(64, { message: 'معرف الجهاز طويل جداً' }),
});

export type VoteInput = z.infer<typeof voteSchema>;

/**
 * مخطط الإعدادات
 */
export const settingsSchema = z.object({
  language: z.enum(['ar', 'en', 'ku'], {
    message: 'اللغة غير مدعومة',
  }),
  
  theme: z.enum(['light', 'dark', 'system'], {
    message: 'المظهر غير مدعوم',
  }).default('system'),
  
  notifications_enabled: z.boolean().default(true),
});

export type SettingsInput = z.infer<typeof settingsSchema>;

/**
 * دالة مساعدة للتحقق من البيانات
 */
export function validateData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } {
  try {
    const validData = schema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map((err) => err.message);
      return { success: false, errors };
    }
    return { success: false, errors: ['خطأ في التحقق من البيانات'] };
  }
}

/**
 * دالة مساعدة للتحقق من البيانات بشكل آمن (safe parse)
 */
export function safeValidateData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: z.ZodError } {
  return schema.safeParse(data);
}
