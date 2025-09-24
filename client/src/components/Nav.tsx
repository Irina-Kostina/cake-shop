import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './pages/CartContext'

export default function Navbar() {
  const { cart } = useCart()
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f5f2ff]/80 backdrop-blur-sm shadow-sm">
      <div className="w-full px-8 py-1.5">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/logo2.png"
              alt="Sweet Magnolia Cakery Logo"
              className="h-28 w-auto"
            />
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-[17px] text-[#3a4a3f]">
            <a href="/#home" className="hover:text-[#7e9b7d]">Home</a>
            <a href="/#about" className="hover:text-[#7e9b7d]">About</a>
            <Link to="/shop" className="hover:text-[#7e9b7d]">Shop</Link>
            <a href="/#contact" className="hover:text-[#7e9b7d]">Contact</a>
          </nav>

          {/* RIGHT SIDE: Auth + Cart */}
          <div className="flex items-center gap-4">
            {/* AUTH BUTTONS */}
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-full border border-[#7e9b7d] text-[#3a4a3f] hover:bg-[#7e9b7d] hover:text-white transition text-sm"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1.5 rounded-full bg-[#7e9b7d] text-white hover:bg-[#5d7b5c] transition text-sm"
            >
              Sign Up
            </Link>

            {/* CART BUTTON */}
            <Link
              to="/cart"
              className="relative flex items-center px-3 py-1 rounded-full bg-gradient-to-b from-[#efb39a] to-[#e3a283] text-white shadow hover:shadow-md transition"
            >
              <span>Cart</span>

              {/* Badge */}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold shadow">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
