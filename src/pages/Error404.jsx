import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-50 to-green-100 flex items-center justify-center px-5">

      {/* Background Blobs */}
      <div className="absolute w-72 h-72 bg-blue-300/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-green-300/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute top-20 left-20 text-cyan-400"
      >
        <Compass size={55} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 bg-white/80 backdrop-blur-xl rounded-[35px] shadow-2xl p-10 max-w-2xl w-full text-center border border-white"
      >
        {/* 404 */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Emoji */}
        <motion.div
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-7xl mt-3"
        >
          🧭
        </motion.div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold text-gray-800">
          Oops! Destination Lost
        </h2>

        <p className="mt-4 text-gray-600 leading-7 text-lg">
          Looks like the page you're searching for has taken a different route.
          Let's get you back on the journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

          <Link
            to="/"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <Home size={22} />
            Go Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-3 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition"
          >
            <ArrowLeft size={22} />
            Go Back
          </button>

        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} ApniJourney • Explore Without Limits
        </p>
      </motion.div>
    </div>
  );
};

export default Error404;