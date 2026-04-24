import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Safe & Reliable",
    desc: "Your data and journeys are protected with top-grade security.",
  },
  {
    icon: <Lock className="w-6 h-6 text-green-600" />,
    title: "Secure Payments",
    desc: "Book trips confidently with encrypted payment methods.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    title: "Easy to Use",
    desc: "Plan, track, and share trips with just a few taps.",
  },
];

const AppHighlights = () => {
  return (
    <section className="py-8 px-2 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          Why Choose Our App? 🚀
        </h2>
        <p className="text-gray-500 text-xs md:text-sm mt-1">
          Safe, secure, and built for travel lovers like you
        </p>
      </div>

      <div className="flex justify-center gap-2 max-w-full mx-auto overflow-x-auto">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow p-3 flex flex-col items-center text-center min-w-[90px]"
          >
            <div className="mb-2">{item.icon}</div>
            <h3 className="text-xs font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-[9px] text-gray-400 mt-1">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppHighlights;
