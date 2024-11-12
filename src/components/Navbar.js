import React from 'react';
import piaraaLogo from '../assets/logo-piaraa.svg';
import sweetSundaeLogo from '../assets/sweetsundae-logo.png';
import indonesiaFlag from '../assets/Flag_of_Indonesia.svg';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-2 py-2  bg-deepblue overflow-hidden">
      <div className="flex items-center space-x-5 px-8">
        <img src={sweetSundaeLogo} alt="Sweet Sundae Logo" className="w-16 h-16" />
        <img src={piaraaLogo} alt="Piaraa Logo" className="w-16 h-16" />
      </div>
      <ul className="hidden md:flex md:space-x-10 text-white font-bold text-sm mr-36">
        <li><a href="#home" className="hover:text-gray-300">HOME</a></li>
        <li><a href="#products" className="hover:text-gray-300">PRODUCT</a></li>
        <li><a href="#shop" className="hover:text-gray-300">OUR SHOP</a></li>
        <li><a href="#gallery" className="hover:text-gray-300">GALLERY</a></li>
        <li><a href="#video" className="hover:text-gray-300">VIDEO</a></li>
        <li><a href="#articles" className="hover:text-gray-300">ARTICLES</a></li>
        <li><a href="#contact" className="hover:text-gray-300">CONTACT US</a></li>
        <li><img src = {indonesiaFlag} className='h-4'/></li>
      </ul>
      <div className="md:hidden">
        <button className="text-white text-sm">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
