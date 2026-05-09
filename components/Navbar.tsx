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

    window.location.reload();
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold"
        >
          LinenAura
        </Link>

        {/* Links */}
        <div className="flex items-center gap-3 md:gap-8 text-[10px] md:text-sm uppercase tracking-wider overflow-x-auto scrollbar-hide">

          <Link href="/" className="whitespace-nowrap">
            Home
          </Link>

          <a
            href="#featured"
            className="whitespace-nowrap"
          >
            Shop
          </a>

          <a
            href="#featured"
            className="whitespace-nowrap"
          >
            Collections
          </a>

          <Link
            href="/cart"
            className="whitespace-nowrap"
          >
            Cart
          </Link>

          <a
            href="mailto:yourgmail@gmail.com"
            className="whitespace-nowrap"
          >
            Contact
          </a>

          {!loggedIn ? (
            <>
              <Link
                href="/login"
                className="whitespace-nowrap"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-3 py-2 md:px-5 md:py-2 bg-white text-black rounded-full font-semibold whitespace-nowrap"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-3 py-2 md:px-5 md:py-2 bg-red-500 rounded-full whitespace-nowrap"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}