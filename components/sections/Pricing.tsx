'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/Button'

export default function Pricing() {
  const [showMembership, setShowMembership] = useState(false)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#182D20] sm:text-5xl">
            Pricing Options
          </h2>
          <div className="mt-12 flex justify-center items-center gap-6">
            <Button
              variant="shimmer"
              onClick={() => setShowMembership(false)}
              className={`text-lg ${
                !showMembership
                  ? 'scale-105'
                  : 'opacity-90 hover:opacity-100'
              }`}
            >
              Stand Alone
            </Button>
            <Button
              variant="shimmer"
              onClick={() => setShowMembership(true)}
              className={`text-lg ${
                showMembership
                  ? 'scale-105'
                  : 'opacity-90 hover:opacity-100'
              }`}
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