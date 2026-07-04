import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Coffee, Info, Waves, Sparkles } from "lucide-react";

const Darjeeling = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://static.toiimg.com/photo/msid-109270441,width-96,height-65.cms"
          alt="Darjeeling"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1200&q=80")
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
            🍃 Darjeeling – Queen of the Hills
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Nestled in the **Himalayan foothills**, Darjeeling is famous for its **tea gardens**,
            **stunning viewpoints**, and **pleasant climate**. A perfect blend of nature, culture, and adventure.
          </motion.p>

          {/* Introduction Section: Darjeeling */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

            {/* Advanced Radial Background Glows (Himalayan Tea Highlands Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🚂</span> Destination Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Discover Darjeeling
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Queen of the Hills, where emerald-green tea estates paint rolling slopes beneath the majestic sunrise of Mount Kanchenjunga.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🍃</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Crown Jewel of West Bengal
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Darjeeling, nestled in the lesser Himalayas at a stunning altitude of 2,042 meters, is a timeless mountain escape. It is globally celebrated for its sprawling tea plantations, colonial-era heritage, and unparalleled views of the world's third-highest peak.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  A beautiful melting pot of Nepali, Tibetan, and Bengali cultures, Darjeeling charms travelers with its crisp mountain breeze, winding narrow ridges, and the nostalgic whistle of its vintage steam engines.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-emerald-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-emerald-600">2,042m</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Town Altitude</p>
                  </div>
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">86+</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Active Tea Estates</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: Tiger Hill Sunrise */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🌅
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Tiger Hill Sunrise
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    An unforgettable dawn experience. Stand atop <span className="font-semibold">Tiger Hill</span> at 4:00 AM to watch the first rays of the sun paint the snowy twin peaks of Mt. Kanchenjunga in surreal shades of pink and fiery gold.
                  </p>
                </div>

                {/* Card 2: UNESCO Heritage Toy Train */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🚂
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    The Vintage Toy Train
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Ride through living history. The UNESCO-listed <span className="font-semibold">Darjeeling Himalayan Railway</span> features 19th-century steam loops chugging gracefully past local mountain markets and the iconic Batasia Loop garden.
                  </p>
                </div>

                {/* Card 3: Premium Tea Tasting */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    ☕
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    The Champagne of Teas
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Savor the ultimate aromatic luxury. Walk through geometric slopes at Happy Valley Tea Estate, interact with local pluckers, and sip on authentic, globally coveted muscatel-flavored <span className="font-semibold">Darjeeling First Flush tea</span>.
                  </p>
                </div>

                {/* Card 4: Ghoom & Tibetan Culture */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    ☸️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Spiritual Ghoom Heritage
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Explore serene ancient roots. Visit the historic <span className="font-semibold">Yiga Choeling (Ghoom) Monastery</span> built in 1850, home to a massive 15-foot clay Maitreya Buddha statue and beautiful, multi-colored prayer wheels.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-emerald-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Darjeeling is a sensory masterclass. It effortlessly combines the nostalgia of British-era colonial clubs and vintage trains with pristine Himalayan views and world-class tea tasting, creating a deeply relaxing, premium highland experience.
                </p>
              </div>
            </div>

          </section>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Darjeeling
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4">
              {[
                "https://hikerwolf.com/wp-content/uploads/2020/04/Darjeeling-toy-train-route.jpg",
                "https://www.thelostpassport.com/wp-content/uploads/2020/08/Darjeeling-Tea-Fields.jpg",
                "https://www.dreamtravelyaari.com/admin/img/uploads/blog/1750850617_88639-Top-10-Places-to-Visit-in-Darjeeling-2025.webp",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmBQTgb4BV86-IiwnFQpG3J4UGR8xi8xpew&s",

              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Darjeeling"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

            {/* Advanced Radial Background Glows (Mist & Tea Garden Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🍃 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Best Time to Visit Darjeeling
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your perfect Himalayan holiday aligned with clear Kanchenjunga views and refreshing tea loops.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
                    🏔️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Himalayan Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Darjeeling shines brightest in two specific seasons: the crisp spring/summer from <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">March to May</span> with temperatures around 10°C - 20°C, and the golden autumn/winter from <span className="font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">October to December</span> when skies open up for crystal-clear mountain views.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During these times, iconic spots like the <span className="font-semibold text-gray-900">Tiger Hill Sunrise point</span>, Batasia Loop, and the legendary Toy Train tracks are perfect for heavy exploration and photography.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
                    <strong className="text-emerald-950">Pro Tip:</strong> Want to capture the mystical fog rolling over sprawling tea leaves without tourist rush? Early October or late February offer excellent weather transitions with cheaper stay rates.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Spring & Summer */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌸
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
                        Spring / Summer (March – May)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Extremely pleasant mountain climate. Absolute goldmine for rhododendron blooms, fresh tea harvesting views, and escaping plains' scorching heat waves.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Peak Holiday
                  </span>
                </div>

                {/* Season 2: Autumn & Winter */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ❄️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
                        Autumn / Winter (October – February)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Chilly winds and clear blues. Best window for uninterrupted Kanchenjunga peaks, clear sunrise loops, and enjoying local warm thukpa bowles.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Clear Horizons
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
                        Monsoon (June – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Heavy Eastern Himalayan showers. High risk of mist-blocked routes and landslides, but the valley turns dramatically green and resorts slash prices.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    High Rainfall Risk
                  </span>
                </div>

              </div>
            </div>

          </section>


          {/* Best Hotels Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">

            {/* Advanced Radial Background Glows (Misty Tea Estates & Alpine Horizon) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-teal-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🏨 Accommodation Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
                Best Hotels in Darjeeling
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Handpicked colonial retreats, panoramic ridge-view hotels, and cozy hill-station getaways.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Luxury Resorts (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      👑
                    </div>
                    <span className="text-xs font-bold bg-teal-100/60 text-teal-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Colonial Luxury
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                    Vintage Colonial Heritage Properties
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Step back into British-era opulence at legendary landmarks like <span className="font-semibold text-gray-900">Windamere Hotel</span> and <span className="font-semibold text-gray-900">Mayfair Darjeeling</span>. Unmatched choices for luxury purists, boasting stone fireplaces, vintage wooden library setups, classic English high-tea courtyards, and grand heritage suites facing the misty hillside ridges.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Royal British Legacy & Luxury
                </div>
              </div>

              {/* Card 2: Premium Tea Estate Stays */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌱
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Boutique Tea Estates
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Immerse yourself directly within thousands of rolling emerald bushes at ultra-premium retreats like <span className="font-semibold text-gray-900">Glenburn Tea Estate</span>. These offer bespoke bungalow living, curated factory processing loops, and private glass balconies overlooking the deep valley slopes.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Lush Plantation Retreation
                </div>
              </div>

              {/* Card 3: Budget Backpackers */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    💰
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Social Hostels & Homestays
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Highly dynamic, pocket-friendly setups situated around the winding slopes near <span className="font-semibold text-gray-900">Jalapahar Road</span>. Excellent communities for solo travelers, remote workers, and backpackers wanting vibrant common rooms and authentic local Nepalese hospitality.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Backpacker & Community Centric
                </div>
              </div>

              {/* Card 4: Kanchenjunga View Hotels (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏔️
                    </div>
                    <span className="text-xs font-bold bg-cyan-100/60 text-cyan-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Prime Location
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
                    Mall Road & Kanchenjunga Facing Stays
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Wake up straight to the gold-infused snow tips of the world's third-highest peak. Premium properties like <span className="font-semibold text-gray-900">The Elgin</span> and boutique stays along <span className="font-semibold text-gray-900">The Chowrasta (Mall Road)</span> offer absolute immediate access to local walking zones, fully insulated luxury frameworks, and private viewing decks that capture the incredible early morning clouds.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
                  Alpine Horizon Views
                </div>
              </div>

              {/* Card 5: Mid-Range Valley Hotels */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏢
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Mid-Range View Hotels
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Highly reliable, value-packed options like <span className="font-semibold text-gray-900">Summit Hermon</span> and properties near Gandhi Road. These deliver upscale modern heaters, large viewing windows, clean glass frameworks, and rich multi-cuisine buffet spreads perfect for family travelers.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Optimized Comfort & Value
                </div>
              </div>

              {/* Card 6: Exclusive Private Villas */}
              <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center shrink-0 border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🏡
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                      Independent Luxury Mountain Villas
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
                      Tailor-made for premium group getaways and corporate retreats. Spread gracefully across the serene pine belts of Kurseong or Ghum, these include dedicated indoor electric hearths, personalized local cook modules, large private parking lawns, and absolute boundary isolation.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
                  Complete Seclusion
                </span>
              </div>

            </div>

            {/* Smart Booking Advisory Glass Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-transparent border border-teal-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-teal-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-teal-900 font-bold">Booking Window Tip:</strong> Visiting during the high-demand autumn skies of October to November? Ensure you lock down your Kanchenjunga-facing hotel decks early to avoid heavy peak surge premiums and confirm fully functional radiator installations!
                </p>
              </div>
            </div>

          </section>


          {/* Restaurants Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

            {/* Dynamic Culinary Background Tints (Vintage Bakeries & Tea Rooms) */}
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
                Best Restaurants & Cafes in Darjeeling
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Savor everything from vintage British tea lounges to steaming authentic Himalayan kitchen plates.
              </p>
            </div>

            {/* Premium Bento Grid Arrangement */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Vintage Bakeries & Breakfast (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ☕
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Legendary Iconic Spots
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Vintage Colonial Bakeries & Tea Lounges
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Savor legacy breakfast platters at world-famous icons like <span className="font-semibold text-gray-900">Glenary's Bakery & Cafe</span> and <span className="font-semibold text-gray-900">Nathmulls Tea Lounge</span>. An absolute hill station obligation; spend your misty mornings diving into fresh apple strudels, warm cinnamon buns, loaded traditional English breakfasts, and fine First Flush Darjeeling teas.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Legacy Baking & Finest Tea Brewing
                </div>
              </div>

              {/* Card 2: Authentic Tibetan Comfort Food */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥟
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Kunga & Tibetan Comforts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Beat the mountain chill at legendary spots like <span className="font-semibold text-gray-900">Kunga Restaurant</span>. Unmatched setups for authentic hand-rolled cheese momos, steaming noodle hotpots, rich pan-fried Gyathuk, and thick comforting Tibetan soups.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Himalayan Comfort Platters
                </div>
              </div>

              {/* Card 3: Elite Fine Dining */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍽️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Heritage Fine Dining
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Indulge in premium culinary layouts at high-end environments like <span className="font-semibold text-gray-900">The Grand Eating Room</span> inside local heritage hotels. These serve flawless multi-course continental meals alongside classic colonial-era roasts.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Aristocratic Alpine Dining
                </div>
              </div>

              {/* Card 4: Local Gorkha & Nepalese Cuisine (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🍛
                    </div>
                    <span className="text-xs font-bold bg-red-100/60 text-red-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Authentic Roots
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
                    Traditional Nepalese Thalis & Local Platters
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Dive straight into local community culinary traditions at highly rated joints like <span className="font-semibold text-gray-900">Sonam's Kitchen</span> or specialty ethnic houses. Experience authentic ghee-laden Nepalese <span className="font-semibold text-gray-900">Sel Roti</span>, spicy local Gundruk configurations, rich slow-cooked Rai Saag, and fiercely aromatic traditional chicken thalis.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
                  Gorkhaland Flavor Heritage
                </div>
              </div>

              {/* Card 5: Modern Rooftop Cafes */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Acoustic Slopeline Cafes
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Unwind with sweeping valley cloud movements at modern hotspots near the Ridge area. The premier choices for freshly brewed espresso shots, artisan hot cocoas, and evening acoustic setups.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Chowrasta Ridge Vibes
                </div>
              </div>

              {/* Card 6: Cozy Streetside Momos */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Street Food Trails
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore the hidden back-lane stalls near the old market grids. Secure a hot plate of fire-charred momos or spicy aloo dum loops paired with piping hot broth for an exceptional local street culinary dive.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Quick Mountain Bites
                </div>
              </div>

            </div>

            {/* Foodie Glass Advisory Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-rose-900 font-bold">Foodie Tip:</strong> Head over to Glenary's red-brick balcony around 4:30 PM. Snagging an open-air edge seat to witness the twilight fog roll over Mall Road with a cup of authentic Muscatel Darjeeling tea is an irreplaceable mountain luxury!
                </p>
              </div>
            </div>

          </section>

          {/* Budget Breakdown Section - Darjeeling */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-300/10 to-teal-300/10 blur-[140px] rounded-full"></div>
            </div>

            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                ☕ Financial Planner
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">Budget Breakdown for Darjeeling</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Budget Nomad */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold mb-6">💸</div>
                <h3 className="text-2xl font-black text-gray-900">Tea-Garden Backpacker</h3>
                <div className="space-y-3 pt-6">
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🏨 Stay (Hostels)</span><span className="text-sm font-extrabold">₹500 – ₹1,200</span></div>
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🍽️ Food</span><span className="text-sm font-extrabold">₹400 – ₹800</span></div>
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🛵 Transp.</span><span className="text-sm font-extrabold">₹300 – ₹700</span></div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-2xl font-black text-emerald-600">₹1,200 – ₹2,700 <span className="text-xs font-bold text-gray-400">/ day</span></div>
                </div>
              </div>

              {/* Balanced */}
              <div className="group bg-white border-2 border-emerald-500 shadow-xl rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 relative ring-8 ring-emerald-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-black text-[10px] uppercase px-4 py-1 rounded-full">Recommended</div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold mb-6">🏔️</div>
                <h3 className="text-2xl font-black text-gray-900">Heritage Explorer</h3>
                <div className="space-y-3 pt-6">
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🏨 Stay (Heritage)</span><span className="text-sm font-extrabold">₹3,000 – ₹7,000</span></div>
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🍽️ Food</span><span className="text-sm font-extrabold">₹1,500 – ₹3,000</span></div>
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🚕 Transp.</span><span className="text-sm font-extrabold">₹1,500 – ₹2,500</span></div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-2xl font-black text-emerald-600">₹6,000 – ₹12,500 <span className="text-xs font-bold text-gray-400">/ day</span></div>
                </div>
              </div>

              {/* Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold mb-6">🌟</div>
                <h3 className="text-2xl font-black text-gray-900">Luxury Estate Stay</h3>
                <div className="space-y-3 pt-6">
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🏨 Stay (Luxury)</span><span className="text-sm font-extrabold">₹12k – ₹30k+</span></div>
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🍽️ Food</span><span className="text-sm font-extrabold">₹3,000 – ₹8,000</span></div>
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl"><span className="text-xs font-bold uppercase text-gray-500">🚕 Transp.</span><span className="text-sm font-extrabold">₹3,000 – ₹6,000</span></div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-2xl font-black text-emerald-600">₹18,000 – ₹45k+ <span className="text-xs font-bold text-gray-400">/ day</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* Shopping Section - Darjeeling */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-gray-950">Shopping in Darjeeling</h2>
              <p className="text-gray-500 mt-3 text-lg">From world-class tea estates to authentic Tibetan artifacts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tea Estates */}
              <div className="bg-white/60 p-8 rounded-3xl border border-gray-200 hover:border-emerald-300">
                <div className="text-3xl mb-4">🍵</div>
                <h3 className="text-2xl font-black">Estate Teas</h3>
                <p className="text-gray-600 mt-3">Buy directly from heritage estates like Makaibari or Castleton. Look for 'First Flush' and 'Second Flush' Darjeeling tea.</p>
              </div>

              {/* Handicrafts */}
              <div className="bg-white/60 p-8 rounded-3xl border border-gray-200 hover:border-amber-300">
                <div className="text-3xl mb-4">📿</div>
                <h3 className="text-2xl font-black">Tibetan Art</h3>
                <p className="text-gray-600 mt-3">Explore Mall Road for Thangka paintings, singing bowls, and prayer wheels that reflect the hill station's rich Himalayan culture.</p>
              </div>

              {/* Woolens */}
              <div className="bg-white/60 p-8 rounded-3xl border border-gray-200 hover:border-indigo-300">
                <div className="text-3xl mb-4">🧶</div>
                <h3 className="text-2xl font-black">Nehru Jacket & Woolens</h3>
                <p className="text-gray-600 mt-3">The local markets are famous for high-quality hand-knit sweaters, scarves, and traditional Gorkhali caps.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-100 px-6 py-4 rounded-2xl">
                <span>💡</span>
                <p className="text-emerald-950 font-medium"><strong>Shopping Tip:</strong> Always look for the 'Tea Board of India' certification mark when buying premium tea to ensure it's authentic Darjeeling leaf!</p>
              </div>
            </div>
          </section>


        </div>
      </motion.div>
    </div>
  );
};

export default Darjeeling;
