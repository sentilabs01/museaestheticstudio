import Image from "next/image";
import { SplashCursor } from "../components/ui/splash-cursor";
import Hero from "../components/sections/Hero";
import { Treatments } from "../components/Treatments";
import Products from "../components/sections/Products";
import Pricing from "../components/sections/Pricing";
import Mission from "../components/sections/Mission";
import Logo from "../components/sections/Logo";

// NoiseDemo component for SplashCursor
export function NoiseDemo() {
  return <SplashCursor />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <SplashCursor />
      <Logo />
      <div id="treatments">
        <Treatments />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="mission">
        <Mission />
      </div>
    </main>
  );
}