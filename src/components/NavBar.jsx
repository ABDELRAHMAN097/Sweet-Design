import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (  
    <header className="border-b border-gray-200 bg-white  w-full top-0 left-0 z-50 mb-[50px]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h3 className="text-2xl font-bold text-primary cursor-pointer">
          HomeDo
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-8 text-gray-500 font-[500]">
          <Link to="/">
            <li
              className={`text-sm md:text-base hover:text-primary transition ${
                location.pathname === "/" ? "text-primary border-b-2 border-primary" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`text-sm md:text-base hover:text-primary transition ${
                location.pathname === "/contact" ? "text-primary border-b-2 border-primary" : ""
              }`}
            >
              Contact
            </li>
          </Link>
          <Link to="/not-found">
            <li
              className={`text-sm md:text-base hover:text-primary transition ${
                location.pathname === "/not-found" ? "text-primary border-b-2 border-primary" : ""
              }`}
            >
              Not Found
            </li>
          </Link>
          <Link to="/add-product">
            <li
              className={`text-sm md:text-base hover:text-primary transition ${
                location.pathname === "/add-product" ? "text-primary border-b-2 border-primary" : ""
              }`}
            >
              Add Product
            </li>
          </Link>
        </ul>

        {/* Mobile Icon */}
        <div
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer group relative"
        >
          {/* خطوط الأيقونة */}
          <span
            className={`block w-6 h-[2px] bg-primary rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-primary rounded my-[6px] transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-primary rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-gray-600 font-[500]">
          <Link onClick={toggleMenu} to="/">
            <li
              className={`hover:text-primary transition ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link onClick={toggleMenu} to="/contact">
            <li
              className={`hover:text-primary transition ${
                location.pathname === "/contact" ? "text-primary" : ""
              }`}
            >
              Contact
            </li>
          </Link>
          <Link onClick={toggleMenu} to="/not-found">
            <li
              className={`hover:text-primary transition ${
                location.pathname === "/not-found" ? "text-primary" : ""
              }`}
            >
              Not Found
            </li>
          </Link>
          <Link onClick={toggleMenu} to="/add-product">
            <li
              className={`hover:text-primary transition ${
                location.pathname === "/add-product" ? "text-primary" : ""
              }`}
            >
              Add Product
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
