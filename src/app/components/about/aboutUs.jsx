"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <motion.h2
          className="text-4xl sm:text-5xl text-center font-bold text-gray-800 mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            className="text-gray-800 text-center lg:text-left max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-lg mb-4">
              We are a passionate team of web and mobile developers dedicated to
              creating innovative solutions that drive results. Our mission is
              to deliver cutting-edge technologies that help businesses and
              individuals achieve their goals.
            </p>
            <p className="text-lg">
              Our team is made up of highly skilled developers, designers, and
              strategists, all working together to bring your ideas to life. We
              believe in collaboration, creativity, and pushing the boundaries
              of what’s possible.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 p-2 bg-gradient-to-r from-[#2a3d66] to-[#1f2a45]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="/assets/images/about.jpg"
              alt="Our Team"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
