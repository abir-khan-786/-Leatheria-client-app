"use client"
import React from "react"
import { motion } from "framer-motion"
import { Droplets, Sun, Wind, Sparkles } from "lucide-react"

const LeatherPage = () => {
  return (
    <div className="bg-[#FCFBFA] min-h-screen pt-28 pb-20">
      {/* ১. ইন্ট্রো সেকশন */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs italic">
              Pure Craftsmanship
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.1]">
              The Soul of <br /> <span className="italic">Leatheria</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              আমাদের চামড়াগুলো শুধুমাত্র টেকসই নয়, বরং এটি সময়ের সাথে সাথে আরও
              সুন্দর হয়ে ওঠে। আমরা ব্যবহার করি ১০০% ফুল-গ্রেইন কাউহাইড লেদার।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1524295928322-4b98c5e7963e?q=80&w=2070"
              className="w-full h-full object-cover"
              alt="Leather texture"
            />
          </motion.div>
        </div>
      </div>

      {/* ২. লেদার টাইপ সেকশন (The Science) */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Why Our Leather?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto italic">
              লেদারের মান নির্ভর করে এর গ্রেইন এবং ট্যানিং প্রসেসের ওপর।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Full Grain",
                desc: "চামড়ার উপরের স্তর যা সবচেয়ে মজবুত এবং সময়ের সাথে সাথে 'Patina' তৈরি করে।",
              },
              {
                title: "Vegetable Tanned",
                desc: "প্রাকৃতিক উপাদান ব্যবহার করে ট্যানিং করা হয়, যা পরিবেশবান্ধব এবং দীর্ঘস্থায়ী।",
              },
              {
                title: "Hand Finished",
                desc: "প্রতিটি কোণা আমাদের দক্ষ কারিগররা হাত দিয়ে ফিনিশিং দেন।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-l border-orange-600/30 pl-8 space-y-4"
              >
                <h3 className="text-xl font-serif text-orange-500">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ৩. লেদার কেয়ার টিপস (Icons) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-center text-4xl font-serif mb-16 italic">
          Leather Care Guide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Droplets />,
              title: "Keep it Dry",
              text: "বৃষ্টির পানি লাগলে সাথে সাথে নরম কাপড় দিয়ে মুছে ফেলুন।",
            },
            {
              icon: <Sun />,
              title: "Avoid Sunlight",
              text: "সরাসরি রোদে দীর্ঘক্ষণ রাখবেন না, এতে চামড়া ফেটে যেতে পারে।",
            },
            {
              icon: <Wind />,
              title: "Let it Breathe",
              text: "প্লাস্টিক ব্যাগে না রেখে সুতির ব্যাগে সংরক্ষণ করুন।",
            },
            {
              icon: <Sparkles />,
              title: "Conditioning",
              text: "প্রতি ৬ মাস অন্তর ভালো মানের লেদার কন্ডিশনার ব্যবহার করুন।",
            },
          ].map((tip, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 text-center space-y-4"
            >
              <div className="text-orange-600 flex justify-center">
                {tip.icon}
              </div>
              <h4 className="font-bold uppercase tracking-widest text-xs">
                {tip.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed italic">
                {tip.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default LeatherPage