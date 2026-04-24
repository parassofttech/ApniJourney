import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Umbrella, Waves, ExternalLink } from "lucide-react";

const Goa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=500&h=500&s=1"
          alt="Baga Beach Goa"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-800 mb-4 text-center"
          >
            🌴 Goa – The Pearl of the Indian West Coast
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-8"
          >
            Goa, India’s smallest state, is a vibrant paradise known for its{" "}
            <b>sun-kissed beaches</b>, <b>Portuguese heritage</b>, and{" "}
            <b>energetic nightlife</b>. Situated along the{" "}
            <b>Arabian Sea</b>, Goa blends cultural richness, scenic beauty, and
            a laid-back tropical charm like nowhere else.
          </motion.p>

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
                Goa was a Portuguese colony for over <b>450 years</b> until its
                liberation in <b>1961</b>. The colonial influence is visible in
                its architecture, cuisine, and churches, including the iconic{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Basilica_of_Bom_Jesus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Basilica of Bom Jesus
                </a>
                , a UNESCO World Heritage Site.
              </p>
            </motion.div>

            {/* Beaches */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Famous Beaches
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏖️ <b>Baga Beach:</b> Party & nightlife hotspot</li>
                <li>🌅 <b>Palolem Beach:</b> Calm waters & dolphin trips</li>
                <li>🌴 <b>Calangute Beach:</b> “Queen of Beaches”</li>
                <li>🏄 <b>Anjuna Beach:</b> Known for hippie markets</li>
              </ul>
              <a
                href="https://www.india.com/travel/goa/places-to-visit/beaches/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-600 mt-3 underline hover:text-blue-800"
              >
                Explore all Goa beaches <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Adventure & Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Umbrella /> Adventure & Experiences
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Goa offers thrilling water sports like{" "}
                <b>parasailing, jet-skiing, scuba diving,</b> and{" "}
                <b>snorkeling</b>. For nature lovers, explore the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Dudhsagar_Falls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Dudhsagar Waterfalls
                </a>
                , spice plantations, or take a serene{" "}
                <b>sunset cruise</b> on the Mandovi River.
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
                <li>🕒 <b>Best Time:</b> November – February</li>
                <li>🎟️ <b>Ideal Duration:</b> 4–6 days</li>
                <li>✈️ <b>Nearest Airport:</b> Dabolim Airport (GOI)</li>
                <li>🚗 <b>Local Transport:</b> Scooters, cabs, or bikes</li>
              </ul>
            </motion.div>
          </div>

          {/* Culture Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-pink-50 to-yellow-50 p-6 rounded-2xl border border-yellow-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
              <Sun /> Goa’s Culture & Nightlife
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Goa’s culture is a fusion of <b>Indian and Portuguese</b>{" "}
              traditions. Colorful festivals like{" "}
              <a
                href="https://en.wikipedia.org/wiki/Carnival_in_Goa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Carnival
              </a>
              , <b>Shigmo</b>, and <b>Feast of St. Francis Xavier</b> showcase
              its lively spirit. Nightlife thrives in beach clubs like{" "}
              <b>Tito’s</b>, <b>Mambo’s</b>, and <b>Curlies</b>, offering music,
              food, and freedom under the stars.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Goa
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://media.moustachescapes.com/location/1740561583.jpg",
                "https://seawatersports.com/images/activies/slide/north-goa-trip.jpg",
                "https://static.businessworld.in/Untitled%20design%20-%202024-12-31T052430.892_20241231105033_original_image_31.webp",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYuaakElB6_5jZUsZm4dMst4PvDvvkKVdCg&s",
                
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Goa"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* External Travel Links */}
          <div className="mt-8 text-center">
            <a
              href="https://www.goa.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Visit Official Goa Tourism Site <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Goa;
