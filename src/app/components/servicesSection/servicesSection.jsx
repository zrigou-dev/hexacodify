"use client";

import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-wide">
          Discover Our Premium Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Development Card */}
          <motion.div
            className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] text-white p-6 rounded-lg shadow-2xl transition-all duration-150 ease-in-out transform hover:scale-105 hover:rotate-2 hover:bg-[#1f2a45]"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="flex justify-center items-center mb-4">
              <FaCode className="text-4xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 transition-all duration-150 ease-in-out hover:text-yellow-500">
              Web Development
            </h3>
            <p className="text-gray-300 text-lg">
              We build cutting-edge, SEO-optimized websites to ensure your
              business stands out in the digital world.
            </p>
          </motion.div>

          {/* Mobile App Development Card */}
          <motion.div
            className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] text-white p-6 rounded-lg shadow-2xl transition-all duration-150 ease-in-out transform hover:scale-105 hover:rotate-2 hover:bg-[#1f2a45]"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="flex justify-center items-center mb-4">
              <FaMobileAlt className="text-4xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 transition-all duration-150 ease-in-out hover:text-yellow-500">
              Mobile App Development
            </h3>
            <p className="text-gray-300 text-lg">
              We specialize in creating mobile applications that provide
              seamless and engaging user experiences on Android and iOS.
            </p>
          </motion.div>

          {/* UI/UX Design Card */}
          <motion.div
            className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] text-white p-6 rounded-lg shadow-2xl transition-all duration-150 ease-in-out transform hover:scale-105 hover:rotate-2 hover:bg-[#1f2a45]"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="flex justify-center items-center mb-4">
              <FaPaintBrush className="text-4xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 transition-all duration-150 ease-in-out hover:text-yellow-500">
              UI/UX Design
            </h3>
            <p className="text-gray-300 text-lg">
              Our UI/UX experts craft visually appealing, easy-to-navigate
              interfaces to ensure maximum user engagement.
            </p>
          </motion.div>

          {/* SEO Optimization Card */}
          <motion.div
            className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] text-white p-6 rounded-lg shadow-2xl transition-all duration-150 ease-in-out transform hover:scale-105 hover:rotate-2 hover:bg-[#1f2a45]"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="flex justify-center items-center mb-4">
              <FaSearch className="text-4xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 transition-all duration-150 ease-in-out hover:text-yellow-500">
              SEO Optimization
            </h3>
            <p className="text-gray-300 text-lg">
              Our SEO strategies are designed to help your website rank higher
              on search engines and attract more organic traffic.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
