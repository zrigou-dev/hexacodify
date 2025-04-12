"use client";



import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] min-h-screen flex items-center justify-center text-white">
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      ></motion.div>

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          Sorry, the page you're looking for doesn't exist.
        </motion.p>
        <motion.a
          href="/"
          className="text-xl px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          Go Home
        </motion.a>
      </motion.div>

      {/* Creative Background Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-auto"
        >
          <motion.path
            fill="#fff"
            d="M0,288L1440,160L1440,320L0,320Z"
            initial={{ d: "M0,288L1440,160L1440,320L0,320Z" }}
            animate={{
              d: [
                "M0,288L1440,160L1440,320L0,320Z",
                "M0,256L1440,128L1440,320L0,320Z",
                "M0,224L1440,96L1440,320L0,320Z",
                "M0,288L1440,160L1440,320L0,320Z",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default NotFound;
