// src/components/Udaipur.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Ship, Crown, Camera, Plane, Train } from "lucide-react";

const Udaipur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-white to-blue-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://cdn.sanity.io/images/ocl5w36p/prod5/a26edf09fdf26580a0a120ddb8d729bdcfb42b56-1280x1760.jpg?w=380"
          alt="Udaipur City Palace"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1600697395542-ef48a7c3b9b5?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Title */}
        <div className="p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-amber-800 mb-4"
          >
            🌇 Udaipur – The City of Lakes
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
          >
            Known as the **“Venice of the East”**, Udaipur is a city of timeless
            beauty, grand palaces, serene lakes, and royal heritage. Set against
            the backdrop of the **Aravalli Hills**, it’s one of Rajasthan’s most
            romantic and picturesque destinations.
          </motion.p>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Top Attractions */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Crown /> Top Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏰 <b>City Palace:</b> The grand symbol of Udaipur’s royal past</li>
                <li>🌅 <b>Pichola Lake:</b> Boat rides with sunset views</li>
                <li>🕌 <b>Jag Mandir:</b> A palace on an island in Pichola Lake</li>
                <li>🏞️ <b>Saheliyon Ki Bari:</b> Historic garden of fountains & marble</li>
              </ul>
            </motion.div>

            {/* Culture & Food */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-rose-50 border border-rose-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-rose-700 mb-3">
                <MapPin /> Culture & Cuisine
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🍛 Rajasthani thali – Dal Baati Churma, Gatte ki Sabzi</li>
                <li>💃 Mewar cultural shows at Bagore Ki Haveli</li>
                <li>🎭 Shilpgram Festival – Folk dance, art, and handicrafts</li>
                <li>🛍️ Handcrafted jewelry & miniature paintings</li>
              </ul>
            </motion.div>

            {/* Adventure & Lakes */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Ship /> Adventure & Lakes
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🚤 Sunset boat ride on Fateh Sagar Lake</li>
                <li>🧗 Trekking in the Aravalli Hills</li>
                <li>📸 Lake view cafés and rooftop dining</li>
                <li>🚴 Cycling tours around the countryside</li>
              </ul>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-green-50 border border-green-200 rounded-2xl shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Plane /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>✈️ Nearest Airport: Maharana Pratap Airport (22 km)</li>
                <li>🚆 Udaipur Railway Station connects to Delhi, Mumbai, Jaipur</li>
                <li>🚌 Well connected by luxury buses & taxis</li>
                <li>🕒 Best Time: September – March</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Udaipur Gallery – Royal Reflections
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/763687523.jpg?k=089cbeeec18c02ac3270c033f62935615d49d2ffd289b5afa19667018a374356&o=&hp=1",
                "https://static.toiimg.com/photo/msid-82304823,width-96,height-65.cms",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGN2rvi6DT6yPxHy3QHEKwsi0NPNWlTVCJ8g&s",
                "https://static.toiimg.com/photo/32606661.cms",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3TiqXutrEjUqLMIFlkTKL-Gi0RPT2lIcwQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75hzf9FtSf_nKKIRArv83tTH5C5uRG_kMog&s",
                
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Udaipur View"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1600697395542-ef48a7c3b9b5?auto=format&fit=crop&w=1200&q=80")
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

export default Udaipur;
