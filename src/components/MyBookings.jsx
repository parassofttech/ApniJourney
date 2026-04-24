import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Train,
  Bus,
  Hotel,
  Calendar,
  Search,
  MapPin,
  ArrowRight,
  Inbox
} from "lucide-react";

// Modern Icon Mapping with background splashes
const iconConfig = {
  Train: { icon: <Train />, color: "bg-blue-100 text-blue-600", border: "border-blue-200" },
  Bus: { icon: <Bus />, color: "bg-rose-100 text-rose-600", border: "border-rose-200" },
  Hotel: { icon: <Hotel />, color: "bg-emerald-100 text-emerald-600", border: "border-emerald-200" },
};

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  const handleDelete = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const filtered = bookings.filter((b) => {
    if (!b) return false;
    const search = searchTerm.toLowerCase();
    const text = `${b.from || ""} ${b.to || ""} ${b.city || ""} ${b.state || ""} ${b.type || ""}`.toLowerCase();
    return text.includes(search) && (filter === "All" || b.type === filter);
  });

  return (
    <section className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            My Bookings
          </h2>
          <p className="text-gray-500">Manage your upcoming trips and stays in one place.</p>
        </header>

        {/* CONTROLS: Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search destination, city or type..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
          </div>

          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl w-full md:w-auto">
            {["All", "Train", "Bus", "Hotel"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  filter === cat ? "bg-white shadow-sm text-blue-600" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* BOOKINGS GRID */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200"
            >
              <Inbox className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-xl font-medium text-gray-400">No bookings found</p>
              <p className="text-gray-400 text-sm">Try adjusting your search or filters.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((b, i) => {
                const config = iconConfig[b.type] || iconConfig.Train;
                return (
                  <motion.div
                    key={`${b.date}-${i}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5 }}
                    className={`relative bg-white border-b-4 ${config.border} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl ${config.color}`}>
                        {config.icon}
                      </div>
                      <button
                        onClick={() => handleDelete(i)}
                        className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Body: Conditional Rendering */}
                    <div className="space-y-4">
                      {b.type === "Hotel" ? (
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-emerald-500" /> {b.city}
                          </h3>
                          <p className="text-sm text-gray-500 ml-6">{b.state}</p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">From</p>
                            <p className="font-bold text-gray-700">{b.from}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-300 mx-2" />
                          <div className="flex-1 text-right">
                            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">To</p>
                            <p className="font-bold text-gray-700">{b.to}</p>
                          </div>
                        </div>
                      )}

                      {/* Footer Info */}
                      <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          {b.date}
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tighter ${config.color}`}>
                          Confirmed
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MyBookings;