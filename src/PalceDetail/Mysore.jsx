// src/components/Mysore.jsx
import React from "react";
import { motion } from "framer-motion";
import { Crown, MapPin, Landmark, Plane, Train, Camera } from "lucide-react";

const Mysore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/chamundeshwari-temple-mysuru-karnataka-hero?qlt=82&ts=1742170286224"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1614864697792-1b4408cf65e4?auto=format&fit=crop&w=1200&q=80")
          }
        />

        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-amber-800 mb-4"
          >
            👑 Mysore – The Royal Heritage City
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
          >
            Famous for its **palatial architecture, silk, sandalwood, and Dasara
            festival**, Mysore is the cultural capital of Karnataka. Nestled at
            the base of the **Chamundi Hills**, the city beautifully blends royal
            history with vibrant modern life.
          </motion.p>

          {/* Information Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Top Attractions */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Landmark /> Top Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏰 <b>Mysore Palace:</b> A masterpiece of Indo-Saracenic style</li>
                <li>🌄 <b>Chamundi Hills:</b> Sacred temple with panoramic city view</li>
                <li>🌸 <b>Brindavan Gardens:</b> Musical fountain & colorful lights</li>
                <li>🕍 <b>St. Philomena’s Cathedral:</b> Neo-Gothic architecture</li>
              </ul>
            </motion.div>

            {/* Culture & Festivals */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-rose-50 border border-rose-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-rose-700 mb-3">
                <Crown /> Culture & Festivals
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🎉 <b>Mysore Dasara:</b> A 10-day royal celebration with elephants & lights</li>
                <li>🕺 <b>Classical Dance & Carnatic Music:</b> The city’s artistic heartbeat</li>
                <li>🧵 <b>Mysore Silk:</b> World-famous handwoven silk sarees</li>
                <li>💐 <b>Flower Shows:</b> At the Mysore Palace grounds</li>
              </ul>
            </motion.div>

            {/* Adventure & Experiences */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Camera /> Experiences & Nature
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🚴 Cycling through palace streets & heritage walks</li>
                <li>🦚 Visit Mysore Zoo – One of India’s oldest zoos</li>
                <li>🌅 Watch sunrise at Chamundi Hills viewpoint</li>
                <li>🛍️ Explore Devaraja Market for local spices & art</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Plane /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Mysore Airport (Domestic)</li>
                <li>🚆 Well-connected by train from Bangalore & Chennai</li>
                <li>🚌 Regular KSRTC luxury buses available</li>
                <li>🕒 Best Time to Visit: October – March</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Mysore Gallery – Royal Heritage in Frames
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://www.itslife.in/wp-content/gallery/travel/travel-mysore-ill-palace4.jpg",
                "https://ramaarya.blog/wp-content/uploads/2020/02/mysore-palace.jpg?w=640",
                "https://as2.ftcdn.net/jpg/02/11/19/11/1000_F_211191108_AzVt9717IQlaXEeQiW73GoXR7tQ73GA3.jpg",
                "https://mysore.ind.in/wp-content/uploads/2015/03/Mysore-City-Sightseeing.jpg",
                "https://www.revv.co.in/blogs/wp-content/uploads/2020/03/place-to-visit-in-mysore.jpg",
                "https://lepassagetoindia.com/img.php?file=header_149812887855_Mysore_Palace_2000x1000.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Mysore View"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1596178060671-7b8b02f37a1a?auto=format&fit=crop&w=1200&q=80")
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

export default Mysore;
