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

const Bhubaneswar = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQKIotNBa25J-H3nGS6eYEx7qkZb3RKbQs59i60abRtwWSZ3WbFzwrsqX-z90zwCz_LCnMr55BswjoZKc6GtU1-Onc&s=19"
            alt="Bhubaneswar City"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Bhubaneswar
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Temple City of India
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
              Bhubaneswar, the capital of Odisha, is renowned for its ancient temples, 
              rich cultural heritage, and beautiful architecture. Known as the "Temple City," 
              it is a major hub for history enthusiasts, spiritual travelers, and art lovers.
            </p>
          </section>

          {/* ATTRACTIONS */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 mb-12 italic text-center">
              Must Visit Attractions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Lingaraj Temple", desc: "12th-century temple dedicated to Lord Shiva." },
                { title: "Mukteshwar Temple", desc: "Ancient temple with exquisite carvings." },
                { title: "Dhauli Peace Pagoda", desc: "Historic site of Kalinga War and Ashokan edicts." },
                { title: "Udayagiri and Khandagiri Caves", desc: "Ancient Jain rock-cut caves." }
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
                "Temple Hopping",
                "Local Cuisine Sampling",
                "Photography",
                "Shopping for Handicrafts",
                "Cultural Festivals",
                "Riverfront Walks"
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Biju Patnaik International Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Bhubaneswar Railway Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="Distance from Kolkata" value="440 KM (~7 hrs by train)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 2-3 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Lingaraj Temple → Mukteshwar Temple → Evening at Bindusagar Lake" />
              <ItineraryDay day="Day 2" text="Dhauli Peace Pagoda → Udayagiri and Khandagiri Caves → Local Market Visit" />
              <ItineraryDay day="Day 3" text="Explore Tribal Art Museum → Relax and Departure" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Summers are hot (30°C – 45°C), winters are mild (15°C – 25°C), and monsoon brings moderate rainfall. 
              Best visiting months are October to March.
            </p>
          </section>

          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo7nzE0v0OYMjxq6OdBQEW6aBG9pqABTgxEnuPYk9Hy1mi2fKMVBkz92l5LLMFlIMoANDNC3N7DJZkuGik1BR8jZnMZkP49MbOxyPF7OG1L5lYrRHszMc7I8iANnVKfeAVySKo=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGfOpGa54eB0d9f1AuV9Mp-H3YSH0hXie2Xx0Z6KrOx7tIgplNzMioUkfR-DtoqTuJQDa9FT_KwKuFs4QJBrtfsyVJJrTxTG4FMqr2I16PJoQgiIcykqplF0yVfJ37F-O2ruaZ=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSoHLUle2P4U2G4sYgUqZeY9SBgBxxfaIicNJYJMQfzuktg4vQnu2ErmBUF5h45tSBqihGEHdL_dQ5bKrYiVgLVo2g&s=19",
                "https://etimg.etb2bimg.com/photo/101281045.cms",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqlRt3bCjyyxWhD_iTyRdDvX6m6dNblKSd-pVKUuz_HZUrFNYFgYVoOIRiymLVhx60otQdWHqzLoVgmPBYVY5s62vzx-hyVUFFQ1S8KB47T4ioPdyn2UlEAR_JG9wvHZOw4vFpk=w675-h390-n-k-no",
                "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1742167192930"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Bhubaneswar"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Bhubaneswar?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Discover a city blending ancient temples, vibrant culture, and rich heritage, 
              perfect for history enthusiasts, spiritual travelers, and photographers.
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

export default Bhubaneswar;