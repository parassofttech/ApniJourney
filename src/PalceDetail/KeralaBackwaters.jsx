// src/components/KeralaBackwaters.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Ship, Sprout, Camera, Leaf, Plane } from "lucide-react";

const KeralaBackwaters = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://storage.googleapis.com/stateless-www-justwravel-com/2024/12/2745d95c-backwaters-kerala.jpg"
          alt="Kerala Backwaters"
          className="w-full h-[420px] object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")
          }
        />

        <div className="p-8">
          {/* Title */}
          <motion.h1
            className="text-4xl font-extrabold text-center text-emerald-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🌿 Kerala Backwaters – The Venice of the East
          </motion.h1>

          {/* Intro */}
          <motion.p
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience the tranquil beauty of **Kerala’s backwaters**, a network of
            serene lagoons, canals, and rivers. Glide through lush palm-fringed waters
            in traditional **houseboats (kettuvallams)** and soak in the charm of God’s Own Country 🌴.
          </motion.p>

          {/* Introduction Section */}
<section className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

  {/* Advanced Radial Background Glows (Coastal/Tropical Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌴</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Kerala
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      A mesmerizing labyrinth of emerald backwaters, misty spice hills, deep heritage, and pristine coastlines.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🛶</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        God's Own Country
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Kerala, uniquely positioned along the tropical Malabar Coast of India, is a globally acclaimed paradise celebrated for its palm-fringed network of backwaters, rich Ayurvedic wellness, and ecotourism.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Flanked by the Arabian Sea on the west and the towering Western Ghats on the east, Kerala delivers a perfect geographical symphony that seamlessly connects sandy horizons with mist-heavy hill stations.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">44+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Rivers & Lakes</p>
        </div>
        <div className="bg-cyan-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-cyan-600">Pure</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Tropical Bliss</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Backwater Serenity */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🌊
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Emerald Backwater Network
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          An intricate ecosystem of interconnected canals, lagoons, and tranquil lakes. Sailing through <span className="font-semibold">Alleppey or Kumarakom</span> on a premium thatched-roof houseboat reveals authentic coastal villages and endless paddy rows.
        </p>
      </div>

      {/* Card 2: Spice Hills & Tea Fields */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🍃
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Misty Western Ghats
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Escape up to high elevations like <span className="font-semibold">Munnar and Wayanad</span>, where the air turns crisp and paths wind around sprawling green tea estates, cardamom forests, rushing waterfalls, and rare mountain wildlife.
        </p>
      </div>

      {/* Card 3: Culture & Performance */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🎭
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Art, Heritage & Kathakali
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A living theater of heritage. Experience the complex facial expressions of a live <span className="font-semibold">Kathakali</span> performance, the swift movements of Kalaripayattu martial arts, and historical Jewish streets in Fort Kochi.
        </p>
      </div>

      {/* Card 4: Culinary & Wellness */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-xl font-bold text-cyan-600 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
          🥥
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Ayurveda & Malabar Flavors
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Rejuvenate with authentic, medicinal herbal oil therapies. Later, explore intense culinary treats ranging from spicy Malabar parottas and rich coconut curries to fresh seafood served right on a banana leaf.
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
        In short, Kerala is not merely a geographic location—it is an immersion into serene landscapes, organic wellness, spice aromas, and absolute stillness. Whether you are charting a romantic cruise, family getaway, or solo exploration, Kerala leaves an imprint that stays forever.
      </p>
    </div>
  </div>

</section>



          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Popular Backwater Destinations */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-teal-50 border border-teal-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-700 mb-3">
                <MapPin /> Top Backwater Destinations
              </h2>
              <ul className="text-gray-700 Sproutce-y-2">
                <li>🚤 Alleppey (Alappuzha) – Houseboat capital of India</li>
                <li>🌾 Kumarakom – Bird sanctuary & luxury resorts</li>
                <li>🌊 Kollam – Gateway to Ashtamudi Lake</li>
                <li>🏞️ Kasaragod – Peaceful unexplored waters</li>
              </ul>
            </motion.div>

            {/* Houseboat Experience */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Ship /> Houseboat Experience
              </h2>
              <ul className="text-gray-700 Sproutce-y-2">
                <li>🛶 Luxurious wooden houseboats with air-conditioned cabins</li>
                <li>🍛 Onboard Kerala cuisine & candlelight dinners</li>
                <li>🌅 Sunrise and sunset cruises</li>
                <li>🎶 Traditional Kathakali & Mohiniyattam performances onboard</li>
              </ul>
            </motion.div>

            {/* Ayurvedic Wellness */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Sprout /> Ayurveda & Wellness
              </h2>
              <ul className="text-gray-700 Sproutce-y-2">
                <li>💆‍♀️ Authentic Ayurvedic therapies</li>
                <li>🌸 Sprout retreats & yoga centers by the water</li>
                <li>🍃 Herbal treatments for rejuvenation</li>
                <li>🧘 Detox & meditation sessions amidst nature</li>
              </ul>
            </motion.div>

            {/* Travel Information */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-orange-50 border border-orange-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Plane /> Travel Information
              </h2>
              <ul className="text-gray-700 Sproutce-y-2">
                <li>✈️ Nearest Airport: Cochin International Airport (COK)</li>
                <li>🚉 Nearest Railway Station: Alleppey & Kottayam</li>
                <li>🚗 Distance from Kochi: 53 km to Alleppey</li>
                <li>🕒 Best Time to Visit: October – March</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Kerala Backwaters Gallery – Nature’s Tranquil Escape
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://static.toiimg.com/photo/58490365/.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkx7wsBi8OoZvmEDrPLF5xUguH1x6t5EZnUg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJTYaeOeIjN_8Po_9BTaGO35jGeN6LrZzgA&s",
                "https://static.toiimg.com/thumb/msid-116566039,width-748,height-499,resizemode=4,imgsize-97584/.jpg",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Kerala Backwaters"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80")
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

export default KeralaBackwaters;
