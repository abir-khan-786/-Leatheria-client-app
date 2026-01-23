"use client"
import React from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Luxury Tote Bag",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1544816153-397752a2110b?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Vintage Backpack",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Classic Wallet",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1627123430984-71659b9cd929?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Travel Messenger",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
  },
]

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="bg-white p-3 rounded-full text-gray-900 hover:bg-orange-600 hover:text-white transition">
                    <ShoppingCart size={20} />
                  </button>
                  <button className="bg-white p-3 rounded-full text-gray-900 hover:bg-orange-600 hover:text-white transition">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-orange-600 font-bold">৳ {product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FeaturedProducts
