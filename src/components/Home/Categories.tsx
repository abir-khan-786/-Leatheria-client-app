"use client"
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
  {
    id: 1,
    name: "Classic Handbags",
    items: "12 Items",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1957&auto=format&fit=crop",
    href: "/shop/handbags",
    className: "md:col-span-2 h-[450px]",
  },
  {
    id: 2,
    name: "Business Briefcase",
    items: "8 Items",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop",
    href: "/shop/briefcase",
    className: "md:col-span-1 h-[450px]",
  },
  {
    id: 3,
    name: "Premium Wallets",
    items: "15 Items",
    image:
      "https://images.unsplash.com/photo-1627123430984-71659b9cd929?q=80&w=1974&auto=format&fit=crop",
    href: "/shop/wallets",
    className: "md:col-span-1 h-[350px]",
  },
  {
    id: 4,
    name: "Travel Series",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
    href: "/shop/travel",
    className: "md:col-span-2 h-[350px]",
  },
]

const Categories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Minimalist Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase mb-4 italic">
              Our Collections
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-tight">
              Crafted with Passion, <br /> Worn with Elegance.
            </h3>
          </div>
          <Link
            href="/shop"
            className="text-sm font-bold uppercase tracking-widest border-b-2 border-gray-900 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all"
          >
            Explore All
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group overflow-hidden rounded-sm cursor-pointer ${cat.className}`}
            >
              <Link href={cat.href}>
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />

                {/* Minimal Overlay - Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Text Layout */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                  <span className="text-white/60 text-xs tracking-widest uppercase mb-2">
                    {cat.items}
                  </span>
                  <h4 className="text-2xl font-serif text-white mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {cat.name}
                  </h4>
                  <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
