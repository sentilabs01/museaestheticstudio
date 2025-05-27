"use client";

import { useState } from "react";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className={`flex w-full items-center justify-between rounded-lg p-4 text-left font-medium transition-all shadow-md border-2 focus:outline-none
          ${isOpen ? 'bg-[#182d20] text-white border-[#182d20]' : 'bg-white text-[#182d20] border-[#182d20] hover:bg-[#2A4A30] hover:text-white'}
        `}
        style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 700 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`h-6 w-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          {content}
        </div>
      )}
    </div>
  );
} 