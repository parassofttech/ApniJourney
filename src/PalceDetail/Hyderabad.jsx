// src/components/Hyderabad.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Landmark, Utensils, Camera, Plane, Building2 } from "lucide-react";

const Hyderabad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/charminar-mosque-hyderabad-telangana-3-attr-about?qlt=82&ts=1742173420954"
          alt="Charminar Hyderabad"
          className="w-full h-[420px] object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1597004921390-b10fcefb74b1?auto=format&fit=crop&w=1200&q=80")
          }
        />

        <div className="p-8">
          {/* Title */}
          <motion.h1
            className="text-4xl font-extrabold text-center text-purple-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🕌 Hyderabad – The City of Pearls & Nizams
          </motion.h1>

          <motion.p
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hyderabad, the capital of Telangana, is where **heritage meets modernity**.
            From the royal **Charminar** and **Golconda Fort** to the shining **HITEC City**
            skyline, Hyderabad offers a mix of Mughal-era charm and tech-driven energy.
            And of course, it’s the land of the **world-famous Hyderabadi Biryani**! 🍛
          </motion.p>

          {/* Introduction Section: Hyderabad */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Nizami Heritage & Cyber Horizon Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-purple-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🕌</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Hyderabad
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The City of Pearls and Nizams—a brilliant historical center where 400-year-old minarets seamlessly flank high-tech corporate cyber glass.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">👑</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Where Old-World Royalty Meets HITEC City
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Hyderabad, sitting majestically on the Deccan Plateau along the banks of the Musi River, is a masterclass in cultural duality. Founded by the Qutb Shahi dynasty, it evolved under the fabulously wealthy <span className="font-semibold">Asaf Jahi Nizams</span> into a global epicenter for diamond trading, fine pearls, and heavy literature.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Today, the aroma of slow-cooked classic biryani effortlessly drifts across ancient stone arches directly into state-of-the-art tech districts, mapping a city that deeply respects its roots while leading innovation.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">1591</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Year Founded</p>
        </div>
        <div className="bg-purple-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-purple-600">435 Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Charminar Legacy</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The Iconic Charminar */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Legendary Charminar
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand beneath the architectural heartbeat of the old city. This grand, four-minaret limestone structure rises above bustling bazaars, offering sweeping second-story balcony views over streets rich with pearl merchants.
        </p>
      </div>

      {/* Card 2: Golconda Fort Echoes */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🛡️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Acoustics of Golconda Fort
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore a terrifyingly clever medieval citadel. Test the incredible <span className="font-semibold">acoustic engineering</span> where a single handclap at the main dome gates rings out clearly inside the royal pavilions 1 km away on the hill.
        </p>
      </div>

      {/* Card 3: Chowmahalla Palace Royalty */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          💎
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          Chowmahalla Grandeur
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into absolute aristocratic wealth. Modeled explicitly after the Shah's palace in Tehran, this grand estate highlights breathtaking Belgian crystal chandeliers, vintage rolls royces, and walls built for royal ceremonies.
        </p>
      </div>

      {/* Card 4: Culinary Rituals - Hyderabadi Biryani */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🍛
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          World-Famous Dum Gastronomy
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Indulge in a royal sensory banquet. Treat yourself to world-renowned, slow-cooked <span className="font-semibold">Hyderabadi Dum Biryani</span>, rich Haleem, and sugary Shahi Tukda across legacy old-city restaurants or sleek dining quarters.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-purple-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Hyderabad is an exceptional cultural bridge. It perfectly pairs the dense heritage gravity of prehistoric fortresses and royal architecture with the hyper-modern convenience of an expansive cyber megalopolis, offering a completely unique city landscape.
      </p>
    </div>
  </div>

</section>

         

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Hyderabad Gallery – Heritage Meets Modernity
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://s7ap1.scene7.com/is/image/incredibleindia/golconda-fort-hyderabad-secunderabad-telangana-3-musthead-hero?qlt=82&ts=1742197014098",
                "https://www.hyderabadtourism.travel/images//v2/header-places/chowmahalla-palace-hyderabad-tourism-entryfee-timings-reviews-header.jpg",
                "https://sceneloc8.com/wp-content/uploads/2024/03/Qutb-Shahi-Tombs.png",
                "https://rangandatta.wordpress.com/wp-content/uploads/2016/08/monolithic-buddha-6.jpg",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f3/ad/1a/filmi-duniya.jpg?w=1200&h=-1&s=1",
                "https://www.holidify.com/images/cmsuploads/compressed/250614-ci-laad-bazaar-charminar-hyderabad-india-11_20180205200239_20180806160227.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Hyderabad view"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1597004921390-b10fcefb74b1?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Nizami Heritage & Modern Tech Skyline Theme) */}
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
      Best Time to Visit Hyderabad
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect Deccani getaway aligned with pleasant fort-walking weather and buzzing evening lake breezes.
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
          The Pearl City Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Hyderabad is exceptionally pleasant and travel-friendly from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. During this winter sequence, the harsh Deccan sun mellows down, offering crisp, breezy temperatures ranging between 15°C - 29°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these premium months, navigating the vast architectural loops of <span className="font-semibold text-gray-900">Golconda Fort</span>, exploring the ornate chambers of Chowmahalla Palace, or walking around the bustling Charminar markets feels completely comfortable.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-indigo-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
          <strong className="text-amber-950">Pro Tip:</strong> Looking for a rich cultural experience? Try to align your visit with the annual <strong className="text-amber-950">Numaish Exhibition</strong> (held through January and February). It is a massive heritage shopping loop that brings unique handicrafts from all over India directly to Nampally.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🕌
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Crisp Winters (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The grand tourist peak. Perfect weather for all-day heritage walks, breezy evening boating loops at Hussain Sagar Lake, and exploring Ramoji Film City.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Nizami Glory
        </span>
      </div>

      {/* Season 2: Monsoon Shifts */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
              Monsoon Relief (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Moderate Deccani downpours wash the city parks and fort ruins into clean green setups. Ideal for long evening drives across the outer ring road and piping hot Irani Chai sessions.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Fresh Breezes
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
              Summer Scorcher (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Intense, dry heat vectors pushing past 40°C. Outdoor exploration triggers exhaustion quickly, making it a great phase to explore indoor museums like Salar Jung or chill at premium breweries in Hitech City.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Indoor Loops
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

export default Hyderabad;
