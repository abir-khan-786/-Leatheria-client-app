"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X, User, LogIn, CardSimIcon } from "lucide-react"
import { authClient } from "../lib/auth"
import PremiumCart from "../cart/cart"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { data: session, isPending, error } = authClient.useSession()

  if (isPending) {
    return <p>Loding</p>
  }

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
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
            >
              Dashboard
            </Link>
          </div>

          {/* ৩. আইকন সেকশন (ডানদিকে) */}
          <div className="flex items-center space-x-5">
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition">
              <Search size={20} />
            </button>
            <Link
              href={`${session?.user.email ? "/dashboard/profile" : "/auth"}`}
              className="hidden sm:block p-2 text-gray-700 hover:bg-gray-100 rounded-full transition"
            >
              {session?.user.email ? <User size={20} /> : <LogIn size={20} />}
            </Link>

            <button
              onClick={() => setCart(true)}
              className="relative p-2 text-gray-700 hover:text-black transition-colors"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </button>

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
      <PremiumCart isOpen={cart} setIsOpen={setCart} />
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
              className="flex  px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Leather
            </Link>
            <Link
              href="/backpacks"
              className="  flex  px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <CardSimIcon size={20} /> Backpacks
            </Link>
            <Link
              href="/dashboard/profile"
              className=" flex px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <User size={20} /> My Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
