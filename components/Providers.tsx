"use client";

import { ThemeProvider } from "@/lib/contexts/ThemeContext";
import { I18nProvider } from "@/lib/i18n/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        {children}
      </I18nProvider>
    </ThemeProvider>
  );
}

