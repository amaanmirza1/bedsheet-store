"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(items);
  }, []);

  function removeFromCart(indexToRemove: number) {
    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  }

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-16">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-zinc-400">
            Cart is empty.
          </p>
        ) : (
          <div className="space-y-8">

            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center justify-between bg-zinc-900 p-6 rounded-3xl border border-white/10"
              >

                <div className="flex items-center gap-6">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-2xl object-cover"
                  />

                  <div>

                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-zinc-400 mt-2">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="px-6 py-3 bg-red-500 rounded-full hover:bg-red-600 transition"
                >
                  Remove
                </button>

              </div>
            ))}

            <div className="flex items-center justify-between pt-10 border-t border-white/10">

              <h2 className="text-4xl font-bold">
                Total: ₹{total}
              </h2>

              <a
                href="/checkout"
                className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
              >
                Checkout
              </a>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}