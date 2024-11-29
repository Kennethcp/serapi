import React from "react";
import { useLocation } from "react-router-dom";
import piaraaLogo from "../assets/logo-piaraa.svg";
import indonesiaFlag from "../assets/Flag_of_Indonesia.svg";

const Navbar = () => {
  const location = useLocation();

  // Rute halaman tertentu untuk konfigurasi menu
  const currentPath = location.pathname;

  // Konfigurasi navigasi berdasarkan halaman
  const navLinks = {
    common: [
      { name: "HOME", path: "/" },
      { name: "LOGIN", path: "/login" },
    ],
    otherPages: [
      { name: "HOME", path: "/home" },
      { name: "INVESTMENT", path: "/dashboardnav" },
      { name: "GALLERY", path: "/gallery" },
      { name: "CONTACT US", path: "/contact-us" },
    ],
  };

  // Tentukan menu yang akan dirender
  const linksToRender =
    currentPath === "/" || currentPath === "/login" || currentPath === "/create-account"
      ? navLinks.common
      : navLinks.otherPages;

  return (
    <nav className="w-full flex justify-between items-center px-2 py-2 z-50 bg-deepblue fixed">
      <div className="flex items-center space-x-5 px-8 ml-10">
        <img src={piaraaLogo} alt="Piaraa Logo" className="w-16 h-16" />
      </div>
      <ul className="hidden md:flex md:space-x-10 text-white font-bold text-sm mr-36">
        {linksToRender.map((link) => (
          <li key={link.name}>
            <a href={link.path} className="hover:text-gray-300">
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <img src={indonesiaFlag} className="h-4" alt="Indonesia Flag" />
        </li>
      </ul>
      <div className="md:hidden">
        <button className="text-white text-sm">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
