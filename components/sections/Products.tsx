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
        <div className="relative w-full flex justify-center items-center bg-white dark:bg-black">
          <button onClick={prev} aria-label="Previous" className="absolute left-0 z-10 h-full px-4 text-3xl font-bold text-[#2D4432] dark:text-[#F7D6ED] bg-white/70 dark:bg-black/80 hover:bg-[#F7D6ED]/80 dark:hover:bg-black/80 transition rounded-l-lg">
            &#8592;
          </button>
          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={1000}
            height={500}
            className="w-full max-w-5xl h-[500px] object-contain rounded-xl shadow-xl bg-transparent p-0"
            priority
          />
          <button onClick={next} aria-label="Next" className="absolute right-0 z-10 h-full px-4 text-3xl font-bold text-[#2D4432] dark:text-[#F7D6ED] bg-white/70 dark:bg-black/80 hover:bg-[#F7D6ED]/80 dark:hover:bg-black/80 transition rounded-r-lg">
            &#8594;
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {images.map((img, idx) => (
            <button
              key={img.alt}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-[#2D4432] border-[#2D4432] dark:bg-[#F7D6ED] dark:border-[#F7D6ED]' : 'bg-white border-[#2D4432] dark:bg-black dark:border-[#2D4432]'}`}
              aria-label={`Go to ${img.alt}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}