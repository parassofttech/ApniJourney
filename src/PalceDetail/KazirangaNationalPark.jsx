import React from "react";
import { motion } from "framer-motion";
import {
  MapPin, Mountain, Plane,
  Train, Compass, Camera, Utensils,
  ArrowUpRight, Landmark, Calendar, Trees
} from "lucide-react";

const KazirangaNationalPark = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌿 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://bigcatsindia.com/wp-content/uploads/2024/10/big-five-kaziranga.webp"
            alt="Kaziranga National Park"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Assam
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
              Kaziranga
            </motion.h1>
            <p className="text-green-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Land of the One-Horned Rhino
            </p>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              A breathtaking wildlife sanctuary where tall elephant grass, wetlands,
              and dense forests protect rare species in their natural habitat.
            </motion.p>
          </header>

          {/* Introduction Section: Kaziranga */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-700 selection:text-white">

            {/* Advanced Radial Background Glows (Wild Floodplains & Swamp Mist Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-lime-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-lime-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🦏</span> Wildlife Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Discover Kaziranga
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Untamed Sanctuary—a magnificent UNESCO World Heritage frontier where prehistoric giants roam freely across the sprawling, mist-veiled tall grasslands of Assam.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Last Stronghold of Prehistoric Giants
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Kaziranga National Park, located along the fertile floodplains of the mighty Brahmaputra River in Assam, stands as one of the world's most successful wildlife conservation epics. Sprawling across a dense expanse of tall elephant grass, marshy swamps, and tropical moist forests, it is a landscape frozen in deep evolutionary time.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  As a prized <span className="font-semibold">UNESCO World Heritage site</span>, Kaziranga proudly protects the global majority of the vulnerable Great Indian One-Horned Rhinoceros. It also boasts an incredibly high density of royal Bengal tigers, wild water buffaloes, and majestic swamp deer.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-emerald-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-emerald-600">2,400+</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">One-Horned Rhinos</p>
                  </div>
                  <div className="bg-lime-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-lime-600">UNESCO</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Heritage Status</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: The One-Horned Rhino Legacy */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🦏
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    The Monolithic Rhino Trails
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Witness a true conservation miracle up close. Watch these armor-plated, prehistoric giants graze peacefully alongside riverine lakes, dominating a landscape they have safely claimed for centuries.
                  </p>
                </div>

                {/* Card 2: Open-Top Jeep Safaris */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-lime-300 shadow-md hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-lime-50 flex items-center justify-center text-xl font-bold text-lime-600 mb-5 group-hover:bg-lime-600 group-hover:text-white transition-all duration-300">
                    🤠
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-lime-700 transition-colors duration-200">
                    Deep-Range Jeep Safaris
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Traverse diverse ecological zones. Venture deep into the Central, Western, or Eastern ranges in an open-top 4x4, tracking elusive Bengal tigers, wild elephants, and wild water buffaloes through dense timber tracks.
                  </p>
                </div>

                {/* Card 3: Dawn Mist Elephant Exploration */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🐘
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Misty Elephant Meadows
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Catch the park at golden hour. Watch massive herds of Asian elephants emerge from the towering, morning-mist-shrouded <span className="font-semibold">elephant grass</span> fields as the sun crests over the horizon.
                  </p>
                </div>

                {/* Card 4: Birdwatcher's Wetland Paradise */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    🦅
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    The Avian Beels & Swamps
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Explore an Important Bird Area (IBA). The park's numerous seasonal water bodies (<span className="font-semibold">beels</span>) host thousands of migratory waterbirds, pelicans, fishing eagles, and the rare Bengal florican.
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
                  In short, Kaziranga is a dramatic cinematic spectacle of raw wildlife resilience. It perfectly balances the deep, primeval stillness of its swampy wilderness with the pure, heart-racing thrill of dynamic safari encounters—making it an absolute bucket-list destination for serious wilderness explorers.
                </p>
              </div>
            </div>

          </section>



          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-green-500" /> Visual Safari
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://www.kaziranga-national-park.com/blog/wp-content/uploads/2025/07/Rhino-Conservation-Success-Story.jpg", title: "One Horned Rhino" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6f0ztws2yogJQQ0cpFTmcVPRo6isy1PNUfg&s", title: "Elephant Herd" },
                { url: "https://res.cloudinary.com/roundglass/image/upload/v1726570023/rg/collective/media/assam-kaziranga-juvenile-tusker-elephant-rhino-background-dhritiman-mukherjee_i6zpln.jpg", title: "Safari Jeep" },
                { url: "https://www.savaari.com/blog/wp-content/uploads/2024/08/Kaziranga-National-Park.webp", title: "Wetlands" },
                { url: "https://etimg.etb2bimg.com/thumb/msid-121282833,width-1200,height-900,resizemode-4/.jpg", title: "Grasslands" },
                { url: "https://static2.tripoto.com/media/filter/tst/img/2052458/TripDocument/1620756281_kaziranga.jpg", title: "Tiger Reserve" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt="Kaziranga "
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

            {/* Advanced Radial Background Glows (Assam Floodplains & Untamed Safari Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🦏 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Best Time to Visit Kaziranga
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your perfect wilderness expedition aligned with crisp tropical winters, high wildlife visibility, and open park boundaries.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
                    🐅
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Sanctuary Open Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Kaziranga operates its main tourist and exploration track strictly from <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">November to April</span>. During this premium dry stretch, the relentless Brahmaputra floodwaters completely recede, bringing cool morning breezes and highly pleasant daytime weather ranging between 10°C - 25°C.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During these operational months, cruising in open-top 4x4 jeeps through the <span className="font-semibold text-gray-900">Kohora or Bagori Ranges</span>, capturing the prehistoric Great Indian One-Horned Rhino, or birdwatching across tropical wetlands feels incredibly exhilarating.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
                    <strong className="text-emerald-950">Pro Tip:</strong> Looking for the absolute highest chance to spot Royal Bengal Tigers or dynamic herds of wild water buffaloes? Focus your loop on <strong className="text-amber-950">March or April</strong>. Forest officials burn down the massive dry elephant grass during this time, providing completely unobstructed viewing panels across the savanna.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Winter Safari Peak */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🦅
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
                        Crisp Winter Safaris (November – February)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The ultimate peak loop. Mild, comforting sunshine followed by chilly nights. Thousands of migratory birds arrive at the water bodies, making it a dream for wildlife photography.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Safari Peak
                  </span>
                </div>

                {/* Season 2: High Visibility Spring */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
                        Dry Spring & Apex Sighting (March – April)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The climate grows warmer but triggers massive animal congregations near remaining watering holes. Reduced foliage allows spectacular long-range tracking lines.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Clear Tracking
                  </span>
                </div>

                {/* Season 3: Monsoon Closure */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
                        Heavy Flood Closures (May – October)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The park completely shuts down as the Brahmaputra River overflows, submerging massive patches of land. Animals migrate to the higher hills of Karbi Anglong. Avoid trips.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Park Closed
                  </span>
                </div>

              </div>
            </div>

          </section>
          {/* Best Wildlife Stays & Safari Lodges Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

            {/* Savannah Background Glows (Emerald & Golden Grass) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🦏 The Rhino Heartland Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Luxury Safari Lodges & Wild Wetland Retreats
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From immersive jungle resorts nestled right on the park periphery to private cottages offering sunrise views of the wetlands teeming with wildlife.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Luxury Jungle Safari Resorts (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌿
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Premium Safari Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Luxury Jungle Safari Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Stay in the heart of the wilderness. These resorts offer eco-luxury suites, naturalist-led safari planning, and private viewing decks where you can listen to the symphony of the jungle at dawn.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-700 tracking-wider uppercase">
                  Naturalist-Led Safaris & Private Jungle Viewing Decks
                </div>
              </div>

              {/* Card 2: Wetland View Cottages */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌅
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Wetland Sunrise Cottages
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Wake up to the golden hues of the Kaziranga marshlands. These cottages provide peaceful, serene surroundings perfect for bird watching and observing rare wetland fauna from your porch.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Marshland Bird Watching & Sunrise Porch Views
                </div>
              </div>

              {/* Card 3: Eco-Conscious Tented Camps */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ⛺
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Eco-Luxury Tented Camps
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Get closer to the wild. Featuring premium, all-weather luxury tents that provide an authentic camping experience with high-end comforts, fire-pits, and star-gazing sessions.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Authentic Tented Luxury & Evening Fire-Pit Sessions
                </div>
              </div>

              {/* Card 4: Modern Comfort Suites (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ✨
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Modern Safari
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Modern Safari Boutique Villas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Where modern sophistication meets raw nature. These villas offer spacious interiors, floor-to-ceiling windows, and dedicated 24/7 concierge support for arranging elephant back or jeep safaris.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Jeep Safari Concierge & Spacious Boutique Interiors
                </div>
              </div>

              {/* Card 5: Research & Learning Bases */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    📚
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Nature Research Basecamps
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Ideal for wildlife enthusiasts and photographers. Includes access to library resources on Kaziranga’s flora/fauna and guided workshops on wildlife preservation.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Wildlife Photography Workshops & Eco-Library Access
                </div>
              </div>

            </div>
          </section>

          {/* Culinary Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-gray-950">Assamese Culinary Delights</h2>
              <p className="text-gray-600 mt-3 text-lg">Authentic flavors: Jolpan, Rice delicacies, and organic farm-fresh produce.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Culinary Cards here... */}
            </div>
          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/10 to-lime-400/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🦏 Wild Heritage
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Kaziranga
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Home of the Great One-Horned Rhinoceros, Kaziranga offers a raw, immersive escape into the wild heart of Assam.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-emerald-400/60 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      ⛺
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Eco-Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Wildlife Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for budget guesthouses on the park periphery, local Assamese meals, and shared jeep safaris.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚙 Safari</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹2.5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-emerald-600 tracking-tight">
                    ₹2,500 – ₹4,500 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-emerald-500 hover:border-emerald-400 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-emerald-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
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
                    Nature Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for eco-resorts, private jeep safaris, and guided bird-watching sessions.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹4k – ₹7k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚙 Safari</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹4k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-emerald-600 tracking-tight">
                    ₹8,000 – ₹13,000 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-lime-400/60 shadow-md hover:shadow-xl hover:shadow-lime-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-lime-50 text-lime-600 flex items-center justify-center text-lg font-bold border border-lime-100 shadow-sm group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-lime-50 text-lime-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Comfort
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Safari Lodge
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium jungle resorts, private customized safari vehicles, and curated nature photography excursions.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹12k – ₹25k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚙 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹5k – ₹8k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-lime-600 tracking-tight">
                    ₹20k – ₹38k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-emerald-500/10 via-lime-500/5 to-transparent border border-emerald-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-emerald-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-emerald-800 font-black">Pro Tip:</strong> Book safari slots well in advance, especially during the peak season (November to April). The park is divided into multiple zones; research which zone aligns best with your wildlife sighting interests.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🧵 Assamese Craft
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Shopping in Kaziranga
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Bring home a piece of Assam’s culture with exquisite silks, tea, and handcrafted tribal artifacts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧥
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Assamese Silk
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    Muga & Paat Silk
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover traditional <span className="font-semibold text-gray-900">Assamese Mekhela Chador</span> made from rare golden Muga silk, famous for its sheen and durability.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Royal Weave
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-stone-300 shadow-lg hover:shadow-xl hover:shadow-stone-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 text-xl flex items-center justify-center border border-stone-100/70 group-hover:bg-stone-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-stone-700 transition-colors duration-200">
                    Assam Tea
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Buy premium <span className="font-semibold text-gray-900">single-estate Assam black tea</span> directly from local tea gardens surrounding the park.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-stone-600 tracking-wider uppercase">
                  Garden Fresh
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-yellow-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-xl flex items-center justify-center border border-yellow-100/70 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🪵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-yellow-700 transition-colors duration-200">
                    Bamboo & Cane
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find <span className="font-semibold text-gray-900">intricate bamboo-cane baskets, mats, and home decor items</span> crafted by local artisans.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-yellow-600 tracking-wider uppercase">
                  Artisan Wood
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🐚
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Tribal Souvenirs
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Handicrafts & Masks
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Look for <span className="font-semibold text-gray-900">traditional tribal masks and wildlife-themed wood carvings</span> that represent Assam’s rich biodiversity.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Cultural Decor
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧣
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Gamosa
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Carry the symbol of Assamese pride: a <span className="font-semibold text-gray-900">Gamosa</span>, a traditional white cloth with a red border.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Cultural Symbol
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 via-yellow-500/5 to-transparent border border-orange-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-orange-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-orange-900 font-bold">Shopping Tip:</strong> Visit local markets near the park entrance. Buying directly from local cooperative shops ensures your money supports local craftsmen and tribal families.
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
    <ArrowUpRight size={18} className="text-emerald-400" />
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

export default KazirangaNationalPark;