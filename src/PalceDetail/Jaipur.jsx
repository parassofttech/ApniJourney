import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Sun,
  Info,
  Camera,
  ExternalLink,
  Building,
} from "lucide-react";

const Jaipur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-orange-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://static.toiimg.com/img/115224983/Master.jpg"
          alt="Hawa Mahal Jaipur"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1589133190621-ded89a1a80db?auto=format&fit=crop&w=1200&q=80")
          }
        />


        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-amber-800 mb-4"
          >
            🏰 Jaipur – The Pink City of Royal Heritage
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Jaipur, the capital of **Rajasthan**, is known as the **Pink City**
            for its rose-colored buildings and royal architecture. Established
            in **1727 by Maharaja Sawai Jai Singh II**, Jaipur perfectly blends
            **royalty, culture, art, and tradition**, making it one of India’s
            most iconic travel destinations.
          </motion.p>


          
{/* Introduction Section */}
      <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

        {/* Advanced Radial Background Glows (Royal Rajasthan Theme) */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full"></div>
        </div>

        {/* Header Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span>🏰</span> Destination Spotlight
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
            Discover Jaipur
          </h2>
          <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            A majestic blend of royal palaces, vibrant bazaars, historic forts & rich Rajasthani heritage.
          </p>
        </div>

        {/* Main Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Premium Introduction (Glass Card) */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
            <div className="text-4xl mb-4">👑</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              India's Pink City
            </h3>
            <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
              Jaipur, the magnificent capital of Rajasthan, is a world-renowned heritage destination famous for its terracotta-pink avenues, iconic palace architecture, and timeless royal legacy.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15.5px]">
              Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur forms a part of the Golden Triangle tour circuit, drawing millions of travelers globally who seek history, exquisite crafts, and regal hospitality.
            </p>
            
            {/* Quick Stats Banner inside Left Card */}
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
              <div className="bg-amber-50/50 p-3 rounded-2xl">
                <p className="text-2xl font-black text-amber-600">Almost 300Y</p>
                <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Royal History</p>
              </div>
              <div className="bg-rose-50/50 p-3 rounded-2xl">
                <p className="text-2xl font-black text-rose-600">Infinite</p>
                <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Regal Charm</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Culture & Architecture */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                🕌
              </div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                Heritage & Fort Architecture
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                A rich canvas of Rajput artistry and structural marvels. From the iconic lattice windows of <span className="font-semibold">Hawa Mahal</span> to the grand hilltop ramparts of Amber Fort, history breathes in every stone.
              </p>
            </div>

            {/* Card 2: Shopping & Bazaars */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                🛍️
              </div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                Vibrant Traditional Bazaars
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Famous for traditional Johari Bazaar and Bapu Bazaar. Explore hand-blocked textiles, brilliant gemstone jewelry, blue pottery, and royal Mojris that capture the colorful essence of Rajasthan.
              </p>
            </div>

            {/* Card 3: Food Lover's Paradise */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                🍲
              </div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                Royal Culinary Journey
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                A paradise for spice and heritage food lovers. Relish authentic, ghee-laden <span className="font-semibold">Dal Baati Churma</span>, rich Pyaz Kachori, Mawa Kachori, and majestic thalis fit for royalty.
              </p>
            </div>

            {/* Card 4: Experiences & Festivals */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                🐘
              </div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                Cultural & Royal Vibrancy
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Immerse yourself in live folk dances, puppet shows at Chokhi Dhani, elephant polo legacies, and legendary festivals like Teej, Gangaur, and the grand Jaipur Literature Festival.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Premium Sticky Note */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
          <div className="relative z-10 max-w-3xl">
            <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
            <p className="text-amber-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
              In short, Jaipur is not just a city—it is a royal experience that beautifully merges historic grandeur, artistic architecture, cultural luxury, and warm hospitality into one unforgettable journey. Whether you're exploring colossal forts or modern upscale spaces, Jaipur promises memories that remain timeless.
            </p>
          </div>
        </div>

      </section>

      {/* Best Time to Visit Section */}
      <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

        {/* Advanced Radial Background Glows (Heritage Theme) */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/10 blur-[120px] rounded-full"></div>
        </div>

        {/* Header Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            ☀️ Weather & Planning
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
            Best Time to Visit Jaipur
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Plan your perfect royal getaway aligned with ideal seasonal weather and heritage festivals.
          </p>
        </div>

        {/* Main Interactive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
                ☀️
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                The Heritage Windows
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                Jaipur experiences its finest weather window during the winter from <span className="font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">November to February</span> when temperatures range from a pleasant 10°C to 25°C, making it absolute bliss for outdoor fort exploring and sightseeing.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15.5px]">
                During this peak window, iconic monuments, vibrant desert palace hotels, and the festive streets of the walled city buzz with dynamic cultural events and global travelers.
              </p>
            </div>

            {/* Pro Tip Alert Section */}
            <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
              <span className="text-lg mt-0.5">💡</span>
              <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
                <strong className="text-amber-950">Pro Tip:</strong> Want to bypass peak holiday crowds and score premium heritage haveli stays at heavily discounted rates? Plan your itinerary during the sweet shoulder weeks of late September or early March.
              </p>
            </div>
          </div>

          {/* Right Side: Seasonal Breakdown Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Season 1: Winter (Peak) */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-4 items-start sm:items-center">
                <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  🏰
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
                    Winter (November – February)
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 max-w-md">
                    The ultimate peak season. Perfectly cool weather, ideal for expansive walking tours of forts like Nahargarh, daytime shopping loops, and literature festivals.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
                Royal Wonderland
              </span>
            </div>

            {/* Season 2: Shoulder (Spring / Autumn) */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-4 items-start sm:items-center">
                <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  🌸
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
                    Transitional (March & October)
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 max-w-md">
                    Moderate conditions. Features golden sunrise hours, lively heritage folk loops, and festive celebrations with manageable crowd structures.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
                Balanced Vibe
              </span>
            </div>

            {/* Season 3: Off-Peak (Summer / Monsoon) */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-4 items-start sm:items-center">
                <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  🔥
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
                    Summer/Monsoon (April – September)
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 max-w-md">
                    Intense heat followed by sparse rain. Daytime exploring is challenging, but premium heritage luxury palaces offer massive structural discounts.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
                Budget Luxury Season
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
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Info /> Historical Background
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jaipur was founded in **1727** by Maharaja Sawai Jai Singh II,
                the ruler of Amber. It was one of the first planned cities in
                India, based on **Vastu Shastra** principles. In 1876, the city
                was painted pink to welcome the Prince of Wales, symbolizing
                hospitality — and ever since, it has been known as the “Pink
                City.”
              </p>
            </motion.div>

            {/* Top Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Camera /> Major Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏯 <b>Amber Fort:</b> Majestic hilltop fort & elephant rides</li>
                <li>🏰 <b>City Palace:</b> Blend of Mughal & Rajput architecture</li>
                <li>🌸 <b>Hawa Mahal:</b> Palace of Winds with 953 windows</li>
                <li>🔭 <b>Jantar Mantar:</b> UNESCO-listed astronomical observatory</li>
              </ul>
              <a
                href="https://www.tourism.rajasthan.gov.in/jaipur.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-orange-600 mt-3 underline hover:text-orange-800"
              >
                Visit Rajasthan Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Culture & Cuisine */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Landmark /> Culture & Cuisine
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jaipur’s rich culture includes **folk dances, puppet shows,
                festivals,** and traditional Rajasthani attire. Food lovers must
                try **Dal Baati Churma, Ghewar, Laal Maas,** and **Pyaaz Kachori**.
                The city’s bazaars like **Johari** and **Bapu Bazaar** are famous
                for jewelry, handicrafts, and textiles.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time to Visit:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 3–4 days</li>
                <li>✈️ <b>Nearest Airport:</b> Jaipur International Airport (JAI)</li>
                <li>🚆 <b>Railway:</b> Jaipur Junction</li>
                <li>🚗 <b>Local Transport:</b> Auto, cab, metro, rickshaw</li>
              </ul>
            </motion.div>
          </div>

          {/* Royal Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-yellow-50 to-pink-50 p-6 rounded-2xl border border-yellow-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-amber-700 mb-3">
              <Building /> Royal Heritage & Modern Vibe
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Jaipur offers a rare combination of **royal history** and **modern
              urban lifestyle**. Stay in luxurious heritage hotels like **Rambagh
              Palace** or explore art cafés in **C-Scheme**. From hot air balloon
              rides to royal weddings — Jaipur is India’s regal destination.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Jaipur
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "https://assets.cntraveller.in/photos/60ba007145469a6a570b1dbf/16:9/w_1024%2Cc_limit/Jal-Mahal-Jaipur-123rf-2-1366x768.jpg",
                "https://s7ap1.scene7.com/is/image/incredibleindia/amber-fort-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742157903972",
                "https://hblimg.mmtcdn.com/content/hubble/img/jaipur/mmt/activities/t_ufs/m_activities_amber_fort_2_l_436_573.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ieTRj-SKTS3lGReyK8eF9ZQZM6Ym9Meu6g&s",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Jaipur"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1589133190621-ded89a1a80db?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Official Link */}
          <div className="mt-8 text-center">
            <a
              href="https://www.tourism.rajasthan.gov.in/jaipur.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition font-semibold"
            >
              Visit Jaipur Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jaipur;
