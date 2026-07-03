import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Sun,
  Waves,
} from "lucide-react";

const Gokarna = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSSdLXtH2euW3plNnmSTxM2v4rKJXr5ARMZ-Wg0Z1BkaYfOhkbxdbAGggeDMbNjAyR-JvvU_a23sQ8VN0jjbFSvirk&s=19"
          alt="Gokarna"
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
            className="text-4xl font-extrabold text-center text-blue-700 mb-4"
          >
            🌊 Gokarna – Beach & Spiritual Paradise
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in Karnataka, Gokarna is famous for its pristine beaches
            and sacred temples. It offers a peaceful alternative to Goa with
            a perfect mix of spirituality and adventure.
          </motion.p>

          {/* Introduction Section: Gokarna */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-600 selection:text-white">

  {/* Advanced Radial Background Glows (Coastal Waves & Sunset Horizon Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-amber-50 border border-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌊</span> Coastal Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Discover Gokarna
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The untamed coastal sanctuary—a beautiful, cliff-skirted peninsula in Karnataka where sacred ancient temple bells echo directly over pristine, isolated hippie coves.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🕉️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Where Sacred Sands Meet Bohemian Cliffs
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Gokarna, literally translating to "Cow's Ear" due to the unique shape formed by the ear-like confluence of two rivers, is an exceptional town of dual souls. Tucked along the rugged Arabian Sea coastline, it has long been an important pilgrimage center for high-vibrational temple rituals.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Yet, right across its rocky mountain headlands lie some of India's most pristine, crescent-shaped beaches. Accessible primarily via <span className="font-semibold">cliffside treks</span>, Gokarna offers a quiet, slow-paced alternative to the tourist-heavy lanes of neighboring Goa.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">5 Main</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Isolated Beaches</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">4th Cent</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Mahabaleshwar Roots</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Mahabaleshwar Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🔱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          The Atmalinga Sanctum
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into a spiritual anchor. The 4th-century classical Dravidian <span className="font-semibold">Mahabaleshwar Temple</span> houses the highly revered, legendary Shiva Atmalinga, retaining its solemn, ancient stone traditions amidst old-town bazaars.
        </p>
      </div>

      {/* Card 2: The Iconic Om Beach */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕉️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Natural Om Crescent
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Relax along a divine curve. Named because its twin semicircular sandy coves naturally trace the shape of the sacred <span className="font-semibold">"Om" symbol</span>, this beach is home to iconic beachside shacks, boating trips, and standard surf sessions.
        </p>
      </div>

      {/* Card 3: Cliffside Beach Trek */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🥾
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Rocky Headland Trek
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Hike from one paradise to another. Trail across spectacular, rocky mountain headlands to navigate directly between Kudle, Om, Half Moon, and the entirely secluded <span className="font-semibold">Paradise Beach</span>, offering unparalleled open ocean vistas.
        </p>
      </div>

      {/* Card 4: Bohemian Sunset Culture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🌅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Kudle Beach Drum Circles
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Soak in the acoustic beach energy. As sunset dyes the sky crimson, join the peaceful gatherings at Kudle Beach for impromptu drum circles, yoga flows, flea market trades, and simple, authentic wood-fired pizzas.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-teal-950 via-slate-900 to-amber-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-teal-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Gokarna is a deeply unique coastal retreat. It perfectly combines the heavy, historical devotion of its classic temple roots with the entirely disconnected, wild beauty of its rocky cliff hikes, offering an unparalleled beachside escape for conscious adventurers.
      </p>
    </div>
  </div>

</section>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Spiritual Importance */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Info /> Spiritual Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Gokarna is home to the famous Mahabaleshwar Temple,
                dedicated to Lord Shiva. It is considered one of the
                holiest pilgrimage sites in India.
              </p>
            </motion.div>

            {/* Beaches */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-cyan-50 rounded-2xl shadow-sm border border-cyan-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-cyan-700 mb-3">
                <Waves /> Famous Beaches
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏖️ <b>Om Beach:</b> Shaped like the Om symbol</li>
                <li>🌅 <b>Kudle Beach:</b> Sunset hotspot</li>
                <li>🌊 <b>Half Moon Beach:</b> Secluded paradise</li>
                <li>🏝️ <b>Paradise Beach:</b> Trekker’s favorite</li>
              </ul>
              <a
                href="https://karnatakatourism.org/tour-item/gokarna/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-cyan-700 mt-3 underline hover:text-cyan-900"
              >
                Visit Karnataka Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-sky-50 rounded-2xl shadow-sm border border-sky-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-sky-700 mb-3">
                <Camera /> Things To Do
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏄 Water sports & surfing</li>
                <li>🥾 Beach trekking</li>
                <li>🧘 Yoga & meditation retreats</li>
                <li>🌅 Sunset photography</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-indigo-50 rounded-2xl shadow-sm border border-indigo-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>✈️ <b>Nearest Airport:</b> Dabolim (Goa)</li>
                <li>🚆 <b>Nearest Railway:</b> Gokarna Road</li>
                <li>🏨 <b>Stay:</b> Beach huts & guesthouses</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
              <Sun /> Magical Sunset Experience
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Watching the sun set over Om Beach while the waves gently crash
              onto the shore creates a magical and peaceful experience.
              Gokarna is perfect for relaxation and soulful travel.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Gokarna
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSb1052xEQWWkGNXlIpJTBHlU4pTERCcXtuEXok0qTmN4I3R34peaHinrYZyMzxTSb2-qV3CjidbBiCeZGVyAnfG60&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTJNY5I3v2Gsz1rb4Q-LJGGEKGzBOvnMhzEXV9RPfYFyJVCmPoiJGykDv8-YpZjN1UP8gdDOcu3jF2I6R0t8Uqbn2CX&s=19",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNriladHxZX2tmhytLblku-fZ4_hhS-P0nzQ&s",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQIvVXiWlASAovCadqG8n3smBy3lL4ntlPs9O1CPdc_mfJBvAIk0JrxPE9DwKpJF_iXBqMtC9gKyeRK9NubCeifEls&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQWv_PBrE-cceBBZ6c9R-5r3NZST4hUyOvycBn2XoHtmK81RGxgjukkVliwmtrxEYpyUOuUTM0OCHQMigwfhcYCA5jf&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweomFWjvIjCCgUufoDLS5s-BkZSlgSt1Xe0BWnsKCV0FYVnwgpc-p2oz_YeSJkmlzCZ-FmAAZQ8vsVYGEoLlHger1qSdL1C_dURuzFWjq4EeOqJbRHKAstMpwFturhjuEdthsEU=w675-h390-n-k-no",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Gokarna"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://karnatakatourism.org/tour-item/gokarna/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Visit Karnataka Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gokarna;
