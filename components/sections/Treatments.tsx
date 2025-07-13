'use client';

import Accordion from "../ui/Accordion";
import { useState } from "react";

const treatments = [
  {
    title: "New Client Consultation",
    description:
      "The New Client Consultation provides a comprehensive evaluation of your unique skincare needs and concerns. You will receive personalized recommendations and a tailored plan designed to enhance your skin's health and radiance.",
    duration: "30 min",
    price: "$0.00",
    category: "Facials",
  },
  {
    title: "Express Facial",
    description:
      "The Express Facial provides a rejuvenating experience in just 60 minutes, including a thorough cleanse, gentle microdermabrasion, and a revitalizing enzyme mask. Ideal for busy lifestyles, this treatment refreshes your skin, leaving it glowing and revitalized!",
    duration: "60 min",
    price: "$110.00",
    category: "Facials",
  },
  {
    title: "Dermaplane Facial",
    description:
      "Reveal smoother, brighter skin with our Dermaplane Facial. This treatment gently removes dead skin cells and peach fuzz through dermaplaning, followed by an enzyme mask. Perfect for a polished, glowing look!",
    duration: "60 min",
    price: "$135.00",
    category: "Facials",
  },
  {
    title: "Oxy Facial",
    description:
      "Boost your skin's hydration with our Oxy-Facial, enhanced by LED light therapy. This treatment infuses your skin with oxygen and nourishing serums, while LED therapy targets concerns like redness or dullness, leaving your complexion radiant and refreshed!",
    duration: "60 min",
    price: "$135.00",
    category: "Facials",
  },
  {
    title: "Chemical Peel",
    description:
      "Address specific skin concerns with a customized Chemical Peel. This treatment exfoliates the outer layer of skin to improve texture, reduce pigmentation, and promote cell turnover, leaving your skin glowing, hydrated & healthy!",
    duration: "45 min",
    price: "Starting at $99.00",
    category: "Facials",
  },
  {
    title: "Hydro-Facial",
    description:
      "Deeply cleanse and hydrate with our Hydro-Facial, featuring hydrodermabrasion to exfoliate and extract impurities, paired with LED light therapy to enhance skin clarity. This treatment leaves your skin plump, dewy, and rejuvenated!",
    duration: "60 min",
    price: "$145.00",
    category: "Facials",
  },
  {
    title: "Nano-Infusion Treatment",
    description:
      "Elevate your skincare with our Nano-Infusion Treatment, a cutting-edge procedure that uses nano-technology to deliver potent serums deep into the skin. This non-invasive treatment enhances hydration, improves fine lines, and boosts overall skin health, with customizable serums tailored to your needs.",
    duration: "60 min",
    price: "$150.00",
    category: "Facials",
  },
  {
    title: "Certified Dope Facial",
    description:
      "Indulge in the ultimate facial experience designed to melt away tension and restore your skin's natural balance. This comprehensive treatment includes dermaplaning to gently exfoliate, deluxe facial cupping to boost circulation, CBD nano-infusion with microcurrent to enhance product absorption, and a soothing CBD tension relief massage! Prepare to feel completely renewed!",
    duration: "75 min",
    price: "$225.00",
    category: "Facials",
  },
  {
    title: "BioRePeel Treatment",
    description:
      "Advanced Exfoliation - BioRePeel Treatment utilizes innovative exfoliation methods alongside bio-stimulation to enhance skin rejuvenation, significantly boosting collagen production while refining texture and tone. This state-of-the-art treatment delivers a refreshed and radiant complexion, perfect for those seeking to achieve a youthful, glowing appearance.",
    duration: "60 min",
    price: "$150.00",
    category: "Facials",
  },
  {
    title: "Microneedling",
    description:
      "Rejuvenate your skin with Microneedling, a minimally invasive treatment that stimulates collagen production to improve texture and firmness. Using fine needles, this procedure creates micro-channels to enhance product absorption and reduce the appearance of scars, wrinkles, and enlarged pores!",
    duration: "60 min",
    price: "$225.00",
    category: "Facials",
  },
  {
    title: "Cell Story Liquid Microneedling",
    description:
      "Cell Story Liquid Microneedling is a revolutionary non-invasive facial treatment that utilizes advanced technology to stimulate the skin's natural regeneration processes. By delivering active ingredients deep into the skin, it improves texture, diminishes fine lines, and promotes a radiant, youthful complexion, effectively revitalizing your skin's appearance!",
    duration: "60 min",
    price: "$225.00",
    category: "Facials",
  },
  // Lash & Body
  {
    title: "Lash Lift & Tint",
    description: "Enhance your natural lashes with our Lash Lift & Tint. This treatment lifts and curls your lashes for a wide-eyed look, while a tint adds depth and definition, eliminating the need for mascara! Enjoy long-lasting results for up to 6-8 weeks.",
    duration: "60 min",
    price: "$125.00",
    category: "Lash & Body",
  },
  {
    title: "Lash Lift & Tint with Brow Lamination",
    description: "Combine the best of both worlds with our Lash Lift & Tint and Brow Lamination package. Lift and tint your lashes for a dramatic effect, while laminating your brows for a polished, sculpted look. Save time, feel beautiful and enhance your features in one session!",
    duration: "60 min",
    price: "$195.00",
    category: "Lash & Body",
  },
  {
    title: "Brow Lamination",
    description: "Achieve perfectly shaped brows with Brow Lamination. This treatment smooths and sets your brow hairs in place, creating a fuller, more defined look that lasts up to 6 weeks. Ideal for taming unruly brows or enhancing sparse ones!",
    duration: "30 min",
    price: "$80.00",
    category: "Lash & Body",
  },
  {
    title: "Body Treatments - Body Peel (small area)",
    description: "Achieve smoother, clearer skin with our Body Peel services, which deeply exfoliates and rejuvenates small area to large areas, removing dead skin cells effectively and brightening the skin.",
    duration: "45 min",
    price: "$99.00",
    category: "Lash & Body",
  },
  {
    title: "Body Treatments - Body Peel (medium area)",
    description: "Achieve smoother, clearer skin with our Body Peel services, which deeply exfoliates and rejuvenates small area to large areas, removing dead skin cells effectively and brightening the skin.",
    duration: "45 min",
    price: "$175.00",
    category: "Lash & Body",
  },
  {
    title: "Body Treatments - Body Peel (large area)",
    description: "Achieve smoother, clearer skin with our Body Peel services, which deeply exfoliates and rejuvenates small area to large areas, removing dead skin cells effectively and brightening the skin.",
    duration: "45 min",
    price: "$250.00",
    category: "Lash & Body",
  },
  // Waxing
  {
    title: "Waxing - Brow Shaping",
    description: "Waxing Different parts of the face.",
    duration: "15 min",
    price: "$20.00",
    category: "Waxing",
  },
  {
    title: "Waxing - Lips",
    description: "Waxing Different parts of the face.",
    duration: "15 min",
    price: "$20.00",
    category: "Waxing",
  },
  {
    title: "Waxing - Chin",
    description: "Waxing Different parts of the face.",
    duration: "15 min",
    price: "$20.00",
    category: "Waxing",
  },
  {
    title: "Waxing - Lip and Chin",
    description: "Waxing Different parts of the face.",
    duration: "15 min",
    price: "$25.00",
    category: "Waxing",
  },
  {
    title: "Skin-Vigorate Package",
    description: "Revitalize your skin with our Skin-Vigorate Package, a curated series of treatments for maximum rejuvenation. This package includes two Oxy-Facial treatments with LED, two Certified Dope Facials, two BioRePeel treatments, and two Cell Story Liquid Microneedling sessions.",
    duration: "Package",
    price: "$1,300",
    category: "Packages",
  },
];

const categories = Array.from(new Set(treatments.map(t => t.category)));

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