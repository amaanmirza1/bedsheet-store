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
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section
  id="featured"
  className="bg-black text-white py-24 px-6"
>

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Featured Collection
          </h2>

          <p className="text-zinc-400 mt-4">
            Discover our premium luxury bedsheets.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="group rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-500 shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-2 text-zinc-400">
                  ₹{product.price}
                </p>

                <button className="mt-6 w-full py-3 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition">
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