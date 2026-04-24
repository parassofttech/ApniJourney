import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Landmark,
  Palette,
} from "lucide-react";

const Khajuraho = () => {
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
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ3gYiFy16YtGsNDbp6e65OxL52dRzeSw6owWVfKXQxgx1_Wf5FniE9qp-6xL8rZj5-TLlyhYhv6FCs0FLrRaMihx8&s=19"
          alt="Khajuraho Temples"
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
            🏛️ Khajuraho – The Heritage of Madhya Pradesh
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Famous for its **ancient temples and exquisite sculptures**, Khajuraho
            is a UNESCO World Heritage site. Known for its **intricate carvings**
            depicting mythological tales, daily life, and art, it’s a perfect
            blend of **history, architecture, and culture**.
          </motion.p>

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
                Khajuraho temples were built by the **Chandela dynasty** between
                950–1050 AD. These temples showcase **Nagara-style architecture**
                and are renowned worldwide for their **sculptural brilliance**.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-3">
                <Camera /> Must-Visit Temples
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🛕 <b>Kandariya Mahadev Temple:</b> Largest and most famous temple</li>
                <li>🛕 <b>Lakshmana Temple:</b> Beautiful carvings & architecture</li>
                <li>🛕 <b>Chitragupta Temple:</b> Erotic sculptures & historic significance</li>
                <li>🛕 <b>Vishvanatha Temple:</b> Peaceful & less crowded</li>
              </ul>
              <a
                href="https://mptourism.com/khajuraho"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-orange-700 mt-3 underline hover:text-orange-900"
              >
                Visit Madhya Pradesh Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Culture & Art */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Palette /> Culture & Art
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Khajuraho is famous for its **intricate carvings of gods, goddesses,
                musicians, dancers, and daily life**. The temples also host
                festivals like the **Khajuraho Dance Festival**, celebrating
                classical Indian dance forms.
              </p>
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
                <li>🕒 <b>Best Time:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 1–2 days</li>
                <li>✈️ <b>Nearest Airport:</b> Khajuraho Airport</li>
                <li>🚆 <b>Railway:</b> Well connected to Jhansi & Satna</li>
                <li>🏨 <b>Stay:</b> Heritage hotels, guesthouses, resorts</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Khajuraho
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerx3sD3Qdu4isvCofN6LjynV-Naq_0QMGL71pIRYzJeJaH4HLdu93vZcNSBLWa9OsRQBZYi_7JY--kU3nJ41hScyO8dy21OQKTnOo-sMJn5ubNDqYZ9u7XlA3sronmyZZ8yn64=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-5wfn_XYi8hDGQ_7zlgVB3eJJke4711HQ07JdE3X3eW5i-IgdB4JTmsi4wiyviHg32ukM0q3dEunq4xCo-1hJxL2xPKkT_ynlzEwpujPdncTL2clEtpvLN2GOQcDiXfSFMBhTkA=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerJy_IiQLXRjlHpKc5aqIe9KBrfnUB26t1QjOgwtdGzOUPPUAFWlFPROcIOGeH6m5fRXy3aKaGSC2bU8lXpUWUq1vpmL739p2V1bfMERPxz_gUgVtSK0pyK3KgThoA65CnEnJGO_g=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTQQcugwNKJDwM0yQaP8ENk5HT2dIY4Y8rxbG9s8JPXrM6tKogx-nyZVe1spt6JJSp9Y0JAw3Z6MLtf_KKWrOwiXp1T&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSjj3NBIq2dBwRQItgQvbE4e0BCHSCv2CmVFu8FooY7CXtL7qZK1dfHuROBsqFPrKIqLVCcns-9vQHp5RCsyrLQGNE1&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepba-Ri9StvTbkstXKVpkd75-Q0BPjTMvKCDEG7CZ_8HaKPrSLsztMaf7tDvObO0xafK4m7T8Dy-lqxuOYCCVTLrjrAFgJtR28lzipIK5UmIDv5asZRz078PQk7Kv58SttuHrdKCQ=w675-h390-n-k-no",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Khajuraho"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://mptourism.com/khajuraho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition font-semibold"
            >
              Visit Madhya Pradesh Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Khajuraho;
