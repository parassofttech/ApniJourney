import React from "react";
import { motion } from "framer-motion";
import {
  MapPin, Mountain, Snowflake, Plane,
  Train, Compass, Coffee, Camera, Utensils,
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Shimla = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-sky-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >
        {/* 🏔️ HERO SECTION - Cinematic Zoom */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTAMheFDLwFUgWS3f-NyNtnVuH45cGEwZ5tOEZ1BS6-SJ7ZsGCrl9FOSq_v1tVwcEzO_ql-XWiqowvDGPVPZ-weQUBt&s=19"
            alt="Shimla Hills"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

          {/* Floating Tag */}
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Explore Himachal</span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">

          {/* Header Section */}
          <header className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-sky-950 tracking-tighter leading-none mb-6 italic"
            >
              Shimla
            </motion.h1>
            <p className="text-sky-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">The Queen of Hills</p>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Walk through the whispering pines and Victorian shadows. Shimla isn't just a destination;
              it's a <span className="text-sky-900 font-bold italic">colonial dream</span> frozen in the Himalayan mist.
            </motion.p>
          </header>


          {/* Introduction Section: Shimla */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

            {/* Advanced Radial Background Glows (Heritage Raj-Era Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🚂</span> Destination Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Discover Shimla
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The timeless Queen of Hills, where majestic colonial heritage meets pine-scented mountain ridges.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-rose-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Queen of Hills
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Shimla, the iconic capital of Himachal Pradesh, stands as a grand testament to natural beauty intertwined with rich British-era history. Once the summer capital of British India, it preserves its old-world charm effortlessly.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Stretching across a 12-kilometer ridge in the lower Himalayas, Shimla offers dynamic street vistas, pedestrian-only avenues, and a majestic backdrop of oak and deodar forests.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-rose-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-rose-600">2,205m</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Altitude</p>
                  </div>
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">UNESCO</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Toy Train Route</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: Colonial Architecture */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    🏛️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Colonial Architecture & History
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Step back into the 19th century. From the magnificent, Scottish-baronial style <span className="font-semibold">Viceregal Lodge</span> to the Neo-Gothic architecture of Christ Church on The Ridge, history is etched in stone.
                  </p>
                </div>

                {/* Card 2: The Ridge & Mall Road Vibe */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    🌇
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    The Mall Road Vibe
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    A completely vehicle-free pedestrian paradise. Enjoy evening strolls on the bustling <span className="font-semibold">Mall Road</span>, explore local handicraft emporiums, or just relax on the wooden benches watching the sunset.
                  </p>
                </div>

                {/* Card 3: Himachali Flavors */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🍲
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Traditional Himachali Dham
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    A true feast for your tastebuds. Dive into authentic Himachali cuisine with a slow-cooked festival meal called <span className="font-semibold">Dham</span>, sweet and savory Sepu Badi, and delicious street-side chana kulcha.
                  </p>
                </div>

                {/* Card 4: Toy Train Magic */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🚂
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Kalka-Shimla Toy Train
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Experience a legendary fairy-tale journey. The UNESCO World Heritage narrow-gauge train chugs slowly through 103 dark tunnels, over 800 bridges, and past spectacular pine-covered valley bends.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-rose-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Shimla is a brilliant blend of colonial nostalgia, romantic misty walks, and vibrant mountain culture. It remains the perfect all-weather mountain escape that promises a vintage hill station experience you will cherish forever.
                </p>
              </div>
            </div>

          </section>






          {/* 📸 PREMIUM GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-sky-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                {
                  url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbcqncvHS2FGpyj2H42x66QQL9OZSkdQlhHWcQD8nXeKtmfSE9WLAIdEo_iexq1D9Mm5aTO1okxMGPhu3b_C3jmTRlMLNfqKsOv6KHXVKLyXIDE327OI9lKDS2JzSRtdhRUYT4=w675-h390-n-k-no",
                  title: "The Ridge",
                },
                {
                  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-TwYf2kw7QcA-feARujdCswlTUN7ZE2VxA&s",
                  title: "Christ Church",
                },
                {
                  url: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
                  title: "Snow Covered Hills",
                },
                {
                  url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT26w-bCNNNc_X_UPmRNKt3jcldgFqIbu-8Kc7E4caSaDq3txzAuN33iIak2jTvN53SJhsydV51kSI2T0G-YpZ2XD4&s=19",
                  title: "Valley Sunset",
                },
                {
                  url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSN45kh2-N8OPGK8XMVokSHJTxX-G25EVG8vyy2v74OyB49qqAAbfxT3PLucFKlXQ7o1o8Ir3XWs9CSu3hCaI2R4IEn&s=19",
                  title: "Mall Road",
                },
                {
                  url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQb3vj83Fqw7C2VFlYJlztiHid3LrJPErxDWduBxqHm5gBsqZBjRTIuIfv0PVp9XNFR3ACMM3ZxpMdqyo8RQTbnUos&s=19",
                  title: "Jakhoo Temple",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Shimla - ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      {/* <h3 className="text-white text-xl font-bold tracking-wide">
          {item.title}
        </h3> */}
                      <p className="text-white/70 text-sm">
                        Shimla • Himachal Pradesh
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-500 selection:text-white">

            {/* Advanced Radial Background Glows (Snowy Ridge & Colonial Heritage Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                ❄️ Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
                Best Time to Visit Shimla
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your perfect colonial hill escape aligned with fresh snowfall windows and pleasant summer loops.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-6 border border-indigo-100">
                    🏔️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Queen of Hills Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Shimla features two premium travel windows: the pleasant summer escape from <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">March to June</span> with comfortable days around 15°C - 30°C, and the magical winter snow wonderland from <span className="font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-md">December to February</span> when temperatures plummet to freezing lows.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During these peaks, the historic <span className="font-semibold text-gray-900">Mall Road</span> circuit, The Ridge, and the snow-laden slopes of Kufri come alive with ice skating loops, colonial heritage walks, and busy local bazaars.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl border border-indigo-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-indigo-900 font-medium leading-relaxed">
                    <strong className="text-indigo-950">Pro Tip:</strong> Want to capture crisp, clear views of the snow-capped Himalayas without the crazy summer or winter crowds? Book your trip during the golden autumn months of October and November.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Winter Snow Peak */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ⛄
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
                        Winter (December – February)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The high white season. Prime time for catching live snowfall, skiing loops in Kufri, exploring Christ Church under frost, and enjoying the open-air Ice Skating Rink.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Snow Magic
                  </span>
                </div>

                {/* Season 2: Summer Escape */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
                        Summer (March – June)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Pleasant mountain climate. Ideal for riding the legendary Toy Train, trekking through pine forests, and escaping the intense heatwaves of the plains.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Peak Holiday
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
                        Heavy mountain downpours with dense rolling fog. Landslide margins close major highway loops, but it offers deep emerald greens and heavy luxury resort discounts.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Monsoon Fog
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Best Hotels & Resorts Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

            {/* Alpine-Themed Background Glows (Mountain Mist & Pine Forest Tints) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-800/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-700/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🏔️ Alpine Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Best Hotels & Resorts in Shimla
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From grand colonial-era heritage manors to luxury glass chalets perched above rolling valley clouds.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Grand Colonial Heritage (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-600/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 shadow-sm">
                      👑
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-900 px-3 py-1 rounded-full uppercase tracking-wider">
                      Colonial Luxury Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Wildflower Hall & Iconic Heritage Manors
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Step into timeless elegance at legendary properties like <span className="font-semibold text-gray-900">Wildflower Hall (An Oberoi Resort)</span> or <span className="font-semibold text-gray-900">The Oberoi Cecil</span>. Situated amidst thick cedar forests, these grand estates feature vintage fireplaces, teak wood floors, and heated indoor pools overlooking snow-capped peaks, flawlessly capturing the opulence of the British summer capital era.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-700 tracking-wider uppercase">
                  Old-World Grandeur & Heated Infinity Pools
                </div>
              </div>

              {/* Card 2: Luxury Forest Chalets */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Mashobra Eco-Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Escape the crowded Mall Road by heading up to secluded sanctuaries in <span className="font-semibold text-gray-900">Mashobra</span> or <span className="font-semibold text-gray-900">Kufri</span>. Boutique spots offer luxury glass cabins surrounded by orchards, perfect for quiet stargazing and apple-picking trails.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Secluded Pine Valley Sanctuary
                </div>
              </div>

              {/* Card 3: Mall Road Boutique Stays */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🛍️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Ridge Viewpoints
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Stay right in the historic heart near the iconic <span className="font-semibold text-gray-900">Christ Church</span>. Upscale boutique hotels built along the steep hillsides provide private balconies with breathtaking sunset panoramas over the bustling promenade.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Immediate Walking Access to The Ridge
                </div>
              </div>

              {/* Card 4: Modern Luxury Valley Resorts (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏢
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Premium Contemporary
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Contemporary Mountain Resorts & Wellness Havens
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For traveler groups seeking cutting-edge modern comfort, properties like <span className="font-semibold text-gray-900">Radisson Jass Shimla</span> or <span className="font-semibold text-gray-900">Taj The Trees (Theog)</span> provide an incredible balance. Expect floor-to-ceiling glass windows framing deep valley fogs, world-class spa facilities, multi-cuisine open decks, and fully automated room climate control systems.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Panoramic Valley Vistas & Premium Spa Circuits
                </div>
              </div>

              {/* Card 5: Cozy Backpacker & Solo Cottages */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎒
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Rustic Wooden Homeseekers
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Budget-friendly, artsy wooden chalets and hostels located around the quieter slopes of <span className="font-semibold text-gray-900">Sanjauli</span>. Ideal settings for solo writers or hitchhikers seeking warm community kitchens and local guiding circles.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Bohemian Lofts & Co-Working Hubs
                </div>
              </div>

              {/* Card 6: Off-Grid Shoghi Wilderness Stays */}
              <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🚂
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                      Shoghi & Chail Heritage Glamping & Forest Outposts
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
                      Tucked deep within pristine pine hillsides along the historic Toy Train track routes like <span className="font-semibold text-gray-900">Shoghi</span>. These unique eco-camps and treehouses swap the urban traffic for peaceful nature walks, birdwatching trails, and crackling evening bonfires under starry skies.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-950 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
                  Untamed Pine Wilderness
                </span>
              </div>

            </div>

            {/* Mountain Traffic Glass Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600/10 via-amber-600/5 to-transparent border border-emerald-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-emerald-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-emerald-900 font-bold">Hill Station Transit Advisory:</strong> Main Shimla enforces a strict no-vehicle policy on the central Mall Road to preserve its walking charm. Ensure your chosen resort provides a dedicated shuttle or porter service from the authorized parking drop-off points, especially if traveling with heavy luggage!
                </p>
              </div>
            </div>

          </section>


          {/* Restaurants & Cafes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

            {/* Alpine Culinary Background Tints */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-800/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Section Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                ☕ Mountain Cafe Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Restaurants & Cafes in Shimla
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From cozy vintage wooden tea rooms to spectacular sunset viewpoints serving authentic Himachali Dham.
              </p>
            </div>

            {/* Premium Bento Grid Arrangement */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Vintage Bakery Landmarks (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🥧
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Legendary Vintage Bakeries
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Iconic Colonial Tea Rooms & Old-School Bakeries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Step inside historical dining institutions on the Mall Road like the legendary <span className="font-semibold text-gray-900">Wake & Bake Cafe</span>, <span className="font-semibold text-gray-900">Cafe Sol</span>, or the classic <span className="font-semibold text-gray-900">Indian Coffee House</span>. Cherished for their rustic wooden benches, they dish up fresh apple crumbles, artisan wood-fired pizzas, traditional English breakfasts, and spiced hot chocolates right overlooking the busy mountain streets.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
                  Fresh Apple Pies & Rich Heritage Coffee Blends
                </div>
              </div>

              {/* Card 2: Authentic Himachali Dham Experiences */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Traditional Culinary Havens
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Savor genuine ethnic flavors at specialized spots like <span className="font-semibold text-gray-900">Himachali Rasoi</span>. Discover traditional slow-cooked delicacies like <span className="font-semibold text-gray-900">Madra</span> (chickpeas cooked in a rich yogurt gravy) and sweet, fragrant <span className="font-semibold text-gray-900">Mittha</span>.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Slow-Cooked Authentic Himachali Dham
                </div>
              </div>

              {/* Card 3: Sky-High Sunset Lounges */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍹
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Open-Air Ridge Terraces
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Unwind at upscale open-top bistros perched right along the ridge line. Enjoy craft beers or fine wine paired with Asian fusion snacks while the setting sun paints the valley below in gorgeous shades of crimson.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Golden Hour Dining & Crafted Mocktails
                </div>
              </div>

              {/* Card 4: Cozy Wooden Attic Roasteries (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ☕
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Specialty Brews
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Artisanal Hideaway Roasteries & Bakery Hubs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Escape into cozy, attic-style cafes tucked just a few steps off the main walkways. These wood-accented sanctuaries feature comfortable reading corners, board game collections, and freshly roasted single-origin Indian coffees—perfect for passing a misty, rainy mountain afternoon.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Specialty Espresso Bars & Cozy Board-Game Nooks
                </div>
              </div>

              {/* Card 5: Comfort North Indian Dhaba Kitchens */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🫓
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Sher-e-Punjab & Local Grills
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Enjoy big, hearty meals at famous Mall Road staples. Feast on sizzling, butter-brushed tandoori rotis, creamy dal makhani, and classic spiced chicken tikkas that taste amazing in the chilly mountain air.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Hearty Mountain Tandoori Comfort
                </div>
              </div>

              {/* Card 6: Pure Vegetarian Heritage Spots */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥬
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Clean Veg Hill Dining
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For families looking for strict vegetarian kitchens, multiple highly-rated dining spots on Mall Road offer pristine, cozy indoor layouts serving everything from piping hot South Indian idlis to multi-tier Punjabi thalis.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Pristine Family-Friendly Vegetarian Circuits
                </div>
              </div>

            </div>

            {/* Culinary Timing Advisory Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/10 via-emerald-600/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-amber-900 font-bold">Mountain Dining Tip:</strong> Most iconic restaurants and cafés on Shimla's Mall Road take their final dinner orders by 10:00 PM as the pedestrian streets wind down. Snag a window seat by 7:30 PM to catch the beautiful lights twinkling across the surrounding hillsides!
                </p>
              </div>
            </div>

          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-blue-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/10 to-indigo-300/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🏔️ Himalayan Planner
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Shimla
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Analyze daily cost structures to navigate the colonial charm and mountain serenity of the Queen of Hills.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-blue-400/60 shadow-md hover:shadow-xl hover:shadow-blue-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg font-bold border border-blue-100 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      🎒
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Ridge Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Mountain Hiker
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for students and trekkers staying in homestays near Lakkar Bazaar or Shoghi.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹600 – ₹1,200</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚌 Local</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹200 – ₹400</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-blue-600 tracking-tight">
                    ₹1,200 – ₹2,400 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-blue-500 hover:border-blue-400 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-blue-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg font-bold border border-blue-100 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      ☕
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Mall Road Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Perfect for families preferring Mall Road hotels, café hopping, and comfortable taxi tours.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹7k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹3k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Cab</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-blue-600 tracking-tight">
                    ₹5,500 – ₹12k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-indigo-400/60 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold border border-indigo-100 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Premium
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Heritage Opulence
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Crafted for luxury heritage properties, private colonial-style suites, and high-end retreats.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹10k – ₹30k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹6k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-indigo-600 tracking-tight">
                    ₹15k – ₹40k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-blue-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-blue-800 font-black">Pro Tip:</strong> Take the UNESCO World Heritage toy train from Kalka to Shimla for breathtaking mountain views. It's the most iconic way to arrive in the city.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-blue-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Market Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Shopping in Shimla
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Explore the historic bazaars for artisanal woolens, traditional Himachali crafts, and mountain spices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧣
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Warm Heritage
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Himachali Shawls & Woolens
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover exquisite <span className="font-semibold text-gray-900">Kinnauri and Kullu shawls</span> in Lakkar Bazaar. Known for their intricate geometric patterns, these are a true symbol of Himachal heritage.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Authentic Mountain Weave
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🪵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Wooden Handicrafts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Lakkar Bazaar is world-famous for unique wooden items like walking sticks, keychains, and decorative home artifacts crafted from local wood.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Artisan Wood Crafts
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🫖
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    Himachali Spices
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Take home aromatic hill spices like dry apricots, walnuts, and special mountain herbs found in the traditional local markets.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Mountain Flavors
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧢
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Cultural Attire
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Traditional Caps (Topi)
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    The iconic <span className="font-semibold text-gray-900">Himachali cap</span> with colorful hand-woven borders is a perfect cultural souvenir, symbolizing the pride of the Pahari culture.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Heritage Cultural Icon
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🖌️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Tibetan Artworks
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find beautiful Tibetan paintings and prayer wheels that reflect the deep cultural intersection and spiritual vibe of Shimla.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Spiritual Artistic Vibe
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-blue-500/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-amber-900 font-bold">Shopping Tip:</strong> Lakkar Bazaar is the place to be for bargains! Don't be afraid to negotiate, especially for wooden souvenirs and woolens, but always check the quality of the wool before you finalize your buy.
                </p>
              </div>
            </div>
          </section>


          {/* 🚀 CALL TO ACTION */}
          <div className="mt-20 text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://himachaltourism.gov.in"
              className="inline-flex items-center gap-4 bg-sky-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(2,132,199,0.3)] hover:bg-sky-700 transition-all"
            >
              Start Your Journey <ArrowUpRight size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Reusable Modern Components ---

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all cursor-default">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-sky-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 group hover:border-sky-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-sky-400 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-sky-100">{value}</span>
  </div>
);

export default Shimla;