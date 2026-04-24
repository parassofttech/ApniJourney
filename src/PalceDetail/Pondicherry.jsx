import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Camera, Umbrella } from "lucide-react";

const Pondicherry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://luxevista.in/wp-content/uploads/2025/02/Pondicherry-itinerary-for-3-days_-960x517.png"
          alt="Pondicherry"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1572276596231-f0f83cd0b0a6?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-cyan-800 mb-4"
          >
            🌴 Pondicherry – The French Riviera of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Pondicherry, also known as Puducherry, is a charming coastal city with a unique blend 
            of **French colonial architecture**, **serene beaches**, and vibrant **spiritual culture**. 
            It offers a perfect mix of relaxation, heritage, and adventure.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Heritage & History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Info /> Heritage & History
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pondicherry was a French colony for over **300 years**. Its streets, colonial villas, 
                and churches reflect a rich cultural heritage. Key attractions include the **Basilica of the Sacred Heart of Jesus**, 
                **French War Memorial**, and vibrant **French Quarter** streets.
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
                <li>🏖️ <b>Promenade Beach:</b> Sunrise views & strolls</li>
                <li>🌅 <b>Paradise Beach:</b> Secluded & tranquil</li>
                <li>🌴 <b>Rock Beach:</b> Popular for leisure walks</li>
              </ul>
            </motion.div>

            {/* Adventure & Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Umbrella /> Adventure & Experiences
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🚴 Cycling along French Quarter streets</li>
                <li>🛶 Boating and water sports at Serenity Beach</li>
                <li>📸 Photography & cultural walks</li>
              </ul>
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
                <li>✈️ Nearest Airport: Pondicherry Airport (~12 km)</li>
                <li>🚆 Nearest Railway Station: Pondicherry Railway Station</li>
                <li>🚌 Local Transport: Auto-rickshaws, bicycles, scooters</li>
                <li>🕒 Best Time to Visit: October – March</li>
              </ul>
            </motion.div>
          </div>

          {/* Culture & Cuisine */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-pink-50 to-yellow-50 p-6 rounded-2xl border border-yellow-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
              <Sun /> Culture & Cuisine
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Pondicherry is famous for **French cuisine**, quaint cafes, and spiritual retreats like **Auroville**. 
              The city also hosts cultural festivals, art galleries, and yoga centers for visitors seeking wellness and relaxation.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Pondicherry
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f4/3b/43/boating.jpg?w=1200&h=700&s=1",
                "https://www.fabhotels.com/blog/wp-content/uploads/2018/07/600x400-7.jpg",
                "https://static.toiimg.com/photo/32243872.cms",
                "https://travelentice.com/wp-content/uploads/2020/09/Top-19-Things-to-Do-in-Pondicherry-for-a-Blissful-Coastal-Getaway.jpg",
                "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/09/blog-06-870x570.jpg",
                "https://c8.alamy.com/comp/2EJM4P6/sunrise-morning-in-pondicherry-beach-tamil-nadu-india-2EJM4P6.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Pondicherry"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1607522361446-52d11e3ed8d4?auto=format&fit=crop&w=900&q=80")
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

export default Pondicherry;
