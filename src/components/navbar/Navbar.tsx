import { useState } from "react";
import Sidebar from "./Sidebar";

import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // مسیر نسبت به ساختار پروژه‌ات باشه

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-orange-400 py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-black text-2xl font-bold">
            P_Shop
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-12 text-black font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-yellow-200 transition">
                Store
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-200 transition">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="bg-black ml-2 px-4 py-2 rounded-md text-orange-400 transition"
            >
              <HiShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-35 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="bg-black text-orange-400 px-4 py-2 rounded-md hover:scale-105 transition">
              LOGIN
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar show={menuOpen} handleClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar;
