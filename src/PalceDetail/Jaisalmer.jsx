import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Info,
  Camera,
  ExternalLink,
  Sun,
  Tent,
  Flag,
} from "lucide-react";

const Jaisalmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTLYjL1FCbJO03mW5_7gLLKcUWh2wq1LED2MQOeCgZ0YuJWlqOZPRWUWN5p3yUai4QuycniT1XLTgd3UGhaR9LILk&s=19"
          alt="Jaisalmer Fort"
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
            className="text-4xl font-extrabold text-center text-yellow-700 mb-4"
          >
            🏜️ Jaisalmer – The Golden City of Rajasthan
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in the heart of the **Thar Desert**, Jaisalmer is known for
            its golden sandstone architecture, majestic forts, desert safaris,
            and vibrant Rajasthani culture. It offers a magical blend of
            **heritage, adventure, and royal charm**.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Info /> Historical Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jaisalmer was founded in 1156 AD by **Rawal Jaisal**.
                The iconic **Jaisalmer Fort (Sonar Quila)** is one of the
                largest living forts in the world. The city once thrived
                as an important trade route connecting India with Central Asia.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏰 <b>Jaisalmer Fort:</b> Golden architectural wonder</li>
                <li>🏜️ <b>Sam Sand Dunes:</b> Desert safari & camping</li>
                <li>🏛️ <b>Patwon Ki Haveli:</b> Intricate carvings</li>
                <li>🌅 <b>Gadisar Lake:</b> Scenic sunset views</li>
              </ul>
              <a
                href="https://tourism.rajasthan.gov.in/jaisalmer.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-orange-700 mt-3 underline hover:text-orange-900"
              >
                Visit Rajasthan Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Culture */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-red-50 rounded-2xl shadow-sm border border-red-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-red-700 mb-3">
                <Flag /> Culture & Traditions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jaisalmer showcases vibrant **Rajasthani folk music,
                Kalbelia dance, puppet shows**, and colorful turbans.
                Traditional handicrafts, mirror work, and camel fairs
                add to its cultural richness.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-amber-50 rounded-2xl shadow-sm border border-amber-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-amber-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>✈️ <b>Nearest Airport:</b> Jodhpur Airport</li>
                <li>🚆 <b>Rail:</b> Direct trains from Delhi & Jaipur</li>
                <li>🏨 <b>Stay:</b> Desert camps, heritage hotels</li>
              </ul>
            </motion.div>
          </div>

          {/* Desert Experience */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
              <Tent /> Desert Adventure
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Experience the thrill of **camel safari, jeep safari,
              night camping under the stars**, and traditional Rajasthani
              dinner in desert camps. Watching the sunset over golden
              sand dunes is unforgettable.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Discover Jaisalmer
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRg02VhWgADkftNaMdJHD31iV4w6B75lwW40bzm1qdZKtlvBSfztNLNYOFgnLTW4yvPaK5BW_QoQY0_Y0eLyqTctWU&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTLYjL1FCbJO03mW5_7gLLKcUWh2wq1LED2MQOeCgZ0YuJWlqOZPRWUWN5p3yUai4QuycniT1XLTgd3UGhaR9LILk&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTmo8pzGSoNT1wj2xJ0-76LMWbjzoesl1eIw2ZUOB4dl4qUtAI6bo46FN91E4HoGfMDUuPbEDVqgkS96TBe0Uu3kPY&s=19",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/37/47/83/bagh.jpg?w=1200&h=700&s=1",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR_BCc6KsherRZHF1n7lECvn9r7kBmTAwm4SgkTyfrCV0VQfPNsVs_knad753MTRHENqPL819cpaa05N1vpgFH-Imo&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQcrbZC1tgjvq1Z0KiO4tnuzaDOUw8y7DYqFDZkEW1gIM9OGQ_tOmOdj8DBBP2IitTJ_63dXM45sJv7qQEtiodb92Q&s=19",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Jaisalmer"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://tourism.rajasthan.gov.in/jaisalmer.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-xl hover:bg-yellow-700 transition font-semibold"
            >
              Visit Rajasthan Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jaisalmer;
