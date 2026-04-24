import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Calendar, Wallet, Star, ArrowLeft, 
  Info, Camera, Clock, Tag, ChevronRight 
} from "lucide-react";

axios.defaults.baseURL = "https://apnijourney-api.onrender.com";

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/trips/${id}`);
        let payload = res.data.trip || res.data.data || res.data;
        if (!payload || typeof payload !== "object") throw new Error("Format error");
        setTrip(payload);
      } catch (err) {
        setError("Failed to load trip details. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTrip();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mb-4"
      />
      <p className="text-slate-500 font-medium animate-pulse">Unfolding your memories...</p>
    </div>
  );

  if (error || !trip) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-red-50 p-6 rounded-[2.5rem] border border-red-100 max-w-sm">
        <Info className="mx-auto text-red-500 mb-4" size={48} />
        <h2 className="text-xl font-bold text-slate-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-slate-500 text-sm mb-6">{error || "Trip not found."}</p>
        <Link to="/dashboard" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-600 transition-all">
          <ArrowLeft size={18} /> Back to Dashboard
        </Link>
      </div>
    </div>
  );

  const { title, destination, startDate, endDate, budget, rating, notes, description, createdAt, category, photos = [] } = trip;

  return (
    <div className="min-h-screen bg-[#fcfcfd] pb-20">
      {/* STICKY TOP NAV */}
      <nav className="fixed top-0 inset-x-0 h-20 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 flex items-center px-6 md:px-12 justify-between">
        <Link to="/dashboard" className="p-3 rounded-full hover:bg-slate-100 transition-colors text-slate-600">
          <ArrowLeft size={24} />
        </Link>
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Travel Journal</p>
          <h1 className="text-slate-900 font-bold truncate max-w-[200px] md:max-w-none">{title}</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <Tag size={18} />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto pt-28 px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT: CONTENT SIDE */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* HERO IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10"
            >
              <img 
                src={photos[0] || "https://images.unsplash.com/photo-1488646953014-85cb44e25828"} 
                className="w-full h-full object-cover" 
                alt={title} 
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-slate-800">{rating || "N/A"}</span>
                </div>
              </div>
            </motion.div>

            {/* DETAILS */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-tighter">
                  {category || "Uncategorized"}
                </span>
                <span className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <Clock size={14} /> Added {new Date(createdAt).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-4">{title}</h2>
              
              <div className="flex items-center gap-2 text-slate-500 mb-8">
                <div className="p-2 bg-rose-50 rounded-lg text-rose-500">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-medium">{destination}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <Wallet className="text-blue-600 mb-3" size={24} />
                  <p className="text-xs font-bold text-slate-400 uppercase">Total Budget</p>
                  <p className="text-2xl font-black text-slate-800">₹{budget?.toLocaleString() || "0"}</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <Calendar className="text-indigo-600 mb-3" size={24} />
                  <p className="text-xs font-bold text-slate-400 uppercase">Duration</p>
                  <p className="text-sm font-black text-slate-800">
                    {startDate ? `${startDate} - ${endDate || 'TBD'}` : "Not Set"}
                  </p>
                </div>
              </div>

              {description && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Info size={20} className="text-blue-500" /> About the Trip
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: SIDEBAR SIDE */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* NOTES BOX */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-yellow-50 rounded-[2.5rem] p-8 border border-yellow-100 relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 text-yellow-100 rotate-12">
                <Tag size={120} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">🗒️ My Quick Notes</h3>
                <p className="text-yellow-700/80 leading-relaxed font-medium italic">
                  {notes || "No extra notes added for this trip yet. You can edit this trip to add some thoughts!"}
                </p>
              </div>
            </motion.div>

            {/* PHOTO GALLERY */}
            {photos.length > 1 && (
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Camera size={20} className="text-emerald-500" /> Moments
                  </h3>
                  <span className="text-xs font-bold text-slate-400">{photos.length} Photos</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {photos.slice(1).map((photo, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      className="aspect-square rounded-2xl overflow-hidden shadow-sm"
                    >
                      <img src={photo} className="w-full h-full object-cover" alt="trip-moment" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA SECTION */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl shadow-slate-200">
               <h4 className="text-xl font-bold mb-2">Want to change something?</h4>
               <p className="text-slate-400 text-sm mb-6">Update your memories or add more photos to this trip.</p>
               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                 Edit Trip Details <ChevronRight size={18} />
               </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TripDetail;