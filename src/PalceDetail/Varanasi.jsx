import React from "react";
import { motion } from "framer-motion";
import { MapPin, Church, Info, Camera, Sparkles, Ship } from "lucide-react";

const Varanasi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://d22eux7aqicogj.cloudfront.net/assets/destination-hero-image/varanasi.webp"
          alt="Varanasi Ghats"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1581031405421-8a9e49c3c7b4?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content Section */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-orange-800 mb-4"
          >
            🕉️ Varanasi – The Spiritual Capital of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Varanasi, also known as **Kashi** or **Banaras**, is one of the
            oldest living cities in the world. Situated along the sacred **Ganges
            River**, it is a hub of **spirituality, culture, rituals, and festivals**.
          </motion.p>

          {/* Introduction Section: Varanasi */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-red-500 selection:text-white">

  {/* Advanced Radial Background Glows (Mystical Kashi Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-amber-50 border border-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🪔</span> Spiritual Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-red-950 to-gray-950">
      Discover Varanasi
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The luminous city of lights, standing as the living beating heart of Indian civilization, philosophy, and timeless spirituality.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-red-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🕉️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Oldest Living City on Earth
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Varanasi, also known as Kashi or Banaras, curves majestically along the sacred crescent of the Ganga River in Uttar Pradesh. It is a city older than history, tradition, and even legend, continuously inhabited for over 3,000 years.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Revered as the absolute abode of Lord Shiva, it serves as the ultimate threshold between the earthly world and cosmic liberation (Moksha), where life and eternity meet on stone steps.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-red-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-red-600">84+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Iconic Ghats</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">3000+ Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Living History</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Kashi Vishwanath Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl font-bold text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
          🔱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          The Sacred Golden Spire
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The spiritual epicenter. Navigate the vibrant, historic lanes to reach the grand <span className="font-semibold">Kashi Vishwanath Temple</span>, featuring majestic gold-plated spires and the newly built, spacious river corridor.
        </p>
      </div>

      {/* Card 2: Subah-e-Banaras & Evening Aarti */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🔥
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Ganga Aarti Spectacular
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Witness intense devotion at <span className="font-semibold">Dashashwamedh Ghat</span>. Watch synchronized priests wave massive brass lamps under rhythmic chants, turning the twilight river into a sea of floating gold.
        </p>
      </div>

      {/* Card 3: Banarasi Weaving Heritage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          🧵
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          Royal Banarasi Silks
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Discover a legacy of pure art. Explore centuries-old weaver colonies where artisans manually craft majestic <span className="font-semibold">Banarasi Silk Sarees</span> using fine gold and silver metallic threads (Zari).
        </p>
      </div>

      {/* Card 4: Street Food & Saffron Lassi */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🍲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Iconic Food Trail
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Savor flavors out of earthen kulhads. Indulge in crisp Kachori Sabzi, thick creamy Malaiyo, saffron-loaded thick lassis, and finish the street food journey with an authentic, refreshing <span className="font-semibold">Banarasi Paan</span>.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-red-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Varanasi isn't just a place to visit—it is an existential experience. It strips away the superficial noise of modern life, offering an overwhelming, deep dive into raw spiritual energy, magnificent rituals, and the profound cycle of human existence.
      </p>
    </div>
  </div>

</section>

         

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Varanasi
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://kashiyatra.in/wp-content/uploads/2023/04/varanasi-tour-package.jpg",
                "https://dhramshala.in/wp-content/uploads/2023/09/varanasi-ghats.jpg",
                "https://resources.news.e.abb.com/images/2022/10/11/1/resize_Varanasi-image2.jpg",
               
              
                
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Varanasi"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1581031405421-8a9e49c3c7b4?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>
          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

  {/* Advanced Radial Background Glows (Mystic Ghats & Eternal Kashi Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-rose-50 border border-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🪔 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
      Best Time to Visit Varanasi
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect spiritual journey aligned with pleasant Ganga breeze loops and mesmerizing festival calendars.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-orange-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-2xl font-bold mb-6 border border-orange-100">
          🕉️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Spiritual Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Varanasi is at its cultural and atmospheric peak from <span className="font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these cooler months, temperatures range between a comfortable 10°C - 25°C, creating the ideal setting for exploring the narrow alleys and sitting on the open stone ghats.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this magnificent window, high-spirit hubs like <span className="font-semibold text-gray-900">Dashashwamedh Ghat</span>, Assi Ghat, and the Kashi Vishwanath corridor burst with cultural music festivals, early morning boat loops, and grand evening rituals.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-rose-50 rounded-2xl border border-orange-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-orange-900 font-medium leading-relaxed">
          <strong className="text-orange-950">Pro Tip:</strong> Want to witness Dev Deepawali when millions of diyas light up the entire riverfront? Target the mid-November window, but make sure to book boat allocations and stays months in advance.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🙏
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Winter Breeze (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The high pilgrim and tourist season. Perfect for Subah-e-Banaras sunrise loops, temple exploration, and witnessing the grand Mahashivratri celebrations.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Mystic Peak
        </span>
      </div>

      {/* Season 2: Summer Heat */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Summer Radiance (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Scorching sub-continental heat (up to 44°C). Best suited for budget backpackers looking for crowd-free ghat exploration during twilight hours and peaceful ashram retreats.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Quiet Solitude
        </span>
      </div>

      {/* Season 3: Monsoon Floods */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Monsoon Surges (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Heavy rains raise Ganga water levels, often submerging the ghat steps and restricting boat rides, but the dramatic sky setups create incredibly cinematic views.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
          High Water Alerts
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

export default Varanasi
