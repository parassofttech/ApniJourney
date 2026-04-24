import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000";

const PhotoGalleryDash = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError("");

        // Try to load from backend first
        const res = await axios.get("https://apnijourney-api.onrender.com/api/trips");

        let trips = [];
        if (Array.isArray(res.data)) trips = res.data;
        else if (Array.isArray(res.data.trips)) trips = res.data.trips;
        else if (Array.isArray(res.data.data)) trips = res.data.data;

        // Combine all photos
        const backendPhotos = trips.flatMap((trip) =>
          Array.isArray(trip.photos)
            ? trip.photos.map((p) =>
                p.startsWith("data:image")
                  ? p
                  : `${axios.defaults.baseURL}/${p.replace(/\\/g, "/")}`
              )
            : []
        );

        // If backend empty, fallback to localStorage
        if (backendPhotos.length === 0) {
          const localTrips = JSON.parse(localStorage.getItem("trips")) || [];
          const localPhotos = localTrips.flatMap((trip) =>
            Array.isArray(trip.photos) ? trip.photos : []
          );
          setPhotos(localPhotos);
        } else {
          setPhotos(backendPhotos);
        }
      } catch (err) {
        console.error("Error loading photos:", err);
        setError("Failed to load photos from server.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <section className="mt-8 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">📸 Trip Memories</h2>
        <p>Loading your photos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-8 text-center text-red-500">
        <h2 className="text-2xl font-semibold mb-2">📸 Trip Memories</h2>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Retry
        </button>
      </section>
    );
  }

  if (photos.length === 0) {
    return (
      <section className="mt-8 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">📸 Trip Memories</h2>
        <p>No photos found. Try adding a new trip with some pictures!</p>
      </section>
    );
  }

  return (
    <section className="mt-8 px-6 pb-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-gray-800">📸 Trip Memories</h2>
        <span className="text-gray-500 text-sm">
          {photos.length} photo{photos.length !== 1 && "s"}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <img
              src={src}
              alt={`trip-photo-${index}`}
              className="w-full h-40 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs py-1 px-2 backdrop-blur-sm">
              Memory #{index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGalleryDash;
