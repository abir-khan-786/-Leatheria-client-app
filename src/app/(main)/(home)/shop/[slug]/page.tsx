"use client"
import React, { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  Star,
  Truck,
  ShieldCheck,
  ArrowRight,
  Minus,
  Plus,
  Heart,
  Share2,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

// আমাদের ডামি ডাটা (বাস্তব প্রোজেক্টে এটি API থেকে আসবে)
const allProducts = [
  {
    id: 1,
    name: "Premium Tote Bag",
    price: 4500,
    category: "Handbags",
    description:
      "একটি মার্জিত এবং প্রশস্ত টোট ব্যাগ, যা প্রতিদিনের ব্যবহারের জন্য নিখুঁত। ১০০% জেনুইন লেদার দিয়ে তৈরি।",
    images: [
      "https://images.unsplash.com/photo-1544816153-397752a2110b?q=80&w=1887",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938",
    ],
  },
  {
    id: 2,
    name: "Business Briefcase",
    price: 8500,
    category: "Office",
    description:
      "আপনার পেশাদারিত্ব বজায় রাখতে প্রিমিয়াম বিজনেস ব্রিফকেস। ল্যাপটপ এবং নথিপত্রের জন্য বিশেষ কম্পার্টমেন্ট।",
    images: [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070",
    ],
  },
  // ... অন্য প্রোডাক্টগুলো এখানে যোগ করা যাবে
]

const ProductDetails = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // আইডি অনুযায়ী প্রোডাক্ট খুঁজে বের করা
  const product = allProducts.find((p) => p.id === Number(id)) || allProducts[0]

  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ব্রেডক্রাম্ব (Navigation Path) */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-10">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/shop" className="hover:text-orange-600">
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* বাম পাশ: ইমেজ সেকশন */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-[4/5] rounded-sm overflow-hidden bg-[#F9F6F2]"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* থাম্বনেইল ইমেজেস */}
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 border-b-2 transition-all ${selectedImage === idx ? "border-orange-600 opacity-100" : "border-transparent opacity-50 hover:opacity-100"}`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="preview"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ডান পাশ: প্রোডাক্ট ইনফো */}
          <div className="flex flex-col">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <span className="text-orange-600 text-xs font-bold uppercase tracking-[0.3em] mb-4 block italic">
                {product.category} Collection
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <p className="text-3xl font-serif text-gray-900">
                  ৳{product.price.toLocaleString()}
                </p>
                <div className="h-6 w-[1px] bg-gray-200" />
                <div className="flex items-center gap-2 text-yellow-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    (120 Reviews)
                  </span>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed text-lg italic max-w-md">
                {product.description}
              </p>
            </div>

            {/* কোয়ান্টিটি এবং বাটন */}
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Quantity
                </span>
                <div className="flex items-center border border-gray-200 rounded-full px-4 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:text-orange-600 transition"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center font-bold text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:text-orange-600 transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-grow bg-gray-900 text-white py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-3">
                  Add to Shopping Bag <ArrowRight size={16} />
                </button>
                <button className="p-5 border border-gray-200 hover:bg-gray-50 transition rounded-sm group">
                  <Heart
                    size={20}
                    className="group-hover:text-red-500 transition-colors"
                  />
                </button>
                <button className="p-5 border border-gray-200 hover:bg-gray-50 transition rounded-sm">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* ফিচার লিস্ট */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-10">
              <div className="flex items-start gap-4">
                <Truck
                  className="text-orange-600"
                  size={24}
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest mb-1">
                    Fast Delivery
                  </h4>
                  <p className="text-xs text-gray-400">
                    ২-৩ কার্যদিবসের মধ্যে ডেলিভারি।
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck
                  className="text-orange-600"
                  size={24}
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest mb-1">
                    Lifetime Warranty
                  </h4>
                  <p className="text-xs text-gray-400">
                    ১০০% আসল চামড়ার নিশ্চয়তা।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
