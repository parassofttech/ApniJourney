// src/components/Andaman.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Waves, Ship, Plane, Camera } from "lucide-react";

const Andaman = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-cyan-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://www.gokitetours.com/wp-content/uploads/2025/01/10-Best-Places-to-Visit-in-Andaman-and-Nicobar-in-2025.webp"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-sky-800 mb-4"
          >
            🏝️ Andaman Islands – Paradise of the Indian Ocean
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            The **Andaman & Nicobar Islands** are a cluster of around **572 tropical islands** known for their **pristine beaches, turquoise waters, rich marine life**, and **vibrant coral reefs**.  
            It's the perfect destination for **scuba diving, beach camping, and eco-tourism**.
          </motion.p>

          
          {/* Introduction Section: Andaman Islands */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

  {/* Advanced Radial Background Glows (Exotic Tropical Ocean Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏝️</span> Archipelago Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
      Discover Andaman
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      An emerald string of tropical islands floating in the Bay of Bengal, boasting pristine coral reefs and dense, untamed rainforests.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-cyan-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🐠</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        India's Pure Oceanic Frontier
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        The Andaman Islands form an exotic archipelago of over 300 stunning tropical islands. Located far off the eastern coast of mainland India, they are world-famous for their blindingly white sand beaches and glass-clear turquoise waters.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Once a remote penal colony during colonial rule, the islands have transformed completely into a premium, world-class destination for scuba diving, ecotourism, and untouched island-hopping adventures.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-cyan-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-cyan-600">300+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Tropical Islands</p>
        </div>
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">Top 10</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Global Beaches</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Radhanagar Beach (Havelock) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-xl font-bold text-cyan-600 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
          🌅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Radhanagar Beach Magic
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Ranked among Asia's absolute best beaches. Located on <span className="font-semibold">Havelock Island (Swaraj Dweep)</span>, its endless stretch of powdery white sand is framed beautifully by a massive wall of lush, green mahua trees.
        </p>
      </div>

      {/* Card 2: Scuba Diving & Marine Life */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🤿
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          World-Class Coral Diving
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Plunge into the deep blue. Explore thriving coral gardens at sites like Neil Island (Shaheed Dweep), teeming with vibrant parrotfish, sea turtles, manta rays, and pristine volcanic rock formations.
        </p>
      </div>

      {/* Card 3: Historical Cellular Jail */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          The Heritage Cellular Jail
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Uncover powerful history in Port Blair. Walk through the solemn corridors of <span className="font-semibold">Kala Pani</span>, a historic brick structure that once held freedom fighters, and watch its poignant evening light-and-sound show.
        </p>
      </div>

      {/* Card 4: Bioluminescent Night Kayaking */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          ✨
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Bioluminescent Kayaking
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Paddle through a sea of stars. Embark on a night-time mangrove or ocean kayak tour where tiny marine organisms light up instantly into a glowing neon-blue stream with every stroke of your paddle.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-cyan-700 via-teal-700 to-indigo-800 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-cyan-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, the Andaman Islands offer a luxury of raw nature. Far detached from commercial beach rushes, it provides a highly immersive island experience where you can dive with marine life, trek through ancient jungle roots, and unwind on empty sands.
      </p>
    </div>
  </div>

</section>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Famous Beaches */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Famous Beaches
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏖️ <b>Radhanagar Beach (Havelock):</b> Ranked among Asia’s best</li>
                <li>🌅 <b>Elephant Beach:</b> Known for coral snorkeling</li>
                <li>🐚 <b>Corbyn’s Cove:</b> Port Blair’s popular hangout</li>
                <li>🌊 <b>Kalapathar Beach:</b> Peaceful and scenic</li>
              </ul>
            </motion.div>

            {/* Adventure Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Ship /> Adventure & Water Sports
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🤿 Scuba Diving & Snorkeling</li>
                <li>🛥️ Glass-bottom boat rides</li>
                <li>🏄 Jet skiing & kayaking</li>
                <li>🔥 Beach bonfire & night camping</li>
              </ul>
            </motion.div>

            {/* Historical Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <MapPin /> Must-Visit Places
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏛️ <b>Cellular Jail:</b> National Memorial of Freedom Struggle</li>
                <li>🪶 <b>Ross Island:</b> Colonial ruins amid lush greenery</li>
                <li>🌋 <b>Baratang Island:</b> Mud volcanoes & limestone caves</li>
                <li>🐠 <b>North Bay Island:</b> Coral & underwater view</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Plane /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Veer Savarkar International Airport (Port Blair)</li>
                <li>🚢 Ferry Services from Chennai, Kolkata, and Vizag</li>
                <li>🏨 Stay: Beach resorts, eco-huts, and luxury stays</li>
                <li>🕒 Best Time to Visit: October – May</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Andaman Gallery – Experience Paradise
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0-0PbIgxJAB2Lmnsh8j-adrp3m_2h-VhqQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOoyvrUNMtdPBRaA5eTj8sZ6ABRmbZZEn-w&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoA_yffvw3e1gMSYnPew7ktjNhq_z-D_yUw&s",
                "https://www.andamanislands.com/uploads/andamanislands/blog/main/5fa40347e356f155_history_of_andaman_islands.jpg",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Andaman Island"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")
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

export default Andaman;
