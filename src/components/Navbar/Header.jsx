// src/Header.tsx
import React, { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext"; // Si tu utilises un contexte
// src/Header.js
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";


const Header = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser(); // Utilisation du contexte pour récupérer l'utilisateur connecté

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    // Récupérer les utilisateurs depuis JSON Server
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const currentUser = user || users[0]; // Utiliser l'utilisateur du contexte ou le premier utilisateur de la liste

  return (
    <header className="bg-[#1c3b72] text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div onClick={handleNavigate} className="logo hover:cursor-pointer">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 w-auto object-contain" // Taille ajustée du logo
          />
          <div className="flex space-y-6 list-none">
            <p>
              C-<span className="text-[#93d500]">GBE</span>
            </p>
          </div>
        </div>

        {/* Navigation */}
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
                href="/historiquepaiement"
                className="text-gray-300 hover:text-white no-underline transition duration-300"
              >
                Historique
              </a>
            </li>
            <li></li>
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

        {/* Affichage du nom de l'utilisateur connecté */}
        <div className="flex items-center space-x-4">
          <span className="text-white">{currentUser?.nom}</span>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none bg-transparent border-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
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

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden flex flex-col bg-[#1c3b72] w-full px-4 py-2 transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-10"
        }`}
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
