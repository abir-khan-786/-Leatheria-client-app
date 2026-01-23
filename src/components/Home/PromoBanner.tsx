"use client"
import React from "react"

const PromoBanner = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] rounded-3xl overflow-hidden flex items-center bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?q=80&w=2070&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Offer"
          />
          <div className="relative z-10 p-12 md:p-20 space-y-4">
            <h3 className="text-orange-500 font-bold tracking-[0.2em] uppercase">
              Limited Time Offer
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif text-white font-bold">
              Get 20% Off Your <br /> First Order
            </h2>
            <button className="mt-4 bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition">
              Claim Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PromoBanner
