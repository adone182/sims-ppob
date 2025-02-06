import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import logoImage from "../../../assets/logo.png";
import { Button } from "../../atoms/Button";
import { NavbarBrand } from "../../molecules/NavbarBrand";
import { NavbarLinks } from "../../molecules/NavbarLink"; // Import NavbarLinks
import { Links } from "../../atoms/Links";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current URL path

  // Function to check if the link is active
  const isActive = (path) =>
    location.pathname === path ? "text-red-800" : "text-gray-600";

  return (
    <header className="bg-white shadow-sm border-b-[1px] border-gray-200 fixed top-0 left-0 w-full h-16 z-50">
      <nav className="px-20 pt-6 pb-3 flex items-center justify-between">
        <NavbarBrand to="/" imageSrc={logoImage} altImg="SIMS PPOB" />
        <NavbarLinks isActive={isActive} />{" "}
        {/* Pass isActive function to NavbarLinks */}
        <div className="md:hidden flex items-center space-x-2">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</Button>
        </div>
      </nav>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-gray-800 text-white w-full p-6 absolute top-16 left-0 transition-all duration-300 ease-in-out"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <div className="flex justify-between items-center">
            <span className="text-white text-lg font-bold">Menu</span>
            <Button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              &times;
            </Button>
          </div>
          <div className="space-y-4 mt-4">
            <Links
              to="/"
              className={`block text-md font-light hover:text-red-500 ${isActive(
                "/"
              )}`}
            >
              Home
            </Links>
            <Links
              to="/topup"
              className={`block text-md font-light hover:text-red-500 ${isActive(
                "/topup"
              )}`}
            >
              Top Up
            </Links>
            <Links
              to="/transaction"
              className={`block text-md font-light hover:text-red-500 ${isActive(
                "/transaction"
              )}`}
            >
              Transaction
            </Links>
            <Links
              to="/account"
              className={`block text-md font-light hover:text-red-500 ${isActive(
                "/account"
              )}`}
            >
              Akun
            </Links>
          </div>
        </div>
      )}
    </header>
  );
};
