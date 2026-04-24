import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Ujjain = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-yellow-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweoHgOriTQv941bfYG2Y5xt3aXdKdFa2JvIh0WfKjvYVXE3sihHueB9K5jWNyTELmpw9UQNoFHkurmrVVBtMw0RWezRof74Dj-z9MKSrb0rLtPfc-uuZQ_tCk1H9bj-QOZ9PVitt=w675-h390-n-k-no"
            alt="Ujjain Temple"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Ujjain
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
              Ujjain
            </motion.h1>
            <p className="text-yellow-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              City of Temples
            </p>
            <div className="h-1.5 w-20 bg-yellow-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Ujjain, one of India’s oldest cities, is steeped in history and spirituality. 
              Known for the **Mahakaleshwar Jyotirlinga**, it attracts pilgrims and history lovers alike.
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
                <Compass className="text-yellow-500" /> Must-Visit Temples
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🛕" bold="Mahakaleshwar" text="One of the 12 Jyotirlingas" />
                <AttractionItem emoji="🛕" bold="Kal Bhairav Temple" text="Iconic deity of Ujjain" />
                <AttractionItem emoji="🌊" bold="Kshipra River" text="Sacred river for rituals" />
                <AttractionItem emoji="🛕" bold="Harsiddhi Temple" text="Ancient spiritual site" />
              </ul>
            </motion.div>

            {/* Cultural Experiences */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2.5rem] border border-amber-100/50 shadow-sm relative overflow-hidden group"
            >
              <h2 className="text-2xl font-black text-amber-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-amber-500" /> Local Culture & Cuisine
              </h2>
              <div className="space-y-4">
                <CulinaryItem text="Traditional Malwa dishes" />
                <CulinaryItem text="Street food at Main Bazaar" />
                <CulinaryItem text="Festivals like Kumbh Mela" />
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
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Devi Ahilya Airport, Indore" />
                <TravelDetail icon={<Train />} label="Nearest Railway" value="Ujjain Junction" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Oct – Mar" />
                <TravelDetail icon={<MapPin />} label="From Bhopal" value="~190 KM (4 hrs)" />
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
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSXED_LUFx6RTkuPmXPFBkujVkhXY7GAidXmIwHmJae4E2jpBEJuoKgHXUHMplLkNd-_7WKNMQsNTCDr1HEC_8ssrw&s=19", title: "Mahakaleshwar" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrQ2uaDztx0aXyn4c_Q9cnOt8dQiKI0qEqBN0zeUWPdgMw7rOmbYCKeTB61XXthfD846drAAB7G4zmjF2p6UjnfvcD_Ti2wNkirOjeKm03eLZ3I7iVbmGLRlIBV9clA7r7a8m5DY7uGOxf=w675-h390-n-k-no", title: "Kal Bhairav Temple" },
                { url: "https://images.trvl-media.com/place/8904/a2d05a53-2ff7-42d1-bcce-83cb12b4ee47.jpg", title: "Kshipra River" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTQxJIzpT51LyV53C-wC1L3wNfhV-8HLjHLiF469ZftRMHkgb25A1_mO2Qj-uVxHaxZC11ji43X8h4mYgQG6pU-Etk&s=19", title: "Harsiddhi Temple" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT6zggYNEBjmiIHwLlw_cIrZeXZXZquDb56BA1ZJeUIFinbzkC88OYDU43cCHTcjLjfVnpQptKRjFv1StmASgSDaFE&s=19", title: "Main Bazaar" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSopv-5yhK_XPIthIcI-WcVeFh2j3ZYEWGE6T6x9TeYXTKsobSa8xMYH2vfRfkOWhY8tqmoUewmQp8T3r0oB6xh3fo&s=19", title: "Ujjain Hills" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Ujjain - ${item.title}`}
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
      <b className="text-yellow-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const CulinaryItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-yellow-400" />
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

export default Ujjain;