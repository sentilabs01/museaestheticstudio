import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { SparkleOverlay } from "../components/sections/SparkleOverlay";
import { ThemeProvider } from "../components/ThemeProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muse Aesthetic Studio",
  description: "Muse Aesthetic Studio - Premium Aesthetic Services in Ankeny, IA.",
  icons: {
    icon: [
      {
        url: 'https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo+(1).png',
        href: 'https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo+(1).png',
      }
    ],
    apple: [
      {
        url: 'https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo+(1).png',
        href: 'https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo+(1).png',
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
        <link rel="icon" href="https://muse2025.s3.us-east-1.amazonaws.com/Copy+of+Copy+of+Grey+and+Black+Minimalist+Simple+Modern+Gaze+Creative+Studio+Logo+(1).png" />
        <link href="https://api.fontshare.com/v2/css?f[]=tt-drugs@400,500,700&display=swap" rel="stylesheet" />
        <Script
          src="https://www.vagaro.com//resources/WidgetPopupLoader/OZqpE3WmCJacT3qmV35y6RuSdBuOc1WJDvwfihaxDB6okPCxdfkJE1wgEJgoapOUcPCvdfQOW?v=ZFnesN4c2yz8Sfy35bTPCTfnuo3iLKayby6MzCdbB23S#"
          strategy="afterInteractive"
        />
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
