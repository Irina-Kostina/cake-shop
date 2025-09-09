import React from 'react'

/**
 * STEP 2: Match custom design layout (no announcement bar, simplified nav).
 * Reference: "Sweet Magnolia Cakery" screenshot
 */

export default function Navbar() {
  return (
    <header className="bg-[#f5f2eb] shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-0">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Sweet Magnolia Cakery Logo" className="h-32 w-auto" />

          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-[17px] text-[#3a4a3f]">
            <a href="#" className="hover:text-[#7e9b7d]">Home</a>
            <a href="#" className="hover:text-[#7e9b7d]">About</a>
            <a href="#" className="hover:text-[#7e9b7d]">Cakes</a>
            <a href="#" className="hover:text-[#7e9b7d]">Contact</a>
          </nav>

          {/* CART BUTTON */}
          <a href="#cart" className="relative flex flex-col items-center justify-center bg-[#f2ac8c] text-white rounded-full px-6 py-3 shadow-md hover:brightness-105">
            <span className="font-semibold leading-none">Cart</span>
            <span className="text-xs bg-[#7e9b7d] text-white rounded-full px-2 py-0.5 mt-1">0</span>
          </a>
        </div>
      </div>
    </header>
  )
}