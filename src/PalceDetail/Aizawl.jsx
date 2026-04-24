import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Aizawl = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQI2yCR_IJirulsB9-gmmdlYiw5rqGdaXYKcjrJ-DN4k4tdeslUWDCCdeH-9eVWjDofam3M4lwiY2KQuiy3PXMbAzE&s=19"
            alt="Aizawl Hills"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Mizoram
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-purple-950 tracking-tighter leading-none mb-6 italic"
            >
              Aizawl
            </motion.h1>
            <p className="text-purple-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The Hills of Mizoram
            </p>
            <div className="h-1.5 w-20 bg-purple-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Aizawl, perched on the rolling hills of Mizoram, charms with its vibrant culture, 
              colorful markets, and panoramic views. The city is a gateway to the lush Northeast.
            </motion.p>
          </header>

          {/* 📊 INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-purple-50 to-violet-50 rounded-[2.5rem] border border-purple-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-purple-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-purple-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-purple-500" /> Must-See Spots
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🏞️" bold="Durtlang Hills" text="Panoramic city views" />
                <AttractionItem emoji="🏛️" bold="Solomon's Temple" text="Architectural beauty" />
                <AttractionItem emoji="🛍️" bold="Main Bazaar" text="Cultural shopping hub" />
                <AttractionItem emoji="🌄" bold="Bara Bazar" text="Scenic hilltop sunset" />
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-violet-50 to-purple-50 rounded-[2.5rem] border border-violet-100/50 shadow-sm relative overflow-hidden group"
            >
              <h2 className="text-2xl font-black text-purple-900 mb-8 flex items-center gap-3 italic">
                <Mountain className="text-purple-500" /> Outdoor Activities
              </h2>
              <div className="space-y-4">
                <AdventureItem text="Hill trekking" />
                <AdventureItem text="Birdwatching & Photography" />
                <AdventureItem text="Cultural homestays" />
              </div>
            </motion.div>

            {/* Culture & Cuisine */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2.5rem] border border-amber-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-amber-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-amber-500" /> Culinary Heritage
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Taste authentic Mizo cuisine – from smoked pork dishes to bamboo shoot delicacies, 
                served in traditional local style.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#MizoCuisine", "#HillsView", "#CulturalMarket", "#AizawlLife"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-amber-400 border border-amber-100 uppercase tracking-widest">
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
                <Plane className="text-purple-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Lengpui Airport" />
                <TravelDetail icon={<Train />} label="Nearest Railway" value="Bairabi Station" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Oct – Mar" />
                <TravelDetail icon={<MapPin />} label="From Shillong" value="~165 KM (5 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-purple-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoldbBOwe0D-gPqje3A_GvR5ZjtnXNEu50ykZzU2g2_SyaO4jpXkYtvS0tb5izAgGAN6nQ1tkaMUvcX-aZpP-FkKDkCE0HkY2vpbRI0s6Rocgt2tpumxAq9vYWxzNOSdjLGKgwO=w675-h390-n-k-no", title: "Durtlang Hills" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerLgSob111la9mNxWj7fl4ketDLPqiMvR5gbMFjQkE26YTJOXTXAlAqzA7iOO-PRcoszdDhWNopGyYBvl52OliEulDEpXV72N-o-zn9EJSdAA4a_w7h-a6lwdqTomN7lsyMUZ96cewKRyg9=w675-h390-n-k-no", title: "Main Bazaar" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQJyJeVPUaPNNj4OWXIxR4Zqf7Jisn9brHIu2gT4jKQz1bOqKEyYG0O-BIOje_zKoqtlYgLmZGoJdXrfJFNd1SMan8&s=19", title: "Sunset View" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRfcabx86rYsC4-rY0FbuRYLg-zw4EhJAbLs-qrHVbyfdGgOlpXNEDD7RfvNufc6dc6A_R7yPWm1VnKoZAArNqm4OU&s=19", title: "Cultural Market" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoyPQ67CNbsBr7hy6NESZ9cIRG4alOv_1pi7TQ_VDeNgWCp8T1smESFFArnbi2GCCyPaFpJ_3l46y-kE7kQSm9qCGxgN3fYSgLUJFSaNHgyJFnf7ARiWzICmyJEv9ijF_Q_99E5=w675-h390-n-k-no", title: "Hills Panorama" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweprQ4PtfGObDDU2_PPaaUf1fXXLTcByKZ-pUmBZIMP4KOh3hhYzjPkaFxe5v8KQwZdPitHbBRvSR9CxX4HcwEWP1ONOKSULyFKr4oKbt80-kABb8GmBdQANnOvV0vyI05nfMDxL=w675-h390-n-k-no", title: "Local Cuisine" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Aizawl - ${item.title}`}
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
      <b className="text-purple-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-purple-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-purple-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-purple-100">{value}</span>
  </div>
);

export default Aizawl;