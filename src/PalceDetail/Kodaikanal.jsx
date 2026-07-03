import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Mountain,
  Trees,
  CloudRain,
} from "lucide-react";

const Kodaikanal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSK8xdWQhhsl8Ys4qBxvm1bEuEKmuhsEJ6OweJq102FjXacfpz82yczCnP6oeefRnuYFGp0CsEdcrwvMXh7wsf5x_w&s=19"
          alt="Kodaikanal"
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
            className="text-4xl font-extrabold text-center text-indigo-700 mb-4"
          >
            🌲 Kodaikanal – The Princess of Hill Stations
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in the **Western Ghats of Tamil Nadu**, Kodaikanal
            is famous for its misty hills, scenic lakes, pine forests,
            and peaceful atmosphere. It is one of South India’s most
            romantic and refreshing hill destinations.
          </motion.p>

          {/* Introduction Section: Kodaikanal */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-violet-600 selection:text-white">

  {/* Advanced Radial Background Glows (Misty Pines & Violet Hills Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-teal-50 border border-violet-100 text-violet-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌲</span> Alpine Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950">
      Discover Kodaikanal
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Princess of Hill Stations—a spectacular, mist-veiled plateau in the Palani Hills where towering pine forests roll directly into mirror-calm waters.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-violet-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌫️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Gift of the Forest
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Kodaikanal, sitting beautifully at an elevation of 2,133 meters in Tamil Nadu, translates directly to "The Gift of the Forest" in Tamil. Established as a cool haven by American missionaries in the mid-19th century, it is carved out of massive granite cliffs and deep wilderness.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Famous for its rare, twelve-yearly blooming <span className="font-semibold">Kurinji flowers</span>, crisp mountain air, and dramatic cloud-touching viewpoints, it offers a profoundly isolating, atmospheric escape from the humid lowlands.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-violet-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-violet-600">2,133m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">High Elevation</p>
        </div>
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">12 Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Kurinji Bloom Cycle</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Star-Shaped Kodaikanal Lake */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-violet-300 shadow-md hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-xl font-bold text-violet-600 mb-5 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-violet-700 transition-colors duration-200">
          Star-Shaped Kodai Lake
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Row through the mountain fog. This iconic, man-made star-shaped lake sits right at the center of the town, skirted by an 5 km pathway perfect for early morning cycling, horse riding, or peaceful strolls.
        </p>
      </div>

      {/* Card 2: Coaker's Walk Vistas */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🚶‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Coaker's Walk Clouds
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk directly along the edge of the abyss. This narrow, paved pedestrian path wraps around the steep southern slopes, offering jaw-dropping views of rolling clouds rising from the plains below.
        </p>
      </div>

      {/* Card 3: Pillars Rocks & Shola Ecosystem */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🧗‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Colossal Pillar Rocks
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Gaze up at primeval stone structures. Three dramatic, vertically standing granite boulders rise up over 400 feet into the sky, creating a dramatic, mist-filled canyon that disappears into the dense <span className="font-semibold">Shola forests</span>.
        </p>
      </div>

      {/* Card 4: Pine Forest Walks */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🌲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Symmetric Pine Grids
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Lose yourself inside cinematic geometric woods. Planted originally by British botanists, these massive, towering pine forests create an atmospheric backdrop of vertical trunks, perfect for eerie photography and quiet hikes.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-slate-950 via-violet-950 to-teal-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-violet-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Kodaikanal is a deeply cinematic, slow-paced alpine retreat. It expertly pairs the misty mystery of primeval evergreen forests and giant stone pillars with the quiet romance of high-altitude water paths, offering one of the most refreshing breaks in South India.
      </p>
    </div>
  </div>

</section>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-indigo-50 rounded-2xl shadow-sm border border-indigo-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-3">
                <Info /> Historical Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Established as a hill retreat by British missionaries in
                the 19th century, Kodaikanal became a popular summer
                getaway. Its colonial-era buildings and churches reflect
                its historical charm.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🚣 <b>Kodaikanal Lake:</b> Star-shaped lake for boating</li>
                <li>🌄 <b>Coaker’s Walk:</b> Scenic walking path</li>
                <li>🌲 <b>Pine Forest:</b> Iconic movie shooting spot</li>
                <li>💧 <b>Silver Cascade Falls:</b> Beautiful waterfall</li>
              </ul>
              <a
                href="https://www.tamilnadutourism.tn.gov.in/destinations/kodaikanal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-700 mt-3 underline hover:text-blue-900"
              >
                Visit Tamil Nadu Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Nature */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Trees /> Nature & Climate
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Kodaikanal is known for its **cool climate year-round**.
                Surrounded by lush forests, valleys, and waterfalls,
                it offers perfect conditions for trekking, camping,
                and photography lovers.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-purple-50 rounded-2xl shadow-sm border border-purple-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-purple-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> April – June, September – October</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–4 days</li>
                <li>✈️ <b>Nearest Airport:</b> Madurai Airport</li>
                <li>🚆 <b>Nearest Railway:</b> Kodai Road (80 km)</li>
                <li>🏨 <b>Stay:</b> Lake-view resorts, cottages</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-3">
              <Mountain /> Romantic & Peaceful Escape
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you're boating on the lake, walking through
              misty hills, or enjoying sunset viewpoints,
              Kodaikanal offers a calm and romantic atmosphere.
              It is perfect for couples, families, and nature lovers.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Discover Kodaikanal
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo9zEfraK4CWrPp6j2YUhu7c7w54MH3FxYqpFqEqHm1zh-cmu1bj28GByMNbuubIhRTLBSx6tA-mt0UWWDTcmY1pAGrV-b7jG1DDSW66LCZ7mtkhKtXXGckABoL8JaFbl-mpX7m=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoWu45L0wbu-FoOjWmvVzQ_4WNCNj4g6ff6bmNadubTsTe_hK4Ympy8yxdNLOi9y_kasoyKNYLQbMsOkmlUW-Di7iofMiAF3wtWl5EVn4UxQQPinvUX4EQ2uoV6wdBqaeD6s0Gm=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwersWgohVbPtShr9k5rRdImOAvZav8fwarfKvNe9rFAFeX8nDbVnvD1UJNDvk4kkriTnJRZ-J-atM0bbtR8IdJq7whL-V_rQEG5z2rCMR-hVrNWLtOVZFavBUQ0yj47o6iPVSZmX2KiUfood=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSwUi8-V-pS8gNL3Rt0xmP8z7fsgsjLm3gSEYSKcAZwTAMnvLLtzkAmQ293FFlsDGwSu2RZKI789OrzfF0b2OsPjGeg&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR_WSuru2tgbGJybej1lYyqsSMkEtw1N9lB-3TyUBZf-NqV5ZjOfWZDhB0Gu9wkDbf5b-gGtLXvVCcheSTQmlF5tHiy&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqD2NoLWZODeB8lgR60Yw3N_lSPSDD-Gdpjrf48RoaEHZVJb5U8Z8rHcnsC5LsA0GY5kXvQmQcE2b_cHIgVu7-mpJ-DqJvCg4y2MgveoVE8XsQG6VQlUeh6ZyYHeV7mWCL44DA5pQ=w675-h390-n-k-no",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Kodaikanal"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://www.tamilnadutourism.tn.gov.in/destinations/kodaikanal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
            >
              Visit Tamil Nadu Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kodaikanal;
