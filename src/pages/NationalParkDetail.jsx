import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, Map, Star, Clock, MapPin, 
  ArrowLeft, Ticket, Landmark, Compass, ShieldCheck, 
  Trees, Binoculars, Award, History, CloudSun, 
  AlertCircle, Navigation, Sparkles, CheckCircle2
} from "lucide-react";
import ParkData from "../data/ParkData";

const NationalParkDetail = () => {
  const { id } = useParams();
  const park = ParkData.find((p) => p.id === parseInt(id));

  if (!park) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <Compass className="w-16 h-16 text-green-500 animate-spin mb-4" />
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">Expedition Not Found</h2>
        <p className="text-slate-500 mt-2 font-medium">The wilderness sanctuary you are looking for does not exist in our logs.</p>
        <Link to="/national-park" className="mt-6 px-8 py-4 bg-green-600 text-white font-black rounded-2xl shadow-xl shadow-green-600/30 hover:bg-green-700 transition-all text-xs uppercase tracking-widest">
          Return to Wilderness Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf8] pb-24 text-slate-800 selection:bg-green-500 selection:text-white">
      
      {/* 🌄 IMMERSIVE CINEMATIC HERO SECTION */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={park.image}
          alt={park.name}
          className="h-full w-full object-cover filter brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b130f] via-[#0b130f]/40 to-black/30 flex flex-col justify-between p-6 md:p-16">
          
          {/* TOP FLOATING NAV BAR */}
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center z-10 pt-4">
            <Link 
              to="/national-park"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all shadow-xl"
            >
              <ArrowLeft size={16} /> Back to Directory
            </Link>
            <div className="flex items-center gap-2 bg-emerald-500/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-emerald-900/40 border border-emerald-400/30">
              <ShieldCheck size={16} /> {park.status}
            </div>
          </div>

          {/* BOTTOM HERO TITLE BLOCK */}
          <div className="max-w-7xl mx-auto w-full pb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3 flex items-center gap-2">
                <Sparkles size={16} /> {park.tagline || "Protected Wildlife Reserve"}
              </p>
              <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter drop-shadow-lg">
                {park.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-slate-300 mt-4 font-semibold text-sm md:text-base">
                <span className="flex items-center gap-2 text-emerald-300">
                  <MapPin size={18} /> {park.state}, India
                </span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full hidden md:block" />
                <span className="flex items-center gap-2">
                  <Landmark size={18} /> Established {park.establishedYear}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🌿 MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: ALL DETAILS SCROLLABLE WITHOUT CLICKS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 space-y-8"
          >
            
            {/* 1. OVERVIEW & STATS CARD */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-green-900/5 border border-green-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-12 bg-green-500 rounded-full" />
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">About the Sanctuary</h2>
              </div>
              
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium mb-6">
                {park.description}
              </p>

              {park.history && (
                <div className="bg-green-50/70 border border-green-100/80 p-6 rounded-[2rem] mt-8">
                  <h4 className="text-green-900 font-extrabold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                    <History size={16} /> Conservation History
                  </h4>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                    {park.history}
                  </p>
                </div>
              )}

              {/* STATS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                <StatCard icon={<Landmark size={20}/>} label="Established" value={park.establishedYear} color="bg-orange-50 text-orange-600 border-orange-100" />
                <StatCard icon={<Map size={20}/>} label="Total Area" value={park.area} color="bg-blue-50 text-blue-600 border-blue-100" />
                <StatCard icon={<Clock size={20}/>} label="Best Season" value={park.bestTime} color="bg-purple-50 text-purple-600 border-purple-100" />
                <StatCard icon={<Ticket size={20}/>} label="Entry Tariff" value={park.entryFee} color="bg-emerald-50 text-emerald-600 border-emerald-100" />
                <StatCard icon={<Star size={20}/>} label="Prime Attraction" value={park.famousFor} color="bg-yellow-50 text-yellow-600 border-yellow-100" span="md:col-span-2" />
              </div>
            </div>

            {/* 2. WILDLIFE ENCOUNTERS & FLORA CARD */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-green-900/5 border border-green-50">
              <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <span className="p-3 bg-green-100 rounded-2xl text-green-600">🐾</span> Wildlife Encounters
              </h3>
              <p className="text-slate-500 text-sm mb-8 font-medium">Fauna species documented and frequently sighted across safari trails:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {park.animals?.map((animal, index) => (
                  <div
                    key={index}
                    className="px-6 py-4 bg-gradient-to-r from-green-50/80 to-emerald-50/30 border border-green-100 text-green-900 rounded-[2rem] text-sm font-black flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-md shadow-green-500/50" />
                      {animal}
                    </div>
                  </div>
                ))}
              </div>

              {park.flora && (
                <div className="mt-12">
                  <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span className="p-3 bg-emerald-100 rounded-2xl text-emerald-600"><Trees size={22}/></span> Flora & Vegetation
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {park.flora.map((plant, index) => (
                      <div
                        key={index}
                        className="px-5 py-3 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl text-sm font-bold flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        {plant}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. SAFARI ZONES & CLIMATE CARD */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-green-900/5 border border-green-50 space-y-8">
              <div>
                <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                  <span className="p-3 bg-blue-100 rounded-2xl text-blue-600"><Binoculars size={22}/></span> Safari Vehicles & Modes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {park.safariTypes?.map((safari, i) => (
                    <div key={i} className="p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center gap-3 font-bold text-slate-700 text-sm">
                      <CheckCircle2 className="text-blue-600 shrink-0" size={18} />
                      {safari}
                    </div>
                  ))}
                </div>
              </div>

              {park.bestZones && (
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
                    <Navigation className="text-orange-500" size={20} /> Recommended Safari Zones
                  </h3>
                  <div className="space-y-3">
                    {park.bestZones.map((zone, idx) => (
                      <div key={idx} className="p-4 bg-orange-50/50 border border-orange-100 rounded-2xl font-semibold text-slate-700 text-sm flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black">{idx + 1}</span>
                        {zone}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {park.climate && (
                <div className="p-6 bg-purple-50 border border-purple-100 rounded-[2rem]">
                  <h4 className="text-purple-900 font-extrabold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                    <CloudSun size={18} /> Climate & Weather Pattern
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {park.climate}
                  </p>
                </div>
              )}
            </div>

            {/* 4. VISITOR RULES & GUIDELINES CARD */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-green-900/5 border border-green-50">
              <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <span className="p-3 bg-red-100 rounded-2xl text-red-600"><AlertCircle size={22}/></span> Visitor Regulations & Safety Code
              </h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">To preserve natural habitats and ensure visitor safety, all tourists must strictly adhere to the following guidelines:</p>
              <div className="space-y-4">
                {park.guidelines?.map((rule, index) => (
                  <div key={index} className="p-5 bg-red-50/50 border border-red-100/80 rounded-2xl flex items-start gap-3">
                    <span className="text-red-500 font-black text-base mt-0.5">•</span>
                    <p className="text-slate-700 font-semibold text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: STICKY PLANNER SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-10 space-y-6">
              
              {/* PRIMARY ACTION CARD */}
              <div className="bg-slate-900 rounded-[3rem] p-8 text-white shadow-2xl border border-slate-800">
                <h4 className="text-xl font-black mb-2 tracking-tight">Expedition Planner</h4>
                <p className="text-slate-400 text-xs mb-6 font-medium">Nearest City / Hub: <span className="text-white font-bold">{park.nearestCity}</span></p>
                
                {park.conservationStatus && (
                  <div className="mb-6 bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl flex items-center gap-3">
                    <Award className="text-yellow-400 shrink-0" size={20} />
                    <p className="text-xs text-slate-300 font-semibold leading-snug">{park.conservationStatus}</p>
                  </div>
                )}

                <div className="space-y-3">
                  <Link
                    to="/national-park"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-black rounded-2xl transition-all text-xs uppercase tracking-widest border border-slate-700"
                  >
                    <ArrowLeft size={16} /> Back to Directory
                  </Link>
                </div>
              </div>

              {/* PRO NATURE TIP BOX */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-[3rem] p-8 text-white relative overflow-hidden group shadow-xl">
                 <Compass className="absolute -right-10 -bottom-10 w-40 h-40 text-green-500/30 group-hover:rotate-45 transition-transform duration-700" />
                 <h4 className="text-lg font-black mb-2 relative z-10 flex items-center gap-2">
                   <Sparkles size={18}/> Ranger's Pro Tip
                 </h4>
                 <p className="text-green-100 text-sm font-medium relative z-10 leading-relaxed">
                   Always carry high-powered binoculars and wear camouflage or earthy green tones. Perfumes and bright fluorescent clothes can startle wild fauna.
                 </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Reusable Stat Component
const StatCard = ({ icon, label, value, color, span = "" }) => (
  <div className={`${color} p-6 rounded-[2.5rem] shadow-sm border ${span}`}>
    <div className="mb-3">{icon}</div>
    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-70 mb-1">{label}</p>
    <p className="text-sm font-black tracking-tight">{value}</p>
  </div>
);

export default NationalParkDetail;