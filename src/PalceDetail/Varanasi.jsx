import React from "react";
import { motion } from "framer-motion";
import { MapPin, Church, Info, Camera, Sparkles, Ship } from "lucide-react";

const Varanasi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://d22eux7aqicogj.cloudfront.net/assets/destination-hero-image/varanasi.webp"
          alt="Varanasi Ghats"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1581031405421-8a9e49c3c7b4?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content Section */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-orange-800 mb-4"
          >
            🕉️ Varanasi – The Spiritual Capital of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Varanasi, also known as **Kashi** or **Banaras**, is one of the
            oldest living cities in the world. Situated along the sacred **Ganges
            River**, it is a hub of **spirituality, culture, rituals, and festivals**.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Info /> History & Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Varanasi is over **3000 years old** and has been a cultural and
                spiritual center of India. It is considered the **holiest city** in
                Hinduism and attracts pilgrims for its **rituals, temples, and ghats**.
              </p>
            </motion.div>

            {/* Ghats */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Ship /> Famous Ghats
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🛶 <b>Dashashwamedh Ghat:</b> Evening aarti & rituals</li>
                <li>🌊 <b>Assi Ghat:</b> Sunrise ship rides & local culture</li>
                <li>🕉️ <b>Manikarnika Ghat:</b> One of the holiest cremation ghats</li>
                <li>🌅 <b>Harishchandra Ghat:</b> Traditional cremation & rituals</li>
              </ul>
            </motion.div>

            {/* Temples */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Church /> Famous Temples
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🛕 <b>Kashi Vishwanath Temple:</b> Lord Shiva temple, central attraction</li>
                <li>🛕 <b>Durga Temple:</b> Historic temple with vibrant architecture</li>
                <li>🛕 <b>Tulsi Manas Temple:</b> Ramayana inscriptions & art</li>
              </ul>
            </motion.div>

            {/* Festivals */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Sparkles /> Festivals
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🎉 <b>Dev Deepawali:</b> Millions of lamps on ghats</li>
                <li>🕯️ <b>Ganga Mahotsav:</b> Cultural performances & crafts</li>
                <li>🎶 <b>Makar Sankranti:</b> Kite flying & traditional fairs</li>
              </ul>
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
                <li>🕒 <b>Best Time to Visit:</b> October – March</li>
                <li>✈️ <b>Nearest Airport:</b> Lal Bahadur Shastri Airport</li>
                <li>🚆 <b>By Train:</b> Major Indian cities connected by rail</li>
                <li>🏨 <b>Stay:</b> Riverside hotels, guesthouses & heritage stays</li>
              </ul>
            </motion.div>
          </div>

          {/* Culture & Local Life */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-orange-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
              <Info /> Culture & Local Life
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Varanasi’s culture is deeply spiritual and artistic. Witness **street music, classical dances, silk weaving**, and **evening aartis** along the Ganges. The city never sleeps and offers an immersive experience of India’s traditions.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Varanasi
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://kashiyatra.in/wp-content/uploads/2023/04/varanasi-tour-package.jpg",
                "https://dhramshala.in/wp-content/uploads/2023/09/varanasi-ghats.jpg",
                "https://resources.news.e.abb.com/images/2022/10/11/1/resize_Varanasi-image2.jpg",
               
              
                
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Varanasi"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1581031405421-8a9e49c3c7b4?auto=format&fit=crop&w=900&q=80")
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

export default Varanasi
