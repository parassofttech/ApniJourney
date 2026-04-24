import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

axios.defaults.baseURL = "https://apnijourney-api.onrender.com";

const TravelGoals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchGoalsFromTrips = async () => {
      try {
        setLoading(true);

        const res = await axios.get("/api/trips", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        let trips = [];
        if (Array.isArray(res.data)) trips = res.data;
        else if (Array.isArray(res.data.trips)) trips = res.data.trips;

        const totalTrips = trips.length;
        const totalPhotos = trips.reduce(
          (sum, trip) => sum + (trip.photos?.length || 0),
          0
        );

        const goalsData = [
          {
            id: 1,
            title: "Complete 10 Trips",
            progress: Math.min((totalTrips / 10) * 100, 100),
          },
          {
            id: 2,
            title: "Upload 50 Photos",
            progress: Math.min((totalPhotos / 50) * 100, 100),
          },
          {
            id: 3,
            title: "Plan 5 Destinations",
            progress: Math.min((totalTrips / 5) * 100, 100),
          },
        ];

        setGoals(goalsData);
        localStorage.setItem("travelGoals", JSON.stringify(goalsData));
      } catch (err) {
        console.log("Using local goals fallback");

        const localGoals =
          JSON.parse(localStorage.getItem("travelGoals")) || [];

        setGoals(localGoals);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchGoalsFromTrips();
  }, [token]);

  if (loading) {
    return (
      <div className="text-center text-gray-500 mt-8">
        Loading your travel goals...
      </div>
    );
  }

  if (goals.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        🎯 No travel goals yet
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-lg max-w-3xl mx-auto mt-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        🎯 Travel Goals
      </h2>

      <div className="space-y-5">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-2xl shadow-sm border"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">
                {goal.title}
              </span>
              <span className="font-semibold text-blue-600">
                {Math.round(goal.progress)}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${goal.progress}%` }}
                transition={{ duration: 1 }}
                className="h-3 bg-blue-600 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TravelGoals;
