import React, { useState } from "react";

const Top = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">🛍️ ShopMate</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Shop</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <div className="w-6 h-6 relative">
              <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 top-2.5" : "top-0"} absolute w-full`}></span>
              <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : "top-2"} absolute w-full`}></span>
              <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 bottom-2.5" : "bottom-0"} absolute w-full`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="space-y-4 font-medium text-gray-700">
            <li><a href="#" className="block">Home</a></li>
            <li><a href="#" className="block">Shop</a></li>
            <li><a href="#" className="block">About</a></li>
            <li><a href="#" className="block">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Top;
