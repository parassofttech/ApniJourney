import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    id: 1,
    title: "National Chambal Sanctuary",
    image: "https://www.shutterstock.com/image-photo/crocodiles-large-semiaquatic-reptiles-powerful-600nw-2662580205.jpg",
    desc: "Home to the rare gharials and Ganges river dolphins.",
    color: "from-blue-900/80"
  },
  {
    id: 2,
    title: "Suhaildev Wildlife Sanctuary",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJW4DjT0SpoA-sqf2InAaX8wtLqlBTHb-Aw&s",
    desc: "A sprawling landscape of tigers, leopards, and pythons.",
    color: "from-orange-900/80"
  },
  {
    id: 3,
    title: "Bakhira Bird Sanctuary",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaz6ggmN1N7PC1gN_fsY0mOXBPP0_x-KRnA&s",
    desc: "The largest natural flood plain wetland of Eastern UP.",
    color: "from-emerald-900/80"
  },
  {
    id: 4,
    title: "Samaspur Bird Sanctuary",
    image: "https://upecoboard.up.gov.in/img/innerpage/samaspur.png",
    desc: "A haven for migratory birds during the winter season.",
    color: "from-teal-900/80"
  }
];

const WildlifeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden">

  {/* 🎥 Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="https://videos.pexels.com/video-files/2330728/2330728-uhd_2560_1440_24fps.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fffcf7]" />

  

  {/* Background Subtle Glow */}
  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent)] pointer-events-none" />

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-emerald-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
          Click on any destination to explore more details
        </p>
        <h2 className="text-4xl md:text-6xl font-serif text-white italic">
          Adventure Through Nature's <span className="text-emerald-400">Untamed Beauty</span>
        </h2>
      </motion.div>

      {/* Slider Container */}
      <div className="relative w-full max-w-7xl h-[550px] flex items-center justify-center">
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 z-30 p-4 bg-white/10 hover:bg-emerald-500 backdrop-blur-md rounded-full text-white transition-all -translate-x-1/2 hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 z-30 p-4 bg-white/10 hover:bg-emerald-500 backdrop-blur-md rounded-full text-white transition-all translate-x-1/2 hidden md:block"
        >
          <ChevronRight size={24} />
        </button>

        {/* Cards Wrapper */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 w-full h-full ">
          {destinations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="relative h-full rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/10"
            >
              {/* Image with Parallax Zoom */}
              <img 
                src={item.image} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={item.title}
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity`} />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-3">
                   <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <PawPrint size={14} className="text-emerald-300" />
                   </div>
                   <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">Wildlife Sanctuary</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-white/70 text-sm font-medium mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-tighter group-hover:gap-4 transition-all">
                  Learn More <ArrowUpRight size={16} className="text-emerald-400" />
                </div>
              </div>

              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20"
      >
        <button onClick={()=>navigate('/national-park')} className="relative group bg-orange-500 text-white px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] overflow-hidden">
          <span className="relative z-10 flex items-center gap-3">
            View All <ArrowUpRight size={18} />
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="absolute inset-0 flex items-center justify-center text-orange-600 font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase text-xs tracking-[0.3em]">
            See Expedition
          </span>
        </button>
      </motion.div>

    </div>
  );
};

export default WildlifeSlider;