// src/components/RannOfKutch.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Tent, Plane, Camera, Gift } from "lucide-react";

const RannOfKutch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://www.laurewanders.com/wp-content/uploads/2024/12/Great-Rann-of-Kutch00001.jpg"
          alt="Rann of Kutch"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1577814288070-91c598d5947c?auto=format&fit=crop&w=1200&q=80")
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
            🏜️ Rann of Kutch – The White Desert of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
          >
            Spread across the **Thar Desert**, the Rann of Kutch in Gujarat is one of
            the world’s largest salt deserts. Every winter, it transforms into a
            cultural carnival during the **Rann Utsav**, where the desert glows under
            the moonlight and folk music fills the air. ✨
          </motion.p>

          {/* Introduction Section: Rann of Kutch */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-600 selection:text-white">

  {/* Advanced Radial Background Glows (Surreal Salt Desert & Moonlit Night Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-400/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-slate-100 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏜️</span> Landscape Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
      Discover Rutch
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Great Rann of Kutch—a colossal, blindingly white salt desert that morphs into a surreal, glowing silver mirror under a full moon.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🧂</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Infinite White Salt Wilderness
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        The Great Rann of Kutch in Gujarat is one of the largest salt deserts in the world. Spanning over 7,500 square kilometers, this seasonal salt marsh remains completely submerged under shallow sea waters during monsoons, leaving behind an endless, crusty white landscape as it dries.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        It is a land of sensory contradictions—where a stark, zero-vegetation flatline completely collides with the hyper-vibrant attire, mirror-work crafts, and rhythmic desert folk music of the nomadic <span className="font-semibold">Kutchi tribes</span>.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-indigo-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-indigo-600">7,500+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Sq Kilometers</p>
        </div>
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">4 Months</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Rann Utsav festival</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The Full Moon Magic */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          🌕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Surreal Full Moon Nights
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience optical poetry. Standing in the middle of the desert on a clear full moon night reveals an ethereal glowing silver landscape, where the flat horizon dissolves entirely into the starry sky.
        </p>
      </div>

      {/* Card 2: Rann Utsav Tent City */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🎪
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          The Grand Rann Utsav
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Immerse in desert luxury. The winter festival transforms Dhordo into a massive, premium Tent City filled with traditional folk dancers, camel safaris, starlit dining, and paramotoring over the salt pans.
        </p>
      </div>

      {/* Card 3: Kalo Dungar Views */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🦅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Kalo Dungar Panoramic Edge
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Scale the Black Hill. As the absolute highest point in Kutch, <span className="font-semibold">Kalo Dungar</span> offers a sweeping, jaw-dropping view where the vast desert flats seamlessly blur into the ocean horizon.
        </p>
      </div>

      {/* Card 4: Artisan Craft Villages */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🧵
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Heritage Craft Villages
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Trace indigenous geometry. Travel to local artisan hamlets like <span className="font-semibold">Bhujodi and Nirona</span> to witness master creators practicing rogue Rogan painting, block printing, and intricate Kutchi embroidery.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-800 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-indigo-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, the Rann of Kutch is a highly cinematic geography. It cleanly strips away landscape noise to deliver a pristine, minimalist white backdrop balanced by intense regional artistry, offering one of the most uniquely isolating travel experiences in Asia.
      </p>
    </div>
  </div>

</section>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Natural Beauty */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-orange-50 border border-orange-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Sun /> Natural Wonder
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🌅 White Salt Desert that glows under moonlight</li>
                <li>🐪 Camel safaris across the desert plains</li>
                <li>🌙 Mesmerizing sunsets and starlit skies</li>
                <li>🦩 Visit the Flamingo Sanctuary in winter</li>
              </ul>
            </motion.div>

            {/* Rann Utsav */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Tent /> Rann Utsav Festival
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🎪 Annual festival from November to February</li>
                <li>💃 Folk dance, music, food, and handicrafts</li>
                <li>🏕️ Stay in luxury tents in Dhordo village</li>
                <li>🌕 Best experience during full moon nights</li>
              </ul>
            </motion.div>

            {/* Cultural Heritage */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-pink-50 border border-pink-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Gift /> Kutchi Culture & Art
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🧵 Vibrant mirror embroidery & leatherwork</li>
                <li>🎨 Visit Bhuj & local artisan villages</li>
                <li>🛍️ Buy handmade bandhani sarees & pottery</li>
                <li>🍛 Try Kutchi cuisine – Bajra rotla & khichdi</li>
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
                <li>✈️ Nearest Airport: Bhuj Airport (85 km from Rann)</li>
                <li>🚆 Bhuj Railway Station connects to major cities</li>
                <li>🚗 Private taxis and state buses available to Dhordo</li>
                <li>🕒 Best Time to Visit: November – February</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Rann of Kutch Gallery – White Sands & Colorful Traditions
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://m.media-amazon.com/images/S/pv-target-images/54db22ae37635a39268314aa0c33c5c41c9c584626f7abea86a531e0344b1f42._SX1080_FMjpg_.jpg",
                "https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg",
                "https://i.ytimg.com/vi/ZiRLz9s669I/maxresdefault.jpg",
                "https://kutchtourism.in/wp-content/uploads/2024/12/Full-Moon-Night-In-The-Rann-of-Kutch-1-1-1024x630.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKym6FD3Ocmixnm2mr8Sq5pCKKlF3d5R0HMbiYonv3Qkeb-xIw0bMtHA5jDnIN_CfHtM&usqp=CAU",
                "https://www.tourmyindia.com/blog//wp-content/uploads/2023/04/Top-Things-to-Do-in-Kutch-Gujarat.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Rann of Kutch"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1577814288070-91c598d5947c?auto=format&fit=crop&w=1200&q=80")
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

export default RannOfKutch;
