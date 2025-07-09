import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { SparkleOverlay } from "../components/sections/SparkleOverlay";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Premium Aesthetic Services",
  description: "Discover our range of premium aesthetic services designed to rejuvenate and enhance your natural beauty.",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        href: '/favicon.png',
      }
    ],
    apple: [
      {
        url: '/favicon.png',
        href: '/favicon.png',
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white dark:bg-black m-0 p-0" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
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