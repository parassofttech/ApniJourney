import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Camera, Umbrella } from "lucide-react";

const Pondicherry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://luxevista.in/wp-content/uploads/2025/02/Pondicherry-itinerary-for-3-days_-960x517.png"
          alt="Pondicherry"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1572276596231-f0f83cd0b0a6?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-cyan-800 mb-4"
          >
            🌴 Pondicherry – The French Riviera of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Pondicherry, also known as Puducherry, is a charming coastal city with a unique blend
            of **French colonial architecture**, **serene beaches**, and vibrant **spiritual culture**.
            It offers a perfect mix of relaxation, heritage, and adventure.
          </motion.p>

          {/* Introduction Section: Pondicherry */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Advanced Radial Background Glows (French Riviera & Coastal Escape Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🥐</span> Coastal Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Discover Pondicherry
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The French Riviera of the East, where pastel colonial villas, tree-lined boulevards, and a slow-paced coastal breeze create a charming cross-cultural haven.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🇫🇷</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A Vintage Slice of Europe in India
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Pondicherry, officially known as Puducherry, sits beautifully along the Coromandel Coast of the Bay of Bengal. It is celebrated worldwide for its dual personality—separated cleanly into a vibrant, mustard-hued French Quarter and a bustling, traditional Tamil town.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  With its cobblestone streets, iconic bougainvillea-draped archways, and a deep spiritual undertone anchored by global utopian communities, it offers an idyllic escape centered on art, architecture, and slow living.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">1954</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">French Legacy till</p>
                  </div>
                  <div className="bg-teal-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-teal-600">Global</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Spiritual Center</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: White Town (French Quarter) */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🏡
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Charming White Town
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Stroll along quiet, elegant cobblestone lanes. White Town is famous for its remarkably preserved French colonial architecture, grand arched gateways, chic boutique cafes, and cycle-friendly boulevards.
                  </p>
                </div>

                {/* Card 2: Sri Aurobindo Ashram */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    🧘‍♂️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Sri Aurobindo Ashram
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Experience profound spiritual stillness. Founded in 1926, this iconic ashram draws global seekers looking to practice internal yoga and meditation within a serene, beautifully manicured sanctuary.
                  </p>
                </div>

                {/* Card 3: Auroville & The Matrimandir */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    🌐
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    The Utopian Auroville
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Visit the experimental Township of Dawn. Explore a unique global ecosystem where people from 50+ nations live in harmony, centered around the spectacular, golden-domed <span className="font-semibold">Matrimandir</span>.
                  </p>
                </div>

                {/* Card 4: Promenade Beachfront */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    🌊
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Rock Beach Promenade
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Catch the coastal sunset. Walk along the 1.5 km rocky oceanfront boardwalk, completely closed to motorized vehicles in the evening, allowing a peaceful breeze next to the historic Mahatma Gandhi statue.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-amber-700 via-yellow-600 to-teal-800 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-amber-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Pondicherry is a perfect slow-travel retreat. It effortlessly bridges European aesthetic history with classic Indian coastal warmth, making it an incredible stop for cozy cafes, deep meditation sessions, and pristine beach walks.
                </p>
              </div>
            </div>

          </section>



          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Pondicherry
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f4/3b/43/boating.jpg?w=1200&h=700&s=1",
                "https://www.fabhotels.com/blog/wp-content/uploads/2018/07/600x400-7.jpg",
                "https://static.toiimg.com/photo/32243872.cms",
                "https://travelentice.com/wp-content/uploads/2020/09/Top-19-Things-to-Do-in-Pondicherry-for-a-Blissful-Coastal-Getaway.jpg",
                "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/09/blog-06-870x570.jpg",
                "https://c8.alamy.com/comp/2EJM4P6/sunrise-morning-in-pondicherry-beach-tamil-nadu-india-2EJM4P6.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Pondicherry"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1607522361446-52d11e3ed8d4?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>
          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Advanced Radial Background Glows (French Quarters & Coastal Serenity Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-indigo-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🥐 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Time to Visit Pondicherry
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your perfect French-Riviera escape aligned with breezy beach weather and pleasant heritage boulevard loops.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
                    🚲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The French Riviera Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Pondicherry is at its absolute peak of comfort and charm from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these winter months, temperatures settle delightfully between 17°C - 30°C, drastically lowering the coastal humidity for relaxed exploration.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this premium timeline, the historic cobblestone alleys of <span className="font-semibold text-gray-900">White Town</span>, the iconic Promenade beach track, and the architectural loops of Auroville are best explored on bicycles or foot.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-indigo-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
                    <strong className="text-amber-950">Pro Tip:</strong> Want to experience the unique cultural festivals, experimental food pop-ups, and the legendary Sri Aurobindo Ashram celebrations in full spirit? Target your travel loop specifically around January or February.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Winter Peak */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🇫🇷
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
                        Cool Winter (October – March)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The grand tourist season. Perfect for catching stunning coastal sunrises, chilling at beachside French cafes, water sports at Paradise Beach, and open-air classical music jams.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Riviera Peak
                  </span>
                </div>

                {/* Season 2: Monsoon Refresh */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
                        Monsoon Romance (July – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Intermittent coastal showers wash the bougainvillea-laden lanes clean. The sea stays rough but the weather turns deeply romantic, dropping luxury boutique villa rates significantly.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Cozy Vibe
                  </span>
                </div>

                {/* Season 3: Summer Heat */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
                        Summer Humidity (April – June)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Tropical sun pushing past 38°C with elevated humidity margins. Outdoor tours restrict to early mornings or late nights, making it a great phase for quiet, air-conditioned cafe hopping.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Quiet Cafes
                  </span>
                </div>

              </div>
            </div>

          </section>
          {/* Best Hotels & Resorts Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Franco-Tamil Background Glows (Mustard Colonial & Azure Sea Tints) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-pink-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🇫🇷 The French Riviera Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Hotels & Resorts in Pondicherry
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From pastel-hued French colonial mansions in White Town to bohemian eco-stays near Auroville and luxury beach resorts.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: White Town French Heritage Mansions (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏛️
                    </div>
                    <span className="text-xs font-bold bg-pink-100/60 text-pink-900 px-3 py-1 rounded-full uppercase tracking-wider">
                      Colonial White Town Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Vintage French Villas & Restored Heritage Mansions
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Step back in time by staying at boutique heritage properties like <span className="font-semibold text-gray-900">Palais de Mahé</span> or ultra-charming villas inside White Town. These architecture-rich gems feature high wooden rafters, gorgeous terracotta tiled floors, classic louvers, and beautiful central courtyards covered in cascading pink bougainvillea, placing you within walking distance of Rock Beach.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
                  Arched Verandas & High-Ceiling Heritage Suites
                </div>
              </div>

              {/* Card 2: Luxury Beachfront Resorts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏖️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
                    Coastal Surf & Sand Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Escape north to premium beachfront retreats like <span className="font-semibold text-gray-900">The Promenade</span> or pristine properties along ECR. These resorts offer gorgeous ocean-view infinity pools, private beach access, and breezy open-air sunset decks perfect for sea lovers.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
                  Ocean-View Infinity Pools & Private Beach Access
                </div>
              </div>

              {/* Card 3: Auroville Eco-Friendly Spiritual Retrears */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧘
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Auroville Bohemian Eco-Stays
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Immerse yourself in tranquil harmony around the Auroville periphery. Think organic mud brick huts, sustainable forest stays, and peaceful wellness retreats that feature locally sourced thatch roofs, yoga shalas, and completely serene meditation gardens.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Sustainable Earth-Architecture & Yoga Shalas
                </div>
              </div>

              {/* Card 4: Tamil Quarter Heritage Houses (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-pink-500/30 shadow-lg hover:shadow-xl hover:shadow-pink-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 text-xl flex items-center justify-center border border-pink-100/70 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏡
                    </div>
                    <span className="text-xs font-bold bg-pink-100/60 text-pink-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Franco-Tamil Fusion
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-pink-800 transition-colors duration-200">
                    Traditional Tamil Quarter Heritage Stays
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover beautiful cross-cultural living in the vibrant Tamil Quarter (*Vysial Street*). Painstakingly restored homes like <span className="font-semibold text-gray-900">Maison Perumal</span> show off stunning vernacular architecture, characterized by massive street-facing wooden verandas (*thinnai*), carved pillars, and central skylights.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-pink-600 tracking-wider uppercase">
                  Classic Thinnai Verandas & Sculpted Wooden Pillars
                </div>
              </div>

              {/* Card 5: Smart Transit & Chic Backpacker Hostels */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🚲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
                    Chic Backpacker Pods & Cafes
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Perfect for modern remote workers and solo travelers. Vibrant boutique hostels offer air-conditioned bunk pods, cozy open-roof workspaces, high-speed mesh networks, and instant custom bicycle rentals to zip through the colonial grid.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
                  Co-Working Roofs & Direct Cycle Rentals
                </div>
              </div>

            </div>
          </section>


          {/* Restaurants & Cafes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-pink-500 selection:text-white">

            {/* Culinary Background Tints */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-900/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-amber-50 border border-pink-100 text-pink-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                ☕ Wood-fired Crusts & Croissants
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-pink-950 to-gray-950">
                Best Restaurants & Cafes in Pondicherry
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From slow-baked butter croissants in hidden French courtyards to rare, aromatic Creole seafood curries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Iconic Courtyard Bakeries (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-pink-500/30 shadow-lg hover:shadow-xl hover:shadow-pink-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 text-xl flex items-center justify-center border border-pink-100/70 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      🥐
                    </div>
                    <span className="text-xs font-bold bg-pink-100/60 text-pink-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Authentic Patisseries
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-pink-800 transition-colors duration-200">
                    The French Courtyard Cafes & Artisan Patisseries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Indulge in classic Parisian baking at beloved institutions like <span className="font-semibold text-gray-900">Baker Street</span> or gorgeous garden spaces like <span className="font-semibold text-gray-900">Café Des Arts</span>. Sip on smooth iced lattes and sample exceptionally flaky, golden-brown butter croissants, pain au chocolat, fresh fruit tarts, and gourmet French baguettes baked fresh every morning.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-pink-700 tracking-wider uppercase">
                  Flaky Hand-Rolled Croissants & Gourmet Baguettes
                </div>
              </div>

              {/* Card 2: Auroville Wood-Fired Pizza Pizzerias */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Artisanal Wood-Fired Neapolitan Pizzerias
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For pizza aficionados, legendary spots like <span className="font-semibold text-gray-900">Tanto Pizzeria</span> near Auroville churn out stunning rustic crusts. Baked directly inside glowing brick ovens using wood fires, they feature home-grown herbs, rich buffalo mozzarella, and premium olive oils.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Rustic Brick-Oven Cranks & Fresh Garden Basils
                </div>
              </div>

              {/* Card 3: Rare Pondicherry Creole Kitchens */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-pink-500/30 shadow-lg hover:shadow-xl hover:shadow-pink-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-xl flex items-center justify-center border border-pink-100/70 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-pink-700 transition-colors duration-200">
                    Traditional Franco-Tamil Creole Dining
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Taste the highly unique, fading culinary art of Creole cooking. Select fine-dining heritage hotels serve signature local dishes like *Prawn Court-Bouillon*, aromatic coconut-milk fish curries blended with subtle French wine reductions and local South Indian spices.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-pink-600 tracking-wider uppercase">
                  Signature Prawn Court-Bouillons & Mild Coconut Curries
                </div>
              </div>

              {/* Card 4: Rooftop Ocean-View Bistros (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🥂
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Promenade Frontlines
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Rooftop Sea-Breeze Resto-Bars & Grills
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Unwind in style at elegant rooftop bistros directly overlooking the crashing waves of Rock Beach. Perfect for dynamic evening groups wanting premium cocktails, grilled seafood samplers, and a beautiful panoramic view of the dark blue Bay of Bengal skyline.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Panoramas of the Old Pier & Craft Mixology
                </div>
              </div>

              {/* Card 5: Wholesome Organic Vegan Cafes */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-pink-500/30 shadow-lg hover:shadow-xl hover:shadow-pink-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-xl flex items-center justify-center border border-pink-100/70 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥗
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-pink-700 transition-colors duration-200">
                    Auroville Inspired Whole-Food Cafes
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Soak in the slow-paced bohemian lifestyle at healthy, eco-friendly cafes. They specialize in fresh cold-pressed green smoothies, loaded avocado sourdough breaks, raw organic dessert bars, and beautifully vibrant vegan salads.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-pink-600 tracking-wider uppercase">
                  Cold-Pressed Elixirs & Organic Avocado Sourdough
                </div>
              </div>

            </div>

            {/* Travel Guide Tip Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600/10 via-amber-600/5 to-transparent border border-pink-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-pink-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-pink-900 font-bold">Pondicherry Explorer Tip:</strong> Inside White Town (French Quarter), vehicular traffic is fully barred every single evening on the main Promenade beach road. Rent an elegant vintage pastel bicycle for your stay—it's the most immersive, eco-friendly, and highly photographable way to explore the grid!
                </p>
              </div>
            </div>

          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-300/10 to-indigo-300/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🇫🇷 French Quarter Planner
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Pondicherry
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Analyze daily cost structures to explore the vibrant French colonial streets, spiritual serenity, and pristine beaches of the Indian Riviera.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-rose-400/60 shadow-md hover:shadow-xl hover:shadow-rose-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold border border-rose-100 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      🚲
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Boho Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    French Quarter Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Perfect for backpackers staying in hostels near the White Town or cycling through the quaint colonial lanes.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1,800</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹500 – ₹1,000</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚲 Bike</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹200 – ₹300</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹1,500 – ₹3,100 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-rose-500 hover:border-rose-400 shadow-xl hover:shadow-2xl hover:shadow-rose-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-rose-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-indigo-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold border border-rose-100 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      🎨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Colonial Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for travelers wanting stay in authentic French heritage villas, cafe-hopping, and beach relaxation.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹8k</span>
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
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹5,500 – ₹13k <span className="text-xs font-bold text-gray-400">/ day</span>
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
                      Elite Coastal
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    French Riviera
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium stays at luxury seaside resorts, high-end fine dining, and private Auroville retreats.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹10k – ₹30k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹7k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-indigo-600 tracking-tight">
                    ₹15k – ₹42k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-rose-500/10 via-indigo-500/5 to-transparent border border-rose-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-rose-800 font-black">Pro Tip:</strong> Hire a bicycle for your entire stay. The White Town streets are incredibly photogenic and best experienced at a slow, pedaling pace in the early morning light.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Artisan Boutiques
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Shopping in Pondicherry
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From Auroville-made organic treasures to colonial-inspired home decor and sustainable fashion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌿
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Auroville Specials
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Auroville Organic Goods
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Support the community by buying <span className="font-semibold text-gray-900">Auroville-made products</span>, including handmade soaps, incense, organic food, and premium essential oils.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Conscious Living Crafts
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    👗
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Sustainable Fashion
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore trendy, sustainable <span className="font-semibold text-gray-900">linens and handloom cotton</span> clothing found in the many boutique stores across White Town.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Ethical Boutique Apparel
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏺
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    Ceramics & Pottery
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find exquisite <span className="font-semibold text-gray-900">hand-thrown ceramics</span> and pottery pieces that reflect the artistic spirit of the local craft community.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Artisan Clay Work
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🛋️
                    </div>
                    <span className="text-xs font-bold bg-sky-100/60 text-sky-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Home Decor
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-800 transition-colors duration-200">
                    Colonial Home Decor
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Pondicherry is famous for its <span className="font-semibold text-gray-900">vintage-style home decor</span>, including hand-painted wooden artifacts, antique-style lamps, and heritage wall art.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Vintage Heritage Aesthetic
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    📓
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Handmade Stationery
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Take home beautiful <span className="font-semibold text-gray-900">handmade paper journals</span> and stationery, often featuring elegant botanical prints and recycled materials.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Creative Stationery
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-amber-900 font-bold">Shopping Tip:</strong> Visit the official Auroville boutiques located in White Town. They ensure the proceeds go directly back to the artisans, and the quality of their organic products is unmatched compared to local souvenir shops!
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Pondicherry;
