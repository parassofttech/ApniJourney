import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BudgetTracker = () => {
  const [budget, setBudget] = useState(50000);
  const [spent, setSpent] = useState(18000);

  // ✅ Load data from localStorage when page loads
  useEffect(() => {
    const storedBudget = localStorage.getItem("travelBudget");
    const storedSpent = localStorage.getItem("travelSpent");

    if (storedBudget) setBudget(Number(storedBudget));
    if (storedSpent) setSpent(Number(storedSpent));
  }, []);

  // ✅ Save whenever budget or spent changes
  useEffect(() => {
    localStorage.setItem("travelBudget", budget.toString());
    localStorage.setItem("travelSpent", spent.toString());
  }, [budget, spent]);

  const remaining = budget - spent;
  const percentage = (spent / budget) * 100;

  // ✅ Dynamic color for progress bar
  const progressColor =
    percentage < 60
      ? "bg-green-500"
      : percentage < 90
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-xl max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        💰 Budget Tracker
      </h2>

      <div className="space-y-3">
        {/* Budget Summary */}
        <div className="flex justify-between text-gray-700">
          <span>Total Budget</span>
          <span className="font-semibold">₹{budget.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Amount Spent</span>
          <span className="font-semibold">₹{spent.toLocaleString()}</span>
        </div>
        <div
          className={`flex justify-between ${
            remaining < 0 ? "text-red-600 font-bold" : "text-gray-800 font-semibold"
          }`}
        >
          <span>Remaining</span>
          <span>
            ₹{remaining.toLocaleString()}{" "}
            {remaining < 0 && <span className="ml-1">(Over Budget!)</span>}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-4 rounded-full mt-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(percentage, 100)}%` }}
            transition={{ duration: 0.8 }}
            className={`h-4 ${progressColor} rounded-full`}
          />
        </div>

        {/* Editable Inputs */}
        <div className="mt-5 space-y-3">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              ✏️ Update Total Budget
            </label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              💸 Update Spent Amount
            </label>
            <input
              type="number"
              value={spent}
              onChange={(e) => setSpent(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Data is saved automatically 🔄
      </p>
    </motion.div>
  );
};

export default BudgetTracker;
