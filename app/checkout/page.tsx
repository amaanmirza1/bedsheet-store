"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: string;
}

export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login First");

      router.push("/login");

      return;
    }

    const items = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(items);
  }, [router]);

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-5xl font-bold mb-10">
            Checkout
          </h1>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10 outline-none"
            />

            <textarea
              placeholder="Shipping Address"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10 outline-none h-40"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-zinc-900 p-10 rounded-3xl border border-white/10 h-fit">

          <h2 className="text-3xl font-bold mb-8">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center justify-between"
              >

                <p>{item.name}</p>

                <p>₹{item.price}</p>

              </div>
            ))}

          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex items-center justify-between">

            <h3 className="text-2xl font-bold">
              Total
            </h3>

            <h3 className="text-2xl font-bold">
              ₹{total}
            </h3>

          </div>

          <button
            onClick={() => {
              const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,

                amount: total * 100,

                currency: "INR",

                name: "LinenAura",

                description: "Bedsheet Purchase",

                handler: function () {
                  alert("Payment Successful");

                  localStorage.removeItem("cart");

                  router.push("/");
                },

                theme: {
                  color: "#ffffff",
                },
              };

              const razor = new (window as any).Razorpay(options);

              razor.open();
            }}
            className="mt-10 w-full py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Proceed To Payment
          </button>

        </div>

      </div>

    </main>
  );
}