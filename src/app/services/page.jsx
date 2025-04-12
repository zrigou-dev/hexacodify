"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  FaCode,
  FaMobile,
  FaPaintBrush,
  FaRocket,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaCode className="text-5xl" />,
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies. From responsive websites to complex enterprise solutions.",
      features: [
        "Frontend Development (React, Next.js)",
        "Backend Development (Node.js, Python)",
        "E-commerce Solutions",
        "Progressive Web Apps",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      icon: <FaMobile className="text-5xl" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "iOS & Android Development",
        "React Native Applications",
        "App Store Optimization",
        "Mobile UI/UX Design",
      ],
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 3,
      icon: <FaPaintBrush className="text-5xl" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Design Systems",
        "Interactive Prototypes",
      ],
      color: "from-pink-400 to-pink-600",
    },
    {
      id: 4,
      icon: <FaRocket className="text-5xl" />,
      title: "Digital Strategy",
      description:
        "Strategic consulting to help businesses navigate the digital landscape and achieve their goals.",
      features: [
        "Digital Transformation",
        "Technology Consulting",
        "Project Planning",
        "Market Analysis",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      id: 5,
      icon: <FaCogs className="text-5xl" />,
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance and support services to keep your digital products running smoothly.",
      features: [
        "24/7 Technical Support",
        "Performance Optimization",
        "Security Updates",
        "Regular Maintenance",
      ],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 6,
      icon: <FaChartLine className="text-5xl" />,
      title: "Analytics & Optimization",
      description:
        "Data-driven insights and optimization strategies to improve your digital presence and performance.",
      features: [
        "Performance Monitoring",
        "User Behavior Analysis",
        "Conversion Optimization",
        "SEO Implementation",
      ],
      color: "from-red-400 to-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Our Services | HexaCodify</title>
        <meta
          name="description"
          content="Discover the services we offer, including web development, mobile app development, and custom software solutions. Let's bring your ideas to life."
        />
        <meta
          name="keywords"
          content="web development, mobile app development, software solutions, custom development, app developers, technology services"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We transform your digital vision into reality with our
              comprehensive suite of services. Each solution is crafted with
              precision, innovation, and your success in mind.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
              >
                <div
                  className={`
                h-full bg-[#1f2a45] rounded-xl p-8
                transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                border border-opacity-20 border-white
                overflow-hidden
              `}
                >
                  {/* Background Gradient */}
                  <div
                    className={`
                  absolute inset-0 bg-gradient-to-br ${service.color}
                  opacity-0 group-hover:opacity-10 transition-opacity duration-300
                `}
                  />

                  {/* Icon */}
                  <div
                    className={`
                  text-yellow-400 mb-6
                  transform transition-transform duration-300
                  group-hover:scale-110 group-hover:rotate-6
                `}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-300"
                      >
                        <motion.div
                          initial={false}
                          animate={{
                            scale:
                              hoveredService === service.id ? [1, 1.2, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-2 h-2 bg-yellow-400 rounded-full mr-3"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Call to Action */}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg
              hover:bg-yellow-300 transition-all duration-300 shadow-lg"
            >
              <Link href="/contact">Get in Touch</Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
