import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Camera, Umbrella } from "lucide-react";

const CherrapunjiMeghalaya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/noh-sngithiang-falls-cherrapunjee-meghalaya-1-attr-hero?qlt=82&ts=1742172330792"
          alt="Cherrapunji"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1612043342432-847d4f1e5b9c?auto=format&fit=crop&w=1200&q=80")
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
            💦 Cherrapunji – The Land of Clouds & Waterfalls
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Cherrapunji, Meghalaya, is famous for being one of the **wettest places on Earth**. 
            It is renowned for its **lush green landscapes, dramatic waterfalls, and living root bridges**. 
            A paradise for nature lovers and adventure seekers alike.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Waterfalls */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Famous Waterfalls
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>💧 <b>Nohkalikai Falls:</b> Tallest plunge waterfall in India</li>
                <li>🌊 <b>Seven Sisters Falls:</b> Stunning multi-tier waterfall</li>
                <li>💦 <b>Mawsmai Falls:</b> Picturesque & accessible waterfall</li>
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Umbrella /> Adventure & Activities
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🥾 Trekking through dense forests and hills</li>
                <li>🌉 Explore living root bridges in nearby villages</li>
                <li>📸 Photography & nature walks</li>
              </ul>
            </motion.div>

            {/* Culture & Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Sun /> Culture & Lifestyle
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Khasi tribe predominates in Cherrapunji, with a rich cultural heritage. 
                Festivals like **Nongkrem Dance Festival** celebrate traditional music, 
                dance, and rituals, offering a deep insight into tribal life.
              </p>
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
                <li>✈️ Nearest Airport: Shillong Airport (~55 km)</li>
                <li>🚆 Nearest Railway Station: Guwahati Railway Station (~140 km)</li>
                <li>🚌 Local Transport: Shared cabs & taxis</li>
                <li>🕒 Best Time to Visit: September – May</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Cherrapunji
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://topplacesindia.com/img/attractions/meghalaya/cherrapunji/cherrapunji-hero.jpg",
                "https://t4.ftcdn.net/jpg/08/44/32/71/360_F_844327134_BizEwb4eQIwlg6IKeeBbvD3YcjlLpuCB.jpg",
                "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1701775312_431024-shillong-cherrapunji-dawki-tour-slider-image.webp",
                "https://topplacesindia.com/img/attractions/meghalaya/cherrapunji/cherrapunji-hero.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR5pJeOuI5JH32-yKyN5wP3iKzuHvz16VoA&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTycG1S2iQy7u7SQ-OBnxchUDtlW8rnlT3PQ&s",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Cherrapunji"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1601924646997-b19332edaa35?auto=format&fit=crop&w=900&q=80")
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

export default CherrapunjiMeghalaya;
