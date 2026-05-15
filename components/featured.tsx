"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function Featured() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${API_URL}/api/products/`);

      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchProducts();
}, []);

  return (
    <section
      id="featured"
      className="bg-black text-white py-20 md:py-32 px-4 sm:px-6 lg:px-10"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-24">

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Featured Collection
          </h2>

          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            Discover our premium luxury bedsheets.
          </p>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="group rounded-[30px] overflow-hidden bg-zinc-900 border border-white/10 hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] transition duration-500 shadow-2xl"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] sm:h-[380px] object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-5 md:p-7">

                <h3 className="text-2xl md:text-3xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-3 text-zinc-400 text-sm md:text-base line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <p className="text-lg md:text-2xl font-bold">
                    ₹{product.price}
                  </p>

                </div>

                <button className="mt-6 w-full py-3 md:py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition">

                  View Product

                </button>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}