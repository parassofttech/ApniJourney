// src/components/destinations/Chhattisgarh.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mountain, Trees, Landmark, Sun } from "lucide-react";

const Chhattisgarh = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-emerald-800 mb-4">
            🌿 Explore Chhattisgarh
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the hidden gem of India — a land of majestic waterfalls,
            ancient temples, dense forests, and vibrant tribal culture.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl shadow-lg mb-12"
        >
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/chitrakote-water-falls-jagdalpur-chhattisgarh-1-attr-hero?qlt=82&ts=1727011277081"
            alt="Chitrakote Waterfalls, Chhattisgarh"
            className="w-full h-[480px] object-cover"
          />
        </motion.div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">
              🏞️ The Heart of Incredible India
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chhattisgarh is one of India’s most underrated travel destinations.
              Known for its pristine natural beauty, it offers a blend of
              spectacular waterfalls like <b>Chitrakote</b> (India’s Niagara),
              <b>Tirathgarh</b>, and dense forests of <b>Kanger Valley</b>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The region is deeply rooted in <b>tribal traditions</b> — with
              colorful festivals like <b>Bastar Dussehra</b> celebrated with
              unmatched energy. You can also explore <b>ancient temples</b>,
              mysterious caves, and local crafts that define its heritage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From <b>jungle safaris</b> to <b>heritage walks</b>, and from
              <b>organic food</b> to <b>tribal art</b> — Chhattisgarh invites you
              to experience the raw, untouched side of India.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <img
              src="https://media2.thrillophilia.com/images/photos/000/103/317/original/1479391377_chhattisgarh-705.jpeg?w=243&h=150&dpr=1.5"
              alt="Tirathgarh Waterfalls"
              className="rounded-xl shadow-md h-56 w-full object-cover"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNEnQh1oqzvkXCNBW08FlABR9PWvAJDhNgQ&s"
              alt="Bastar Dussehra Festival"
              className="rounded-xl shadow-md h-56 w-full object-cover"
            />
            <img
              src="https://clubmahindra.gumlet.io/blog/media/section_images/chhattisga-fa45fa3144fcf3b.jpg?w=376&dpr=2.6"
              alt="Kanger Valley National Park"
              className="rounded-xl shadow-md h-56 w-full object-cover"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhexrwuPsnMqCOA_ndyOGQabEj-hVhmDjteQ&s"
              alt="Ancient Temple in Chhattisgarh"
              className="rounded-xl shadow-md h-56 w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-16 bg-white/80 rounded-2xl shadow-md p-8 backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
            ✨ Highlights of Chhattisgarh
          </h3>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-emerald-100 rounded-xl hover:shadow-lg transition">
              <Mountain className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h4 className="font-semibold">Chitrakote Falls</h4>
              <p className="text-sm text-gray-600">
                India’s Niagara – breathtaking in monsoon.
              </p>
            </div>

            <div className="p-6 bg-emerald-100 rounded-xl hover:shadow-lg transition">
              <Trees className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h4 className="font-semibold">Kanger Valley</h4>
              <p className="text-sm text-gray-600">
                Home to caves, wildlife, and dense forests.
              </p>
            </div>

            <div className="p-6 bg-emerald-100 rounded-xl hover:shadow-lg transition">
              <Landmark className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h4 className="font-semibold">Bastar Dussehra</h4>
              <p className="text-sm text-gray-600">
                A 75-day grand tribal festival unique to India.
              </p>
            </div>

            <div className="p-6 bg-emerald-100 rounded-xl hover:shadow-lg transition">
              <Sun className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h4 className="font-semibold">Rich Culture</h4>
              <p className="text-sm text-gray-600">
                Experience ancient crafts, dance, and cuisine.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chhattisgarh;
