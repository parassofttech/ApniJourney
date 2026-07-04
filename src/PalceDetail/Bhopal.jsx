import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Camera,
  Plane,
  Train,
  Calendar,
  ArrowUpRight,
  Utensils,
  Compass,
  Building2,
  Waves
} from "lucide-react";

const Bhopal = () => {
  return (
    <div className="min-h-screen bg-[#f3f9ff] py-12 px-4 sm:px-8 font-sans selection:bg-cyan-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌊 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTYdKDG5yMz4G5tZT5d-zjft0J0-eyhxayr6uVmRBvKSS0vv7qrecetKH8AcpnSydXaNnb7vv5lxXcF2qg6Kvo3XBg&s=19"
            alt="Bhopal Lake"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Heart of Madhya Pradesh
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">

          {/* HEADER */}
          <header className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-cyan-950 tracking-tighter leading-none mb-6 italic"
            >
              Bhopal
            </motion.h1>
            <p className="text-cyan-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The City of Lakes
            </p>
            <div className="h-1.5 w-20 bg-cyan-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Where shimmering lakes meet timeless mosques and royal heritage.
              Bhopal is a poetic blend of <span className="text-cyan-900 font-bold italic">nature and Nawabi elegance</span>.
            </motion.p>
          </header>

          {/* Introduction Section: Bhopal */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-600 selection:text-white">

  {/* Advanced Radial Background Glows (Tranquil Lakes & Royal Heritage Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-amber-50 border border-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>👑</span> Nawabi Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Discover Bhopal
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The City of Lakes—a striking, multi-layered capital where ancient stone-age shelters, massive scenic waters, and grand royal mosques form a beautiful cultural mosaic.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🕌</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        A Tale of Two Contrasting Cities
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Bhopal, the green capital of Madhya Pradesh, splits effortlessly into two distinct eras. To the north lies the old historic quarter—a fascinating maze of narrow rustic alleys, grand palaces, and monumental minarets ruled famously for over a century by successive generations of powerful, progressive Begums.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        To the south lies the modern, exceptionally green eco-city, defined by sprawling corporate grids, premium art centers, and the vast, mirror-calm expanses of the <span className="font-semibold">Bhojtal</span>, making it one of India's most livable hubs.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">11th Cent</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Bhojtal Core Origins</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">30,000+ Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Bhimbetka Cave Art</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Bhojtal (Upper Lake) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          The Majestic Bhojtal Waters
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Unwind along an engineering marvel. Built by Raja Bhoj, the scenic <span className="font-semibold">Upper Lake</span> is perfect for high-speed boating, serene cruise dinners, or catching glorious pastel sunsets right from the breezy VIP Road promenade.
        </p>
      </div>

      {/* Card 2: Taj-ul-Masajid Royal Mosque */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Crown of Mosques
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into one of Asia's largest mosques. <span className="font-semibold">Taj-ul-Masajid</span> features colossal, 18-story pink sandstone minarets, massive marble domes, and a grand, polished courtyard that echoes pure architectural majesty.
        </p>
      </div>

      {/* Card 3: Bhimbetka Rock Shelters Excursion */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🦬
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Bhimbetka Stone Age Art
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Deconstruct the dawn of humanity. A short drive away lies this rare <span className="font-semibold">UNESCO World Heritage site</span>, home to prehistoric rock caves displaying vivid, ancient paintings of hunting trails and tribal rituals.
        </p>
      </div>

      {/* Card 4: Bharat Bhavan & Modern Culture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          🎭
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          The Hub of Bharat Bhavan
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Immerse yourself in artistic dialogue. Designed by Charles Correa, this brilliant multi-arts complex terracing down to the lake combines open-air galleries, tribal museums, and contemporary theater spaces.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-teal-950 via-neutral-900 to-amber-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-teal-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Bhopal is a beautifully understated cultural gem. It seamlessly weaves the grand, sprawling tranquility of its lakeside layouts with the spicy, slow culinary bliss of Bhopali Poha and royal Mughlai slow-cooking—making it a stellar city-break for discerning travelers.
      </p>
    </div>
  </div>

</section>

         

          {/* GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-cyan-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerIk5YyK31KWBv2AcKF-7hB8DqlQ1arwck4RrGBngJp5NMyMJtZAM41dOeUgHrFj-YeIQRO4UK1zJkXWUVJR7xFy0tysgbJYtDPFryy0mAJUXY07Fz-TzEewShz_6VslHVGMbc=w675-h390-n-k-no", title: "Upper Lake Sunset" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoW9-ajzbwcI0t5JA3F9pfXJrpp27G30-etL34VWpzwsYaCJ0r5tlSq4_788fdtDrkQtdz9DG6LU6WFkr-hj654dRm4yWyiadQuhOUgadKpdXaF1ybRff2oT3bnyHm96gFQv6k=w675-h390-n-k-no", title: "Taj-ul-Masajid" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSfUeD7uy9du4IyX3rRtvjmc-KA6jGqnErGMFC71JY3HTYkIAxe5IJBIDFZv8_iJJYpS4qdYNLxES7peBcawaeHFp4&s=19", title: "Sanchi Stupa" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT6l20hR-RZ6CmTYDe04AyTmqA4EqmRhxRc4H-Vdogvid1GpSsUSJ1J1K5seoGiXS74_22ZdeabMx_zicmQKWLzggQ&s=19", title: "Van Vihar" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerGuK7nn_jkCxIpuw3YrtHV6RgBHXJoZC6mSWbS3MWldVJcjQVx9V1YiMejrsRvq_MXxtX6KRWnJmoORasyTWkXyb3QaXIOCSdCILaqxCRR4W5AdCGhmYVcRajnDnmy4Yb5RMiN=w675-h390-n-k-no", title: "Shaukat Mahal" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweofNVvnWokPhEYlrTm55bWLMGi6ZTLEb9S0lsDirqXTHWasFpjIPg8EKxryOv5Rw-1vFMtoa0vLCJoidY4H5B-IGsKXAv0m7WsSy9u7JyLLFPED7H5ZpXYCaWq8TwykoGe_iczg=w675-h390-n-k-no", title: "Lake View Night" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                      <p className="text-white/70 text-sm">Bhopal • Madhya Pradesh</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-sky-500 selection:text-white">

  {/* Advanced Radial Background Glows (The City of Lakes & Royal Canopy Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🕌 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      Best Time to Visit Bhopal
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect lakeside getaway aligned with chilly winter winds, pleasant heritage walks, and fresh post-monsoon foliage.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-sky-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl font-bold mb-6 border border-sky-100">
          🌊
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Lakeside Winter Loops
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Bhopal treats its visitors to an exceptionally pleasant and crisp holiday climate from <span className="font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these peak winter months, daytime temperatures hover comfortably around 16°C - 28°C, with nights cooling down to a refreshing 9°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this premium timeline, speed-boating across the vast <span className="font-semibold text-gray-900">Bhojtal (Upper Lake)</span>, catching sunsets from Manuabhan Tekri, or embarking on open-air heritage walks through Taj-ul-Masajid loops feels completely effortless.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl border border-sky-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-sky-900 font-medium leading-relaxed">
          <strong className="text-sky-950">Pro Tip:</strong> Packing bags for an exploration loop? Bhopal acts as the ultimate baseline hub for UNESCO World Heritage sites. Winter is the prime season to take crisp day trips to the prehistoric <strong className="text-amber-950">Bhimbetka Rock Shelters</strong> and the monumental stupas of <strong className="text-emerald-950">Sanchi</strong> without central India's intense afternoon sun fatigue.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ❄️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Crisp Lakeside Winters (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The ultimate peak cycle. Clear blue skies with chilly evening breezes across the VIP Road coastlines. Perfect for cycling along Van Vihar and exploring multi-art displays at Bharat Bhavan.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Lakeside Peak
        </span>
      </div>

      {/* Season 2: Monsoon Refresh */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Lush Monsoon Cascades (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The city lakes overflow beautifully, and the surrounding hilllocks turn completely emerald green. Great for scenic long drives to Kerwa Dam and catching misty overlooks.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Greenery Loop
        </span>
      </div>

      {/* Season 3: Summer Heat */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Humid & Dry Summers (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Temperatures quickly spike past 40°C during mid-day blocks. Outdoor exploring becomes taxing, making air-conditioned museum visits or late-night boat clubs the only preferred options.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Arid Stretch
        </span>
      </div>

    </div>
  </div>

</section>
{/* Best Heritage Stays & Lakeside Resorts Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-600 selection:text-white">
  
  {/* Lake Breeze Background Glows (Teal & Terracotta) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-800/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🛶 The City of Lakes Stay Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Heritage Haveli Resorts & Lakeside Retreats
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From restored royal havelis echoing the Begums' legacy to modern luxury retreats perched on the banks of the vast, historic Bhojtal.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Heritage Haveli Resorts (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏰
          </div>
          <span className="text-xs font-bold bg-teal-100/60 text-teal-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Royal Heritage Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
          Royal Heritage Haveli Resorts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Step into a bygone era at meticulously restored heritage properties. Featuring grand arches, intricate floral carvings, and sprawling courtyards, these stays offer an intimate glimpse into the rich Indo-Islamic culture and hospitality of the Bhopal dynasty.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-700 tracking-wider uppercase">
        Grand Indo-Islamic Arches & Historical Courtyard Living
      </div>
    </div>

    {/* Card 2: Lakeside Luxury Retreats */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌊
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Lakeside Luxury Retreats
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Wake up to the gentle waves of the Upper Lake. These modern luxury retreats offer glass-fronted suites, private lakeside decks for morning tea, and infinity pools that merge with the horizon of Bhopal's water body.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Infinity Pools & Direct Upper Lake Waterfront Access
      </div>
    </div>

    {/* Card 3: Forest-Edge Boutique Stays */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌲
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Forest-Edge Boutique Stays
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Nestled near Van Vihar National Park, these boutique stays offer a unique blend of urban proximity and wild serenity. Enjoy organized wildlife walks, treetop balconies, and peaceful reading nooks surrounded by lush native flora.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Van Vihar Access & Treetop Nature Balconies
      </div>
    </div>

    {/* Card 4: Modern Boutique Villas (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
            ✨
          </div>
          <span className="text-xs font-bold bg-teal-100/60 text-teal-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Modern Elegance
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
          Contemporary Elegance Villas
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience Bhopal’s rising luxury scene. These villas offer minimalist, high-end interiors, personal butler services, and rooftop terraces perfect for stargazing over the tranquil, city-spanning landscapes.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Personal Butler Service & Rooftop Stargazing Terraces
      </div>
    </div>

    {/* Card 5: Transit-Friendly Adventure Hubs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🚲
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Smart Adventure Transit Hubs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Designed for active explorers. Featuring bike rental docks, quick-access transit maps for the Sanchi Stupa and Bhimbetka day-trips, and social community zones for history travelers.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Sanchi & Bhimbetka Transit Docks
      </div>
    </div>

  </div>
</section>

{/* Restaurants & Culinary Experiences Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-600 selection:text-white">
  
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-950/5 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-teal-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍛 Flavors of the Royal Kitchen
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
      Dining & Culinary Traditions
    </h2>
    <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto font-medium">
      From legendary street-side Poha-Jalebi mornings to rich, aromatic Mughlai feasts that carry the legacy of the city’s royal courts.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Royal Mughlai Feasts (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
            👑
          </div>
          <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Royal Cuisine
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
          Royal Mughlai Feasts & Rezala
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Discover the exquisite nuances of Bhopal’s royal cuisine. Dine in traditional settings on rich, fragrant meat curries like *Rezala*, slow-cooked *Gosht Korma*, and perfectly spiced *Kebabs*—recipes passed down through generations in the city's old quarters.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
        Fragrant Rezala & Slow-Cooked Gosht Korma
      </div>
    </div>

    {/* Card 2: Iconic Poha-Jalebi Stalls */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌅
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Iconic Poha-Jalebi Mornings
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          The ultimate Bhopal breakfast. Experience the perfect harmony of spicy, fluffy *Poha* topped with crunchy *Sev* and freshly fried, syrupy *Jalebis*—a cultural rite of passage for every visitor.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Fluffy Poha with Crunchy Sev & Syrupy Jalebis
      </div>
    </div>

    {/* Card 3: Lakeside Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Upper Lake Sunset Cafes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Relax with artisanal coffee and international fusion small-plates at cafes directly overlooking the Upper Lake. The perfect spot for unwinding after a day of historical sightseeing.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Artisanal Coffee & Lake-View Evening Bites
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
            Bazaar Street Flavors
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
          Old City Street Food Trails
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Explore the vibrant streets of the Old City. Taste local specialties like *Bhopali Paan*, stuffed *Aloo Bonda*, and savory *Kebabs* sold from decades-old family stalls that define the city's street-food history.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Authentic Bhopali Paan & Decades-Old Kebab Stalls
      </div>
    </div>

    {/* Card 5: Artisan Bakery Corners */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍪
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Artisan Bakery Corners
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          End your day at quiet bakery corners featuring fresh cakes, buttery cookies, and local fruit-based treats—ideal for a sweet finish to a day of exploration.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Fresh Baked Cakes & Buttery Local Cookies
      </div>
    </div>

  </div>

  {/* Travel Guide Tip Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600/10 via-orange-600/5 to-transparent border border-teal-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-teal-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-teal-900 font-bold">Bhopal Transit Tip:</strong> Bhopal’s history is best enjoyed by splitting your trip: one day for the modern lakefront and Van Vihar, and another dedicated to the historical heritage of the Old City and the nearby archaeological sites of Sanchi and Bhimbetka!
      </p>
    </div>
  </div>

</section>

{/* Budget Breakdown Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">
  
  {/* Cyber-Atmospheric Background Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/10 to-teal-400/10 blur-[140px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="text-center mb-16">
    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
      湖 City of Lakes
    </span>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
      Budget Breakdown for Bhopal
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Explore the seamless blend of historic heritage and modern urban life in the city of Nawabs.
    </p>
  </div>

  {/* Premium Tier Matrix */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

    {/* Card 1: Budget Traveler */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-emerald-400/60 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
            🚲
          </div>
          <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
            Nomad Tier
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Lake Side Nomad
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Perfect for students and backpackers enjoying street food near Upper Lake and budget hostels.
        </p>

        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹500 – ₹1k</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹250 – ₹500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚌 Local</span>
            <span className="text-gray-900 font-extrabold text-sm">₹50 – ₹150</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-emerald-600 tracking-tight">
          ₹800 – ₹1,650 <span className="text-xs font-bold text-gray-400">/ day</span>
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
            ✨
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-bold">
            Balanced
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Heritage Explorer
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Ideal for comfortable hotels, guided tours of Van Vihar, and authentic Mughlai dinners.
        </p>

        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1.5k</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Cab</span>
            <span className="text-gray-900 font-extrabold text-sm">₹700 – ₹1.2k</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-emerald-600 tracking-tight">
          ₹3,500 – ₹6,700 <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

    {/* Card 3: Luxury */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-teal-400/60 shadow-md hover:shadow-xl hover:shadow-teal-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-lg font-bold border border-teal-100 shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
            👑
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md font-bold">
            Elite Comfort
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Nawabi Luxury
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Premium heritage properties, private chauffeur, and curated gourmet experiences.
        </p>

        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹7k – ₹15k+</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2.5k – ₹4k</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-teal-600 tracking-tight">
          ₹11.5k – ₹23k+ <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-14 text-center">
    <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-emerald-950 font-semibold text-sm md:text-[15px] leading-relaxed">
        <strong className="text-emerald-800 font-black">Pro Tip:</strong> Try the famous Bhopal Poha-Jalebi breakfast at a local stall near New Market—it’s an authentic city experience you shouldn't miss.
      </p>
    </div>
  </div>
</section>

{/* Shopping Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-blue-500 selection:text-white">
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🛍️ Cultural Markets
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950">
      Shopping in Bhopal
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Discover the vibrant bazaars offering everything from traditional Zari-Zardosi work to contemporary handicrafts.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🧵
          </div>
          <span className="text-xs font-bold bg-blue-100/60 text-blue-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Traditional Art
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
          Zari-Zardosi Fabrics
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Bhopal is renowned for its <span className="font-semibold text-gray-900">intricate golden embroidery (Zari-Zardosi)</span> on purses, sarees, and traditional dresses.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Nawabi Craft
      </div>
    </div>

    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏺
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Terracotta Pottery
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Explore beautiful <span className="font-semibold text-gray-900">hand-crafted terracotta items</span>, which reflect the indigenous artistic traditions of Madhya Pradesh.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Handmade Pottery
      </div>
    </div>

    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          👜
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Leather Goods
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Browse through <span className="font-semibold text-gray-900">durable, stylish leather bags, belts, and accessories</span> sold in the old city's vibrant markets.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Quality Leather
      </div>
    </div>

    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🖼️
          </div>
          <span className="text-xs font-bold bg-purple-100/60 text-purple-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Tribal Art
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
          Gond Paintings
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Take home <span className="font-semibold text-gray-900">vibrant, nature-inspired Gond art</span> directly from local state-run handicraft emporiums (Mrignayani).
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
        Authentic Tribal Art
      </div>
    </div>

    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-pink-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-pink-50 text-xl flex items-center justify-center border border-pink-100/70 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧂
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-pink-700 transition-colors duration-200">
          Local Spices
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Visit the old city markets to stock up on <span className="font-semibold text-gray-900">freshly ground local spices, pickles, and traditional papads</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-pink-600 tracking-wider uppercase">
        Organic Flavors
      </div>
    </div>
  </div>

  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 via-emerald-500/5 to-transparent border border-blue-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-blue-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-blue-900 font-bold">Shopping Tip:</strong> Head to 'Mrignayani Emporium' for fixed-price, authentic handicrafts from across MP if you prefer not to bargain in the chaotic but exciting street markets.
      </p>
    </div>
  </div>
</section>

          {/* CTA */}
          <div className="mt-20 text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.mptourism.com"
              className="inline-flex items-center gap-4 bg-cyan-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(8,145,178,0.3)] hover:bg-cyan-700 transition-all"
            >
              Discover Bhopal <ArrowUpRight size={20} />
            </motion.a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

// Reusable Components

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all cursor-default">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-cyan-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const HeritageItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl font-bold text-slate-700 hover:bg-white transition-all">
    {text}
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-cyan-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-cyan-100">{value}</span>
  </div>
);

export default Bhopal;