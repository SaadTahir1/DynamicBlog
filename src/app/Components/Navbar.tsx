"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">InternationalForums</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Categories
            </a>
            <a href="#" className="hover:text-gray-400">
              Features
            </a>
          </div>

          {/* Search Icon */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type of search"
              className="hidden md:block px-3 py-1 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-800 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-800 rounded-md"
            >
              Categories
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-800 rounded-md"
            >
              Features
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}