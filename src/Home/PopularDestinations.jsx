import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";
import Mumbai from "../assets/images/mumbai.jpg"
import Rameshwaram from "../assets/images/rameswaram.webp"

const destinations = [
  {
    id: 1,
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    category: "Heritage",
    image:
      "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Agra-imghh.jpg?w=1000&ssl=1",
    description:
      "The iconic white marble mausoleum, a symbol of love and a World Wonder.",
  },
  {
    id: 2,
    name: "India Gate",
    state: "Delhi",
    category: "Monument",
    image:
      "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/New-Delhi-imghh.jpg?w=1000&ssl=1",
    description:
      "A majestic war memorial surrounded by lush gardens and history.",
  },
  {
    id: 3,
    name: "Goa Beaches",
    state: "Goa",
    category: "Coastal",
    image:
      "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Goa-Travel.jpg?w=1000&ssl=1",
    description:
      "Golden sands, vibrant nightlife, and a unique Portuguese charm.",
  },
  {
    id: 4,
    name: "Mumbai",
    state: "Maharashtra",
    category: "Metropolis",
    image: Mumbai,
    description:
      "The city of dreams, home to Bollywood and the iconic Marine Drive.",
  },
  {
    id: 5,
    name: "Rameshwaram",
    state: "Tamil Nadu",
    category: "Spiritual",
    image:
      Rameshwaram,
    description:
      "A sacred pilgrimage town known for its breathtaking sea bridges.",
  },
  {
    id: 6,
    name: "Jaipur",
    state: "Rajasthan",
    category: "Royal",
    image:
      "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Jaipur.jpg?w=1000&ssl=1",
    description:
      "The Pink City, famous for its grand palaces and vibrant heritage.",
  },
];

const PopularDestinations = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-blue-400/30 via-green-400/30 to-yellow-300/40 overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue/95 via-blue/10 to-blue/0 -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs"
            >
              Top Picks for You
            </motion.span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-2 leading-tight">
              Popular{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Destinations
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-600 text-sm md:text-base leading-relaxed">
            Handpicked experiences from the most iconic corners of India.
            Start your journey today.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"

              
            >
              
              {/* Image */}
              <div className="relative h-36 sm:h-52 md:h-64 overflow-hidden">
                
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"

                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />


                {/* Category Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[8px] sm:text-[10px] font-black px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {dest.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5 md:p-6">
                
                {/* Location */}
                <div className="flex items-center gap-1 text-cyan-600 mb-2">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-tighter">
                    {dest.state}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-xl md:text-2xl font-black text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {dest.name}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-[11px] sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                  {dest.description}
                </p>

                {/* Button */}
                <div className="flex items-center justify-between">
                  
                  <button
                    onClick={() =>
                      navigate(`/destination/${dest.id}`)
                    }
                    className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-all group/btn"
                  >
                    View Details

                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>

                  {/* Decorative Dot */}
                  <div className="h-1 w-1 rounded-full bg-slate-200 group-hover:bg-blue-400 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;