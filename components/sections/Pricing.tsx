'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Pricing() {
  const [showMembership, setShowMembership] = useState(false)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#182D20] sm:text-4xl">
            Pricing Options
          </h2>
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={() => setShowMembership(false)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                !showMembership
                  ? 'bg-[#182D20] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Stand Alone
            </button>
            <button
              onClick={() => setShowMembership(true)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                showMembership
                  ? 'bg-[#182D20] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Membership
            </button>
          </div>
        </div>

        <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto">
          <Image
            src={showMembership ? "/Membership+Pricing.png" : "/Stand+Alone+Pricing.png"}
            alt={showMembership ? "Membership Pricing" : "Stand Alone Pricing"}
            fill
            className="object-contain transition-opacity duration-300"
            priority
          />
        </div>
      </div>
    </section>
  )
} 