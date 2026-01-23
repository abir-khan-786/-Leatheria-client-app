"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#F9F6F2]">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (একটি হালকা শেপ) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EAE3D9] hidden lg:block -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ১. টেক্সট কন্টেন্ট */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block px-4 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full uppercase tracking-widest"
              >
                Handcrafted Excellence
              </motion.span>

              <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 leading-[1.1]">
                Elegant <br />
                <span className="text-orange-600 italic">Leather</span> Bags
              </h1>

              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                আপনার ব্যক্তিত্বকে আরও আকর্ষণীয় করতে আমরা নিয়ে এসেছি প্রিমিয়াম
                কোয়ালিটির ১০০% পিওর লেদার কালেকশন।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                href="/shop"
                className="group flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300"
              >
                Shop Collection
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center px-10 py-5 rounded-full font-semibold border border-gray-300 text-gray-900 hover:bg-white transition-all"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* ২. ইমেজ সেকশন */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-[30px_30px_0px_0px_rgba(234,227,217,1)]">
              <img
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938&auto=format&fit=crop"
                alt="Premium Leather Bag"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[2000ms]"
              />
            </div>

            {/* ছোট একটি ফ্লোটিং ব্যাজ */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 shadow-2xl rounded-2xl hidden md:block z-20"
            >
              <p className="text-3xl font-bold text-gray-900">2026</p>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                Collection
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
