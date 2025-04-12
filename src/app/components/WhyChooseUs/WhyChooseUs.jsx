"use client";

import { motion } from "framer-motion";
import { FaRegThumbsUp, FaCogs, FaHandshake } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <motion.h2
          className="text-4xl sm:text-5xl text-center font-bold text-white mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1: Experienced Team */}
          <motion.div
            className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300 p-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center mb-6">
              <FaRegThumbsUp className="text-6xl text-yellow-400 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              Experienced Team
            </h3>
            <p className="text-lg">
              Our highly skilled professionals bring years of experience and
              expertise to every project.
            </p>
          </motion.div>

          {/* Feature 2: Cutting-Edge Solutions */}
          <motion.div
            className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300 p-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center mb-6">
              <FaCogs className="text-6xl text-yellow-400 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              Cutting-Edge Solutions
            </h3>
            <p className="text-lg">
              We deliver innovative and customized solutions designed to help
              your business thrive in the digital world.
            </p>
          </motion.div>

          {/* Feature 3: Timely Delivery */}
          <motion.div
            className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300 p-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center mb-6">
              <FaHandshake className="text-6xl text-yellow-400 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              Timely Delivery
            </h3>
            <p className="text-lg">
              We ensure that all projects are completed within deadlines while
              maintaining the highest quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
