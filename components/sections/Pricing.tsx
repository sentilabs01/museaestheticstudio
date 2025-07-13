'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Pricing() {
  const [showMembership, setShowMembership] = useState(false)

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-pink-100 to-[#e0f7fa] dark:from-black dark:via-pink-200 dark:to-[#181823] dark:bg-black border-b-2 border-pink-300 shadow-md"
    >
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-2 text-[#182D20] dark:text-pink-200 text-center"
            style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}
          >
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

        <div className="relative w-full h-[800px] max-w-7xl mx-auto rounded-lg overflow-hidden bg-transparent">
          <Image
            src={showMembership ? "https://muse2025.s3.us-east-1.amazonaws.com/WHITEBKG+MEMBERPRICE.png" : "https://muse2025.s3.us-east-1.amazonaws.com/standalone2.0.png"}
            alt={showMembership ? "Membership Pricing" : "Stand Alone Pricing"}
            fill
            className="object-contain transition-all duration-500 hover:scale-105 bg-transparent"
            priority
          />
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHHIe4vfztFt1+g9CYbIkaxBboDTZXi7B3oCX9H/YqJrrEeMBLTg5YWY9k8g80ksIASy7/mhAhdHH7G5iHleD8qYoQVaduXMdj/QfqvI8RyvCDW5VrpXuxLpY+rRBJWlzR4lMD7GUeCHTPqQnCTG17jqxGSEAR1MH2vqXopoaPC9vgpJyGMfDvQNAeMT6X+wfoKvqSB8w4yhQavu4Fo+kh98QLyoG4BpOfov5Bjx1A960Pi8fRO64hCRRyV1nVgkm2qoRAAENU5nrSHKwI9lMe/rNnPAds0lZHLtJ3A+M2xWPfXNd325JITqIN8QDmJGWYFDbzuAAq7cDwOVmPhSa/6uwoNZNtxcjpLBLQDzdTzh4mWJOJWvOLQqmJldpHYYkgQH3iQR3eFhcc2GaQLXaAQ=&c_type=tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-lg px-8 py-4" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 700 }}>
              Book Now
            </Button>
          </a>
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