import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Bike,
  Camera,
  Info,
  ExternalLink,
  CloudSnow,
} from "lucide-react";

const LehLadakh = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRdMowPzk3k7rxm2KlWmMejTK48BCEw6kxVa-0GrQvOO2HYdb-tidpOdHwk1AvEp03k2aySO5vz938SQ25Obj1I6d8&s=19"
          alt="Leh Ladakh Mountains"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTpS5il7ARF3ieMtyhQ5YsAnVNH-ysZwHmX3pMKjq0b1l1vv0ggZWanyuKzOv4Cb_9Hs4KcUS9UdtzSzvEXqrocALk&s=19")
          }
        />

        {/* Content Section */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-blue-800 mb-4"
          >
            🏔️ Leh–Ladakh – Land of High Passes
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Leh–Ladakh, often called the **“Roof of India”**, is an otherworldly
            destination surrounded by snow-clad mountains, ancient monasteries,
            turquoise lakes, and endless adventure routes. Located in **Jammu &
            Kashmir (Union Territory)**, it’s a dream for bikers, travelers, and
            spiritual seekers alike.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Info /> History & Heritage
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Leh and Ladakh were once part of the ancient **Silk Route**
                connecting Tibet with Central Asia. The region boasts centuries-old
                Buddhist monasteries such as **Thiksey**, **Hemis**, and **Diskit**.
                You can witness the influence of **Tibetan culture, art, and
                spirituality** throughout the valley.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Camera /> Top Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏞️ <b>Pangong Tso:</b> A breathtaking high-altitude lake</li>
                <li>🕌 <b>Hemis Monastery:</b> Largest and richest monastery in Ladakh</li>
                <li>🕍 <b>Shanti Stupa:</b> Symbol of world peace overlooking Leh</li>
                <li>🌌 <b>Nubra Valley:</b> Desert between snow mountains</li>
                <li>🛕 <b>Thiksey Monastery:</b> Replica of Potala Palace in Tibet</li>
              </ul>
              <a
                href="https://ladakh.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-green-700 mt-3 underline hover:text-green-900"
              >
                Visit Ladakh Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Adventure */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Bike /> Adventure & Activities
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Leh–Ladakh is a paradise for adventure lovers. Popular experiences
                include **biking across Khardung La (world’s highest motorable
                road)**, **river rafting in Zanskar**, **trekking**, and **camping by
                Pangong Lake**. Every turn on these mountain roads reveals a new
                wonder.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time to Visit:</b> May – September</li>
                <li>🚗 <b>By Road:</b> From Manali or Srinagar via scenic highways</li>
                <li>✈️ <b>Nearest Airport:</b> Kushok Bakula Rimpochee Airport, Leh</li>
                <li>🏍️ <b>Famous Route:</b> Manali → Leh → Nubra → Pangong → Kargil</li>
                <li>🏡 <b>Stay:</b> Boutique hotels, monasteries, campsites</li>
              </ul>
            </motion.div>
          </div>

          {/* Culture & People */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border border-green-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
              <CloudSnow /> Culture & People
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ladakh’s people are warm, humble, and deeply spiritual. Their
              culture is influenced by **Tibetan Buddhism**, visible in art, dance,
              and prayer flags fluttering across mountains. Traditional dishes like
              **Thukpa**, **Momos**, and **Butter Tea** offer a taste of the
              Himalayas.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Leh & Ladakh
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTpS5il7ARF3ieMtyhQ5YsAnVNH-ysZwHmX3pMKjq0b1l1vv0ggZWanyuKzOv4Cb_9Hs4KcUS9UdtzSzvEXqrocALk&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRubr_9AOTLET5xqioNR_j9Qf0jKmrgcQSaVfnObOPXSaTodbewYEyox0xvTdPX0rOKKrImxWh53GzkxoWXoN6Xcs&s=19",
                "https://zoyotrip.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-24-at-1.09.20-PM-1-1024x1024.jpeg.webp",
                "https://images.indianexpress.com/2019/01/leh-ladakh-getty-images-759.jpg",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Leh Ladakh"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1596813362035-6b76c3c86b07?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://ladakh.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Visit Ladakh Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LehLadakh;
