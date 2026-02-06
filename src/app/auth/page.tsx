"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Chrome,
  ShieldCheck,
  Outdent,
  Home,
} from "lucide-react"
import Link from "next/link"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import useSWR from "swr"
import toast, { Toaster } from "react-hot-toast"
import { authClient } from "@/components/lib/auth"

const AuthPage = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"
  // Google Login
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isLogin) {
        // --- LOGIN LOGIC ---
        const { data, error } = await authClient.signIn.email({
          email: formData.email,
          password: formData.password,
        })
        // console.log(data?.user.email)

        if (error) {
          toast.error(error.message || "Invalid credentials")
        } else {
          toast.success("Welcome back!")
          router.refresh()
          router.push(callbackUrl)
        }
      } else {
        // --- SIGN UP LOGIC ---

        const { data, error } = await authClient.signUp.email({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        })

        if (error) {
          toast.error(error.message || "Registration failed")
        } else {
          toast.success("Verification email sent! Please check your inbox.")
          setIsLogin(true) // রেজিস্ট্রেশন শেষে লগইন মোডে নিয়ে যাবে
        }
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-4 md:p-6">
      {/* Toaster যোগ করা হয়েছে */}
      <Toaster position="top-center" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-[1000px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100"
      >
        {/* Left Side: Brand */}
        <div className="hidden md:flex md:w-[40%] bg-gray-900 relative p-12 flex-col justify-between text-white">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070"
              className="w-full h-full object-cover"
              alt="Luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900" />
          </div>
          <div className="relative z-10">
            <Link
              href="/"
              className="text-xl font-serif font-black tracking-widest flex items-center gap-2"
            >
              <ShieldCheck className="text-orange-500" /> LEATHERIA
            </Link>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-serif leading-tight mb-4">
              {isLogin ? "Welcome Back." : "Join the Journey."}
            </h2>
            <p className="text-gray-400 font-light">
              The finest leather, crafted for the modern individual.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="text-center md:text-left ">
              <Link href={"/"} className=" md:hidden">
                {" "}
                <Home className="text-orange-500" />
              </Link>

              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                {isLogin ? "Sign In" : "Register"}
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                {isLogin ? "New member?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-orange-600 font-bold hover:underline"
                >
                  {isLogin ? "Create Account" : "Login Here"}
                </button>
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
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
                      required={!isLogin}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-orange-600 transition-all"
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
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-orange-600 transition-all"
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
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-orange-600 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-lg active:scale-95 disabled:bg-gray-400 mt-2"
              >
                {loading ? "Processing..." : isLogin ? "Sign In" : "Join Now"}
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative flex justify-center text-center">
                <span className="bg-white px-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  Or
                </span>
              </span>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-bold text-sm text-gray-700 shadow-sm active:scale-95"
            >
              <Chrome size={20} className="text-red-500" />
              Continue with Google
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AuthPage
