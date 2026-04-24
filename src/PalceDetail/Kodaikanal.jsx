import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Mountain,
  Trees,
  CloudRain,
} from "lucide-react";

const Kodaikanal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSK8xdWQhhsl8Ys4qBxvm1bEuEKmuhsEJ6OweJq102FjXacfpz82yczCnP6oeefRnuYFGp0CsEdcrwvMXh7wsf5x_w&s=19"
          alt="Kodaikanal"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-indigo-700 mb-4"
          >
            🌲 Kodaikanal – The Princess of Hill Stations
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in the **Western Ghats of Tamil Nadu**, Kodaikanal
            is famous for its misty hills, scenic lakes, pine forests,
            and peaceful atmosphere. It is one of South India’s most
            romantic and refreshing hill destinations.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-indigo-50 rounded-2xl shadow-sm border border-indigo-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-3">
                <Info /> Historical Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Established as a hill retreat by British missionaries in
                the 19th century, Kodaikanal became a popular summer
                getaway. Its colonial-era buildings and churches reflect
                its historical charm.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🚣 <b>Kodaikanal Lake:</b> Star-shaped lake for boating</li>
                <li>🌄 <b>Coaker’s Walk:</b> Scenic walking path</li>
                <li>🌲 <b>Pine Forest:</b> Iconic movie shooting spot</li>
                <li>💧 <b>Silver Cascade Falls:</b> Beautiful waterfall</li>
              </ul>
              <a
                href="https://www.tamilnadutourism.tn.gov.in/destinations/kodaikanal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-700 mt-3 underline hover:text-blue-900"
              >
                Visit Tamil Nadu Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Nature */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Trees /> Nature & Climate
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Kodaikanal is known for its **cool climate year-round**.
                Surrounded by lush forests, valleys, and waterfalls,
                it offers perfect conditions for trekking, camping,
                and photography lovers.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-purple-50 rounded-2xl shadow-sm border border-purple-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-purple-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> April – June, September – October</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–4 days</li>
                <li>✈️ <b>Nearest Airport:</b> Madurai Airport</li>
                <li>🚆 <b>Nearest Railway:</b> Kodai Road (80 km)</li>
                <li>🏨 <b>Stay:</b> Lake-view resorts, cottages</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-3">
              <Mountain /> Romantic & Peaceful Escape
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you're boating on the lake, walking through
              misty hills, or enjoying sunset viewpoints,
              Kodaikanal offers a calm and romantic atmosphere.
              It is perfect for couples, families, and nature lovers.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Discover Kodaikanal
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo9zEfraK4CWrPp6j2YUhu7c7w54MH3FxYqpFqEqHm1zh-cmu1bj28GByMNbuubIhRTLBSx6tA-mt0UWWDTcmY1pAGrV-b7jG1DDSW66LCZ7mtkhKtXXGckABoL8JaFbl-mpX7m=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoWu45L0wbu-FoOjWmvVzQ_4WNCNj4g6ff6bmNadubTsTe_hK4Ympy8yxdNLOi9y_kasoyKNYLQbMsOkmlUW-Di7iofMiAF3wtWl5EVn4UxQQPinvUX4EQ2uoV6wdBqaeD6s0Gm=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwersWgohVbPtShr9k5rRdImOAvZav8fwarfKvNe9rFAFeX8nDbVnvD1UJNDvk4kkriTnJRZ-J-atM0bbtR8IdJq7whL-V_rQEG5z2rCMR-hVrNWLtOVZFavBUQ0yj47o6iPVSZmX2KiUfood=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSwUi8-V-pS8gNL3Rt0xmP8z7fsgsjLm3gSEYSKcAZwTAMnvLLtzkAmQ293FFlsDGwSu2RZKI789OrzfF0b2OsPjGeg&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR_WSuru2tgbGJybej1lYyqsSMkEtw1N9lB-3TyUBZf-NqV5ZjOfWZDhB0Gu9wkDbf5b-gGtLXvVCcheSTQmlF5tHiy&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqD2NoLWZODeB8lgR60Yw3N_lSPSDD-Gdpjrf48RoaEHZVJb5U8Z8rHcnsC5LsA0GY5kXvQmQcE2b_cHIgVu7-mpJ-DqJvCg4y2MgveoVE8XsQG6VQlUeh6ZyYHeV7mWCL44DA5pQ=w675-h390-n-k-no",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Kodaikanal"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://www.tamilnadutourism.tn.gov.in/destinations/kodaikanal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
            >
              Visit Tamil Nadu Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kodaikanal;
