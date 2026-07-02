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

{/* Best Time to Visit Section */}
<section className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

  {/* Advanced Radial Background Glows (Tropical Coastal Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌴 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Best Time to Visit Kerala
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect tropical getaway aligned with ideal beach windows and local backwater loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
          ☀️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Tropical Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Kerala features two magnificent travel cycles: the high winter rush from <span className="font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">October to March</span> when the climate is warm yet pleasantly crisp, and the therapeutic monsoon cycle from <span className="font-bold text-cyan-600 bg-cyan-50 px-1.5 py-0.5 rounded-md">June to September</span>.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During peak winter intervals, coastlines like Kovalam, the mist-filled valley loops of <span className="font-semibold text-gray-900">Munnar</span>, and the iconic houseboat trails of Alleppey burst with cultural boat races and active festivals.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
          <strong className="text-emerald-950">Pro Tip:</strong> Looking to unlock absolute premium Ayurveda deals and experience deep green, rain-washed forest landscapes at massive luxury discounts? Plan around late August or early September.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter / Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛱️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Winter (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The high tropical season. Incredible weather parameters for sand exploration, coastal cruise loops, and trekking across Munnar tea heights.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Golden Peak Vibe
        </span>
      </div>

      {/* Season 2: Monsoon / Ayurveda */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-cyan-700 transition-colors duration-200">
              Monsoon (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The revival season. Highly recommended for intense, certified Ayurvedic health remedies and capturing cascading forest stream trails.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-cyan-100/70 text-cyan-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Ayurveda Bloom
        </span>
      </div>

      {/* Season 3: Summer / Shoulder */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Summer (April – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Humid climate interval. Beach paths turn warm, but the hill stations remain highly cooling with deeply reduced resort premium tariffs.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Low Price Window
        </span>
      </div>

    </div>
  </div>

</section>

{/* Best Hotels Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">
  
  {/* Advanced Radial Background Glows (Coastal Luxury Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-teal-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏨 Accommodation Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Best Hotels in Kerala
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Handpicked stays curated perfectly for luxury seekers, backwater wanderers, and smart backpackers.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Luxury Resorts (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌟
          </div>
          <span className="text-xs font-bold bg-teal-100/60 text-teal-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
          Luxury Heritage & Beach Resorts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience ultra-premium coastal luxury at iconic world-class retreats like <span className="font-semibold text-gray-900">The Leela Ashtamudi</span> and <span className="font-semibold text-gray-900">Kumarakom Lake Resort</span>. Flawless options for premium leisure, complete with private infinity pools overlooking the lake, authentic wood-carved heritage villas, open-air dining networks, and intensive, holistic Ayurvedic wellness spas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Ultra-Luxury & Heritage Retreats
      </div>
    </div>

    {/* Card 2: Mid-Range Hotels */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌴
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Mid-Range Hideaways
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Highly comfortable, premium views at properties like <span className="font-semibold text-gray-900">Sterling Munnar</span> and <span className="font-semibold text-gray-900">Abad Whispering Palms</span>. These deliver upscale modern cooling/heating systems, deep plantation vistas, private balconies, and rich traditional buffet spreads at highly optimized prices—perfect for family groups.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Value & Vista Packed
      </div>
    </div>

    {/* Card 3: Budget Backpackers */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          💰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Social Hostels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Highly affordable backpacker hostels and vibrant, tropical workspaces nestled along the artistic, beachside lanes of <span className="font-semibold text-gray-900">Fort Kochi & Varkala Cliff</span>. Unmatched setups for remote creators looking to cut down expenses, surf, and enjoy cafe-centric networking loops.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Backpacker Centric
      </div>
    </div>

    {/* Card 4: Valley & Lagoon-Facing Hotels (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌊
          </div>
          <span className="text-xs font-bold bg-cyan-100/60 text-cyan-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Prime Location
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
          Lagoon & Backwater-Facing Hotels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Wake up straight to mist-covered water expanses and coconut groves. Premium boutique properties situated directly on the tranquil banks of <span className="font-semibold text-gray-900">Alleppey Backwaters & Punnamada Lake</span>. Secure these private floating decks to unlock instant access to peaceful country boat rows, high-end insect-insulation frameworks, and morning tea overlooking deep water drops.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Tropical Horizon Panoramas
      </div>
    </div>

    {/* Card 5: Heritage Boutique Cottages */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Boutique Spice Cottages
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Artistic, high-concept stone-and-teak cottages near the historic plantation town of <span className="font-semibold text-gray-900">Thekkady</span>. These offer private spice orchard charm, deeply personalized hospitality loops, and slow-paced quiet spaces far removed from the mainstream commercial grids.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Artistic Curations
      </div>
    </div>

    {/* Card 6: Luxury Houseboat Villas */}
    <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center shrink-0 border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🚤
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
            Exclusive Luxury Floating Cruise Villas
          </h3>
          <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
            Tailor-made for big island reunion groups and family structures. Independent floating cruises anchored around Vembanad Lake feature dedicated glass-walled air-conditioned lounge rooms, fully equipped modular kitchen architectures, multi-crew private service slots, and 100% water boundary privacy for a laid-back cruise.
          </p>
        </div>
      </div>
      <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
        Maximum Privacy
      </span>
    </div>

  </div>

  {/* Smart Booking Advisory Glass Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-transparent border border-teal-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-teal-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-teal-900 font-bold">Booking Window Tip:</strong> Planning a trip during the high-demand winter rush of late December or during Nehru Trophy Boat Race events? Make sure to lock down your premium houseboat bookings early to avoid heavily inflated season surges and ensure fully functional power backup setups!
      </p>
    </div>
  </div>

</section>


{/* Restaurants Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">
  
  {/* Dynamic Culinary Background Tints (Coastal Spice Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍽️ Culinary Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Best Restaurants & Cafes in Kerala
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Savor everything from aromatic backwater toddy shops to colonial heritage beachside cafes.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Seafood Specials (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🦀
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Must Visit
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Coastal Seafood & Karimeen Specials
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor the coast's freshest marine catch at globally acclaimed culinary landmarks like <span className="font-semibold text-gray-900">The Oceanos Restaurant</span> in Fort Kochi and <span className="font-semibold text-gray-900">Grand Pavilion</span> in Ernakulam. Do not leave the state without diving into fresh banana-leaf wrapped <span className="font-semibold text-gray-900">Karimeen Pollichathu</span> (Pearl Spot fish), spicy clay-pot fish curries, and crispy fiery prawns.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Fresh Catch & Legendary Seafood Hubs
      </div>
    </div>

    {/* Card 2: Cliff & Beachside Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏄‍♂️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Ocean-View Cliff Cafes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Unwind completely with direct rushing wave views across the vibrant edges of <span className="font-semibold text-gray-900">Varkala Cliff</span>. The absolute premier choice for fresh fruit smoothie bowls, authentic iced filter coffees, and memorable sunset-lit acoustic musical dinners.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Arabian Sea Sunset Sips
      </div>
    </div>

    {/* Card 3: Colonial Fine Dining */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Colonial Fine Dining
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Indulge in premium high-end environments at iconic elite boutique setups like <span className="font-semibold text-gray-900">Malabar House</span> and heritage bungalow structures, offering unparalleled vintage luxury alongside masterfully curated Anglo-Indian fusion platters.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Vintage Malabar Ambience
      </div>
    </div>

    {/* Card 4: Traditional Sadhya & Spice Delicacies (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌴
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Heritage Tastes
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
          Traditional Banana-Leaf Sadhya & Appam
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Embark on a deep heritage flavor journey with legacy coastal recipes. Make sure to try authentic coconut-milk laced lacey laced <span className="font-semibold text-gray-900">Appam with Veg/Chicken Stew</span>, multi-course vegetarian banana-leaf feast called <span className="font-semibold text-gray-900">Sadhya</span>, and intensely aromatic Malabar Parotta loops paired with rich spice-cooked beef or jackfruit roasts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Authentic Keraleeyam Roots
      </div>
    </div>

    {/* Card 5: Backwater Toddy Shops */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍶
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Backwater Shaap Food
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Warm up your tropical afternoons at authentic rustic waterside setups like the iconic <span className="font-semibold text-gray-900">Kuttanad Toddy Shops</span> for unmatched fiery-spicy red fish curries, boiled tapioca (<span className="font-semibold text-gray-900">Kappa</span>), and sweet, freshly tapped coconut palm nectar extracts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Lagoon-Side Native Spice Shacks
      </div>
    </div>

    {/* Card 6: Art Cafes of Fort Kochi */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Artisan & Heritage Cafes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Kerala packs highly diverse international palettes. Explore slow-brewed single origin coffees, fresh continental bakes, and vibrant art gallery walls at the iconic <span className="font-semibold text-gray-900">Kashi Art Cafe</span> or Pepper House across the creative cobblestone streets of <span className="font-semibold text-gray-900">Fort Kochi</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Bohemian Colonial Courtyards
      </div>
    </div>

  </div>

  {/* Foodie Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-rose-900 font-bold">Foodie Tip:</strong> Always make it a priority to head down to the local backwater "Shaaps" or cliffside cafes around 5:30 PM. Watching the tropical golden hour sweep over the coconut groves with a sizzling plate of Karimeen Pollichathu or a freshly brewed filter coffee is an irreplaceable coastal ritual!
      </p>
    </div>
  </div>

</section>

{/* Budget Breakdown Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">
  
  {/* Cyber-Atmospheric Background Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-300/10 to-cyan-300/10 blur-[140px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="text-center mb-16">
    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
      ⚡ Financial Planner
    </span>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
      Budget Breakdown for Kerala
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Analyze daily cost structures and pick the ideal travel configuration that matches your pace.
    </p>
  </div>

  {/* Premium Tier Matrix */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

    {/* Card 1: Budget Traveler */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-emerald-400/60 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
            💸
          </div>
          <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
            Eco Tier
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Budget Nomad
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Perfect for backpackers and solo creators looking to scale coastal grids and hostels efficiently.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹450 – ₹950</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹350 – ₹700</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚌 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹600</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-emerald-600 tracking-tight">
          ₹1,100 – ₹2,250 <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

    {/* Card 2: Mid Range (Featured Column) */}
    <div className="group bg-white border-2 border-cyan-500 hover:border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-cyan-500/5">
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
        Recommended
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg font-bold border border-cyan-100 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
            🌴
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-md font-bold">
            Balanced
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Mid-Range Explorer
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Ideal setup for couples and family units aiming for comfortable hotels and private canal boating.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,500 – ₹6,000</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹900 – ₹2,200</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹1,500 – ₹2,500</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-cyan-600 tracking-tight">
          ₹4,900 – ₹10,700 <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

    {/* Card 3: Luxury */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-purple-400/60 shadow-md hover:shadow-xl hover:shadow-purple-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg font-bold border border-purple-100 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
            👑
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-bold">
            Elite Premium
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Luxury Opulence
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Crafted for elite backwater cruises, premium lagoon resorts, and intensive Ayurvedic spa stays.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹12,000 – ₹40k+</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,200 – ₹6,000</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">✈️ Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹3,000 – ₹7,000</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-purple-600 tracking-tight">
          ₹17,200 – ₹53k+ <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

  </div>

  {/* Pro-Tip Floating Banner */}
  <div className="mt-14 text-center">
    <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-cyan-500/10 via-emerald-500/5 to-transparent border border-cyan-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-cyan-950 font-semibold text-sm md:text-[15px] leading-relaxed">
        <strong className="text-cyan-800 font-black">Smart Commute:</strong> Booking multi-destination intercity cabs directly through certified tourist unions or using Kerala's highly economical state water transport ferries is highly recommended to bypass expensive individual tourist traps!
      </p>
    </div>
  </div>

</section>

{/* Shopping Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-violet-500 selection:text-white">
  
  {/* Dynamic Retail Background Tints (Spices & Silk Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-violet-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-amber-50 border border-violet-100 text-violet-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🛍️ Retail Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950">
      Shopping in Kerala
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Explore historic colonial trade streets, organic plantation markets, and legacy handloom cooperatives.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Fort Kochi Antique Street (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-violet-300 shadow-lg hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-violet-50 text-xl flex items-center justify-center border border-violet-100/70 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🎡
          </div>
          <span className="text-xs font-bold bg-violet-100/60 text-violet-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Iconic Bazaars
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-violet-800 transition-colors duration-200">
          Jew Town Antique Shops & Flea Alleys
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Dive deep into ancient maritime commerce at the iconic <span className="font-semibold text-gray-900">Jew Town Bazaar</span> in Mattancherry. These lanes are perfect spots to scout for detailed colonial-era Portuguese furniture, authentic bronze cooking vessels (<span className="font-semibold text-gray-900">Urli</span>), vintage maps, hand-carved wooden elephant structures, and rare historical curio assets.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-violet-600 tracking-wider uppercase">
        Vibrant Cultural Bargains & Antiques
      </div>
    </div>

    {/* Card 2: Traditional Kerala Kasavu Handlooms */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧵
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Kasavu Sarees & Attire
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Upgrade your cultural wardrobe instantly with authentic white-and-gold hand-woven garments. Secure pure gold-bordered traditional <span className="font-semibold text-gray-900">Kasavu Sarees</span> and premium cotton <span className="font-semibold text-gray-900">Mundu</span> directly across native retail avenues.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Traditional Elegant Textiles
      </div>
    </div>

    {/* Card 3: Coconut Shell Artifacts & Crafts */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥥
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Coir & Eco Handicrafts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          The coast boasts a rich heritage of tangible eco-art. Discover polished coconut shell bowls, highly detailed house-decor straw mats, and sturdy woven coir strings straight from local backwater artisan setups.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Artisan Crafts & Sustainable Decor
      </div>
    </div>

    {/* Card 4: Hill-Station Spice Board Markets (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌱
          </div>
          <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Plantations
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          Munnar & Thekkady Exotic Spice Markets
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience a sensory retail journey inside the plantation slopes of <span className="font-semibold text-gray-900">Kumily & Munnar Town</span>. These authorized local bazaars offer freshly harvested green cardamom packs, organic black pepper strands, pure cloves, multi-layered cinnamon rolls, and premium grade nutmeg seeds.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Aromatic Spice Hubs
      </div>
    </div>

    {/* Card 5: Single Estate Teas & Filter Coffees */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍃
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          High-Grown Brew Souvenirs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Take home tactile memories ranging from premium crush-tear-curl (CTC) tea dusts, organic green teas from <span className="font-semibold text-gray-900">Kannan Devan Hills</span>, to strong dark-roasted Malabar Monsooned coffee packs.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Estate Leaf Blends & Aromas
      </div>
    </div>

    {/* Card 6: Pure Banana Chips & Cashews */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍌
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Snacks & Crunch Treats
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Navigate busy corner stores inside central hubs for freshly prepared, golden <span className="font-semibold text-gray-900">Coconut-Oil Fried Banana Chips</span>, sweet jaggery coated <span className="font-semibold text-gray-900">Sharkara Upperi</span>, and top-grade crunchy whole cashews.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Fresh Local Crunch Delights
      </div>
    </div>

  </div>

  {/* Smart Retail Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 via-amber-500/5 to-transparent border border-violet-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-violet-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-violet-900 font-bold">Shopping Tip:</strong> Friendly bargaining works wonderfully across local street flea setups in Jew Town! However, for pure authenticated spices and pure handloom Kasavu textiles, always prefer direct government-backed cooperatives and Spices Board of India stores to ensure genuine quality.
      </p>
    </div>
  </div>

</section>
{/* Safety Tips Section */}
<section className="relative max-w-6xl mx-auto md:px-1 py-16 selection:bg-rose-500 selection:text-white">
  
  {/* Dynamic Safeguard Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/15 blur-[130px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-blue-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🛡️ Travel Advisory
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Safety Tips in Kerala
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Proactive guidelines to keep your coastal cruises, hill explorations, and tropical stays secure and smooth.
    </p>
  </div>

  {/* Asymmetric Security Bento Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Monsoon & Backwater Safety (Featured Large Block) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🛶
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Critical Guide
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Backwater Currents & Houseboat Operations
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          While the backwaters appear serene, undercurrents can be tricky. Strictly avoid swimming in unmonitored canals or lakes. When booking houseboats in <span className="font-semibold text-rose-600">Alappuzha or Kumarakom</span>, always check for functional onboard life jackets and verify that the boat anchors by nightfall (6:00 PM) as per government safety mandates.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Waterway Navigation Security
      </div>
    </div>

    {/* Card 2: Coastal Waves & Strong Riptides */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌊
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Ocean Tides & Cliff Safety
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Beaches like <span className="font-semibold text-gray-900">Varkala and Kovalam</span> are prone to sudden high tides and strong riptides. Pay close attention to lifeguard flags, avoid night swimming, and exercise extreme caution near crumbling cliff edges during high winds.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Beach & Shoreline Awareness
      </div>
    </div>

    {/* Card 3: Western Ghats Driving Conditions */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🚗
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Munnar Fog & Hairpin Curves
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Ascending the Western Ghats to hill stations requires careful driving. Dense fog can reduce visibility to near-zero around <span className="font-semibold text-gray-900">Munnar and Wayanad</span> gaps. Keep fog lights functional, avoid overtaking on narrow switchbacks, and check brake health.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Mountain Road Precautions
      </div>
    </div>

    {/* Card 4: Wildlife & Forest Trekking Regulations (Featured Large Block) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🐘
          </div>
          <span className="text-xs font-bold bg-sky-100/60 text-sky-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Operator Audit
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-800 transition-colors duration-200">
          Forest Reserves & Wildlife Protocols
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          When exploring rich biological reserves like <span className="font-semibold text-gray-900">Periyar Tiger Reserve or Silent Valley</span>, always venture out with authorized eco-guides. Maintain a safe distance from wild elephants on forest highways, never feed wild animals, and strictly adhere to non-littering green laws.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Authorized Eco-Trekking Only
      </div>
    </div>

    {/* Card 5: Tropical Hydration & Heat */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☀️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Tropical Climate Prep
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Kerala boasts high tropical humidity year-round. Prevent swift dehydration or heat fatigue by carrying bottled mineral water, sipping on fresh tender coconut water, and applying broad-spectrum sunscreen when touring heritage monuments.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Humidity & Fluid Management
      </div>
    </div>

    {/* Card 6: Authenticity Check for Ayurvedic Centers */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌿
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Ayurveda Accreditation
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          To ensure genuine healthcare therapy, always choose wellness spas and massage clinics certified with the Kerala Tourism Department's official <span className="font-semibold text-gray-900">Green Leaf or Olive Leaf</span> ratings. This guarantees authentic herbal formulations and trained specialists.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Verified Medical Wellness
      </div>
    </div>

  </div>

  {/* Reassuring Advisory Footnote */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-blue-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-rose-900 font-bold">Confidence Note:</strong> Kerala is consistently ranked among the safest, most hospitable, and progressive destinations for solo, family, and international travelers. Keeping track of regional monsoon guidelines is all it takes to lock in a seamless tropical getaway!
      </p>
    </div>
  </div>

</section>

          

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Kerala Backwaters Gallery – Nature’s Tranquil Escape
            </h2>
            <div className="grid sm:grid-cols-2   lg:grid-cols-3 gap-4">
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
