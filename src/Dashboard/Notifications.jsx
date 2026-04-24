import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // ✅ Load notifications from localStorage or fallback to defaults
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("travelNotifications"));
    if (stored && stored.length > 0) {
      setNotifications(stored);
    } else {
      const sampleData = [
        {
          id: 1,
          message: "Your trip to Goa starts in 3 days! 🏖️",
          read: false,
          time: "3 hours ago",
        },
        {
          id: 2,
          message: "New badge earned: Explorer Level 2 🏅",
          read: false,
          time: "1 day ago",
        },
        {
          id: 3,
          message: "Exclusive offer: 20% off on your next booking ✈️",
          read: true,
          time: "2 days ago",
        },
      ];
      setNotifications(sampleData);
      localStorage.setItem("travelNotifications", JSON.stringify(sampleData));
    }
  }, []);

  // ✅ Mark a single notification as read
  const markAsRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
    localStorage.setItem("travelNotifications", JSON.stringify(updated));
  };

  // ✅ Clear all notifications
  const clearAll = () => {
    setNotifications([]);
    localStorage.setItem("travelNotifications", JSON.stringify([]));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-xl max-w-3xl mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🔔 Notifications
        </h2>
        {notifications.length > 0 && (
          <button
            onClick={clearAll}
            className="text-sm text-red-500 hover:text-red-600 transition"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Notifications List */}
      {notifications.length === 0 ? (
        <p className="text-gray-500 text-center py-6">
          No notifications at the moment 😊
        </p>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {notifications.map((n) => (
              <motion.li
                key={n.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-2xl shadow-md flex justify-between items-center cursor-pointer transition ${
                  n.read ? "bg-gray-100" : "bg-blue-100/70"
                }`}
                onClick={() => markAsRead(n.id)}
              >
                <div>
                  <p
                    className={`text-sm ${
                      n.read
                        ? "text-gray-600"
                        : "text-gray-800 font-semibold"
                    }`}
                  >
                    {n.message}
                  </p>
                  {n.time && (
                    <span className="text-xs text-gray-500 mt-1 block">
                      ⏰ {n.time}
                    </span>
                  )}
                </div>

                {!n.read && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-600 text-xl font-bold"
                  >
                    ●
                  </motion.span>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </motion.div>
  );
};

export default Notifications;
