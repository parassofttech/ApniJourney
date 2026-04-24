import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const DzukouValley = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://static.toiimg.com/img/97834455/Master.jpg"
            alt="Dzukou Valley"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Nagaland
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-green-950 tracking-tighter leading-none mb-6 italic"
            >
              Dzukou Valley
            </motion.h1>
            <p className="text-green-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The Hidden Gem of Northeast
            </p>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Nestled in the hills of Nagaland and Manipur, Dzukou Valley is famous for its 
              seasonal flowers, pristine meadows, and the serene Dzukou River.
            </motion.p>
          </header>

          {/* 📊 INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] border border-green-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-green-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-green-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-green-500" /> Scenic Highlights
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🏞️" bold="Dzukou River" text="Crystal clear mountain waters" />
                <AttractionItem emoji="🌸" bold="Flowers & Blooms" text="Seasonal lily carpets" />
                <AttractionItem emoji="⛰️" bold="Rolling Hills" text="Panoramic green landscapes" />
                <AttractionItem emoji="🌄" bold="Sunrise Views" text="Golden morning skies" />
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-sm relative overflow-hidden group"
            >
              <h2 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3 italic">
                <Mountain className="text-emerald-500" /> Outdoor Adventures
              </h2>
              <div className="space-y-4">
                <AdventureItem text="Trekking through the valley" />
                <AdventureItem text="Photography of seasonal blooms" />
                <AdventureItem text="Camping in serene meadows" />
              </div>
            </motion.div>

            {/* Culture & Cuisine */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-[2.5rem] border border-yellow-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-yellow-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-yellow-500" /> Local Flavors
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Savor the local Naga cuisine, from smoked meat delicacies to fresh river fish, 
                served with warm hospitality.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#Trekking", "#Blooms", "#ValleyVibes", "#NagalandCulture"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-yellow-400 border border-yellow-100 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Travel Info */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <Plane className="text-green-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Kohima Airport" />
                <TravelDetail icon={<Train />} label="Railway Access" value="Dimapur Junction" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Oct – Mar" />
                <TravelDetail icon={<MapPin />} label="From Kohima" value="~30 KM (1 hr)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-green-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://roytellstales.com/wp-content/uploads/2020/01/IMG_20191210_1600370001-scaled.jpg", title: "Dzukou Blooms" },
                { url: "https://roytellstales.com/wp-content/uploads/2020/01/unexplored-northeast-LttRy5IZ-RA-unsplash.jpg", title: "Valley View" },
                { url: "https://cdn1.tripoto.com/media/filter/tst/img/2123218/Image/1686820194_camping_in_dzukou_the_outdoor_backpacker.jpg.webp", title: "Camping Site" },
                { url: "https://i.redd.it/lqic36uc0y6b1.jpg", title: "River Flow" },
                { url: "https://media.assettype.com/homegrown%2Fimport%2Fbook%2F11304-fvqdlqgivs-1558087647.jpg?w=480&auto=format%2Ccompress&fit=max", title: "Sunrise Hills" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bHbfCQ1CJUUSIJdCuhrNWVjMpo6SU37xIA&s", title: "Valley Trek" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Dzukou Valley - ${item.title}`}
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

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-green-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-green-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-green-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-green-100">{value}</span>
  </div>
);

export default DzukouValley;