import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Info,
  Camera,
  ExternalLink,
  Utensils,
  Flag,
} from "lucide-react";

const Amritsar = () => {
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
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQdZi-oDfvN2_KUn7cMrOj-bwPABeqG_oDkJvBkf5egGmv-T445apepLKb2XBwTzaD08TZnUJXwGOV6t95vMwLNOBo&s=19"
          alt="Golden Temple"
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
            🛕 Amritsar – The Spiritual Heart of Punjab
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in the heart of **Punjab**, Amritsar is one of India’s most
            sacred cities, famous for the **Golden Temple**, rich Sikh history,
            patriotic landmarks, and legendary Punjabi food. The city blends
            **spiritual peace, history, and vibrant culture** beautifully.
          </motion.p>

          {/* Introduction Section: Amritsar */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Spiritual Radiance & Divine Sunset Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>✨</span> Spiritual Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Amritsar
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The jewel of Punjab—a deeply spiritual, high-vibrational sanctuary where gold-plated spires mirror across sacred waters and heroic history echoes through ancient lanes.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🪯</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Spiritual Heart of the Sikhs
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Amritsar, literally meaning the "Pool of Nectar," was founded in 1577 by Guru Ram Das Ji. Located in the fertile northwestern plains of Punjab, it stands as an unmatched epicenter of intense devotion, community service, and monumental culinary heritage.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        It is a city that captures your senses instantly—from the calming, continuous hymns echoing over pristine marble courtyards to the dramatic patriotic fervor at the national border and the rich, buttery aromas of its legendary street kitchens.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">100k+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Fed Daily (Langar)</p>
        </div>
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-600">750kg</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Pure Gold Plating</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Sri Harmandir Sahib */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Golden Temple
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Witness absolute spiritual beauty. The magnificent <span className="font-semibold">Sri Harmandir Sahib</span> floats gracefully within a massive pool of holy water, welcoming people of all faiths through its four doors representing universal equality.
        </p>
      </div>

      {/* Card 2: Wagah Border Ceremony */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🫡
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Wagah Border Beating Retreat
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Feel the roaring high-octane energy. Drive out to the international border to experience the electrifying, synchronized military drills and flag-lowering ceremony alongside thousands of cheering spectators.
        </p>
      </div>

      {/* Card 3: Jallianwala Bagh Chronicles */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl font-bold text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
          🧱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Jallianwala Bagh Memorial
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into India's historic freedom struggle. Walk through the narrow entrance corridor to pay respects at the solemn memorial garden, where preserved bullet-marked brick walls and the historic Martyr's Well trace the events of 1919.
        </p>
      </div>

      {/* Card 4: Culinary Icon - Amritsari Kulcha */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-yellow-300 shadow-md hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-xl font-bold text-yellow-600 mb-5 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
          🧈
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-200">
          Legendary Dhaba Gastronomy
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Indulge in a buttery feast. Savor the flaky, wood-fired crunch of authentic ghee-laden <span className="font-semibold">Amritsari Kulchas</span>, creamy Dal Makhani, and thick tall glasses of sweet Lassi at iconic heritage culinary stops.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Amritsar is a deeply moving travel experience. It perfectly combines the unmatched spiritual peace of the golden shrines and selfless communal devotion with a fiercely patriotic border pulse and world-class culinary art, creating memories that stay with you forever.
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
                Amritsar was founded in the 16th century by **Guru Ram Das Ji**.
                It is the spiritual center of Sikhism and home to the
                **Harmandir Sahib (Golden Temple)**. The city also witnessed the
                tragic **Jallianwala Bagh massacre**, a turning point in India’s
                freedom struggle.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🛕 <b>Golden Temple:</b> Spiritual & architectural marvel</li>
                <li>🇮🇳 <b>Jallianwala Bagh:</b> Historic freedom memorial</li>
                <li>🚩 <b>Wagah Border:</b> Patriotic retreat ceremony</li>
                <li>🏛️ <b>Partition Museum:</b> Stories of 1947</li>
              </ul>
              <a
                href="https://punjabtourism.punjab.gov.in/amritsar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-green-700 mt-3 underline hover:text-green-900"
              >
                Visit Punjab Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Culture & Food */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Utensils /> Culture & Cuisine
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Amritsar is a paradise for food lovers. Famous dishes include
                **Amritsari Kulcha, Chole, Lassi, Langar**, and street food from
                **Hall Bazaar**. Punjabi hospitality and Bhangra vibes are felt
                everywhere.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>✈️ <b>Airport:</b> Sri Guru Ram Dass Jee Intl Airport</li>
                <li>🚆 <b>Rail:</b> Well connected to major cities</li>
                <li>🏨 <b>Stay:</b> Heritage hotels, budget stays, luxury rooms</li>
              </ul>
            </motion.div>
          </div>

          {/* Patriotic Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-orange-50 to-green-50 p-6 rounded-2xl border border-orange-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
              <Flag /> Patriotism & Spirit
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The **Wagah Border ceremony** fills visitors with national pride.
              The chants, synchronized drills, and energy create an unforgettable
              experience that truly represents the spirit of India.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Discover Amritsar
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://static.toiimg.com/photo/77692462.cms",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoC2MqlY_IWRC2W-xEdKTY5nj4EezUCwFghHbRjiX7MNZ1JVywxAPNXTClzSkgTexzEMvFWcjCEVCwHCQfwfKMfS190hw1YCja5qtK4gdmO_gXUObpkPV43IwsqleKHMMR0l-A=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerCOafhvUKnSDV-8TNAYzXpmAOAav7gKX4g3r-epiMPneJVpE_ez2L9E-sQfEQ1Pssr9HPOtLcKy2SDhzbqxoGWBEzwMwMxmLkzqvjE3Uq7ggIITZc8Ch-grU8EkY7FKACShbS8Ig=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwersSiih3I-rYbTnBYD9Vl7fUmFxDW0UIRBp5An3nrxVSsp7sWAFLryPNJzwCnILrTYo52Sx15Bh-8z4GkpuV8CkZH27mlQhEDOtA-9dgtbRRdtbk7lnb2JUiyHemzsAQjQ6YenEjOrWzqPS=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTqWS5nI0QcEim8phdxrMb1j9449kdLtIc2MOlKrmnveLcSGHqFRxb1ygfoPBoy_unOrV7-PTtvJnR0w3OI0r6SJY&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrBjfjEy6uH7p9ydAXwz9_cPfIqSyPjwLvApgtkIMnJbD3gdgKEoAc6U6xv1FAG1jUAWAg9obKvc7fHbDI1xi4YZy1LmROoAVZEZcSFdFREhPAS6d7uM15Ew3mMXvAtLpAoukdSA=w675-h390-n-k-no",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Amritsar"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://punjabtourism.punjab.gov.in/amritsar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition font-semibold"
            >
              Visit Punjab Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Amritsar;
