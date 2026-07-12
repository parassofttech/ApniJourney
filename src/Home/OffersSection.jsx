import React from "react";
import { motion } from "framer-motion";
import { Tag, ArrowRight, Sparkles, Clock } from "lucide-react";
import Advanture  from "../assets/images/advanture.jpg"

const offers = [
  {
    id: 1,
    title: "Summer Special",
    discount: "30% OFF",
    description: "Experience the cool breeze of the Himalayas this summer.",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/t_ufs/m_Phuket_tv_destination_img_1_l_629_1005.jpg",
    link: "#",
    tag: "Trending"
  },
  {
    id: 2,
    title: "Adventure Pass",
    discount: "BOGO DEAL",
    description: "Book 2 adventure trips & get 1 valley pass absolutely free.",
    image: Advanture,
    link: "https://www.yatra.com/",
    tag: "Best Value"
  },
  {
    id: 3,
    title: "Luxury Escape",
    discount: "25% OFF",
    description: "Indulge in royalty with premium heritage hotel bookings.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBxRLg-D55Cm_v04psHxEveSA-mluMc0_S06NhAM9QBILoG0jmVbLPz4x&s=10",
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => handleClick(offer.link)}
              className="group relative bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden cursor-pointer border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* =========================================================================
            IMAGE CONTAINER (Responsive Heights)
            ========================================================================= */}
                <div className="relative h-36 sm:h-52 md:h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                decoding="async"
                fetchPriority="low"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Advanced Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent" />

                  {/* Floating Premium Tag Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-full shadow-md">
                    <p className="text-[8px] sm:text-[10px] font-black text-blue-600 uppercase tracking-wider">{offer.tag}</p>
                  </div>

                  {/* Discount/Offer Value Badge */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 right-2.5 sm:right-4">
                    <div className="flex items-center gap-1 sm:gap-2 text-white">
                      <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                      <span className="text-sm sm:text-xl font-black tracking-tight">{offer.discount}</span>
                    </div>
                  </div>
                </div>

                {/* =========================================================================
            TEXT CONTENT BLOCK (Mobile Safe Clamping)
            ========================================================================= */}
                <div className="p-3 sm:p-5 md:p-6">
                  <h3 className="text-xs sm:text-base md:text-lg font-black text-slate-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {offer.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* =========================================================================
          CARD FOOTER ACTION STRIP
          ========================================================================= */}
              <div className="px-3 pb-3 sm:px-5 sm:pb-5 md:px-6 md:pb-6">
                <div className="flex items-center justify-between pt-2.5 sm:pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    <span className="text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wide">Soon</span>
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                </div>
              </div>

              {/* Subtle Interactive Bottom Accent Indicator */}
              <div className="h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 absolute bottom-0 left-0" />
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