"use client"

import * as React from "react";

const treatments = [
	{
		name: "Express Facial",
		price: "$120",
		description:
			"Short on time? Our Express Facial delivers a quick yet effective refresh. This 60-minute treatment includes a thorough cleanse, light exfoliation, and an enzyme mask, leaving your skin glowing and revitalized—ideal for a busy schedule.",
		category: "facials",
	},
	{
		name: "Oxy-Facial with LED",
		price: "$135",
		description:
			"Boost your skin's hydration with our Oxy-Facial, enhanced by LED light therapy. This treatment infuses your skin with oxygen and nourishing serums, while LED therapy targets concerns like redness or dullness, leaving your complexion radiant and refreshed.",
		category: "facials",
	},
	{
		name: "Dermaplane Facial",
		price: "$135",
		description:
			"Reveal smoother, brighter skin with our Dermaplane Facial. This treatment gently removes dead skin cells and peach fuzz through dermaplaning, followed by an enzyme mask. Perfect for a polished, glowing look.",
		category: "facials",
	},
	{
		name: "Hydro-Facial with LED",
		price: "$145",
		description:
			"Deeply cleanse and hydrate with our Hydro-Facial, featuring hydrodermabrasion to exfoliate and extract impurities, paired with LED light therapy to enhance skin clarity. This treatment leaves your skin plump, dewy, and rejuvenated.",
		category: "facials",
	},
	{
		name: "Chemical Peel",
		price: "$99-$125",
		description:
			"Address specific skin concerns with a customized Chemical Peel. This treatment exfoliates the outer layer of skin to improve texture, reduce pigmentation, and promote cell turnover. Pricing varies based on the peel intensity, tailored to your needs.",
		category: "peels",
	},
	{
		name: "Body Peel",
		price: "$99-$250",
		description:
			"Extend the benefits of a chemical peel to your body. Our Body Peel targets areas like the back, arms, or legs to improve texture, reduce hyperpigmentation, and smooth rough skin. Pricing depends on the treatment area and peel strength.",
		category: "peels",
	},
	{
		name: "BioRePeel",
		price: "$150-$500",
		description:
			"Experience the next level of skin rejuvenation with BioRePeel, a powerful yet gentle peel that combines exfoliation with biostimulation. This treatment reduces fine lines, improves skin tone, and enhances elasticity, with pricing based on the number of sessions and areas treated.",
		category: "peels",
	},
	{
		name: "Lash Lift & Tint",
		price: "$125",
		description:
			"Enhance your natural lashes with our Lash Lift & Tint. This treatment lifts and curls your lashes for a wide-eyed look, while a tint adds depth and definition, eliminating the need for mascara. Enjoy long-lasting results for up to 6-8 weeks.",
		category: "lash-brow",
	},
	{
		name: "Brow Lamination",
		price: "$80",
		description:
			"Achieve perfectly shaped brows with Brow Lamination. This treatment smooths and sets your brow hairs in place, creating a fuller, more defined look that lasts up to 6 weeks. Ideal for taming unruly brows or enhancing sparse ones.",
		category: "lash-brow",
	},
	{
		name: "Lash Lift & Tint with Brow Lamination",
		price: "$195",
		description:
			"Combine the best of both worlds with our Lash Lift & Tint and Brow Lamination package. Lift and tint your lashes for a dramatic effect, while laminating your brows for a polished, sculpted look. Save time and enhance your features in one session.",
		category: "lash-brow",
	},
	{
		name: "Nano-Infusion Treatment",
		price: "$150-$500",
		description:
			"Elevate your skincare with our Nano-Infusion Treatment, a cutting-edge procedure that uses nano-technology to deliver potent serums deep into the skin. This non-invasive treatment enhances hydration, improves fine lines, and boosts overall skin health, with customizable serums tailored to your needs.",
		category: "facials",
	},
	{
		name: "Microneedling",
		price: "$225",
		description:
			"Rejuvenate your skin with Microneedling, a minimally invasive treatment that stimulates collagen production to improve texture and firmness. Using fine needles, this procedure creates micro-channels to enhance product absorption and reduce the appearance of scars, wrinkles, and enlarged pores.",
		category: "facials",
	},
	{
		name: "Certified Dope Facial Treatment",
		price: "$225",
		description:
			"Indulge in the ultimate facial experience designed to melt away tension and restore your skin's natural balance. This comprehensive treatment includes dermaplaning to gently exfoliate, deluxe facial cupping to boost circulation, CBD nano-infusion with microcurrent to enhance product absorption, and a soothing CBD tension relief massage.",
		category: "facials",
	},
	{
		name: "Cell Story Liquid Microneedling",
		price: "$200 (1) / $800 (4)",
		description:
			"Experience the transformative power of Cell Story Liquid Microneedling, non-invasive treatment that stimulates your skin's natural regeneration process. Using advanced technology, this treatment delivers active ingredients deep into the skin to improve texture, reduce fine lines, and promote a youthful glow.",
		category: "facials",
	},
	{
		name: "Skin-Vigorate Package",
		price: "$1,300",
		description:
			"Revitalize your skin with our Skin-Vigorate Package, a curated series of treatments for maximum rejuvenation. This package includes two Oxy-Facial treatments with LED, two Certified Dope Facials, two BioRePeel treatments, and two Cell Story Liquid Microneedling sessions.",
		category: "packages",
	},
];

