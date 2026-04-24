import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Default badges data (could come from backend later)
const defaultBadges = [
  { id: 1, name: "Explorer Level 1", icon: "🌍", unlocked: true },
  { id: 2, name: "Beach Lover", icon: "🏖️", unlocked: true },
  { id: 3, name: "Mountain Trekker", icon: "🏔️", unlocked: false },
  { id: 4, name: "Photographer", icon: "📸", unlocked: true },
  { id: 5, name: "Globetrotter", icon: "🛫", unlocked: false },
  { id: 6, name: "Culture Enthusiast", icon: "🎭", unlocked: false },
];

const Badges = () => {
  const [badges, setBadges] = useState([]);

  // ✅ Load from localStorage or fallback to defaults
  useEffect(() => {
    const storedBadges = JSON.parse(localStorage.getItem("travelBadges"));
    if (storedBadges && storedBadges.length > 0) {
      setBadges(storedBadges);
    } else {
      setBadges(defaultBadges);
      localStorage.setItem("travelBadges", JSON.stringify(defaultBadges));
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-3xl shadow-lg max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        🏅 Earned Badges
      </h2>

      {badges.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t earned any badges yet. Start exploring!
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border ${
                badge.unlocked
                  ? "bg-yellow-100 border-yellow-300 shadow-md hover:shadow-lg"
                  : "bg-gray-100 border-gray-300 opacity-60"
              } cursor-pointer`}
            >
              <span
                className={`text-4xl mb-2 ${
                  badge.unlocked ? "opacity-100" : "opacity-50"
                }`}
              >
                {badge.icon}
              </span>
              <p
                className={`text-sm font-medium text-center ${
                  badge.unlocked ? "text-gray-800" : "text-gray-500"
                }`}
              >
                {badge.name}
              </p>

              {/* Small label for locked badges */}
              {!badge.unlocked && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-1 text-[10px] bg-gray-300 text-gray-700 px-2 py-0.5 rounded-full"
                >
                  Locked 🔒
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Badges;
