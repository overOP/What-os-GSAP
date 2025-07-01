// src/components/Nav.jsx
import React, { useState } from "react";
import { NavLink } from "react-router";
import { navData } from "../Data/Data";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-gray-900 text-white">
      {/* -------- TOP BAR -------- */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <span className="text-2xl font-bold tracking-wide">HORAA</span>

        {/* ----- Desktop links ----- */}
        <ul className="hidden md:flex items-center space-x-8">
          {navData.map(({ id, url, title }) => (
            <li key={id}>
              <NavLink
                to={url}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-gray-400 transition-colors"
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ----- Burger button ----- */}
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* -------- Mobile menu -------- */}
      <ul
        id="mobile-menu"
        className={`md:hidden flex flex-col space-y-4 px-4 pb-6 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navData.map(({ id, url, title }) => (
          <li key={id}>
            <NavLink
              to={url}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-white font-semibold"
                  : "block text-gray-300 hover:text-gray-400 transition-colors"
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
