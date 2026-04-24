
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeaderTopBar = () => {


  const navigate = useNavigate()


  function handleClick(){
     navigate("/profile")
   }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center py-4 px-6 bg-white shadow rounded-b-2xl sticky top-0 z-50"
    >
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        🌍 Travel Dashboard
      </h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition">
          🔔
        </button>
        <button onClick={handleClick}   className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition">
          👤
        </button>
        <button className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition">
          ⚙️
        </button>
      </div>
    </motion.div>
  );
};

export default HeaderTopBar;
