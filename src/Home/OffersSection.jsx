import React from "react";
import { motion } from "framer-motion";
import { Tag, ArrowRight, Sparkles, Clock } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Summer Special",
    discount: "30% OFF",
    description: "Experience the cool breeze of the Himalayas this summer.",
    image: "https://www.tourmyindia.com/blog//wp-content/uploads/2022/06/Best-Summer-Destinations-in-India.jpg",
    link: "#",
    tag: "Trending"
  },
  {
    id: 2,
    title: "Adventure Pass",
    discount: "BOGO DEAL",
    description: "Book 2 adventure trips & get 1 valley pass absolutely free.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    link: "https://www.yatra.com/",
    tag: "Best Value"
  },
  {
    id: 3,
    title: "Luxury Escape",
    discount: "25% OFF",
    description: "Indulge in royalty with premium heritage hotel bookings.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    link: "https://www.goibibo.com/",
    tag: "Luxury"
  },
  {
    id: 4,
    title: "Coastal Magic",
    discount: "SAVE ₹5000",
    description: "Flat discounts on all Goa & Andaman beach packages.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    link: "https://www.booking.com/",
    tag: "Limited"
  },
];

const OffersSection = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-amber-700/50 via-green-400/30 to-green-700/40 -z-10 relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-32" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-3"
            >
              <Sparkles size={16} /> Deals of the Season
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              Exclusive <span className="text-blue-600">Travel Offers</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md text-slate-500 font-medium md:text-right"
          >
            Handpicked deals for your next big adventure. Grab them before they vanish into thin air!
          </motion.p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => handleClick(offer.link)}
              className="group relative bg-slate-50 rounded-[2rem] overflow-hidden cursor-pointer border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg">
                   <p className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">{offer.tag}</p>
                </div>

                {/* Discount Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                   <div className="flex items-center gap-2 text-white">
                      <Tag size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xl font-black">{offer.discount}</span>
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {offer.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase">Expiring Soon</span>
                  </div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="h-1.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 absolute bottom-0 left-0" />
            </motion.div>
          ))}
        </div>

        {/* Call to action footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="text-slate-400 font-bold text-sm hover:text-blue-600 transition-all border-b border-slate-200 hover:border-blue-600 pb-1">
            View All Seasonal Discounts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;