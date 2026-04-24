import React from "react";
import { motion } from "framer-motion";

const DashboardPartial = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 pb-8">
      {/* Header / Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center py-4"
      >
        <h1 className="text-xl font-bold">Hi, Paras!</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-white shadow">🔔</button>
          <button className="p-2 rounded-full bg-white shadow">👤</button>
        </div>
      </motion.div>

      {/* Quick Stats / Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-4 mt-6"
      >
        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <p className="text-gray-400 text-sm">Total Trips</p>
          <p className="font-bold text-lg">12</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <p className="text-gray-400 text-sm">Upcoming</p>
          <p className="font-bold text-lg">2</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <p className="text-gray-400 text-sm">Favorites</p>
          <p className="font-bold text-lg">5</p>
        </div>
      </motion.div>

      {/* Add New Trip Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mt-6"
      >
        <button className="w-full bg-blue-500 text-white py-3 rounded-2xl font-semibold hover:bg-blue-600 transition">
          + Add New Trip
        </button>
      </motion.div>
    </div>
  );
};

export default DashboardPartial;
