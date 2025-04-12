"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { FaRocket, FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | HexaCodify</title>
        <meta
          name="description"
          content="Learn more about our team of expert web and mobile app developers. Discover our mission, vision, and the values that drive us."
        />
        <meta
          name="keywords"
          content="about us, web development, mobile app development, our team, company values, software solutions"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Title Section */}
          <motion.h2
            className="text-4xl sm:text-5xl text-center font-bold text-white mb-16"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Image or Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="bg-[#1f2a45] rounded-lg shadow-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image or illustration
                  alt="About Us"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Mission Statement */}
              <div className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Our Mission
                </h3>
                <p className="text-lg">
                  We are on a mission to revolutionize the digital landscape by
                  delivering innovative, scalable, and user-centric solutions
                  that empower businesses to thrive in the modern world.
                </p>
              </div>

              {/* Values Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Value 1: Innovation */}
                <motion.div
                  className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300 p-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <FaLightbulb className="text-4xl text-yellow-400 mr-4" />
                    <h4 className="text-xl font-semibold">Innovation</h4>
                  </div>
                  <p className="text-lg">
                    We constantly push boundaries to bring you cutting-edge
                    solutions.
                  </p>
                </motion.div>

                {/* Value 2: Collaboration */}
                <motion.div
                  className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300 p-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <FaUsers className="text-4xl text-yellow-400 mr-4" />
                    <h4 className="text-xl font-semibold">Collaboration</h4>
                  </div>
                  <p className="text-lg">
                    We believe in working together to achieve extraordinary
                    results.
                  </p>
                </motion.div>

                {/* Value 3: Passion */}
                <motion.div
                  className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300 p-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <FaHeart className="text-4xl text-yellow-400 mr-4" />
                    <h4 className="text-xl font-semibold">Passion</h4>
                  </div>
                  <p className="text-lg">
                    We pour our hearts into every project to ensure your
                    success.
                  </p>
                </motion.div>

                {/* Value 4: Excellence */}
                <motion.div
                  className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300 p-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <FaRocket className="text-4xl text-yellow-400 mr-4" />
                    <h4 className="text-xl font-semibold">Excellence</h4>
                  </div>
                  <p className="text-lg">
                    We strive for perfection in every detail to exceed your
                    expectations.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
