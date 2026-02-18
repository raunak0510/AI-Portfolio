'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 
                   bg-black/70 backdrop-blur-lg 
                   border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
          ProFolio AI
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          
          <Link href="/" className="hover:text-white relative group transition duration-300">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/about" className="hover:text-white relative group transition duration-300">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/signup" className="hover:text-white relative group transition duration-300">
            Sign Up
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/login" className="hover:text-white relative group transition duration-300">
            Login
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/manageCV" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform duration-300 shadow-lg">
            Upload CV
          </Link>

        </nav>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden text-white">
          ☰
        </div>

      </div>
    </header>
  );
};

export default Navbar;
