import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Info,
  Camera,
  ExternalLink,
  TreePine,
  Landmark,
} from "lucide-react";

const MountAbu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR6Wxe3kUF-Liy3tn6bJ977_DVOx50X8S4TsEOrHhvciI1Q3ACtKZCO3Fachu5-xNa-1rB1Tu9uILdCcLc9bdxiX_8&s=19"
          alt="Mount Abu"
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
            className="text-4xl font-extrabold text-center text-green-700 mb-4"
          >
            🌄 Mount Abu – The Only Hill Station of Rajasthan
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Nestled in the **Aravalli Range**, Mount Abu is Rajasthan’s
            only hill station. Known for its cool climate, scenic lakes,
            spiritual temples, and lush greenery, it offers a peaceful
            escape from the desert heat.
          </motion.p>

          {/* Introduction Section: Mount Abu */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

            {/* Advanced Radial Background Glows (Mist-Covered Peaks & Serene Oasis Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>⛰️</span> Highland Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Discover Mount Abu
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                Rajasthan's solitary hill station—a lush, mist-shrouded granite oasis tucked inside the Aravalli Range, offering dramatic rocky horizons and legendary marble marvels.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🍃</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Verdant Oasis of the Desert State
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Mount Abu, sitting at an altitude of over 1,200 meters in the ancient Aravalli Range, stands as a refreshing, cool sanctuary from Rajasthan’s sweeping sun-drenched plains. Historically serving as a royal summer retreat, it features dense forests, pristine lakes, and bizarre rock formations.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Beyond its panoramic eco-trails, the mountain carries immense architectural and spiritual weight, serving as home to the otherworldly <span className="font-semibold">Dilwara Temples</span> and the global headquarters of the Brahma Kumaris.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-emerald-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-emerald-600">1,722m</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Highest Peak (Guru Shikhar)</p>
                  </div>
                  <div className="bg-sky-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-sky-600">11th Cent</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Dilwara Temple Roots</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: Dilwara Jain Temples */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🏛️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    The Marvelous Dilwara Temples
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Step into a world of pure white stone poetry. The <span className="font-semibold">Dilwara Jain Temples</span> are internationally renowned for their impossibly intricate marble carvings, delicate ceiling domes, and ornate pillars that rival any sculpture on Earth.
                  </p>
                </div>

                {/* Card 2: Nakki Lake */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    🛶
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    The Mystical Nakki Lake
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Cruise across a sacred, high-altitude lake. Legend says <span className="font-semibold">Nakki Lake</span> was dug out by the gods using their fingernails (nakh). Rent a paddleboat, walk the cobblestone lakeside path, and gaze up at the iconic Toad Rock.
                  </p>
                </div>

                {/* Card 3: Guru Shikhar Summit */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🦅
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Guru Shikhar Peak
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Stand at the highest point of the Aravallis. Drive up to <span className="font-semibold">Guru Shikhar</span> to breathe in crisp mountain air and view an endless, sweeping panoramic grid of the valley below, home to an ancient temple of Lord Dattatreya.
                  </p>
                </div>

                {/* Card 4: Sunset Point Vistas */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    🌅
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Sunset Point Carnivals
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Watch the sun dip behind the rugged horizon. Join the lively evening crowds at Sunset Point, where the sky transitions through vivid crimson and amber gradients over lush green mountain ridges.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-sky-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Mount Abu is a surprising, high-altitude sanctuary. It expertly balances the serene, cool nature of an alpine escape with the monumental, heavy craftsmanship of legendary ancient marble structures, offering an entirely unique break from the typical desert trail.
                </p>
              </div>
            </div>

          </section>



          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Mount Abu
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbyKIr-dDJZy8Nc0zJggZ0sQPJbuY-x1ztVfrozdLYVx4ODaesGARj3i6Up60BZoWjhOUDBKKdIiXU-Wg_0xlHSau54mxMvL6hXqbY1rrh_X-aMFRgDOMy_YGXnh3JY3BUMEr3=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoM2LsCIt2P0j0Ud3zJEziwPy-gWXHSCqu-REqsPU2eyIFEsEY6cEcshRpMf5BAp4PboREpfx7sKBPjajBfwJ3rkRFfRrvPV1qJhC9PQklvoDxL-N_Ah9qBfTxTn_Nqgi2VRHQr=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGYwxcq2OpMs0T9J_todyitNXY7V9KO40WZWXeGtrGk54uf_68N9Xe4MfKj8hMm-7rp28EgmRH9TE8SoDW6Aw6h1sVMkn4JG-4lJapPDHizxKC6Zcq_zaxwD5vyvCFBwEN2PDMrQ=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ3bxItjMqC7euH7A_HFMATyw5-T1dfdB7F-_8BBHOUO50Kdmf5hcLPnpfnZjeOT0hm4EfhgKhzoXCZ34n_Yt7t5Sw&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerD4tnJG2SRJEmerhSeyP4uK7pqv9tOybXpfYTBK5R7d_xB0-EGg3QtaUgC1AczOJEPSukQ0x_yoP5grATZSNDrIsby6MzZhqTvPsPDQPNZpAD_rT6c2aNasMy89M471QiWXhko=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT6gjqp3rk_ESP0cMq4q2dweQXIXYlAAzbEk0eil1Vjg9tJzjljPtE9aVGVy4iSme7y6vPQAOoZ8wwuSLYX4vmeW18&s=19",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Mount Abu"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

            {/* Advanced Radial Background Glows (Highland Mist & Dilwara Marble Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-indigo-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                ⛰️ Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Best Time to Visit Mount Abu
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your perfect highland escape aligned with crisp mountain winters, lush monsoon mist, or cool summer reprieves.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
                    🌲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Aravali Highland Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Mount Abu offers an exceptional and crisp holiday cycle from <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these winter months, temperatures comfortably range between 12°C - 25°C, occasionally dipping close to freezing at night, making it perfect for cozy bonfire setups.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this peak block, exploring the stunning marble architecture loops of <span className="font-semibold text-gray-900">Dilwara Temples</span>, boating across Nakki Lake, and tracking sunsets from Toad Rock feels completely refreshing.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-indigo-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
                    <strong className="text-emerald-950">Pro Tip:</strong> Want to catch the town at its most festive? Plan your loop around late December to witness the vibrant <strong className="text-emerald-950">Winter Festival</strong>, featuring cultural folk dances, traditional music concerts, and gorgeous deepam processions across Nakki Lake.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Winter Peak */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ❄️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
                        Crisp Winter Peak (October – March)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The grand peak cycle. Sharp, chilly night breezes with pleasant sunny days. Ideal for hiking to Guru Shikhar, outdoor plateau picnics, and exploring wildlife sanctuaries.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Highland Peak
                  </span>
                </div>

                {/* Season 2: Summer Reprieve */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
                        Cool Summer Escape (April – June)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        While the rest of Rajasthan scorches past 40°C, Mount Abu stays pleasant under a 33°C ceiling. Perfect for escaping the plains, evening strolls, and relaxing lake breezes.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Plains Escape
                  </span>
                </div>

                {/* Season 3: Monsoon Mist */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
                        Misty Monsoons (July – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The hill station gets covered in lush green loops and heavy mountain mist. Waterfalls like Dhrudhiya waterfalls revive completely, creating an incredibly romantic, off-beat vibe.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Lush Mist
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Best Hotels & Resorts Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

            {/* Aravalli Heritage Background Glows (Emerald Canopy & Mist Grey) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-500/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                ⛰️ The Aravalli Mist Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Best Hotels & Heritage Resorts in Mount Abu
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From British-era colonial bungalows tucked inside dense forest groves to luxury mountain retreats overlooking the serene Nakki Lake.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Colonial Heritage Bungalows (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏡
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Colonial Bungalow Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    British-Era Heritage Bungalows & Forest Lodges
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Experience the quiet, misty charm of a bygone era. High-end heritage stays like <span className="font-semibold text-gray-900">Connaught House</span> preserve the aesthetic of colonial-era living with deep wooden ceilings, expansive cozy verandas opening into thick Aravalli forests, and roaring indoor fireplaces perfect for the cool hill nights.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-700 tracking-wider uppercase">
                  Cozy Indoor Fireplaces & Deep Veranda Forest Vistas
                </div>
              </div>

              {/* Card 2: Nakki Lakefront Luxury */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-slate-500/30 shadow-lg hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-xl flex items-center justify-center border border-slate-100/70 group-hover:bg-slate-700 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🚣
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-slate-700 transition-colors duration-200">
                    Prime Lakefront Mountain Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Anchor your stays right along the vibrant shoreline of Nakki Lake. Elite boutique properties provide effortless boat-deck access, terraced dining gardens, and front-row seats to the daily hustle of the Mount Abu town center and local bazaars.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-slate-600 tracking-wider uppercase">
                  Lakefront Terraced Dining & Central Bazaar Walkways
                </div>
              </div>

              {/* Card 3: Royal Rajput Resorts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    👑
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Royal Rajputana Hill Palaces
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For an immersive regal retreat, stay in palaces like <span className="font-semibold text-gray-900">Hotel Hilltone</span>. These grand properties feature massive regal courtyards, heritage architecture with intricate Rajasthani carvings, and beautiful cliffside gardens.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Heritage Stone Carvings & Regal Cliffside Gardens
                </div>
              </div>

              {/* Card 4: Modern Boutique Wellness Spas (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧘
                    </div>
                    <span className="text-xs font-bold bg-slate-100/60 text-slate-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Wellness Retreats
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Cloud-Top Boutique Wellness Spas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Elevate your wellness itinerary with eco-friendly boutiques located on the highest crests of the hill station. These offer open-air yoga decks engulfed in morning clouds, heated indoor mineral pools, and panoramic viewing balconies looking over the vast, undulating Aravalli landscapes.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Mist-Engulfed Yoga Decks & Heated Indoor Mineral Plunge Pools
                </div>
              </div>

              {/* Card 5: Smart Transit Group Villas */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-slate-500/30 shadow-lg hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-xl flex items-center justify-center border border-slate-100/70 group-hover:bg-slate-700 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-slate-700 transition-colors duration-200">
                    Smart Group Transit Villas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Optimized for large families visiting for long weekend getaways. These villas offer multiple interconnected suites, dedicated BBQ pits for cold-night outdoor social dining, and rapid shuttle access to the Delwara Temples.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-slate-600 tracking-wider uppercase">
                  Outdoor Social BBQ Pits & Fast Shuttle Transit Hubs
                </div>
              </div>

            </div>
          </section>


          {/* Restaurants & Cafes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

            {/* Culinary Background Tints */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-950/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-emerald-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🥗 Fresh Garden Harvests & Hillside Delights
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Best Restaurants & Food Experiences in Mount Abu
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From cozy forest cafes serving steaming hot mountain comfort food to traditional Gujarati-Rajasthani thali houses perfect for long, relaxed lunches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Sunset Point Cafes (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌅
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Cloud-Kissed Dining
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    Panoramic Sunset-Point Cafes
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Capture the legendary Mount Abu sunset while enjoying high-end café fare. Establishments perched near the sunset viewing platforms offer elevated terrace seating, serving fresh hot chocolate, artisanal fusion pizzas, and perfectly brewed mountain teas while the horizon burns in hues of gold and amber.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
                  Terrace Sunset Vistas & Hot Artisan Mountain Teas
                </div>
              </div>

              {/* Card 2: Authentic Gujarati Thali Houses */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍱
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Traditional Gujarati-Rajasthani Thali Havels
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Mount Abu is famous for its massive, unlimited thali service. Dine at legendary spots like <span className="font-semibold text-gray-900">Mulberry Tree</span> or traditional dhabas that serve authentic, ghee-laden Dal Dhokli, crispy Papad Churi, and mouth-watering Gujarati Farsan.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Unlimited Ghee-Laden Dal Dhokli & Crispy Papad Churi
                </div>
              </div>

              {/* Card 3: Colonial Forest Grills */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🔥
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Colonial-Era Wood-Fired Grills
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Enjoy quiet, forested dining at heritage-inspired outposts. These restaurants focus on open-air wood-fire ovens, dishing out slow-roasted vegetable platters, herb-crusted potatoes, and farm-fresh soups that capture the crisp essence of the hills.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Open-Air Wood-Fire Ovens & Crisp Farm-Fresh Forest Soups
                </div>
              </div>

              {/* Card 4: Street Snack Havens (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌽
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Hillside Street Bites
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Bazaar Street-Food & Hot Corn Stalls
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Wander the central bazaars for classic hill station street snacks. From charcoal-roasted masala corn-on-the-cob to steaming hot *Poha* and crispy *Kachoris* served with spicy green chutneys, these bustling stalls are the heartbeat of the town's evening social life.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Charcoal-Roasted Masala Corn & Crispy Spicy Kachori Stalls
                </div>
              </div>

              {/* Card 5: Artisan Bakery Corners */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍪
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Boutique Artisan Bakery Bites
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Finish your dining journey at cozy, artisan-owned bakeries. They serve small-batch cookies, decadent plum cakes, and fresh forest-berry pastries that are perfect for quiet afternoon tea breaks.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Decadent Small-Batch Plum Cakes & Fresh Berry Pastries
                </div>
              </div>

            </div>

            {/* Travel Guide Tip Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600/10 via-emerald-600/5 to-transparent border border-orange-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-orange-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-orange-900 font-bold">Mount Abu Hill Transit Tip:</strong> Navigating Mount Abu's narrow, winding forest roads during the peak tourist season can be slow. For a stress-free experience, leverage the local electric cart services within the town center to zip between Nakki Lake and the primary bazaar hubs, leaving your main vehicle parked safely at your resort!
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
                🍃 Hill Station Retreat
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Mount Abu
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Analyze daily cost structures for a serene escape to Rajasthan's only hill station, famous for its lush forests and cool climate.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-emerald-400/60 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      🎒
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Hill Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for students or budget travelers seeking hostels near Nakki Lake and local street food.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1.8k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹700</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚶 Local</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹100 – ₹300</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-emerald-600 tracking-tight">
                    ₹1,300 – ₹2,800 <span className="text-xs font-bold text-gray-400">/ day</span>
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
                      ⛰️
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Nature Enthusiast
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for comfortable hotel stays, scenic viewpoints, and visits to Delwara Temples.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹6k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.2k – ₹2.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Cab</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-emerald-600 tracking-tight">
                    ₹5,200 – ₹10.5k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-teal-400/60 shadow-md hover:shadow-xl hover:shadow-teal-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-lg font-bold border border-teal-100 shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Comfort
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Serene Luxury
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium resorts with panoramic forest views, private nature guided tours, and fine dining.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹12k – ₹25k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2.5k – ₹5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹6k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-teal-600 tracking-tight">
                    ₹17k – ₹36k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-emerald-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-emerald-800 font-black">Pro Tip:</strong> Sunset at Sunset Point is iconic, but it can get very crowded. Try visiting the more secluded viewpoints nearby or go early to secure a good spot.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-purple-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-purple-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-emerald-50 border border-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Hillside Treasures
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950">
                Shopping in Mount Abu
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Discover handicrafts, tribal art, and local specialty goods in the cozy markets around Nakki Lake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧶
                    </div>
                    <span className="text-xs font-bold bg-purple-100/60 text-purple-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Local Heritage
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
                    Nakki Lake Market
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    The heart of local shopping—explore boutiques filled with <span className="font-semibold text-gray-900">colorful textiles, Rajasthani crafts, and handmade jewelry</span>.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Central Hub
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏺
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Handicrafts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Browse through local stalls for <span className="font-semibold text-gray-900">intricate woodwork, sandstone carvings, and brass curios</span> typical of the Sirohi region.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Artisan Decor
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    👗
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Rajasthani Attire
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find beautiful <span className="font-semibold text-gray-900">Bandhani sarees, Odhnis, and traditional lehengas</span> reflecting vibrant local traditions.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Apparel & Textiles
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🍯
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Local Produce
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Specialty Foods
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Take home local specialties like <span className="font-semibold text-gray-900">forest honey, fresh seasonal preserves, and regional snacks</span> available at dedicated gourmet shops.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Gourmet Finds
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ✨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Silverware
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore curated collections of <span className="font-semibold text-gray-900">silver artifacts and handcrafted jewelry</span> offered by artisan family shops.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Metalwork
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 via-emerald-500/5 to-transparent border border-purple-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-purple-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-purple-900 font-bold">Shopping Tip:</strong> Quality is key! When buying handicrafts or jewelry, look for the 'Rajasthan State Handloom' tags for genuine artisanal products.
                </p>
              </div>
            </div>
          </section>
          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://tourism.rajasthan.gov.in/mount-abu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold"
            >
              Visit Rajasthan Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MountAbu;
