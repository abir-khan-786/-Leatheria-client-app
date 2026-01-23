"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Lock, User, ArrowRight, Github, Chrome } from "lucide-react"
import Link from "next/link"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-[#F9F6F2] flex items-center justify-center p-6 pt-32 pb-20">
      <motion.div
        layout
        className="bg-white w-full max-w-[1000px] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
      >
        {/* বাম পাশ: ইমেজ এবং টেক্সট (ডেক্সটপে দেখাবে) */}
        <div className="hidden md:flex md:w-1/2 bg-gray-900 relative p-12 flex-col justify-between text-white">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938"
              className="w-full h-full object-cover"
              alt="Leather background"
            />
          </div>
          <div className="relative z-10">
            <Link
              href="/"
              className="text-2xl font-serif font-black tracking-widest"
            >
              LEATHERIA
            </Link>
          </div>
          <div className="relative z-10 space-y-4">
            <h2 className="text-4xl font-serif leading-tight">
              {isLogin
                ? "Welcome Back to Luxury."
                : "Start Your Journey with Us."}
            </h2>
            <p className="text-gray-400 italic">
              {isLogin
                ? "আপনার পছন্দের কালেকশনগুলো ফিরে পেতে লগইন করুন।"
                : "নতুন মেম্বার হিসেবে জয়েন করুন এবং এক্সক্লুসিভ অফার পান।"}
            </p>
          </div>
        </div>

        {/* ডান পাশ: ফর্ম সেকশন */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              {isLogin ? "Sign In" : "Create Account"}
            </h3>
            <p className="text-gray-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-orange-600 font-bold hover:underline"
              >
                {isLogin ? "Register Now" : "Login Here"}
              </button>
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative"
                >
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <button className="text-xs font-bold text-gray-400 hover:text-orange-600">
                  Forgot Password?
                </button>
              </div>
            )}

            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-lg active:scale-95">
              {isLogin ? "Login" : "Join Now"} <ArrowRight size={16} />
            </button>
          </form>

          {/* সোশ্যাল লগইন */}
          <div className="mt-10">
            <div className="relative mb-8 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative bg-white px-4 text-xs text-gray-400 uppercase tracking-widest">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition font-bold text-xs">
                <Chrome size={18} /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition font-bold text-xs">
                <Github size={18} /> GitHub
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AuthPage
