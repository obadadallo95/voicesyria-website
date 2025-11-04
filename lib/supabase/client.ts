import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Supabase environment variables are not set!');
  console.error('Please create a .env.local file with:');
  console.error('NEXT_PUBLIC_SUPABASE_URL=your_url');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key');
}

// Create client - will use actual values if env vars are set, otherwise will fail gracefully
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Helper function to check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey && 
            supabaseUrl !== 'https://placeholder.supabase.co' && 
            supabaseAnonKey !== 'placeholder-key');
}

