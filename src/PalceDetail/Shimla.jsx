import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee,Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Shimla = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-sky-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >
        {/* 🏔️ HERO SECTION - Cinematic Zoom */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTAMheFDLwFUgWS3f-NyNtnVuH45cGEwZ5tOEZ1BS6-SJ7ZsGCrl9FOSq_v1tVwcEzO_ql-XWiqowvDGPVPZ-weQUBt&s=19"
            alt="Shimla Hills"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          {/* Floating Tag */}
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Explore Himachal</span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          {/* Header Section */}
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-sky-950 tracking-tighter leading-none mb-6 italic"
            >
              Shimla
            </motion.h1>
            <p className="text-sky-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">The Queen of Hills</p>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Walk through the whispering pines and Victorian shadows. Shimla isn't just a destination; 
              it's a <span className="text-sky-900 font-bold italic">colonial dream</span> frozen in the Himalayan mist.
            </motion.p>
          </header>

          {/* 📊 INFO GRID - Advanced Bento Style */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-blue-50 to-sky-50 rounded-[2.5rem] border border-blue-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-blue-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-sky-900 mb-8 flex items-center gap-3  italic">
                <Compass className="text-sky-500" /> Legendary Landmarks
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🏞️" bold="The Ridge" text="Panoramic Himalayan skyline" />
                <AttractionItem emoji="🏛️" bold="Christ Church" text="Vintage Neo-Gothic soul" />
                <AttractionItem emoji="🚡" bold="Jakhoo Hill" text="Guardian Hanuman statue" />
                <AttractionItem emoji="🌸" bold="Mall Road" text="The heart of hill-culture" />
              </ul>
            </motion.div>

            {/* Adventure Section */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-sm relative overflow-hidden group"
            >
              <Snowflake className="absolute -right-6 -top-6 text-emerald-200/40 w-32 h-32 group-hover:scale-125 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3 italic">
                <Mountain className="text-emerald-500" /> Alpine Adventures
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between group/item cursor-default hover:bg-white transition-all">
                  <span className="font-bold text-slate-700">Skiing in Kufri</span>
                  <ArrowUpRight size={18} className="text-emerald-400 opacity-0 group-hover/item:opacity-100 transition-all" />
                </div>
                <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between group/item cursor-default hover:bg-white transition-all">
                  <span className="font-bold text-slate-700">Mountain Biking Trails</span>
                  <ArrowUpRight size={18} className="text-emerald-400 opacity-0 group-hover/item:opacity-100 transition-all" />
                </div>
                <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between group/item cursor-default hover:bg-white transition-all">
                  <span className="font-bold text-slate-700">Mashobra Forest Camping</span>
                  <ArrowUpRight size={18} className="text-emerald-400 opacity-0 group-hover/item:opacity-100 transition-all" />
                </div>
              </div>
            </motion.div>

            {/* Culture & Food */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2.5rem] border border-orange-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-orange-500" /> Culinary Heritage
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                From the spicy <span className="text-orange-700 font-bold">Himachali Dham</span> to a vintage coffee at the 
                <span className="text-orange-700 font-bold"> Indian Coffee House</span>, Shimla's food tells a story of royalty and warmth.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#Sidu", "#PahadiThali", "#SimlaTimes", "#Handicrafts"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-orange-400 border border-orange-100 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Travel Intel - Dark Glass Section */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden shadow-blue-900/20"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <Plane className="text-sky-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Train />} label="The Toy Train" value="UNESCO Heritage Route" />
                <TravelDetail icon={<Plane />} label="Nearest Hub" value="Jubbarhatti Airport" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Oct – Feb (Snowfall)" />
                <TravelDetail icon={<MapPin />} label="From Delhi" value="~340 KM (7 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 PREMIUM GALLERY */}
<section className="mt-28">
  <div className="flex items-center justify-between mb-14">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
      <Camera className="text-sky-500" /> Visual Escape
    </h2>
    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {[
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbcqncvHS2FGpyj2H42x66QQL9OZSkdQlhHWcQD8nXeKtmfSE9WLAIdEo_iexq1D9Mm5aTO1okxMGPhu3b_C3jmTRlMLNfqKsOv6KHXVKLyXIDE327OI9lKDS2JzSRtdhRUYT4=w675-h390-n-k-no",
    title: "The Ridge",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-TwYf2kw7QcA-feARujdCswlTUN7ZE2VxA&s",
    title: "Christ Church",
  },
  {
    url: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
    title: "Snow Covered Hills",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT26w-bCNNNc_X_UPmRNKt3jcldgFqIbu-8Kc7E4caSaDq3txzAuN33iIak2jTvN53SJhsydV51kSI2T0G-YpZ2XD4&s=19",
    title: "Valley Sunset",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSN45kh2-N8OPGK8XMVokSHJTxX-G25EVG8vyy2v74OyB49qqAAbfxT3PLucFKlXQ7o1o8Ir3XWs9CSu3hCaI2R4IEn&s=19",
    title: "Mall Road",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQb3vj83Fqw7C2VFlYJlztiHid3LrJPErxDWduBxqHm5gBsqZBjRTIuIfv0PVp9XNFR3ACMM3ZxpMdqyo8RQTbnUos&s=19",
    title: "Jakhoo Temple",
  },
].map((item) => (
  <motion.div
    key={item.title}
    whileHover={{ scale: 1.03 }}
    className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
  >
    <div className="w-full h-72 overflow-hidden">
      <img
        src={item.url}
        alt={`Shimla - ${item.title}`}
        loading="lazy"
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
      <div>
        {/* <h3 className="text-white text-xl font-bold tracking-wide">
          {item.title}
        </h3> */}
        <p className="text-white/70 text-sm">
          Shimla • Himachal Pradesh
        </p>
      </div>
    </div>
  </motion.div>
))}
  </div>
</section>
          {/* 🚀 CALL TO ACTION */}
          <div className="mt-20 text-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://himachaltourism.gov.in"
              className="inline-flex items-center gap-4 bg-sky-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(2,132,199,0.3)] hover:bg-sky-700 transition-all"
            >
              Start Your Journey <ArrowUpRight size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Reusable Modern Components ---

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all cursor-default">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-sky-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 group hover:border-sky-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-sky-400 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-sky-100">{value}</span>
  </div>
);

export default Shimla;