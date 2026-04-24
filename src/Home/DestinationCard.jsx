import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DestinationCard = ({ destinations }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const sliderRef = useRef(null); 

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (!current) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className=" w-full px-6 py-8 bg-gradient-to-b from-blue-400/30 via-green-400/30 to-blue-300/40 -z-10">
      <h2
  className="text-4xl font-bold font-[cursive] italic tracking-wide text-transparent 
  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 
  drop-shadow-lg mb-8 text-center"
>
  ✨ Explore Top Destinations ✨
</h2>



      {/* Slider Arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Scrollable Destination Cards */}
      <motion.div
        ref={sliderRef}
        className="flex overflow-x-auto gap-5 scrollbar-hide scroll-smooth"
      >
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative min-w-[200px] sm:min-w-[300px] cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            onClick={() => setSelectedDestination(destination)}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white font-semibold text-lg p-3 text-center">
              {destination.name}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Popup / Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 text-center relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              >
                ✖
              </button>

              {/* Image */}
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-56 object-cover rounded-2xl mb-4"
              />

              {/* Details */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedDestination.name}
              </h2>
              <p className="text-blue-600 font-medium mb-3">
                {selectedDestination.state}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {selectedDestination.description}
              </p>

              <button
                onClick={() => setSelectedDestination(null)}
                className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DestinationCard;
