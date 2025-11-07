import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: 'swap',
  preload: true,
  fallback: ['Tahoma', 'Arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://voicesyria.com'),
  title: {
    default: "صوت سوريا - Syria Voice | تطبيق التصويت اليومي والخدمات الحكومية",
    template: "%s | صوت سوريا",
  },
  description: "تطبيق صوت سوريا - منصة التصويت اليومي الآمنة والخدمات الحكومية للمواطنين السوريين. حمّل التطبيق الآن",
  keywords: ["صوت سوريا", "Syria Voice", "تطبيق التصويت", "الخدمات الحكومية", "سوريا", "تصويت يومي", "محافظات سوريا", "خدمات سورية"],
  authors: [{ name: "Syria Voice Team", url: "https://voicesyria.com" }],
  creator: "Syria Voice Team",
  publisher: "Syria Voice",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "صوت سوريا - Syria Voice",
    description: "تطبيق التصويت اليومي الآمن والخدمات الحكومية",
    url: "https://voicesyria.com",
    siteName: "صوت سوريا",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "صوت سوريا - Syria Voice",
      },
    ],
    locale: "ar_AR",
    alternateLocale: ["en_US", "ku_TR"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "صوت سوريا - Syria Voice",
    description: "تطبيق التصويت اليومي الآمن والخدمات الحكومية",
    images: ["/logo.png"],
    creator: "@SyriaVoice",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${cairo.variable} antialiased font-sans overflow-x-hidden`}
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
