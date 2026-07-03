import React from "react";
import { motion } from "framer-motion";
import { MapPin, Church, Waves, PartyPopper } from "lucide-react";


const RishikeshHaridwar = () => {
  const galleryImages = [
    "https://himalayanoutback.com/wp-content/uploads/2022/04/Interesting-Facts-About-Rishikesh.jpg",
    "https://s3.india.com/wp-content/uploads/2024/05/Feature-Image_-Rishikesh.jpg",
    "https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg",
    "https://planashleygo.com/wp-content/uploads/2023/03/Rishikesh-1.jpg",
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src={galleryImages[0]}
          alt="Rishikesh Haridwar"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-80 md:h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://i0.wp.com/stampedmoments.com/wp-content/uploads/2023/01/rishikesh-2.jpg?fit=1024%2C768&ssl=1")
          }
        />

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-4"
          >
            🌊 Rishikesh & Haridwar – Spiritual & Adventure Hub
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8 text-sm md:text-base"
          >
            Nestled along the sacred <b>Ganges River</b>, Rishikesh and Haridwar are
            renowned for <b>spiritual retreats, yoga centers, pilgrimage, and adventure activities</b>.
          </motion.p>

          {/* Introduction Section: Rishikesh */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

  {/* Advanced Radial Background Glows (Spiritual Adventure Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🧘‍♂️</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Discover Rishikesh
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Yoga Capital of the World, where the holy Ganga breaks free from the Himalayas into a haven of spirituality and thrilling rapids.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🕉️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Gateway to the Gods
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Rishikesh, nestled beautifully in the foothills of the Himalayas in Uttarakhand, is a timeless center of spiritual energy. It is where sages, seekers, and adrenaline junkies meet along the banks of a clean, emerald-green Ganga.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Famously catapulted onto the global stage by The Beatles in 1968, the town beautifully bridges ancient Vedic ashrams, sacred suspension bridges, and India's premier whitewater rafting routes.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">Global</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Yoga Capital</p>
        </div>
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-600">Grade IV</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">River Rapids</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Iconic Suspension Bridges */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🌉
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Lakshman & Ram Jhula
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk across iconic engineering marvels. These massive iron suspension bridges sway gently above the gushing Ganga, connecting vibrant streets lined with bustling multi-story temples, yoga ashrams, and local gemstone markets.
        </p>
      </div>

      {/* Card 2: Ganga Aarti at Parmarth Niketan */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🪔
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Divine Sunset Ganga Aarti
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience soulful evening magic at <span className="font-semibold">Triveni Ghat</span> or Parmarth Niketan. Watch the sunset illuminate rows of brass lamps as beautiful Vedic chants echo over the floating diyas on the river.
        </p>
      </div>

      {/* Card 3: Whitewater Rafting & Adventure */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          High-Adrenaline Rapids
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Conquer the waves of the wild river. Battle iconic rapids like 'Three Blind Mice' and 'The Golf Course' starting from <span className="font-semibold">Shivpuri</span>, or push your limits with bungee jumping over deep wilderness valleys.
        </p>
      </div>

      {/* Card 4: Ashrams & Sound Healing */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🧘‍♀️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Vedic Ashrams & Meditation
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Unplug completely inside serene sanctuaries. Visit the legendary graffiti-covered <span className="font-semibold">Beatles Ashram</span> or enroll in authentic sound healing workshops and certified multi-day yoga courses.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-teal-700 via-emerald-700 to-orange-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-teal-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Rishikesh holds a rare, dual-sided soul. It lets you switch effortlessly from quiet, meditative riverside mornings inside traditional ashrams to high-octane river rafting and cliff jumps by afternoon—crafting a unique holistic reset.
      </p>
    </div>
  </div>

</section>

          

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Rishikesh & Haridwar
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {galleryImages.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`RishikeshHaridwar ${i}`}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1581031405421-8a9e49c3c7b4?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-sky-500 selection:text-white">

  {/* Advanced Radial Background Glows (Spiritual Ganges & Adventure Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-orange-50 border border-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌊 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      Best Time to Visit Rishikesh
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect valley escape aligned with ideal river rapids and pleasant yoga weather loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-sky-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl font-bold mb-6 border border-sky-100">
          🧘‍♂️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The River & Yoga Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Rishikesh experiences its ultimate peak from <span className="font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">October to March</span> when the climate settles between a cool 15°C - 25°C, providing crystal-clear emerald waters for white-water rafting and a breezy ambiance for outdoor meditation.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these high-energy weeks, spiritual nodes like Laxman Jhula, Triveni Ghat, and the newly active <span className="font-semibold text-gray-900">Shivpuri camping loops</span> flood with adventure seekers, international yoga enthusiasts, and evening aarti crowds.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-sky-50 to-orange-50 rounded-2xl border border-sky-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-sky-900 font-medium leading-relaxed">
          <strong className="text-sky-950">Pro Tip:</strong> Want to attend world-class sessions during the International Yoga Festival or catch heavy monsoon clearance discounts before rafting opens? Late September or early March are beautiful, less crowded buffer windows.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Peak Winter & Spring */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛺
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Winter & Spring (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The high adventure window. Absolute prime time for high-grade river rafting, beach camping alongside Ganges, and cafe hopping in Tapovan.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Prime Rafting
        </span>
      </div>

      {/* Season 2: Summer Escape */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Summer (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Warm days touching 35°C. Rafting operates heavily till June. Ideal for taking holy dips in the river, cooling off at Neer Garh waterfalls, and exploring luxury wellness resorts.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Summer Rapids
        </span>
      </div>

      {/* Season 3: Holy Monsoon */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🔱
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Monsoon (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Heavy rains fill the Ganges, shutting down all river rafting and water sports completely. Perfect for internal rejuvenation, ashram stays, and experiencing the legendary Savan/Kanwar Mela vibes.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Spiritual Retreats
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

export default RishikeshHaridwar;
