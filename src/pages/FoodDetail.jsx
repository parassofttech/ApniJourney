import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FiArrowLeft, 
  FiMapPin, 
  FiClock, 
  FiInfo, 
  FiExternalLink, 
  FiHeart, 
  FiShare2, 
  FiBookOpen, 
  FiCheckCircle,
  FiActivity
} from "react-icons/fi";
import foodData from "../data/foodData";

const FoodDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const food = foodData.find((item) => item.slug === slug);

  // State for interactive features (like button)
  const [isLiked, setIsLiked] = useState(false);

  if (!food) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white"
        >
          <h1 className="text-6xl font-black text-orange-500 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6 font-medium">Oops! Dish not found in our royal kitchen.</p>
          <button 
            onClick={() => navigate("/food")} 
            className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all font-bold"
          >
            Explore All Foods
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-[#faf9f5] pb-24 text-gray-800 selection:bg-orange-500 selection:text-white">
      
      {/* 🔙 Floating Glassmorphism Header Actions */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center max-w-7xl mx-auto pointer-events-none">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="pointer-events-auto mt-25 bg-white/70 hover:bg-orange-500 hover:text-white backdrop-blur-xl p-4 rounded-full text-gray-800 transition-all shadow-xl border border-white/40 group"
        >
          <FiArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform " />
        </motion.button>

        <div className="flex gap-3 pointer-events-auto">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white/70 hover:bg-white backdrop-blur-xl p-4 rounded-full text-gray-800 transition-all shadow-xl border border-white/40"
          >
            <FiHeart size={22} className={isLiked ? "fill-red-500 text-red-500" : ""} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: food.dish, url: window.location.href });
              }
            }}
            className="bg-white/70 hover:bg-white backdrop-blur-xl p-4 rounded-full text-gray-800 transition-all shadow-xl border border-white/40"
          >
            <FiShare2 size={22} />
          </motion.button>
        </div>
      </div>

      {/* 🖼️ ULTRA-MODERN HERO SECTION */}
      <div className="relative w-full h-[85vh] overflow-hidden rounded-b-[3.5rem] shadow-2xl">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={food.images[0]}
            alt={food.dish}
            loading="eager"
            className="w-full h-full object-cover filter brightness-95"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
        
        <div className="absolute bottom-16 left-0 w-full px-6 md:px-16">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-7xl mx-auto text-white"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-500/30">
                {food.state}
              </span>
              <span className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                {food.type}
              </span>
            </div>
            <h1 className="text-5xl md:text-[8rem] font-black tracking-tight leading-none drop-shadow-2xl">
              {food.dish}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 🍱 MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        
        {/* Floating Quick Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div whileHover={{ y: -5 }} className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 flex items-center gap-5 border border-white">
            <div className="p-4 bg-orange-100 text-orange-600 rounded-2xl"><FiMapPin size={26}/></div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Capital / Hub</p>
              <p className="text-xl font-black text-gray-800">{food.capital}</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 flex items-center gap-5 border border-white">
            <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl"><FiInfo size={26}/></div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Category</p>
              <p className="text-xl font-black text-gray-800">{food.category || food.type}</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 flex items-center gap-5 border border-white">
            <div className="p-4 bg-rose-100 text-rose-600 rounded-2xl"><FiClock size={26}/></div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Energy Quotient</p>
              <p className="text-xl font-black text-gray-800">{food.calories}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: All Details Displayed Directly by Default */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Culinary Essence / Overview */}
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <FiBookOpen className="text-orange-500"/> Culinary Essence
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed font-light italic border-l-4 border-orange-500 pl-6">
                "{food.description}"
              </p>
            </div>

            {/* Secondary Images Gallery (if any) */}
            {food.images.slice(1).length > 0 && (
              <div className="space-y-6">
                {food.images.slice(1).map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full overflow-hidden rounded-[3rem] shadow-2xl border border-gray-100"
                  >
                    <img 
                      src={img} 
                      className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" 
                      alt="Culinary preview"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* History & Heritage Section */}
            <div className="bg-gray-900 text-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 text-white/5 text-9xl font-black pointer-events-none">HERITAGE</div>
              <h3 className="text-3xl font-black mb-6 flex items-center gap-3 text-orange-400">
                📖 History & Deep Roots
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light mb-8">
                {food.history}
              </p>
              
              {food.culturalSignificance && (
                <div className="border-t border-white/10 pt-8 mt-8">
                  <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    ✨ Cultural Significance
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-base font-light">
                    {food.culturalSignificance}
                  </p>
                </div>
              )}
            </div>

            {/* Nutritional Breakdown / Detailed Recipe Section */}
            {food.nutritionalBreakdown && (
              <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
                <h3 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900">
                  <FiActivity className="text-orange-500"/> Nutritional Overview
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {food.nutritionalBreakdown}
                </p>
              </div>
            )}

            {food.detailedRecipeAndTips && (
              <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
                <h3 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900">
                  🍳 Traditional Preparation Guide
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {food.detailedRecipeAndTips}
                </p>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Sidebar (Ingredients & Map Card) */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 space-y-8">
              
              {/* Ingredients Card */}
              <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  🧂 Key Ingredients
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {food.ingredients.map((item, index) => (
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      key={index}
                      className="bg-orange-50/80 px-4 py-2.5 rounded-2xl text-gray-700 font-bold text-sm shadow-sm border border-orange-100/60 hover:bg-orange-500 hover:text-white transition-all cursor-default flex items-center gap-2"
                    >
                      <FiCheckCircle className="text-orange-500 group-hover:text-white" size={14} />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Best Place Card */}
              <div className="bg-gradient-to-br from-orange-500 via-rose-500 to-amber-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl font-black">📍</div>
                <h4 className="text-orange-200 text-xs font-black uppercase tracking-widest mb-3">Recommended Stop</h4>
                <p className="text-2xl font-black mb-8 leading-snug">"{food.bestPlace}"</p>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(food.bestPlace + " " + food.state)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-white text-gray-900 hover:bg-gray-100 px-6 py-4 rounded-2xl transition-all font-black shadow-lg"
                >
                  Locate on Map <FiExternalLink size={18} />
                </motion.a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FoodDetail;