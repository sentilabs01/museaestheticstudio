// import Image from "next/image";
import dynamic from "next/dynamic";
// import Hero from "../components/sections/Hero";
// import { Treatments } from "../components/Treatments";
import Products from "../components/sections/Products";
import Pricing from "../components/sections/Pricing";
import Mission from "../components/sections/Mission";
import Logo from "../components/sections/Logo";
import Policies from "../components/sections/Policies";
import SplashCursorClient from "../components/ui/SplashCursorClient";

// NoiseDemo component for SplashCursor
// export function NoiseDemo() {
//   return <SplashCursor />;
// }

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black relative">
      <SplashCursorClient />
      <Logo />
      <Mission />
      {/* Intro video below Mission */}
      <div className="w-full flex justify-center mt-8 mb-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-lg h-auto rounded-lg shadow-lg object-contain"
        >
          <source src="https://muse2025.s3.us-east-1.amazonaws.com/Untitled+design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div id="treatments">
        <Treatments />
      </div> */}
      <div id="pricing">
        <Pricing />
      </div>
      <Products />
      <Policies />
    </main>
  );
}