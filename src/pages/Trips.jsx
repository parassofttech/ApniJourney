import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { 
  MapPin, 
  Calendar, 
  Trash2, 
  Eye, 
  Plus, 
  ChevronRight, 
  ChevronLeft, 
  Star,
  IndianRupee 
} from "lucide-react";

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  useEffect(() => {
    const fetchTrips = async () => {
      if (!token) {
        setError("Please login to view trips");
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get("https://apnijourney-api.onrender.com/api/trips", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res.data.trips || res.data.data || res.data;
        setTrips(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch trips");
      } finally {
        setLoading(false);
      }
    };
    if (isLoggedIn) fetchTrips();
  }, [token, isLoggedIn]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this adventure?")) return;
    try {
      await axios.delete(`https://apnijourney-api.onrender.com/api/trips/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrips((prev) => prev.filter((t) => (t._id || t.id) !== id));
    } catch (err) {
      setError("Failed to delete trip");
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (!isLoggedIn) return null;

  // --- SKELETON LOADING STATE ---
  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex gap-6 p-10 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-80 h-[450px] bg-white rounded-3xl animate-pulse shadow-sm p-6">
          <div className="h-48 bg-gray-200 rounded-2xl mb-4" />
          <div className="h-6 bg-gray-200 w-3/4 mb-4" />
          <div className="h-4 bg-gray-100 w-1/2" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200/30 via-green-200/30 to-blue-200/40 -z-10 px-6 lg:px-12 overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full " />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full " /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-black text-slate-900 tracking-tight"
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Journeys</span>
            </motion.h1>
            <p className="text-slate-500 mt-2 text-lg">You have explored {trips.length} destinations so far.</p>
          </div>
          
          <Link to="/add-trip" className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            <span className="font-semibold">New Adventure</span>
          </Link>
        </div>

        {/* TRIPS SECTION */}
        {trips.length === 0 ? (
          <div className="h-[60vh] flex flex-col items-center justify-center bg-white/50 backdrop-blur-md border border-white rounded-[40px] shadow-sm">
            <div className="p-6 bg-blue-50 rounded-full mb-4 text-blue-500 text-4xl">🏝️</div>
            <p className="text-xl font-bold text-slate-800">Your passport is empty!</p>
            <p className="text-slate-500 mb-6">Start planning your next escape today.</p>
          </div>
        ) : (
          <div className="relative group">
            {/* Scroll Navigation */}
            <button onClick={() => scroll("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100 hover:text-blue-600">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100 hover:text-blue-600">
              <ChevronRight size={24} />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-12 pt-4 px-2"
            >
              <AnimatePresence>
                {trips.map((trip, idx) => (
                  <motion.div
                    key={trip._id || idx}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="snap-center flex-shrink-0 w-85 md:w-96 bg-white rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden border border-slate-100/50 group/card"
                  >
                    {/* Image Header */}
                    <div className="h-56 relative overflow-hidden">
                      {trip.photos?.length ? (
                        <img src={trip.photos[0]} alt="" className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                          No Preview
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                        <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                        <span className="text-xs font-bold text-slate-700">{trip.rating || "N/A"}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-7">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-1 group-hover/card:text-blue-600 transition-colors">
                            {trip.title || "Untitled Trip"}
                          </h3>
                          <div className="flex items-center gap-1 text-slate-400">
                            <MapPin size={14} className="text-red-400" />
                            <span className="text-sm font-medium">{trip.destination}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-slate-50 rounded-lg text-slate-500"><Calendar size={16}/></div>
                          <span className="text-xs font-semibold text-slate-600 uppercase">{trip.startDate?.split('T')[0] || "TBD"}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                          <div className="p-2 bg-green-50 rounded-lg text-green-600"><IndianRupee size={16}/></div>
                          <span className="text-sm font-bold text-slate-700">₹{trip.budget?.toLocaleString() || "0"}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link 
                          to={`/trip/${trip._id || trip.id}`}
                          className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-3 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all"
                        >
                          <Eye size={18} /> Details
                        </Link>
                        <button 
                          onClick={() => handleDelete(trip._id || trip.id)}
                          className="p-3.5 bg-rose-50 text-rose-500 rounded-2xl hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Trips;