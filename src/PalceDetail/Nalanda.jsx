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

const Nalanda = () => {
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg/1280px-Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg"
            alt="Nalanda Ruins"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Nalanda
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              Ancient Seat of Learning
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
              Nalanda, located in Bihar, was an ancient center of higher learning, dating back to the 5th century. 
              The ruins of Nalanda University showcase remarkable Buddhist architecture and historical significance, 
              attracting scholars and tourists from around the world.
            </p>
          </section>

          {/* Introduction Section: Nalanda */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Monastic Clay & Saffron Light Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>📜</span> UNESCO Ancient Heritage Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Nalanda
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Light of Asia—the ruins of the world's premier residential university, standing as a monumental testament to classical Indian architecture, philosophy, and intellectual dominance.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🧱</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Epicenter of Ancient Knowledge Systems
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Nalanda, located just a short distance from Patna and Rajgir in Bihar, is a globally awe-inspiring archaeological wonder. Flourishing from the 5th century CE to the 12th century CE under the patronage of the Gupta and Pala Empires, this sprawling brick-built Mahavihara hosted over 10,000 international scholars and 2,000 revered teachers.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Designed with meticulous geometrical precision, the excavated ruins reveal a stunning grid of grand monasteries, step-down water reservoirs, symmetric prayer stupas, and specialized cooling cellars, anchoring it as a deeply moving monument to human wisdom.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">9 Million</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Manuscripts Lost</p>
        </div>
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-600">11+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Layered Monasteries</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The Great Stupa of Sariputra */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Sariputra Monument
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Gaze at Temple No. 3—the defining architectural icon of Nalanda. This massive, multi-tiered pyramid structure features multiple corner towers adorned with beautiful, classical stucco art niches of Buddhist deities.
        </p>
      </div>

      {/* Card 2: Dharma Gunj (The Library Devastation) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          📜
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          The Legendary Nine-Story Library
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Trace the tragic history of *Dharma Gunj* (The Mountain of Truth), the institution's legendary library complex. Historical accounts state that the burning repository of knowledge smoked for three straight months after foreign attacks.
        </p>
      </div>

      {/* Card 3: Advanced Thermal Engineering */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-stone-300 shadow-md hover:shadow-xl hover:shadow-stone-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-xl font-bold text-stone-600 mb-5 group-hover:bg-stone-600 group-hover:text-white transition-all duration-300">
          📐
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-stone-700 transition-colors duration-200">
          Symmetric Brick Monasteries
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Examine the highly advanced architectural grid layouts. Built entirely with beautifully thick burnt bricks, the double-story residential halls feature central shared courtyards, stone ventilation networks, and internal drainage canals.
        </p>
      </div>

      {/* Card 4: Xuanzang Memorial Hall */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl font-bold text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
          🎐
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          The Hiuen Tsang Repository
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Visit the peaceful contemporary peace pavilion nearby, built in honor of Xuanzang (Hiuen Tsang), the brave 7th-century Chinese traveler who documented Nalanda’s academic curricula and stellar operational discipline.
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
        In short, Nalanda is an absolutely profound destination for global design minds, thinkers, and historical purists. It beautifully documents structural engineering and early human academic infrastructure, offering an incredible, quiet look into classic India's golden age of logic and philosophy.
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
                { title: "Nalanda University Ruins", desc: "Ancient monastic university complex." },
                { title: "Nalanda Archaeological Museum", desc: "Exhibits artifacts and sculptures from ancient times." },
                { title: "Hieun Tsang Memorial Hall", desc: "Commemorates the famous Chinese scholar's visit." },
                { title: "Stupas of Nalanda", desc: "Historic Buddhist stupas with intricate carvings." }
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
                "Heritage Walks",
                "Photography",
                "Exploring Ancient Ruins",
                "Buddhist Studies",
                "Local Handicrafts Shopping",
                "Sunset Views over Ruins"
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Patna Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Nalanda Railway Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="Distance from Patna" value="90 KM (~2 hrs)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 1-2 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Nalanda University Ruins → Archaeological Museum → Hieun Tsang Memorial Hall" />
              <ItineraryDay day="Day 2" text="Stupas of Nalanda → Local Markets → Return" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Summers are hot (35°C – 45°C), winters are mild (10°C – 22°C), and monsoon brings moderate rainfall. 
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
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxWuJnVsXYV33Fr4ZSptjq7dpQhJ-ijNMdg&s",
                "https://images.squarespace-cdn.com/content/v1/5b735348266c075124b0ffb3/1623232107561-C7JSMTMIOG1AEAMH6JCG/Nalanda+image.jpg?format=1500w",
                "https://s7ap1.scene7.com/is/image/incredibleindia/10-nalanda-bihar-city-hero-new?qlt=82&ts=1742172163876",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiXXgKP3p0OM7IQj8xuQfhTrrVsCBRNjYqw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHL8pVfaUbSDD6WIL9mjLrsykNPcux9TCCag&s",
                "https://pbs.twimg.com/media/HBriX8IbgAgqveP.jpg"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Nalanda"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Nalanda?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Explore one of the world’s oldest centers of learning, witness ancient Buddhist architecture, 
              and immerse yourself in history, culture, and heritage of Bihar.
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

export default Nalanda;