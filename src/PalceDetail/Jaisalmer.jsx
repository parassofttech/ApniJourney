import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Info,
  Camera,
  ExternalLink,
  Sun,
  Tent,
  Flag,
} from "lucide-react";

const Jaisalmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTLYjL1FCbJO03mW5_7gLLKcUWh2wq1LED2MQOeCgZ0YuJWlqOZPRWUWN5p3yUai4QuycniT1XLTgd3UGhaR9LILk&s=19"
          alt="Jaisalmer Fort"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-yellow-700 mb-4"
          >
            🏜️ Jaisalmer – The Golden City of Rajasthan
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in the heart of the **Thar Desert**, Jaisalmer is known for
            its golden sandstone architecture, majestic forts, desert safaris,
            and vibrant Rajasthani culture. It offers a magical blend of
            **heritage, adventure, and royal charm**.
          </motion.p>

          {/* Introduction Section: Jaisalmer */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Golden Desert & Warm Sunset Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏜️</span> Heritage Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Jaisalmer
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Golden City—a breathtaking desert citadel carved entirely out of yellow sandstone, rising like a majestic mirage from the heart of the Thar.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏰</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Living Golden Citadel
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Jaisalmer, standing guard over the vast Thar Desert of Rajasthan, is a stunning masterclass in medieval architecture. Founded in 1156 AD by Rawal Jaisal, the city gets its glowing iconic hue from the unique yellow sandstone used across every fort wall, haveli, and home.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Unlike most historical monuments, Jaisalmer features a rare <span className="font-semibold">living fort</span>, where a quarter of the old city's population still resides inside its massive stone bastions, creating an incredibly authentic link to antiquity.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">860+ Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Fort History</p>
        </div>
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">1/4th</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Population inside Fort</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Jaisalmer Fort (Sonar Qila) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🔱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Sonar Qila (Golden Fort)
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore a true architectural crown. The UNESCO-listed <span className="font-semibold">Jaisalmer Fort</span> features 99 massive bastions that shimmer a spectacular honey-gold at sunset, packing vibrant local shops, ancient palaces, and Jain temples inside.
        </p>
      </div>

      {/* Card 2: Intricate Patwon Ki Haveli */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Patwon Ki Haveli Filigree
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Marvel at stone lace. This cluster of five exquisite 19th-century mansions features jaw-droppingly intricate balconies, delicate stone-carved lattices, and gold-hued corridors built by wealthy brocade merchants.
        </p>
      </div>

      {/* Card 3: Sam Sand Dunes & Desert Camping */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🐪
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Sam Sand Dunes Safari
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Escape into the rolling sands. Head out to the sweeping dunes of <span className="font-semibold">Sam or Khuri</span> for an authentic camel trek at dusk, followed by traditional Rajasthani folk dances, starlit dining, and premium desert glamping.
        </p>
      </div>

      {/* Card 4: Gadisar Lake Serenity */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Gadisar Lake Gateway
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Unwind by the historic reservoir. Once the sole water source for the kingdom, this scenic lake is framed by elegant sandstone ghats, floating shrines, and the legendary, highly decorative <span className="font-semibold">Tilon Ki Pol</span> archway.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-stone-900 to-rose-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Jaisalmer is a mesmerizing medieval romance. It effortlessly pairs the raw, rugged vastness of Thar desert expeditions with the unmatched architectural refinement of sandstone fortresses, making it an absolute bucket-list experience for luxury and heritage travelers alike.
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
                <Info /> Historical Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jaisalmer was founded in 1156 AD by **Rawal Jaisal**.
                The iconic **Jaisalmer Fort (Sonar Quila)** is one of the
                largest living forts in the world. The city once thrived
                as an important trade route connecting India with Central Asia.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏰 <b>Jaisalmer Fort:</b> Golden architectural wonder</li>
                <li>🏜️ <b>Sam Sand Dunes:</b> Desert safari & camping</li>
                <li>🏛️ <b>Patwon Ki Haveli:</b> Intricate carvings</li>
                <li>🌅 <b>Gadisar Lake:</b> Scenic sunset views</li>
              </ul>
              <a
                href="https://tourism.rajasthan.gov.in/jaisalmer.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-orange-700 mt-3 underline hover:text-orange-900"
              >
                Visit Rajasthan Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Culture */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-red-50 rounded-2xl shadow-sm border border-red-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-red-700 mb-3">
                <Flag /> Culture & Traditions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jaisalmer showcases vibrant **Rajasthani folk music,
                Kalbelia dance, puppet shows**, and colorful turbans.
                Traditional handicrafts, mirror work, and camel fairs
                add to its cultural richness.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-amber-50 rounded-2xl shadow-sm border border-amber-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-amber-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>✈️ <b>Nearest Airport:</b> Jodhpur Airport</li>
                <li>🚆 <b>Rail:</b> Direct trains from Delhi & Jaipur</li>
                <li>🏨 <b>Stay:</b> Desert camps, heritage hotels</li>
              </ul>
            </motion.div>
          </div>

          {/* Desert Experience */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
              <Tent /> Desert Adventure
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Experience the thrill of **camel safari, jeep safari,
              night camping under the stars**, and traditional Rajasthani
              dinner in desert camps. Watching the sunset over golden
              sand dunes is unforgettable.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Discover Jaisalmer
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRg02VhWgADkftNaMdJHD31iV4w6B75lwW40bzm1qdZKtlvBSfztNLNYOFgnLTW4yvPaK5BW_QoQY0_Y0eLyqTctWU&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTLYjL1FCbJO03mW5_7gLLKcUWh2wq1LED2MQOeCgZ0YuJWlqOZPRWUWN5p3yUai4QuycniT1XLTgd3UGhaR9LILk&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTmo8pzGSoNT1wj2xJ0-76LMWbjzoesl1eIw2ZUOB4dl4qUtAI6bo46FN91E4HoGfMDUuPbEDVqgkS96TBe0Uu3kPY&s=19",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/37/47/83/bagh.jpg?w=1200&h=700&s=1",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR_BCc6KsherRZHF1n7lECvn9r7kBmTAwm4SgkTyfrCV0VQfPNsVs_knad753MTRHENqPL819cpaa05N1vpgFH-Imo&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQcrbZC1tgjvq1Z0KiO4tnuzaDOUw8y7DYqFDZkEW1gIM9OGQ_tOmOdj8DBBP2IitTJ_63dXM45sJv7qQEtiodb92Q&s=19",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Jaisalmer"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://tourism.rajasthan.gov.in/jaisalmer.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-xl hover:bg-yellow-700 transition font-semibold"
            >
              Visit Rajasthan Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jaisalmer;
