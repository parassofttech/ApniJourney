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
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
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


          {/* Introduction Section: Sikkim */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

  {/* Advanced Radial Background Glows (Himalayan Wilderness Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏔️</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Sikkim
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      A mystical organic paradise of towering glaciers, sacred alpine lakes, and ancient Buddhist heritage.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏞️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        India's First Organic State
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Northeastern India’s hidden jewel, Sikkim is a wonderland dominated by the majestic silhouette of Mt. Khangchendzonga. Framed by steep valleys and dramatic sub-tropical meadows, it is a haven for clean mountain air and eco-tourism.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Sharing borders with Bhutan, Tibet, and Nepal, Sikkim brings together a rare cultural blend of Lepcha, Bhutia, and Nepali traditions alongside a strictly maintained, fully sustainable ecosystem.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">8,586m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Khangchendzonga</p>
        </div>
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">100%</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Certified Organic</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Sacred Monasteries */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          ☸️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Spiritual Monasteries
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Home to vibrant Tibetan Buddhist heritage. Explore iconic places like the massive <span className="font-semibold">Rumtek Monastery</span> and the hillside Pemayangtse, echoing with peaceful morning chants and fluttering prayer flags.
        </p>
      </div>

      {/* Card 2: High-Altitude Lakes */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          💧
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Glacial Lakes & Valleys
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Witness unreal pristine beauty at 12,000+ feet. From the sacred, turquoise waters of <span className="font-semibold">Tsomgo Lake</span> to the stunning blooming valleys of Yumthang, Sikkim offers surreal alpine vistas.
        </p>
      </div>

      {/* Card 3: Organic Delicacies */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🥟
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Northeastern Food Trail
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Savor rich, authentic mountain flavors. Taste freshly steamed local momos, warm bowls of noodle thukpa, fermented bamboo shoot curries, and traditional <span className="font-semibold">Gundruk</span> made from organic leafy greens.
        </p>
      </div>

      {/* Card 4: High Mountain Passes */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🥾
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          The Historic Nathu La Pass
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk along the legendary Old Silk Route corridor. Situated at an incredible altitude of 14,140 feet, the snow-bordered <span className="font-semibold">Nathu La Pass</span> connects India directly to the Tibetan plateau.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-emerald-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Sikkim is not just a holiday spot—it is a rejuvenating soul experience. It blends peaceful Himalayan spirituality with pristine, untouched nature and crisp air to give you an eco-friendly escape that resets your body and mind entirely.
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
