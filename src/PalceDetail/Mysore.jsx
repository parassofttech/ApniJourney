// src/components/Mysore.jsx
import React from "react";
import { motion } from "framer-motion";
import { Crown, MapPin, Landmark, Plane, Train, Camera } from "lucide-react";

const Mysore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/chamundeshwari-temple-mysuru-karnataka-hero?qlt=82&ts=1742170286224"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1614864697792-1b4408cf65e4?auto=format&fit=crop&w=1200&q=80")
          }
        />

        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-amber-800 mb-4"
          >
            👑 Mysore – The Royal Heritage City
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
          >
            Famous for its **palatial architecture, silk, sandalwood, and Dasara
            festival**, Mysore is the cultural capital of Karnataka. Nestled at
            the base of the **Chamundi Hills**, the city beautifully blends royal
            history with vibrant modern life.
          </motion.p>

          {/* Introduction Section: Mysore */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Royal Heritage Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-amber-50 border border-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>👑</span> Cultural Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950">
      Discover Mysore
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The City of Palaces, where the grand legacy of the Wodeyar dynasty blends seamlessly with the aroma of pure sandalwood and royal silk.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-purple-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏛️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Cultural Capital of Karnataka
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Mysore, officially known as Mysuru, sits gracefully at the base of the sacred Chamundi Hills. It is universally celebrated for its magnificent Indo-Saracenic architecture, majestic royal history, and its remarkably clean, tree-lined boulevards.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        As a flourishing epicenter of art, yoga, and heritage under the long patronage of the <span className="font-semibold">Wodeyar Maharajas</span>, Mysore retains an old-world aristocratic charm that effortlessly enchants modern cultural travelers.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-purple-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-purple-600">7+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Royal Palaces</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">97,000+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Palace Lights</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The Grand Mysore Palace */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🏰
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Amba Vilas Palace
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          An architectural masterpiece. Witness a stunning mix of Hindu, Islamic, and Gothic styles, featuring stained-glass ceilings and a golden throne. Don't miss it glowing on Sunday evenings under nearly <span className="font-semibold">100,000 bulbs</span>.
        </p>
      </div>

      {/* Card 2: Chamundi Hills & Nandi */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          ⛰️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          Chamundi Hill Heights
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Scale the spiritual peak. Climb the 1,000 steps or drive up to the ancient <span className="font-semibold">Chamundeshwari Temple</span> to catch sweeping city views, stopping midway to marvel at the massive, monolithic 17-foot Nandi statue.
        </p>
      </div>

      {/* Card 3: Sandalwood, Silk & Markets */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🛍️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Devaraja Market Treasures
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A vivid sensory trail. Walk through the bustling centenary lanes of Devaraja Market to source authentic <span className="font-semibold">Mysore Sandalwood oil</span>, vibrant heaps of kunkum powder, and world-famous Mysore Silk sarees.
        </p>
      </div>

      {/* Card 4: Culinary Icon - Mysore Pak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🍮
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          The Legendary Mysore Pak
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Savor a rich royal legacy. Indulge in the melt-in-your-mouth, ghee-laden sweetness of traditional <span className="font-semibold">Mysore Pak</span> at its birth site, or try the uniquely crisp and spicy Mysore Masala Dosa at local vintage eateries.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-purple-900 via-indigo-950 to-amber-700 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-purple-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Mysore is a beautifully composed regal escape. It flawlessly balances the massive architectural grandeur of heritage monuments and world-renowned Ashtanga Yoga centers with a deeply relaxing city pace, keeping India's golden eras fully alive.
      </p>
    </div>
  </div>

</section>

         

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Mysore Gallery – Royal Heritage in Frames
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://www.itslife.in/wp-content/gallery/travel/travel-mysore-ill-palace4.jpg",
                "https://ramaarya.blog/wp-content/uploads/2020/02/mysore-palace.jpg?w=640",
                "https://as2.ftcdn.net/jpg/02/11/19/11/1000_F_211191108_AzVt9717IQlaXEeQiW73GoXR7tQ73GA3.jpg",
                "https://mysore.ind.in/wp-content/uploads/2015/03/Mysore-City-Sightseeing.jpg",
                "https://www.revv.co.in/blogs/wp-content/uploads/2020/03/place-to-visit-in-mysore.jpg",
                "https://lepassagetoindia.com/img.php?file=header_149812887855_Mysore_Palace_2000x1000.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Mysore View"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1596178060671-7b8b02f37a1a?auto=format&fit=crop&w=1200&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Royal Palace Lightning & Cultural Heritage Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-indigo-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🕌 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Time to Visit Mysore
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect cultural escape aligned with grand festival spectacles and pleasant royal winter winds.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
          👑
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Heritage Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Mysore welcomes travellers with exceptionally smooth weather from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these winter months, temperatures drift comfortably between 15°C - 30°C, providing an ideal atmosphere for outdoor architectural tours and market walks.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this peak timeline, the monumental <span className="font-semibold text-gray-900">Mysore Palace illumination circuits</span>, Chamundi Hill tracks, and the aromatic Devaraja Bazaar loops are vibrant with global explorers and yoga practitioners.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-indigo-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
          <strong className="text-amber-950">Pro Tip:</strong> Want to witness the legendary 10-day Mysore Dasara festival when the entire palace is lit up with 100,000 light bulbs? Strictly target your travel loop around the late September or October window, and ensure you secure hotel stays months in advance.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🏛️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Winter Heritage (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The grand premium season. Perfect climate for exploring the historic Srirangapatna loops, enjoying musical fountain shows at Brindavan Gardens, and shopping for authentic silk sarees.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Regal Peak
        </span>
      </div>

      {/* Season 2: Monsoon Refresh */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Monsoon Lushness (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Moderate seasonal rains wash the royal gardens into rich green setups. The surrounding forest reserves turn highly scenic, making it a great phase for crowd-free historical sightseeing.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Fresh Greens
        </span>
      </div>

      {/* Season 3: Summer Warmth */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Summer Warmth (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Sunny daytime spikes reaching up to 35°C. Sightseeing shifts toward breezy evening walks around Karanji Lake or exploring palace galleries under indoor coolers.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Quiet Windows
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

export default Mysore;
