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
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
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

          {/* Introduction Section: Rameshwaram */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-blue-600 selection:text-white">

  {/* Advanced Radial Background Glows (Mystical Marine & Sacred Island Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>⚓</span> Spiritual Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950">
      Discover Rameshwaram
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The holy island town sitting on the edge of India's southern frontier, boasting legendary pillared corridors, sacred ocean baths, and ghost-town ruins.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-blue-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🔱</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        India's Sacred Oceanic Bridge
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Rameshwaram, isolated beautifully on Pamban Island in Tamil Nadu, is a powerhouse of history, spirituality, and epic poetry. As one of India's core <span className="font-semibold">Char Dham</span> pilgrimage destinations, this pristine island directly overlooks the calm waters of the Gulf of Mannar.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Steeped completely in Ramayana lore, it is the mystical point where ancient faith meets high engineering marvels. It forms an incredible experience of grand Dravidian temple stones, aqua-blue maritime views, and endless coastal horizons.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-blue-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-blue-600">1,212</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Pillars in Corridor</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">22</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Sacred Kunds (Wells)</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Ramanathaswamy Temple Corridors */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-xl font-bold text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          🛕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          The World's Longest Corridor
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk through awe-inspiring Dravidian architectural scales. The outer corridor of the <span className="font-semibold">Ramanathaswamy Temple</span> features over 1,200 massive, intricately carved granite pillars stretching infinitely along pristine sandstone floors.
        </p>
      </div>

      {/* Card 2: Iconic Pamban Rail Bridge */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🚂
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Historic Pamban Bridge
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience a gripping over-sea transit. Watch or ride along the engineering wonder that is the <span className="font-semibold">Pamban Bridge</span>, slicing straight through the open teal ocean waves to connect the island directly to the Indian mainland.
        </p>
      </div>

      {/* Card 3: Ghost Town of Dhanushkodi */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-slate-300 shadow-md hover:shadow-xl hover:shadow-slate-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-700 mb-5 group-hover:bg-slate-700 group-hover:text-white transition-all duration-300">
          ⏳
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-slate-800 transition-colors duration-200">
          Dhanushkodi: The Ghost Town
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore the edge of reality. Drive out to the desolate, hauntingly beautiful ruins of <span className="font-semibold">Dhanushkodi</span>—destroyed in a 1964 cyclone—where the roaring Indian Ocean explicitly meets the calm Bay of Bengal at Land's End.
        </p>
      </div>

      {/* Card 4: Sacred Sea Bathing & Wells */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-xl font-bold text-cyan-600 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
          🌊
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Agni Theertham Purification
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Partake in rich, ancient cleansing rituals. Take a sacred dip in the placid ocean waters of Agni Theertham, followed by a ceremonial walk to be bathed by the historic, mineral-rich waters of the <span className="font-semibold">22 inner temple wells</span>.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-blue-900 via-sky-950 to-amber-700 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-blue-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Rameshwaram is a profoundly immersive island journey. It masterfully interweaves structural marvels, deep ocean winds, and raw architectural weight with ancient cultural roots, presenting an unforgettable off-shore experience at the very tip of the country.
      </p>
    </div>
  </div>

</section>

         {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-sky-500 selection:text-white">

  {/* Advanced Radial Background Glows (Sacred Coastline & Heritage Temple Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-amber-50 border border-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌅 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      Best Time to Visit Rameshwaram
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect island pilgrimage aligned with pleasant maritime breezes and dramatic coastal sunsets.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-sky-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl font-bold mb-6 border border-sky-100">
          🕉️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Sacred Island Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Rameshwaram offers its most comfortable and spiritually enriching weather from <span className="font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these winter months, the intense tropical humidity drops as pleasant sea breezes cruise between 20°C - 30°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this premium timeline, structural wonders like the monumental <span className="font-semibold text-gray-900">Pamban Bridge rail crossings</span>, the majestic Ramanathaswamy Temple pillared corridors, and the ghost town of Dhanushkodi are highly accessible.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-sky-50 to-amber-50 rounded-2xl border border-sky-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-sky-900 font-medium leading-relaxed">
          <strong className="text-sky-950">Pro Tip:</strong> Want to witness the ghost town of Dhanushkodi and the starting point of Ram Setu with maximum clarity? Plan your trip loops for January or February when foggy mornings give way to crystal-clear turquoise horizons.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🛕
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Winter Comfort (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The grand premium season. Highly favorable for beach exploration, watching stunning ocean sunrises over Agni Tirtham, and taking spiritual holy dips across all 22 teerthams.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Spiritual Peak
        </span>
      </div>

      {/* Season 2: Monsoon Retreat */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-teal-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors duration-200">
              Monsoon Rhythms (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Rameshwaram experiences moderate rains with high wind currents. The coastal landscape looks incredibly raw, though boat operations and bridge train schedules can encounter occasional delays.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Ocean Breeze
        </span>
      </div>

      {/* Season 3: Summer Humid Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Summer Humidity (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Intense coastal heat pushing up to 38°C with heavy humidity. Best suited for late evening architecture walks inside the temple interiors or enjoying crowd-free beach view discounts.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Quiet Stays
        </span>
      </div>

    </div>
  </div>

</section>

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
