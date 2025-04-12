"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import styles from "./header.module.css";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : ""
      } fixed top-0 left-0 w-full z-50 bg-blue-900 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <div className="font-logo text-white text-[18px]">
                <span className="text-[30px] md:text-[40px] text-yellow-400">
                  HEXA
                </span>
                Codify
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10 items-center">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "blogs", href: "/blogs" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons and Contact */}
          <div className="hidden md:flex items-center space-x-4">
            {/* {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="text-white hover:text-yellow-400 w-6 h-6 cursor-pointer"
                />
              )
            )} */}
            {/* Button with Link to /contact */}
            <Link href="/contact">
              <Button className="text-blue-900 bg-yellow-400 hover:bg-yellow-300">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-900 rounded-lg mt-4 py-4 space-y-2"
          >
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "blogs", href: "/blogs" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={()=> setIsMenuOpen(false)}
                className="block px-4 py-2 text-white hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}
            {/* Button with Link to /contact */}
            <Link href="/contact">
              <Button className="w-full mt-4 text-blue-900 bg-yellow-400 hover:bg-yellow-300">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}
