"use client";

import { useEffect, useState } from "react";
import { addToCart } from "@/lib/cart";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://linenaura.onrender.com/api/products/${params.id}/`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();

        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <img
            src={`https://linenaura.onrender.com${product.image}`}
            alt={product.name}
            className="w-full rounded-3xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">

          <h1 className="text-6xl font-bold">
            {product.name}
          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-8">
            {product.description}
          </p>

          <p className="mt-8 text-4xl font-semibold">
            ₹{product.price}
          </p>

          <button
            onClick={() => {
              addToCart(product);
              alert("Product Added To Cart");
            }}
            className="mt-10 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition duration-300 w-fit"
          >
            Add To Cart
          </button>

        </div>
      </div>
    </main>
  );
}