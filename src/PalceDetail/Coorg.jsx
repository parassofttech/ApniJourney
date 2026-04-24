import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Coffee,
  TreeDeciduous,
} from "lucide-react";

const Coorg = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-lime-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2Fcoord%20day%202_11zon.webp&w=1920&q=75"
          alt="Coorg Hills"
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
            className="text-4xl font-extrabold text-center text-green-800 mb-4"
          >
            🌿 Coorg – The Scotland of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Nestled in the Western Ghats of Karnataka, Coorg is renowned for its
            lush **coffee plantations, misty hills, and scenic waterfalls**.
            A paradise for nature lovers and adventure seekers alike.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Info /> Historical & Cultural Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Coorg is home to the **Kodava people** with a rich cultural
                heritage. Ancient temples like **Madikeri Fort** and the
                **Omkareshwara Temple** showcase the region’s history and
                architecture.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-lime-50 rounded-2xl shadow-sm border border-lime-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-lime-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏞️ <b>Abbey Falls:</b> Picturesque waterfall</li>
                <li>⛰️ <b>Talakaveri:</b> Source of River Kaveri</li>
                <li>🌳 <b>Brahmagiri Hills:</b> Trekking hotspot</li>
                <li>🏯 <b>Madikeri Fort:</b> Historical landmark</li>
              </ul>
              <a
                href="https://karnatakatourism.org/tour-item/coorg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-lime-700 mt-3 underline hover:text-lime-900"
              >
                Visit Karnataka Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Coffee & Nature */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-emerald-700 mb-3">
                <Coffee /> Coffee & Nature
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Coorg is famous for its aromatic **coffee plantations** and
                green landscapes. Visit local estates for coffee tasting and
                nature walks, or simply relax amidst rolling hills.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-teal-50 rounded-2xl shadow-sm border border-teal-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–4 days</li>
                <li>✈️ <b>Nearest Airport:</b> Mangalore / Bangalore</li>
                <li>🚆 <b>Nearest Railway:</b> Mysore</li>
                <li>🏨 <b>Stay:</b> Coffee resorts, homestays, boutique hotels</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-green-50 to-lime-50 p-6 rounded-2xl border border-green-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
              <TreeDeciduous /> Nature & Adventure
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Trekking, plantation walks, and river rafting in Coorg provide
              adventure lovers with plenty of fun, while the misty hills offer
              serenity and rejuvenation for the soul.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Coorg
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdWucCysBIFTLhQDsLU8Qy_dfmbYmfH3OgQ&s",
                "https://karnatakatourism.org/_next/image/?url=https%3A%2F%2Fweb-cms.karnatakatourism.org%2Fwp-content%2Fuploads%2F2025%2F07%2F20-x-8-ft-Panel-Coorg-01-1-scaled-e1750312229824.jpg&w=3840&q=75",
                "https://upload.wikimedia.org/wikipedia/commons/1/17/Tadiandamol_Valley%2C_Western_Ghats.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ThhhFrJet9BnjDIR8ytnb9pYg134QILCvQ&s",
                "https://inikaresorts.com/wp-content/uploads/2026/02/About-coorg-madikeri-1.jpg",
                "https://coorgtourism.co.in/images/places-to-visit/headers/bangalore-to-coorg-tour-package-for-1-night-2-days-header-coorg-tourism.jpg.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Coorg"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://karnatakatourism.org/tour-item/coorg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold"
            >
              Visit Karnataka Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Coorg;
