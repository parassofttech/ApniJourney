// src/components/CTASection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Plane, Map, Globe, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-blue-600/20 via-cyan-500/34 to-blue-700/40 text-black py-16 sm:py-20 overflow-hidden">
      {/* Floating background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-cyan-400/20 rounded-full blur-3xl top-16 left-6"
          animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-blue-300/20 rounded-full blur-3xl bottom-0 right-12"
          animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl sm:max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-snug">
            ✈️ Plan Your Next <span className="text-yellow-300">Adventure</span> Now
          </h2>

          <p className="max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base text-blue-900 mb-8 sm:mb-10">
            Discover beautiful destinations, track your journeys, manage expenses,
            and share your stories — all in one travel dashboard.
          </p>

          {/* Animated icons row */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[Plane, Globe, Compass, Map].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/10 p-3 sm:p-4 rounded-full backdrop-blur-md border border-white/90 hover:bg-white/90 transition"
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-950" />
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              🚀 Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/destinations")}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition text-sm sm:text-base"
            >
              🌍 Explore Destinations
            </motion.button>
          </div>
        </motion.div>

        {/* Scrolling text animation at bottom */}
        <motion.div
          className="mt-10 sm:mt-16 text-xs sm:text-sm text-blue-950 overflow-hidden whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          🌏 Over 50+ Destinations · 🏕️ Adventure Trips · 💰 Smart Budgeting · 📸
          Travel Memories · 🌅 Personalized Recommendations · 🧭 Explore More · ✨
          Your Journey Starts Here
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
