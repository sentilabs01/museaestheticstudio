import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { SparkleOverlay } from "../components/sections/SparkleOverlay";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Muse Aesthetic Studio | Premium Aesthetic Services",
    template: "%s | Muse Aesthetic Studio"
  },
  description: "At Muse Aesthetic Studio, we believe every face tells a story and you are a work of art! Elevate your natural features through tailored treatments that support skin health, enhance radiance & promote lasting confidence.",
  keywords: ["aesthetic services", "skincare", "beauty treatments", "skin health", "aesthetic studio", "beauty enhancement"],
  authors: [{ name: "Muse Aesthetic Studio" }],
  creator: "Muse Aesthetic Studio",
  publisher: "Muse Aesthetic Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://museaestheticstudio.com'), // Update with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://museaestheticstudio.com", // Update with your actual domain
    siteName: "Muse Aesthetic Studio",
    title: "Muse Aesthetic Studio | Premium Aesthetic Services",
    description: "Elevate your natural features through tailored treatments that support skin health, enhance radiance & promote lasting confidence.",
    images: [
      {
        url: "/Grey and Black Minimalist Simple Modern Gaze Creative Studio Logo (1).png",
        width: 1200,
        height: 630,
        alt: "Muse Aesthetic Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muse Aesthetic Studio | Premium Aesthetic Services",
    description: "Elevate your natural features through tailored treatments that support skin health, enhance radiance & promote lasting confidence.",
    images: ["/Grey and Black Minimalist Simple Modern Gaze Creative Studio Logo (1).png"],
  },
  icons: {
    icon: [
      {
        url: '/Untitled design (35).png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/Untitled design (35).png',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white dark:bg-black m-0 p-0" suppressHydrationWarning>
      <body className="bg-white dark:bg-black m-0 p-0">
        <ThemeProvider>
          <SparkleOverlay />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}