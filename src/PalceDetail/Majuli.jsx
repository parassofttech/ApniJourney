import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Plane, Train, Compass, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Majuli = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-yellow-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌊 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSikQ7Q2-4phXjJJMISPbho1z3hByTSpuWAoAeIphowKS545Z8Ss_IMDJAGcIMNUY81-FSjwDCULt5oUGLyW7XnkPs&s=19"
            alt="Majuli Island"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Assam
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-yellow-950 tracking-tighter leading-none mb-6 italic"
            >
              Majuli
            </motion.h1>
            <p className="text-yellow-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The River Island Paradise
            </p>
            <div className="h-1.5 w-20 bg-yellow-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              The world’s largest river island, Majuli, floats gracefully on the Brahmaputra, 
              blending vibrant tribal culture, Satras, and serene landscapes into a unique experience.
            </motion.p>
          </header>

          {/* 📊 INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-[2.5rem] border border-yellow-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-yellow-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-yellow-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-yellow-500" /> Cultural Highlights
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🏯" bold="Satras" text="Neo-Vaishnavite monasteries" />
                <AttractionItem emoji="🎨" bold="Tribal Art" text="Mask-making and pottery" />
                <AttractionItem emoji="🌾" bold="Floodplains" text="Lush green paddy fields" />
                <AttractionItem emoji="🛶" bold="River Life" text="Majuli's floating charm" />
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[2.5rem] border border-amber-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Plane className="text-orange-500" /> Experiences
              </h2>
              <div className="space-y-4">
                <AdventureItem text="Boat Rides on Brahmaputra" />
                <AdventureItem text="Cycling Across the Island" />
                <AdventureItem text="Village Walks & Photography" />
              </div>
            </motion.div>

            {/* Culture */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] border border-green-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-green-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-green-500" /> Local Cuisine
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Taste authentic Assamese dishes like <span className="text-green-700 font-bold">pitha</span>, 
                <span className="text-green-700 font-bold">masor tenga</span>, and fresh river fish specialties.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#Satras", "#RiverIsland", "#MajuliVibes", "#AssamCulture"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-green-400 border border-green-100 uppercase tracking-widest">
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
                <Plane className="text-yellow-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Jorhat Airport" />
                <TravelDetail icon={<Train />} label="Railway Access" value="Sibsagar Junction" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Nov – Mar" />
                <TravelDetail icon={<MapPin />} label="From Guwahati" value="~300 KM (6 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-yellow-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSRzHvBvthkGKifT_elXixLliIIjRfwNk4yj3zGWShid9GPsPkCZTkJONfe8FuxLCUXHQjJJZYrqrAusm_QExwypTc&s=19", title: "Majuli Satras" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSIagVn8BeWFfhGxgNlxGTaDeSJNaiIqmIx7Oam_GN2tzELzD4aEHfvDHhTVRIusRKm0BoBFMPfs4tzGO2uvGa_fwI&s=19", title: "Brahmaputra River" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRxI4llH72NYhj_2PfmnoOJ3PtIpeu4Wi6db-dVcic0P1LpqLmqSnVECTMXQtce_A5zgpLz2eh7UC4IJff86-FSXj4&s=19", title: "Local Pottery" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSJS8UOHFzoxqbeiIuOUBdirX3u2_VfYAuFDBXhbDFbHuVEAD9rlwSt8YkY7ae8yls-mYdbU9p4JTUCI6CqqF4O51U&s=19", title: "Cycling Across Fields" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerM3K4puYdGwPdDjsIJrIz0XRfwOQzsLQMO7iFVvNV6nKLf5HY6UnDrxGniiNvQGHw35_tdP2B4IJwD3OoWLPNXbbFA0Nez2JmW4G6bpfO2hM17yd8q9CWLRqNMO8n6sTObxXUk=w675-h390-n-k-no", title: "Village Walks" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqLBqJ11gsnAs_gG5ELs_i8IozDHoLHHRiMKM1JBUmcZ6KOOfOcS64uup-Bpo_LUgR9aheGn4_TuQ7wv0qpsEjZdo7XzIfduGYsYqusWit0cH_1N2zL3N5XCfXnwasHasmbI00Y2Q=w675-h390-n-k-no", title: "River Life" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Majuli - ${item.title}`}
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
      <b className="text-yellow-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-orange-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-yellow-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-yellow-100">{value}</span>
  </div>
);

export default Majuli;