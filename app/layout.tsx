import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "صوت سوريا - Syria Voice | تطبيق التصويت اليومي والخدمات الحكومية",
  description: "تطبيق صوت سوريا - منصة التصويت اليومي الآمنة والخدمات الحكومية للمواطنين السوريين. حمّل التطبيق الآن",
  keywords: "صوت سوريا, Syria Voice, تطبيق التصويت, الخدمات الحكومية, سوريا",
  authors: [{ name: "Syria Voice Team" }],
  openGraph: {
    title: "صوت سوريا - Syria Voice",
    description: "تطبيق التصويت اليومي الآمن والخدمات الحكومية",
    type: "website",
    locale: "ar_AR",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${cairo.variable} antialiased font-sans`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
