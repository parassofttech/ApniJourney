// src/components/destinations/Chhattisgarh.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mountain, Trees, Landmark, Sun } from "lucide-react";

const Chhattisgarh = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 min-h-screen py-16 px-6">
      <div className="w-full  mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-emerald-800 mb-4">
            🌿 Explore Chhattisgarh
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the hidden gem of India — a land of majestic waterfalls,
            ancient temples, dense forests, and vibrant tribal culture.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl shadow-lg mb-12"
        >
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/chitrakote-water-falls-jagdalpur-chhattisgarh-1-attr-hero?qlt=82&ts=1727011277081"
            alt="Chitrakote Waterfalls, Chhattisgarh"
            className="w-full h-[480px] object-cover"
          />
        </motion.div>

        {/* Introduction Section: Chhattisgarh */}
        <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

          {/* Advanced Radial Background Glows (Wilderness & Heritage Theme) */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
          </div>

          {/* Header Title Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <span>🪵</span> State Spotlight
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
              Discover Chhattisgarh
            </h2>
            <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              The undiscovered heart of India, cradling magnificent horse-shoe waterfalls, ancient tribal kingdoms, and over 40% dense forest cover.
            </p>
          </div>

          {/* Main Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Premium Introduction (Glass Card) */}
            <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
              <div className="text-4xl mb-4">🏹</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                India's Raw Eco-Cultural Frontier
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                Chhattisgarh is a land of incredible geographical mysteries and deep spiritual roots. Cloaked in sprawling canopies of Sal and Teak forests, this state is a vibrant treasure house of ancient, untouched tribal traditions that have outlived centuries.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15.5px]">
                From witnessing the sheer, roaring power of India's widest waterfall to exploring beautifully preserved 11th-century brick temples, it is an offbeat paradise designed purely for slow travel and conscious explorers.
              </p>

              {/* Quick Stats Banner inside Left Card */}
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                <div className="bg-amber-50/50 p-3 rounded-2xl">
                  <p className="text-2xl font-black text-amber-600">41%+</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Forest Cover</p>
                </div>
                <div className="bg-emerald-50/50 p-3 rounded-2xl">
                  <p className="text-2xl font-black text-emerald-600">300ft</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Chitrakote Width</p>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Feature Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Card 1: Chitrakote Waterfalls */}
              <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  🌊
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                  The Niagara of India
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  Behold the massive majesty of <span className="font-semibold">Chitrakote Falls</span> in Bastar. Sourced by the Indravati River, this grand horseshoe waterfall drops fiercely from a height of 90 feet, expanding up to 300 feet wide during monsoons.
                </p>
              </div>

              {/* Card 2: Ancient Bastar Tribal Culture */}
              <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  🎭
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                  Bastar Handicrafts & Lore
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  Dive deep into indigenous art. Witness master craftsmen creating intricate tribal structures out of bell-metal (<span className="font-semibold">Dhokra art</span>), wrought iron, and terracotta, passed down over generations.
                </p>
              </div>

              {/* Card 3: Bhoramdeo Temple (Khajuraho of Chhattisgarh) */}
              <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  🛕
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                  Erotic Ruins of Bhoramdeo
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  Explore architectural poetry. Tucked inside the Maikal hills, this 11th-century temple dedicated to Lord Shiva features breathtakingly carved stone structures resembling the legendary Nagara style of Khajuraho.
                </p>
              </div>

              {/* Card 4: Kanger Valley & Subterranean Caves */}
              <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  🦇
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                  Mystical Kutumsar Caves
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  Step into a completely hidden subterranean world. Journey into <span className="font-semibold">Kanger Valley National Park</span> to explore massive, pitch-dark underground limestone caves loaded with ancient stalactites and stalagmites.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Premium Sticky Note */}
          <div className="mt-12 bg-gradient-to-r from-amber-700 via-orange-700 to-emerald-800 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
            <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
            <div className="relative z-10 max-w-3xl">
              <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
              <p className="text-amber-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                In short, Chhattisgarh is India's best-kept eco-tourism secret. Completely unmarred by commercial tourist crowds, it offers raw wilderness trails, spectacular tribal festivals like the 75-day Bastar Dussehra, and unmatched peaceful isolation.
              </p>
            </div>
          </div>

        </section>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">
              🏞️ The Heart of Incredible India
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chhattisgarh is one of India’s most underrated travel destinations.
              Known for its pristine natural beauty, it offers a blend of
              spectacular waterfalls like <b>Chitrakote</b> (India’s Niagara),
              <b>Tirathgarh</b>, and dense forests of <b>Kanger Valley</b>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The region is deeply rooted in <b>tribal traditions</b> — with
              colorful festivals like <b>Bastar Dussehra</b> celebrated with
              unmatched energy. You can also explore <b>ancient temples</b>,
              mysterious caves, and local crafts that define its heritage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From <b>jungle safaris</b> to <b>heritage walks</b>, and from
              <b>organic food</b> to <b>tribal art</b> — Chhattisgarh invites you
              to experience the raw, untouched side of India.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <img
              src="https://media2.thrillophilia.com/images/photos/000/103/317/original/1479391377_chhattisgarh-705.jpeg?w=243&h=150&dpr=1.5"
              alt="Tirathgarh Waterfalls"
              className="rounded-xl shadow-md h-56 w-full object-cover"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNEnQh1oqzvkXCNBW08FlABR9PWvAJDhNgQ&s"
              alt="Bastar Dussehra Festival"
              className="rounded-xl shadow-md h-56 w-full object-cover"
            />
            <img
              src="https://clubmahindra.gumlet.io/blog/media/section_images/chhattisga-fa45fa3144fcf3b.jpg?w=376&dpr=2.6"
              alt="Kanger Valley National Park"
              className="rounded-xl shadow-md h-56 w-full object-cover"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhexrwuPsnMqCOA_ndyOGQabEj-hVhmDjteQ&s"
              alt="Ancient Temple in Chhattisgarh"
              className="rounded-xl shadow-md h-56 w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Highlights Section */}
        {/* Best Time to Visit */}
        <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

          {/* Advanced Radial Background Glows (Wild Wilderness & Ancient Heritage Theme) */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
          </div>

          {/* Header Title Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              🍂 Weather & Planning
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
              Best Time to Visit Chhattisgarh
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
              Plan your perfect wilderness escape aligned with massive roaring waterfalls, pleasant winter winds, and vibrant tribal loops.
            </p>
          </div>

          {/* Main Interactive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
            <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
                  🐅
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  The Heartland Windows
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Chhattisgarh shines at its absolute best from <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">October to March</span>. During this refreshing post-monsoon and winter cycle, temperatures hover gracefully between 12°C - 28°C, paving the way for comfortable wildlife safaris and ancient temple explorations.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  During this ideal timeline, iconic hubs like the sprawling <span className="font-semibold text-gray-900">Bastar tribal circuits</span>, Barnawapara Wildlife Sanctuary, and the historical Sirpur heritage loops operate at full swing.
                </p>
              </div>

              {/* Pro Tip Alert Section */}
              <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
                <span className="text-lg mt-0.5">💡</span>
                <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
                  <strong className="text-sky-950">Pro Tip:</strong> Eager to catch the iconic Bastar Dussehra—the longest festival loops in the world lasting 75 days? Plan your travel window strictly around late September or October to witness this unique tribal spectacle.
                </p>
              </div>
            </div>

            {/* Right Side: Seasonal Breakdown Matrix */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">

              {/* Season 1: Winter Peak */}
              <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex gap-4 items-start sm:items-center">
                  <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    🏹
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
                      Winter Wilderness (October – March)
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 max-w-md">
                      The premium travel season. Absolute goldmine for exploring Mainpat (the Shimla of Chhattisgarh), tracking wildlife, camping under clear skies, and visiting historic caves.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
                  Heritage Peak
                </span>
              </div>

              {/* Season 2: Monsoon Roar */}
              <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex gap-4 items-start sm:items-center">
                  <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    🌊
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
                      Monsoon Magic (July – September)
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 max-w-md">
                      Heavy central rainfall turns the landscape dramatically emerald. This is the prime phase to see the majestic Chitrakote and Tirathgarh waterfalls roaring at maximum width.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
                  Waterfall Glory
                </span>
              </div>

              {/* Season 3: Summer Slump */}
              <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex gap-4 items-start sm:items-center">
                  <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    ☀️
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
                      Summer Heat (April – June)
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 max-w-md">
                      Intense sun vectors pushing past 42°C. Sightseeing becomes restricted to early mornings, but it serves as an excellent time for tracking tigers near drying waterbeds.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
                  Dry Safaris
                </span>
              </div>

            </div>
          </div>

        </section>
        {/* Best Hotels & Resorts Section */}
        <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

          {/* Chhattisgarh Forest Background Glows (Emerald & Earthy Clay Tints) */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full"></div>
          </div>

          {/* Header Title Section */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-orange-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              🌿 Forest & Tribal Stay Guide
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
              Best Hotels & Resorts in Chhattisgarh
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
              From luxury wildlife eco-retreats near dense sanctuaries to premium stays in the heart of Raipur.
            </p>
          </div>

          {/* Advanced Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

            {/* Card 1: Luxury Eco-Wildlife Retreats (Featured - Larger width) */}
            <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-600/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 shadow-sm">
                    🐅
                  </div>
                  <span className="text-xs font-bold bg-orange-100/60 text-orange-900 px-3 py-1 rounded-full uppercase tracking-wider">
                    Wildlife Luxury Tier
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                  Eco-Retreats near Achanakmar & Wildlife Sanctuaries
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Immerse yourself in nature at premium eco-resorts located near the dense <span className="font-semibold text-gray-900">Achanakmar Tiger Reserve</span>. These properties offer luxury cottages designed with sustainable materials, private porches overlooking the forest canopy, wildlife safari arrangements, and guided forest treks that capture the raw beauty of the central Indian wilderness.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-emerald-700 tracking-wider uppercase">
                Jungle Safari Loops & Sustainable Forest Stays
              </div>
            </div>

            {/* Card 2: Modern Premium Business Hotels */}
            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🏙️
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                  Raipur Premium Business Hubs
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  For professional travelers and tourists, Raipur offers world-class luxury at hotels like <span className="font-semibold text-gray-900">Sayaji</span> or <span className="font-semibold text-gray-900">Taj</span>. These central city hubs feature premium rooftop pools, high-end fine dining, and excellent connectivity to the major state transit nodes.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                Central City Access & Rooftop Pools
              </div>
            </div>

            {/* Card 3: Bastar Heritage Culture Stays */}
            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🏺
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                  Bastar Tribal Art Stays
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Discover unique heritage-inspired stays near Jagdalpur. These boutique spots often showcase indigenous <span className="font-semibold text-gray-900">Dokra metal art</span> and tribal aesthetics, giving you an authentic window into the incredible cultural richness of the local indigenous communities.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                Indigenous Culture & Bastar Art Vistas
              </div>
            </div>

            {/* Card 4: Waterfall View Resort Havens (Featured - Larger width) */}
            <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🌊
                  </div>
                  <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                    Scenic Nature Resorts
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                  Chitrakoot & Waterfall Perimeter Retreats
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Stay close to the 'Niagara of India'—the <span className="font-semibold text-gray-900">Chitrakoot Falls</span>. Resorts in this perimeter provide serene, mist-filled views and peaceful nature trails, perfect for travelers wanting to disconnect and simply listen to the sound of flowing water and birdsong.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                Frontline Waterfall Views & Mist-Filled Mornings
              </div>
            </div>

            {/* Card 5: Boutique Homestays & Hostels */}
            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🏡
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                  Artsy Boutique Homestays
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Ideal for budget travelers and young professionals, Chhattisgarh's growing network of artistic homestays in Bilaspur and Raipur offers warm local hospitality, kitchen access, and curated local tour experiences.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                Warm Local Hospitality & Curated Tours
              </div>
            </div>

            {/* Card 6: Hilltop Plateau Retreats */}
            <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  ⛰️
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Mainpat Hill Station Outposts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
                    Retreat to the cooler altitudes of <span className="font-semibold text-gray-900">Mainpat</span>, known as the 'Mini Tibet of Chhattisgarh'. Secluded resorts here offer breezy plateaus, Tibetan cultural experiences, and clear blue mountain skies, far from the summer heat of the plains.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-950 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
                Breezy Plateau Outposts
              </span>
            </div>

          </div>
        </section>


        {/* Restaurants & Cafes Section */}
        <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-600 selection:text-white">

          {/* Culinary Background Tints */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-900/5 blur-[120px] rounded-full"></div>
          </div>

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-emerald-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              🍛 Authentic Flavors Guide
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
              Best Restaurants & Cafes in Chhattisgarh
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
              From traditional tribal delicacies like Chilla to modern dining in Raipur’s urban culinary scene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

            {/* Card 1: Authentic Tribal Cuisine (Featured Large Layout) */}
            <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🌶️
                  </div>
                  <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                    Tribal Culinary Heritage
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                  Traditional Chhattisgarh Thali & Local Delicacies
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Dive into the heart of local culture with authentic dishes like <span className="font-semibold text-gray-900">Chilla</span> (rice flour pancakes), <span className="font-semibold text-gray-900">Fara</span> (steamed rice dumplings), and <span className="font-semibold text-gray-900">Muthia</span>. Various local heritage kitchens across Raipur and Bilaspur specialize in these nutritious, fiber-rich, and comforting tribal foods that are a staple of the region's culinary identity.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
                Authentic Chilla & Steamed Fara Delicacies
              </div>
            </div>

            {/* Card 2: Modern Urban Fine Dining */}
            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🍷
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                  Raipur Urban Bistros
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Explore Raipur’s bustling urban food scene. Upscale restaurants offer high-quality multi-cuisine menus, craft mocktails, and polished service, providing a perfect contrast to the rustic wilderness exploring planned for the rest of your trip.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                Modern Urban Fusion & Craft Beverages
              </div>
            </div>

            {/* Card 3: Nature-View Garden Cafes */}
            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🌳
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                  Greenery & Viewpoint Cafes
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Unwind in charming garden cafes located near scenic lake points or forest fringes. Enjoy fresh coffee, hot light snacks, and relaxed acoustic tunes in these quiet nature spots that perfectly capture the slower, peaceful pace of state life.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                Peaceful Garden & Nature Spots
              </div>
            </div>

            {/* Card 4: Heritage Authentic Kitchens (Featured Large Layout) */}
            <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🥣
                  </div>
                  <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
                    Heritage Dining
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                  Authentic Heritage & Family-Style Kitchens
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  For families and groups searching for home-style cooking, several heritage-focused kitchen chains serve high-quality regional plates. These clean, highly-rated spots maintain a traditional touch, serving fresh, wholesome, and nutritious meals that feel exactly like home.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                Wholesome Home-Style Regional Thalis
              </div>
            </div>

            {/* Card 5: Modern Specialty Espresso Bars */}
            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  ☕
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                  Artisanal Espresso Roasteries
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Discover minimalist, modern specialty coffee bars popping up across Raipur’s premium neighborhoods. These spots provide excellent single-origin roasts, cold brews, and fresh bakery items perfect for a casual morning work session.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                Single-Origin Roasts & Modern Work Spaces
              </div>
            </div>

            {/* Card 6: Pure Vegetarian Heritage Spots */}
            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🥬
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                  Clean Veg Heritage Circuits
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  For family-friendly travels, specialized pure veg kitchens in Raipur and Bilaspur serve everything from piping hot regional breakfasts to comprehensive, high-quality, and clean multi-cuisine buffet spreads.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                Pristine Family-Friendly Vegetarian Layouts
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600/10 via-emerald-600/5 to-transparent border border-orange-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
              <span className="text-xl shrink-0">💡</span>
              <p className="text-orange-950 font-medium text-sm md:text-base leading-relaxed">
                <strong className="text-orange-900 font-bold">Culinary Tip:</strong> When visiting the rural Bastar or forest regions, always prioritize local heritage kitchens or resort-in-house dining! Tribal food is best enjoyed fresh, so don't hesitate to ask your hotel concierge for the day's special local 'Bastar-special' tribal meal recommendations.
              </p>
            </div>
          </div>

        </section>

        {/* Budget Breakdown Section */}
        <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

          {/* Cyber-Atmospheric Background Glows */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-300/10 to-teal-300/10 blur-[140px] rounded-full"></div>
          </div>

          {/* Header Block */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
              🌿 Nature's Core
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Budget Breakdown for Chhattisgarh
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
              Explore the unexplored wilderness, tribal heritage, and roaring waterfalls of the heart of India.
            </p>
          </div>

          {/* Premium Tier Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Card 1: Budget Traveler */}
            <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-emerald-400/60 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    🎒
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                    Eco Tier
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                  Wilderness Hiker
                </h3>
                <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                  Ideal for backpackers and nature enthusiasts exploring forest reserves and remote tribal areas.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹500 – ₹1,000</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹700</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚌 Local</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹200 – ₹400</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                <div className="text-2xl font-black text-emerald-600 tracking-tight">
                  ₹1,000 – ₹2,100 <span className="text-xs font-bold text-gray-400">/ day</span>
                </div>
              </div>
            </div>

            {/* Card 2: Mid Range */}
            <div className="group bg-white border-2 border-emerald-500 hover:border-emerald-400 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-emerald-500/5">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                Recommended
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    🗺️
                  </div>
                  <span className="text-[10px] tracking-widest uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-bold">
                    Balanced
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                  Explorer Route
                </h3>
                <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                  Best for families and small groups visiting Chitrakote falls, temple circuits, and forest resorts.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹5k</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Cab</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                <div className="text-2xl font-black text-emerald-600 tracking-tight">
                  ₹4,000 – ₹9k <span className="text-xs font-bold text-gray-400">/ day</span>
                </div>
              </div>
            </div>

            {/* Card 3: Luxury */}
            <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-teal-400/60 shadow-md hover:shadow-xl hover:shadow-teal-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-lg font-bold border border-teal-100 shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    ✨
                  </div>
                  <span className="text-[10px] tracking-widest uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md font-bold">
                    Elite Luxury
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                  Forest Sanctuary
                </h3>
                <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                  Premium stays at wildlife lodges, heritage palaces, and private guided expeditions.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹8k – ₹20k+</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                    <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                <div className="text-2xl font-black text-teal-600 tracking-tight">
                  ₹12k – ₹28k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
              <span className="text-xl shrink-0">💡</span>
              <p className="text-emerald-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                <strong className="text-emerald-800 font-black">Pro Tip:</strong> Visit during the post-monsoon months (September to November) to see the Chitrakote Falls in their full, thundering glory. It’s an otherworldly spectacle.
              </p>
            </div>
          </div>
        </section>

        {/* Shopping Section */}
        <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
          </div>

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              🛍️ Tribal Artisans
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
              Shopping in Chhattisgarh
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
              Discover age-old tribal traditions through exquisite Bell Metal art, Terracotta, and organic forest produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🔔
                  </div>
                  <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                    Dhokra Art
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                  Bell Metal (Dhokra)
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Chhattisgarh is famous for <span className="font-semibold text-gray-900">Dhokra art</span>, a non-ferrous metal casting using the lost-wax technique. These distinct tribal artifacts are timeless collectibles.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                Ancient Tribal Craft
              </div>
            </div>

            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🏺
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                  Terracotta Pottery
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Hand-modeled terracotta crafts, including traditional tribal figurines, lamps, and home decor, sourced from skilled village artisans.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
                Earthy Tribal Sculptures
              </div>
            </div>

            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🧵
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                  Kosa Silk
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Explore the rich, natural <span className="font-semibold text-gray-900">Kosa silk</span> sarees and stoles known for their unique texture, elegance, and durability.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                Premium Tribal Silk
              </div>
            </div>

            <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🎋
                  </div>
                  <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
                    Bamboo Craft
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
                  Bastar Bamboo Art
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Bastar’s bamboo handicraft is exquisite—from intricate home decor items to functional kitchenware, these items are a testament to the tribal mastery over natural fibers.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                Organic Tribal Fiber
              </div>
            </div>

            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  🍯
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                  Forest Produce
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                  Take home organic wild honey, Mahua based products, and other unique tribal forest treasures that are sustainable and natural.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                Pure Tribal Harvest
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
              <span className="text-xl shrink-0">💡</span>
              <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                <strong className="text-amber-900 font-bold">Shopping Tip:</strong> Visit the local Haat (weekly markets) in Bastar or Kanker for the most authentic experience. You will find items directly from the artisans at incredible value compared to city showrooms.
              </p>
            </div>
          </div>
        </section>


      </div>
    </section>
  );
};

export default Chhattisgarh;
