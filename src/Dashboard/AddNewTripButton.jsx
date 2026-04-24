
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AddNewTripButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to AddTrip page
    navigate("/add-trip");
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mt-6"
    >
      <button
        onClick={handleClick}
        className="flex items-center bg-green-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition-all"
      >
        <span className="mr-2 text-xl">➕</span>
        Add New Trip
      </button>
    </motion.div>
  );
};

export default AddNewTripButton;
