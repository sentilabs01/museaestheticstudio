"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"
import { Button } from '../ui/button'

// @ts-ignore
declare global {
  interface Window {
    Vagaro?: any;
  }
}

interface PricingSectionProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
  frequencies: string[]
  centerCards?: boolean
}

export function PricingSection({
  title,
  subtitle,
  tiers,
  frequencies,
  centerCards = false,
}: PricingSectionProps) {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0])
  const [openTier, setOpenTier] = React.useState<PricingTier | null>(null)

  return (
    <section className="flex flex-col items-center gap-10 py-10 bg-white/80 dark:bg-black/90 text-black dark:text-white rounded-2xl shadow-xl">
      {/* Modal for service explanation */}
      {openTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 max-w-lg w-full relative text-black dark:text-white">
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              onClick={() => setOpenTier(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{openTier.name} Service Details</h2>
            <div className="mb-2 text-lg text-center">{openTier.description}</div>
            {/* You can add more details here if available, e.g. openTier.details */}
          </div>
        </div>
      )}
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2 text-[#182D20] dark:text-pink-200 text-center" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>{title}</h1>
          {/* <p className="text-muted-foreground">{subtitle}</p> */}
        </div>
        {frequencies.length > 1 && (
          <div className="mx-auto flex w-fit rounded-full bg-muted p-1">
            {frequencies.map((freq) => (
              <Tab
                key={freq}
                text={freq}
                selected={selectedFrequency === freq}
                setSelected={setSelectedFrequency}
                discount={freq === "yearly"}
              />
            ))}
          </div>
        )}
      </div>

      <div
        className={
          centerCards
            ? "grid w-full max-w-6xl gap-6 justify-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-fr"
            : "grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4"
        }
      >
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={
              "rounded-xl border p-6 shadow-md bg-white/90 dark:bg-neutral-900 text-black dark:text-white flex flex-col justify-between h-full cursor-pointer hover:scale-105 transition-transform duration-200" +
              (centerCards ? " text-center items-center" : "")
            }
            onClick={() => setOpenTier(tier)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${tier.name}`}
          >
            <div>
              <h3 className={centerCards ? "text-xl font-bold mb-2 text-center" : "text-xl font-bold mb-2"}>{tier.name}</h3>
              <div className={centerCards ? "mb-4 text-2xl font-semibold text-center" : "mb-4 text-2xl font-semibold"}>{tier.price[selectedFrequency]}</div>
              {/* Removed service explanation from card */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button className="px-8 py-2 text-lg" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 700 }}
          onClick={() => {
            if (window.Vagaro && typeof window.Vagaro.WidgetPopup === 'function') {
              window.Vagaro.WidgetPopup();
            } else {
              window.open('https://www.vagaro.com/museaestheticstudio/book-now', '_blank');
            }
          }}
        >
          Book Now
        </Button>
      </div>
    </section>
  )
} 