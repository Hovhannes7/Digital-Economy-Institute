import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Digital Economy Institute", template: "%s | Digital Economy Institute" },
  description: siteConfig.description,
  openGraph: { title: "Digital Economy Institute", description: siteConfig.description, url: siteConfig.url, siteName: "Digital Economy Institute", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="font-sans antialiased"><Header /><main>{children}</main><Footer /></body></html>;
}
