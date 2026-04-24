import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Sparkles, Camera } from "lucide-react";

const Srinagar = () => {
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
          src="https://s3.india.com/wp-content/uploads/2024/06/10-Must-Do-Activities-in-Srinagar.jpg?impolicy=Medium_Widthonly&w=350&h=263"
          alt="Srinagar Dal Lake"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1575311371166-b17bb1bca161?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-blue-800 mb-4"
          >
            🌸 Srinagar – Paradise on Earth
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Srinagar, the summer capital of **Jammu & Kashmir**, is famous for its **Dal Lake**, 
            **Mughal gardens**, and **houseboats**. Nestled in the Himalayas, it is a perfect blend of 
            **natural beauty, culture, and history**, attracting travelers from all over the world.
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
                Srinagar has a rich history influenced by **Mughals, Buddhists, and Dogra rulers**. 
                The famous **Shankaracharya Temple** and **Hazratbal Shrine** showcase the city’s spiritual diversity.
              </p>
            </motion.div>

            {/* Dal Lake & Houseboats */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Dal Lake & Houseboats
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Enjoy a serene **shikara ride** on Dal Lake, stay in floating **houseboats**, 
                and experience the mesmerizing reflections of the Himalayas in the water.
              </p>
            </motion.div>

            {/* Gardens & Culture */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Sun /> Gardens & Culture
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🌺 Mughal Gardens: Shalimar Bagh, Nishat Bagh, Chashme Shahi</li>
                <li>🎭 Local handicrafts: Pashmina, Papier-mâché, Kashmiri carpets</li>
                <li>🍵 Traditional cuisine: Rogan josh, Gushtaba, Kahwa tea</li>
              </ul>
            </motion.div>

            {/* Adventure & Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <Waves /> Adventure & Activities
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🥾 Trekking in nearby hills and valleys</li>
                <li>🛶 Boating and kayaking in Dal and Nigeen Lakes</li>
                <li>📸 Photography of Himalayan landscapes</li>
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
                <li>✈️ Nearest Airport: Srinagar International Airport (SXR)</li>
                <li>🚆 Nearest Railway Station: Jammu Tawi</li>
                <li>🚌 Local Transport: Taxis, auto-rickshaws, shared cabs</li>
                <li>🕒 Best Time to Visit: March – October</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Srinagar
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://s7ap1.scene7.com/is/image/incredibleindia/dal-lake-srinagar-j_k-tri-hero?qlt=82&ts=1727163903213&wid=800",
                "https://levoyageautrement-ec2.s3.eu-west-3.amazonaws.com/public/img/upload/gallery/unavoidable/3020/img-2024-11-14-03-37-07-9%2Bthumb---jammu-and-kashmir---dal-lake-in-srinagar-%C2%A9tongik---as_206889994-showfront-487-366.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKwXh6uWtuT99rmZw4rAK8G8Myp2veIdmSg&s",
                "https://planashleygo.com/wp-content/uploads/2023/04/Srinagar-1.jpg",
                "https://imagedelivery.net/y9EHf1toWJTBqJVsQzJU4g/www.indianholiday.com/2025/06/places-to-visit-in-srinagar.png/w=700,h=304",
                "https://www.kashmironline.com/top-destinations/srinagar/images/Downtown.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRwldIXdHMc3Y-YMm_RX9CU-DGskJ28_5sQ&s",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Srinagar"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1575311371166-b17bb1bca161?auto=format&fit=crop&w=900&q=80")
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

export default Srinagar;
