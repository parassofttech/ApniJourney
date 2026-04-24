
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const UpcomingTrips = () => {
  // ✅ STATE (always correct initial values)
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ LOGIN CHECK (safe)
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  useEffect(() => {
    // 🚫 Not logged in → do nothing
    if (!isLoggedIn) {
      setUpcomingTrips([]);
      setLoading(false);
      setError("");
      return;
    }

    const fetchUpcomingTrips = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await axios.get("https://apnijourney-api.onrender.com/api/trips", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // ✅ Defensive response handling
        let trips = [];
        if (Array.isArray(res.data)) trips = res.data;
        else if (Array.isArray(res.data?.trips)) trips = res.data.trips;
        else if (Array.isArray(res.data?.data)) trips = res.data.data;

        // ✅ Upcoming filter (date safe)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const futureTrips = trips.filter((trip) => {
          if (!trip?.startDate) return false;
          const start = new Date(trip.startDate);
          return !isNaN(start) && start >= today;
        });

        setUpcomingTrips(futureTrips);
      } catch (err) {
        console.error("Upcoming trips error:", err);
        setError("Failed to load upcoming trips.");
        setUpcomingTrips([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingTrips();
  }, [isLoggedIn, token]);

  // 🚫 NOT LOGGED IN → COMPONENT HIDDEN
  if (!isLoggedIn) return null;

  // ⏳ LOADING
  if (loading) {
    return (
      <section className="mt-10 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">🧭 Upcoming Trips</h2>
        <p>Loading your upcoming trips...</p>
      </section>
    );
  }

  // ❌ ERROR
  if (error) {
    return (
      <section className="mt-10 text-center text-red-600">
        <h2 className="text-2xl font-semibold mb-2">🧭 Upcoming Trips</h2>
        <p>{error}</p>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </section>
    );
  }

  // 📭 NO UPCOMING TRIPS
  if (upcomingTrips.length === 0) {
    return (
      <section className="mt-10 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">🧭 Upcoming Trips</h2>
        <p>No upcoming trips planned yet.</p>
      </section>
    );
  }

  // ✅ MAIN UI
  return (
    <section className="mt-10 px-6 pb-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-4xl font-bold text-gray-800">
          🧭 Upcoming Trips
        </h2>
        <span className="text-gray-500 text-sm">
          {upcomingTrips.length} trip
          {upcomingTrips.length !== 1 && "s"} planned
        </span>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2">
        {upcomingTrips.map((trip, index) => {
          const tripId = trip?._id || trip?.id || `cid_${index}`;

          return (
            <motion.div
              key={tripId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="flex-shrink-0 w-72 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={
                  Array.isArray(trip?.photos) && trip.photos.length > 0
                    ? trip.photos[0]
                    : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                }
                alt={trip?.title || "Trip"}
                className="w-full h-44 object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />

              <div className="p-5 flex flex-col justify-between h-[200px]">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {trip?.title || "Untitled Trip"}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    📍 {trip?.destination || "Unknown Destination"}
                  </p>

                  <p className="text-gray-400 text-xs mt-2">
                    {trip?.startDate
                      ? `📅 ${new Date(trip.startDate).toLocaleDateString()}`
                      : "No date provided"}
                  </p>

                  {trip?.budget && (
                    <p className="text-gray-600 text-sm mt-1">
                      💰 Budget: ₹{trip.budget}
                    </p>
                  )}

                  {trip?.rating && (
                    <p className="text-yellow-500 text-sm mt-1">
                      ⭐ {trip.rating}/5
                    </p>
                  )}
                </div>

                <Link
                  to={`/trip/${tripId}`}
                  className="mt-4 text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingTrips;
