import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Camera, Info, Landmark } from "lucide-react";

const IndiaGate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-green-50 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/New-Delhi-imghh.jpg?w=1000&ssl=1"
          alt="India Gate"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[400px] object-cover"
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-800 mb-4 text-center"
          >
            🇮🇳 India Gate, New Delhi
          </motion.h1>

          {/* Short Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-8"
          >
            The **India Gate**, originally known as the **All India War Memorial**, 
            stands majestically in the heart of **New Delhi**, India. 
            It is a tribute to the 84,000 soldiers of the British Indian Army 
            who sacrificed their lives during **World War I** and the **Third Anglo-Afghan War**.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Landmark /> Historical Background
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The India Gate was designed by **Sir Edwin Lutyens** and inaugurated 
                on **10 February 1921**. It commemorates the bravery and valor of Indian soldiers. 
                The structure resembles the **Arc de Triomphe** in Paris and stands as 
                a symbol of national pride and remembrance.
              </p>
            </motion.div>

            {/* Architecture Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Camera /> Architectural Details
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Standing **42 meters tall**, India Gate is made of **red and yellow sandstone** 
                and granite. Beneath the arch lies the **Amar Jawan Jyoti**, a flame 
                that burns perpetually to honor soldiers who lost their lives in the **1971 Indo-Pak war**.
              </p>
            </motion.div>

            {/* Visitor Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Clock /> Visiting Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Timings:</b> Open 24 hours (Best time: Evening)</li>
                <li>🎟️ <b>Entry Fee:</b> Free for all visitors</li>
                <li>📅 <b>Best Season:</b> October to March</li>
                <li>📍 <b>Location:</b> Rajpath, New Delhi, India</li>
              </ul>
            </motion.div>

            {/* Nearby Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <MapPin /> Nearby Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏛️ Rashtrapati Bhavan – 2 km</li>
                <li>🌳 Lodhi Gardens – 3.5 km</li>
                <li>🕍 Humayun’s Tomb – 4.8 km</li>
                <li>🛍️ Connaught Place – 2.5 km</li>
              </ul>
            </motion.div>
          </div>

          {/* Amar Jawan Jyoti Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl border border-yellow-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
              <Info /> Amar Jawan Jyoti – The Flame of the Immortal Soldier
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The **Amar Jawan Jyoti**, meaning “Flame of the Immortal Soldier,” 
              was added after India’s independence. It consists of a marble pedestal 
              with a reversed rifle and a soldier’s helmet on top, surrounded by four flames. 
              It stands as a powerful symbol of **courage and sacrifice**.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/f/f7/India_Gate_Night_View.jpg",

                "https://upload.wikimedia.org/wikipedia/commons/4/46/India_Gate_Amar_Jawan_Jyoti.jpg",

                "https://upload.wikimedia.org/wikipedia/commons/6/68/India_Gate_Back_View.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="India Gate"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IndiaGate;
