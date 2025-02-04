import { useState } from "react";
import Button from "../../atoms/Button";
import NavbarBrand from "../../molecules/NavbarBrand";
import NavbarLinks from "../../molecules/NavbarLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Navbar Brand */}
        <NavbarBrand />

        {/* Desktop Links */}
        <NavbarLinks />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white w-full p-4 space-y-4">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="#" className="block">
            Top Up
          </Link>
          <Link href="#" className="block">
            Transaction
          </Link>
          <Link href="#" className="block">
            Akun
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
