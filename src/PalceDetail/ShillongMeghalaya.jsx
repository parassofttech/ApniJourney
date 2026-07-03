import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Camera, Umbrella } from "lucide-react";

const ShillongMeghalaya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Shillong_meghalaya.jpg"
          alt="Shillong"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1596568942428-28c04f6bfb5f?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-green-800 mb-4"
          >
            🌄 Shillong – Scotland of the East
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Shillong, the capital of **Meghalaya**, is known as the **Scotland of the East** 
            for its rolling hills, waterfalls, and serene lakes. Rich in culture and natural beauty, 
            Shillong is a paradise for travelers seeking adventure, tranquility, and scenic landscapes.
          </motion.p>


        {/* Introduction Section: Shillong */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">

  {/* Advanced Radial Background Glows (Misty Highlands Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-sky-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌲</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Discover Shillong
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Scotland of the East, where manicured colonial lawns, roaring waterfalls, and a legendary rock music culture live inside the clouds.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">⛈️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The High-Altitude Capital of Clouds
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Shillong, the capital of Meghalaya perched at 1,525 meters, rests on a majestic plateau surrounded by rolling pine hills. Its distinct topography reminded European settlers of the Scottish highlands, earning its timeless romantic nickname.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        As the vibrant home of the matrilineal <span className="font-semibold">Khasi Tribe</span>, Shillong beautifully layers a classic British colonial architecture setup with incredible indie music scenes, heavy rains, and rich traditional folklore.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">1,525m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Average Altitude</p>
        </div>
        <div className="bg-sky-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-sky-600">Rock Hub</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Music Capital</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Umiam Lake */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          ⛵
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          The Pristine Umiam Lake
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Your stunning gateway to the city. Better known as <span className="font-semibold">Barapani</span>, this massive, deep-blue water reservoir is completely encircled by dense, soft-whispering coniferous pine forests and misty hillsides.
        </p>
      </div>

      {/* Card 2: Rock Music & Café Culture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🎸
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          India's Rock Music Capital
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Immerse yourself in a roaring sonic history. Walk into the cozy, ambient cafes of <span className="font-semibold">Police Bazar</span> or Laitumkhrah to witness an authentic live guitar scene, western fashion trends, and local indie bands.
        </p>
      </div>

      {/* Card 3: Waterfalls & Shillong Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🏞️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Elephant Falls & Views
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Chasing roaring mountain streams. Explore the iconic multi-tiered <span className="font-semibold">Elephant Falls</span> cutting through rocks, or drive up to the highest point at Shillong Peak for a 360° view of the entire valley floor.
        </p>
      </div>

      {/* Card 4: Khasi Culinary Trails */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🍲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Authentic Khasi Flavors
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Savor true tribal hospitality. Indulge in classic Khasi street dishes like <span className="font-semibold">Jadoh</span> (aromatic rice cooked with meat stock), Dohneiiong (pork in black sesame paste), and comforting hot local stews.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-teal-700 via-emerald-700 to-sky-700 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-teal-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Shillong is a stylish, rain-washed hillside escape. It perfectly blends a refreshing, cloud-filled mountain climate with a premium city pulse, serving as the perfect jumping-off point to explore Meghalaya's deep canyons and living root bridges.
      </p>
    </div>
  </div>

</section>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Info /> Historical Background
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Shillong became the capital of Meghalaya in **1972** and has a rich history influenced 
                by **tribal cultures** and **British colonial presence**. The city is known for its 
                educational institutions and vibrant music scene.
              </p>
            </motion.div>

            {/* Lakes & Waterfalls */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Lakes & Waterfalls
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏞️ <b>Umiam Lake:</b> Boating & serene views</li>
                <li>💧 <b>Elephant Falls:</b> Picturesque waterfall</li>
                <li>🌊 <b>Laitlum Canyons:</b> Scenic cliffs & photography</li>
              </ul>
            </motion.div>

            {/* Adventure & Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Umbrella /> Adventure & Experiences
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🥾 Trekking through Shillong Hills</li>
                <li>🚣 Kayaking and boating in Umiam Lake</li>
                <li>🏞️ Explore Cherrapunji and Mawsynram nearby</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Shillong Airport (SHL)</li>
                <li>🚆 Nearest Railway Station: Guwahati Railway Station (~100 km)</li>
                <li>🚌 Local Transport: Taxis, shared cabs & buses</li>
                <li>🕒 Best Time to Visit: September – May</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Shillong
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/1/15/Umiam_Lake_Shillong.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/6/65/Elephant_Falls.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/3/38/Laitlum_Canyon.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/0/08/Shillong_Street.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b6/Shillong_Market.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/5/5d/Shillong_Hills.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Shillong"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1589654319193-3eac4b1b99f0?auto=format&fit=crop&w=900&q=80")
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

export default ShillongMeghalaya;

