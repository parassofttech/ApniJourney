import React from "react";
import { motion } from "framer-motion";
import { MapPin, Landmark, Sun, Info, Camera, ExternalLink } from "lucide-react";

const Rameshwaram = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/last-land-of-india-2-rameswaram-tamilnadu-hero-1?qlt=82&ts=1727162194133"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1603389320685-446b5fdbf02d?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-800 mb-4 text-center"
          >
            🕉️ Rameshwaram – The Sacred Island of Faith
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-8"
          >
            Rameshwaram, located in Tamil Nadu, is one of the **holiest
            pilgrimage sites in India** and part of the **Char Dham**. It is
            said to be the place where **Lord Rama built the Ram Setu** to reach
            Lanka, as mentioned in the epic <b>Ramayana</b>. The town is famous
            for its spiritual vibes, sea views, and ancient temples.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Info /> Mythology & History
              </h2>
              <p className="text-gray-700 leading-relaxed">
                According to the <b>Ramayana</b>, Lord Rama prayed to Lord Shiva
                here to absolve any sins committed during his war against Ravana.
                The <b>Ramanathaswamy Temple</b> was built at this sacred site.
                The temple has one of the **longest corridors in Asia** and is
                considered a masterpiece of Dravidian architecture.
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
                <li>🏛️ Ramanathaswamy Temple – 1000+ pillar corridor</li>
                <li>🌉 Pamban Bridge – Engineering marvel over the sea</li>
                <li>🌊 Dhanushkodi – The “Ghost Town” at India’s tip</li>
                <li>🏖️ Agni Theertham – Sacred sea for ritual bathing</li>
              </ul>
              <a
                href="https://www.tamilnadutourism.tn.gov.in/destinations/rameswaram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-green-600 mt-3 underline hover:text-green-800"
              >
                Explore Rameshwaram attractions <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Spiritual Significance */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Landmark /> Spiritual Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                It is believed that a pilgrimage to Rameshwaram **completes the
                Char Dham Yatra**, along with Badrinath, Dwarka, and Puri. The
                **22 holy wells (Teerthams)** inside the temple are believed to
                wash away sins and purify the soul.
              </p>
            </motion.div>

            {/* Travel Information */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-purple-50 rounded-2xl shadow-sm border border-purple-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-purple-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> October – April</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>✈️ <b>Nearest Airport:</b> Madurai (170 km)</li>
                <li>🚆 <b>Rail:</b> Rameswaram Junction</li>
                <li>🚗 <b>Transport:</b> Autos, taxis, local buses</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
              <Sun /> Spiritual & Natural Harmony
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Witness the sunrise at **Dhanushkodi**, take a dip in **Agni
              Theertham**, explore **Pamban Bridge**, and experience the peaceful
              aura of the **Ramanathaswamy Temple**. Every corner of Rameshwaram
              reflects devotion, purity, and the calmness of the sea.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – The Divine Beauty of Rameshwaram
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pamban_Bridge_Train_Passing.jpg/1200px-Pamban_Bridge_Train_Passing.jpg",
                "https://content3.jdmagicbox.com/comp/rameswaram/u8/9999p4573.4573.141220155803.j2u8/catalogue/dhanushkodi-beach-rameswaram-ho-rameswaram-tourist-attraction-jbfz853679.jpg",
                "https://www.poojn.in/wp-content/uploads/2025/03/Exploring-Rameshwaram-Hidden-Gems-Beyond-the-Ramanathaswamy-Temple.jpeg.jpg",
                "https://blogs.pathbeat.in/wp-content/uploads/2024/05/rameswaram-temple-1656167436_f2c551193bb7d4bc6f70.webp",
                "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Rameshwaram_tv_destination_img_1_l_668_1183.jpg",
                "https://www.indiantempletour.com/wp-content/uploads/2023/03/Madurai-Rameshwaram.jpeg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Rameshwaram"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1603389320685-446b5fdbf02d?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Official Links */}
          <div className="mt-8 text-center">
            <a
              href="https://www.tamilnadutourism.tn.gov.in/destinations/rameswaram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Visit Official Rameshwaram Tourism Site <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Rameshwaram;
