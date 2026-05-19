import type { Metadata } from "next";

import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Institute of Digital Economy",
    template: "%s | Institute of Digital Economy",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Institute of Digital Economy",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Institute of Digital Economy",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
