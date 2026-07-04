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

          {/* Best Hotels & Resorts Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

            {/* Nizami Heritage Background Glows (Imperial Amber & Deccani Teal) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-900/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🕌 The Imperial Pearl Capital Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Hotels & Palatial Resorts in Hyderabad
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From breathtaking, actual palace structures belonging to the Nizams to state-of-the-art corporate luxury high-rises in the tech city hubs.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Ultimate Royal Living (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      👑
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Nizami Palatial Living
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Taj Falaknuma Palace & Heritage Grand Residences
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Step back into the golden era of the Asaf Jahi dynasty. Perched 2,000 feet above the historic city lines, architectural landmarks like <span className="font-semibold text-gray-900">Taj Falaknuma Palace</span> offer a majestic horse-drawn carriage arrival, massive Venetian chandeliers, marble-laden grand staircases, and immaculate palace gardens overlooking the old city lights.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
                  Royal Horse Carriage Arrivals & Historic Grand Dining Halls
                </div>
              </div>

              {/* Card 2: Cyberabad Modern Tech Towers */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏢
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    HITEC City Tech-District Hotels
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Position your itinerary in the thriving technical heartland of Gachibowli and HITEC City. Ultra-modern properties like <span className="font-semibold text-gray-900">The Westin Mindspace</span> or ITC Kohenur deliver stunning viewports of the tech skyline, smart-automated workspace desks, and top-tier fine dining lounges.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Skyline View Infinity Pools & Automated Tech-Suite Controls
                </div>
              </div>

              {/* Card 3: Hussain Sagar Lakefront Hotels */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌊
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Hussain Sagar Lakefront Luxury
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Enjoy peaceful panoramic waterscapes right in the center of the town. Grand premium hotels lining the Hussain Sagar perimeter provide uninterrupted sights of the massive stone Buddha statue, glowing evening embankments, and easy access to Somajiguda corridors.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Panoramas of the Buddha Monolith & Deck Restaurants
                </div>
              </div>

              {/* Card 4: Banjara Hills Premium Boutiques (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌳
                    </div>
                    <span className="text-xs font-bold bg-teal-100/60 text-teal-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Elite Urban District
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Banjara Hills & Jubilee Hills Luxury Enclaves
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Anchor your stays in the most upscale, leafy residential zones of Hyderabad. High-end lifestyle spaces and luxury outposts like <span className="font-semibold text-gray-900">Park Hyatt</span> present serene architectural water features, incredible contemporary art galleries, signature spas, and absolute proximity to elite boutiques and high-profile cafes.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Boutique Spa Arcades & Fine-Art Gallery Walkways
                </div>
              </div>

              {/* Card 5: Smart Transit Airport Stays */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ✈️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Shamshabad RGIA Airport Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Designed elegantly for international flight transits. Premium spaces located right within the Rajiv Gandhi International Airport perimeter feature extensive manicured greens, rapid check-ins, sound-insulated glass setups, and direct shuttle routes.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Rapid Airport Shuttles & Sound-Insulated Relax Chambers
                </div>
              </div>

            </div>
          </section>


          {/* Restaurants & Cafes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Culinary Background Tints */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-950/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🍲 Authentic Dum Biryanis & Osmania Biscuits
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Restaurants & Food Havens in Hyderabad
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From legendary slow-cooked aromatic Dum Biryanis infused with royal saffron to vintage cafés serving hot, buttery Irani chai.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Iconic Hyderabadi Biryani Vaults (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🍲
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      The Biryani Kings
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Legendary Hyderabadi Dum Biryani Institutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Tuck into the definitive epicenter of aromatic rice craftsmanship. Heritage bastions like <span className="font-semibold text-gray-900">Bawarchi (RTC X Roads)</span>, <span className="font-semibold text-gray-900">Cafe Bahar</span>, or <span className="font-semibold text-gray-900">Shadab</span> in the Old City serve iconic hand-sealed copper handis. These are packed with perfectly long-grain basmati rice, tender spiced meat slow-marinated over charcoal, rich pure ghee swirls, and served with tangy Mirchi ka Salan.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
                  Copper-Handi Sealed Dum Methods & Rich Saffron Strands
                </div>
              </div>

              {/* Card 2: Vintage Irani Tea Hubs */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ☕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Historic Irani Cafés & Bakery Spots
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Experience the daily rhythm of the city at landmarks like <span className="font-semibold text-gray-900">Nimrah Cafe</span> right next to Charminar. Sit back with a cup of rich, creamy, slow-boiled <span className="font-semibold text-gray-900">Irani Chai</span> paired beautifully with crisp, salty Osmania biscuits or buttery tie-biscuits.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Creamy Slow-Boiled Irani Chai & Salty Osmania Bites
                </div>
              </div>

              {/* Card 3: Royal Nizami Fine Dining */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍖
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Traditional Deccani Imperial Kitchens
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Dine like royal courtiers at specialized Deccani fine-dining houses. Savour classic dishes like creamy <span className="font-semibold text-gray-900">Haleem</span> (during the festive season), ultra-tender *Pathar ka Gosht* (meat slow-cooked on slabs of granite stone), and rich apricot-based desserts like *Khubani ka Meetha*.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Granite-Stone Charcoal Grills & Golden Apricot Compotes
                </div>
              </div>

              {/* Card 4: Spicy Telugu Food Houses (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌶️
                    </div>
                    <span className="text-xs font-bold bg-teal-100/60 text-teal-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Andhra & Telangana Spice
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                    Fiery Andhra & Local Telangana Mess Networks
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore the intense, tongue-tingling culinary spice paths of the regions at spaces like <span className="font-semibold text-gray-900">Kakatiya Mess</span> or Subbaiah Gari Hotel. Feast on unlimited banana-leaf meals topped with highly fiery Gongura chutneys, pure ghee infusions, crunchy Avakaya mango pickles, and spicy country chicken gravies.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Unlimited Banana-Leaf Meals & Tangy Pungent Gongura Paste
                </div>
              </div>

              {/* Card 5: Modern Jubilee Hills Global Cafes */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍻
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Jubilee Hills Upmarket Microbreweries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Unwind in the country's most expansive, architecturally striking microbreweries and open-air multi-cuisine cafes dotted along Jubilee Hills. These stunning architectural spaces dish out global artisan cocktails alongside fusion appetizers.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Handcrafted Wheat Brews & Global Wood-Fired Sourdoughs
                </div>
              </div>

            </div>

            {/* Travel Guide Tip Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/10 via-teal-600/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-amber-900 font-bold">Hyderabad City Travel Tip:</strong> When exploring the dense historical streets surrounding Charminar, Laad Bazaar, and Chowmahalla Palace, avoid booking cabs due to tight bottleneck lanes. Prefer hopping onto the hyper-efficient **Hyderabad Metro Rail (Green/Red Lines)** to commute comfortably from modern hubs directly to the core heritage enclaves!
                </p>
              </div>
            </div>

          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/10 to-purple-300/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🏰 City of Pearls Planner
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Hyderabad
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Analyze daily cost structures to experience the perfect blend of Nizami heritage and modern tech-city vibes.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-indigo-400/60 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold border border-indigo-100 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      🥘
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Biryani Backpacker
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Perfect for exploring Old City heritage sites and authentic street food hubs on a budget.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹900 – ₹1.8k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹700</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚌 Local</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹150 – ₹400</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-indigo-600 tracking-tight">
                    ₹1,350 – ₹2,900 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-indigo-500 hover:border-indigo-400 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-indigo-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold border border-indigo-100 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Cultural Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for those seeking comfort in Hitech City or Banjara Hills with curated food tours.
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
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2.5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-indigo-600 tracking-tight">
                    ₹5,500 – ₹12.5k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-purple-400/60 shadow-md hover:shadow-xl hover:shadow-purple-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg font-bold border border-purple-100 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Royalty
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Royal Hyderabad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium stays at heritage palaces, fine-dining experiences, and private luxury transport.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹12k – ₹30k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹7k</span>
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
                    ₹18k – ₹43k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent border border-indigo-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-indigo-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-indigo-800 font-black">Pro Tip:</strong> Hyderabad's traffic is dense—try to plan your itinerary geographically (e.g., dedicated days for Old City and another for Financial District/Hitech City) to save hours in transit.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-amber-50 border border-teal-100 text-teal-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Bazaar Treasures
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
                Shopping in Hyderabad
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From shimmering pearls and antique bangles to heritage weaves, Hyderabad is a shopper's delight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      📿
                    </div>
                    <span className="text-xs font-bold bg-teal-100/60 text-teal-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Signature Craft
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                    Laad Bazaar (Choodi Bazaar)
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    The heart of Hyderabad shopping—famed for its iconic <span className="font-semibold text-gray-900">lac bangles, shimmering pearls, and traditional bridal jewelry</span> in the shadow of Charminar.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Heritage Market Hub
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    👗
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Pochampally Ikat
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover the exquisite <span className="font-semibold text-gray-900">Pochampally handloom weaves</span>, known for their unique geometric Ikat patterns and vibrant colors.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Traditional Handlooms
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🖼️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Bidriware
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore stunning <span className="font-semibold text-gray-900">Bidriware—intricate silver inlay on blackened alloy</span>—an ancient, royal craft of Hyderabad.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Ancient Royal Art
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      👘
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Fashion
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Banjara Hills & Jubilee Hills
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For the modern shopper, these areas host <span className="font-semibold text-gray-900">upscale designer boutiques, luxury retail outlets, and concept stores</span> blending traditional aesthetics with contemporary fashion.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Modern Luxury Retail
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏺
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Kondapalli Toys
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Pick up hand-carved, lightweight <span className="font-semibold text-gray-900">Kondapalli wooden toys</span>, depicting rural life, mythology, and local traditions.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Artisan Wood Crafts
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/10 via-amber-500/5 to-transparent border border-teal-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-teal-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-teal-900 font-bold">Shopping Tip:</strong> When buying pearls in Laad Bazaar, always look for reputable sellers and ask for a certificate of authenticity if you're making a high-value purchase!
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Hyderabad;
