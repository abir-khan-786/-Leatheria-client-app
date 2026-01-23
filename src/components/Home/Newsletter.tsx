"use client"
import React from "react"
import { Send } from "lucide-react"

const Newsletter = () => {
  return (
    <section className="py-20 bg-[#F9F6F2]">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">
          Stay in the Loop
        </h2>
        <p className="text-gray-600 italic">
          নতুন কালেকশন এবং এক্সক্লুসিভ অফারের আপডেট পেতে সাবস্ক্রাইব করুন।
        </p>
        <form className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-grow p-4 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-orange-600"
          />
          <button className="w-full sm:w-auto bg-gray-900 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition">
            Subscribe <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}
export default Newsletter
