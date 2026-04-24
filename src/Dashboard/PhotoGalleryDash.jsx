import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Image as ImageIcon } from "lucide-react";

axios.defaults.baseURL = "https://apnijourney-api.onrender.com";

const PhotoGalleryDash = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImg, setSelectedImg] = useState(null); // Full screen image state

  const token = localStorage.getItem("token");

  if (!token) return null;

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/trips", {
          headers: { Authorization: `Bearer ${token}` },
        });

        let trips = res.data.trips || res.data.data || res.data || [];
        
        const userPhotos = trips.flatMap((trip) =>
          Array.isArray(trip.photos)
            ? trip.photos.map((p) =>
                p.startsWith("data:image")
                  ? p
                  : `${axios.defaults.baseURL}/${p.replace(/\\/g, "/")}`
              )
            : []
        );

        setPhotos(userPhotos);
      } catch (err) {
        setError("Failed to load memories.");
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [token]);

  if (loading) return <div className="p-10 text-center animate-pulse">📸 Loading Memories...</div>;

  return (
    <section className="mt-8 px-4 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900  flex items-center gap-2">
            <ImageIcon className="text-blue-600" /> Trip Memories
          </h2>
          <p className="text-slate-500 text-sm font-medium">Capture and relive your journeys</p>
        </div>
        <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold border border-blue-100">
          {photos.length} Photos
        </span>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="group relative cursor-zoom-in rounded-3xl overflow-hidden shadow-md bg-slate-200 aspect-square"
            onClick={() => setSelectedImg(src)}
          >
            <img
              src={src}
              alt={`trip-${index}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800")}
            />
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30">
                <Maximize2 size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- IMAGE MODAL (Lightbox) --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)} // Close on background click
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </button>

            {/* Big Image */}
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            >
              <img
                src={selectedImg}
                alt="Selected"
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/10"
              />
              <div className="absolute -bottom-10 left-0 text-white/60 text-sm font-medium italic">
                View Mode: High Definition Memory
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGalleryDash;