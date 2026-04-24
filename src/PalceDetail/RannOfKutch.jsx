// src/components/RannOfKutch.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Tent, Plane, Camera, Gift } from "lucide-react";

const RannOfKutch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://www.laurewanders.com/wp-content/uploads/2024/12/Great-Rann-of-Kutch00001.jpg"
          alt="Rann of Kutch"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1577814288070-91c598d5947c?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-amber-800 mb-4"
          >
            🏜️ Rann of Kutch – The White Desert of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
          >
            Spread across the **Thar Desert**, the Rann of Kutch in Gujarat is one of
            the world’s largest salt deserts. Every winter, it transforms into a
            cultural carnival during the **Rann Utsav**, where the desert glows under
            the moonlight and folk music fills the air. ✨
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Natural Beauty */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-orange-50 border border-orange-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Sun /> Natural Wonder
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🌅 White Salt Desert that glows under moonlight</li>
                <li>🐪 Camel safaris across the desert plains</li>
                <li>🌙 Mesmerizing sunsets and starlit skies</li>
                <li>🦩 Visit the Flamingo Sanctuary in winter</li>
              </ul>
            </motion.div>

            {/* Rann Utsav */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Tent /> Rann Utsav Festival
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🎪 Annual festival from November to February</li>
                <li>💃 Folk dance, music, food, and handicrafts</li>
                <li>🏕️ Stay in luxury tents in Dhordo village</li>
                <li>🌕 Best experience during full moon nights</li>
              </ul>
            </motion.div>

            {/* Cultural Heritage */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-pink-50 border border-pink-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Gift /> Kutchi Culture & Art
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🧵 Vibrant mirror embroidery & leatherwork</li>
                <li>🎨 Visit Bhuj & local artisan villages</li>
                <li>🛍️ Buy handmade bandhani sarees & pottery</li>
                <li>🍛 Try Kutchi cuisine – Bajra rotla & khichdi</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Bhuj Airport (85 km from Rann)</li>
                <li>🚆 Bhuj Railway Station connects to major cities</li>
                <li>🚗 Private taxis and state buses available to Dhordo</li>
                <li>🕒 Best Time to Visit: November – February</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Rann of Kutch Gallery – White Sands & Colorful Traditions
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://m.media-amazon.com/images/S/pv-target-images/54db22ae37635a39268314aa0c33c5c41c9c584626f7abea86a531e0344b1f42._SX1080_FMjpg_.jpg",
                "https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg",
                "https://i.ytimg.com/vi/ZiRLz9s669I/maxresdefault.jpg",
                "https://kutchtourism.in/wp-content/uploads/2024/12/Full-Moon-Night-In-The-Rann-of-Kutch-1-1-1024x630.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKym6FD3Ocmixnm2mr8Sq5pCKKlF3d5R0HMbiYonv3Qkeb-xIw0bMtHA5jDnIN_CfHtM&usqp=CAU",
                "https://www.tourmyindia.com/blog//wp-content/uploads/2023/04/Top-Things-to-Do-in-Kutch-Gujarat.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Rann of Kutch"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1577814288070-91c598d5947c?auto=format&fit=crop&w=1200&q=80")
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

export default RannOfKutch;
