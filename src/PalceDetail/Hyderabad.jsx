// src/components/Hyderabad.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Landmark, Utensils, Camera, Plane, Building2 } from "lucide-react";

const Hyderabad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/charminar-mosque-hyderabad-telangana-3-attr-about?qlt=82&ts=1742173420954"
          alt="Charminar Hyderabad"
          className="w-full h-[420px] object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1597004921390-b10fcefb74b1?auto=format&fit=crop&w=1200&q=80")
          }
        />

        <div className="p-8">
          {/* Title */}
          <motion.h1
            className="text-4xl font-extrabold text-center text-purple-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🕌 Hyderabad – The City of Pearls & Nizams
          </motion.h1>

          <motion.p
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hyderabad, the capital of Telangana, is where **heritage meets modernity**.
            From the royal **Charminar** and **Golconda Fort** to the shining **HITEC City**
            skyline, Hyderabad offers a mix of Mughal-era charm and tech-driven energy.
            And of course, it’s the land of the **world-famous Hyderabadi Biryani**! 🍛
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Historical Landmarks */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-3">
                <Landmark /> Historical Landmarks
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏰 Golconda Fort – echoing walls & royal history</li>
                <li>🕌 Charminar – Hyderabad’s iconic 16th-century monument</li>
                <li>💎 Chowmahalla Palace – grandeur of the Nizams</li>
                <li>🕍 Qutb Shahi Tombs – intricate Indo-Islamic architecture</li>
              </ul>
            </motion.div>

            {/* Cuisine */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Utensils /> Culinary Delights
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🍗 Hyderabadi Biryani – world-famous & flavorful</li>
                <li>🥘 Haleem – Ramadan specialty dish</li>
                <li>☕ Irani Chai & Osmania Biscuits – cafe culture of Hyderabad</li>
                <li>🍢 Pathar-ka-Gosht & Double-ka-Meetha desserts</li>
              </ul>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-pink-50 border border-pink-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Camera /> Top Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🌇 Hussain Sagar Lake & Buddha Statue</li>
                <li>🎡 Ramoji Film City – world’s largest film studio</li>
                <li>🛍️ Laad Bazaar – pearls, bangles & handicrafts</li>
                <li>🏙️ HITEC City – India’s Silicon Valley of the South</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Rajiv Gandhi International Airport</li>
                <li>🚆 Hyderabad Deccan Station (Nampally)</li>
                <li>🚗 Metro & local cabs available throughout the city</li>
                <li>🕒 Best Time to Visit: October – February</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Hyderabad Gallery – Heritage Meets Modernity
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://s7ap1.scene7.com/is/image/incredibleindia/golconda-fort-hyderabad-secunderabad-telangana-3-musthead-hero?qlt=82&ts=1742197014098",
                "https://www.hyderabadtourism.travel/images//v2/header-places/chowmahalla-palace-hyderabad-tourism-entryfee-timings-reviews-header.jpg",
                "https://sceneloc8.com/wp-content/uploads/2024/03/Qutb-Shahi-Tombs.png",
                "https://rangandatta.wordpress.com/wp-content/uploads/2016/08/monolithic-buddha-6.jpg",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f3/ad/1a/filmi-duniya.jpg?w=1200&h=-1&s=1",
                "https://www.holidify.com/images/cmsuploads/compressed/250614-ci-laad-bazaar-charminar-hyderabad-india-11_20180205200239_20180806160227.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Hyderabad view"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1597004921390-b10fcefb74b1?auto=format&fit=crop&w=900&q=80")
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

export default Hyderabad;
