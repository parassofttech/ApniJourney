import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Coffee,
  TreeDeciduous,
} from "lucide-react";

const Coorg = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-lime-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2Fcoord%20day%202_11zon.webp&w=1920&q=75"
          alt="Coorg Hills"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
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
            🌿 Coorg – The Scotland of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Nestled in the Western Ghats of Karnataka, Coorg is renowned for its
            lush **coffee plantations, misty hills, and scenic waterfalls**.
            A paradise for nature lovers and adventure seekers alike.
          </motion.p>

          {/* Introduction Section: Coorg */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

  {/* Advanced Radial Background Glows (Highland Mist & Coffee Estates Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-lime-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-lime-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>☕</span> Highland Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Coorg
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Scotland of India—a lush, mist-shrouded mountain paradise where aromatic coffee estates cascade down the rugged slopes of the Western Ghats.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">⛰️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Land of Mist, Coffee, and Warriors
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Coorg, officially known as Kodagu, is perched majestically on the eastern slopes of the Western Ghats in Karnataka. Renowned for its rolling green hills, dense teakwood forests, and continuous mist, it stands as India's premier coffee-producing heartland.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Beyond the scenery, it is the home of the proud, fiercely independent <span className="font-semibold">Kodava race</span>—distinguished by their unique martial traditions, exquisite local attire, and world-class hospitality that instantly makes you feel part of the clan.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">1,748m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Highest Peak (Tadiandamol)</p>
        </div>
        <div className="bg-lime-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-lime-600">35%</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">India's Coffee Share</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Coffee Plantation Trails */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🌱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Aromatic Estate Walks
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Lose yourself inside endless green grids. Wake up to the rich aroma of Arabica and Robusta beans, taking guided plantation walks under giant rosewood canopies tangled with black pepper vines.
        </p>
      </div>

      {/* Card 2: Namdroling Monastery (Golden Temple) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🏮
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Golden Pagodas of Bylakuppe
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience a serene Tibetan sanctuary. Located at the base of Coorg, the massive <span className="font-semibold">Namdroling Monastery</span> houses three spectacular, 40-foot gold-plated Buddha statues surrounded by intricate murals.
        </p>
      </div>

      {/* Card 3: Abbey & Abbey Falls Cascades */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🌊
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Roaring Abbey Falls
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand on a shaking hanging bridge to witness water crashing down from a height of 70 feet. Framed perfectly by private spice gardens, the falls offer an incredible, misty sensory rush.
        </p>
      </div>

      {/* Card 4: Dubare Elephant Camp */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-lime-300 shadow-md hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-lime-50 flex items-center justify-center text-xl font-bold text-lime-600 mb-5 group-hover:bg-lime-600 group-hover:text-white transition-all duration-300">
          🐘
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-lime-700 transition-colors duration-200">
          Dubare River Echoes
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Cross the Kaveri River to reach a historic eco-camp. Participate in grooming, scrubbing, and feeding gentle giants, followed by peaceful river rafting along the shallow rocky streams.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-lime-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Coorg is an unmatched highland getaway. It perfectly pairs the tranquil, slow lifestyle of historic coffee plantations and misty eco-trails with spicy, authentic Pandi Curry gastronomy, making it an absolute sanctuary for luxury unwinding.
      </p>
    </div>
  </div>

</section>

          

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Coorg
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdWucCysBIFTLhQDsLU8Qy_dfmbYmfH3OgQ&s",
                "https://karnatakatourism.org/_next/image/?url=https%3A%2F%2Fweb-cms.karnatakatourism.org%2Fwp-content%2Fuploads%2F2025%2F07%2F20-x-8-ft-Panel-Coorg-01-1-scaled-e1750312229824.jpg&w=3840&q=75",
                "https://upload.wikimedia.org/wikipedia/commons/1/17/Tadiandamol_Valley%2C_Western_Ghats.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ThhhFrJet9BnjDIR8ytnb9pYg134QILCvQ&s",
                "https://inikaresorts.com/wp-content/uploads/2026/02/About-coorg-madikeri-1.jpg",
                "https://coorgtourism.co.in/images/places-to-visit/headers/bangalore-to-coorg-tour-package-for-1-night-2-days-header-coorg-tourism.jpg.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Coorg"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

  {/* Advanced Radial Background Glows (Highland Mist & Coffee Plantation Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ⛰️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Best Time to Visit Coorg
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect Western Ghats escape aligned with crisp spice-scented winters, rolling clouds, and roaring waterfalls.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
          ☕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Coffee Valley Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Coorg opens its most magical and crisp weather loop from <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">October to March</span>. During this premium winter stretch, temperatures fluctuate beautifully between 15°C - 25°C, creating refreshing chilly mornings wrapped in thick blankets of white mist.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these comfortable months, exploring the golden temple inside <span className="font-semibold text-gray-900">Bylakuppe Tibetan Settlement</span>, trekking the sprawling ridges of Raja's Seat, or walking through private spice and coffee plantation loops feels completely heavenly.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
          <strong className="text-amber-950">Pro Tip:</strong> Traveling right after the monsoons in October or early November? You will catch the spectacular <strong className="text-amber-950">Abbey and Abbey-adjacent waterfalls</strong> at their absolute maximum speed and volume, right when the coffee valley smells freshest.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌲
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Crisp Coffee Winters (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The premium tourist window. Ideal for high-altitude trekking up Tadiandamol Peak, cozy homestay bonfires, bird watching, and plantation safari loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Misty Peaks
        </span>
      </div>

      {/* Season 2: Monsoon Cascades */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
              Heavy Monsoon Blends (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The region receives intense rainfall, reviving the forest canopy into an electric green setup. Outdoor trekking lines pause, but it is a dream loop for luxury resort staycations.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Lush Rains
        </span>
      </div>

      {/* Season 3: Summer Spice */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Mild Summer Respite (April – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The weather gets warmer but stays significantly cooler than the scorching plains of South India, peaking around 34°C. Perfect for a quiet weekend escape and catching white coffee blossoms.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Blossom Phase
        </span>
      </div>

    </div>
  </div>

</section>
          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://karnatakatourism.org/tour-item/coorg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold"
            >
              Visit Karnataka Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Coorg;
