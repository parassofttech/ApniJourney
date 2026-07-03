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
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
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

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

  {/* Advanced Radial Background Glows (Tropical Ocean & Coral Lagoon Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-emerald-50 border border-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏝️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
      Best Time to Visit Andaman Islands
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect tropical getaway aligned with calm sea waves, deep diving windows, and sun-kissed skies.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-cyan-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-2xl font-bold mb-6 border border-cyan-100">
          🌊
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Tropical Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          The Andaman Islands are at their absolute premium from <span className="font-bold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded-md">October to May</span>. During these gorgeous months, the tropical climate transitions into a steady 22°C - 30°C range, bringing flat, calm sea surfaces and excellent underwater visibility.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this peak window, adventure hotspots like Havelock Island (Swaraj Dweep), Neil Island, and the <span className="font-semibold text-gray-900">Radhanagar Beach</span> circuit burst with active scuba diving, bioluminescent night kayaking, and island hopping ferries.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-2xl border border-cyan-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-cyan-900 font-medium leading-relaxed">
          <strong className="text-cyan-950">Pro Tip:</strong> Want to enjoy completely private beaches and experience a cheaper luxury resort infrastructure? Target the shoulder weeks of early October or late April when water currents are starting to shift.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter & Spring Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-cyan-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🤿
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-cyan-700 transition-colors duration-200">
              Winter & Spring (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The high beach season. Absolute goldmine for crystal-clear scuba diving, pristine coral visibility, sea walking, and attending the vibrant island cultural festivals.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-cyan-100/70 text-cyan-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Pristine Diving
        </span>
      </div>

      {/* Season 2: Summer Cruising */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Summer Breeze (April – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Warm coastal days with refreshing evening sea winds. Water sports operate fully, and it is a beautiful window for beach trekking and tracking giant sea turtle nesting grounds.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Sunny Skies
        </span>
      </div>

      {/* Season 3: Heavy Monsoons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛈️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Monsoon (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Heavy ocean downpours and strong winds. High sea volatility frequently halts inter-island ferry networks and water sports loops, but indoor heritage sites offer great solace.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          High Tide Risk
        </span>
      </div>

    </div>
  </div>

</section>
        </div>
      </motion.div>
    </div>
  );
};

export default Andaman;
