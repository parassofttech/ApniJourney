import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Landmark,
  Sun,
} from "lucide-react";

const Hampi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcShbY-ZirATQxlmkIMp69JCIzhtKtmbebykEayfve1c5fBv2nvzSwsIF9xtO8GA0Z-7YoQryY_M91oWZ4eQaDJg8sc&s=19"
          alt="Hampi"
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
            className="text-4xl font-extrabold text-center text-orange-700 mb-4"
          >
            🏛️ Hampi – The City of Ruins
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in Karnataka, Hampi is a UNESCO World Heritage Site
            famous for its ancient temples, stone structures, and the
            glorious history of the Vijayanagara Empire.
          </motion.p>

          {/* Introduction Section: Hampi */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Ruins at Sunset & Sacred River Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏛️</span> Heritage Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Hampi
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Lost Empire—an open-air museum of monumental granite ruins, where sacred 14th-century stone palaces rest inside an otherworldly landscape of giant balancing boulders.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🐒</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Golden Dawn of Vijayanagara
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Hampi, nestled along the banks of the sacred Tungabhadra River in Karnataka, was the legendary capital of the fabulously wealthy Vijayanagara Empire. In the 15th century, it stood as one of the largest and richest cosmopolitan cities in the world, attracting traders from Persia to Portugal.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Now a sprawling <span className="font-semibold">UNESCO World Heritage site</span>, Hampi spans over 4,100 hectares. It blends ancient architectural genius with a surreal, rugged topography, offering an absolute time-traveling escape for cultural explorers.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">1,600+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Surviving Monuments</p>
        </div>
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">14th Cent</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Imperial Origins</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Virupaksha Temple Architecture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Sacred Virupaksha Sanctum
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Gaze at an uninterrupted living lineage. The towering 160-foot gateway spire of <span className="font-semibold">Virupaksha Temple</span> has watched over Hampi since before the empire's rise, featuring stunning inverted pinhole camera mechanics inside.
        </p>
      </div>

      {/* Card 2: Iconic Stone Chariot */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🛞
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          The Legendary Stone Chariot
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Marvel at monolithic symmetry. Located inside the Vijaya Vittala Temple complex, this architectural masterpiece features stone wheels that once rotated, surrounded by massive mandapas housing legendary <span className="font-semibold">musical pillars</span>.
        </p>
      </div>

      {/* Card 3: Matanga Hill Sunset */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🦅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Matanga Hill Panoramic Dawn
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Scale the epic center. Hike up the ancient stone steps of <span className="font-semibold">Matanga Hill</span> to witness a breathtaking, 360-degree crimson sunset illuminating miles of ancient stone ruins and palm groves.
        </p>
      </div>

      {/* Card 4: Tungabhadra Coracle Crossings */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Tungabhadra Coracle Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Glide across historical currents. Step into a traditional circular bowl-boat (<span className="font-semibold">coracle</span>) to navigate the swirling waters, passing rock-cut cave shrines and exploring the relaxed, hippie side of Anegundi.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-teal-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Hampi is a highly cinematic tapestry of structural grace and natural chaos. It flawlessly weaves the heavy, carved geometry of imperial architecture into a prehistoric wilderness of balancing boulders, offering an absolute pinnacle experience for historical journeys.
      </p>
    </div>
  </div>

</section>



        

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Info /> Historical Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Hampi was once the capital of the mighty Vijayanagara Empire
                in the 14th century. It was one of the richest cities in the world
                during its time and is now known for its grand ruins and temples.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏛️ <b>Virupaksha Temple:</b> Ancient functioning temple</li>
                <li>🛕 <b>Vittala Temple:</b> Famous stone chariot</li>
                <li>🌄 <b>Matanga Hill:</b> Best sunrise viewpoint</li>
                <li>🏞️ <b>Hampi Bazaar:</b> Historic marketplace ruins</li>
              </ul>
              <a
                href="https://karnatakatourism.org/tour-item/hampi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-yellow-700 mt-3 underline hover:text-yellow-900"
              >
                Visit Karnataka Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Architecture */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-red-50 rounded-2xl shadow-sm border border-red-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-red-700 mb-3">
                <Landmark /> Architecture & Culture
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The architecture of Hampi reflects intricate carvings,
                massive pillars, and unique stone engineering.
                The musical pillars of Vittala Temple are a masterpiece
                of ancient Indian craftsmanship.
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
                <li>🕒 <b>Best Time:</b> October – February</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>✈️ <b>Nearest Airport:</b> Hubli Airport</li>
                <li>🚆 <b>Nearest Railway:</b> Hospet Junction</li>
                <li>🏨 <b>Stay:</b> Heritage guest houses</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
              <Sun /> Magical Sunrise & Sunset Views
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Watching the sunrise from Matanga Hill or sunset among the
              giant boulders of Hampi is a surreal experience.
              The golden light over ancient ruins creates a breathtaking view.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Hampi
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqLNogk6r45sW1Q4-c8EFhS_tfQHOhrmOefnpL1LgHjspnYVMJLN5NMbJU0vyFUc5WBC-in0UAvsLASts_BrAPSUXgucFme78bblBlqDcK1ygJXJopAZU9yYKgpHK1dv1paKgeF=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ_8bmllUjuB6NCL66IryUEdSEmcT7UGDqpxo2fsWnaUVtCNYmwP9QgJm8tE10HmpLIoBOEaKUtXdXKkGtPxIK4FNQ&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSyjfz95JzqZmT0uAFJ02d8ON336A0jG606M1oArgH0c745W5jBtHGwH61kZ3myyF_N-WjFb25I9nxDGWbyTII8kI1V&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTGEofYxE6GxtOVniMJN-QWBFoJZOEwars8EnqLSoErHe1YMXsj76v3ThUXmaylZjK4hJIB3tKJkVkLr2pNZZv06xc&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSsZgsTcdkHumdkNdOZyVmyShLzMys2s49QW_8XvLQd-_xRBwBnULw43mZWIp8bU49jKCFoOJDEqqGOTCDwARr8ucc&s=19",
                "https://www.soil2soulexpeditions.com/admin/public/images/blog/image_file/123/The-Sacred-Landscape-of-Hampi.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Hampi"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://karnatakatourism.org/tour-item/hampi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition font-semibold"
            >
              Visit Karnataka Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hampi;
