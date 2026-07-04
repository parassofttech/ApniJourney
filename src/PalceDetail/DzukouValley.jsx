import React from "react";
import { motion } from "framer-motion";
import {
  MapPin, Mountain, Snowflake, Plane,
  Train, Compass, Coffee, Camera, Utensils,
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const DzukouValley = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://static.toiimg.com/img/97834455/Master.jpg"
            alt="Dzukou Valley"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Nagaland
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">

          <header className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-green-950 tracking-tighter leading-none mb-6 italic"
            >
              Dzukou Valley
            </motion.h1>
            <p className="text-green-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The Hidden Gem of Northeast
            </p>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Nestled in the hills of Nagaland and Manipur, Dzukou Valley is famous for its
              seasonal flowers, pristine meadows, and the serene Dzukou River.
            </motion.p>
          </header>

          {/* Introduction Section: Dzukou Valley */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

            {/* Advanced Radial Background Glows (Alpine Mist & Wild Lily Trails Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-purple-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🥾</span> Adventure Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Discover Dzukou Valley
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Valley of Celestial Shadows—a surreal, high-altitude dreamscape of endless rolling green topography, hidden caves, and mist-choked seasonal blooms.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Hidden Eden of the Northeast
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Dzukou Valley, perched majestically at an altitude of 2,452 meters behind the Japfü Peak on the border of Nagaland and Manipur, is one of India's most breathtaking wilderness treasures. Completely untouched by commercial roads, this volcanic crater basin is famed for its uniquely sculpted, velvet-green knolls that resemble rolling ocean waves.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Accessible only by an exhilarating trek through dense mossy forests, the valley floor is sliced by two crystal-clear rivers—the Dzukou and Japfü. It is globally celebrated for its stark, otherworldly eco-isolation and the legendary, endemic <span className="font-semibold">Dzukou Lily</span>.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-emerald-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-emerald-600">2,452m</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Base Elevation</p>
                  </div>
                  <div className="bg-purple-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-purple-600">Endemic</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Dzukou Lily Blooms</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: The Wave-Like Topography */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    ⛰️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Misty Velvet Knolls
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Gaze at a landscape unlike any other on earth. The valley's completely unique, continuous rolling green hills are sculpted with geometric precision, throwing dramatic shadows as clouds drift rapidly across the basin.
                  </p>
                </div>

                {/* Card 2: The Endemic Dzukou Lily */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    🌸
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    The Pink Lily Monsoon
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Time your trek with the summer rains. During the peak blooming season of June and July, the valley floor transforms into a surreal canvas of white and pink, blanketed by the rare, endemic <span className="font-semibold">Lilium chitrangadae</span>.
                  </p>
                </div>

                {/* Card 3: Razor Edge Trekking Routes */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🧗‍♂️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Viswema & Jakhama Trails
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Earn your vistas. Trek through the steep stone stairs of Jakhama or negotiate the high, muddy bamboo brush paths of Viswema, navigating a dense primeval canopy that breaks open into the vast rim of the valley.
                  </p>
                </div>

                {/* Card 4: Off-Grid Star Gazing & Caves */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    🌌
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Glacial Streams & Night Skies
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Camp completely off the grid. Pitch tents near the freezing natural rock shelters, dip your feet in the crystal streams, and experience absolute cosmic clarity with unpolluted views of the Milky Way.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-purple-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Dzukou Valley is a pristine alternative reality for hardcore trekkers and design-forward slow travelers. It completely eliminates modern noise, offering raw geographical beauty, crisp mountain currents, and a therapeutic stillness that redefines eco-adventure.
                </p>
              </div>
            </div>

          </section>



          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-green-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://roytellstales.com/wp-content/uploads/2020/01/IMG_20191210_1600370001-scaled.jpg", title: "Dzukou Blooms" },
                { url: "https://roytellstales.com/wp-content/uploads/2020/01/unexplored-northeast-LttRy5IZ-RA-unsplash.jpg", title: "Valley View" },
                { url: "https://cdn1.tripoto.com/media/filter/tst/img/2123218/Image/1686820194_camping_in_dzukou_the_outdoor_backpacker.jpg.webp", title: "Camping Site" },
                { url: "https://i.redd.it/lqic36uc0y6b1.jpg", title: "River Flow" },
                { url: "https://media.assettype.com/homegrown%2Fimport%2Fbook%2F11304-fvqdlqgivs-1558087647.jpg?w=480&auto=format%2Ccompress&fit=max", title: "Sunrise Hills" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bHbfCQ1CJUUSIJdCuhrNWVjMpo6SU37xIA&s", title: "Valley Trek" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Dzukou Valley - ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

            {/* Advanced Radial Background Glows (Celestial Valley & Floating Cloud Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                ⛰️ Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Best Time to Visit Dzukou Valley
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your ultimate northeastern trekking loop aligned with emerald summer slopes, rare endemic flower blooms, or frost-covered winter horizons.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
                    🌸
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Highland Blooming Cycles
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Dzukou Valley shifts its magic across two distinct peak windows: <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">June to September</span> for intense lush greenery and rare flower blooms, and <span className="font-bold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded-md">October to March</span> for completely clear crisp views. Sitting at 2,452 meters, the day weather stays incredibly pleasant while winter nights frequently dive near freezing points.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During these pristine blocks, ascending the steep trails from <span className="font-semibold text-gray-900">Viswema or Jakhama villages</span>, walking through the completely flat dwarf-bamboo carpet loops, or exploring natural caves near freezing streams feels like stepping onto another planet.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
                    <strong className="text-emerald-950">Pro Tip:</strong> Want to catch the exclusive pink and white blanket across the landscape? Target the monsoon onset from <strong className="text-emerald-950">late June to mid-July</strong>. This is the precise window when the endemic, ultra-rare <strong className="text-rose-950">Dzukou Lily</strong> blooms across the riverbeds, offering an unforgettable sight despite occasional light showers.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Emerald Rain & Blooms */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌿
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
                        Lush Monsoon & Lily Blooms (June – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The valley turns an unbelievable shade of neon green. While the trekking trails require good physical grip due to rain mud, the mist-laden slopes and exploding flower fields make it the most iconic season.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Lush Peak
                  </span>
                </div>

                {/* Season 2: Crystal Blue Autumn */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-cyan-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-cyan-700 transition-colors duration-200">
                        Clear Autumn Skylines (October – November)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The rains exit completely, giving way to bright golden sunshine and flawless horizon loops. The absolute prime time for stargazing and setting up outdoor valley campsites.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-cyan-100/70 text-cyan-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Perfect Skies
                  </span>
                </div>

                {/* Season 3: Frosty Deep Winter */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ❄️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
                        Frozen Crisp Winters (December – February)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The valley floor switches to pale brown hues, and early morning frost completely freezes the running riverbeds. Perfect for adventurers chasing cold alpine nights and crisp sunny mornings.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Frozen Slopes
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Dzukou Valley Stays & Explorer Basecamps Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-purple-600 selection:text-white">

            {/* Celestial Valley Glows (Lily Magenta & Mist-Grey) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-emerald-50 border border-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🌸 The Celestial Valley Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950">
                High-Altitude Basecamps & Mountain Huts
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Discover the raw magic of the Naga highlands. From rugged basecamps perched on cliff edges to cozy homestays in the gateway village of Viswema.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Dzukou Valley Basecamps (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-500/30 shadow-lg hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏕️
                    </div>
                    <span className="text-xs font-bold bg-purple-100/60 text-purple-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Adventure Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
                    The Dzukou Valley Trekker Basecamp
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Located right inside the valley, this is the ultimate spot for sunrise chasers. Offering basic dormitory-style wooden huts that put you inches away from the rolling grassy slopes and fields of lilies.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-700 tracking-wider uppercase">
                  Valley-Floor Sunrise Access & Rugged Trekker Dorms
                </div>
              </div>

              {/* Card 2: Viswema Gateway Homestays */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏠
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Viswema Gateway Homestays
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Start your journey in the traditional Naga village of Viswema. These warm, community-run stays offer the perfect acclimatization before tackling the steep ascent into the valley.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Pre-Trek Acclimatization & Authentic Naga Hospitality
                </div>
              </div>

              {/* Card 3: Cloud-View Ridge Huts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-500/30 shadow-lg hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ☁️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Ridge-Top Cloud Huts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For photographers looking for the perfect 'above-the-clouds' shot. These elevated huts offer panoramic vistas of the surrounding Naga hills as they fade into the evening blue.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Panoramic Valley Vistas & High-Altitude Photography
                </div>
              </div>

              {/* Card 4: Adventure Transit Hubs (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🥾
                    </div>
                    <span className="text-xs font-bold bg-purple-100/60 text-purple-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Trekker Essential
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Trekker Coordination & Supply Hubs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Located in Kohima/Viswema, these hubs provide essential trekking gear rentals, porter coordination, and updated trail safety reports for the Dzukou climb.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Porter Services & Trail Safety Coordination
                </div>
              </div>

              {/* Card 5: Sustainable Nature Camps */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-500/30 shadow-lg hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Sustainable Nature Camps
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Eco-friendly camping spots focused on leaving no trace. Perfectly positioned for stargazing without light pollution, deep in the heart of the valley.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Leave-No-Trace Camping & Stargazing
                </div>
              </div>

            </div>
          </section>

          {/* Culinary & Travel Tip Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-purple-600 selection:text-white">

            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-gray-950">Highland Trekking Advice</h2>
              <p className="text-gray-600 mt-3 text-lg">Essential tips for a safe and memorable Dzukou experience.</p>
            </div>

            <div className="bg-white/50 border border-gray-200 p-8 rounded-3xl shadow-lg max-w-3xl mx-auto backdrop-blur-lg">
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-start gap-3"><span>✅</span> <strong>Permits:</strong> Ensure your Inner Line Permit (ILP) is processed in advance for Kohima entry.</li>
                <li className="flex items-start gap-3"><span>✅</span> <strong>Fitness:</strong> The trek involves a steep initial climb; carry light, high-energy snacks.</li>
                <li className="flex items-start gap-3"><span>✅</span> <strong>Seasonality:</strong> Best visited during the monsoon (June–Sept) for full lily blooms, but be prepared for mud!</li>
                <li className="flex items-start gap-3"><span>✅</span> <strong>Waste:</strong> Dzukou is a plastic-free zone; ensure all your gear and waste are accounted for.</li>
              </ul>
            </div>
          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-400/10 to-pink-400/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🌸 Valley of Flowers
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Dzukou
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Trek into the emerald embrace of Nagaland's hidden gem, where rolling hills meet pristine alpine beauty.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-rose-400/60 shadow-md hover:shadow-xl hover:shadow-rose-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold border border-rose-100 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      🎒
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Trekker Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Backpacker Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for self-guided trekkers, dormitory-style rest house stays, and basic trail-side rations.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹200 – ₹500</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹600</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🎟️ Entry</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹50 – ₹100</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹600 – ₹1,200 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-rose-500 hover:border-rose-400 shadow-xl hover:shadow-2xl hover:shadow-rose-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-rose-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold border border-rose-100 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Mountain Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Includes private porter service, guided trek, and upgraded base-camp amenities.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹1.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚶 Guide</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹2k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹3,500 – ₹5,000 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-pink-400/60 shadow-md hover:shadow-xl hover:shadow-pink-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center text-lg font-bold border border-pink-100 shadow-sm group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-pink-50 text-pink-700 px-2.5 py-1 rounded-md font-bold">
                      Expedition Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Alpine Expedition
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Full support crew, camping luxury, gourmet trek meals, and photography-focused itinerary.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Camp</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹3k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚙 Trans.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹4k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-pink-600 tracking-tight">
                    ₹8k – ₹12k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-rose-500/10 via-pink-500/5 to-transparent border border-rose-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-rose-800 font-black">Pro Tip:</strong> Connectivity is non-existent on the trail. Download offline maps and carry power banks. The trek is weather-dependent; always coordinate with local Kohima tourism offices for the latest permit and trail conditions.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🧶 Naga Craft
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Shopping in Kohima & Surroundings
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From traditional Naga shawls to handcrafted accessories, bring home the spirit of the hills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧣
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Naga Weave
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Traditional Naga Shawls
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Each tribe has a unique pattern—the <span className="font-semibold text-gray-900">Angami Naga shawl</span>, with its black and white geometric motifs, is a timeless masterpiece.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Tribal Legacy
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    💍
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Naga Bead Jewellery
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover vibrant <span className="font-semibold text-gray-900">handmade bead necklaces and earrings</span>, utilizing traditional patterns and symbolic colors.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Tribal Adornment
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🪵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Wood Carvings
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Look for <span className="font-semibold text-gray-900">intricately carved wooden artifacts</span> depicting Naga warriors, traditional homes, and folklore.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Artisan Wood
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧺
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Cane & Bamboo
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Handwoven Cane Decor
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    From <span className="font-semibold text-gray-900">baskets to traditional headgear</span>, Naga cane work is renowned for its strength and intricate design.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Natural Fiber Art
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌶️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Naga Chili Products
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Take home the heat: <span className="font-semibold text-gray-900">Raja Mircha (King Chili)</span> pickles and dry spice rubs are a local specialty.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Culinary Souvenir
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-pink-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-rose-900 font-bold">Shopping Tip:</strong> Visit the local emporiums and handicraft centers in Kohima before you head to the valley. It is a more convenient way to explore the wide range of tribal crafts without carrying them on your trek.
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-green-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-green-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-green-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-green-100">{value}</span>
  </div>
);

export default DzukouValley;