'use client'

import { useState, useRef } from 'react'
import { Button } from './ui/Button'

interface Treatment {
  name: string
  description: string
  category: string
}

const treatments: Treatment[] = [
  {
    category: 'Facials',
    name: 'Express Facial',
    description: 'Short on time? Our Express Facial delivers a quick yet effective refresh. This 60-minute treatment includes a thorough cleanse, light exfoliation, and an enzyme mask, leaving your skin glowing and revitalized—ideal for a busy schedule.'
  },
  {
    category: 'Facials',
    name: 'Oxy-Facial with LED',
    description: "Boost your skin's hydration with our Oxy-Facial, enhanced by LED light therapy. This treatment infuses your skin with oxygen and nourishing serums, while LED therapy targets concerns like redness or dullness, leaving your complexion radiant and refreshed."
  },
  {
    category: 'Facials',
    name: 'Dermaplane Facial',
    description: 'Reveal smoother, brighter skin with our Dermaplane Facial. This treatment gently removes dead skin cells and peach fuzz through dermaplaning, followed by an enzyme mask. Perfect for a polished, glowing look.'
  },
  {
    category: 'Facials',
    name: 'Hydro-Facial with LED',
    description: 'Deeply cleanse and hydrate with our Hydro-Facial, featuring hydrodermabrasion to exfoliate and extract impurities, paired with LED light therapy to enhance skin clarity. This treatment leaves your skin plump, dewy, and rejuvenated.'
  },
  {
    category: 'Facials',
    name: 'Nano-Infusion Treatment',
    description: 'Elevate your skincare with our Nano-Infusion Treatment, a cutting-edge procedure that uses nano-technology to deliver potent serums deep into the skin. This non-invasive treatment enhances hydration, improves fine lines, and boosts overall skin health, with customizable serums tailored to your needs.'
  },
  {
    category: 'Facials',
    name: 'Microneedling',
    description: 'Rejuvenate your skin with Microneedling, a minimally invasive treatment that stimulates collagen production to improve texture and firmness. Using fine needles, this procedure creates micro-channels to enhance product absorption and reduce the appearance of scars, wrinkles, and enlarged pores.'
  },
  {
    category: 'Facials',
    name: 'Certified Dope Facial Treatment',
    description: "Indulge in the ultimate facial experience designed to melt away tension and restore your skin's natural balance. This comprehensive treatment includes dermaplaning to gently exfoliate, deluxe facial cupping to boost circulation, CBD nano-infusion with microcurrent to enhance product absorption, and a soothing CBD tension relief massage."
  },
  {
    category: 'Facials',
    name: 'Cell Story Liquid Microneedling',
    description: "Experience the transformative power of Cell Story Liquid Microneedling, non-invasive treatment that stimulates your skin's natural regeneration process. Using advanced technology, this treatment delivers active ingredients deep into the skin to improve texture, reduce fine lines, and promote a youthful glow."
  },
  {
    category: 'Peels',
    name: 'Chemical Peel',
    description: 'Address specific skin concerns with a customized Chemical Peel. This treatment exfoliates the outer layer of skin to improve texture, reduce pigmentation, and promote cell turnover. Pricing varies based on the peel intensity, tailored to your needs.'
  },
  {
    category: 'Peels',
    name: 'Body Peel',
    description: 'Extend the benefits of a chemical peel to your body. Our Body Peel targets areas like the back, arms, or legs to improve texture, reduce hyperpigmentation, and smooth rough skin. Pricing depends on the treatment area and peel strength.'
  },
  {
    category: 'Peels',
    name: 'BioRePeel',
    description: 'Experience the next level of skin rejuvenation with BioRePeel, a powerful yet gentle peel that combines exfoliation with biostimulation. This treatment reduces fine lines, improves skin tone, and enhances elasticity, with pricing based on the number of sessions and areas treated.'
  },
  {
    category: 'Lash & Brow',
    name: 'Lash Lift & Tint',
    description: 'Enhance your natural lashes with our Lash Lift & Tint. This treatment lifts and curls your lashes for a wide-eyed look, while a tint adds depth and definition, eliminating the need for mascara. Enjoy long-lasting results for up to 6-8 weeks.'
  },
  {
    category: 'Lash & Brow',
    name: 'Brow Lamination',
    description: 'Achieve perfectly shaped brows with Brow Lamination. This treatment smooths and sets your brow hairs in place, creating a fuller, more defined look that lasts up to 6 weeks. Ideal for taming unruly brows or enhancing sparse ones.'
  },
  {
    category: 'Lash & Brow',
    name: 'Lash Lift & Tint with Brow Lamination',
    description: 'Combine the best of both worlds with our Lash Lift & Tint and Brow Lamination package. Lift and tint your lashes for a dramatic effect, while laminating your brows for a polished, sculpted look. Save time and enhance your features in one session.'
  },
  {
    category: 'Packages',
    name: 'Skin-Vigorate Package',
    description: 'Revitalize your skin with our Skin-Vigorate Package, a curated series of treatments for maximum rejuvenation. This package includes two Oxy-Facial treatments with LED, two Certified Dope Facials, two BioRePeel treatments, and two Cell Story Liquid Microneedling sessions.'
  }
]

export function Treatments() {
  const [selectedCategory, setSelectedCategory] = useState('Facials')
  const categories = Array.from(new Set(treatments.map(t => t.category)))
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredTreatments = treatments.filter(
    (treatment) => treatment.category === selectedCategory
  )

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    } else {
      setCurrentIndex(filteredTreatments.length - 1)
    }
  }

  const scrollNext = () => {
    if (currentIndex < filteredTreatments.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#182D20] sm:text-5xl">
            Our Treatments
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Discover our range of premium aesthetic services designed to rejuvenate and enhance your natural beauty.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mt-12 flex justify-center space-x-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="shimmer"
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
              }}
              className={`text-lg whitespace-nowrap ${
                selectedCategory === category
                  ? 'scale-105 shadow-lg'
                  : 'opacity-90 hover:opacity-100'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Carousel */}
        <div className="mt-12 relative">
          <div 
            ref={containerRef}
            className="overflow-hidden"
          >
            <div 
              className="grid grid-flow-col auto-cols-[100%] transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {filteredTreatments.map((treatment) => (
                <div
                  key={treatment.name}
                  className="px-4"
                >
                  <div className="bg-white p-8 rounded-lg border-[0.5px] border-gray-100 transition-all duration-300 mx-auto max-w-2xl">
                    <h4 className="text-2xl font-semibold text-[#182D20] mb-4">
                      {treatment.name}
                    </h4>
                    <p className="text-gray-600 mb-6 text-lg">
                      {treatment.description}
                    </p>
                    <Button
                      variant="shimmer"
                      className="w-full text-lg py-3"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="shimmer"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full p-3 min-w-[48px] h-[48px] flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          
          <Button
            variant="shimmer"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full p-3 min-w-[48px] h-[48px] flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {filteredTreatments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#182D20] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 