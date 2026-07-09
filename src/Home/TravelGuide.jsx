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
<section id="weekend-delhi" className="relative bg-slate-50 py-14 sm:py-24 overflow-hidden selection:bg-orange-600 selection:text-white">
  
  {/* Advanced Ambient Glowing Orbs */}
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 blur-[100px] rounded-full"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Header Title Block */}
    <div className="text-center mb-10 sm:mb-16">
      <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 text-orange-800 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
        <span>🚗</span> Quick Escapes
      </span>
      <h2 className="mt-4 text-2xl sm:text-5xl font-black tracking-tight text-slate-10 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        Weekend Trips From Delhi
      </h2>
      <p className="text-slate-500 mt-2 sm:mt-4 text-xs sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
        Ditch the city traffic. Hand-picked 2–3 day premium getaways curated for perfect road trips and relaxation.
      </p>
    </div>

    {/* Dynamic Grid Layout (Mobile: Explicit 2-Columns Side-by-Side) */}
    <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
      {[
        { name: "Rishikesh", tag: "Adventure", emoji: "🌊", id: "rishikesh", dist: "240 km", color: "from-blue-500 to-cyan-500", desc: "White-water rafting, cafe hopping, and pristine beach camping beside the Ganges." },
        { name: "Jaipur", tag: "Heritage", emoji: "🏰", id: "jaipur", dist: "270 km", color: "from-orange-500 to-amber-500", desc: "Explore magnificent forts, pink sandstone palaces, and vibrant traditional bazaars." },
        { name: "Mussoorie", tag: "Hills", emoji: "🏔️", id: "mussoorie", dist: "290 km", color: "from-teal-500 to-emerald-500", desc: "Stunning colonial valley walks, cascading waterfalls, and crisp mountain air peaks." },
        { name: "Agra", tag: "Wonder", emoji: "🕌", id: "agra", dist: "230 km", color: "from-rose-500 to-pink-500", desc: "Witness the iconic Taj Mahal, grand Agra Fort, and magnificent Mughal architecture landmarks." },
        { name: "Neemrana", tag: "Fort Stay", emoji: "🛋️", id: "neemrana", dist: "120 km", color: "from-amber-600 to-yellow-500", desc: "A luxurious 15th-century heritage fort stay featuring thrilling high-line ziplining paths." },
        { name: "Lansdowne", tag: "Solitude", emoji: "🌲", id: "lansdowne", dist: "250 km", color: "from-green-600 to-emerald-500", desc: "Uncrowded pine trails, serene colonial churches, and absolute quiet in nature's lap." },
        { name: "Nainital", tag: "Lakes", emoji: "⛵", id: "nainital", dist: "300 km", color: "from-indigo-500 to-blue-500", desc: "Enjoy scenic boating down the emerald Naini lake and exploring panoramic viewpoints." },
        { name: "Jim Corbett", tag: "Safari", emoji: "🐅", id: "jim-corbett", dist: "240 km", color: "from-green-700 to-yellow-600", desc: "Thrilling open-jeep jungle safaris inside India's legendary wild tiger reserve zones." }
      ].map((trip, i) => (
        <Link
          key={i}
          to={`/destinations/${trip.id}`}
          className="group relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 flex flex-col justify-between p-3 sm:p-6 md:p-8"
        >
          {/* Micro Gradient Top Accent Strip */}
          <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${trip.color}`}></div>

          <div>
            {/* Header Row: Emoji Container & Distance Tag */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3 sm:mb-5">
              <div className={`text-xl sm:text-3xl bg-gradient-to-br ${trip.color} bg-opacity-10 text-white w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <span className="filter drop-shadow-sm">{trip.emoji}</span>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-0.5">
                <span className="text-[9px] sm:text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {trip.tag}
                </span>
                <span className="text-[9px] sm:text-xs font-bold text-slate-400 mt-0.5">
                  📍 {trip.dist}
                </span>
              </div>
            </div>

            {/* Destination Title */}
            <h3 className="text-sm sm:text-xl md:text-2xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors duration-200 line-clamp-1">
              {trip.name}
            </h3>

            {/* Mobile Safe Clamped Description */}
            <p className="mt-1 sm:mt-3 text-[11px] sm:text-sm md:text-base text-slate-500 leading-relaxed font-medium line-clamp-2 sm:line-clamp-3">
              {trip.desc}
            </p>
          </div>

          {/* Action Button Strip */}
          <div className="mt-4 sm:mt-6 pt-2.5 border-t border-slate-100 flex items-center justify-between text-orange-600 font-extrabold text-[11px] sm:text-sm group-hover:text-orange-500 transition-colors duration-200">
            <span>Explore Guide</span>
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out text-xs sm:text-base">
              ➔
            </span>
          </div>
        </Link>
      ))}
    </div>

  </div>
</section>
    </section>
  );
};

export default TravelGuide;