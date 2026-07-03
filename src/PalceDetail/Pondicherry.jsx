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

        </div>
      </motion.div>
    </div>
  );
};

export default Pondicherry;
