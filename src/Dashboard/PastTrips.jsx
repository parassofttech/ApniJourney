
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

const PastTrips = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // JWT token

  const [pastTrips, setPastTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🚨 Redirect if user is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (!token) return; // skip fetching if no token

    const fetchPastTrips = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get("https://apnijourney-api.onrender.com/api/trips", {
          headers: {
            Authorization: `Bearer ${token}`, // JWT authorization header
          },
        });

        let trips = [];
        if (Array.isArray(res.data)) trips = res.data;
        else if (Array.isArray(res.data.trips)) trips = res.data.trips;
        else if (Array.isArray(res.data.data)) trips = res.data.data;

        const today = new Date();

        // 🔹 Filter past trips: trips where endDate < today
        const past = trips.filter((trip) => {
          if (!trip.startDate && !trip.endDate) return false;
          const end = trip.endDate ? new Date(trip.endDate) : new Date(trip.startDate);
          return end < today;
        });

        setPastTrips(past);
      } catch (err) {
        console.error("Error loading past trips:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Failed to load past trips.");
      } finally {
        setLoading(false);
      }
    };

    fetchPastTrips();
  }, [token]);

  // 🚫 User not logged in → show nothing
  if (!token) return null;

  if (loading) {
    return (
      <div className="text-center text-gray-500 mt-6 text-lg">
        Loading past trips...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 mt-6 text-lg">
        {error}
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  if (pastTrips.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-6 text-lg">
        No past trips found. Go make some memories! 🌍
      </div>
    );
  }

  return (
    <section className="mt-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        🕰️ Past Trips
      </h2>

      <div className=" py-4 flex overflow-x-auto gap-5 scrollbar-hide scroll-smooth">
        <div className="flex gap-4">
          {pastTrips.map((trip, index) => {
            const key = trip._id || trip.id || `cid_${index}`;
            const tripImage =
              trip.photos && trip.photos.length > 0
                ? trip.photos[0]
                : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80";

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[250px] max-w-[250px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer flex-shrink-0"
              >
                <img
                  src={tripImage}
                  alt={trip.title || "Trip"}
                  className="h-32 w-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />

                <div className="p-3 flex flex-col justify-between h-52">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {trip.title || "Untitled Trip"}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      📍 {trip.destination || "Unknown Destination"}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {trip.startDate ? new Date(trip.startDate).toLocaleDateString() : "—"} →{" "}
                      {trip.endDate ? new Date(trip.endDate).toLocaleDateString() : "—"}
                    </p>

                    {trip.budget && (
                      <p className="text-gray-600 text-sm mt-1">
                        💰 Budget: ₹{trip.budget}
                      </p>
                    )}
                    {trip.rating && (
                      <p className="text-yellow-500 text-sm mt-1">
                        ⭐ {trip.rating}/5
                      </p>
                    )}
                  </div>

                  <Link
                    to={`/trip/${key}`}
                    className="mt-3 w-full text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    View Trip
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PastTrips;
