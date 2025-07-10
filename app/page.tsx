import { SplashCursor } from "../components/ui/splash-cursor";
import Treatments from "../components/sections/Treatments";
import Products from "../components/sections/Products";
import Pricing from "../components/sections/Pricing";
import Mission from "../components/sections/Mission";
import Logo from "../components/sections/Logo";
import Policies from "../components/sections/Policies";
import Image from "next/image";

// NoiseDemo component for SplashCursor
// export function NoiseDemo() {
//   return <SplashCursor />;
// }

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <SplashCursor />
      <Logo />
      <Mission />
      {/* Meet Our Team Image Section - moved directly below Mission */}
      <section id="meet-our-team" className="pt-8 pb-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black flex justify-center">
        <Image
          src="https://muse2025.s3.us-east-1.amazonaws.com/Squad.png"
          alt="Meet Our Team"
          width={1200}
          height={400}
          className="object-contain rounded-xl shadow-none bg-white dark:bg-black w-full max-w-4xl"
          priority
        />
      </section>
      {/* Intro video below Mission */}
      <div className="w-full flex justify-center mt-8 mb-12 bg-white dark:bg-black">
        {/*
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-5xl h-[500px] rounded-lg shadow-lg object-contain"
        >
          <source src="https://muse2025.s3.us-east-1.amazonaws.com/Untitled+design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        */}
      </div>
      {/* Our Treatments section - unified, full list */}
      <Treatments />
      <div id="pricing">
        <Pricing />
      </div>
      <Products />
      <Policies />
      {/* <ContactFormEmbed /> removed duplicate contact form from main page */}
    </main>
  );
}