'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '../ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-1 flex items-center justify-between">
            <div className="hidden sm:block">
              <div className="flex space-x-8">
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Treatments
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Featured Products
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection('mission')}
                  className="text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Mission
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection('policies')}
                  className="text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Policies
                </button>
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="ml-4">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#182D20] dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('pricing')}
                className="block text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-base font-medium"
              >
                Treatments
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-base font-medium"
              >
                Featured Products
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-base font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="block text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-base font-medium"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-base font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('policies')}
                className="block text-[#182D20] dark:text-neutral-200 hover:text-[#2A4A30] dark:hover:text-white px-3 py-2 text-base font-medium"
              >
                Policies
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 