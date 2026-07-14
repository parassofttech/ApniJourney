



import React from "react";
import { motion } from "framer-motion";

const DashboardSections = () => {
  const stats = [
    { title: "Total Trips", value: 12 },
    { title: "Upcoming", value: 2 },
    { title: "Favorites", value: 5 },
  ];

  return (
    <div className="px-4 pt-6 space-y-6">
      {/* Quick Stats / Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-4"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-3xl shadow-lg flex flex-col items-center justify-center"
          >
            <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Add New Trip Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button className="w-full bg-blue-600 text-white py-3 rounded-3xl font-semibold shadow-md hover:bg-blue-700 transition duration-300">
          + Add New Trip
        </button>
      </motion.div>
    </div>
  );
};

export default DashboardSections;
