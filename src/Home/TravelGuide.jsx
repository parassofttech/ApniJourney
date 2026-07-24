import React from "react";
import { Link } from "react-router-dom";
import {
  Map,
  Wallet,
  User,
  Heart,
  Backpack,
  CloudRain,
  Car,
  Palmtree,
  ArrowRight,
} from "lucide-react";

const guides = [
  {
    id: "best-places",
    title: "Best Places to Visit in India",
    icon: Map,
    color: "from-blue-500 to-cyan-500",
    desc: "Explore India's most beautiful destinations including mountains, beaches, deserts and heritage cities.",
  },
  {
    id: "budget-travel",
    title: "Budget Travel Tips",
    icon: Wallet,
    color: "from-green-500 to-emerald-500",
    desc: "Save money on hotels, transport, food and sightseeing without compromising your travel experience.",
  },
  {
    id: "solo-travel",
    title: "Solo Travel Guide",
    icon: User,
    color: "from-purple-500 to-pink-500",
    desc: "Complete safety tips, planning guide and the best destinations for solo travelers in India.",
  },
  {
    id: "honeymoon-destinations",
    title: "Honeymoon Destinations",
    icon: Heart,
    color: "from-rose-500 to-red-500",
    desc: "Romantic hill stations, beaches and luxury resorts for unforgettable honeymoon memories.",
  },
  {
    id: "packing-checklist",
    title: "Packing Checklist",
    icon: Backpack,
    color: "from-orange-500 to-amber-500",
    desc: "Never forget travel essentials with our complete packing checklist for every season.",
  },
  {
    id: "monsoon-travel",
    title: "Monsoon Travel Guide",
    icon: CloudRain,
    color: "from-sky-500 to-blue-500",
    desc: "Discover the best rainy season destinations along with useful travel precautions.",
  },
  {
    id: "weekend-trips",
    title: "Weekend Trips from Delhi",
    icon: Car,
    color: "from-indigo-500 to-violet-500",
    desc: "Perfect 2-3 day weekend escapes near Delhi for family, couples and adventure lovers.",
  },
  {
    id: "things-to-do-goa",
    title: "Things to Do in Goa",
    icon: Palmtree,
    color: "from-cyan-500 to-teal-500",
    desc: "Discover beaches, nightlife, water sports, forts, cafés and hidden gems in Goa.",
  },
];

const TravelGuide = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50">

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm">
            📖 Complete Travel Guides
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-gray-900">
            Travel Guides
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            Everything you need before planning your next trip—from destinations
            and budgets to packing tips and travel inspiration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
  {guides.map((guide) => {
    const Icon = guide.icon;

    return (
      <Link
        key={guide.id}
        to={`/${guide.id}`}
        className="group relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5 flex flex-col justify-between"
      >
        {/* Top Accent Gradient Line */}
        <div className={`h-1.5 bg-gradient-to-r ${guide.color}`}></div>

        {/* Content Container */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
          
          {/* Advanced Adaptive Icon Wrapper */}
          <div
            className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${guide.color} flex items-center justify-center text-white mb-4 sm:mb-6 shadow-md shadow-slate-900/10 group-hover:scale-110 transition-transform duration-300`}
          >
            {/* Lucide Icons sizing dynamically balanced across mobile up to desktop */}
            <Icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>

          {/* Guide Title */}
          <h3 className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-gray-900 group-hover:text-cyan-700 transition-colors duration-200 line-clamp-1 sm:line-clamp-none">
            {guide.title}
          </h3>

          {/* Guide Description (Responsive Line Clamping for neat grids) */}
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed font-medium flex-grow line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
            {guide.desc}
          </p>

          {/* Interactive CTA Anchor */}
          <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-between sm:justify-start gap-2 text-cyan-700 font-extrabold text-xs sm:text-sm md:text-base group-hover:text-cyan-600 transition-colors duration-200">
            <span>Read Guide</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform duration-300 ease-out"
            />
          </div>

        </div>
      </Link>
    );
  })}
</div>

      </div>
      {/* 
    RESPONSIVE WEEKEND ESCAPES SECTION  */}

    </section>
  );
};

export default TravelGuide;