"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Navbar from "@/components/shared/Navber"
import Footer from "@/components/shared/Footer"
 
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() // পেজ চেঞ্জ ট্র্যাক করার জন্য

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <Navbar />

      {/* AnimatePresence পেজ ট্রানজিশন হ্যান্ডেল করে */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname} // কি (key) পরিবর্তন হলে অ্যানিমেশন আবার চলবে
          initial={{ opacity: 0, y: 20 }} // শুরুতে কেমন থাকবে
          animate={{ opacity: 1, y: 0 }} // স্ক্রিনে আসার পর কেমন হবে
          exit={{ opacity: 0, y: -20 }} // চলে যাওয়ার সময় কেমন হবে
          transition={{ duration: 0.5, ease: "easeOut" }} // অ্যানিমেশন টাইমিং
          className="flex-grow pt-[80px] md:pt-[100px]"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default MainLayout
