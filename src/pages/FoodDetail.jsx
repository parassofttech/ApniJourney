import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiMapPin, FiClock, FiInfo, FiExternalLink } from "react-icons/fi";
import foodData from "../data/foodData";

const FoodDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const food = foodData.find((item) => item.slug === slug);

  if (!food) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50">
        <h1 className="text-5xl font-black text-gray-300 mb-4">404</h1>
        <button onClick={() => navigate("/food")} className="bg-orange-500 text-white px-8 py-3 rounded-full shadow-lg">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 🔙 Floating Back Button - Glassmorphism style */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 bg-black/20 hover:bg-orange-500 backdrop-blur-xl p-4 rounded-full text-white transition-all shadow-xl border border-white/20 mt-15"
      >
        <FiArrowLeft size={24} />
      </motion.button>

      {/* 🖼️ FULL WIDTH HERO SECTION (Edge-to-Edge) */}
      <div className="relative w-full h-screen">
        <motion.div 
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1 }}
  className="w-full h-full flex justify-center items-center overflow-hidden"
>
  <img
    src={food.images[0]}
    alt={food.dish}
    className="max-h-full max-w-full object-cover rounded-2xl"
  />
</motion.div>
        
        {/* Deep Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-20 left-0 w-full px-6 md:px-16">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-7xl mx-auto text-white"
          >
            <div className="flex items-center gap-3 mb-4">
               <span className="bg-orange-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                {food.state}
              </span>
              <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">
                {food.type}
              </span>
            </div>
            <h1 className="text-6xl md:text-[10rem] font-black leading-none drop-shadow-2xl">
              {food.dish}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 🍱 CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        
        {/* Floating Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex items-center gap-5 border border-gray-50">
                <div className="p-4 bg-orange-100 text-orange-600 rounded-2xl"><FiMapPin size={28}/></div>
                <div><p className="text-xs text-gray-400 font-bold uppercase">Location</p><p className="text-xl font-bold">{food.capital}</p></div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex items-center gap-5 border border-gray-50">
                <div className="p-4 bg-green-100 text-green-600 rounded-2xl"><FiInfo size={28}/></div>
                <div><p className="text-xs text-gray-400 font-bold uppercase">Dietary</p><p className="text-xl font-bold">{food.category || food.type}</p></div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex items-center gap-5 border border-gray-50">
                <div className="p-4 bg-red-100 text-red-600 rounded-2xl"><FiClock size={28}/></div>
                <div><p className="text-xs text-gray-400 font-bold uppercase">Energy</p><p className="text-xl font-bold">{food.calories}</p></div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content (Story & Full Gallery) */}
          <div className="lg:col-span-8 space-y-16">
            
            <section>
              <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
                The Story <span className="h-1 flex-1 bg-gray-100 rounded-full"></span>
              </h2>
              <p className="text-2xl text-gray-500 leading-relaxed font-light italic border-l-4 border-orange-500 pl-8">
                "{food.description}"
              </p>
            </section>

            {/* FULL VIEW SECONDARY IMAGES */}
            <section className="space-y-6">
              {food.images.slice(1).map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full overflow-hidden rounded-[3rem] shadow-2xl"
                >
                  <img 
                    src={img} 
                    className="w-full h-auto max-h-[80vh] object-cover hover:scale-105 transition-transform duration-1000" 
                    alt="Food detail"
                  />
                </motion.div>
              ))}
            </section>

            <section className="bg-gray-900 text-white p-12 rounded-[3.5rem] shadow-3xl">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                History & Heritage 📖
              </h3>
              <p className="text-gray-300 leading-relaxed text-xl font-light">
                {food.history}
              </p>
            </section>
          </div>

          {/* Sidebar (Ingredients) */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 space-y-8">
              <div className="bg-orange-50 rounded-[3rem] p-10 border border-orange-100">
                <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                  🧂 Ingredients
                </h3>
                <div className="flex flex-wrap gap-3">
                  {food.ingredients.map((item, index) => (
                    <span 
                      key={index}
                      className="bg-white px-5 py-3 rounded-2xl text-gray-700 font-bold shadow-sm border border-orange-100 hover:bg-orange-500 hover:text-white transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-[3rem] p-10 text-white shadow-xl">
                 <h4 className="text-orange-200 text-xs font-black uppercase tracking-widest mb-4">Where to eat?</h4>
                 <p className="text-2xl font-bold mb-6">"{food.bestPlace}"</p>
                 <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-3 rounded-full transition-all font-bold">
                    View on Map <FiExternalLink />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;