import React from "react";
import { motion } from "framer-motion";
import {
  MapPin, Mountain, Snowflake, Plane,
  Train, Compass, Coffee, Camera, Utensils,
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Pushkar = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-pink-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQWSSpQylqZRC9WbqvHLvsKgWnhM1PUv1OpB73azKuJ470d80hzJrA3U-aG0iuesE3IGTP7BOhELZeKS3VrKYWlXSI&s=19"
            alt="Pushkar Lake"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Pushkar
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">

          <header className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-pink-950 tracking-tighter leading-none mb-6 italic"
            >
              Pushkar
            </motion.h1>
            <p className="text-pink-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Holy City of Temples
            </p>
            <div className="h-1.5 w-20 bg-pink-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Pushkar is one of the oldest cities in India, famous for its sacred lake, the
              <span className="text-pink-700 font-bold italic"> Brahma Temple</span>, and vibrant annual fairs.
            </motion.p>
          </header>

          {/* Introduction Section: Pushkar */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

            {/* Advanced Radial Background Glows (Sacred Oasis & Golden Dunes Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>📿</span> Spiritual Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Discover Pushkar
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Sacred Desert Oasis—a timeless, mystical town where ancient lakeside ghats, the world's rare Brahma temple, and golden sands form a soulful cultural retreat.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🧘‍♂️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A Sacred Haven Curled Around a Mystic Lake
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Pushkar, cradled by the rugged Aravalli hills in Rajasthan, is one of the oldest and most revered pilgrimage sites in India. According to legend, the town bloomed where a lotus flower dropped from the hands of Lord Brahma. At its heart lies a serene, holy lake bordered by 52 white-washed bathing ghats.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Pushkar gracefully balances its deep spiritual energy with a vibrant bohemian charm. From the meditative chants of evening *Aartis* to the iconic, technicolor energy of its annual Camel Fair, this car-free core offers an immersive journey into traditional folklore and desert slow-living.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">52</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Sacred Bathing Ghats</p>
                  </div>
                  <div className="bg-rose-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-rose-600">Rare</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">14th-Cent. Brahma Temple</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: Pushkar Lake & Ghats */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🌊
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Mystical Holy Lake
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Walk barefoot along the stone steps of <span className="font-semibold">Varaha or Brahma Ghat</span>. Watch the water reflect the blue sky while temple bells and soft hymns echo across the lake at dawn and twilight.
                  </p>
                </div>

                {/* Card 2: Jagatpita Brahma Temple */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    🛕
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Jagatpita Brahma Shrine
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Visit one of the very few temples globally dedicated to the Creator. Marked by a distinct bright red spire and a historic marble courtyard, it stands as the crown jewel of Pushkar's sacred architecture.
                  </p>
                </div>

                {/* Card 3: Thar Desert Dunes & Camel Safaris */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    🐫
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Golden Desert Safaris
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Head out to the surrounding desert tracts. Ride over the rolling sandy ripples on a camel or an open 4x4 jeep to enjoy traditional Kalbelia folk performances around a campfire under a starlit night sky.
                  </p>
                </div>

                {/* Card 4: Savitri Temple Ropeway Summit */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    🌅
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Savitri Temple Vistas
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Ride the scenic cable car up the steep <span className="font-semibold">Ratnagiri Hill</span>. The hilltop shrine provides a glorious, sweeping panoramic view of the entire valley basin, especially beautiful during golden hour.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-rose-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Pushkar is an incredibly magnetic, slow-paced destination. It effortlessly bridges ancient Indian ritual traditions with global rooftop cafes and tranquil desert safaris—making it a beautiful cultural retreat for conscious, artistic globetrotters.
                </p>
              </div>
            </div>

          </section>



          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-pink-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerMa37ptF3uWaYqlRXcb-SEOGk2Ndu0vFMeWtkONLBi2lFRkdcaMcQMITI_UajeOcm1Pl12zGlPOvNRuHhZaTtb6TS86f-USh5BGl0EcOiwxmIIAfvkXNRuYPZwv8_A_Fswz-n3=w675-h390-n-k-no", title: "Brahma Temple" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJu5Dzp3hB4Cz2NxbzEHesx-m11YY4sFL8QMZRCqnkYy4QbYd6EG1y_3TUsRho6fGyy5cmK5WqOrdn6tZjhTWClG5eyYHn7ke02ZudJnEF5_UUsttoaTcrE9aKypm-dKkrrHyi=w675-h390-n-k-no", title: "Pushkar Lake" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepVtvxg9wKoUtSydvpattTlMzKX4LCCOFBYnNkTKtQFEizVFZfj4X9LAWO03ftND1NNzuIwLhXzVeLbeQccfM8ubiQNpOsupgx4R4dv_7jAXOn4CongwLW7V_9LP58AS3Jzg2BZsQ=w675-h390-n-k-no", title: "Savitri Temple" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSAEH7mk0hrQTss2lcxIOiyZk7MTYCS1Q5cUXQ2Ahbtnw_T17bEvHI4ONp-dctZ9OerenVF_81fnfVvfU6T-MdzNhk&s=19", title: "Pushkar Camel Fair" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQpntKA0lh1zczMoUcV-YIsmSYR7jQY-e5Se8MW3sDDFxD5aMC54oUy6T7-NrV9PguKXcZxslPVbvgP5mUcT1tePUU&s=19", title: "Main Bazaar" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep21SsZ7o3FRcrTBkAJd4TifsgVZjlSPVLPeA8ZSnQeUdSpyVBW5XoYIk_N02xaseEK4MW8E7gfEVv4INLK10d7yEyDbR7UrsaJN1VKS0QJAFU6V4gD6L1ZhWx-nG5cJysHZQkP=w675-h390-n-k-no", title: "Sunset Views" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Pushkar - ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Advanced Radial Background Glows (Sacred Oasis & Golden Desert Dune Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-cyan-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🐪 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Time to Visit Pushkar
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your magical desert escape to the sacred lake town aligned with pleasant winter breezes, spectacular hot air balloons, and iconic camel cultural loops.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
                    🕉️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Mystic Desert Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Pushkar unveils its most beautiful spiritual colors, pleasant weather, and desert charm from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. As the harsh summer sun fades, the desert climate cools down gracefully, offering pleasant daytime sun between 15°C - 30°C and crisp, chilly desert nights.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this premium tourist cycle, exploring the incredibly rare <span className="font-semibold text-gray-900">Jagatpita Brahma Temple</span>, watching the surreal sunset over the 52 holy lake ghats, or taking a quiet camel safari ride across the ripple dunes feels deeply spiritual.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-cyan-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
                    <strong className="text-amber-950">Pro Tip:</strong> Looking to witness Pushkar’s ultimate global grand loop? Plan your trip around October or November to match the iconic <strong className="text-amber-950">Pushkar Camel Fair</strong> (Kartik Purnima). The sleepy town transforms into a sea of colorful turbans, thousands of camels, desert sports, and hot air balloons.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Crisp Desert Winters */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ⛺
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
                        Chilly Desert Winters (October – February)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The absolute peak travel window. Enjoy warm sunny days perfect for cafe hopping and market exploration, followed by cold starlit nights perfect for sand dune camping loops.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Desert Peak
                  </span>
                </div>

                {/* Season 2: Quiet Pre-Summer Transition */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-cyan-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌅
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-cyan-700 transition-colors duration-200">
                        Mellow Spring Sunsets (March)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The weather shifts slightly warmer but remains highly pleasant for evening aartis. A fantastic low-crowd window for spiritual travelers to enjoy peaceful lake meditations.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-cyan-100/70 text-cyan-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Mellow Spring
                  </span>
                </div>

                {/* Season 3: Scorching Desert Summer & Monsoons */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
                        Scorching Heat & Dry Monsoons (April – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Summers are intensely hot, with temperatures spiking past 42°C. Monsoons bring slight humidity and scanty rainfall. Avoid peak daytime loops if traveling during this phase.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Off Season
                  </span>
                </div>

              </div>
            </div>

          </section>
          {/* Best Stays & Desert Retreats Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

            {/* Desert Background Glows (Saffron & Lake-Blue) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🌅 The Rose Garden & Sacred Lake Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Bohemian Desert Stays & Sacred Retreats
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From luxury tented desert camps overlooking the Aravalli dunes to heritage havelis just steps away from the tranquil, ancient Pushkar Sarovar.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Luxury Desert Glamping (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ⛺
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Bohemian Luxury Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    Luxury Desert Glamping Camps
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Experience the desert under the stars. These luxury camps offer plush bedding, private fire-pits, and evening folk-music performances right on the dunes, perfect for the true Pushkar experience.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
                  Stargazing Fire-Pits & Evening Desert Folk Music
                </div>
              </div>

              {/* Card 2: Lake-View Heritage Havelis */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🕌
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Lake-View Heritage Havelis
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Stay in the heart of the holy city. These restored havelis provide terraces that overlook the Pushkar Lake, allowing you to witness the morning and evening aartis in absolute tranquility.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Morning Aarti Terraces & Ancient Sarovar Views
                </div>
              </div>

              {/* Card 3: Rose-Garden Boutique Stays */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌹
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Rose-Garden Boutique Lodges
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Pushkar is the 'Rose Garden of Rajasthan'. Stay in boutique lodges nestled within aromatic rose farms, where the scent of fresh blossoms greets you every morning.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Aromatic Rose Farm Walks & Garden-Fresh Breakfasts
                </div>
              </div>

              {/* Card 4: Modern Boutique Stays (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ✨
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Modern Bohemian
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
                    Modern Bohemian Boutique Suites
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    A blend of Rajasthani art and modern chic. Perfect for travelers seeking high-speed connectivity, aesthetic yoga studios, and easy access to Pushkar’s vibrant street bazaars.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Yoga Studio Access & Street Bazaar Connectivity
                </div>
              </div>

              {/* Card 5: Camel-Safari Basecamps */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🐪
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Camel Safari Adventure Hubs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For the explorer in you. Offering custom camel-safari packages to deep-desert villages and expert local guides to navigate the shifting sands around Pushkar.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Custom Camel Safari Packages & Deep-Desert Tours
                </div>
              </div>

            </div>
          </section>

          {/* Culinary Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-600 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-gray-950">Pushkar’s Vegetarian Soul</h2>
              <p className="text-gray-600 mt-3 text-lg">Taste the divine: Malpua-Rabri, spicy Kachori, and authentic Rajasthani Thali.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Culinary Cards here... */}
            </div>
          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-400/10 to-orange-400/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🌹 Desert Sanctuary
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Pushkar
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Experience the mystical allure of this holy desert town, home to the only Brahma temple and vibrant ghats.
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
                      Backpacker Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Desert Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Perfect for hostels, local Rajasthani 'thali' joints, and exploring the town on foot or rented cycles.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹500 – ₹900</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹250 – ₹500</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚲 Local</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹100 – ₹200</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹850 – ₹1,600 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-rose-500 hover:border-rose-400 shadow-xl hover:shadow-2xl hover:shadow-rose-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-rose-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
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
                    Cultural Traveler
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for boutique heritage hotels, guided city walking tours, and diverse cafe hopping.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Tours</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1.5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹3,800 – ₹7,500 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-orange-400/60 shadow-md hover:shadow-xl hover:shadow-orange-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg font-bold border border-orange-100 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md font-bold">
                      Royal Retreat
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Desert Luxury
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium desert camps with pool, private camel safaris, and upscale fine-dining heritage experiences.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹7k – ₹15k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Fine</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2.5k – ₹5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🐪 Safari</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹6k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹12k – ₹26k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-rose-500/10 via-orange-500/5 to-transparent border border-rose-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-rose-800 font-black">Pro Tip:</strong> Pushkar is a strictly vegetarian town. Dress modestly when visiting the ghats and the Brahma temple. Sunset at the 'Sunset Point' near the hills is non-negotiable!
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-purple-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Vibrant Bazaars
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Shopping in Pushkar
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Pushkar's streets are a kaleidoscope of color, offering everything from bohemian fashion to intricate Rajasthani crafts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧥
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Boho Style
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Rajasthani Textiles
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore a vast array of <span className="font-semibold text-gray-900">colorful embroidered jackets, block-print scarves, and bohemian-style bags</span> that define the Pushkar look.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Handmade Fashion
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    💍
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Silver Jewelry
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Pushkar is a haven for <span className="font-semibold text-gray-900">intricate silver ornaments, tribal necklaces, and funky boho-chic trinkets</span>.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Tribal Ornaments
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌹
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Pushkar Rose Products
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Being the 'Rose Garden of Rajasthan', pick up <span className="font-semibold text-gray-900">authentic rose water, essential oils, and dried rose petal treats</span>.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Local Essence
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏺
                    </div>
                    <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Heritage Crafts
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
                    Rajasthani Leather Crafts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover high-quality <span className="font-semibold text-gray-900">leather journals, traditional 'jutti' footwear, and handcrafted bags</span> featuring authentic Rajasthani patterns.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Artisan Leather
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    📿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Spiritual Souvenirs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Browse for <span className="font-semibold text-gray-900">singing bowls, incense, and various spiritual artifacts</span> often used in local yoga and meditation practices.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Zen Items
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-orange-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-rose-900 font-bold">Shopping Tip:</strong> Bargaining is the soul of the main bazaar! Don't be afraid to quote a lower price, especially for textiles and jewelry. Walk into the smaller side lanes for more unique, less commercialized items.
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

// --- Reusable Components ---
const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-pink-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const CulinaryItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-pink-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-pink-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-pink-100">{value}</span>
  </div>
);

export default Pushkar;