"use client"
import React from "react"
import { Truck, ShieldCheck, Award, Leaf } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Award className="w-8 h-8 text-orange-600" />,
    title: "Premium Quality",
    description:
      "১০০% খাঁটি চামড়া এবং অভিজ্ঞ কারিগর দ্বারা তৈরি প্রতিটি ব্যাগ।",
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-600" />,
    title: "Free Shipping",
    description: "৫০০০ টাকার বেশি অর্ডারে সারা বাংলাদেশে ফ্রি ডেলিভারি সুবিধা।",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
    title: "1 Year Warranty",
    description: "আমাদের প্রতিটি লেদার প্রোডাক্টে পাবেন ১ বছরের ওয়ারেন্টি।",
  },
  {
    icon: <Leaf className="w-8 h-8 text-orange-600" />,
    title: "Eco-Friendly",
    description: "পরিবেশবান্ধব পসেসিং এবং টেকসই উপাদানের ব্যবহার।",
  },
]

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-[#F9F6F2] transition-colors duration-300 group"
            >
              {/* আইকন কন্টেইনার */}
              <div className="mb-6 p-4 bg-orange-50 rounded-full group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                {feature.icon}
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
