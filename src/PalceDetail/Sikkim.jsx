import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Festival, Camera } from "lucide-react";

const Sikkim = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Sikkim_Himalayas.jpg"
          alt="Sikkim"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1200&q=80")
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
            🏔️ Sikkim – Land of Mountains & Monasteries
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Sikkim, located in the **northeastern Himalayas**, is a paradise of **snow-capped mountains, 
            serene lakes, and vibrant monasteries**. Famous for its **Tibetan culture**, **adventure sports**, 
            and **eco-tourism**, Sikkim is a dream destination for nature lovers and spiritual seekers.
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
                Sikkim was an independent kingdom until it became part of India in **1975**. 
                The state is rich in **Tibetan Buddhist heritage**, reflected in its monasteries, festivals, and architecture.
              </p>
            </motion.div>

            {/* Monasteries */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Sun /> Famous Monasteries
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🛕 Rumtek Monastery</li>
                <li>🛕 Pemayangtse Monastery</li>
                <li>🛕 Enchey Monastery</li>
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Adventure & Activities
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🥾 Trekking to Goecha La & Dzongri</li>
                <li>🚠 Ropeway rides in Gangtok</li>
                <li>🛶 Kayaking and river rafting in Teesta River</li>
                <li>📸 Photography of Kanchenjunga & Tsomgo Lake</li>
              </ul>
            </motion.div>

            {/* Festivals */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Festival /> Festivals
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🎉 Losar Festival – Tibetan New Year</li>
                <li>🎭 Bumchu Festival</li>
                <li>🌼 Saga Dawa Festival</li>
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
                <li>✈️ Nearest Airport: Pakyong Airport / Bagdogra Airport</li>
                <li>🚆 Well-connected by train & road from Siliguri & Kolkata</li>
                <li>🏨 Stay: Boutique hotels, homestays, and eco-lodges</li>
                <li>🕒 Best Time to Visit: March – June & September – November</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Sikkim
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/1/10/Rumtek_Monastery_Sikkim.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/4/49/Kanchenjunga_View_Sikkim.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/f/f0/Tsomgo_Lake_Sikkim.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/2/23/Gangtok_Ropeway.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/9/91/Pelling_View.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/5/56/Tashiding_Monastery.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Sikkim"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=900&q=80")
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

export default Sikkim;
