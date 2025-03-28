import type { Metadata } from "next";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Contrast Color Palette",
  description:
    "A tool that generates a color palette with a contrast ratio. Perfect for designers and developers who need accessible color combinations.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  keywords: ["color palette", "contrast ratio", "accessibility", "web design", "color tool", "WCAG", "color generator"],
  authors: [{ name: "imaimai17468" }],
  creator: "imaimai17468",
  publisher: "imaimai17468",
  openGraph: {
    title: "Contrast Color Palette - Accessible Color Combinations",
    description:
      "Generate beautiful color palettes with optimal contrast ratios for accessible web design. Perfect for designers and developers.",
    url: "https://contrast-color-palette.vercel.app/",
    siteName: "Contrast Color Palette",
    images: [
      {
        url: "/image/ogp.png",
        width: 1200,
        height: 630,
        alt: "Contrast Color Palette Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrast Color Palette - Accessible Color Combinations",
    description: "Generate beautiful color palettes with optimal contrast ratios for accessible web design.",
    images: ["/image/ogp.png"],
    creator: "@imaimai17468",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
        <Analytics />
      </body>
    </html>
  );
}
