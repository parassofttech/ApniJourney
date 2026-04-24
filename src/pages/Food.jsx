import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiMapPin, FiArrowRight } from "react-icons/fi"; // Icons ke liye
import foodData from "../data/foodData";
import Footer from "../Home/Footer";

const Food = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredFood = useMemo(() => {
    return foodData.filter((item) => {
      const matchesSearch = item.dish.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.state.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === "All" || item.type === activeFilter; // Maan lijiye foodData mein category hai
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const categories = ["All", "Vegetarian", "Non-Vegetarian", "Sweet"];

  return (
    <div className=" bg-gradient-to-b from-[#fffcf7] via-green-500/30 to-yellow-400/30 -z-10 min-h-screen font-sans selection:bg-orange-200">
      
      {/* 🔥 PREMIUM HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Indian Cuisine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fffcf7]"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            A Culinary Journey Across Bharat
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl"
          >
            Taste the <span className="text-orange-500">Tradition</span>
          </motion.h1>
          
          {/* Custom Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative max-w-2xl mx-auto mt-10"
          >
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search by state or dish (e.g. Litti Chokha)..."
              className="w-full pl-14 pr-6 py-5 rounded-full bg-white/95 backdrop-blur-md shadow-2xl focus:ring-4 focus:ring-orange-400 outline-none text-gray-800 text-lg transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>
      </div>

      {/* 🧭 FILTER TABS */}
      <div className="sticky top-0 z-40 bg-[#fffcf7]/80 backdrop-blur-md py-6 border-b border-gray-100">
        <div className="flex justify-center gap-4 overflow-x-auto px-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-2 py-1 rounded-full font-medium transition-all duration-300 w-full ${
                activeFilter === cat
                ? "bg-orange-500 text-white shadow-lg shadow-orange-200" 
                : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🍽 FOOD GRID SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <AnimatePresence>
            {filteredFood.map((item, index) => (
              <motion.div
                layout
                key={item.slug || index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                onClick={() => navigate(`/food/${item.slug}`)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.images ? item.images[0] : item.image}
                    alt={item.dish}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 flex items-center gap-1 shadow-sm">
                      <FiMapPin /> {item.state}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                    {item.dish}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {item.description || "Discover the authentic taste and rich history of this traditional delicacy."}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Explore Recipe</span>
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <FiArrowRight />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredFood.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 font-medium">Aww! No dishes found for "{searchTerm}"</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Food;