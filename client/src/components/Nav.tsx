import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f8f6f2]/90 backdrop-blur-sm shadow-sm">
      {/* reduced vertical padding */}
      <div className="w-full px-8 py-1.5">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Sweet Magnolia Cakery Logo" className="h-28 w-auto" />

          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-[17px] text-[#3a4a3f]">
            <a href="#" className="hover:text-[#7e9b7d]">Home</a>
            <a href="#" className="hover:text-[#7e9b7d]">About</a>
            <a href="#" className="hover:text-[#7e9b7d]">Shop</a>
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