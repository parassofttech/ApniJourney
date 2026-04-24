import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Camera, Umbrella } from "lucide-react";

const OotyTamil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s3.ap-south-1.amazonaws.com/zo-media/blog_photo/old/botanical_garden_6SOT8IV.jpg"
          alt="Ooty Lake"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1600730427482-4b4d6c1efdf2?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-green-800 mb-4"
          >
            🌿 Ooty – Queen of the Nilgiris
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Ooty, located in **Tamil Nadu**, is a famous hill station in the **Nilgiri Hills**. Known 
            for its **tea gardens, serene lakes, rolling hills**, and **pleasant weather**, it’s a 
            favorite getaway for nature lovers and adventure enthusiasts.
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
                Ooty was developed by the British in the **19th century** as a summer retreat. 
                Colonial architecture and botanical gardens reflect its historic charm.
              </p>
            </motion.div>

            {/* Lakes & Gardens */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Waves /> Lakes & Gardens
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🛶 <b>Ooty Lake:</b> Boating & scenic views</li>
                <li>🌸 <b>Botanical Garden:</b> Exotic flora & photo spots</li>
                <li>🌳 <b>Rose Garden:</b> Colorful varieties & walking trails</li>
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
                <li>🥾 Trekking through Nilgiri Hills</li>
                <li>🚂 Toy Train Ride: Ooty–Coonoor UNESCO route</li>
                <li>🧗 Rock climbing and nature trails</li>
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
                <li>✈️ Nearest Airport: Coimbatore International Airport (CJB)</li>
                <li>🚆 Nearest Railway Station: Ooty Railway Station</li>
                <li>🚌 Local Transport: Taxis, buses & rental scooters</li>
                <li>🕒 Best Time to Visit: October – June</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Ooty
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://cdn.guidetour.in/wp-content/uploads/2018/01/Rose-Garden-Ooty.jpg.webp",
                "https://tripxl.com/blog/wp-content/uploads/2024/11/Explore-The-Ooty-Botanical-Gardens.jpg",
                "https://media.assettype.com/outlooktraveller%2F2024-04%2Fc15b61cf-f63b-4055-996c-f6a78df41022%2Fshutterstock_2333187775.jpg?rect=0%2C296%2C9000%2C5063&w=480&auto=format%2Ccompress&fit=max",
                "https://www.authenticindiatours.com/app/uploads/2022/03/Nilgiri-Hill-Toy-Train-Ooty-Tamil-Nadu.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpGQhXO5tYyDNEpiZq5gA5ptKULW1tojJXQ8sqUvyR3X-TWG3X8k29aJApRvdFhN3M8g&usqp=CAU",
                "https://static.toiimg.com/photo/123391105.cms",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Ooty"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1600730427482-4b4d6c1efdf2?auto=format&fit=crop&w=900&q=80")
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

export default OotyTamil;
