import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { SparkleOverlay } from "../components/sections/SparkleOverlay";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muse Aesthetic Studio",
  description: "Discover our range of premium aesthetic services designed to rejuvenate and enhance your natural beauty.",
  icons: {
    icon: [
      {
        url: 'https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo.png',
        href: 'https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo.png',
      }
    ],
    apple: [
      {
        url: 'https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo.png',
        href: 'https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo.png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo.png" />
        <link href="https://api.fontshare.com/v2/css?f[]=tt-drugs@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
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
