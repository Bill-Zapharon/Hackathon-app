// src/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1c3b72] text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="logo mb-4 md:mb-0">
          <img
            src="path/to/your/logo.png"
            alt="Tontine Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Copyright */}
        <div className="copyright text-center md:text-left mt-4 md:mt-0">
          <p>
            &copy; {new Date().getFullYear()} Tontine en Ligne. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
