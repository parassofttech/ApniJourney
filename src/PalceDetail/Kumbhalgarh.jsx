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

const Kumbhalgarh = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFpXIQ4At-FvAK3xg2PPUF4T8l2Zmqv5Akw&s"
            alt="Kumbhalgarh Fort"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Kumbhalgarh
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Great Wall of India
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
              Kumbhalgarh, located in Rajasthan, is famous for its massive fort and 
              walls that stretch over 36 km, earning it the nickname "The Great Wall of India". 
              The fort is a UNESCO World Heritage site and offers stunning views of the Aravalli hills.
            </p>
          </section>

          {/* Introduction Section: Kumbhalgarh */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-700 selection:text-white">

  {/* Advanced Radial Background Glows (Aravalli Ridges & Desert Gold Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-stone-600/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-stone-100 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🛡️</span> Mewar Heritage Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Kumbhalgarh
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Great Wall of India—an invincible hilltop citadel boasting the world's second-longest continuous fortification wall, buried deep within the rugged Aravalli wilderness.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-stone-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏰</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Unconquered Bastion of the Desert Hills
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Kanyakumari stands as land's end, but Kumbhalgarh represents the soaring heights of defensive military genius. Resting at an altitude of 1,100 meters on a prominent ridge in Rajsamand district, Rajasthan, this UNESCO World Heritage hill fort served as the supreme cloud-shrouded sanctuary for the rulers of Mewar.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Built during the 15th century by Rana Kumbha, its staggering perimeter walls snake over ridges and valleys for <span className="font-semibold">36 kilometers</span>. The fort holds deep historical weight as the legendary birthplace of Maharana Pratap, perfectly pairing its raw, massive defensive stone architecture with sweeping forest canopies.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">36 km</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Continuous Wall</p>
        </div>
        <div className="bg-stone-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-stone-600">360+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Ancient Temples Inside</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The Massive Perimeter Wall */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🧱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Great Frontier Wall
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk along the top of stone walls wide enough for eight horses to gallop abreast. Reinforced with towering circular bastions, this defensive marvel remains completely invisible from the plains below.
        </p>
      </div>

      {/* Card 2: Badal Mahal (The Palace of Clouds) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-stone-300 shadow-md hover:shadow-xl hover:shadow-stone-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-xl font-bold text-stone-600 mb-5 group-hover:bg-stone-600 group-hover:text-white transition-all duration-300">
          ☁️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-stone-700 transition-colors duration-200">
          Badal Mahal Summit
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Climb up to the highest point of the citadel. The "Palace of Clouds" features airy royal chambers decorated with charming pastel-shaded frescoes, offering views where the Thar Desert dunes meet Aravalli cliffs.
        </p>
      </div>

      {/* Card 3: Neelkanth Mahadev Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🛕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Neelkanth Stone Architecture
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Pay homage at a majestic 15th-century shrine. Featuring 24 massive pillars and a unique 5-foot-tall monolithic black stone Shivling, it stands as a brilliant example of classical stone architecture.
        </p>
      </div>

      {/* Card 4: Wildlife Sanctuary Wilderness */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🐆
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Rugged Scrub Safari
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore the dense wildlife reserve encircling the fort. Take an open-top jeep safari through dry deciduous forests to catch glimpses of elusive Indian leopards, wolves, chinkaras, and dynamic bird species.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-stone-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Kumbhalgarh is an absolute masterclass in medieval military engineering. It completely avoids typical commercial tourist hubbub, standing as an expansive, quiet monument to strategic architecture and historical preservation—making it a mandatory heritage anchor for discerning explorers.
      </p>
    </div>
  </div>

</section>

          

          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi32ynCnlaG7Jz0w-7ejNMDsbIFeoUkitBg&s",
                "https://static.toiimg.com/photo/50230092/.jpg",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/64/ba/46/it-is-counted-second.jpg?w=1400&h=1400&s=1",
                "https://turbanhotels.com/wp-content/uploads/2026/01/Kumbhalgarh-Fort.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GIQB0SwIdNf9rBVQ0Irj9KQV7BtjLC6wXw&s",
                "https://gos3.ibcdn.com/c39f1ca2-3575-4a3c-a2c1-6fec6804e39c.JPG"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Kumbhalgarh"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Aravalli Ridges & Majestic Mewar Fort Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏰 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Time to Visit Kumbhalgarh
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your royal fortress exploration across the second-longest continuous wall in the world, aligned with crisp winter breezes or misty monsoon hill station loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
          🛡️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Fortress Trekking Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Kumbhalgarh reveals its most magnificent royal charm, clear mountain horizons, and comfortable weather from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. Perched at an altitude of 1,100 meters in the Aravalli range, winters are beautifully crisp, with daytime temps sitting nicely between 12°C and 28°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this prime tourist cycle, hiking across the massive <span className="font-semibold text-gray-900">36-kilometer fort wall perimeter</span>, exploring the elevated Badal Mahal (Palace of Clouds), or going for a heritage wildlife safari loop feels immensely rewarding and physically comforting.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
          <strong className="text-amber-950">Pro Tip:</strong> Want to witness the ultimate regal spectacle? Align your winter plans with the 3-day <strong className="text-amber-950">Kumbhalgarh Festival</strong> held in <strong className="text-amber-950">December</strong>. The massive fortress is illuminated beautifully with thousands of yellow lanterns, accompanied by vibrant folk performances and traditional games.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Crisp Regal Winters */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Crisp Heritage Winters (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The ultimate high-demand travel window. Bright sunny days are ideal for walking the massive ramparts, followed by cold, starry desert-mountain nights perfect for heritage bonfire loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Peak Window
        </span>
      </div>

      {/* Season 2: Misty Monsoon Hills */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Misty Monsoon Ridges (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              A visually jaw-dropping window. The rugged Aravallis turn into a rich velvet green oasis, and dense fog often blankets the watchtowers. Highly favored by photography enthusiasts and luxury staycationers.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Scenic Peak
        </span>
      </div>

      {/* Season 3: Scorching Mountain Summer */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🔥
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Intense Summer Heatwaves (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Daytime temperatures frequently cross 40°C, making open-air stone climbing exceptionally tiring. If you visit, schedule all fort exploration strictly during early morning or sunset loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Off Season
        </span>
      </div>

    </div>
  </div>

</section>


          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Kumbhalgarh?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Historical architecture, massive fort walls, scenic trekking routes, 
              rich wildlife, cultural heritage, and breathtaking sunset views.
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

export default Kumbhalgarh;