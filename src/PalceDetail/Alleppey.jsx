import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Plane,
  Train,
  Compass,
  Coffee,
  Camera,
  Utensils,
  ArrowUpRight,
  Landmark,
  Calendar,
  Snowflake
} from "lucide-react";

const Alleppey = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSZDYX7yuE8KCyeboD0OQq66kk3JrbJ6ZtCM3hKpNl2avVigyWRLkOgPWjTrBbIiGhH2S5nKIeMjxgvA_2UqifMMg4&s=19"
            alt="Alleppey Backwaters"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Alleppey
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Venice of the East
            </p>
          </div>
        </div>

        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white rounded-t-[3rem]">

          {/* ABOUT SECTION */}
          <section className="mb-24 text-center">
            <h2 className="text-4xl font-black text-green-900 italic mb-8">
              About The Destination
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Alleppey, also called Alappuzha, is famous for its tranquil backwaters, 
              houseboat cruises, lush paddy fields, and traditional Kerala village life. 
              It is often referred to as the "Venice of the East".
            </p>
          </section>

          {/* Introduction Section: Alleppey */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-600 selection:text-white">

  {/* Advanced Radial Background Glows (Lagoon Estuary & Palm Canopy Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🛶</span> Maritime Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Discover Alleppey
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Venice of the East—a surreal watery labyrinth where majestic houseboats glide through mirror-like lagoons, interconnected canals, and vibrant floating villages.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌴</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        A Liquid Wilderness Carved in Emerald
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Alleppey (Alappuzha), anchored perfectly along the edge of the sprawling Vembanad Lake in Kerala, is a stunning geographic masterclass in slow, aquatic living. Fringed by thousands of leaning coconut palms, this unique coastal plain forms the gateway to a vast, multi-tiered ecosystem of natural backwaters and brackish canals.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Steeped in maritime trading history, Alleppey is world-renowned for its heritage <span className="font-semibold">Kettuvallam houseboats</span>—ancient spice vessels beautifully re-engineered using bamboo mats and coir ropes into floating luxury suites. It offers an intimate window into a quiet world where life unfolds entirely on water.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">Vembanad</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">India's Longest Lake</p>
        </div>
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">Below 0</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Kuttanad Sea Level</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Traditional Houseboat Cruises */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🚢
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Heritage Houseboat Voyages
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Board a hand-crafted wooden flagship cruiser. Drift overnight past shimmering marshlands while enjoying fresh, locally harvested Karimeen (pearl spot fish) fry prepared by your private onboard chef.
        </p>
      </div>

      {/* Card 2: Narrow Village Canal Kayaking */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🚣‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Interlocking Canal Kayaking
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Paddle through the ultra-narrow veins of the backwaters. Kayaking gets you up close to local villages, duck farming collectives, toddy shops, and children paddling mini canoes to school.
        </p>
      </div>

      {/* Card 3: Kuttanad Agro-Tourism */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🌾
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Below-Sea-Level Farms
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore the "Rice Bowl of Kerala." Witness <span className="font-semibold">Kuttanad</span>, a striking agricultural valley where vast, bright green paddy fields are cultivated up to 2.5 meters *below* sea level using massive dikes.
        </p>
      </div>

      {/* Card 4: Marari Beach & Coir Heritage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🏖️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Pristine Marari Coastline
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Unwind on a quiet, undeveloped white-sand paradise. Located just a short drive away from the hectic docks, Marari Beach provides a tranquil escape with wild sea-grass dunes and peaceful fishing hamlets.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-teal-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Alleppey is an absolute masterpiece of water-based travel architecture. It seamlessly transitions you out of chaotic overland rhythms into a soothing, low-impact world of premium houseboat bays and intimate canal trails—making it a mandatory slow-travel pivot for your platform.
      </p>
    </div>
  </div>

</section>

          {/* ATTRACTIONS */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 mb-12 italic text-center">
              Must Visit Attractions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Alleppey Backwaters", desc: "Serene canals perfect for houseboat cruises." },
                { title: "Vembanad Lake", desc: "Largest lake in Kerala with stunning sunsets." },
                { title: "Alappuzha Beach", desc: "Beautiful coastal area with lighthouse and promenade." },
                { title: "Krishnapuram Palace", desc: "Historic palace showcasing Kerala architecture." }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="p-8 bg-green-50 rounded-3xl shadow-lg border border-green-100"
                >
                  <h3 className="text-xl font-black text-green-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* THINGS TO DO */}
          <section className="mb-28 text-center">
            <h2 className="text-3xl font-black text-green-900 italic mb-14">
              Things To Experience
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                "Houseboat Cruise",
                "Village Exploration",
                "Sunset Photography",
                "Canoeing",
                "Traditional Food Tasting",
                "Market Shopping"
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white rounded-3xl shadow-xl border border-green-100"
                >
                  <h3 className="font-black text-green-900">{item}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* TRAVEL INFO */}
          <section className="mb-28 bg-slate-900 text-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-black mb-10 italic text-center">
              Travel Information
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Cochin International Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Alleppey Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="Distance from Kochi" value="53 KM (~1.5 hrs)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 3 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Alleppey Backwaters → Houseboat Stay → Sunset View" />
              <ItineraryDay day="Day 2" text="Krishnapuram Palace → Alappuzha Beach → Local Market" />
              <ItineraryDay day="Day 3" text="Village Walk → Canoeing → Return" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Pleasant temperatures (24°C – 32°C) with heavy monsoons. 
              Best visited between October and March.
            </p>
          </section>

          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepf3i7Fhj_lP1LjbSAyM1RDujIC23Xs_znxInKbZdyTyGNhsHC4zdyuXaDDMN3WBcyGzWhlTl8a5n5yWgR2xIDNCDjeaVr0c0QGzRmERfuphVsVFQiib1j0nkUhA_BKqV8RoXA=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepAcguekLYTWW3NIwcyW2E9VAoQrDpEXDpSOP0vdmFXdMdLqI9ILwEeB1nSBemeImlm9udIaFryN-3DMy4jP2MuP4Ap3o_WYz6p8To3tICRzLqcxJafY3LI-ICBkpafI3-TbV5j=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer8c2Iji8ApTwt7yDrWhe-_GXaj7amyaip6ueMFEq-zkfM3H5dmDuLRtbSHkXf1DknUnR5WyVj2rYLQfpbGxXxPpBIzmz7kRxIxHBNep7u0BuxtcVDYq4gvq0NJMWjzqyswSASR=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQqOVQENYN0emd9yDqzTB7BCLywL63G2AOrxIyZod9Ro2BuUQcIewtZbRkE1PsCgKN1ny8uKKLJWEyGRFsIckl9bg0&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerQ0XRBy7PzVSo2Ce3D4zQ05hIg89vqtzKrrAsFNOIJ9yjcTsTx5bp4wu7QraBAf1F0uSvCNPfn30DkVkMxfC6myeGfIlcnhglBcG1bX3QJHNOFkXiD678qRl-pi-kGq8m-GFGy=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQiU79-_fEc_vw8YeQFx1gRzzMDjYndTTh4f359n170TfNiNuUC8cBoz-f2Ll0FI00cPqFxdLrLsE1S1L0yPcCEHQE&s=19"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Alleppey"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Alleppey?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Peaceful backwaters, traditional Kerala culture, houseboat experiences, 
              scenic beauty, delicious cuisine, and perfect weekend getaway from Kochi.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-green-600 text-white text-xl font-black rounded-full shadow-2xl hover:bg-green-700 transition-all"
            >
              Plan Your Trip Now ✈️
            </motion.button>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

// Reusable Components
const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
    <div className="flex items-center gap-4">
      <div className="text-green-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
        {label}
      </span>
    </div>
    <span className="font-black text-green-100">{value}</span>
  </div>
);

const ItineraryDay = ({ day, text }) => (
  <div className="bg-green-50 p-8 rounded-3xl shadow-md">
    <h3 className="text-xl font-black text-green-800 mb-3">{day}</h3>
    <p className="text-slate-600">{text}</p>
  </div>
);

export default Alleppey;