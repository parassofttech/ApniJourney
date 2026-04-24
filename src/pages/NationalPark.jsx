import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trees, Search, MapPin, ArrowRight, Leaf, Compass } from "lucide-react";
import ParkData from "../data/ParkData";
import Footer from "../Home/Footer";

const NationalPark = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter parks based on search
  const filteredParks = ParkData.filter((park) =>
    park.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    park.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500/50 via-blue-500/30 to-yellow-400/30 -z-10 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1440581572325-0bea30075d9d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Nature Background"
        />
        
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-[1px] w-12 bg-emerald-400"></span>
            <p className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs">Explore the Wild</p>
            <span className="h-[1px] w-12 bg-emerald-400"></span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            National Parks <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              Of India
            </span>
          </motion.h1>

          {/* Search Bar in Hero */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto relative group"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or state..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/95 backdrop-blur-md border-none shadow-2xl focus:ring-2 focus:ring-emerald-500 text-gray-800 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-10 text-white/80  md:flex">
          <div className="text-center">
             <p className="text-2xl font-bold text-white">100+</p>
             <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Parks</p>
          </div>
          <div className="h-10 w-[1px] bg-white/20"></div>
          <div className="text-center">
             <p className="text-2xl font-bold text-white">50+</p>
             <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Tiger Reserves</p>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3">
              <Compass className="text-emerald-600" /> Top Destinations
            </h2>
            <p className="text-slate-500 font-medium mt-1">Discover India's most breathtaking wildlife sanctuaries.</p>
          </div>
          <p className="text-slate-400 text-sm font-bold">{filteredParks.length} Locations Found</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredParks.map((park, index) => (
            <motion.div
              key={park.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/national-park/${park.id}`} className="group">
                <div className="relative bg-white rounded-[2.5rem] shadow-xl shadow-emerald-900/5 overflow-hidden border border-emerald-50 group-hover:shadow-2xl group-hover:shadow-emerald-900/10 transition-all duration-500">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={park.image}
                      alt={park.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                       <Leaf size={14} className="text-emerald-600" />
                       <span className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">Wild Life</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-1.5 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-2">
                       <MapPin size={12} /> {park.state}
                    </div>
                    <h2 className="text-2xl font-black text-slate-800 group-hover:text-emerald-700 transition-colors mb-4">
                      {park.name}
                    </h2>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                       <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-500 transition-colors">Explore Sanctuary</span>
                       <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                          <ArrowRight size={18} />
                       </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredParks.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-emerald-100">
            <Trees className="mx-auto text-emerald-200 mb-4" size={60} />
            <h3 className="text-xl font-bold text-slate-700">No parks found!</h3>
            <p className="text-slate-400">Try searching for another name or region.</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default NationalPark;