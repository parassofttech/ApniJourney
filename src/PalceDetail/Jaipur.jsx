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
        className="w-full mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
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

      {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Jaipur
            </h2>
            <div className="grid sm:grid-cols-2 
            lg:grid-cols-3 gap-4">
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


      {/* Best Hotels Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
  
  {/* Advanced Radial Background Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏨 Accommodation Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Hotels in Jaipur
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Handpicked stays curated perfectly for luxury seekers, heritage wanderers, and smart backpackers.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Luxury Palaces (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌟
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Grand Heritage Palaces
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience world-class royal hospitality at legendary palaces like <span className="font-semibold text-gray-900">Rambagh Palace</span> and <span className="font-semibold text-gray-900">The Taj Mahal Palace (Jai Mahal)</span>. Flawless options for ultra-luxury leisure, complete with peacock-filled courtyard lawns, marble arches, regal vintage suites, and holistic royal wellness spas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Ultra-Luxury & Living Legends
      </div>
    </div>

    {/* Card 2: Mid-Range Heritage Hotels */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Mid-Range Haveli Stays
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Highly comfortable, artistic vibes at historic properties like <span className="font-semibold text-gray-900">Alsisar Haveli</span> and <span className="font-semibold text-gray-900">Samode Haveli</span>. These deliver upscale traditional carved rooms, stunning swimming pools, arches, and rich breakfast buffets at highly optimized prices—perfect for families.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Value & Royal Aesthetics
      </div>
    </div>

    {/* Card 3: Budget Backpackers */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          💰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Social Hostels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Highly affordable backpacker hostels and vibrant common workspaces nestled along areas like <span className="font-semibold text-gray-900">C-Scheme & MI Road</span>. Unmatched setups for solo travelers and remote creators looking to network over rooftop folk music nights.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Backpacker Centric
      </div>
    </div>

    {/* Card 4: Walled City Facing Stays (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🕌
          </div>
          <span className="text-xs font-bold bg-purple-100/60 text-purple-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Prime Location
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
          City Palace & Walled City Boutique Hotels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Wake up straight to views of historic pink avenues. Premium boutique properties situated directly near the bustling lanes of <span className="font-semibold text-gray-900">Johari Bazaar</span> or facing the serene waters of <span className="font-semibold text-gray-900">Jal Mahal</span>. Secure these dynamic balconies to unlock instant access to traditional block-print markets, exquisite heritage interiors, and rooftop views of old forts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
        Heritage Walled City Vibe
      </div>
    </div>

    {/* Card 5: Modern Luxury Hotels */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏢
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Modern Business Luxury
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Sleek, high-concept modern luxury business hotels near the premium corporate and dining lines of <span className="font-semibold text-gray-900">Malviya Nagar & Tonk Road</span>. These offer infinity pools, centralized air conditioning, gym frameworks, and premium multi-cuisine fine dining.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Contemporary Comforts
      </div>
    </div>

    {/* Card 6: Exclusive Luxury Desert Resort Villas */}
    <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center shrink-0 border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🏡
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
            Exclusive Luxury Heritage Villas & Fort Resorts
          </h3>
          <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
            Tailor-made for large group retreats and family celebrations. Independent luxury villas scattered around Kukas and Jaipur outskirts feature dedicated private plunge pools, authentic stone architecture, courtyard layouts, private parking spots, and 100% boundary privacy for a laid-back royal experience.
          </p>
        </div>
      </div>
      <span className="text-xs font-bold tracking-wider uppercase bg-red-100/70 text-red-800 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
        Maximum Privacy
      </span>
    </div>

  </div>

  {/* Smart Booking Advisory Glass Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-amber-900 font-bold">Booking Window Tip:</strong> Planning a trip during the high-demand festival seasons of Diwali, Literary Fest, or winter holidays? Make sure to lock down your haveli or palace bookings early to avoid heavily inflated season surges and secure rooms with proper cultural views!
      </p>
    </div>
  </div>

</section>


{/* Restaurants Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">
  
  {/* Dynamic Culinary Background Tints */}
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
      Best Restaurants & Cafes in Jaipur
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Savor everything from magnificent palace restaurants to authentic hot Rajasthani legacy kitchens.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Rajasthani Thali Special (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍲
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Must Visit
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Authentic Dal Baati Churma & Royal Thalis
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor Rajasthan's true culinary pride at legendary landmarks like <span className="font-semibold text-gray-900">Laxmi Mishthan Bhandar (LMB)</span> and the cultural village layout of <span className="font-semibold text-gray-900">Chokhi Dhani</span>. Do not leave the city without diving into rich, ghee-laden Dal Baati Churma, Ker Sangri, Gatte ki Sabzi, and crispy hot Pyaz Kachoris.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Pure Ghee Delicacies & Legacy Spots
      </div>
    </div>

    {/* Card 2: Aesthetic Rooftop Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          📸
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Hawa Mahal Facing Cafes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Unwind completely with straight-on architectural views of the palace of winds across rooftop lounges like <span className="font-semibold text-gray-900">The Wind View Cafe</span> or <span className="font-semibold text-gray-900">Tattoo Cafe</span>. The absolute premier choice for evening sips, light snacks, and postcard-perfect photography loops.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Wind Palace View Sips
      </div>
    </div>

    {/* Card 3: Royal Fine Dining */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          👑
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Palace Fine Dining
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Indulge in premium high-end royal environments at iconic elite restaurants like <span className="font-semibold text-gray-900">Suvarna Mahal</span> or the stunning indoor frescoes of heritage structures, offering masterfully curated Indian platters fit for kings.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Regal Heritage Ambience
      </div>
    </div>

    {/* Card 4: Non-Veg Heritage Cuisine (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍖
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Heritage Non-Veg
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
          Legendary Laal Maas & Royal Meat Crafts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Embark on an intense spice journey with signature Rajput warrior recipes. Make sure to try the authentic fiery <span className="font-semibold text-gray-900">Laal Maas</span> cooked with Mathania chilies at historic hot spots like <span className="font-semibold text-gray-900">Handi Restaurant</span> or the upscale dining rooms of NIROS, known for rich, slow-simmered gravy setups.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Authentic Rajput Kitchens
      </div>
    </div>

    {/* Card 5: Upscale Modern Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Boutique Artisan Cafes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Unwind your afternoons at beautifully designed contemporary spots in <span className="font-semibold text-gray-900">C-Scheme</span> like <span className="font-semibold text-gray-900">Anokhi Cafe</span> or <span className="font-semibold text-gray-900">Tapri Central</span> for unmatched gourmet organic salads, loose-leaf chai varieties, and modern global fusion snacks.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Chic Aesthetics & Artisanal Blends
      </div>
    </div>

    {/* Card 6: Legendary Sweet & Street Hubs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍯
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Traditional Ghewar & Street Gems
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Jaipur packs highly distinct dessert cultures. Explore world-famous saffron-infused <span className="font-semibold text-gray-900">Ghewar</span> at <span className="font-semibold text-gray-900">Rawat Mishthan Bhandar</span>, rich creamy kulfis, or traditional thick lassi served in earthen kulhads at the iconic Lassiwala on MI Road.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Kulhad sips & Heritage Dessert Crafts
      </div>
    </div>

  </div>

  {/* Foodie Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-rose-900 font-bold">Foodie Tip:</strong> Always make it a priority to head down to the Hawa Mahal facing rooftop cafes around 6:35 PM. Watching the intricate palace facades light up in amber hues with a piping hot cup of masala tea is an irreplaceable royal ritual!
      </p>
    </div>
  </div>

</section>


{/* Budget Breakdown Section */}
<section className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 selection:bg-cyan-500 selection:text-white">
  
  {/* Cyber-Atmospheric Background Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-emerald-300/10 to-cyan-300/10 blur-[100px] md:blur-[140px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="text-center mb-16">
    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
      ⚡ Financial Planner
    </span>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
      Budget Breakdown for Manali
    </h2>
    <p className="text-gray-500 mt-3 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Analyze daily cost structures and pick the ideal travel configuration that matches your pace.
    </p>
  </div>

  {/* Premium Tier Matrix */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

    {/* Card 1: Budget Traveler */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200/80 hover:border-emerald-400/60 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 rounded-3xl p-6 md:p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
            💸
          </div>
          <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
            Eco Tier
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Budget Nomad
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Perfect for backpackers and solo travelers looking to scale Manali efficiently on low overheads.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹900</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹900</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🛵 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-emerald-600 tracking-tight">
          ₹1,600 – ₹3,200 <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

    {/* Card 2: Mid Range (Featured Column) */}
    <div className="group bg-white border-2 border-cyan-500 hover:border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 rounded-3xl p-6 md:p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-cyan-500/5 mt-4 md:mt-0">
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md z-10 whitespace-nowrap">
        Recommended
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg font-bold border border-cyan-100 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
            🏔️
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-md font-bold">
            Balanced
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Mid-Range Explorer
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Ideal setup for couples and family units aiming for maximum comfort with zero waste.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,500 – ₹6,500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹1,000 – ₹2,500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹1,200 – ₹2,200</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-cyan-600 tracking-tight">
          ₹5,000 – ₹11,000 <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

    {/* Card 3: Luxury */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200/80 hover:border-purple-400/60 shadow-md hover:shadow-xl hover:shadow-purple-500/5 rounded-3xl p-6 md:p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg font-bold border border-purple-100 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
            🌟
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-bold">
            Elite Premium
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Luxury Opulence
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Crafted for high-end honeymoons, elite experiential vacations, and premium resort stays.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹9,000 – ₹35k+</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,500 – ₹7,000</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/70">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,500 – ₹5,500</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-purple-600 tracking-tight">
          ₹14,000 – ₹50k+ <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

  </div>

  {/* Pro-Tip Floating Banner */}
  <div className="mt-14 px-2">
    <div className="flex items-start md:items-center gap-3.5 bg-gradient-to-r from-cyan-500/10 via-emerald-500/5 to-transparent border border-cyan-500/20 backdrop-blur-md p-4 md:px-6 md:py-4 rounded-2xl max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0 mt-0.5 md:mt-0">💡</span>
      <p className="text-cyan-950 font-semibold text-xs md:text-[15px] leading-relaxed">
        <strong className="text-cyan-800 font-black mr-1">Smart Commute:</strong>Sharing local cabs via the union setups or renting two-wheelers early in the day is highly recommended to bypass peak mountain blockages and explore outer valleys freely!
      </p>
    </div>
  </div>

</section>

{/* Shopping Section */}
<section className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 selection:bg-violet-500 selection:text-white">
  
  {/* Dynamic Retail Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-violet-400/15 blur-[100px] md:blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-amber-400/15 blur-[100px] md:blur-[120px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-amber-50 border border-violet-100 text-violet-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🛍️ Retail Guide
    </div>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 bg-clip-text">
      Shopping in Manali
    </h2>
    <p className="text-gray-500 mt-3 text-base md:text-lg max-w-xl mx-auto font-medium">
      Explore bustling mountain avenues, authentic handloom cooperatives, and Tibetan artisan craft hubs.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Tibetan Market (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-violet-300 shadow-lg hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-violet-50 text-xl flex items-center justify-center border border-violet-100/70 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🎡
          </div>
          <span className="text-xs font-bold bg-violet-100/60 text-violet-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Iconic Bazaars
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-violet-800 transition-colors duration-200">
          Tibetan Market & Flea Alleys
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          Dive deep into mountain commerce at the iconic central <span className="font-semibold text-gray-900">Tibetan Market</span>. Perfect spots to scout for detailed silver amulets, bamboo-crafted artifacts, hand-woven carpets, spinning prayer wheels, and intricate singing bowls.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-violet-600 tracking-wider uppercase">
        Vibrant Cultural Bargains
      </div>
    </div>

    {/* Card 2: Winter & Mountain Fashion */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧥
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Winter Wear
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          Upgrade your mountain wardrobe instantly along <span className="font-semibold text-gray-900">Mall Road</span> lanes. Score heavy fleece jackets, cozy woolen caps, polarized snow shades, and embroidered leather boots.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Alpine & Warm Attire
      </div>
    </div>

    {/* Card 3: Handloom & Handicrafts */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧶
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Kullu Handlooms
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          The valley boasts a rich heritage of tangible art. Discover certified pure wool weavers at state cooperatives like <span className="font-semibold text-gray-900">Bhuttico</span>, famous for geometric Kullu shawls and heavy pashminas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Artisan Weaves & Heritage
      </div>
    </div>

    {/* Card 4: Old Manali Boutiques (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏘️
          </div>
          <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Bohemian Retail
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          Old Manali Alley Shops
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          Experience a laid-back retail journey blended with hippy subcultures inside the rustic slopes of <span className="font-semibold text-gray-900">Old Manali Lanes</span>. These boutique wooden shops bring together indie silver jewelry, hemp bags, customized dreamcatchers, and trippy custom-painted merchandise.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Boho Hillside Emporiums
      </div>
    </div>

    {/* Card 5: Local Food Souvenirs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍎
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Orchard Treasures
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          Take home tactile memories ranging from farm-fresh Apple Jams and organic rhododendron juices to local wild honey and packaged Himachali fruit wines.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Flavors & Fresh Preserves
      </div>
    </div>

    {/* Card 6: Herbal Extracts & Saffron */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌱
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Spices & Shilajit
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          Navigate legacy corner stores tucked inside <span className="font-semibold text-gray-900">Manu Market</span> for budget-friendly authentic items like pure strands of Kashmiri saffron, organic tea packs, and high-altitude resin extracts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        High-Altitude Herbal Roots
      </div>
    </div>

  </div>

  {/* Smart Retail Glass Advisory Banner */}
  <div className="mt-12 px-2">
    <div className="flex items-start md:items-center gap-3 bg-gradient-to-r from-violet-500/10 via-amber-500/5 to-transparent border border-violet-100/70 backdrop-blur-md p-4 md:px-6 md:py-4 rounded-2xl max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0 mt-0.5 md:mt-0">💡</span>
      <p className="text-violet-950 font-medium text-xs md:text-sm leading-relaxed">
        <strong className="text-violet-900 font-bold mr-1">Shopping Tip:</strong>Polite bargaining works wonderfully in open flea stalls and the Tibetan market! However, for pure woolen items like handloom blankets and shawls, always stick to authorized fixed price outlets like Bhuttico to ensure genuine quality.
      </p>
    </div>
  </div>

</section>

{/* Safety Tips Section */}
<section className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 selection:bg-rose-500 selection:text-white">
  
  {/* Dynamic Safeguard Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-rose-400/10 blur-[100px] md:blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-blue-400/15 blur-[100px] md:blur-[130px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-blue-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🛡️ Travel Advisory
    </div>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 bg-clip-text">
      Safety Tips in Manali
    </h2>
    <p className="text-gray-500 mt-3 text-base md:text-lg max-w-xl mx-auto font-medium">
      Proactive guidelines to keep your alpine getaway secure, smooth, and weather-resilient.
    </p>
  </div>

  {/* Asymmetric Security Bento Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Mountain Weather Safety (Featured Large Block) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏔️
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Critical Guide
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Mountain Terrains & Landslides
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          The valley weather can shift drastically within hours. Strictly avoid trekking or driving during flash monsoon alerts or heavy unmonitored winter blizzards. Always track local weather logs before heading to high elevations like <span className="font-semibold text-rose-600">Rohtang Pass or Atal Tunnel</span>, and stay clear of loose gravel rock faces.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        High-Altitude Terrain Security
      </div>
    </div>

    {/* Card 2: Mountain Driving Regulations */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏍️
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Transport & Hairpin Bends
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          Always sound honks at steep blind curves and use low gears while coming downhill. Watch out for slick <span className="font-semibold text-gray-900">Black Ice</span> patches in early winter mornings, and never speed through mountain pathways.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Safe Commute Rules
      </div>
    </div>

    {/* Card 3: River Currents & Beas Advisory */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌊
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Beas River Warnings
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          The currents of the Beas River are exceptionally strong and freezing cold due to glacial melts. Do not walk over slippery boulders near river beds for photos, and stay away from unmonitored river banks after dark.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Glacial Stream Awareness
      </div>
    </div>

    {/* Card 4: Adventure Sports Audit (Featured Large Block) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🪂
          </div>
          <span className="text-xs font-bold bg-sky-100/60 text-sky-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Operator Audit
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-sky-800 transition-colors duration-200">
          Adventure Sports Protocols
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          Ensure you deal exclusively with licensed, government-approved adventure operators across <span className="font-semibold text-gray-900">Solang Valley and Pirdi</span>. Always double-check harness buckles and equipment health before paragliding, zorbing, or white-water river rafting.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Verified Operators Only
      </div>
    </div>

    {/* Card 5: Acclimatization & AMS */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🩺
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Altitude Sickness
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          When ascending fast towards mountain passes higher than 10,000 feet, give your body time to adapt. Carry basic altitude sickness remedies, drink warm fluids, and do not overexert instantly on trails.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        AMS & Air Pressure Checks
      </div>
    </div>

    {/* Card 6: Layer Management */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧥
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Thermal Layer Defense
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mt-3">
          Counter sharp temperature drops by always moving around in efficient inner thermals and wind-proof outer shells. Pack strong moisturizers to prevent cold wind rashes on open skin.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Alpine Layer Management
      </div>
    </div>

  </div>

  {/* Reassuring Advisory Footnote */}
  <div className="mt-12 px-2">
    <div className="flex items-start md:items-center gap-3 bg-gradient-to-r from-rose-500/10 via-blue-500/5 to-transparent border border-rose-100/70 backdrop-blur-md p-4 md:px-6 md:py-4 rounded-2xl max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0 mt-0.5 md:mt-0">💡</span>
      <p className="text-rose-950 font-medium text-xs md:text-sm leading-relaxed">
        <strong className="text-rose-900 font-bold mr-1">Confidence Note:</strong>Manali is incredibly peaceful, hospitable, and safe for all global and domestic travelers. Simply respecting standard mountain rules and tracking current route logs is more than enough to lock in an unmatched Himalayan journey!
      </p>
    </div>
  </div>

</section>
          

          

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
