import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Snowflake,
  Plane,
  Train,
  Compass,
  Coffee,
  Camera,
  Utensils,
  ArrowUpRight,
  Landmark,
  Calendar,
  Sun
} from "lucide-react";

const Mahabaleshwar = () => {
  return (
    <div className="min-h-screen bg-[#f4faff]  font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://mahabaleshwartourism.in/images/places-to-visit/headers/mahabaleshwartourism-header-mahabaleshwar-tourism.jpg.jpg"
            alt="Mahabaleshwar Hills"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Mahabaleshwar
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              Queen of the Western Ghats
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
              Located in the Sahyadri range of Maharashtra at 1,353 meters above sea level,
              Mahabaleshwar is famous for lush forests, misty valleys, waterfalls,
              strawberry farms, and colonial charm. It was once the summer capital
              of the Bombay Presidency during British rule.
            </p>
          </section>

          {/* Introduction Section: Mahabaleshwar */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-600 selection:text-white">

  {/* Advanced Radial Background Glows (Evergreen Forests & Valley Mist Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-rose-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-emerald-50 border border-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🍓</span> Highland Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Discover Mahabaleshwar
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Queen of Maharashtra's Hills—a soaring, mist-veiled tableland of sprawling strawberry fields, ancient cliffside lookouts, and dense forest canopies.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-rose-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌿</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Verdant Cradle of Five Holy Rivers
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Mahabaleshwar, resting beautifully on a massive plateau within the rugged Sahyadri Mountain Range (Western Ghats), is a breathtaking sanctuary of cloud and canopy. Perched at an altitude of 1,353 meters, this historic hill station serves as the source of five sacred rivers, including the mighty Krishna River.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Famed for its year-long crisp mountain air and cool microclimate, it produces over <span className="font-semibold">85% of India's strawberries</span>. Here, old colonial stone bungalows blend seamlessly with rugged red laterite cliffs, cascading waterfalls, and thick, untouched evergreen reserves.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">1,353m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Plateau Altitude</p>
        </div>
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">85%+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Strawberry Harvest</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Arthur's Seat & Canyons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          ⛰️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          The Dramatic Arthur's Seat
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand over the "Queen of Points." Looming at 1,470 meters, <span className="font-semibold">Arthur's Seat</span> offers a sheer drop into the deep Brahma-Arayan canyon, where rising air currents famously push light objects right back up.
        </p>
      </div>

      {/* Card 2: Venna Lake Boating */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Scenic Venna Lake
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Glide through the mountain mist. Surrounded by tall, leafy trees and vibrant lakeside food stalls, a rowboat ride on the clear, sprawling waters of <span className="font-semibold">Venna Lake</span> is a classic highland leisure experience.
        </p>
      </div>

      {/* Card 3: Strawberry Farm Tourism */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🍓
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Agro-Tourism & Orchards
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk through endless, sweet-scented berry patches. Visit dynamic farms along the Panchgani road to pick fresh strawberries, mulberry treats, and enjoy the iconic local dessert—fresh strawberry cream.
        </p>
      </div>

      {/* Card 4: Panch Ganga Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🛕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Old Mahabaleshwar Mysticism
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Discover the spiritual roots of the plateau. The 13th-century stone <span className="font-semibold">Panch Ganga Temple</span> captures the underground convergence of 5 rivers flowing cleanly out of a carved stone cow spout.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-rose-950 via-slate-900 to-emerald-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-rose-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Mahabaleshwar is a beautifully balanced mountain escape. It perfectly combines the nostalgic luxury of old colonial viewpoints with the pure rustic charm of sweet agro-tourism and dramatic Sahyadri cliffside trails, making it an exceptional wellness retreat.
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
                { title: "Arthur's Seat", desc: "Famous viewpoint overlooking deep valleys." },
                { title: "Venna Lake", desc: "Boating and scenic lake experience." },
                { title: "Wilson Point", desc: "Highest point for sunrise views." },
                { title: "Mahabaleshwar Temple", desc: "Ancient Krishna temple." }
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
                "Boating",
                "Trekking",
                "Strawberry Picking",
                "Photography",
                "Shopping",
                "Sunset Views"
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Pune Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Wathar Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – May" />
              <TravelDetail icon={<MapPin />} label="Distance from Pune" value="120 KM (~3 hrs)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 3 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Venna Lake → Mapro Garden → Sunset Point" />
              <ItineraryDay day="Day 2" text="Arthur’s Seat Trek → Elephant Head Point → Market" />
              <ItineraryDay day="Day 3" text="Wilson Point Sunrise → Temple Visit → Return" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Pleasant summers (15°C – 30°C), heavy monsoons with waterfalls,
              and cool winters. Best visited between October and May.
            </p>
          </section>

          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerFnce1eisU2H_pdPTjLWVsXW31qEPstbMcMWNtAS1wTNilkYp59QqZK4ppW5ZXOS8bg96c9xZJSWCFS56jtipLvqwlIBOJ2awryV6SgYevxrf-xihdrnz6jbCjQaFHA76SB1Wf=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep3RmcqM9C5Jf8liLUfABjKHJ_5Ud9hzu8eqBmchmd9mwibQ43aM2TuJOrLVAjF2oiLdzGoOfZzCRkAQxd2dO9PJrPF4fQHBq65hY06sODACqjRq7iEHghhUwzMyS0tcK9BTxf6BQ=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRHp40QSfEnm_XdlyPrs017KDaXfn6-otHSo0Jk9bng9ytAXJyk7EFd2kK6NrsWsu4xBg-jM3yiaWDV6xlHOBRV9imc&s=19",
                "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRh--7fueLb_0Rjluw5s_dvGG6hwtLl1sB6PmE3N9cgtnUeUH9E3-Ggru-wjr38aK03SdC-2RJ2i9oYCgxSQzmshUk&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoFbXAwYq447Pt4HKRMzp2ztKDNC3zAQp50DhMOuQqp4Iv_aZjJN7YM9Y-fJDQAJa5A29GzQReV5gf8GDtO5PH1AHRmv4qDKkrHhuj0sgIbQNjMaYXR18F02I7wqBNkggV-cBgv=w675-h390-n-k-no"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Mahabaleshwar"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Mahabaleshwar?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Romantic getaways, family trips, budget friendly travel,
              scenic beauty, adventure activities, and perfect weekend escape
              from Pune & Mumbai.
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

export default Mahabaleshwar;