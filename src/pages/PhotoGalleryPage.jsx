import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  X, Maximize2, Image as ImageIcon, 
  Camera, Sparkles, Map, ChevronDown 
} from "lucide-react";
import Footer from "../Home/Footer";

axios.defaults.baseURL = "https://apnijourney-api.onrender.com";

const PhotoGalleryPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);
  const token = localStorage.getItem("token");

  // Parallax Effect for Hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await axios.get("/api/trips", {
          headers: { Authorization: `Bearer ${token}` },
        });
        let trips = res.data.trips || res.data.data || res.data || [];
        const userPhotos = trips.flatMap(trip =>
          Array.isArray(trip.photos) ? trip.photos.map(p =>
            p.startsWith("data:image") ? p : `${axios.defaults.baseURL}/${p.replace(/\\/g, "/")}`
          ) : []
        );
        setPhotos(userPhotos);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchPhotos();
  }, [token]);

  if (!token) return <div className="h-screen flex items-center justify-center font-bold text-xl">Please Login to view memories.</div>;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020617] transition-colors duration-500 overflow-x-hidden">
      
      {/* 🚀 --- ADVANCED HERO SECTION --- */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover brightness-[0.4] dark:brightness-[0.2]"
            alt="Hero Background"
          />
        </motion.div>
        
        <motion.div style={{ opacity }} className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles size={14} className="text-yellow-400" /> Digital Scrapbook
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
          >
            Memories in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Motion.</span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             transition={{ delay: 0.4 }}
             className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Every mile has a story. Relive your favorite moments from your global explorations in high definition.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest">Explore Gallery</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* 🖼️ --- GALLERY SECTION --- */}
      <section className="relative z-20 -mt-20 bg-white dark:bg-[#020617] rounded-t-[3rem] px-6 pt-16 pb-32 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-slate-100 dark:border-slate-800 pb-10">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                <Camera className="text-blue-600" size={32} /> Your Visual Journey
              </h2>
              <p className="text-slate-500 mt-2 font-medium">Synced from your recent trips and shared adventures.</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="text-right hidden md:block">
                  <p className="text-xs font-bold text-slate-400 uppercase">Total Memories</p>
                  <p className="text-2xl font-black text-blue-600">{photos.length}</p>
               </div>
               {/* <button className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                  <Map size={18} /> View on Map
               </button> */}
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1,2,3,4,5,6,7,8].map(n => (
                <div key={n} className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-slate-50 dark:bg-slate-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                 <ImageIcon size={40} />
              </div>
              <p className="text-slate-400 font-bold">No photos found yet. Start your first trip!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {photos.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 5) * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-lg cursor-pointer"
                  onClick={() => setSelectedImg(src)}
                >
                  <img
                    src={src}
                    alt={`memory-${index}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="bg-white/20 backdrop-blur-md w-full py-3 rounded-2xl border border-white/30 text-center text-white font-bold text-xs uppercase tracking-widest">
                      Expand Memory
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- PREMIUM LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              whileHover={{ rotate: 90 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} strokeWidth={1.5} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Enlarged Memory"
                className="max-w-full max-h-[80vh] rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] object-contain border border-white/5"
              />
              
              <div className="mt-8 flex items-center gap-6">
                 <button className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.3em]">Previous</button>
                 <div className="h-px w-20 bg-white/20"></div>
                 <button className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.3em]">Next</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
     <Footer/>
    </div>
  );
};

export default PhotoGalleryPage;