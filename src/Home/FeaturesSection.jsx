import React from "react";
import { motion } from "framer-motion";
import { Map, Compass, Share2 } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Plan Trips",
    description: "Organize your journeys with ease and never miss details.",
    icon: <Map size={20} className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Track Journeys",
    description: "Stay updated with live tracking of your adventures.",
    icon: <Compass size={20} className="text-green-500" />,
  },
  {
    id: 3,
    title: "Share Memories",
    description: "Capture and share moments with your friends & family.",
    icon: <Share2 size={20} className="text-pink-500" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-6 px-2 bg-gradient-to-b from-blue-400/30 via-green-400/30 to-yellow-300/40 -z-10">
      <div className="max-w-5xl mx-auto text-center mb-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          🚀 App Features
        </h2>
        <p className="text-gray-500 text-xs md:text-sm mt-1">
          Everything you need for your perfect trip
        </p>
      </div>

      <div className="flex justify-center gap-2 max-w-full mx-auto overflow-x-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow p-3 flex flex-col items-center text-center min-w-[90px]"
          >
            {feature.icon}
            <h3 className="text-xs font-semibold text-gray-800 mt-1">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-[10px] mt-1">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
