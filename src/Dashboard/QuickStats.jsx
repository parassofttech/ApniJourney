import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const QuickStats = () => {
  const [trips, setTrips] = useState([]);
  const [upcoming, setUpcoming] = useState(0);
  const [past, setPast] = useState(0);
  const [favorites, setFavorites] = useState(0);

  useEffect(() => {
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(storedTrips);

    const today = new Date();
    let up = 0,
      pa = 0,
      fav = 0;

    storedTrips.forEach((trip) => {
      const endDate = trip.endDate ? new Date(trip.endDate) : new Date(trip.startDate);
      if (endDate >= today) up++;
      else pa++;

      if (trip.isFavorite) fav++;
    });

    setUpcoming(up);
    setPast(pa);
    setFavorites(fav);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-4 mb-6"
    >
      <div className="bg-white shadow rounded-2xl p-4 text-center">
        <p className="text-gray-400 text-sm">Total Trips</p>
        <p className="font-bold text-lg">{trips.length}</p>
      </div>
      <div className="bg-white shadow rounded-2xl p-4 text-center">
        <p className="text-gray-400 text-sm">Upcoming Trips</p>
        <p className="font-bold text-lg">{upcoming}</p>
      </div>
      <div className="bg-white shadow rounded-2xl p-4 text-center">
        <p className="text-gray-400 text-sm">Favorites</p>
        <p className="font-bold text-lg">{favorites}</p>
      </div>
    </motion.div>
  );
};

export default QuickStats;
