"use client"
import { useState } from "react"

export default function PremiumCart({ isOpen, setIsOpen }: any) {
  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header: Clean & Bold */}
        <div className="px-8 py-7 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              MY CART
            </h2>
            <p className="text-xs text-gray-400 font-medium tracking-widest mt-1">
              3 ITEMS SELECTED
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="group p-2 hover:rotate-90 transition-transform duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body: Scrollable Product List */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 custom-scrollbar">
          {/* Product Item 1 */}
          <div className="flex gap-6 group">
            <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400"
                alt="Leather Bag"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    Vintage Tan Messenger Bag
                  </h3>
                  <p className="text-base font-black text-gray-900 ml-4">
                    $210
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter font-medium">
                  Full Grain Leather
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Modern Quantity Selector */}
                <div className="flex items-center bg-gray-50 rounded-full px-1 border border-gray-100">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    -
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900">
                    1
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    +
                  </button>
                </div>
                <button className="text-[11px] font-bold text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-6 group">
            <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400"
                alt="Leather Bag"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    Vintage Tan Messenger Bag
                  </h3>
                  <p className="text-base font-black text-gray-900 ml-4">
                    $210
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter font-medium">
                  Full Grain Leather
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Modern Quantity Selector */}
                <div className="flex items-center bg-gray-50 rounded-full px-1 border border-gray-100">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    -
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900">
                    1
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    +
                  </button>
                </div>
                <button className="text-[11px] font-bold text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-6 group">
            <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400"
                alt="Leather Bag"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    Vintage Tan Messenger Bag
                  </h3>
                  <p className="text-base font-black text-gray-900 ml-4">
                    $210
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter font-medium">
                  Full Grain Leather
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Modern Quantity Selector */}
                <div className="flex items-center bg-gray-50 rounded-full px-1 border border-gray-100">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    -
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900">
                    1
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    +
                  </button>
                </div>
                <button className="text-[11px] font-bold text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-6 group">
            <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400"
                alt="Leather Bag"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    Vintage Tan Messenger Bag
                  </h3>
                  <p className="text-base font-black text-gray-900 ml-4">
                    $210
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter font-medium">
                  Full Grain Leather
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Modern Quantity Selector */}
                <div className="flex items-center bg-gray-50 rounded-full px-1 border border-gray-100">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    -
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900">
                    1
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    +
                  </button>
                </div>
                <button className="text-[11px] font-bold text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-6 group">
            <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400"
                alt="Leather Bag"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    Vintage Tan Messenger Bag
                  </h3>
                  <p className="text-base font-black text-gray-900 ml-4">
                    $210
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter font-medium">
                  Full Grain Leather
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Modern Quantity Selector */}
                <div className="flex items-center bg-gray-50 rounded-full px-1 border border-gray-100">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    -
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900">
                    1
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                    +
                  </button>
                </div>
                <button className="text-[11px] font-bold text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* Repeat More Items... */}
        </div>

        {/* Footer: Floating Total Box */}
        <div className="p-8 border-t border-gray-100 flex-shrink-0 bg-white">
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-gray-400 text-sm font-medium">
              <span>Subtotal</span>
              <span className="text-gray-900">$210.00</span>
            </div>
            <div className="flex justify-between text-gray-400 text-sm font-medium">
              <span>Delivery</span>
              <span className="text-green-600 font-bold uppercase text-[10px] tracking-wider bg-green-50 px-2 py-1 rounded">
                Free
              </span>
            </div>
            <div className="flex justify-between items-end pt-2">
              <span className="text-gray-900 font-bold">Total Amount</span>
              <span className="text-3xl font-black text-gray-900 tracking-tighter">
                $210.00
              </span>
            </div>
          </div>

          <button className="relative w-full overflow-hidden bg-gray-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] group transition-all active:scale-[0.97] hover:bg-black">
            <span className="relative z-10">Checkout Securely</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <p className="mt-6 text-center text-[10px] text-gray-400 font-medium uppercase tracKing-[0.1em]">
            Payments protected by{" "}
            <span className="text-gray-900 font-bold">Leatheria SSL</span>
          </p>
        </div>
      </div>
    </>
  )
}
