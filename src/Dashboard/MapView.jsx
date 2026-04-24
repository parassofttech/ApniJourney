import React from "react";
import { motion } from "framer-motion";

const MapView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🗺️ Map View</h2>

      <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
        {/* Google Maps Embed */}
        <iframe
          title="MapView"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30497.35051646306!2d77.1887!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f79c4a7f8f%3A0xf69d7c3f33d2b7c!2sIndia!5e0!3m2!1sen!2sin!4v1697650000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default MapView;
