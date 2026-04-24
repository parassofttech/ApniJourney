import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, MapPin } from "lucide-react";

const destinations = [
  "Bali",
  "Paris",
  "Dubai",
  "Tokyo",
  "Goa",
  "London",
  "New York",
  "Manali",
  "Maldives",
  "Singapore",
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  // Handle search logic
  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = destinations.filter((dest) =>
      dest.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl p-6 rounded-3xl mt-6"
    >
      {/* 🔍 Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4 items-center justify-between"
      >
        {/* Destination Input */}
        <div className="relative flex-1 w-full">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700"
          />
        </div>

        {/* Date Input */}
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2"
        >
          <Search size={18} /> Search
        </button>
      </form>

      {/* 🧭 Search Results */}
      {results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 bg-blue-50 p-4 rounded-2xl shadow-inner"
        >
          <h3 className="font-semibold text-blue-700 mb-3">
            🔍 Found {results.length} destinations:
          </h3>
          <div className="flex flex-wrap gap-2">
            {results.map((item, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white shadow-sm border border-blue-200 px-4 py-2 rounded-xl text-sm font-medium text-gray-700"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      {/* ❌ No Results */}
      {results.length === 0 && searchQuery && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 mt-4 text-center"
        >
          No destinations found for "{searchQuery}"
        </motion.p>
      )}
    </motion.section>
  );
};

export default SearchBar;


