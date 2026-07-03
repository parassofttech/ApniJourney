import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Camera, Umbrella } from "lucide-react";

const CherrapunjiMeghalaya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/noh-sngithiang-falls-cherrapunjee-meghalaya-1-attr-hero?qlt=82&ts=1742172330792"
          alt="Cherrapunji"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1612043342432-847d4f1e5b9c?auto=format&fit=crop&w=1200&q=80")
          }
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
            💦 Cherrapunji – The Land of Clouds & Waterfalls
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Cherrapunji, Meghalaya, is famous for being one of the **wettest places on Earth**. 
            It is renowned for its **lush green landscapes, dramatic waterfalls, and living root bridges**. 
            A paradise for nature lovers and adventure seekers alike.
          </motion.p>
    {/* Introduction Section: Cherrapunji */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-sky-600 selection:text-white">

  {/* Advanced Radial Background Glows (Torrential Rains & Deep Canyons Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-500/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-slate-100 border border-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌧️</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950">
      Discover Cherrapunji
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      Historically known as Sohra, a dramatic high-altitude kingdom of thunderous vertical waterfalls, ancient limestone caves, and mist-laden canyons.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌫️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Rain-Washed Edge of the World
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Cherrapunji, sitting on a soaring plateau in the East Khasi Hills of Meghalaya at 1,430 meters, is legendary for holding some of the highest recorded rainfalls on the planet. Here, clouds do not simply hover in the sky; they drift gracefully into your rooms.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Inhabited by the deeply welcoming <span className="font-semibold">Khasi people</span>, Sohra is a landscape of extremes. It transitions from roaring, plume-like water drops during wet seasons to deep, mystical sunlit limestone trails in winter.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-sky-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-sky-600">11,000+mm</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Annual Rainfall</p>
        </div>
        <div className="bg-slate-100/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-slate-700">1,115ft</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Nohkalikai Height</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Nohkalikai Waterfalls */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          💧
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Mighty Nohkalikai
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Witness India's tallest plunge waterfall. Fed completely by torrential upstream downpours, it leaps fiercely from a sheer forest cliff face, plunging straight down into a stunning, neon-green pooling basin below.
        </p>
      </div>

      {/* Card 2: Living Root Bridges */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🌿
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Bio-Engineered Root Bridges
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Marvel at ancient Khasi engineering. Trek deep down into the valley floor to spot living suspension bridges painstakingly woven over centuries from the raw, rubbery aerial roots of the massive <span className="font-semibold">Ficus elastica</span> trees.
        </p>
      </div>

      {/* Card 3: Mawsmai & Arwah Caves */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🔦
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Subterranean Limestone Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into a dark prehistoric underground maze. Squeeze through the naturally lit passageways of <span className="font-semibold">Mawsmai Cave</span>, or hunt for marine fossils perfectly embedded inside the damp limestone walls of Arwah Cave.
        </p>
      </div>

      {/* Card 4: Eco-Park & Canyon Horizons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-slate-400 shadow-md hover:shadow-xl hover:shadow-slate-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-700 mb-5 group-hover:bg-slate-700 group-hover:text-white transition-all duration-300">
          ⛰️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-slate-800 transition-colors duration-200">
          The Sweeping Canyons of Sohra
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Peering straight into neighboring horizons. Head over to the edge of the plateau at the Eco-Park or Laitlum Canyons to catch views of massive river gorges carving down cleanly into the flat, sprawling floodplains of Bangladesh.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-900 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-sky-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Cherrapunji is a cinematic mountain escape. It offers a rare, pristine atmosphere where you can stand underneath massive monsoon clouds, trace centuries-old living tree roots, and peer into infinite valley gorges wrapped in absolute tranquility.
      </p>
    </div>
  </div>

</section>

         

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Cherrapunji
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://topplacesindia.com/img/attractions/meghalaya/cherrapunji/cherrapunji-hero.jpg",
                "https://t4.ftcdn.net/jpg/08/44/32/71/360_F_844327134_BizEwb4eQIwlg6IKeeBbvD3YcjlLpuCB.jpg",
                "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1701775312_431024-shillong-cherrapunji-dawki-tour-slider-image.webp",
                "https://topplacesindia.com/img/attractions/meghalaya/cherrapunji/cherrapunji-hero.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR5pJeOuI5JH32-yKyN5wP3iKzuHvz16VoA&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTycG1S2iQy7u7SQ-OBnxchUDtlW8rnlT3PQ&s",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Cherrapunji"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1601924646997-b19332edaa35?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

  {/* Advanced Radial Background Glows (Mystical Clouds & Living Root Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-emerald-50 border border-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌧️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
      Best Time to Visit Cherrapunji
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect Meghalayan escape aligned with powerful post-monsoon roars and crisp winter valley views.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-cyan-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-2xl font-bold mb-6 border border-cyan-100">
          🌫️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Khasi Cloud Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Cherrapunji experiences its prime exploration cycle from <span className="font-bold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded-md">October to February</span>. During these autumn and winter months, the record-breaking downpours recede into a comfortable 10°C - 22°C rhythm, clearing the intense valley mist for hiking.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this dry window, deep nature tracks like the legendary <span className="font-semibold text-gray-900">Double Decker Living Root Bridge</span>, Mawsmai Caves, and Nohkalikai viewpoint offer safe paths free from slick mud margins.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-2xl border border-cyan-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-cyan-900 font-medium leading-relaxed">
          <strong className="text-cyan-950">Pro Tip:</strong> Want to witness the pure, uninhibited force of the world's wettest ecosystems without complete outdoor lockouts? Target the shoulder weeks of September when the heavy monsoons slow down but waterfalls roar at full capacity.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Post-Monsoon & Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-cyan-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🥾
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-cyan-700 transition-colors duration-200">
              Winter Clarity (October – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The supreme trekking phase. Clear, bright blue horizons reveal massive canyons, easy root-bridge trekking loops, and dry entry access into deep limestone caves.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-cyan-100/70 text-cyan-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Prime Trekking
        </span>
      </div>

      {/* Season 2: Spring & Pre-Monsoon */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛅
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Spring Shifts (March – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Pleasant daytime winds averaging around 20°C. Intermittent light showers start revitalizing the dried valley vectors, keeping the sub-tropical flora incredibly fresh.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Breezy Valleys
        </span>
      </div>

      {/* Season 3: The Big Monsoons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛈️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Monsoon Deluxe (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The legendary torrential deluge. Trekking networks close down due to heavy water volumes, but the sheer sight of canyon waterfalls crashing down is an unmatched spectacle.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Extreme Rain
        </span>
      </div>

    </div>
  </div>

</section>
{/* Best Hotels & Resorts Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-600 selection:text-white">
  
  {/* Cherrapunji Misty Rain Background Glows (Cyan & Deep Moss Green Tints) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-emerald-50 border border-cyan-100 text-cyan-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌧️ The Mist & Canyon Stay Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
      Best Hotels & Resorts in Cherrapunji
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From luxury valley-view resorts on dramatic canyon edges to cozy wooden cottages hidden in the mist.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Luxury Cliffside Valley Resorts (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-600/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-700 group-hover:text-white transition-all duration-300 shadow-sm">
            ⛰️
          </div>
          <span className="text-xs font-bold bg-emerald-100/60 text-emerald-900 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Luxury Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
          Luxury Cliffside & Valley Edge Resorts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience the dramatic beauty of Sohra at premium cliffside properties like <span className="font-semibold text-gray-900">Polo Orchid Resort</span> or <span className="font-semibold text-gray-900">Jiva Resort</span>. Positioned on the rims of breathtaking canyons, these retreats offer infinity pools overlooking plunging waterfalls, open-air log fires, and high-end glass villas designed to frame panoramic views of the clouds rolling into the Bangladesh plains.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-700 tracking-wider uppercase">
        Infinity Pools & Dramatic Canyon Frontlines
      </div>
    </div>

  {/* Card 2: Boutique Eco Stays */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌿
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Sustainable Eco Lodges
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For nature-conscious souls, properties like <span className="font-semibold text-gray-900">Cherrapunjee Holiday Resort</span> provide eco-friendly wooden lodgings. Tucked safely away in traditional villages, they focus on local community integration, authentic Khasi building styles, and unmatched access to legendary hiking trails.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Eco-Conscious Architecture & Native Trails
      </div>
    </div>

    {/* Card 3: Cozy Pine Wood Cottages */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏡
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Cozy Alpine Wood Cottages
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Stay in beautifully crafted, insulated pine wood cabins that feel right out of a postcard. Surrounded by lush, mossy gardens and wild orchids, these romantic cottages feature private porches designed specifically for enjoying warm Khasi tea while listening to the rainfall.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Insulated Pine Wood Framing & Tea Decks
      </div>
    </div>

    {/* Card 4: Trekker Basecamps near Living Root Bridges (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌉
          </div>
          <span className="text-xs font-bold bg-cyan-100/60 text-cyan-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Adventure Basecamps
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
          Nongriat Basecamps & Living Root Trail Lodging
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          If you are planning the iconic down-valley trek, boutique homestays and rustic trekker lodges located near Tyrna village or deep in <span className="font-semibold text-gray-900">Nongriat village</span> are ideal. They put you just steps away from the iconic <span className="font-semibold text-gray-900">Double Decker Living Root Bridge</span> and spectacular turquoise natural pools.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Direct Root Bridge Access & Backpacker Havens
      </div>
    </div>

    {/* Card 5: Mid-Range Misty View Stays */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☁️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Misty Mountain Guest Houses
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Clean, highly functional, and welcoming guest houses scattered along the main Sohra circuit. Offering exceptional value, large viewing windows, and piping hot traditional breakfasts to kickstart your exploration.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        High Value Circuits & Hot Khasi Breakfasts
      </div>
    </div>

    {/* Card 6: Waterfall Perimeter Hideaways */}
    <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center shrink-0 border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🌊
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
            Nohkalikai Perimeter Hideaways
          </h3>
          <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
            Boutique stays located on the paths leading to the iconic <span className="font-semibold text-gray-900">Nohkalikai Falls</span> and Mawsmai Caves. These hidden villas offer pristine views of seasonal streams right outside your windows and provide heavy, all-weather blankets for those incredibly cool, rain-swept nights.
          </p>
        </div>
      </div>
      <span className="text-xs font-bold tracking-wider uppercase bg-cyan-100/70 text-cyan-950 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
        Plunging Cascades & Cave Loops
      </span>
    </div>

  </div>
</section>


{/* Restaurants & Cafes Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">
  
  {/* Culinary Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-900/5 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍲 High-Altitude Flavors
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Best Restaurants & Cafes in Cherrapunji
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From authentic smoky Khasi thalis (Jadoh) to cozy cliffside cafes serving specialty Meghalayan coffee.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Authentic Khasi Culinary Heritage (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🥩
          </div>
          <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Indigenous Khasi Heritage
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
          Traditional Khasi Jadoh & Smoky Local Kitchens
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Discover the authentic taste of Meghalaya at local roadside dhabas and heritage diners. Feast on iconic <span className="font-semibold text-gray-900">Jadoh</span> (flavored rice cooked with rich local spices), succulent <span className="font-semibold text-gray-900">Doh Neiiong</span> (tender pork cooked with aromatic black sesame paste), and a vibrant array of local leafy side chutneys mixed with ghost chili.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-700 tracking-wider uppercase">
        Aromatic Jadoh & Slow-Cooked Sesame Platters
      </div>
    </div>

    {/* Card 2: Cozy Cloud-Watching Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Misty Windows & Espresso Bars
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Charming wooden boutique cafes with wide glass panes facing the deep valleys. Sip on local artisanal roasts or a warm cup of hot chocolate paired with freshly baked apple pies while the heavy fog sweeps completely over the streets outside.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Artisanal Coffee Loops & Fog View Glazing
      </div>
    </div>

    {/* Card 3: Cliffside Fine Dining */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍽️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Canyon Rim Multi-Cuisine
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Located inside top-tier premium resorts, these upmarket dining halls feature wide terrace seating. They serve a balanced mix of Indian, Chinese, and European comfort food that hits the spot perfectly after a grueling trek down the canyons.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Terrace Valley Views & Premium Comfort Food
      </div>
    </div>

    {/* Card 4: Wholesome Bamboo-Shoot Local Diners (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🥣
          </div>
          <span className="text-xs font-bold bg-cyan-100/60 text-cyan-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Warm Mountain Staples
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
          Steaming Bamboo Shoot Curries & Simple Rice Plates
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For clean, hearty family meals, step into the local Sohra markets. Cozy wooden tables serve wholesome stews prepared with fermented bamboo shoots, tender pan-fried local mushrooms, and fresh mountain river fish, offering nutritious warmth against the perpetual damp climate.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Fermented Bamboo Stews & Native Spiced Broths
      </div>
    </div>

    {/* Card 5: Comfort Bakery & Tea Stalls */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Highland Tea & Sweet Bakes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Quaint corner bakeries serving up thick slices of tea cakes, hot buttered buns, and standard Assam or ginger-infused chai. Ideal for quick road stops while cruising along the misty, cloud-shrouded highways.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Hot Buttered Buns & Highway Pitstops
      </div>
    </div>

    {/* Card 6: Pristine Pure Veg Comfort Hubs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥬
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Clean Vegetarian Outposts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          To cater to family tour circuits, specific highly-rated dhabas in the main town area offer pure-vegetarian north and south Indian thalis, ensuring clean, predictable, and energetic fuel for your valley walks.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Predictable Family-Friendly Veg Thalis
      </div>
    </div>

  </div>

  {/* Travel Guide Tip Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600/10 via-cyan-600/5 to-transparent border border-emerald-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-emerald-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-emerald-900 font-bold">Sohra Dining Tip:</strong> If you are moving deep into the lower valleys like Nongriat or doing the living root bridge treks, options become highly localized. Make sure to pack energy bars and carry cash, as small village community stalls only serve simple maggi, boiled eggs, and tea, and digital connectivity can be limited inside the deep canyons!
      </p>
    </div>
  </div>

</section>
        </div>
      </motion.div>
    </div>
  );
};

export default CherrapunjiMeghalaya;
