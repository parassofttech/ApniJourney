import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Info,
  Camera,
  ExternalLink,
  Sun,
  Tent,
  Flag,
} from "lucide-react";

const Jaisalmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTLYjL1FCbJO03mW5_7gLLKcUWh2wq1LED2MQOeCgZ0YuJWlqOZPRWUWN5p3yUai4QuycniT1XLTgd3UGhaR9LILk&s=19"
          alt="Jaisalmer Fort"
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
            className="text-4xl font-extrabold text-center text-yellow-700 mb-4"
          >
            🏜️ Jaisalmer – The Golden City of Rajasthan
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in the heart of the **Thar Desert**, Jaisalmer is known for
            its golden sandstone architecture, majestic forts, desert safaris,
            and vibrant Rajasthani culture. It offers a magical blend of
            **heritage, adventure, and royal charm**.
          </motion.p>

          {/* Introduction Section: Jaisalmer */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Golden Desert & Warm Sunset Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏜️</span> Heritage Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Jaisalmer
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Golden City—a breathtaking desert citadel carved entirely out of yellow sandstone, rising like a majestic mirage from the heart of the Thar.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏰</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Living Golden Citadel
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Jaisalmer, standing guard over the vast Thar Desert of Rajasthan, is a stunning masterclass in medieval architecture. Founded in 1156 AD by Rawal Jaisal, the city gets its glowing iconic hue from the unique yellow sandstone used across every fort wall, haveli, and home.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Unlike most historical monuments, Jaisalmer features a rare <span className="font-semibold">living fort</span>, where a quarter of the old city's population still resides inside its massive stone bastions, creating an incredibly authentic link to antiquity.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">860+ Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Fort History</p>
        </div>
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">1/4th</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Population inside Fort</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Jaisalmer Fort (Sonar Qila) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🔱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Sonar Qila (Golden Fort)
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore a true architectural crown. The UNESCO-listed <span className="font-semibold">Jaisalmer Fort</span> features 99 massive bastions that shimmer a spectacular honey-gold at sunset, packing vibrant local shops, ancient palaces, and Jain temples inside.
        </p>
      </div>

      {/* Card 2: Intricate Patwon Ki Haveli */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Patwon Ki Haveli Filigree
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Marvel at stone lace. This cluster of five exquisite 19th-century mansions features jaw-droppingly intricate balconies, delicate stone-carved lattices, and gold-hued corridors built by wealthy brocade merchants.
        </p>
      </div>

      {/* Card 3: Sam Sand Dunes & Desert Camping */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🐪
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Sam Sand Dunes Safari
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Escape into the rolling sands. Head out to the sweeping dunes of <span className="font-semibold">Sam or Khuri</span> for an authentic camel trek at dusk, followed by traditional Rajasthani folk dances, starlit dining, and premium desert glamping.
        </p>
      </div>

      {/* Card 4: Gadisar Lake Serenity */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Gadisar Lake Gateway
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Unwind by the historic reservoir. Once the sole water source for the kingdom, this scenic lake is framed by elegant sandstone ghats, floating shrines, and the legendary, highly decorative <span className="font-semibold">Tilon Ki Pol</span> archway.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-stone-900 to-rose-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Jaisalmer is a mesmerizing medieval romance. It effortlessly pairs the raw, rugged vastness of Thar desert expeditions with the unmatched architectural refinement of sandstone fortresses, making it an absolute bucket-list experience for luxury and heritage travelers alike.
      </p>
    </div>
  </div>

</section>

          

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Discover Jaisalmer
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRg02VhWgADkftNaMdJHD31iV4w6B75lwW40bzm1qdZKtlvBSfztNLNYOFgnLTW4yvPaK5BW_QoQY0_Y0eLyqTctWU&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTLYjL1FCbJO03mW5_7gLLKcUWh2wq1LED2MQOeCgZ0YuJWlqOZPRWUWN5p3yUai4QuycniT1XLTgd3UGhaR9LILk&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTmo8pzGSoNT1wj2xJ0-76LMWbjzoesl1eIw2ZUOB4dl4qUtAI6bo46FN91E4HoGfMDUuPbEDVqgkS96TBe0Uu3kPY&s=19",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/37/47/83/bagh.jpg?w=1200&h=700&s=1",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR_BCc6KsherRZHF1n7lECvn9r7kBmTAwm4SgkTyfrCV0VQfPNsVs_knad753MTRHENqPL819cpaa05N1vpgFH-Imo&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQcrbZC1tgjvq1Z0KiO4tnuzaDOUw8y7DYqFDZkEW1gIM9OGQ_tOmOdj8DBBP2IitTJ_63dXM45sJv7qQEtiodb92Q&s=19",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Jaisalmer"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (The Golden City & Desert Safari Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🐪 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Time to Visit Jaisalmer
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect Thar Desert escape aligned with chilling winter nights, clear sand horizons, and festival loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
          🏰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Golden Desert Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Jaisalmer is at its absolute peak of beauty and comfort from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these winter months, the scorching heat of the Thar Desert drops heavily, bringing golden sunny days and crisp, cold nights averaging 5°C - 24°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this premium timeline, traversing the living corridors of the <span className="font-semibold text-gray-900">Jaisalmer Fort</span>, capturing complex architecture loops at Patwon Ki Haveli, and enjoying camel safaris over the Sam Sand Dunes feels completely effortless.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
          <strong className="text-amber-950">Pro Tip:</strong> Want to witness the ultimate explosion of Rajasthani culture? Target your travel loops specifically around January or February to experience the legendary <strong className="text-amber-950">Jaisalmer Desert Festival</strong>, featuring folk fire dances, camel races, and beautiful turban tying displays.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ✨
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Chilly Winters (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The grand premium cycle. Ideal for open-air desert camping, jeep safaris, exploring ghost villages like Kuldhara, and stargazing under pollution-free night loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Desert Peak
        </span>
      </div>

      {/* Season 2: Shoulder/Transition Weeks */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌤️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Transition Phase (March & September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The desert starts heating up rapidly or experiences minor breeze transitions. Highly suited for off-beat backpackers who want crowd-free fort architecture frames and heavy stay discounts.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Quiet Stays
        </span>
      </div>

      {/* Season 3: Extreme Summer Scorcher */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-sm hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-red-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-red-700 transition-colors duration-200">
              Summer Heatwaves (April – August)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Intense, unforgiving desert heat scaling past 42°C with dry sandstorms. Outdoor movement blocks during the day, making sand dune camping completely non-operational.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-red-100/70 text-red-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Extreme Heat
        </span>
      </div>

    </div>
  </div>

</section>
{/* Best Hotels & Resorts Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">
  
  {/* Desert Royalty Background Glows (Sandstone Shimmer & Sunset Amber) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-700/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      👑 The Thar Royalty Stay Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Hotels & Luxury Desert Camps in Jaisalmer
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From magnificent living sandstone fort hotels to elite glamping coordinates buried deep inside the sweeping dunes of the Thar.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Living Fort Havelis (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
            🏰
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Living Heritage Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Sandstone Haveli Hotels Inside Sonar Qila
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Offer your travelers the unique thrill of staying inside Asia’s only operational, living fort. Painstakingly preserved boutique hotels and heritage properties located within the golden ramparts of <span className="font-semibold text-gray-900">Jaisalmer Fort</span> feature hand-carved stone balconies (*jharokhas*), narrow winding alleyway accessibility, and private rooftop views over the city.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
        Intricate Jharokha Balconies & Panoramic Golden Rampart Panoramas
      </div>
    </div>

  {/* Card 2: Ultra-Luxury Desert Glamping */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-600/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ⛺
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Bespoke Glamping Camps at Sam & Khuri
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Step away from commercial crowds into ultra-luxury tented settlements like <span className="font-semibold text-gray-900">The Serai</span> or premium camps on the Sam Sand Dunes. These feature temperature-controlled canvas suites, private plunge pools, and sunset camel treks.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Private Plunge Pools & Sunset Dune Safaris
      </div>
    </div>

    {/* Card 3: Royal Marwari Palaces */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          👑
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Grand Palatial Luxury Resorts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For clients wanting modern five-star opulence mapped over imperial architecture, grand properties like <span className="font-semibold text-gray-900">Suryagarh</span> or Marriott Jaisalmer provide sprawling courtyard gardens, step-well inspired pools, and royal folk music courts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Step-Well Pools & Traditional Manganiyar Folk Courts
      </div>
    </div>

    {/* Card 4: Modern Oasis Eco-Resorts (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌳
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Desert Sustainability
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Eco-Conscious Mud Havelis & Village Resorts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Provide an earthy, immersive alternative with high-end sustainable properties situated around the outer desert periphery. Built using local clay, naturally insulating thatch, and beautiful golden limestone, these retreats let guests stargaze under completely unpolluted desert night skies.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Zero Pollution Stargazing & Thermally Insulated Sandstone Craft
      </div>
    </div>

    {/* Card 5: Smart Heritage Villas */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧳
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Boutique Villas Near Patwon Ki Haveli
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Perfect for fast-moving photography groups and premium walkability itineraries. Elegant standalone villas located inside the main city square offer clean courtyard layouts and instant access to top local monuments.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Courtyard Architecture & Instant Architectural Walk-Access
      </div>
    </div>

  </div>
</section>


{/* Restaurants & Cafes Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
  
  {/* Culinary Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-950/5 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🥘 Wood-Fired Ker Sangri & Royal Gatte
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Restaurants & Dining Experiences in Jaisalmer
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From slow-cooked royal game curries infused with dry desert berries to magical rooftop cafes looking out at the glowing fort walls.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Fort-View Rooftops (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            ☕
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Sunset Alcoves
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Epic Fort-View Rooftop Cafes & Fine Dining
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Enjoy the golden hour at iconic rooftop outposts like <span className="font-semibold text-gray-900">The Trio</span> or <span className="font-semibold text-gray-900">The Jaisal Italy</span>. Situated close to the fort gates, these spots serve incredible fresh coffee, crispy wood-fired pizzas, and classic continental dishes, all framed by open-air views of the illuminated fort walls.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
        Illuminated Rampart Backdrops & Open-Air Sunset Seating
      </div>
    </div>

    {/* Card 2: Authentic Marwari Dhabas */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-600/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍲
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Traditional Marwari Thali Havels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For authentic regional dishes, direct your groups to heritage spots like <span className="font-semibold text-gray-900">Chandan Shree Restaurant</span>. They serve unlimited, ghee-soaked Marwari thalis loaded with fiery <span className="font-semibold text-gray-900">Ker Sangri</span>, hand-rolled bajra rotis, and creamy kadhi.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Ghee-Soaked Desert Ker Sangri & Hot Hand-Rolled Bajra Rotis
      </div>
    </div>

    {/* Card 3: Imperial Culinary Courts */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍷
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Imperial Fine Dining At Suryagarh
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience world-class culinary craft within the majestic dining rooms of Jaisalmer's high-end palace resorts. These luxury menus focus on restoring traditional recipes, serving tender braised lamb curries and delicate saffron-infused desserts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Restored Royal Recipes & Saffron-Infused Heritage Desserts
      </div>
    </div>

    {/* Card 4: Iconic Meat Legacies (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-500/30 shadow-lg hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍖
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Fiery Rajput Grills
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
          Legendary Laal Maas Kitchens & Desert Grills
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For non-vegetarian travelers, experiencing authentic <span className="font-semibold text-gray-900">Rajasthani Laal Maas</span> is a must. Elite heritage restaurants slowly braise tender mutton with fierce, sun-dried Mathania chilies over wood fires, creating an intensely rich sauce that pairs perfectly with hot tandoori breads.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Sun-Dried Mathania Chili Reductions & Slow Wood-Fired Braises
      </div>
    </div>

    {/* Card 5: Ghotua Halwai Creams */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧆
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Century-Old Sweet Legacies: Ghotua Laddoos
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Treat your travelers to Jaisalmer's century-old dessert heritage at legendary sweet shops like <span className="font-semibold text-gray-900">Dhanraj Ranmal Bhatia Halwai</span>. Taste their famous <span className="font-semibold text-gray-900">Ghotua Laddoo</span>—a melt-in-your-mouth sweet made from pounded chickpea flour, pure desi ghee, and a secret cardamon-saffron blend.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Pounded Chickpea-Ghee Masterpieces & Secret Saffron Blends
      </div>
    </div>

  </div>

  {/* Travel Guide Tip Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/10 via-orange-600/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-amber-900 font-bold">Thar Desert Logistics Tip:</strong> When booking sunset desert glamping excursions for your groups, always ensure the transport fleet uses professional 4x4 vehicles with deflated tire pressures for safe, seamless dune bashing and sand navigation!
      </p>
    </div>
  </div>

</section>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://tourism.rajasthan.gov.in/jaisalmer.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-xl hover:bg-yellow-700 transition font-semibold"
            >
              Visit Rajasthan Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jaisalmer;
