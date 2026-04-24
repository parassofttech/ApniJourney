// src/components/KeralaBackwaters.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Ship, Sprout, Camera, Leaf, Plane } from "lucide-react";

const KeralaBackwaters = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://storage.googleapis.com/stateless-www-justwravel-com/2024/12/2745d95c-backwaters-kerala.jpg"
          alt="Kerala Backwaters"
          className="w-full h-[420px] object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")
          }
        />

        <div className="p-8">
          {/* Title */}
          <motion.h1
            className="text-4xl font-extrabold text-center text-emerald-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🌿 Kerala Backwaters – The Venice of the East
          </motion.h1>

          {/* Intro */}
          <motion.p
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience the tranquil beauty of **Kerala’s backwaters**, a network of
            serene lagoons, canals, and rivers. Glide through lush palm-fringed waters
            in traditional **houseboats (kettuvallams)** and soak in the charm of God’s Own Country 🌴.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Popular Backwater Destinations */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-teal-50 border border-teal-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-700 mb-3">
                <MapPin /> Top Backwater Destinations
              </h2>
              <ul className="text-gray-700 Sproutce-y-2">
                <li>🚤 Alleppey (Alappuzha) – Houseboat capital of India</li>
                <li>🌾 Kumarakom – Bird sanctuary & luxury resorts</li>
                <li>🌊 Kollam – Gateway to Ashtamudi Lake</li>
                <li>🏞️ Kasaragod – Peaceful unexplored waters</li>
              </ul>
            </motion.div>

            {/* Houseboat Experience */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Ship /> Houseboat Experience
              </h2>
              <ul className="text-gray-700 Sproutce-y-2">
                <li>🛶 Luxurious wooden houseboats with air-conditioned cabins</li>
                <li>🍛 Onboard Kerala cuisine & candlelight dinners</li>
                <li>🌅 Sunrise and sunset cruises</li>
                <li>🎶 Traditional Kathakali & Mohiniyattam performances onboard</li>
              </ul>
            </motion.div>

            {/* Ayurvedic Wellness */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Sprout /> Ayurveda & Wellness
              </h2>
              <ul className="text-gray-700 Sproutce-y-2">
                <li>💆‍♀️ Authentic Ayurvedic therapies</li>
                <li>🌸 Sprout retreats & yoga centers by the water</li>
                <li>🍃 Herbal treatments for rejuvenation</li>
                <li>🧘 Detox & meditation sessions amidst nature</li>
              </ul>
            </motion.div>

            {/* Travel Information */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-orange-50 border border-orange-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Plane /> Travel Information
              </h2>
              <ul className="text-gray-700 Sproutce-y-2">
                <li>✈️ Nearest Airport: Cochin International Airport (COK)</li>
                <li>🚉 Nearest Railway Station: Alleppey & Kottayam</li>
                <li>🚗 Distance from Kochi: 53 km to Alleppey</li>
                <li>🕒 Best Time to Visit: October – March</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Kerala Backwaters Gallery – Nature’s Tranquil Escape
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://static.toiimg.com/photo/58490365/.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkx7wsBi8OoZvmEDrPLF5xUguH1x6t5EZnUg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJTYaeOeIjN_8Po_9BTaGO35jGeN6LrZzgA&s",
                "https://static.toiimg.com/thumb/msid-116566039,width-748,height-499,resizemode=4,imgsize-97584/.jpg",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Kerala Backwaters"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80")
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

export default KeralaBackwaters;
