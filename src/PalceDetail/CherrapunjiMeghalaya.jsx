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
    {/* Introduction Section: Cherrapunji */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-sky-600 selection:text-white">

  {/* Advanced Radial Background Glows (Torrential Rains & Deep Canyons Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-500/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-slate-100 border border-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌧️</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950">
      Discover Cherrapunji
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      Historically known as Sohra, a dramatic high-altitude kingdom of thunderous vertical waterfalls, ancient limestone caves, and mist-laden canyons.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌫️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Rain-Washed Edge of the World
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Cherrapunji, sitting on a soaring plateau in the East Khasi Hills of Meghalaya at 1,430 meters, is legendary for holding some of the highest recorded rainfalls on the planet. Here, clouds do not simply hover in the sky; they drift gracefully into your rooms.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Inhabited by the deeply welcoming <span className="font-semibold">Khasi people</span>, Sohra is a landscape of extremes. It transitions from roaring, plume-like water drops during wet seasons to deep, mystical sunlit limestone trails in winter.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-sky-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-sky-600">11,000+mm</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Annual Rainfall</p>
        </div>
        <div className="bg-slate-100/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-slate-700">1,115ft</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Nohkalikai Height</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Nohkalikai Waterfalls */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          💧
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Mighty Nohkalikai
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Witness India's tallest plunge waterfall. Fed completely by torrential upstream downpours, it leaps fiercely from a sheer forest cliff face, plunging straight down into a stunning, neon-green pooling basin below.
        </p>
      </div>

      {/* Card 2: Living Root Bridges */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🌿
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Bio-Engineered Root Bridges
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Marvel at ancient Khasi engineering. Trek deep down into the valley floor to spot living suspension bridges painstakingly woven over centuries from the raw, rubbery aerial roots of the massive <span className="font-semibold">Ficus elastica</span> trees.
        </p>
      </div>

      {/* Card 3: Mawsmai & Arwah Caves */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🔦
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Subterranean Limestone Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into a dark prehistoric underground maze. Squeeze through the naturally lit passageways of <span className="font-semibold">Mawsmai Cave</span>, or hunt for marine fossils perfectly embedded inside the damp limestone walls of Arwah Cave.
        </p>
      </div>

      {/* Card 4: Eco-Park & Canyon Horizons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-slate-400 shadow-md hover:shadow-xl hover:shadow-slate-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-700 mb-5 group-hover:bg-slate-700 group-hover:text-white transition-all duration-300">
          ⛰️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-slate-800 transition-colors duration-200">
          The Sweeping Canyons of Sohra
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Peering straight into neighboring horizons. Head over to the edge of the plateau at the Eco-Park or Laitlum Canyons to catch views of massive river gorges carving down cleanly into the flat, sprawling floodplains of Bangladesh.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-900 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-sky-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Cherrapunji is a cinematic mountain escape. It offers a rare, pristine atmosphere where you can stand underneath massive monsoon clouds, trace centuries-old living tree roots, and peer into infinite valley gorges wrapped in absolute tranquility.
      </p>
    </div>
  </div>

</section>

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
