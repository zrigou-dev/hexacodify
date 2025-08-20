"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1f2a45] to-[#2a3d66] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            About Us
          </h3>
          <p className="text-sm text-gray-300">
            We are a passionate team of developers and designers dedicated to
            delivering exceptional web and mobile solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link href="/services">Our Services</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Legal</h3>
          <ul className="space-y-3">
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link href="/legal/policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link href="/legal/terms">Terms of Service</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link href="/legal/cookie">Cookie Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+212 770502436</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400" />
              <span>contact@hexacodify.com</span>
            </li>
          </ul>
          {/* <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300"
            >
              <FaFacebookF className="text-black" />
            </a>
            <a
              href="#"
              className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300"
            >
              <FaTwitter className="text-black" />
            </a>
            <a
              href="#"
              className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300"
            >
              <FaLinkedinIn className="text-black" />
            </a>
            <a
              href="#"
              className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300"
            >
              <FaEnvelope className="text-black" />
            </a>
          </div> */}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © 2025 HexaCodify. All rights reserved. Powered by Creativity &
          Passion ❤💖.
        </p>
      </div>
    </footer>
  );
}
