"use client";
import dynamic from "next/dynamic";

const SplashCursor = dynamic(
  () => import("./splash-cursor").then(mod => mod.SplashCursor),
  { ssr: false }
);

export default function SplashCursorClient() {
  return <SplashCursor />;
} 