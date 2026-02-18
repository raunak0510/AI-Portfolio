import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 ">
      
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">

        {/* Logo */}
        <h2 className="text-3xl font-semibold text-white tracking-wide">
          ProFolio AI
        </h2>

        <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
          Empowering creators with intelligent portfolio solutions.
          Build your future with AI.
        </p>

        {/* Navigation */}
        <div className="flex justify-center space-x-8 mt-8 text-sm">
          <Link href="/" className="hover:text-white transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition duration-300">
            About
          </Link>
          <Link href="/signup" className="hover:text-white transition duration-300">
            Sign Up
          </Link>
          <Link href="/login" className="hover:text-white transition duration-300">
            Login
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition duration-300">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-xs">
          © 2026 ProFolio AI. All rights reserved. <br />
          Designed & Developed by <span className="text-gray-400">@raunak_s</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
