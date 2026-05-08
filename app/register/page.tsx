"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(
      "http://127.0.0.1:8000/api/auth/register/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      alert("Account Created");

      router.push("/login");
    } else {
      alert("Registration Failed");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-zinc-900 p-10 rounded-3xl border border-white/10"
      >

        <h1 className="text-4xl font-bold mb-10 text-center">
          Create Account
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none"
          />

        </div>

        <button className="mt-10 w-full py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
          Register
        </button>

      </form>

    </main>
  );
}