'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/Button'

export default function Pricing() {
  const [showMembership, setShowMembership] = useState(false)

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

        <div className="relative w-full aspect-[16/9] max-w-7xl mx-auto h-[800px] rounded-lg overflow-hidden border-[0.5px] border-gray-100">
          <Image
            src={showMembership ? "/Membership+Pricing.png" : "/Stand+Alone+Pricing.png"}
            alt={showMembership ? "Membership Pricing" : "Stand Alone Pricing"}
            fill
            className="object-contain transition-all duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  )
}

// Animations (add to your global CSS if not present):
// .animate-fade-in { animation: fadeIn 0.7s; }
// .animate-slide-in { animation: slideIn 0.7s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideIn { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } } 