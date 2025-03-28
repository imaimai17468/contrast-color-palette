import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { MainLayout } from "@/components/layout/main-layout";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://contrast-color-palette.vercel.app/"),
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
    icon: "/image/icon.png",
    apple: "/image/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
        <Analytics />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Contrast Color Palette",
            description:
              "A tool that generates a color palette with a contrast ratio. Perfect for designers and developers who need accessible color combinations.",
            applicationCategory: "DesignApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            author: {
              "@type": "Person",
              name: "imaimai17468",
            },
          }}
        />
      </body>
    </html>
  );
}
