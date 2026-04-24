import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Pushkar = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-pink-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQWSSpQylqZRC9WbqvHLvsKgWnhM1PUv1OpB73azKuJ470d80hzJrA3U-aG0iuesE3IGTP7BOhELZeKS3VrKYWlXSI&s=19"
            alt="Pushkar Lake"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Pushkar
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-pink-950 tracking-tighter leading-none mb-6 italic"
            >
              Pushkar
            </motion.h1>
            <p className="text-pink-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Holy City of Temples
            </p>
            <div className="h-1.5 w-20 bg-pink-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Pushkar is one of the oldest cities in India, famous for its sacred lake, the 
              <span className="text-pink-700 font-bold italic"> Brahma Temple</span>, and vibrant annual fairs.
            </motion.p>
          </header>

          {/* 📊 INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-pink-50 to-rose-50 rounded-[2.5rem] border border-pink-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-pink-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-pink-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-pink-500" /> Must-Visit Sites
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🛕" bold="Brahma Temple" text="One of the few dedicated to Lord Brahma" />
                <AttractionItem emoji="🌊" bold="Pushkar Lake" text="Sacred waterbody for rituals" />
                <AttractionItem emoji="🛕" bold="Savitri Temple" text="Hilltop spiritual site with panoramic views" />
                <AttractionItem emoji="🎪" bold="Pushkar Camel Fair" text="Famous annual cultural festival" />
              </ul>
            </motion.div>

            {/* Culture & Cuisine */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-rose-50 to-pink-50 rounded-[2.5rem] border border-rose-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-rose-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-rose-500" /> Local Culture & Cuisine
              </h2>
              <div className="space-y-4">
                <CulinaryItem text="Traditional Rajasthani dishes" />
                <CulinaryItem text="Street food near Pushkar Lake" />
                <CulinaryItem text="Camel fair festivities and local crafts" />
              </div>
            </motion.div>

            {/* Travel Info */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <Plane className="text-pink-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Sanganer Airport, Jaipur" />
                <TravelDetail icon={<Train />} label="Nearest Railway" value="Ajmer Junction" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Oct – Mar" />
                <TravelDetail icon={<MapPin />} label="From Jaipur" value="~145 KM (3 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-pink-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerMa37ptF3uWaYqlRXcb-SEOGk2Ndu0vFMeWtkONLBi2lFRkdcaMcQMITI_UajeOcm1Pl12zGlPOvNRuHhZaTtb6TS86f-USh5BGl0EcOiwxmIIAfvkXNRuYPZwv8_A_Fswz-n3=w675-h390-n-k-no", title: "Brahma Temple" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJu5Dzp3hB4Cz2NxbzEHesx-m11YY4sFL8QMZRCqnkYy4QbYd6EG1y_3TUsRho6fGyy5cmK5WqOrdn6tZjhTWClG5eyYHn7ke02ZudJnEF5_UUsttoaTcrE9aKypm-dKkrrHyi=w675-h390-n-k-no", title: "Pushkar Lake" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepVtvxg9wKoUtSydvpattTlMzKX4LCCOFBYnNkTKtQFEizVFZfj4X9LAWO03ftND1NNzuIwLhXzVeLbeQccfM8ubiQNpOsupgx4R4dv_7jAXOn4CongwLW7V_9LP58AS3Jzg2BZsQ=w675-h390-n-k-no", title: "Savitri Temple" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSAEH7mk0hrQTss2lcxIOiyZk7MTYCS1Q5cUXQ2Ahbtnw_T17bEvHI4ONp-dctZ9OerenVF_81fnfVvfU6T-MdzNhk&s=19", title: "Pushkar Camel Fair" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQpntKA0lh1zczMoUcV-YIsmSYR7jQY-e5Se8MW3sDDFxD5aMC54oUy6T7-NrV9PguKXcZxslPVbvgP5mUcT1tePUU&s=19", title: "Main Bazaar" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep21SsZ7o3FRcrTBkAJd4TifsgVZjlSPVLPeA8ZSnQeUdSpyVBW5XoYIk_N02xaseEK4MW8E7gfEVv4INLK10d7yEyDbR7UrsaJN1VKS0QJAFU6V4gD6L1ZhWx-nG5cJysHZQkP=w675-h390-n-k-no", title: "Sunset Views" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Pushkar - ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

// --- Reusable Components ---
const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-pink-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const CulinaryItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-pink-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-pink-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-pink-100">{value}</span>
  </div>
);

export default Pushkar;