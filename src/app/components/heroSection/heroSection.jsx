"use client";
import { Button } from "@/components/ui/button";
import styles from "@/app/components/heroSection/heroSection.module.css";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.sectionHero}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
        {/* Title */}
        <motion.h1
          className={
            "text-5xl sm:text-6xl font-extrabold mb-6 text-yellow-400 " +
            styles.title_hero
          }
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empower Your Digital Journey
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl mb-10 max-w-3xl text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Partner with HEXACODIFY for innovative web and mobile solutions
          tailored to your business growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/contact"
            className={
              "bg-yellow-400 text-blue-900 font-semibold text-xl rounded-full px-8 py-2 hover:bg-yellow-500 flex justify-center items-center " +
              styles.button_hero
            }
          >
            Contact US
          </Link>
          <Link
            href="/services"
            className={
              "bg-white text-yellow-400 border border-yellow-400 py-2 px-8 font-semibold text-xl rounded-full flex justify-center items-center hover:bg-yellow-400 hover:text-white " +
              styles.button_hero
            }
          >
            Our Services
          </Link>
        </motion.div>

        {/* Key Features Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl">
          {[
            { text: "High-Quality Development", icon: <FaCheckCircle /> },
            { text: "Tailored Digital Solutions", icon: <FaCheckCircle /> },
            { text: "On-Time Delivery", icon: <FaCheckCircle /> },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <span className="text-yellow-400 text-2xl mr-3">
                {feature.icon}
              </span>
              <p className="text-lg">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
