import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PersonJsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/data/site";
import { author } from "@/data/books";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Shailendra Srivastava | Author, Researcher & Diamond Professional",
    template: "%s | Shailendra Srivastava",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: author.name, url: siteConfig.domain }],
  creator: author.name,
  publisher: author.name,
  applicationName: "Shailendra Srivastava — Author Website",
  category: "Literature & Author",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteConfig.domain,
    siteName: "Shailendra Srivastava",
    title: "Shailendra Srivastava | Author, Researcher & Diamond Professional",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${author.name} — ${author.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailendra Srivastava | Author, Researcher & Diamond Professional",
    description: siteConfig.description,
    creator: "@shailendraauthor",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: "#0e0e0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased font-body bg-background text-foreground min-h-screen flex flex-col`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-2 focus:left-2 focus:bg-gold focus:text-black focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
        <PersonJsonLd />
      </body>
    </html>
  );
}
