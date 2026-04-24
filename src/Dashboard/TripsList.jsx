// src/components/TripsList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TripsList = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  // Fetch trips from localStorage on mount
  useEffect(() => {
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(storedTrips);
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/trips/${id}`);
  };

  if (trips.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-6">
        No trips added yet. Start by adding a new trip!
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip) => (
        <motion.div
          key={trip.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          {trip.photos && trip.photos.length > 0 && (
            <img
              src={URL.createObjectURL(trip.photos[0])}
              alt={trip.title}
              className="h-40 w-full object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{trip.title}</h3>
            <p className="text-gray-500 text-sm">{trip.destination}</p>
            <p className="text-gray-500 text-sm mt-1">
              {trip.startDate} {trip.endDate ? `- ${trip.endDate}` : ""}
            </p>
            <button
              onClick={() => handleViewDetails(trip.id)}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition"
            >
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TripsList;
