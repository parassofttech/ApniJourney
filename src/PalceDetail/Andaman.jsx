// src/components/Andaman.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Waves, Ship, Plane, Camera } from "lucide-react";

const Andaman = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-cyan-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://www.gokitetours.com/wp-content/uploads/2025/01/10-Best-Places-to-Visit-in-Andaman-and-Nicobar-in-2025.webp"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-sky-800 mb-4"
          >
            🏝️ Andaman Islands – Paradise of the Indian Ocean
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            The **Andaman & Nicobar Islands** are a cluster of around **572 tropical islands** known for their **pristine beaches, turquoise waters, rich marine life**, and **vibrant coral reefs**.  
            It's the perfect destination for **scuba diving, beach camping, and eco-tourism**.
          </motion.p>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Famous Beaches */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Famous Beaches
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏖️ <b>Radhanagar Beach (Havelock):</b> Ranked among Asia’s best</li>
                <li>🌅 <b>Elephant Beach:</b> Known for coral snorkeling</li>
                <li>🐚 <b>Corbyn’s Cove:</b> Port Blair’s popular hangout</li>
                <li>🌊 <b>Kalapathar Beach:</b> Peaceful and scenic</li>
              </ul>
            </motion.div>

            {/* Adventure Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Ship /> Adventure & Water Sports
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🤿 Scuba Diving & Snorkeling</li>
                <li>🛥️ Glass-bottom boat rides</li>
                <li>🏄 Jet skiing & kayaking</li>
                <li>🔥 Beach bonfire & night camping</li>
              </ul>
            </motion.div>

            {/* Historical Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <MapPin /> Must-Visit Places
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏛️ <b>Cellular Jail:</b> National Memorial of Freedom Struggle</li>
                <li>🪶 <b>Ross Island:</b> Colonial ruins amid lush greenery</li>
                <li>🌋 <b>Baratang Island:</b> Mud volcanoes & limestone caves</li>
                <li>🐠 <b>North Bay Island:</b> Coral & underwater view</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Plane /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Veer Savarkar International Airport (Port Blair)</li>
                <li>🚢 Ferry Services from Chennai, Kolkata, and Vizag</li>
                <li>🏨 Stay: Beach resorts, eco-huts, and luxury stays</li>
                <li>🕒 Best Time to Visit: October – May</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Andaman Gallery – Experience Paradise
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0-0PbIgxJAB2Lmnsh8j-adrp3m_2h-VhqQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOoyvrUNMtdPBRaA5eTj8sZ6ABRmbZZEn-w&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoA_yffvw3e1gMSYnPew7ktjNhq_z-D_yUw&s",
                "https://www.andamanislands.com/uploads/andamanislands/blog/main/5fa40347e356f155_history_of_andaman_islands.jpg",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Andaman Island"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Andaman;
