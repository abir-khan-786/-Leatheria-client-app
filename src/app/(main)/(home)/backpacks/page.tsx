"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"

// ব্যাকপ্যাক কালেকশন ডেটা
const backpacks = [
  {
    id: 3,
    name: "Vintage Traveler Backpack",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069",
  },
  {
    id: 7,
    name: "Urban Commuter Pro",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974",
  },
  {
    id: 8,
    name: "Minimalist Daypack",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1886",
  },
  {
    id: 9,
    name: "Heritage Rucksack",
    price: 7800,
    image:
      "https://images.unsplash.com/photo-1491633710366-262b6a7d946e?q=80&w=2070",
  },
]

const BackpacksPage = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header & Back Button */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <Link
              href="/shop"
              className="flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ArrowLeft size={16} /> Back to Shop
            </Link>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              Backpacks{" "}
              <span className="text-orange-600 text-lg align-top">
                ({backpacks.length})
              </span>
            </h1>
            <p className="text-gray-500 italic max-w-md">
              প্রতিদিনের অফিস হোক বা দূরের কোনো অ্যাডভেঞ্চার—আমাদের
              ব্যাকপ্যাকগুলো আপনার বিশ্বস্ত সঙ্গী।
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {backpacks.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F6F2] rounded-sm mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* কুইক অ্যাড বাটন */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button className="w-full bg-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-orange-600 hover:text-white transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
              </Link>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <span>Genuine Leather</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>Water Resistant</span>
                  </div>
                </div>
                <p className="text-lg font-serif font-bold text-gray-900">
                  ৳{product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* নিচের অফার সেকশন */}
        <div className="mt-32 p-12 bg-gray-900 rounded-sm text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white italic">
            Ready for your next journey?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            আমাদের প্রিমিয়াম ব্যাকপ্যাকগুলো স্থায়িত্ব এবং স্টাইলের এক অসাধারণ
            মেলবন্ধন। আজই অর্ডার করুন এবং উপভোগ করুন ১ বছরের ওয়ারেন্টি।
          </p>
          <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-orange-700 transition">
            Customize Your Bag
          </button>
        </div>
      </div>
    </div>
  )
}

export default BackpacksPage
