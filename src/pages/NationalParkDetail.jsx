import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, Map, Star, Clock, MapPin, 
  ArrowLeft, Ticket, Landmark, Compass, ShieldCheck 
} from "lucide-react";
import ParkData from "../data/ParkData";

const NationalParkDetail = () => {
  const { id } = useParams();
  const park = ParkData.find((p) => p.id === parseInt(id));

  if (!park) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
        <Compass className="w-16 h-16 text-green-300 animate-spin-slow mb-4" />
        <h2 className="text-2xl font-bold text-slate-800">Adventure Not Found</h2>
        <Link to="/national-park" className="mt-4 text-green-600 font-bold hover:underline">Return to Wilderness</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfdfb] pb-20">
      
      {/* 🌄 IMMERSIVE HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={park.image}
          alt={park.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-lg shadow-green-500/40"
          >
            <ShieldCheck size={14} /> Official Sanctuary
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-white text-center px-4 tracking-tighter"
          >
            {park.name}
          </motion.h1>
          <div className="flex items-center gap-2 text-green-300 mt-4 font-bold">
            <MapPin size={18} /> {park.state}, India
          </div>
        </div>
      </div>

      {/* 🌿 MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 -mt-24 relative z-20">
          
          {/* LEFT COLUMN: DESCRIPTION & WILDLIFE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-green-900/5 border border-green-50">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-12 bg-green-500 rounded-full" />
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Experience the Wild</h2>
              </div>
              
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                {park.description}
              </p>

              {/* STATS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                <StatCard icon={<Landmark size={20}/>} label="Established" value={park.establishedYear} color="bg-orange-50 text-orange-600" />
                <StatCard icon={<Map size={20}/>} label="Total Area" value={park.area} color="bg-blue-50 text-blue-600" />
                <StatCard icon={<Clock size={20}/>} label="Best Visit" value={park.bestTime} color="bg-purple-50 text-purple-600" />
                <StatCard icon={<Ticket size={20}/>} label="Entry Fee" value={park.entryFee} color="bg-emerald-50 text-emerald-600" />
                <StatCard icon={<Star size={20}/>} label="Famous For" value={park.famousFor} color="bg-yellow-50 text-yellow-600" span="md:col-span-2" />
              </div>
            </div>

            {/* WILDLIFE SECTION */}
            <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-green-50">
              <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                <span className="p-2 bg-green-100 rounded-2xl text-green-600">🐾</span> Wildlife Encounters
              </h3>
              <div className="flex flex-wrap gap-4">
                {park.animals.map((animal, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="px-6 py-4 bg-green-50 border border-green-100 text-green-800 rounded-[2rem] text-sm font-black flex items-center gap-2 shadow-sm"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    {animal}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: QUICK ACTION SIDEBAR */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-10 space-y-6">
              <div className="bg-slate-900 rounded-[3rem] p-8 text-white shadow-2xl">
                <h4 className="text-xl font-bold mb-2 tracking-tight">Plan Your Visit</h4>
                <p className="text-slate-400 text-sm mb-6 font-medium">Nearest City: <span className="text-white">{park.nearestCity}</span></p>
                
                <div className="space-y-4">
                  {/* <button className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-green-500/20 uppercase tracking-widest text-xs">
                    Book Safari Now
                  </button> */}
                  <Link
                    to="/national-park"
                    className="flex items-center justify-center gap-2 w-full py-5 border border-slate-700 hover:bg-slate-800 text-slate-300 font-black rounded-2xl transition-all text-xs uppercase tracking-widest"
                  >
                    <ArrowLeft size={16} /> Back to Parks
                  </Link>
                </div>
              </div>

              {/* NATURE TIP BOX */}
              <div className="bg-green-600 rounded-[3rem] p-8 text-white relative overflow-hidden group">
                 <Compass className="absolute -right-10 -bottom-10 w-40 h-40 text-green-500/50 group-hover:rotate-45 transition-transform duration-700" />
                 <h4 className="text-lg font-bold mb-2 relative z-10">Pro Tip</h4>
                 <p className="text-green-100 text-sm font-medium relative z-10">Don't forget to carry binoculars and wear earthy colors to blend in with nature.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Component
const StatCard = ({ icon, label, value, color, span = "" }) => (
  <div className={`${color} p-6 rounded-[2.5rem] shadow-sm border border-black/5 ${span}`}>
    <div className="mb-3">{icon}</div>
    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-60 mb-1">{label}</p>
    <p className="text-sm font-black tracking-tight">{value}</p>
  </div>
);

export default NationalParkDetail;