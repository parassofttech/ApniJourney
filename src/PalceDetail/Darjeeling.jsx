import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Coffee, Info, Waves, Sparkles } from "lucide-react";

const Darjeeling = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://static.toiimg.com/photo/msid-109270441,width-96,height-65.cms"
          alt="Darjeeling"
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
            🍃 Darjeeling – Queen of the Hills
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Nestled in the **Himalayan foothills**, Darjeeling is famous for its **tea gardens**, 
            **stunning viewpoints**, and **pleasant climate**. A perfect blend of nature, culture, and adventure.
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
                Darjeeling became prominent during the **British colonial era** for its **tea plantations** 
                and **hill station resorts**. The famous **Darjeeling Himalayan Railway** is a UNESCO World Heritage Site.
              </p>
            </motion.div>

            {/* Coffee Gardens */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Coffee /> Coffee Gardens
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🍃 Happy Valley Coffee Estate</li>
                <li>🍂 Glenburn Coffee Estate</li>
                <li>🌱 Makaibari Coffee Estate</li>
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
                <li>🚠 Toy Train rides on Darjeeling Himalayan Railway</li>
                <li>🥾 Trekking in Tiger Hill & Sandakphu</li>
                <li>🛶 River rafting & paragliding nearby</li>
                <li>📸 Photography of sunrise at Tiger Hill</li>
              </ul>
            </motion.div>

            {/* Festivals */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Sparkles /> Festivals
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🎉 Darjeeling Carnival</li>
                <li>🧘 Buddha Jayanti</li>
                <li>🌼 Losar Festival</li>
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
                <li>✈️ Nearest Airport: Bagdogra Airport</li>
                <li>🚆 Well-connected by train & road from Siliguri & Kolkata</li>
                <li>🏨 Stay: Hill resorts, boutique hotels, and homestays</li>
                <li>🕒 Best Time to Visit: March – May & September – November</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Darjeeling
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://hikerwolf.com/wp-content/uploads/2020/04/Darjeeling-toy-train-route.jpg",
                "https://www.thelostpassport.com/wp-content/uploads/2020/08/Darjeeling-Tea-Fields.jpg",
                "https://www.dreamtravelyaari.com/admin/img/uploads/blog/1750850617_88639-Top-10-Places-to-Visit-in-Darjeeling-2025.webp",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmBQTgb4BV86-IiwnFQpG3J4UGR8xi8xpew&s",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Darjeeling"
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

export default Darjeeling;
