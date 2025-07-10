'use client'
import { useState } from "react";
import Image from "next/image";

export default function Products() {
  const images = [
    {
      src: "https://muse2025.s3.us-east-1.amazonaws.com/biorepeel.png",
      alt: "BioRePeel"
    },
    {
      src: "https://muse2025.s3.us-east-1.amazonaws.com/cellstory.png",
      alt: "Cellstory"
    },
    {
      src: "https://muse2025.s3.us-east-1.amazonaws.com/glymed.png",
      alt: "Glymed"
    },
    {
      src: "https://muse2025.s3.us-east-1.amazonaws.com/skinscript.png",
      alt: "Skin Script"
    }
  ];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-[#182D20] dark:text-[#F7D6ED] text-center" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
            Featured Products
          </h2>
        </div>
        <div className="w-full flex justify-center items-center bg-white dark:bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            width={900}
            height={300}
            className="object-contain rounded-xl shadow-xl bg-transparent w-full max-w-2xl"
            style={{ background: 'transparent' }}
          >
            <source src="https://muse2025.s3.us-east-1.amazonaws.com/product+slide+show.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}