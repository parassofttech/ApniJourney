import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Plane,
  Train,
  Compass,
  Coffee,
  Camera,
  Utensils,
  ArrowUpRight,
  Landmark,
  Calendar,
  Snowflake
} from "lucide-react";

const Manali = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQyXzRVsuzbC9aPqM93sZJ1Z2zxV5N8W7cDAnnDOvqgXAEwrvGnAPeaLRvlPjKUCX4l47JdudsWtr72WpB-UkZcC7M&s=19"
            alt="Manali Hills"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Manali
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Valley of Gods
            </p>
          </div>
        </div>

        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white rounded-t-[3rem]">

          {/* ABOUT SECTION */}
          <section className="mb-24 text-center">
            <h2 className="text-4xl font-black text-green-900 italic mb-8">
              About The Destination
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Nestled in the Kullu Valley of Himachal Pradesh, Manali is a popular hill station 
              surrounded by snow-capped mountains, lush valleys, and rivers. Known for adventure sports, 
              apple orchards, and scenic beauty, it attracts honeymooners, trekkers, and nature lovers.
            </p>
          </section>

          {/* Introduction */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-sky-500 selection:text-white">

  {/* Advanced Radial Background Glows (Alpine Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏔️</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      Discover Manali
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      A breathtaking blend of snow-capped peaks, valley culture, thrilling adventure & cozy mountain cafes.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-sky-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">❄️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        India's Mountain Paradise
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Manali, nestled in the breathtaking Beas River Valley of Himachal Pradesh, is a world-famous hill station known for its snow-covered peaks, lush pine forests, and serene old-world charm.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Situated at an altitude of over 2,050 meters in the majestic Himalayas, Manali attracts millions of travelers every year seeking a perfect escape into nature, thrill, and cozy winter landscapes.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-sky-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-sky-600">2,050m+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Altitude</p>
        </div>
        <div className="bg-indigo-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-indigo-600">Infinite</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Alpine Bliss</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Culture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🏮
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Heritage & Himachali Culture
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A rich blend of local folklore and wooden architecture. From the sacred, ancient wooden <span className="font-semibold">Hadimba Temple</span> surrounded by cedar forests to the cultural alleys of Old Manali, history breathes here.
        </p>
      </div>

      {/* Card 2: Cafes & Vibes */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          ☕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          Boho Cafe Culture
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Famous for its rustic wooden cafes, live acoustic indie music tracks, cozy fireplaces, and paths that light up in winter evenings. Unwind with hot cider while watching the sunset over peak lines.
        </p>
      </div>

      {/* Card 3: Food Lover's Paradise */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🥟
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Himalayan Culinary Journey
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A paradise for mountain food lovers. Relish authentic steaming hot momos, local Himachali Siddu dipped in ghee, river trout fry, and authentic thukpas perfect for the cold climate.
        </p>
      </div>

      {/* Card 4: Adventure */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          🪂
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          High Altitude Thrills
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Get your adrenaline pumping at <span className="font-semibold">Solang Valley</span> with thrilling high-altitude paragliding, zorbing, winter skiing, and heavy-duty trekking excursions up towards Jogini Falls.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-sky-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Manali is not just a destination—it is an alpine experience that combines valley nature, mountain culture, crisp air, and absolute relaxation into one unforgettable journey. Whether you are traveling solo, with friends, or family, Manali promises alpine memories that stay forever.
      </p>
    </div>
  </div>

</section>

{/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-sky-500 selection:text-white">

  {/* Advanced Radial Background Glows (Snow & Pine Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ❄️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      Best Time to Visit Manali
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect mountain holiday aligned with ideal snow windows and local weather loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-sky-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl font-bold mb-6 border border-sky-100">
          ❄️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Alpine Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Manali features two incredible peaks: the summer escape from <span className="font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-md">March to June</span> with temperatures around 10°C - 25°C, and the winter snow wonderland from <span className="font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-md">December to February</span> when temperatures hit freezing lows, blanketing the valley in fresh snow.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these times, adventure spots like Solang and the newly configured <span className="font-semibold text-gray-900">Atal Tunnel</span> circuit burst with active sports enthusiasts, snowboarding loops, and busy markets.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl border border-sky-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-sky-900 font-medium leading-relaxed">
          <strong className="text-sky-950">Pro Tip:</strong> Want to enjoy quiet, fog-covered valleys and catch cheap resort luxury deals? Book during the shoulder weeks of late September or early November.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛄
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Winter (December – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The high snow season. Absolute goldmine for fresh snowfall, skiing loops in Solang Valley, and traversing through the Atal Tunnel.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Snow Wonderland
        </span>
      </div>

      {/* Season 2: Spring / Summer */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Summer (March – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Pleasant mountain climate. Clear skies reveal bright green valleys, blooming apple orchards, and fully open paragliding and river rafting treks.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Peak Holiday
        </span>
      </div>

      {/* Season 3: Monsoon */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Monsoon (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Heavy mountain downpours. High landslide alert margins close mass active sports circuits, but luxury resorts offer massive discount structures.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Low Volatility Risk
        </span>
      </div>

    </div>
  </div>

</section>

{/* How to Reach */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-indigo-500 selection:text-white">

  {/* Modern Tech-Themed Radial Glows (Mountain Transit) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-indigo-50 border border-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ✈️ Transit Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
      How to Reach Manali
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-md mx-auto font-medium">
      Seamless travel options mapped out across air corridors, mountain roads, and rail paths.
    </p>
  </div>

  {/* Interactive 3-Column Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

    {/* Option 1: By Air */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-xl font-bold mb-6 border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
          ✈️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
          By Air
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
          The fastest transit option into the valley. The nearest airfield is 
          <span className="font-semibold text-gray-900 bg-cyan-50/80 px-1 py-0.5 rounded mx-1">Bhuntar Airport (Kullu)</span>, located roughly 50 km from Manali. Alternatively, travelers land at Chandigarh or Delhi airports and take premium taxi lines up the hills.
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100/80 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Fastest Valley Access
      </div>
    </div>

    {/* Option 2: By Train */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold mb-6 border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🚆
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          By Train
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
          The major broad-gauge rail gateway is <span className="font-semibold text-gray-900 bg-indigo-50/80 px-1 py-0.5 rounded mx-1">Chandigarh Railway Station</span> or Ambala Cantonment. For a slower scenic approach, take the heritage narrow-gauge toy train lines from Kalka up to Shimla, then drive to Manali.
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100/80 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Scenic Intersections
      </div>
    </div>

    {/* Option 3: By Road */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold mb-6 border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🚌
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
          By Road
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
          Highly popular road trip path setups. Volvo overnight luxury multi-axle sleep coaches ply smoothly every evening from <span className="font-semibold text-gray-900 bg-blue-50/80 px-1 py-0.5 rounded mx-1">Delhi (ISBT)</span> and Chandigarh, tracking beautiful mountain curves along the NH-3 highway corridor.
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100/80 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Backpacker & Roadtripper Choice
      </div>
    </div>

  </div>

  {/* Pro-Tip Interactive Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 via-indigo-500/5 to-transparent border border-cyan-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-indigo-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-indigo-900 font-bold">Wanderlust Tip:</strong> If your schedule opens up, try a self-drive through the engineering masterpiece <span className="underline decoration-cyan-400 decoration-2 underline-offset-2">Atal Tunnel</span>—the massive continuous snow structures and mountain layers on the other side will blow your mind!
      </p>
    </div>
  </div>

</section>

 {/* Top attractions/ */}

 {/* Top Attractions Section */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-emerald-500 selection:text-white">
  
  {/* Advanced Alpine Radial Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-rose-50 border border-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏔️ Hotspots Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Top Attractions in Manali
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Must-visit snow valleys, engineering marvels, historic wooden temples & cozy mountain paths.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Card 1: Snow Valleys (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏔️
          </div>
          <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
          Solang Valley & Rohtang Pass
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Manali's snow-capped crown gems include the thrill-packed slopes of <span className="font-semibold text-gray-900">Solang Valley</span>, the majestic heights of <span className="font-semibold text-gray-900">Rohtang Pass</span>, and the iconic snow landscapes around <span className="font-semibold text-gray-900">Gulaba</span>. Perfect hubs for snowboarding, heavy skiing loops, paragliding high above mountains, and playing in fresh powder snow.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        High-Altitude Snow Points
      </div>
    </div>

    {/* Card 2: Engineering Marvel */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🚇
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Atal Tunnel & Sissu
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Drive through the historic <span className="font-semibold text-gray-900">Atal Tunnel</span>, the world's longest highway tunnel above 10,000 feet, to enter Lahaul Valley and unlock the breathtaking, snowy river landscapes of <span className="font-semibold text-gray-900">Sissu</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Lahaul Valley Gateway
      </div>
    </div>

    {/* Card 3: Wooden Heritage Temples */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🛕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Hadimba & Manu Temples
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Step into rich Himachali heritage at the ancient wooden pagoda-styled <span className="font-semibold text-gray-900">Hadimba Temple</span> nestled in thick cedar forests, or trek up to the peaceful stone-wooden structures of <span className="font-semibold text-gray-900">Manu Temple</span> in Old Manali.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Cultural Heritage
      </div>
    </div>

    {/* Card 4: Boho Nightlife & Cafes (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌙
          </div>
          <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Chilli & Cozy
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          Old Manali Cafe Culture
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Dive deep into the unmatched rustic energy of mountain nights across glowing wooden alleys. The vibrant lanes of <span className="font-semibold text-gray-900">Old Manali</span> are packed with smoky wood-fired pizza ovens, cozy live indie-rock music bands, acoustic bonfire nights, and iconic boho cafes resting along the rushing Beas river streams.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Mountain Backpacker Hubs
      </div>
    </div>

    {/* Card 5: Local Shopping */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🛍️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          The Mall Road
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Hunt for unique hand-woven Himachali shawls, wooden artifacts, winter wear, fresh mountain apples, and detailed Tibetan handicrafts along the bustling pathways of Manali's central <span className="font-semibold text-gray-900">Mall Road</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Street Shopping
      </div>
    </div>

    {/* Card 6: Treks & Waterfalls */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧗‍♂️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Jogini Waterfalls
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Trigger your inner explorer with a pine-shaded scenic mountain trek starting from Vashisht village up to the roaring cascading tiers of <span className="font-semibold text-gray-900">Jogini Waterfalls</span>, complete with tiny valley tea stalls along the path.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Nature Trails
      </div>
    </div>

  </div>

  {/* Pro-Tip Premium Glass Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 via-rose-500/5 to-transparent border border-emerald-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-emerald-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-emerald-900 font-bold">Explorer Tip:</strong> Secure your online Rohtang Pass permits a few days in advance as vehicle entries are strictly limited, and head out past the Atal Tunnel before 8:30 AM to escape peak morning highway jams!
      </p>
    </div>
  </div>

</section>

{/* Accommodation Section */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-purple-500 selection:text-white">
  
  {/* Advanced Radial Background Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-purple-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏨 Accommodation Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950">
      Best Hotels in Manali
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Handpicked stays curated perfectly for luxury seekers, valley wanderers, and smart backpackers.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Luxury Resorts (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌟
          </div>
          <span className="text-xs font-bold bg-purple-100/60 text-purple-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
          Luxury Riverside Resorts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience ultra-premium mountain luxury at iconic retreats like <span className="font-semibold text-gray-900">Span Resort & Spa</span> and <span className="font-semibold text-gray-900">The Himalayan</span>. Flawless options for premium leisure, complete with snowy mountain-view glass structures, open-air wooden dining areas right next to the roaring Beas River, and heated holistic wellness spas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
        Ultra-Luxury & Castles
      </div>
    </div>

    {/* Card 2: Mid-Range Hotels */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏔️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Mid-Range Stays
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Highly comfortable, premium views at properties like <span className="font-semibold text-gray-900">Sterling Manali</span> and <span className="font-semibold text-gray-900">Solang Valley Resort</span>. These deliver upscale modern room heaters, snow vistas, balconies, and rich buffet spreads at highly optimized prices—perfect for family groups.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
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
          Highly affordable backpacker hostels and vibrant wooden workspaces nestled along the artistic lanes of <span className="font-semibold text-gray-900">Old Manali</span>. Unmatched setups for remote creators looking to cut down expenses and enjoy bonfire networking.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Backpacker Centric
      </div>
    </div>

    {/* Card 4: Valley-Facing Hotels (Featured - Larger width) */}
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
          Valley & River-Facing Hotels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Wake up straight to mist-covered pine lines. Premium boutique properties situated directly on the active banks of <span className="font-semibold text-gray-900">Aleo & Naggar Road</span> or facing the snowy expanses of Solang. Secure these mountain balconies to unlock instant access to peaceful pine walks, heavy room-insulation frameworks, and morning tea overlooking deep valley drops.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Alpine Horizon Panoramas
      </div>
    </div>

    {/* Card 5: Heritage Boutique Cottages */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Boutique Cottages
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Artistic, high-concept stone-and-wood cottages near the historic town of <span className="font-semibold text-gray-900">Naggar Castle</span>. These offer private orchard charm, personalized hospitality loops, and slow-paced quiet spaces far removed from the mainstream commercial grids.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Artistic Curations
      </div>
    </div>

    {/* Card 6: Luxury Wood Villas */}
    <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center shrink-0 border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🏡
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
            Exclusive Luxury Pine Villas
          </h3>
          <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
            Tailor-made for big mountain reunion groups and family structures. Independent properties scattered around Jagatsukh feature dedicated indoor glass fire pits, fully equipped modular kitchen architectures, multi-car private parking slots, and 100% boundary privacy for a laid-back cozy retreat.
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
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent border border-purple-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-purple-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-purple-900 font-bold">Booking Window Tip:</strong> Planning a trip during the high-demand snow windows of late December to January? Make sure to lock down your cottage bookings early to avoid heavily inflated season surges and ensure fully functional central heating setups!
      </p>
    </div>
  </div>

</section>


{/* Restaurants Section */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-rose-500 selection:text-white">
  
  {/* Dynamic Culinary Background Tints */}
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
      Best Restaurants & Cafes in Manali
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Savor everything from riverside acoustic cafes to authentic hot Himachali legacy kitchens.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Trout Fish Special (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🐟
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Must Visit
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Riverside Trout Specials
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor the valley's fresh river catch at globally acclaimed culinary landmarks like <span className="font-semibold text-gray-900">Johnson's Cafe</span> and <span className="font-semibold text-gray-900">Cafe 1947</span>. Do not leave the mountains without diving into fresh wood-pan fried Himalayan Trout, seasoned garlic butter bakes, and crispy herb-crusted valley delicacies.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Fresh River Catch & Legacy Spots
      </div>
    </div>

    {/* Card 2: Riverside Wooden Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎸
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Riverside Cafes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Unwind completely with direct rushing water views across the banks of <span className="font-semibold text-gray-900">Old Manali Streams</span>. The absolute premier choice for quick midday finger food, hot mountain teas, and memorable bonfire-lit acoustic musical dinners.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Beas Stream Sips
      </div>
    </div>

    {/* Card 3: Fine Dining */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌟
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Fine Dining
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Indulge in premium high-end environments at iconic elite properties like <span className="font-semibold text-gray-900">The Lazy Dog</span> and heritage castle structures, offering unparalleled glass-enclosed luxury alongside masterfully curated continental platters.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Luxury Alpine Ambience
      </div>
    </div>

    {/* Card 4: Himachali Cuisine (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍲
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Heritage Tastes
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
          Traditional Himachali Dham & Siddu
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Embark on a deep heritage flavor journey with legacy mountain recipes. Make sure to try authentic ghee-dipped local steamed <span className="font-semibold text-gray-900">Siddu</span> stuffed with poppy seeds, slow-cooked poppy infusions, yogurt-heavy festive <span className="font-semibold text-gray-900">Kadhi Chawal</span> setups, and intensely rich spice-cooked <span className="font-semibold text-gray-900">Khatta Karahi</span> plates.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Authentic Pahadi Roots
      </div>
    </div>

    {/* Card 5: Wood-Fired Pizzerias */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Artisanal Pizzerias
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Warm up your crisp mountain afternoons at cozy sanctuary spaces like the iconic apple-orchard layout of <span className="font-semibold text-gray-900">Il Forno</span> for unmatched hand-stretched oak-fired rustic Italian pizzas and artisanal hot cocoa bakes.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Orchard Wood-Fired Crusts
      </div>
    </div>

    {/* Card 6: Pan-Asian Hotpots */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥟
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Tibetan & Pan-Asian
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Manali packs highly diverse international palettes. Explore freshly steamed Tibetan momos, boiling hot noodle soups at <span className="font-semibold text-gray-900">Chopsticks</span>, and fiery authentic Thukpa plates across the active central zones of <span className="font-semibold text-gray-900">Mall Road</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Hot Mountain Comfort Bowls
      </div>
    </div>

  </div>

  {/* Foodie Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-rose-900 font-bold">Foodie Tip:</strong> Always make it a priority to head down to the Old Manali stream cafes around 6:30 PM. Watching the misty twilight sweep over the pine trees with a piping hot bowl of Thukpa or a fresh trout platter is an irreplaceable alpine ritual!
      </p>
    </div>
  </div>

</section>

{/* Budget Breakdown Section */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-cyan-500 selection:text-white">
  
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
      Budget Breakdown for Manali
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
          Perfect for backpackers and solo travelers looking to scale Manali efficiently on low overheads.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹900</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹900</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🛵 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-emerald-600 tracking-tight">
          ₹1,600 – ₹3,200 <span className="text-xs font-bold text-gray-400">/ day</span>
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
            🏔️
          </div>
          <span className="text-[10px]  tracking-widest uppercase bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-md font-bold">
            Balanced
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Mid-Range Explorer
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Ideal setup for couples and family units aiming for maximum comfort with zero waste.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,500 – ₹6,500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹1,000 – ₹2,500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹1,200 – ₹2,200</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-cyan-600 tracking-tight">
          ₹5,000 – ₹11,000 <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

    {/* Card 3: Luxury */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-purple-400/60 shadow-md hover:shadow-xl hover:shadow-purple-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg font-bold border border-purple-100 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
            🌟
          </div>
          <span className="text-[10px]  tracking-widest uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-bold">
            Elite Premium
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Luxury Opulence
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Crafted for high-end honeymoons, elite experiential vacations, and premium resort stays.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹9,000 – ₹35k+</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,500 – ₹7,000</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,500 – ₹5,500</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-purple-600 tracking-tight">
          ₹14,000 – ₹50k+ <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

  </div>

  {/* Pro-Tip Floating Banner */}
  <div className="mt-14 text-center">
    <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-cyan-500/10 via-emerald-500/5 to-transparent border border-cyan-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-cyan-950 font-semibold text-sm md:text-[15px] leading-relaxed">
        <strong className="text-cyan-800 font-black">Smart Commute:</strong> Sharing local cabs via the union setups or renting two-wheelers early in the day is highly recommended to bypass peak mountain blockages and explore outer valleys freely!
      </p>
    </div>
  </div>

</section>

{/* Shopping Section */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-violet-500 selection:text-white">
  
  {/* Dynamic Retail Background Tints */}
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
      Shopping in Manali
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Explore bustling mountain avenues, authentic handloom cooperatives, and Tibetan artisan craft hubs.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Tibetan Market (Featured Large Layout) */}
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
          Tibetan Market & Flea Alleys
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Dive deep into mountain commerce at the iconic central <span className="font-semibold text-gray-900">Tibetan Market</span>. Perfect spots to scout for detailed silver amulets, bamboo-crafted artifacts, hand-woven carpets, spinning prayer wheels, and intricate singing bowls.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-violet-600 tracking-wider uppercase">
        Vibrant Cultural Bargains
      </div>
    </div>

    {/* Card 2: Winter & Mountain Fashion */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧥
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Winter Wear
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Upgrade your mountain wardrobe instantly along <span className="font-semibold text-gray-900">Mall Road</span> lanes. Score heavy fleece jackets, cozy woolen caps, polarized snow shades, and embroidered leather boots.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Alpine & Warm Attire
      </div>
    </div>

    {/* Card 3: Handloom & Handicrafts */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧶
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Kullu Handlooms
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          The valley boasts a rich heritage of tangible art. Discover certified pure wool weavers at state cooperatives like <span className="font-semibold text-gray-900">Bhuttico</span>, famous for geometric Kullu shawls and heavy pashminas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Artisan Weaves & Heritage
      </div>
    </div>

    {/* Card 4: Old Manali Boutiques (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏘️
          </div>
          <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Bohemian Retail
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          Old Manali Alley Shops
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience a laid-back retail journey blended with hippy subcultures inside the rustic slopes of <span className="font-semibold text-gray-900">Old Manali Lanes</span>. These boutique wooden shops bring together indie silver jewelry, hemp bags, customized dreamcatchers, and trippy custom-painted merchandise.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Boho Hillside Emporiums
      </div>
    </div>

    {/* Card 5: Local Food Souvenirs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍎
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Orchard Treasures
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Take home tactile memories ranging from farm-fresh Apple Jams and organic rhododendron juices to local wild honey and packaged Himachali fruit wines.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Flavors & Fresh Preserves
      </div>
    </div>

    {/* Card 6: Herbal Extracts & Saffron */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌱
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Spices & Shilajit
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Navigate legacy corner stores tucked inside <span className="font-semibold text-gray-900">Manu Market</span> for budget-friendly authentic items like pure strands of Kashmiri saffron, organic tea packs, and high-altitude resin extracts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        High-Altitude Herbal Roots
      </div>
    </div>

  </div>

  {/* Smart Retail Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 via-amber-500/5 to-transparent border border-violet-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-violet-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-violet-900 font-bold">Shopping Tip:</strong> Polite bargaining works wonderfully in open flea stalls and the Tibetan market! However, for pure woolen items like handloom blankets and shawls, always stick to the government-authorized fixed price outlets like Bhuttico to ensure genuine quality.
      </p>
    </div>
  </div>

</section>

{/* Safety Tips Section */}
<section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-rose-500 selection:text-white">
  
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
      Safety Tips in Manali
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Proactive guidelines to keep your alpine getaway secure, smooth, and weather-resilient.
    </p>
  </div>

  {/* Asymmetric Security Bento Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Mountain Weather Safety (Featured Large Block) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏔️
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Critical Guide
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Mountain Terrains & Landslides
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          The valley weather can shift drastically within hours. Strictly avoid trekking or driving during flash monsoon alerts or heavy unmonitored winter blizzards. Always track local weather logs before heading to high elevations like <span className="font-semibold text-rose-600">Rohtang Pass or Atal Tunnel</span>, and stay clear of loose gravel rock faces.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        High-Altitude Terrain Security
      </div>
    </div>

    {/* Card 2: Mountain Driving Regulations */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏍️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Transport & Hairpin Bends
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Always sound honks at steep blind curves and use low gears while coming downhill. Watch out for slick <span className="font-semibold text-gray-900">Black Ice</span> patches in early winter mornings, and never speed through mountain pathways.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Safe Commute Rules
      </div>
    </div>

    {/* Card 3: River Currents & Beas Advisory */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌊
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Beas River Warnings
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          The currents of the Beas River are exceptionally strong and freezing cold due to glacial melts. Do not walk over slippery boulders near river beds for photos, and stay away from unmonitored river banks after dark.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Glacial Stream Awareness
      </div>
    </div>

    {/* Card 4: Adventure Sports Audit (Featured Large Block) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🪂
          </div>
          <span className="text-xs font-bold bg-sky-100/60 text-sky-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Operator Audit
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-800 transition-colors duration-200">
          Adventure Sports Protocols
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Ensure you deal exclusively with licensed, government-approved adventure operators across <span className="font-semibold text-gray-900">Solang Valley and Pirdi</span>. Always double-check harness buckles and equipment health before paragliding, zorbing, or white-water river rafting.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Verified Operators Only
      </div>
    </div>

    {/* Card 5: Acclimatization & AMS */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🩺
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Altitude Sickness
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          When ascending fast towards mountain passes higher than 10,000 feet, give your body time to adapt. Carry light basic altitude sickness remedies, drink warm fluids, and do not overexert instantly on trails.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        AMS & Air Pressure Checks
      </div>
    </div>

    {/* Card 6: Layer Management */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧥
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Thermal Layer Defense
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Counter sharp temperature drops by always moving around in efficient inner thermals and wind-proof outer shells. Pack strong moisturizers to prevent cold wind rashes on open skins.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Alpine Layer Management
      </div>
    </div>

  </div>

  {/* Reassuring Advisory Footnote */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-blue-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-rose-900 font-bold">Confidence Note:</strong> Manali is incredibly peaceful, hospitable, and safe for all global and domestic travelers. Simply respecting standard mountain rules and tracking current route logs is more than enough to lock in an unmatched Himalayan journey!
      </p>
    </div>
  </div>

</section>

         

          

         
          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0YcZTsX9AcNInXvW7kSRqM3s0NxsO3bsDASKbfULHSTd1VbeM0eycnXRY0Q7DeGgxxHyebSOzw0ZeKtAP3qwdrGN0HUI6Ol31dtpMqoAcVoN0fMj-BhANCP9A-hgQeqZoSo2c=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepFVBHZuCqRj99KFQxIQfYycUvCTBtdlcUb5QX2bGhppowus-oehtBIzQ66V3mylTnLqK3ypAxB-s14r9M-tqAJM0MK7AmbiPk0MZW-EeUdumqfGvGwT76TKguIvSW8aiwAhT8=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRPlS89pBrLwhqgpntjCNFRUfYvLGSwFJw0GVA4xJ-q7cDQkKGlCc7nVBwIZOpPJZolHrg1EhSP24wb7jFlR3uk3iI&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweraUXkV7Ad9ggpDHpL3x7IScKuu9bqfAIoJzqNOvbhVFn4_At06EqfJ8Qnh6Gmh-wtRKkKw3CmmZF4IRwwR73FU-LVsKWAPWl7pqAKfyM52uxZWqgq76snkK2NGsOKeAAOJ7E1_=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTECfLF3SfvdVWteW23gC5ZYgaU_qSI97NBKvb466TH5LOxmoHny1K5zbcXuv-MeN2ZZmZ4pVE8MAMSC_16MqEX-EE&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQlmJeaLOiVRItXiOXLcN9nkMyKQ01g11uB0ZCAtO4ymG-luzZ2YfXHbkPFEovD5PubZJ4btRWiMS8WndIU87w47Gw&s=19"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Manali"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Manali?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              For adventure seekers, honeymooners, and nature lovers, Manali offers snow-clad mountains, thrilling activities, 
              and serene landscapes, making it a perfect all-season destination.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-green-600 text-white text-xl font-black rounded-full shadow-2xl hover:bg-green-700 transition-all"
            >
              Plan Your Trip Now ✈️
            </motion.button>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

// Reusable Components
const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
    <div className="flex items-center gap-4">
      <div className="text-green-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
        {label}
      </span>
    </div>
    <span className="font-black text-green-100">{value}</span>
  </div>
);

const ItineraryDay = ({ day, text }) => (
  <div className="bg-green-50 p-8 rounded-3xl shadow-md">
    <h3 className="text-xl font-black text-green-800 mb-3">{day}</h3>
    <p className="text-slate-600">{text}</p>
  </div>
);

export default Manali;