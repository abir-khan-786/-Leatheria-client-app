"use client"
import React from "react"
import Link from "next/link"
import { Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* উপরের অংশ: বড় ব্র্যান্ড নাম এবং কন্টাক্ট লিংকর */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 border-b border-white/10 pb-20">
          <div className="space-y-8 max-w-lg">
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter">
              LEATHERIA<span className="text-orange-600">.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              আমরা বিশ্বাস করি স্থায়িত্ব এবং স্টাইলে। প্রতিটি ব্যাগ আমাদের
              কারিগরদের ভালোবাসা এবং নিখুঁত কাজের প্রতিফলন।
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-orange-600 transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="hover:text-orange-600 transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="#"
                className="hover:text-orange-600 transition-colors"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {/* কলাম ১ */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Sitemap
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition flex items-center gap-1"
                  >
                    Shop <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="hover:text-white transition">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* কলাম ২ */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Assistance
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Care Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* কলাম ৩ - শুধুমাত্র ডেস্কটপে */}
            <div className="hidden md:block space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Office
              </h4>
              <p className="text-gray-400 leading-loose">
                Banani 11, Dhaka,
                <br />
                Bangladesh - 1213
              </p>
            </div>
          </div>
        </div>

        {/* নিচের অংশ: কপিরাইট এবং লিগ্যাল */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium tracking-widest uppercase">
          <p>© {currentYear} Leatheria Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
