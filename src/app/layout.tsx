import type { Metadata } from "next";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Contrast Color Palette",
  description: "A tool that generates a color palette with a contrast ratio.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Contrast Color Palette",
    description: "A tool that generates a color palette with a contrast ratio.",
    images: ["/image/ogp.png"],
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
