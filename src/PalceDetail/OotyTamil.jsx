import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Camera, Umbrella } from "lucide-react";

const OotyTamil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s3.ap-south-1.amazonaws.com/zo-media/blog_photo/old/botanical_garden_6SOT8IV.jpg"
          alt="Ooty Lake"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1600730427482-4b4d6c1efdf2?auto=format&fit=crop&w=1200&q=80")
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
            🌿 Ooty – Queen of the Nilgiris
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Ooty, located in **Tamil Nadu**, is a famous hill station in the **Nilgiri Hills**. Known 
            for its **tea gardens, serene lakes, rolling hills**, and **pleasant weather**, it’s a 
            favorite getaway for nature lovers and adventure enthusiasts.
          </motion.p>

          {/* Introduction Section: Ooty */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-600 selection:text-white">

  {/* Advanced Radial Background Glows (Blue Mountain Highlands Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🚂</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Discover Ooty
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Queen of Hill Stations, crowned by the misty blue slopes of the Nilgiris, heritage colonial estates, and sprawling velvet tea gardens.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">⛰️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Majestic Heart of the Nilgiris
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Ooty, short for Udhagamandalam, rests high up in the Western Ghats of Tamil Nadu at an altitude of 2,240 meters. It is iconic for its uniquely soothing climate, massive eucalyptus plantations, and the dramatic curves of its terraced hills.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Originally a sacred tribal sanctuary of the ancient <span className="font-semibold">Toda People</span>, it was later developed as a summer getaway by the British, leaving behind a charming footprint of red-tiled stone cottages, stone churches, and botanical gardens.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">2,240m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">High Altitude</p>
        </div>
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">UNESCO</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Mountain Railway</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Nilgiri Mountain Railway */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🚂
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          The Vintage Toy Train
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step right into nostalgic luxury. This legendary UNESCO World Heritage steam train snakes along steep precipices, puffing through dark stone tunnels, dark-pine curves, and expansive valleys between Mettupalayam and Ooty.
        </p>
      </div>

      {/* Card 2: Doddabetta Peak Trails */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🦅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Doddabetta Peak Heights
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Touch the roof of South India. Hike or drive up to <span className="font-semibold">Doddabetta Peak</span>, the absolute highest point in the region, to catch breathtaking, panoramic views of the entire mist-covered hill terrain.
        </p>
      </div>

      {/* Card 3: Emerald & Avalanche Lakes */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-xl font-bold text-cyan-600 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
          💧
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Pristine Wilderness Lakes
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Escape the typical crowds. Drive into deep shola forests to encounter <span className="font-semibold">Avalanche Lake</span> and Emerald Lake, where deep indigo waters sit perfectly mirrored by wild orchids and massive pine woods.
        </p>
      </div>

      {/* Card 4: Toda Huts & Tea Tasting */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🍃
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Heritage Tea & Toda Culture
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A sensory rich walk. Tour premium, century-old tea factories to sample rich Nilgiri Orthodox blends, or witness the unique barrel-shaped, hand-painted thatch huts of the indigenous <span className="font-semibold">Toda tribe</span>.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-teal-950 via-teal-800 to-emerald-800 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-teal-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Ooty is a smooth, classic highland retreat. It balances the old-school old world charm of colonial clubs and heritage toy trains with dense shola forests and deep valleys, proving exactly why it has held its royal title for generations.
      </p>
    </div>
  </div>

</section>


          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Ooty
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://cdn.guidetour.in/wp-content/uploads/2018/01/Rose-Garden-Ooty.jpg.webp",
                "https://tripxl.com/blog/wp-content/uploads/2024/11/Explore-The-Ooty-Botanical-Gardens.jpg",
                "https://media.assettype.com/outlooktraveller%2F2024-04%2Fc15b61cf-f63b-4055-996c-f6a78df41022%2Fshutterstock_2333187775.jpg?rect=0%2C296%2C9000%2C5063&w=480&auto=format%2Ccompress&fit=max",
                "https://www.authenticindiatours.com/app/uploads/2022/03/Nilgiri-Hill-Toy-Train-Ooty-Tamil-Nadu.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpGQhXO5tYyDNEpiZq5gA5ptKULW1tojJXQ8sqUvyR3X-TWG3X8k29aJApRvdFhN3M8g&usqp=CAU",
                "https://static.toiimg.com/photo/123391105.cms",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Ooty"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1600730427482-4b4d6c1efdf2?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-sky-500 selection:text-white">

  {/* Advanced Radial Background Glows (Nilgiri Blue & Tea Estate Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍃 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      Best Time to Visit Ooty
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect South Indian hill escape aligned with blooming flower shows and crisp winter mist loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-sky-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl font-bold mb-6 border border-sky-100">
          ⛰️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Nilgiri Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Ooty showcases two highly pleasant cycles: the refreshing summer rush from <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">March to June</span> with comfortable temperatures around 15°C - 25°C, and the crisp winter magic from <span className="font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">October to February</span> when nighttime lows sometimes slip to near-freezing levels.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these top-tier windows, popular hubs like the <span className="font-semibold text-gray-900">Ooty Botanical Gardens</span>, Pykara Lake boat circuits, and Doddabetta Peak tracks offer clear horizons and beautiful valley photography layers.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl border border-sky-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-sky-900 font-medium leading-relaxed">
          <strong className="text-sky-950">Pro Tip:</strong> Eager to catch the legendary, massive Ooty Flower Show without heavy summer surge rates? Plan your travel loop around the early May window, or target late September for a serene, post-rain experience.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Summer Escape */}
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
              The ultimate crowd-pleaser. Bright sunshine, green terraced hillsides, fully active boat clubs, and the famous Nilgiri Mountain Railway toy train operating at peak frequencies.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Peak Holiday
        </span>
      </div>

      {/* Season 2: Crisp Winters */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ❄️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Winter Mist (October – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Chilly morning loops and heavy fog blanketed lakes. A dream phase for couples, cozy cottage stays, evening bonfires, and enjoying fresh hot tea varieties.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Crisp Horizons
        </span>
      </div>

      {/* Season 3: Monsoons */}
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
              Steady Southwestern showers wash the plantation fields into intense emerald setups. Travel slows down with mist-locked loops, but luxury resorts offer deep markdown cuts.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Lush Markdowns
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

export default OotyTamil;
