'use client';

import Accordion from "../ui/Accordion";
import { useState } from "react";

const treatments = [
  {
    title: "Express Facial",
    description:
      "✨ Awaken your radiance in just an hour! Our Express Facial is a quick, magical reset—gentle cleansing, a sprinkle of exfoliation, and an enchanting enzyme mask leave your skin glowing like morning dew.",
    duration: "60 min",
    price: "$110",
    category: "Facials",
  },
  {
    title: "Oxy-Facial with LED",
    description:
      "💧 Breathe new life into your skin! This hydrating ritual infuses oxygen and nourishing serums, while LED light dances across your complexion, revealing a luminous, refreshed you.",
    duration: "60 min",
    price: "$135",
    category: "Facials",
  },
  {
    title: "Dermaplane Facial",
    description:
      "🌙 Reveal your inner moonbeam! Our Dermaplane Facial gently sweeps away dullness and peach fuzz, unveiling a silky, radiant canvas ready to soak up all the magic.",
    duration: "60 min",
    price: "$135",
    category: "Facials",
  },
  {
    title: "Hydro-Facial with LED",
    description:
      "💦 Dive into deep hydration! This treatment cleanses, exfoliates, and drenches your skin in moisture, while LED light brings clarity and a dewy, ethereal glow.",
    duration: "60 min",
    price: "$145",
    category: "Facials",
  },
  {
    title: "Nano-Infusion Treatment",
    description:
      "🔮 Experience the future of skin renewal! Potent serums are gently infused, transforming texture and hydration for a spellbinding, youthful finish.",
    duration: "60 min",
    price: "$150–$500",
    category: "Facials",
  },
  {
    title: "Chemical Peel",
    description:
      "🍋 Shed the old, reveal the new! Our customized peel is a gentle alchemy, smoothing texture and brightening your aura for a fresh, vibrant look.",
    duration: "45 min",
    price: "$99–$125",
    category: "Peels",
  },
  {
    title: "Body Peel",
    description:
      "🌺 Transform your skin from head to toe! This targeted peel smooths and brightens, leaving your body as soft and radiant as a petal in bloom.",
    duration: "45 min",
    price: "$99–$250",
    category: "Peels",
  },
  {
    title: "BioRePeel",
    description:
      "🦋 Unleash your skin’s renewal! BioRePeel is a gentle yet powerful metamorphosis, reducing fine lines and unveiling a supple, glowing you.",
    duration: "45 min",
    price: "$150–$500",
    category: "Peels",
  },
  {
    title: "Lash Lift & Tint",
    description:
      "👁️ Open your eyes to wonder! This magical lift and tint gives your lashes a dreamy curl and deep color, so you wake up ready to enchant the world.",
    duration: "45 min",
    price: "$125",
    category: "Lash & Brow",
  },
  {
    title: "Brow Lamination",
    description:
      "🪄 Shape your destiny! Our Brow Lamination tames and sculpts, creating full, feathery arches that frame your face with fairy-tale perfection.",
    duration: "30 min",
    price: "$80",
    category: "Lash & Brow",
  },
  {
    title: "Lash Lift & Tint with Brow Lamination",
    description:
      "🌟 The ultimate eye enchantment! Combine a lash lift and tint with brow lamination for a bold, captivating gaze that’s pure magic.",
    duration: "60 min",
    price: "$195",
    category: "Lash & Brow",
  },
  {
    title: "Skin-Vigorate Package",
    description:
      "💫 Revitalize your skin with our Skin-Vigorate Package—a curated journey of transformation. Enjoy two Oxy-Facial treatments with LED, two Certified Dope Facials, two BioRePeel sessions, and two Cell Story Liquid Microneedling experiences. Maximum rejuvenation, maximum magic!",
    duration: "Package",
    price: "$1,250",
    category: "Packages",
  },
  {
    title: "Microneedling",
    description:
      "🧬 Rejuvenate your skin with Microneedling—a minimally invasive ritual that awakens collagen, smooths texture, and brings forth a firmer, more radiant you. Fine needles create magical micro-channels, enhancing product absorption and fading scars, wrinkles, and pores.",
    duration: "60 min",
    price: "$225",
    category: "Facials",
  },
  {
    title: "Certified Dope Facial Treatment",
    description:
      "🌿 Indulge in the ultimate facial experience! Melt away tension and restore your skin’s natural balance with dermaplaning, deluxe facial cupping, CBD nano-infusion with microcurrent, and a soothing CBD tension relief massage. Pure bliss, pure magic.",
    duration: "75 min",
    price: "$225",
    category: "Facials",
  },
  {
    title: "Cell Story Liquid Microneedling",
    description:
      "✨ Experience the transformative power of Cell Story Liquid Microneedling! This non-invasive wonder stimulates your skin’s natural regeneration, delivering actives deep within to improve texture, soften lines, and reveal a youthful glow.",
    duration: "60 min",
    price: "$225",
    category: "Facials",
  },
];

const categories = ["Facials", "Peels", "Lash & Brow", "Packages"];

export default function Treatments() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section
      className="px-4 py-24 bg-white dark:bg-black border-b-2 border-pink-300 shadow-md"
      id="treatments"
    >
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-4xl font-bold mb-2 text-[#182D20] dark:text-pink-200 text-center"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 800,
            }}
          >
            Our Treatments
          </h2>
          <p className="text-xl text-center mb-10 text-[#182D20] dark:text-pink-100">
            Discover our range of premium aesthetic services designed to rejuvenate
            and enhance your natural beauty.
          </p>
          <div className="space-y-4 mt-8">
            {categories.map((category) => (
              <Accordion
                key={category}
                title={category}
                content={
                  <div className="space-y-4">
                    {treatments
                      .filter((t) => t.category === category)
                      .map((treatment) => (
                        <Accordion
                          key={treatment.title}
                          title={treatment.title + ' ' + treatment.price}
                          content={
                            <div>
                              <p className="mb-2 text-gray-600 dark:text-gray-300 italic">{treatment.description}</p>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{treatment.duration}</span>
                            </div>
                          }
                        />
                      ))}
                  </div>
                }
                // Only one category open at a time
                {...(openCategory !== null
                  ? {
                      isOpen: openCategory === category,
                      onClick: () =>
                        setOpenCategory(
                          openCategory === category ? null : category
                        ),
                    }
                  : {})}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}