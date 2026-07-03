// src/components/destinations/Chhattisgarh.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mountain, Trees, Landmark, Sun } from "lucide-react";

const Chhattisgarh = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-16 bg-white/80 rounded-2xl shadow-md p-8 backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
            ✨ Highlights of Chhattisgarh
          </h3>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-emerald-100 rounded-xl hover:shadow-lg transition">
              <Mountain className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h4 className="font-semibold">Chitrakote Falls</h4>
              <p className="text-sm text-gray-600">
                India’s Niagara – breathtaking in monsoon.
              </p>
            </div>

            <div className="p-6 bg-emerald-100 rounded-xl hover:shadow-lg transition">
              <Trees className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h4 className="font-semibold">Kanger Valley</h4>
              <p className="text-sm text-gray-600">
                Home to caves, wildlife, and dense forests.
              </p>
            </div>

            <div className="p-6 bg-emerald-100 rounded-xl hover:shadow-lg transition">
              <Landmark className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h4 className="font-semibold">Bastar Dussehra</h4>
              <p className="text-sm text-gray-600">
                A 75-day grand tribal festival unique to India.
              </p>
            </div>

            <div className="p-6 bg-emerald-100 rounded-xl hover:shadow-lg transition">
              <Sun className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h4 className="font-semibold">Rich Culture</h4>
              <p className="text-sm text-gray-600">
                Experience ancient crafts, dance, and cuisine.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chhattisgarh;
