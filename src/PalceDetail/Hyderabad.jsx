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
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
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

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Historical Landmarks */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-3">
                <Landmark /> Historical Landmarks
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏰 Golconda Fort – echoing walls & royal history</li>
                <li>🕌 Charminar – Hyderabad’s iconic 16th-century monument</li>
                <li>💎 Chowmahalla Palace – grandeur of the Nizams</li>
                <li>🕍 Qutb Shahi Tombs – intricate Indo-Islamic architecture</li>
              </ul>
            </motion.div>

            {/* Cuisine */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Utensils /> Culinary Delights
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🍗 Hyderabadi Biryani – world-famous & flavorful</li>
                <li>🥘 Haleem – Ramadan specialty dish</li>
                <li>☕ Irani Chai & Osmania Biscuits – cafe culture of Hyderabad</li>
                <li>🍢 Pathar-ka-Gosht & Double-ka-Meetha desserts</li>
              </ul>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-pink-50 border border-pink-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Camera /> Top Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🌇 Hussain Sagar Lake & Buddha Statue</li>
                <li>🎡 Ramoji Film City – world’s largest film studio</li>
                <li>🛍️ Laad Bazaar – pearls, bangles & handicrafts</li>
                <li>🏙️ HITEC City – India’s Silicon Valley of the South</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Rajiv Gandhi International Airport</li>
                <li>🚆 Hyderabad Deccan Station (Nampally)</li>
                <li>🚗 Metro & local cabs available throughout the city</li>
                <li>🕒 Best Time to Visit: October – February</li>
              </ul>
            </motion.div>
          </div>

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
        </div>
      </motion.div>
    </div>
  );
};

export default Hyderabad;
