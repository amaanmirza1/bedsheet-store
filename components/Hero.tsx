"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-7xl md:text-8xl font-extrabold leading-tight"
        >
          Luxury Bedsheets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-zinc-300 text-lg max-w-2xl mx-auto"
        >
          Elevate your bedroom with premium comfort and elegant modern designs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 mt-10"
        >

          <a
            href="#featured"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Shop Now
          </a>

          <a
            href="#featured"
            className="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Explore
          </a>

        </motion.div>

      </motion.div>

    </section>
  );
}