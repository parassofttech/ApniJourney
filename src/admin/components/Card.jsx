import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, value, icon, change, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`rounded-2xl p-5 shadow-lg bg-white relative overflow-hidden`}
    >
      {/* Background Glow */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 opacity-20 rounded-full blur-2xl ${color}`}
      ></div>

      {/* Content */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>

          {change && (
            <p className="text-xs mt-2 text-green-500">
              {change} ↑ this month
            </p>
          )}
        </div>

        {/* Icon */}
        <div
          className={`p-3 rounded-xl text-white shadow-md ${color}`}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;