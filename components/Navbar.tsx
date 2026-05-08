"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setLoggedIn(!!token);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");

    alert("Logged Out");

    window.location.reload();
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          LinenAura
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm uppercase tracking-wider">

          <Link
            href="/"
            className="hover:text-zinc-300 transition"
          >
            Home
          </Link>

          <a
            href="#featured"
            className="hover:text-zinc-300 transition"
          >
            Shop
          </a>

          <a
            href="#featured"
            className="hover:text-zinc-300 transition"
          >
            Collections
          </a>

          <Link
            href="/cart"
            className="hover:text-zinc-300 transition"
          >
            Cart
          </Link>

          <a
            href="mailto:yourgmail@gmail.com"
            className="hover:text-zinc-300 transition"
          >
            Contact
          </a>

          {!loggedIn ? (
            <>
              <Link
                href="/login"
                className="hover:text-zinc-300 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-5 py-2 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-500 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}