"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">

        <p className="uppercase tracking-[6px] md:tracking-[10px] text-xs md:text-sm text-zinc-300 mb-6">
          Luxury Bedsheets Collection
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">

          Elevate
          <br />
          Your Bedroom

        </h1>

        <p className="mt-8 text-base md:text-xl text-zinc-300 max-w-2xl mx-auto leading-8">

          Premium comfort, elegant textures,
          and luxury bedding crafted for
          modern living.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

          <a
            href="#featured"
            className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Shop Now
          </a>

          <Link
            href="/collections"
            className="w-full sm:w-auto px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore Collection
          </Link>

        </div>

      </div>

    </section>
  );
}