// src/Header.js
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1c3b72] text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center relative">
  {/* Logo */}
  <div className="logo">
    <img
      src="src/assets/LogoTontine3 (1).png"
      alt="Logo"
      className="h-14 w-auto object-contain" // Taille ajustée du logo
    />
</div>


        {/* Navigation for large screens */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 list-none">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                Quitter
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu (visible only on mobile when clicked) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden flex flex-col items-start space-y-4 bg-[#1c3b72] px-4 py-2 transition-all duration-500 ease-in-out delay-100`}
      >
        <nav>
          <ul className="space-y-4 list-none">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                Connexion
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
