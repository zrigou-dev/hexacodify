"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | HexaCodify</title>
        <meta
          name="description"
          content="Get in touch with us for your web and mobile development needs. We are here to help you bring your digital ideas to life."
        />
        <meta
          name="keywords"
          content="contact us, web development, mobile app development, app developers, customer support, contact form"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className="relative bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] py-32 min-h-screen overflow-hidden">
        {/* Background Dynamic Elements */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#1f2a45] via-[#0a1d3d] to-[#2a3d66] opacity-20 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#1f2a45] to-[#283C50] opacity-15 z-0"></div>

        {/* Hero Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl font-extrabold text-white mb-8"
          >
            Let's Stay Connected
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Reach out to us easily through your preferred communication method.
            We're just a click away.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {/* Email */}
          <motion.a
            href="mailto:contact@hexacodify.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[#1f2a45] border border-gray-700 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-yellow-400/20 transition-shadow cursor-pointer hover:scale-105"
          >
            <Mail className="mx-auto mb-4 w-10 h-10 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300 underline">contact@hexacodify.com</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+212770502436"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-[#1f2a45] border border-gray-700 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-yellow-400/20 transition-shadow cursor-pointer hover:scale-105"
          >
            <Phone className="mx-auto mb-4 w-10 h-10 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300 underline">+212 770502436</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/+212770502436"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-[#1f2a45] border border-gray-700 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-yellow-400/20 transition-shadow cursor-pointer hover:scale-105"
          >
            <MessageCircle className="mx-auto mb-4 w-10 h-10 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-300 underline">Chat on WhatsApp</p>
          </motion.a>
        </div>
      </section>
    </>
  );
}
