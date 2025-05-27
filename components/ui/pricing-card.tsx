"use client"

import * as React from "react"

export interface PricingTier {
  id: string
  name: string
  price: { [key: string]: string | number }
  description: string
  features: string[]
  cta: string
  popular?: boolean
  highlighted?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
  return (
    <div className={`rounded-xl border p-6 shadow-md bg-white dark:bg-neutral-900 ${tier.popular ? "ring-2 ring-pink-400" : ""}`}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">{tier.name}</h3>
        {tier.popular && <span className="ml-2 px-2 py-1 text-xs bg-pink-200 text-pink-800 rounded">Popular</span>}
        {tier.highlighted && <span className="ml-2 px-2 py-1 text-xs bg-blue-200 text-blue-800 rounded">Best Value</span>}
      </div>
      <div className="mb-2 text-3xl font-semibold">
        {typeof tier.price[paymentFrequency] === "number"
          ? `$${tier.price[paymentFrequency]}`
          : tier.price[paymentFrequency]}
      </div>
      <div className="mb-4 text-gray-500 dark:text-gray-300">{tier.description}</div>
      <ul className="mb-6 space-y-1 text-sm">
        {tier.features && tier.features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
} 