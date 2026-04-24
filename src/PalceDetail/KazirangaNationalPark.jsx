import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Plane, 
  Train, Compass, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar, Trees
} from "lucide-react";

const KazirangaNationalPark = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌿 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://bigcatsindia.com/wp-content/uploads/2024/10/big-five-kaziranga.webp"
            alt="Kaziranga National Park"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
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
              className="text-5xl md:text-8xl font-black text-green-950 tracking-tighter leading-none mb-6 italic"
            >
              Kaziranga
            </motion.h1>
            <p className="text-green-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Land of the One-Horned Rhino
            </p>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              A breathtaking wildlife sanctuary where tall elephant grass, wetlands,
              and dense forests protect rare species in their natural habitat.
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
                <Compass className="text-green-500" /> Wildlife Highlights
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🦏" bold="One-Horned Rhino" text="Largest population in the world" />
                <AttractionItem emoji="🐅" bold="Royal Bengal Tiger" text="High tiger density reserve" />
                <AttractionItem emoji="🐘" bold="Asian Elephants" text="Wild herds roaming freely" />
                <AttractionItem emoji="🦅" bold="Bird Paradise" text="Home to 450+ bird species" />
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3 italic">
                <Mountain className="text-emerald-500" /> Safari Experiences
              </h2>
              <div className="space-y-4">
                <AdventureItem text="Jeep Safari Adventure" />
                <AdventureItem text="Elephant Safari Ride" />
                <AdventureItem text="Bird Watching Tours" />
              </div>
            </motion.div>

            {/* Culture */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2.5rem] border border-orange-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-orange-500" /> Local Culture
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Experience Assamese hospitality, traditional Bihu dance,
                and local cuisine like fish curry and pitha.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#RhinoLand", "#BihuVibes", "#WildlifeSafari", "#AssamTourism"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-orange-400 border border-orange-100 uppercase tracking-widest">
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
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Jorhat Airport" />
                <TravelDetail icon={<Train />} label="Railway Access" value="Furkating Junction" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Nov – Apr" />
                <TravelDetail icon={<MapPin />} label="From Guwahati" value="~220 KM (4 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-green-500" /> Visual Safari
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://www.kaziranga-national-park.com/blog/wp-content/uploads/2025/07/Rhino-Conservation-Success-Story.jpg", title: "One Horned Rhino" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6f0ztws2yogJQQ0cpFTmcVPRo6isy1PNUfg&s", title: "Elephant Herd" },
                { url: "https://res.cloudinary.com/roundglass/image/upload/v1726570023/rg/collective/media/assam-kaziranga-juvenile-tusker-elephant-rhino-background-dhritiman-mukherjee_i6zpln.jpg", title: "Safari Jeep" },
                { url: "https://www.savaari.com/blog/wp-content/uploads/2024/08/Kaziranga-National-Park.webp", title: "Wetlands" },
                { url: "https://etimg.etb2bimg.com/thumb/msid-121282833,width-1200,height-900,resizemode-4/.jpg", title: "Grasslands" },
                { url: "https://static2.tripoto.com/media/filter/tst/img/2052458/TripDocument/1620756281_kaziranga.jpg", title: "Tiger Reserve" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt="Kaziranga "
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
    <ArrowUpRight size={18} className="text-emerald-400" />
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

export default KazirangaNationalPark;