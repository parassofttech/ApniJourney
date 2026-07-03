import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Landmark,
  Sun,
} from "lucide-react";

const Hampi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcShbY-ZirATQxlmkIMp69JCIzhtKtmbebykEayfve1c5fBv2nvzSwsIF9xtO8GA0Z-7YoQryY_M91oWZ4eQaDJg8sc&s=19"
          alt="Hampi"
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
            className="text-4xl font-extrabold text-center text-orange-700 mb-4"
          >
            🏛️ Hampi – The City of Ruins
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in Karnataka, Hampi is a UNESCO World Heritage Site
            famous for its ancient temples, stone structures, and the
            glorious history of the Vijayanagara Empire.
          </motion.p>

          {/* Introduction Section: Hampi */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Ruins at Sunset & Sacred River Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏛️</span> Heritage Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Hampi
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Lost Empire—an open-air museum of monumental granite ruins, where sacred 14th-century stone palaces rest inside an otherworldly landscape of giant balancing boulders.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🐒</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Golden Dawn of Vijayanagara
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Hampi, nestled along the banks of the sacred Tungabhadra River in Karnataka, was the legendary capital of the fabulously wealthy Vijayanagara Empire. In the 15th century, it stood as one of the largest and richest cosmopolitan cities in the world, attracting traders from Persia to Portugal.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Now a sprawling <span className="font-semibold">UNESCO World Heritage site</span>, Hampi spans over 4,100 hectares. It blends ancient architectural genius with a surreal, rugged topography, offering an absolute time-traveling escape for cultural explorers.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">1,600+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Surviving Monuments</p>
        </div>
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">14th Cent</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Imperial Origins</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Virupaksha Temple Architecture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Sacred Virupaksha Sanctum
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Gaze at an uninterrupted living lineage. The towering 160-foot gateway spire of <span className="font-semibold">Virupaksha Temple</span> has watched over Hampi since before the empire's rise, featuring stunning inverted pinhole camera mechanics inside.
        </p>
      </div>

      {/* Card 2: Iconic Stone Chariot */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🛞
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          The Legendary Stone Chariot
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Marvel at monolithic symmetry. Located inside the Vijaya Vittala Temple complex, this architectural masterpiece features stone wheels that once rotated, surrounded by massive mandapas housing legendary <span className="font-semibold">musical pillars</span>.
        </p>
      </div>

      {/* Card 3: Matanga Hill Sunset */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🦅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Matanga Hill Panoramic Dawn
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Scale the epic center. Hike up the ancient stone steps of <span className="font-semibold">Matanga Hill</span> to witness a breathtaking, 360-degree crimson sunset illuminating miles of ancient stone ruins and palm groves.
        </p>
      </div>

      {/* Card 4: Tungabhadra Coracle Crossings */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Tungabhadra Coracle Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Glide across historical currents. Step into a traditional circular bowl-boat (<span className="font-semibold">coracle</span>) to navigate the swirling waters, passing rock-cut cave shrines and exploring the relaxed, hippie side of Anegundi.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-teal-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Hampi is a highly cinematic tapestry of structural grace and natural chaos. It flawlessly weaves the heavy, carved geometry of imperial architecture into a prehistoric wilderness of balancing boulders, offering an absolute pinnacle experience for historical journeys.
      </p>
    </div>
  </div>

</section>



        

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Hampi
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqLNogk6r45sW1Q4-c8EFhS_tfQHOhrmOefnpL1LgHjspnYVMJLN5NMbJU0vyFUc5WBC-in0UAvsLASts_BrAPSUXgucFme78bblBlqDcK1ygJXJopAZU9yYKgpHK1dv1paKgeF=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ_8bmllUjuB6NCL66IryUEdSEmcT7UGDqpxo2fsWnaUVtCNYmwP9QgJm8tE10HmpLIoBOEaKUtXdXKkGtPxIK4FNQ&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSyjfz95JzqZmT0uAFJ02d8ON336A0jG606M1oArgH0c745W5jBtHGwH61kZ3myyF_N-WjFb25I9nxDGWbyTII8kI1V&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTGEofYxE6GxtOVniMJN-QWBFoJZOEwars8EnqLSoErHe1YMXsj76v3ThUXmaylZjK4hJIB3tKJkVkLr2pNZZv06xc&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSsZgsTcdkHumdkNdOZyVmyShLzMys2s49QW_8XvLQd-_xRBwBnULw43mZWIp8bU49jKCFoOJDEqqGOTCDwARr8ucc&s=19",
                "https://www.soil2soulexpeditions.com/admin/public/images/blog/image_file/123/The-Sacred-Landscape-of-Hampi.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Hampi"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>
          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Empire Ruins & Boulder Landscape Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏺 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Time to Visit Hampi
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect historical escape aligned with crisp boulder-climbing winters, active river cross loops, and dramatic heritage festivals.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
          🏛️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Frozen Empire Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Hampi displays its most brilliant, outdoor-friendly climate loop from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. Since Hampi is an open-air museum completely carved out of massive granite stone blocks, the cool winter temperatures averaging 15°C - 32°C make traversing the vast terrains incredibly comfortable.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this ideal window, tracking sunsets from <span className="font-semibold text-gray-900">Matanga Hill</span>, taking coracle boat rides across the Tungabhadra River, or exploring the architectural loops of the Stone Chariot at Vittala Temple feels effortlessly magical.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-teal-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
          <strong className="text-amber-950">Pro Tip:</strong> Want to witness the ancient capital come to life? Align your holiday loop with November to catch the grand <strong className="text-amber-950">Hampi Utsav</strong>, when the archaeological ruins are completely illuminated with multi-colored light vectors, accompanied by traditional mega-concerts.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🧗‍♂️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Crisp Golden Winters (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The grand peak tourist loop. Perfect weather for rigorous boulder trekking, bicycle trail exploration, café hopping across Sanapur, and taking endless architecture photographs.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Golden Peak
        </span>
      </div>

      {/* Season 2: Monsoon Greenery */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-teal-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors duration-200">
              Monsoon Riverscapes (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Intermittent rainfall washes the stone architecture and turns the surrounding banana plantations into hyper-vibrant green zones. Coracle loops might pause due to rising river flows.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Lush Horizons
        </span>
      </div>

      {/* Season 3: Summer Scorcher */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Dry Summer Heat (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The rocky landscape traps extreme heat, sending temperatures climbing past 40°C. Walking across non-shaded temple ruins triggers intense exhaustion; only recommended for solo budget loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Arid Phase
        </span>
      </div>

    </div>
  </div>

</section>

{/* Best Heritage Stays & Resorts Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">
  
  {/* Hampi Boulder Background Glows (Burnt Ochre & Stone Grey) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-slate-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏛️ The Empire's Legacy Stay Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Heritage Resorts & Riverside Stays in Hampi
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From luxury boulder-view retreats near the ancient ruins to bohemian river-side camps overlooking the Tungabhadra's flowing emerald waters.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Luxury Boulder Retreats (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🗿
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Boulder-Luxury Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Luxury Boulder-View Heritage Resorts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Stay in world-class properties that integrate the ancient Hampi landscape into their architecture. Wake up to sun-drenched views of surreal boulder formations, enjoy infinity pools that mirror the granite horizons, and experience refined Vijayanagara-inspired decor.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
        Infinity Pools Overlooking Boulder Horizons & Regal Design
      </div>
    </div>

    {/* Card 2: Riverside Bohemian Camps */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌊
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Tungabhadra Riverside Camps
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For the free-spirited traveler, these eco-friendly riverside camps offer a serene escape across the river. Stay in comfortable, aesthetic tents with hammocks, starlit decks, and direct access to sunset ferry points.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Starlit River Decks & Sunset Ferry Access
      </div>
    </div>

    {/* Card 3: Traditional Mango Grove Haveli */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌳
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Mango Grove Heritage Cottages
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Nestled within lush, historic mango groves, these cottages provide a quiet refuge from the midday sun. Featuring traditional mud-plastered walls, rustic wooden furniture, and private verandas that open directly into ancient orchards.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Rustic Orchard Verandas & Traditional Mud Architecture
      </div>
    </div>

    {/* Card 4: Modern Wellness Huts (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🧘
          </div>
          <span className="text-xs font-bold bg-slate-100/60 text-slate-950 px-3 py-1 rounded-full uppercase tracking-wider">
            History & Wellness
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Zen Wellness Retreats Near Temples
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience Hampi's spiritual side at wellness retreats offering early morning temple yoga, Ayurvedic massages using local herbs, and silent meditation gardens situated among the remnants of the Vijayanagara Empire.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Temple-View Yoga Decks & Ayurvedic Herbal Spas
      </div>
    </div>

    {/* Card 5: Smart Transit Family Villas */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Smart Group Family Villas
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Designed for families and large groups, these expansive villas offer private courtyards, bicycle rental stations for quick access to temple sites, and kitchenettes for those long, immersive weekend adventures.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Bicycle Rental Hubs & Private Heritage Courtyards
      </div>
    </div>

  </div>
</section>

{/* Restaurants & Culinary Experiences Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">
  
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-950/5 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍛 Flavors of the Empire
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Dining & Cultural Food Experiences
    </h2>
    <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto font-medium">
      From bohemian hippie-culture cafés serving Mediterranean fusion to traditional South Indian temple-style meals prepared with love.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Sunset River Cafes */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌅
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Bohemian Riverside
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Bohemian Sunset Cafes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Enjoy world-renowned fusion cuisine—from Shakshuka to handmade pasta—in laid-back riverside cafes. These spaces are famous for their floor-seating arrangements, local folk music, and vibrant sunset views over the Tungabhadra.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
        Mediterranean Fusion & Riverside Floor-Seating
      </div>
    </div>

    {/* Card 2: Traditional Temple Meals */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍃
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Traditional Temple Thali Houses
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor authentic Karnataka-style vegetarian meals served on banana leaves. These local eateries focus on seasonal produce, fresh coconut chutneys, and traditional delicacies like Bisi Bele Bath and Akki Roti.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Authentic Banana Leaf Thalis & Bisi Bele Bath
      </div>
    </div>

    {/* Card 3: Archaeological Heritage Grills */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🔥
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Archaeological Heritage Grills
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Fine-dining restaurants set in restored heritage buildings. Focus is on royal Indian cuisine using ancient, forgotten local grain recipes and slow-cooked meat preparations that echo the grandeur of the old empire.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Royal Forgotten Grain Recipes & Slow-Cooked Delicacies
      </div>
    </div>

    {/* Card 4: Local Bazaar Bites (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🥟
          </div>
          <span className="text-xs font-bold bg-teal-100/60 text-teal-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Local Bazaar Vibes
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
          Bazaar Street-Food & Spice Markets
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Explore the Hampi bazaar for quick, flavorful street bites. Grab fresh *Bonda Soup*, spicy *Mirchi Bajji*, and local fruit juices while walking through the stone-carved heritage markets that still bustle today.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Hot Bonda Soup & Spicy Mirchi Bajji Street Bites
      </div>
    </div>

    {/* Card 5: Artisan Bakery Corners */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍪
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Artisan Bakery Corners
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Finish your Hampi tour at cozy bakeries offering fresh sourdough loaves, banana-walnut breads, and local honey-infused treats perfect for an afternoon fuel-up.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Fresh Sourdough Loaves & Local Honey-Infused Treats
      </div>
    </div>

  </div>

  {/* Travel Guide Tip Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/10 via-teal-600/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-amber-900 font-bold">Hampi Exploration Tip:</strong> Hampi is a vast, open-air archaeological site. To truly experience it without exhaustion, rent a bicycle or a moped for two days—one day for the temple complexes on the Hampi side and another for the laid-back, scenic hills and fields on the Anegundi side!
      </p>
    </div>
  </div>

</section>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://karnatakatourism.org/tour-item/hampi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition font-semibold"
            >
              Visit Karnataka Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hampi;
