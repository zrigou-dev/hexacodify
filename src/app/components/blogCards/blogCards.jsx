"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegClock, FaRegComment } from "react-icons/fa";

export default function BlogCardsSection() {
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
          Latest Blogs
        </motion.h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Blog Card 1 */}
          <Link href="blogs/web-development">
            <motion.div
              className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/web.jpg"
                  alt="Web Development"
                  className="w-full h-48 object-cover transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Essential Web Development Tools for 2025
                </h3>
                <p className="text-lg mb-4">
                  Explore the latest tools and frameworks every web developer
                  needs in 2025.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <FaRegClock className="mr-2" />
                  <span>7 min read</span>
                  <div className="mx-4">|</div>
                  <FaRegComment className="mr-2" />
                  <span>20 Comments</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Blog Card 2 */}
          <Link href="blogs/seo-strategies">
            <motion.div
              className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/seo.jpg"
                  alt="SEO Strategies"
                  className="w-full h-48 object-cover transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  SEO Strategies to Boost Your Website's Rank in 2025
                </h3>
                <p className="text-lg mb-4">
                  Learn the most effective SEO strategies to get your website
                  ranking higher on search engines.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <FaRegClock className="mr-2" />
                  <span>8 min read</span>
                  <div className="mx-4">|</div>
                  <FaRegComment className="mr-2" />
                  <span>15 Comments</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Blog Card 3 */}
          <Link href="blogs/Securing-website">
            <motion.div
              className="bg-[#1f2a45] rounded-lg shadow-xl hover:shadow-2xl text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/secure.jpg"
                  alt="Website Security"
                  className="w-full h-48 object-cover transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Securing Your Website: Best Practices for 2025
                </h3>
                <p className="text-lg mb-4">
                  Learn how to secure your website from common security threats
                  and maintain user trust.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <FaRegClock className="mr-2" />
                  <span>9 min read</span>
                  <div className="mx-4">|</div>
                  <FaRegComment className="mr-2" />
                  <span>22 Comments</span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Show More Button */}
        <div className="text-center mt-16">
          <Link href="/blogs">
            <motion.button
              className="bg-yellow-400 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Show More
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
