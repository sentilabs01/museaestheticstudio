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
  const categories = Array.from(new Set(treatments.map(t => t.category)))

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#182D20] sm:text-4xl">
            Our Treatments
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover our range of premium aesthetic services designed to rejuvenate and enhance your natural beauty.
          </p>
        </div>

        <div className="mt-16">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold text-[#182D20] mb-8">{category}</h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {treatments
                  .filter((treatment) => treatment.category === category)
                  .map((treatment) => (
                    <div
                      key={treatment.name}
                      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                      <h4 className="text-xl font-semibold text-[#182D20] mb-4">
                        {treatment.name}
                      </h4>
                      <p className="text-gray-600 mb-6">
                        {treatment.description}
                      </p>
                      <Button
                        className="bg-[#182D20] text-white hover:bg-[#2A4A30] transition-colors duration-300"
                      >
                        Book Now
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 