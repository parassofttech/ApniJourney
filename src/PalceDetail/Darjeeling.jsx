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

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Info /> Historical Background
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Darjeeling became prominent during the **British colonial era** for its **tea plantations** 
                and **hill station resorts**. The famous **Darjeeling Himalayan Railway** is a UNESCO World Heritage Site.
              </p>
            </motion.div>

            {/* Coffee Gardens */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Coffee /> Coffee Gardens
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🍃 Happy Valley Coffee Estate</li>
                <li>🍂 Glenburn Coffee Estate</li>
                <li>🌱 Makaibari Coffee Estate</li>
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Adventure & Activities
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🚠 Toy Train rides on Darjeeling Himalayan Railway</li>
                <li>🥾 Trekking in Tiger Hill & Sandakphu</li>
                <li>🛶 River rafting & paragliding nearby</li>
                <li>📸 Photography of sunrise at Tiger Hill</li>
              </ul>
            </motion.div>

            {/* Festivals */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Sparkles /> Festivals
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🎉 Darjeeling Carnival</li>
                <li>🧘 Buddha Jayanti</li>
                <li>🌼 Losar Festival</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Bagdogra Airport</li>
                <li>🚆 Well-connected by train & road from Siliguri & Kolkata</li>
                <li>🏨 Stay: Hill resorts, boutique hotels, and homestays</li>
                <li>🕒 Best Time to Visit: March – May & September – November</li>
              </ul>
            </motion.div>
          </div>

          
        </div>
      </motion.div>
    </div>
  );
};

export default Darjeeling;
