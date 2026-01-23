"use client"
import React from "react"
import { motion } from "framer-motion"
import { Award, Users, Globe, PenTool } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="bg-white pt-24">
      {/* ১. হিরো সেকশন - স্টোরিটেলিং শুরু */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524295928322-4b98c5e7963e?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          alt="Leather Crafting"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white font-bold mb-6"
          >
            The Art of Leather
          </motion.h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto italic">
            আমাদের প্রতিটি ব্যাগ একটি গল্প বলে—গল্পটি পরিশ্রমের, আভিজাত্যের এবং
            দীর্ঘস্থায়ী সৌন্দর্যের।
          </p>
        </div>
      </section>

      {/* ২. আমাদের দর্শন (Our Mission) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600 italic">
              Since 2024
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-tight">
              পিওর লেদারের আভিজাত্য এখন আপনার হাতের নাগালে।
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              আমরা Leatheria-তে বিশ্বাস করি যে একটি ব্যাগ শুধুমাত্র একটি
              অ্যাক্সেসরি নয়, বরং এটি আপনার ব্যক্তিত্বের প্রতিফলন। তাই আমরা সারা
              দেশ থেকে সেরা মানের লেদার সংগ্রহ করি এবং অভিজ্ঞ কারিগরদের মাধ্যমে
              তা রূপ দিই অনন্য সব ডিজাইনে।
            </p>
          </motion.div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1473188531955-1115ef777cde?q=80&w=1966&auto=format&fit=crop"
              className="rounded-sm shadow-2xl"
              alt="Our Story"
            />
            <div className="absolute -bottom-10 -left-10 bg-orange-600 text-white p-8 hidden md:block">
              <p className="text-4xl font-serif font-bold italic">100%</p>
              <p className="text-xs uppercase tracking-widest font-bold">
                Genuine Leather
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ৩. স্ট্যাটাস সেকশন (Stats) */}
      <section className="bg-[#F9F6F2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Award />, label: "Years Experience", value: "2+" },
            { icon: <Users />, label: "Happy Customers", value: "5k+" },
            {
              icon: <Globe />,
              label: "Worldwide Shipping",
              value: "Available",
            },
            { icon: <PenTool />, label: "Custom Designs", value: "100+" },
          ].map((stat, i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-center text-orange-600">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-serif font-bold text-gray-900">
                {stat.value}
              </h4>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ৪. আমাদের কারুশিল্প (The Craft) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-serif font-bold">How We Create</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 font-serif text-gray-200">01</div>
              <h5 className="font-bold uppercase tracking-widest mb-4">
                Selection
              </h5>
              <p className="text-gray-500 text-sm italic">
                সেরা মানের চামড়া বাছাই করা হয় প্রতিটি ব্যাগের জন্য।
              </p>
            </div>
            <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow bg-gray-900 text-white">
              <div className="text-4xl mb-4 font-serif text-gray-800">02</div>
              <h5 className="font-bold uppercase tracking-widest mb-4">
                Design
              </h5>
              <p className="text-gray-400 text-sm italic">
                আধুনিক ফ্যাশনের সাথে তাল মিলিয়ে ইউনিক ডিজাইন তৈরি।
              </p>
            </div>
            <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 font-serif text-gray-200">03</div>
              <h5 className="font-bold uppercase tracking-widest mb-4">
                Crafting
              </h5>
              <p className="text-gray-500 text-sm italic">
                নিপুণ হাতের ছোঁয়ায় তৈরি হয় আপনার স্বপ্নের ব্যাগ।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
