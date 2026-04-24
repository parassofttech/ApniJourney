import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Sun,
  Info,
  Camera,
  ExternalLink,
  Building,
} from "lucide-react";

const Jaipur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-orange-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://static.toiimg.com/img/115224983/Master.jpg"
          alt="Hawa Mahal Jaipur"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1589133190621-ded89a1a80db?auto=format&fit=crop&w=1200&q=80")
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
            🏰 Jaipur – The Pink City of Royal Heritage
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Jaipur, the capital of **Rajasthan**, is known as the **Pink City**
            for its rose-colored buildings and royal architecture. Established
            in **1727 by Maharaja Sawai Jai Singh II**, Jaipur perfectly blends
            **royalty, culture, art, and tradition**, making it one of India’s
            most iconic travel destinations.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Info /> Historical Background
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jaipur was founded in **1727** by Maharaja Sawai Jai Singh II,
                the ruler of Amber. It was one of the first planned cities in
                India, based on **Vastu Shastra** principles. In 1876, the city
                was painted pink to welcome the Prince of Wales, symbolizing
                hospitality — and ever since, it has been known as the “Pink
                City.”
              </p>
            </motion.div>

            {/* Top Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Camera /> Major Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏯 <b>Amber Fort:</b> Majestic hilltop fort & elephant rides</li>
                <li>🏰 <b>City Palace:</b> Blend of Mughal & Rajput architecture</li>
                <li>🌸 <b>Hawa Mahal:</b> Palace of Winds with 953 windows</li>
                <li>🔭 <b>Jantar Mantar:</b> UNESCO-listed astronomical observatory</li>
              </ul>
              <a
                href="https://www.tourism.rajasthan.gov.in/jaipur.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-orange-600 mt-3 underline hover:text-orange-800"
              >
                Visit Rajasthan Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Culture & Cuisine */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Landmark /> Culture & Cuisine
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jaipur’s rich culture includes **folk dances, puppet shows,
                festivals,** and traditional Rajasthani attire. Food lovers must
                try **Dal Baati Churma, Ghewar, Laal Maas,** and **Pyaaz Kachori**.
                The city’s bazaars like **Johari** and **Bapu Bazaar** are famous
                for jewelry, handicrafts, and textiles.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time to Visit:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 3–4 days</li>
                <li>✈️ <b>Nearest Airport:</b> Jaipur International Airport (JAI)</li>
                <li>🚆 <b>Railway:</b> Jaipur Junction</li>
                <li>🚗 <b>Local Transport:</b> Auto, cab, metro, rickshaw</li>
              </ul>
            </motion.div>
          </div>

          {/* Royal Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-yellow-50 to-pink-50 p-6 rounded-2xl border border-yellow-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-amber-700 mb-3">
              <Building /> Royal Heritage & Modern Vibe
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Jaipur offers a rare combination of **royal history** and **modern
              urban lifestyle**. Stay in luxurious heritage hotels like **Rambagh
              Palace** or explore art cafés in **C-Scheme**. From hot air balloon
              rides to royal weddings — Jaipur is India’s regal destination.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Jaipur
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "https://assets.cntraveller.in/photos/60ba007145469a6a570b1dbf/16:9/w_1024%2Cc_limit/Jal-Mahal-Jaipur-123rf-2-1366x768.jpg",
                "https://s7ap1.scene7.com/is/image/incredibleindia/amber-fort-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742157903972",
                "https://hblimg.mmtcdn.com/content/hubble/img/jaipur/mmt/activities/t_ufs/m_activities_amber_fort_2_l_436_573.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ieTRj-SKTS3lGReyK8eF9ZQZM6Ym9Meu6g&s",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Jaipur"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1589133190621-ded89a1a80db?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Official Link */}
          <div className="mt-8 text-center">
            <a
              href="https://www.tourism.rajasthan.gov.in/jaipur.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition font-semibold"
            >
              Visit Jaipur Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jaipur;
