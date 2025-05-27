'use client'

import { useState } from 'react'
import { Button } from "../ui/button"
import { PricingCard } from '../ui/dark-gradient-pricing'
import { PricingSection } from './PricingSection'

const membershipPlans = [
  {
    name: 'LASH BABE',
    price: '$65/MONTH',
    benefits: [
      'LASH LIFT & BROW LAMINATION',
      'TREATED EVERY 6 TO 8 WEEKS',
      'BROW WAX & SHAPE',
      'SCHEDULED OPPOSITE LASH/BROW TREATMENTS',
      '10% OFF SKIN TREATMENTS',
      'EXCLUDES: BRP, NANO-INFUSION, CELL STORY & MICRONEEDLING',
    ],
  },
  {
    name: 'EXPRESS',
    price: '$120/MONTH',
    benefits: [
      'BASIC FACIAL SERVICE, INCLUDES:',
      'MICRODERMABRASION OR DERMAPLANING + ENZYME THERAPY, EXTRACTIONS & LED LIGHT',
      '$30 CHEMICAL PEEL UPGRADE',
      '10% OFF SKIN TREATMENTS',
      'EXCLUDES: BRP, CELL STORY & MICRONEEDLING',
    ],
  },
  {
    name: 'SIGNATURE MUSE',
    price: '$145/MONTH',
    benefits: [
      'DERMAPLANE + 1 ADVANCED TREATMENT',
      'ADVANCED TREATMENT INCLUDES:',
      'MICRODERMABRASION + ENZYME THERAPY',
      'CHEMICAL PEEL',
      'DELUXE FACIAL CUPPING TREATMENT',
      'HYDRODERMABRASION + LED LIGHT',
      'OXY FACIAL + LED THERAPY',
      'PEPTIDE NANO-INFUSION TREATMENT + COLLAGEN MASK',
    ],
    exclusive: [
      { label: 'LASH LIFT & TINT WITH BROW LAMINATION', value: '$75' },
      { label: 'CERTIFIED DOPE FACIAL', value: '$40 TO $85' },
      { label: 'BIOREPEEL', value: '$100 TO $400' },
      { label: 'MICRONEEDLING', value: '$125' },
      { label: 'CELL STORY THERAPY', value: '10% OFF' },
    ],
  },
]

const STANDALONE_TIERS = [
  // Signature Packages
  {
    id: 'certified-dope-facial',
    name: 'Certified Dope Facial Treatment',
    price: { once: '$225' },
    description: "Our most popular facial! Experience the ultimate skin transformation with a luxurious blend of deep cleansing, exfoliation, and our signature nano-infusion technology. This treatment features a potent CBD therapy mask to calm, soothe, and rejuvenate your skin, leaving you glowing, refreshed, and ready to take on the world.",
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'cell-story-microneedling',
    name: 'Cell Story Liquid Microneedling',
    price: { once: '1 session: $200 | 4 sessions: $800' },
    description: 'A gentle, no-needle microneedling treatment that stimulates collagen production and enhances skin texture using advanced liquid technology. Perfect for sensitive skin or those seeking minimal downtime.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'skin-vigorate-package',
    name: 'Skin-Vigorate Package',
    price: { once: '$1,250' },
    description: 'A comprehensive package including 2 Oxy-Facials with LED, 2 Certified Dope Facials, 2 BioRePeel, and 2 Cell Story Microneedling sessions for total skin transformation.',
    features: [],
    cta: 'Book Now',
  },
  // Stand Alone Treatments
  {
    id: 'microneedling',
    name: 'Microneedling',
    price: { once: '$225 - $800' },
    description: 'Microneedling is a minimally invasive treatment that uses fine needles to create micro-injuries in the skin, stimulating natural collagen and elastin production. This process helps reduce the appearance of scars, fine lines, and large pores, resulting in smoother, firmer, and more youthful-looking skin. Suitable for most skin types, with little downtime.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'express-facial',
    name: 'Express Facial',
    price: { once: '$110' },
    description: 'A quick yet effective facial designed to refresh and revitalize your skin in just 60 minutes. Perfect for those on the go.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'oxy-facial-led',
    name: 'Oxy-Facial with LED',
    price: { once: '$135' },
    description: 'A deeply hydrating facial that infuses oxygen and nutrients into the skin, combined with LED therapy to boost radiance and promote healing.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'dermaplane-facial',
    name: 'Dermaplane Facial',
    price: { once: '$135' },
    description: 'A gentle exfoliation treatment that removes dead skin cells and peach fuzz, revealing a smoother, brighter complexion and enhancing product absorption.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'hydro-facial-led',
    name: 'Hydro-Facial with LED',
    price: { once: '$145' },
    description: 'A multi-step facial that cleanses, exfoliates, and hydrates the skin, finished with LED light therapy for a luminous, healthy glow.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'chemical-peel',
    name: 'Chemical Peel',
    price: { once: '$99–$125' },
    description: 'A customized chemical exfoliation that improves skin texture, tone, and clarity, targeting concerns like acne, pigmentation, and dullness.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'body-peel',
    name: 'Body Peel',
    price: { once: '$99–$250' },
    description: 'A targeted peel for body areas such as the back, arms, or chest, designed to smooth, brighten, and rejuvenate the skin.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'biorepeel',
    name: 'BioRePeel',
    price: { once: '$150–$500' },
    description: 'A cutting-edge, non-invasive peel that revitalizes the skin with minimal irritation or downtime. Great for improving texture, tone, and overall radiance.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'lash-lift-tint',
    name: 'Lash Lift & Tint',
    price: { once: '$125' },
    description: 'A treatment that lifts and curls your natural lashes while adding rich, dark color for a striking, mascara-free look.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'brow-lamination',
    name: 'Brow Lamination',
    price: { once: '$80' },
    description: 'A brow-smoothing treatment that creates fuller, more defined brows by realigning the hairs into your desired shape.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'lash-brow-combo',
    name: 'Lash Lift & Tint with Brow Lamination',
    price: { once: '$195' },
    description: 'A dramatic combination treatment for both lashes and brows, delivering a bold, polished look that lasts for weeks.',
    features: [],
    cta: 'Book Now',
  },
  {
    id: 'nano-infusion',
    name: 'Nano-Infusion Treatment',
    price: { once: '$150–$500' },
    description: 'A non-invasive treatment that uses nano-technology to infuse potent serums deep into the skin, improving hydration, texture, and overall skin health.',
    features: [],
    cta: 'Book Now',
  },
]

function ContactFormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-0 max-w-xl w-full" style={{ width: '700px', maxWidth: '95vw' }}>
        <button
          className="absolute top-2 right-3 text-3xl font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <iframe
          width="100%"
          height="500px"
          src="https://forms.vagaro.com/FormResponse/gSyKI6gW2pZiDB7s3DpSrx3zbekJA6aO5Zn2LByZCosW?embeded=true"
          style={{ border: 'none', position: 'relative', display: 'block', borderRadius: '1rem' }}
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          title="Contact Form"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [showMembership, setShowMembership] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const handleBookNow = () => setContactOpen(true);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-pink-100 to-[#e0f7fa] dark:from-black dark:via-pink-200 dark:to-[#181823] border-b-2 border-pink-300 shadow-md">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 text-[#182D20] dark:text-pink-200 text-center" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
            Pricing Options
          </h2>
          <div className="mt-12 flex justify-center items-center gap-6">
            <Button
              onClick={() => setShowMembership(false)}
              className={`text-lg ${!showMembership ? 'scale-105 shadow-lg' : 'opacity-90 hover:opacity-100'}`}
              style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 700 }}
            >
              Stand Alone
            </Button>
            <Button
              onClick={() => setShowMembership(true)}
              className={`text-lg ${showMembership ? 'scale-105 shadow-lg' : 'opacity-90 hover:opacity-100'}`}
              style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 700 }}
            >
              Membership
            </Button>
          </div>
        </div>
        {!showMembership ? (
            <PricingSection
              title="Standalone Treatments"
              frequencies={['once']}
              tiers={STANDALONE_TIERS}
              centerCards={true}
              onBookNow={handleBookNow}
            />
        ) : (
          <div className="max-w-4xl mx-auto bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  tier={plan.name}
                  price={plan.price}
                  bestFor={plan.benefits[0]}
                  benefits={plan.benefits.map(b => ({ text: b, checked: true }))}
                  className={''}
                />
              ))}
            </div>
            {/* Exclusive Benefits Section */}
            <div className="mt-12 mb-8 flex justify-center">
              <div className="w-full max-w-3xl rounded-2xl shadow-xl border-2 border-[#182D20] bg-gradient-to-br from-[#e0f7fa] via-white to-pink-100 dark:from-[#181823] dark:via-neutral-900 dark:to-pink-200 p-0">
                <div className="rounded-t-2xl bg-gradient-to-r from-[#182D20] via-[#2A4A30] to-[#182D20] text-white text-center text-2xl font-extrabold py-4 tracking-wide" style={{ letterSpacing: '0.05em', fontFamily: 'TT Drugs, Inter, sans-serif' }}>
                  Exclusive Benefits of Signature Muse Membership
                </div>
                <div className="px-10 py-8">
                  <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-base">
                    <div className="flex items-center text-[#182D20] dark:text-pink-100">Lash Lift & Tint with Brow Lamination</div>
                    <div className="flex items-center justify-end text-[#182D20] dark:text-pink-100">$75</div>
                    <div className="flex items-center text-[#182D20] dark:text-pink-100">Certified Dope Facial</div>
                    <div className="flex items-center justify-end text-[#182D20] dark:text-pink-100">$40 to $85</div>
                    <div className="flex items-center text-[#182D20] dark:text-pink-100">BioRePeel</div>
                    <div className="flex items-center justify-end text-[#182D20] dark:text-pink-100">$100 to $400</div>
                    <div className="flex items-center text-[#182D20] dark:text-pink-100">Microneedling</div>
                    <div className="flex items-center justify-end text-[#182D20] dark:text-pink-100">$125</div>
                    <div className="flex items-center text-[#182D20] dark:text-pink-100">Cell Story Therapy</div>
                    <div className="flex items-center justify-end text-[#182D20] dark:text-pink-100">10% OFF</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button className="px-8 py-2 text-lg" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 700 }} onClick={handleBookNow}>
                Book Now
              </Button>
            </div>
          </div>
        )}
        <ContactFormModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </section>
  )
}

// Animations (add to your global CSS if not present):
// .animate-fade-in { animation: fadeIn 0.7s; }
// .animate-slide-in { animation: slideIn 0.7s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideIn { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } } 