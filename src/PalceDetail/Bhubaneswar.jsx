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

          {/* Introduction Section: Bhubaneswar */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Kalinga Sandstone & Heritage Orange Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🛕</span> Kalinga Heritage Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Bhubaneswar
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Temple City of India—a brilliant administrative capital where ancient stone structural engineering seamlessly paths into modern, eco-forward urban greenways.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🗿</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Where Sacred Geometry Meets Planned Urbanism
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Bhubaneswar, the clean and leafy capital of Odisha, gets its name from *Tribhubaneswar* (The Lord of Three Worlds). Historically bragging over 7,000 sandstone shrines, it forms the crucial starting apex of the famous East-Coast Golden Triangle, preserving a continuous structural timeline spanning over 2,500 years.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Designed in its modern layout by German architect Otto Königsberger in 1948, Bhubaneswar is a rare city that gracefully interfaces its rich <span className="font-semibold">Kalinga style stone-cut architecture</span> with pristine global hockey infrastructure, high-density tech parks, and heavily shaded public parks.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">Deula</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Kalinga Style</p>
        </div>
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-600">Top 5</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Greenest Cities</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Lingaraj Temple Architecture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🔱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Great Lingaraj Spire
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Deconstruct the crown jewel of Kalinga architecture. Rising to a staggering 180 feet, this 11th-century monument features incredible sandstone reliefs, representing the perfect culinary union of Harihara (Shiva and Vishnu).
        </p>
      </div>

      {/* Card 2: Udayagiri & Khandagiri Caves */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🧗‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Udayagiri Rock Chambers
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore twin hillside rock networks dating back to the 2nd century BCE under Emperor Kharavela. Check out the multi-layered *Rani Gumpha* cave, featuring highly complex historical friezes and early theater steps.
        </p>
      </div>

      {/* Card 3: Mukteswar Temple (Gem of Odisha) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl font-bold text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Mukteswar Torana Archway
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Examine the iconic heavy stone archway (*Torana*) of the 10th-century Mukteswar shrine. Renowned as the "Gem of Odishan Architecture," it exhibits fine intricate carvings of smiling stylized faces and mythical lions.
        </p>
      </div>

      {/* Card 4: Dhauli Peace Pagoda & Ashokan Edicts */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🕊️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Dhauli Giri Peace Shanti Stupa
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand on the hill overlooking the Daya River where the brutal Kalinga War transformed Emperor Ashoka towards peace. The bright white peace dome sits right above rare, rock-engraved major rock edicts from 257 BCE.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Bhubaneswar is a phenomenal slow-travel hub that expertly balances immense stone heritage preservation with top-tier modern planning. It beautifully avoids the high-friction chaos of typical old spiritual centers, providing an exceptionally clean, scannable, and culturally packed urban asset for your digital nomad map.
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