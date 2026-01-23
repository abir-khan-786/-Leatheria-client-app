"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Search, Menu, X, User } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // স্ক্রল করলে শ্যাডো এবং ব্যাকগ্রাউন্ড চেঞ্জ হবে
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* ১. লোগো */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-gray-900 uppercase font-serif"
            >
              leather<span className="text-orange-600">ia.</span>
            </Link>
          </div>

          {/* ২. ডেস্কটপ মেনু (সেন্টার) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/shop"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
            >
              All Bags
            </Link>
            <Link
              href="/leather"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
            >
              Leather
            </Link>
            <Link
              href="/backpacks"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
            >
              Backpacks
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
            >
              Our Story
            </Link>
          </div>

          {/* ৩. আইকন সেকশন (ডানদিকে) */}
          <div className="flex items-center space-x-5">
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition">
              <Search size={20} />
            </button>
            <Link
              href="/account"
              className="hidden sm:block p-2 text-gray-700 hover:bg-gray-100 rounded-full transition"
            >
              <User size={20} />
            </Link>
            <Link
              href="/cart"
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>

            {/* মোবাইল মেনু বাটন */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-900"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/shop"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              All Bags
            </Link>
            <Link
              href="/leather"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Leather
            </Link>
            <Link
              href="/backpacks"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Backpacks
            </Link>
            <Link
              href="/account"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              My Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
