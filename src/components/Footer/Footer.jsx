import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#1c3b72] text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 w-auto object-contain" // Taille ajustée du logo
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
