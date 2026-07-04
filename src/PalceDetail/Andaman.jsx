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

          {/* Best Hotels & Resorts Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

            {/* Ocean-Themed Background Glows (Tropical Lagoons & Deep Sea Tints) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🏝️ Island Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
                Best Hotels & Resorts in Andamans
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From ultra-luxury beachside eco-villas nestled under canopy trees to vibrant beachfront dive resorts.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Premium Eco-Luxury Villas (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      👑
                    </div>
                    <span className="text-xs font-bold bg-cyan-100/60 text-cyan-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Ultra-Luxury Eco-Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
                    Taj Exotica & Luxury Beachfront Villas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Immerse yourself in world-class sustainable luxury on the edge of the world-famous <span className="font-semibold text-gray-900">Radhanagar Beach (Havelock Island)</span>. Properties like <span className="font-semibold text-gray-900">Taj Exotica Resort & Spa</span> or <span className="font-semibold text-gray-900">Barefoot at Havelock</span> offer stunning stilted villas crafted from sustainable timber, private plunge pools, and canopy walkways winding through dense, ancient endemic rainforests just steps from the powdery white sands.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
                  Eco-Sustainability & Exclusive Beachfront Access
                </div>
              </div>

              {/* Card 2: Boutique Scuba & Dive Resorts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🤿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Boutique Dive Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Perfect for oceanic adventurers checking out properties like <span className="font-semibold text-gray-900">Symphony Palms</span> or custom dive-centric resorts on <span className="font-semibold text-gray-900">Beach No. 3 and 5</span>. These offer in-house SSI/PADI certified diving facilities, cozy wooden cottages, and lively beach bars.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Marine Explorations & Coastal Cabanas
                </div>
              </div>

              {/* Card 3: Mid-Range Floating Horizon Estates */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌅
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Cliffside & Sunrise Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover striking panoramic properties on <span className="font-semibold text-gray-900">Neil Island (Shaheed Dweep)</span> like <span className="font-semibold text-gray-900">Sea Shell Samsara</span>. Perched along dramatic rocky viewpoints or quiet eastern beaches, these spots provide unparalleled sunrise decks and tranquil infinity pools.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Serene Vistas & Low-Tide Explorations
                </div>
              </div>

              {/* Card 4: Port Blair Transit Hubs (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ⚓
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Gateway Infrastructure
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Port Blair Luxury Transit Stays & Historic Hubs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Ensure premium comfort during your mandatory mainland arrival and departure transit stops in <span className="font-semibold text-gray-900">Port Blair</span>. Top-tier properties like <span className="font-semibold text-gray-900">Welcomehotel by ITC Hotels (Bay Island)</span> or <span className="font-semibold text-gray-900">Sea Shell Port Blair</span> offer sweeping views over the busy shipping channels, close proximity to the historic Cellular Jail, and premium business-class amenities.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Harbor Views & Seamless Ferry Proximity
                </div>
              </div>

              {/* Card 5: Backpacker & Back-To-Basics Eco Hostels */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎒
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Social Backpacker Hubs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Budget-friendly, community-heavy structures located near Havelock's jetty market loops. Perfect environments for solo travelers searching for cheap dorms, island-hopping groups, and shared scooter rental systems.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Nomadic Networking & Budget Trails
                </div>
              </div>

              {/* Card 6: Secluded Off-Grid Resorts (Little Andaman/Diglipur) */}
              <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center shrink-0 border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🧭
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                      Far-Northern Expeditions & Pristine Wilderness Eco-Lodges
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
                      Tailor-made for off-the-beaten-path travelers venturing up toward <span className="font-semibold text-gray-900">Diglipur</span> or down to <span className="font-semibold text-gray-900">Little Andaman</span>. These properties offer minimalist but comfortable wooden structures focused entirely on jungle trekking routes, nesting sea turtle sanctuaries, and untouched coral reefs.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
                  Wild Untamed Archipelago
                </span>
              </div>

            </div>

            {/* Ferry Logistics Glass Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-cyan-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-cyan-900 font-bold">Inter-Island Transit Advisory:</strong> Reaching Havelock and Neil Island depends entirely on private catamaran cruise modules (Nautika/Makruzz) operating out of Port Blair. Always book your ferry schedules simultaneously with your hotel bookings, especially during the peak sailing months (October to April)!
                </p>
              </div>
            </div>

          </section>


          {/* Restaurants & Cafes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">

            {/* Coastal Culinary Background Tints */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/15 blur-[120px] rounded-full"></div>
            </div>

            {/* Section Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 text-teal-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🦞 Coastal Culinary Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
                Best Restaurants & Cafes in Andamans
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From exceptional catching-of-the-day beach barbeques to laid-back bohemian woodfired pizza decks.
              </p>
            </div>

            {/* Premium Bento Grid Arrangement */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Fresh Ocean Catch Landmarks (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🦀
                    </div>
                    <span className="text-xs font-bold bg-teal-100/60 text-teal-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Fresh Catch Culinary Elite
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                    Legendary Seafood Grills & Premium Coastal Kitchens
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Indulge in the finest marine delicacies across Havelock and Port Blair at iconic dining pillars like <span className="font-semibold text-gray-900">Full Moon Cafe</span>, <span className="font-semibold text-gray-900">Something Different</span>, and <span className="font-semibold text-gray-900">New Lighthouse Restaurant</span>. These venues are celebrated for sourcing directly from local fishermen, offering clay-oven roasted king prawns, red snappers served on fresh banana leaves, and aromatic, classic coconut-based crab curries.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Sustainably Sourced Catch-Of-The-Day Delicacies
                </div>
              </div>

              {/* Card 2: Bohemian Havelock Roasteries */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ☕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
                    Anju Coco Resto & Cozy Surf Cafes
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Unwind over rich specialty coffee and stacked custom breakfast platters at iconic landmarks like <span className="font-semibold text-gray-900">Anju Coco Resto</span> on Havelock. Known for its laid-back low seating loops, legendary grilled tuna steaks, and delicious banana pancakes.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
                  Surf Culture & Hearty Traveler Breakfasts
                </div>
              </div>

              {/* Card 3: Beachside Candlelit Dining */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🕯️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Fine Dining Beach Lounges
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Dine under starry night skies at upscale coastal open-air bistros. Sip custom tropical cocktails and enjoy curated global continental tasting menus right against the rhythmic, crashing shoreline waves.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Oceanfront Ambiance & Artisanal Cocktails
                </div>
              </div>

              {/* Card 4: Multi-Cuisine Island Terraces (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌴
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Sunset Viewpoints
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Neil Island Sunset Open-Decks
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Relax across top-rated open-air beach shacks near <span className="font-semibold text-gray-900">Laxmanpur & Bharatpur Beach</span>. These breezy terraces serve up delicious North Indian dishes, refreshing mocktails, and fresh indo-chinese stir-fries, making them perfect stops right after your afternoon snorkeling tours.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Golden Hour Decks & Multi-Cuisine Comfort
                </div>
              </div>

              {/* Card 5: Local Dhaba Style Curry Houses */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍛
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Local Bengali Eateries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Taste amazing local flavors at budget-friendly curry spots in Havelock's main villages. Feast on authentic, home-style <span className="font-semibold text-gray-900">Maach er Jhol</span> (traditional Bengali fish curry) accompanied by classic steaming jasmine rice blocks.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Authentic Local Fish-Curry Thalis
                </div>
              </div>

              {/* Card 6: Pure Vegetarian Island Havens */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥦
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Pure Veg Island Dining
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For family groups looking for specialized pure vegetarian options, several reliable kitchens across Havelock and Port Blair offer pristine, clean environments serving North and South Indian thalis completely free of cross-contamination.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Clean Vegetarian Comfort Circuits
                </div>
              </div>

            </div>

            {/* Culinary Logistics Advisory Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/10 via-cyan-500/5 to-transparent border border-teal-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-teal-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-teal-900 font-bold">Island Dining Tip:</strong> Most upscale cafes on Havelock and Neil Island wrap up dinner orders surprisingly early by 9:30 PM due to standard eco-island electricity conserving habits. Head over early to snag the absolute best outdoor table layouts right on the shoreline!
                </p>
              </div>
            </div>

          </section>
          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-300/10 to-blue-300/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🏝️ Island Planner
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Andaman
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Analyze daily cost structures for island hopping and water sports in this tropical paradise.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-cyan-400/60 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg font-bold border border-cyan-100 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      🛶
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Island Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for solo backpackers focused on hostels, local ferries, and beach relaxation.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1,500</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹500 – ₹900</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">⛴️ Ferry</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-cyan-600 tracking-tight">
                    ₹1,700 – ₹3,200 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-cyan-500 hover:border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-cyan-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg font-bold border border-cyan-100 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      🤿
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Reef Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for families wanting resort stays, scuba diving, and island-hopping cruises.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹7k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹3k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🤿 Diving</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-cyan-600 tracking-tight">
                    ₹6,500 – ₹14,000 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-blue-400/60 shadow-md hover:shadow-xl hover:shadow-blue-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg font-bold border border-blue-100 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Premium
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Tropical Luxury
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Crafted for private beach villas, yacht rentals, and high-end spa retreats.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹15k – ₹40k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹7k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚤 Yacht</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹5k – ₹10k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-blue-600 tracking-tight">
                    ₹23,000 – ₹57k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-cyan-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-cyan-800 font-black">Pro Tip:</strong> Ferry tickets to Havelock or Neil Island sell out weeks in advance! Book your inter-island transfers as soon as your flight dates are finalized to avoid last-minute stress.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Retail Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Shopping in Andamans
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From exquisite seashell crafts to sustainable island fashion, discover unique coastal souvenirs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🐚
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Coastal Craft
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Seashell Souvenirs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover intricately crafted seashell jewelry, wall hangings, and lamp shades made by local artisans. A true reminder of the island’s beauty.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Oceanic Keepsakes
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥥
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
                    Coconut Artifacts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore eco-friendly home decor and kitchenware made from locally sourced coconut shells—sustainable and authentically Andamanese.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
                  Sustainable Island Life
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    👕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Tropical Apparel
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Grab vibrant beachwear, sarongs, and cotton shirts designed for the humid tropical weather—perfect for your island adventure.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Island Beach Wear
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🪵
                    </div>
                    <span className="text-xs font-bold bg-blue-100/60 text-blue-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Island Timber
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
                    Padauk Wood Carvings
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Andaman's native <span className="font-semibold text-gray-900">Padauk wood</span> is known for its durability and rich color. Discover exquisite carvings, small furniture, and traditional handicrafts.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Authentic Forest Art
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌶️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Island Spices
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Take home aromatic island spices like cloves, cinnamon, and pepper, sourced directly from the spice plantations of the islands.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Aromatic Spice Roots
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-transparent border border-emerald-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-emerald-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-emerald-900 font-bold">Shopping Tip:</strong> Purchase your souvenirs from the Government Emporium (SAGARIKA) in Port Blair. It ensures quality, genuine products, and helps support local island artisan collectives!
                </p>
              </div>
            </div>
          </section>
          

        </div>
      </motion.div>
    </div>
  );
};

export default Andaman;
