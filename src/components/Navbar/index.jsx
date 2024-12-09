
function Navbar() {
    return (
      <header className="bg-primary shadow-md py-4 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-textPrimary">
            Welcome to Default Layout
          </h1>
          <nav className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-buttonPrimary hover:text-secondary transition-colors"
            >
              Home
            </a>
          </nav>
        </div>
      </header>
    );
}

export default Navbar;
