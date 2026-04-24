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
