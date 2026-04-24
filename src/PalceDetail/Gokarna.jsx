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
