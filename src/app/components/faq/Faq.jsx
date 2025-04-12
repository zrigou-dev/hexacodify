"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <motion.h2
          className="text-4xl sm:text-5xl text-center font-bold text-[#2a3d66] mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {/* Question 1 */}
          {[
            {
              question: "What services do you offer?",
              answer:
                "We provide web development, app development, digital marketing, branding, and custom solutions tailored to your business needs.",
            },
            {
              question: "How long does it take to complete a project?",
              answer:
                "The timeline for each project depends on its complexity, but we prioritize fast, quality delivery while ensuring the best results.",
            },
            {
              question: "What makes your team different?",
              answer:
                "Our team stands out for its expertise, creativity, and dedication to providing exceptional results on every project. We tailor solutions to meet your specific needs.",
            },
            {
              question: "How can I get in touch with you?",
              answer:
                "You can reach out to us via email, contact form, or through our social media channels. We’ll respond promptly to all inquiries.",
            },
            {
              question: "What is the cost of your services?",
              answer:
                "Our prices depend on the type and scale of the project. We offer competitive rates and transparent pricing to ensure you get the best value.",
            },
            {
              question: "Can I request a custom quote?",
              answer:
                "Yes, we offer custom quotes based on the specific needs of your project. Get in touch with us to discuss your requirements.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#1f2a45] rounded-lg shadow-xl text-white overflow-hidden transition-all duration-300"
              transition={{ duration: 0.3 }}
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-2xl text-yellow-400" />
                ) : (
                  <FaChevronDown className="text-2xl text-yellow-400" />
                )}
              </div>
              {activeIndex === index && (
                <motion.div
                  className="bg-[#2a3d66] p-6 text-lg text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
