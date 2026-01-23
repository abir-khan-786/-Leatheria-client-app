"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SlidersHorizontal, ChevronDown, Grid, List } from "lucide-react"
import Link from "next/link" // ১. লিঙ্ক ইম্পোর্ট করো

const allProducts = [
  {
    id: 1,
    name: "Premium Tote Bag",
    price: 4500,
    category: "Handbags",
    image:
      "https://images.unsplash.com/photo-1544816153-397752a2110b?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Business Briefcase",
    price: 8500,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Vintage Backpack",
    price: 5200,
    category: "Backpacks",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Slim Leather Wallet",
    price: 1500,
    category: "Wallets",
    image:
      "https://images.unsplash.com/photo-1627123430984-71659b9cd929?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Travel Messenger",
    price: 3800,
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Leather Belt",
    price: 950,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop",
  },
]

const categories = [
  "All",
  "Handbags",
  "Backpacks",
  "Wallets",
  "Office",
  "Travel",
]

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Newest")

  const filteredProducts = allProducts.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory,
  )

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#F9F6F2] py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
          The Collection
        </h1>
        <p className="text-gray-500 italic max-w-lg mx-auto">
          Explore our range of meticulously crafted leather goods.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ফিল্টার বার কোড এখানে থাকবে... */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                className="group cursor-pointer"
              >
                {/* ২. লিঙ্ক দিয়ে প্রোডাক্ট কার্ড র‍্যাপ করো */}
                <Link href={`/shop/${product.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button className="w-full bg-white/90 backdrop-blur-md py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-colors shadow-xl">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>

                <div className="mt-6 flex justify-between items-start">
                  <Link href={`/product/${product.id}`}>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                        {product.category}
                      </p>
                    </div>
                  </Link>
                  <p className="text-sm font-serif font-bold text-orange-600">
                    ৳{product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