const categoryNames: Record<string, string> = {
	facials: "Facials",
	peels: "Peels",
	"lash-brow": "Lash & Brow",
	packages: "Packages",
};

export default function TreatmentsAccordion() {
	const categories = Array.from(new Set(treatments.map((t) => t.category)));

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
			<h2 className="text-4xl font-bold mb-8 text-center text-[#182D20] dark:text-[#F7D6ED]">
				Our Treatments
			</h2>
			<div className="max-w-3xl mx-auto">
				{categories.map((category) => (
					<div key={category} className="mb-8">
						<h3 className="text-2xl font-semibold mb-4 text-[#182d20] dark:text-[#F7D6ED]">
							{categoryNames[category] || category}
						</h3>
						{treatments
							.filter(
								(t) =>
									t.category === category &&
									t.name !== "Nano-Infusion Treatment" &&
									t.name !== "Cell Story Liquid Microneedling"
							)
							.map((treatment) => (
								<div key={treatment.name} className="mb-6 p-6 rounded-xl bg-[#F7D6ED] dark:bg-[#182d20] shadow-md">
									<div className="flex justify-between items-center mb-2">
										<h4 className="text-xl font-bold text-[#182d20] dark:text-[#F7D6ED]">
											{treatment.name}
										</h4>
										<span className="text-lg font-bold text-[#2A4A30] dark:text-[#F7D6ED]">
											{treatment.price}
										</span>
									</div>
									<p className="text-[#182d20] dark:text-[#F7D6ED] mb-2">
										{treatment.description}
									</p>
									<a
										href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHHIe4vfztFt1+g9CYbIkaxBboDTZXi7B3oCX9H/YqJrrEeMBLTg5YWY9k8g80ksIASy7/mhAhdHH7G5iHleD8qYoQVaduXMdj/QfqvI8RyvCDW5VrpXuxLpY+rRBJWlzR4lMD7GUeCHTPqQnCTG17jqxGSEAR1MH2vqXopoaPC9vgpJyGMfDvQNAeMT6X+wfoKvqSB8w4yhQavu4Fo+kh98QLyoG4BpOfov5Bjx1A960Pi8fRO64hCRRyV1nVgkm2qoRAAENU5nrSHKwI9lMe/rNnPAds0lZHLtJ3A+M2xWPfXNd325JITqIN8QDmJGWYFDbzuAAq7cDwOVmPhSa/6uwoNZNtxcjpLBLQDzdTzh4mWJOJWvOLQqmJldpHYYkgQH3iQR3eFhcc2GaQLXaAQ=&c_type=tab"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block mt-2 px-4 py-2 bg-[#A21CAF] text-white rounded-full font-semibold hover:bg-[#7B2FF2] transition"
									>
										Book Now
									</a>
								</div>
							))}
					</div>
				))}
			</div>
		</section>
	);
}
