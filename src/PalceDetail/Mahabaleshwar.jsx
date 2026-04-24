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