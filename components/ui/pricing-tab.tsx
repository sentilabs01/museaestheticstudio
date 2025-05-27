"use client"

import * as React from "react"

interface TabProps {
  text: string
  selected: boolean
  setSelected: (value: string) => void
  discount?: boolean
}

export function Tab({ text, selected, setSelected, discount }: TabProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full font-medium transition
        ${selected ? 'bg-[#182d20] text-white shadow-lg font-ttdrugs' : 'bg-transparent text-[#182d20] hover:bg-[#2A4A30] hover:text-white font-ttdrugs'}
      `}
      style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 700 }}
      onClick={() => setSelected(text)}
      type="button"
    >
      {text}
      {discount && <span className="ml-2 text-xs text-green-600">Save</span>}
    </button>
  )
} 