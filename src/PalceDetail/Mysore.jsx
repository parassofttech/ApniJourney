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

          {/* Best Hotels & Resorts Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

            {/* Mysore Royal Palace Background Glows (Palace Gold & Magenta Silk Tints) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-fuchsia-900/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-fuchsia-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                👑 The Cultural Capital Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Hotels & Resorts in Mysore
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From magnificent grand heritage palaces of the Wodeyar era to premium luxury business stays and wellness retreats.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Grand Royal Heritage Palaces (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-600/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏰
                    </div>
                    <span className="text-xs font-bold bg-fuchsia-100/60 text-fuchsia-900 px-3 py-1 rounded-full uppercase tracking-wider">
                      Royal Palace Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Grand Heritage Palaces & Princely Estates
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Experience authentic royal living at iconic landmarks like the <span className="font-semibold text-gray-900">Grand Mercure</span> or heritage properties reflecting the Wodeyar dynasty's grandeur. Featuring intricate vintage archways, magnificent crystal chandeliers, sprawling royal courtyards, and classic high ceilings, these properties let you wake up in the majestic heart of Karnataka's history.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
                  Royal Courtyards & Vintage Colonial Suites
                </div>
              </div>

              {/* Card 2: Luxury Wellness & Nature Resorts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧘
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Sandalwood Wellness Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Escape the city center to serene eco-resorts near the Chamundi Hills perimeter. These properties specialize in traditional Ayurvedic spa packages, signature sandalwood oil therapies, and quiet yoga pavillons set against peaceful, lush green landscaping.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Ayurvedic Spa Loops & Yoga Pavilions
                </div>
              </div>

              {/* Card 3: Premium Modern Business Hotels */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-fuchsia-500/30 shadow-lg hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 text-xl flex items-center justify-center border border-fuchsia-100/70 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏙️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-fuchsia-700 transition-colors duration-200">
                    Central Urban Luxury Hubs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For professional workflows and sleek stays, high-end business hotels like <span className="font-semibold text-gray-900">Radisson Blu Plaza</span> offer premier skyline pools, contemporary designs, and direct, seamless access to the prominent Mysore zoo and business circuits.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-fuchsia-600 tracking-wider uppercase">
                  Skyline Pools & Central Transit Access
                </div>
              </div>

              {/* Card 4: Brindavan Garden Perimeter Stays (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ⛲
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Scenic Fountains
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Brindavan Gardens Waterfront Stays
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Stay right on the banks of the Kaveri river perimeter near the grand <span className="font-semibold text-gray-900">Brindavan Gardens</span>. Luxury heritage resorts here like the <span className="font-semibold text-gray-900">Royal Orchid Brindavan Garden</span> offer direct room views of the iconic illuminated musical fountains, stepping out straight onto manicured terraced flowerbeds.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Frontline Fountain Vistas & Terrace Walkways
                </div>
              </div>

              {/* Card 5: Boutique Silk-Route Homestays */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-fuchsia-500/30 shadow-lg hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 text-xl flex items-center justify-center border border-fuchsia-100/70 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏡
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-fuchsia-700 transition-colors duration-200">
                    Charming Artistic Homestays
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Ideal for independent wanderers and backpackers, Mysore's cozy residential colony guesthouses offer warm local families, organic filter coffee yards, and prompt curation for silk weaver colony tours.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-fuchsia-600 tracking-wider uppercase">
                  Local Silk Weaver Curation & Home Brews
                </div>
              </div>

              {/* Card 6: Chamundi Foothill Outposts */}
              <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center shrink-0 border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    ⛰️
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                      Chamundi Foothill Hideaways & High-Ceiling Villas
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
                      Retreat close to the spiritual crest of the city near the base of <span className="font-semibold text-gray-900">Chamundi Hill</span>. Standalone premium villas here feature early morning temple bell echoes, pristine clean air grids, and breathtaking night views of the fully illuminated Mysore Palace complex in the distance.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-950 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
                  Spiritual Ridge Vistas & Temple Loops
                </span>
              </div>

            </div>
          </section>


          {/* Restaurants & Cafes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-fuchsia-600 selection:text-white">

            {/* Culinary Background Tints */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-900/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-50 to-amber-50 border border-fuchsia-100 text-fuchsia-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🍛 Aromatic Heritage Plates
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-fuchsia-950 to-gray-950">
                Best Restaurants & Cafes in Mysore
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From legendary crispy Mylari Masala Dosas to royal traditional multi-course plantain leaf thalis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Iconic Mysore Masala Dosa Hubs (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-fuchsia-500/30 shadow-lg hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 text-xl flex items-center justify-center border border-fuchsia-100/70 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🥞
                    </div>
                    <span className="text-xs font-bold bg-fuchsia-100/60 text-fuchsia-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Legendary Breakfast Institutions
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-fuchsia-800 transition-colors duration-200">
                    The Original Mylari & Vintage Crispy Ghee Roast Circuits
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Taste breakfast history at legendary local institutions like <span className="font-semibold text-gray-900">Hotel Vinayaka Mylari</span>. Quite distinct from standard variations, authentic Mysore masala dosas are prized for their unique cloud-soft internal texture, a deep golden crispy blistered exterior, a generous smear of signature spicy garlic-red chili chutney, and a fresh melt-of-ghee finish.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-fuchsia-700 tracking-wider uppercase">
                  Signature Mylari Soft-Crusts & Fresh Coconut Butter
                </div>
              </div>

              {/* Card 2: Modern Heritage Filter Coffee Yards */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ☕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Frothy Filter Coffee Roasteries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Unwind in beautifully restored old villa courtyard cafes. Sip on intensely aromatic brass-tumbler <span className="font-semibold text-gray-900">Filter Coffee</span> blends, snack on crunchy maddur vadas, and soak in the slow, nostalgic intellectual pace of the city.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Brass-Tumbler Chic & Maddur Vada Bops
                </div>
              </div>

              {/* Card 3: Traditional Veg Royal Palace Thalis */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-fuchsia-500/30 shadow-lg hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 text-xl flex items-center justify-center border border-fuchsia-100/70 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥬
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-fuchsia-700 transition-colors duration-200">
                    Grand Plantain Leaf Thalis
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Indulge in a wholesome regional feast. Traditional heritage diners serve spectacular multi-course meals featuring <span className="font-semibold text-gray-900">Bisi Bele Bath</span>, tangy rasam variants, sandige, and freshly made, aromatic kootu preparations.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-fuchsia-600 tracking-wider uppercase">
                  Authentic Bisi Bele Bath & Ghee-Rich Rasams
                </div>
              </div>

              {/* Card 4: Fine Dining Courtyard Saloons (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🍽️
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Palatial Banquets
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Royal Silk-Route Multi-Cuisine Halls
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For formal dinners and family celebrations, enjoy elegant courtyard restaurants. Serving a sophisticated curation of rich royal Mughlai barbecues, South Indian classical profiles, and delicate Continental selections in historic settings.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Royal Mughlai Grills & Vintage Ambiance
                </div>
              </div>

              {/* Card 5: Sweet Artisanal Confectioners (Mysore Pak) */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-fuchsia-500/30 shadow-lg hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 text-xl flex items-center justify-center border border-fuchsia-100/70 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    👑
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-fuchsia-700 transition-colors duration-200">
                    The Original Mysore Pak Sweetmakers
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Visit sweet legends like <span className="font-semibold text-gray-900">Guru Sweet Mart</span>—held by descendants of the original royal palace cooks. Treat your family to fresh, melt-in-the-mouth, ultra-rich ghee <span className="font-semibold text-gray-900">Mysore Pak</span>.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-fuchsia-600 tracking-wider uppercase">
                  Pure Royal Ghee Confections & Legacy Halwas
                </div>
              </div>

              {/* Card 6: Pure Vegetarian Heritage Mess Circuits */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥛
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Traditional Brahmin Veg Messes
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For pristine clean family food circuits, time-tested local veg dining halls serve exceptional value options, including hyper-fresh set-meals, crispy vadas, and frothy buttermilk rounds.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Pristine Family-Friendly Vegetarian Layouts
                </div>
              </div>

            </div>

            {/* Travel Guide Tip Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-fuchsia-600/10 via-amber-600/5 to-transparent border border-fuchsia-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-fuchsia-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-fuchsia-900 font-bold">Mysore Foodie Tip:</strong> When shopping for souvenirs or sweets to carry home, always buy 'Mysore Pak' on the absolute final day of your trip to preserve its rich buttery aroma! For an incredible sensory experience, pair your morning exploration walk with a quick stop to sample fresh local 'Mysuru Mallige' (jasmine) or local sandalwood incense items at the vibrant Devaraja Market.
                </p>
              </div>
            </div>

          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-300/10 to-purple-300/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                👑 Royal Heritage Planner
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Mysore
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Analyze daily cost structures to explore the majestic palaces, aromatic sandalwood markets, and vibrant culture of the City of Palaces.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-amber-400/60 shadow-md hover:shadow-xl hover:shadow-amber-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold border border-amber-100 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      🏯
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Heritage Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for solo travelers and students staying in budget lodges or hostels near the central bus stand.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹600 – ₹1,400</span>
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
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹1,200 – ₹2,600 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-amber-500 hover:border-amber-400 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-amber-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-purple-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold border border-amber-100 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Royal Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for families wanting to experience boutique heritage hotels and guided palace tours.
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
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹3k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹6,000 – ₹13k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-purple-400/60 shadow-md hover:shadow-xl hover:shadow-purple-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg font-bold border border-purple-100 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Legacy
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Palatial Luxury
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    For true luxury seekers wanting stay in converted heritage palaces and fine dining experiences.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹12k – ₹40k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹8k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹6k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-purple-600 tracking-tight">
                    ₹18k – ₹54k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-amber-500/10 via-purple-500/5 to-transparent border border-amber-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-amber-800 font-black">Pro Tip:</strong> Try to plan your visit around Dussehra (Dasara) to witness the grand procession. It’s one of the most magnificent cultural displays in all of India.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Royal Treasures
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Shopping in Mysore
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From legendary Mysore Silk to intricate sandalwood carvings, take home a piece of royal heritage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      👗
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Premium Silk
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Mysore Silk Sarees
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Renowned for their smooth texture and gold-zari borders, <span className="font-semibold text-gray-900">Mysore Silk</span> is the pinnacle of elegance and must be purchased from authentic government outlets.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Iconic Royal Textile
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🪵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Sandalwood Crafts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Bring home the soothing scent of Mysore with intricately carved <span className="font-semibold text-gray-900">sandalwood statues, boxes, and incense</span>—genuine items are a prized souvenir.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Aromatic Royal Art
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Mysore Paintings
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore the traditional <span className="font-semibold text-gray-900">Mysore paintings</span>—characterized by intricate gesso work, delicate lines, and harmonious colors, often depicting Hindu deities.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Heritage Fine Art
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🍬
                    </div>
                    <span className="text-xs font-bold bg-purple-100/60 text-purple-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Signature Sweet
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
                    Mysore Pak
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    You cannot leave without the iconic <span className="font-semibold text-gray-900">Mysore Pak</span>. This rich, ghee-laden gram flour confection is the city's most famous culinary souvenir.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Royal Sweet Delight
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    💠
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Inlay Work
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Mysore is also known for skilled <span className="font-semibold text-gray-900">Rosewood inlay work</span>—stunning furniture pieces featuring intricate floral patterns inlaid with ivory (or bone substitute).
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Masterful Wood Inlay
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-rose-900 font-bold">Shopping Tip:</strong> For authentic Mysore Silk and Sandalwood items, stick to the Karnataka Government Emporiums or reputable heritage shops. Avoid street vendors for expensive items to ensure you get genuine, high-quality products.
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Mysore;
