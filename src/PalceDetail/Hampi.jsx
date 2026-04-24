import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Landmark,
  Sun,
} from "lucide-react";

const Hampi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcShbY-ZirATQxlmkIMp69JCIzhtKtmbebykEayfve1c5fBv2nvzSwsIF9xtO8GA0Z-7YoQryY_M91oWZ4eQaDJg8sc&s=19"
          alt="Hampi"
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
            className="text-4xl font-extrabold text-center text-orange-700 mb-4"
          >
            🏛️ Hampi – The City of Ruins
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in Karnataka, Hampi is a UNESCO World Heritage Site
            famous for its ancient temples, stone structures, and the
            glorious history of the Vijayanagara Empire.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Info /> Historical Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Hampi was once the capital of the mighty Vijayanagara Empire
                in the 14th century. It was one of the richest cities in the world
                during its time and is now known for its grand ruins and temples.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏛️ <b>Virupaksha Temple:</b> Ancient functioning temple</li>
                <li>🛕 <b>Vittala Temple:</b> Famous stone chariot</li>
                <li>🌄 <b>Matanga Hill:</b> Best sunrise viewpoint</li>
                <li>🏞️ <b>Hampi Bazaar:</b> Historic marketplace ruins</li>
              </ul>
              <a
                href="https://karnatakatourism.org/tour-item/hampi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-yellow-700 mt-3 underline hover:text-yellow-900"
              >
                Visit Karnataka Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Architecture */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-red-50 rounded-2xl shadow-sm border border-red-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-red-700 mb-3">
                <Landmark /> Architecture & Culture
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The architecture of Hampi reflects intricate carvings,
                massive pillars, and unique stone engineering.
                The musical pillars of Vittala Temple are a masterpiece
                of ancient Indian craftsmanship.
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
                <li>🕒 <b>Best Time:</b> October – February</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>✈️ <b>Nearest Airport:</b> Hubli Airport</li>
                <li>🚆 <b>Nearest Railway:</b> Hospet Junction</li>
                <li>🏨 <b>Stay:</b> Heritage guest houses</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
              <Sun /> Magical Sunrise & Sunset Views
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Watching the sunrise from Matanga Hill or sunset among the
              giant boulders of Hampi is a surreal experience.
              The golden light over ancient ruins creates a breathtaking view.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Hampi
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqLNogk6r45sW1Q4-c8EFhS_tfQHOhrmOefnpL1LgHjspnYVMJLN5NMbJU0vyFUc5WBC-in0UAvsLASts_BrAPSUXgucFme78bblBlqDcK1ygJXJopAZU9yYKgpHK1dv1paKgeF=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ_8bmllUjuB6NCL66IryUEdSEmcT7UGDqpxo2fsWnaUVtCNYmwP9QgJm8tE10HmpLIoBOEaKUtXdXKkGtPxIK4FNQ&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSyjfz95JzqZmT0uAFJ02d8ON336A0jG606M1oArgH0c745W5jBtHGwH61kZ3myyF_N-WjFb25I9nxDGWbyTII8kI1V&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTGEofYxE6GxtOVniMJN-QWBFoJZOEwars8EnqLSoErHe1YMXsj76v3ThUXmaylZjK4hJIB3tKJkVkLr2pNZZv06xc&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSsZgsTcdkHumdkNdOZyVmyShLzMys2s49QW_8XvLQd-_xRBwBnULw43mZWIp8bU49jKCFoOJDEqqGOTCDwARr8ucc&s=19",
                "https://www.soil2soulexpeditions.com/admin/public/images/blog/image_file/123/The-Sacred-Landscape-of-Hampi.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Hampi"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://karnatakatourism.org/tour-item/hampi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition font-semibold"
            >
              Visit Karnataka Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hampi;
