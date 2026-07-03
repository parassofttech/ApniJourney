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

          {/* Introduction Section: Varanasi */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-red-500 selection:text-white">

  {/* Advanced Radial Background Glows (Mystical Kashi Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-amber-50 border border-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🪔</span> Spiritual Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-red-950 to-gray-950">
      Discover Varanasi
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The luminous city of lights, standing as the living beating heart of Indian civilization, philosophy, and timeless spirituality.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-red-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🕉️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Oldest Living City on Earth
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Varanasi, also known as Kashi or Banaras, curves majestically along the sacred crescent of the Ganga River in Uttar Pradesh. It is a city older than history, tradition, and even legend, continuously inhabited for over 3,000 years.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Revered as the absolute abode of Lord Shiva, it serves as the ultimate threshold between the earthly world and cosmic liberation (Moksha), where life and eternity meet on stone steps.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-red-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-red-600">84+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Iconic Ghats</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">3000+ Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Living History</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Kashi Vishwanath Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl font-bold text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
          🔱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          The Sacred Golden Spire
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The spiritual epicenter. Navigate the vibrant, historic lanes to reach the grand <span className="font-semibold">Kashi Vishwanath Temple</span>, featuring majestic gold-plated spires and the newly built, spacious river corridor.
        </p>
      </div>

      {/* Card 2: Subah-e-Banaras & Evening Aarti */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🔥
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Ganga Aarti Spectacular
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Witness intense devotion at <span className="font-semibold">Dashashwamedh Ghat</span>. Watch synchronized priests wave massive brass lamps under rhythmic chants, turning the twilight river into a sea of floating gold.
        </p>
      </div>

      {/* Card 3: Banarasi Weaving Heritage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          🧵
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          Royal Banarasi Silks
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Discover a legacy of pure art. Explore centuries-old weaver colonies where artisans manually craft majestic <span className="font-semibold">Banarasi Silk Sarees</span> using fine gold and silver metallic threads (Zari).
        </p>
      </div>

      {/* Card 4: Street Food & Saffron Lassi */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🍲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Iconic Food Trail
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Savor flavors out of earthen kulhads. Indulge in crisp Kachori Sabzi, thick creamy Malaiyo, saffron-loaded thick lassis, and finish the street food journey with an authentic, refreshing <span className="font-semibold">Banarasi Paan</span>.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-red-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Varanasi isn't just a place to visit—it is an existential experience. It strips away the superficial noise of modern life, offering an overwhelming, deep dive into raw spiritual energy, magnificent rituals, and the profound cycle of human existence.
      </p>
    </div>
  </div>

</section>

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
