import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Plane, Compass, Sparkles } from "lucide-react";

const HeroSection = () => {
  const videos = [
    "https://videos.pexels.com/video-files/13970899/13970899-hd_1920_1080_60fps.mp4",
    "https://videos.pexels.com/video-files/856191/856191-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/34379970/14564702_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/16668740/16668740-uhd_2560_1440_24fps.mp4",
    "https://videos.pexels.com/video-files/20123299/20123299-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/3696013/3696013-hd_1920_1080_24fps.mp4"
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!location.trim()) {
      alert("Please enter a destination 🌍");
      return;
    }
    const formatted = location.trim().toLowerCase().replace(/\s+/g, "-");
    navigate(`/destinations/${formatted}`, { state: { location } });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      
      {/* 🎥 Background Video with Transition */}
      <div className="absolute inset-0 w-full h-full">
        <video
          key={currentVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-1000"
          onEnded={() => setCurrentVideo((prev) => (prev + 1) % videos.length)}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#020617]"></div>
      </div>

      {/* 🧭 Main Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium tracking-wider uppercase text-cyan-100">
            India's Most Loved Travel Guide
          </span>
        </motion.div>

        {/* Headline with Typewriter-ish Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-6"
        >
          Explore the <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 animate-gradient">
            Spirit of India
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-blue-100/80 max-w-3xl mx-auto font-light leading-relaxed mb-12"
        >
          From the heights of Himalayas to the waves of Kanyakumari, <br className="hidden md:block"/>
          your extraordinary journey starts here.
        </motion.p>

        {/* 🔍 Smart Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative group max-w-3xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-2xl border border-white/30 rounded-[1.5rem] md:rounded-full p-2 gap-2">
            <div className="flex items-center flex-1 w-full px-6">
              <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
              <input
                type="text"
                placeholder="Enter city, state or beach..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent border-none outline-none text-white placeholder-blue-200 w-full py-4 text-lg"
              />
            </div>
            
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-cyan-400 hover:bg-white text-blue-950 font-bold px-10 py-4 rounded-xl md:rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <Search className="w-5 h-5" /> 
              <span>Find Trip</span>
            </button>
          </div>
        </motion.div>

        {/* 📊 Quick Stats / Features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-60">
            {[
                { label: "Destinations", value: "500+" },
                { label: "Experiences", value: "1200+" },
                { label: "States", value: "29" },
                { label: "Safety Rating", value: "4.9/5" }
            ].map((stat, i) => (
                <div key={i} className="text-white">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-cyan-300">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      {/* 🛫 Side Navigation / Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => navigate('/destinations')}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

    </section>
  );
};

export default HeroSection;