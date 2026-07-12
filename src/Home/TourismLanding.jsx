import React from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import LandStory  from "../assets/images/land2.jpg"

const TourismLanding = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-4 md:px-6 overflow-hidden">

        {/* 🎥 Background Video (Only Hero Section) */}
        <div className="absolute inset-0 w-full h-full -z-20">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWFVW9-UvtH5_KDa69wKOKR9XWKLwpjpCcb5IFGL9yszcJlQEVFR9KE1I&s=10" alt="background"
          className="w-full h-full object-cover" />
        </div>

        {/* White Gradient Overlay */}
        <div className="absolute inset-0  bg-gradient-to-b from-white/95 via-white/10 to-white/0 -z-10" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center py-20">

          {/* LEFT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:h-[550px]">

              <div className="col-span-2 lg:col-span-7 h-[350px] lg:h-full overflow-hidden rounded-[30px] shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYfmaZxYkWAeEpoyMooviJ1P-biXKQwXIDWwBaTUwPTFwhfrEqB9TVtk&s=10"
                  alt="India"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-2 lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="h-[170px] lg:h-full overflow-hidden rounded-[25px] shadow-xl">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={LandStory}
                    className="w-full h-full object-cover"
                    alt="mountain"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>

                <div className="h-[170px] lg:h-full overflow-hidden rounded-[25px] shadow-xl relative">
                  <img
                    src="https://img.magnific.com/premium-photo/kerala-most-beautiful-place-india_1111209-1012.jpg"
                    className="w-full h-full object-cover"
                    alt="upsplash"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg">
                      <Play size={18} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 left-6 bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-xl border border-white/40"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      className="w-9 h-9 rounded-full border-2 border-white"
                      alt="user"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">
                    Global Travelers
                  </p>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-orange-400 fill-orange-400" />
                    <span className="font-bold text-sm text-gray-800">
                      4.9 Rating
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-widest mb-6">
              ✨ Discover the Magic of India
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              One Land, <br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                A Million Stories.
              </span>
            </h2>

            <p className="mt-8 text-slate-700 text-lg max-w-xl font-medium">
              Experience the heartbeat of India, from the majestic Himalayas
              to the serene backwaters of the South.
            </p>

          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default TourismLanding;