import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Camera, Umbrella } from "lucide-react";

const ShillongMeghalaya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Shillong_meghalaya.jpg"
          alt="Shillong"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1596568942428-28c04f6bfb5f?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-green-800 mb-4"
          >
            🌄 Shillong – Scotland of the East
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Shillong, the capital of **Meghalaya**, is known as the **Scotland of the East** 
            for its rolling hills, waterfalls, and serene lakes. Rich in culture and natural beauty, 
            Shillong is a paradise for travelers seeking adventure, tranquility, and scenic landscapes.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Info /> Historical Background
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Shillong became the capital of Meghalaya in **1972** and has a rich history influenced 
                by **tribal cultures** and **British colonial presence**. The city is known for its 
                educational institutions and vibrant music scene.
              </p>
            </motion.div>

            {/* Lakes & Waterfalls */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Lakes & Waterfalls
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏞️ <b>Umiam Lake:</b> Boating & serene views</li>
                <li>💧 <b>Elephant Falls:</b> Picturesque waterfall</li>
                <li>🌊 <b>Laitlum Canyons:</b> Scenic cliffs & photography</li>
              </ul>
            </motion.div>

            {/* Adventure & Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Umbrella /> Adventure & Experiences
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🥾 Trekking through Shillong Hills</li>
                <li>🚣 Kayaking and boating in Umiam Lake</li>
                <li>🏞️ Explore Cherrapunji and Mawsynram nearby</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Shillong Airport (SHL)</li>
                <li>🚆 Nearest Railway Station: Guwahati Railway Station (~100 km)</li>
                <li>🚌 Local Transport: Taxis, shared cabs & buses</li>
                <li>🕒 Best Time to Visit: September – May</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Shillong
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/1/15/Umiam_Lake_Shillong.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/6/65/Elephant_Falls.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/3/38/Laitlum_Canyon.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/0/08/Shillong_Street.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b6/Shillong_Market.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/5/5d/Shillong_Hills.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Shillong"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1589654319193-3eac4b1b99f0?auto=format&fit=crop&w=900&q=80")
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

export default ShillongMeghalaya;

