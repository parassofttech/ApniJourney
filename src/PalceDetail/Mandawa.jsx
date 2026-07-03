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

const Mandawa = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTbYOadwRj7gi_F2B2WaA60o2fZfo4bmhjCTO9NMBg6H6tQMdbZwUazbyKiKWcr-XNaSp5BX3kikgnSdP9IH1yAwTM&s=19"
            alt="Mandawa Fort"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Mandawa
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Art City of Rajasthan
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
              Mandawa, located in Rajasthan’s Shekhawati region, is famous for its stunning 
              havelis adorned with frescoes, traditional Rajasthani architecture, and rich heritage. 
              It is a photographer’s paradise and a cultural hotspot.
            </p>
          </section>

          {/* Introduction Section: Mandawa */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-600 selection:text-white">

  {/* Advanced Radial Background Glows (Desert Ochre & Fresco Indigo Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-orange-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-indigo-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🎨</span> Open-Air Gallery Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
      Discover Mandawa
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Living Canvas of Rajasthan—a magnificent, time-capsule fortress town adorned with heavily painted merchant Havelis, grand brass doors, and rich desert folklore.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-orange-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏰</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Where Silk Route Wealth Met Vivid Art
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Mandawa, tucked inside the arid Shekhawati region of Rajasthan, functions as an exceptional historical mirror to India's merchant golden age. Established in the mid-18th century as a fortified outpost along the lucrative Silk Route trading tracks, it quickly evolved into a high-density playground for wealthy Marwari traders.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Instead of typical stone carvings, these traders decorated their massive mansions (<span className="font-semibold">Havelis</span>) with vibrant, hyper-detailed wall frescoes. Mandawa holds the title of the <span className="font-semibold">"World’s Largest Open-Air Art Gallery,"</span> where ancient mythology seamlessly shares wall space with quirky colonial inventions.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-600">18th C</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Fortified Origins</p>
        </div>
        <div className="bg-indigo-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-indigo-600">100s</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Painted Havelis</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Mandawa Fort Heritage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🏰
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          The Majestic Mandawa Fort
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore the epic heart of the town. This real 18th-century fortress features grand stone archways, exquisite mirror-work rooms, and a fascinating museum collection of antique royal costumes and weaponry.
        </p>
      </div>

      {/* Card 2: Murmuria Haveli Art */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          🎨
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          The Eccentric Murmuria Haveli
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Deconstruct a playful mashup of Eastern and Western design. The <span className="font-semibold">Murmuria Haveli</span> is famous for its distinct 1930s paintings depicting early trains, old vintage cars, and European-style cycles.
        </p>
      </div>

      {/* Card 3: Chokhani Twin Haveli */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🚪
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Symmetrical Chokhani Havelis
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk through grand double courtyards. Built for two brothers, this beautifully preserved estate showcases incredible gold-leaf detailing, dark heavy wooden doors, and complex historical frescoes.
        </p>
      </div>

      {/* Card 4: Harlalka Well Panoramas */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🏺
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Historic Harlalka Well
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step up to a massive antique step-well system. Featuring four towering stone pillars and an expansive ramp structure, this quiet spot offers a moody backdrop for capturing beautiful desert sunsets.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-orange-950 via-slate-900 to-indigo-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-orange-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Mandawa is an absolute visual paradise for photographers, architects, and design thinkers. It beautifully replaces typical fort-and-desert layouts with a highly intimate, slow-paced stroll through centuries-old merchant art—making it a stellar vintage addition to your travel platform.
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
                { title: "Mandawa Fort", desc: "Historic fort with frescoes and royal architecture." },
                { title: "Havelis of Mandawa", desc: "Intricate paintings and traditional Rajasthani art." },
                { title: "Rang Mahal", desc: "Famous for colorful frescoes and murals." },
                { title: "Surajpol", desc: "Entrance gate showcasing Rajputana architecture." }
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
                "Fort Exploration",
                "Photography",
                "Fresco Tour",
                "Cultural Walks",
                "Shopping Local Handicrafts",
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Jaipur International Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Mandawa Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="Distance from Jaipur" value="180 KM (~4 hrs)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 2 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Mandawa Fort → Havelis Tour → Local Market" />
              <ItineraryDay day="Day 2" text="Rang Mahal → Surajpol → Cultural Walk → Return" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Hot summers (32°C – 45°C), mild winters (10°C – 25°C), and little rainfall. 
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
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcShZfiFA8Pv-nY9ISsi6i9jjMXWFDVm4gchsYe-YOgM_n6u5m60CHKr21cc9FAK22DcbTYDNfGz5s0zvqmbWVRIRlw&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRCn-brTtqKNv0SuLQ5GzvSvrxFF5jYatR9lvl4c-v_IsmU1imIurjBJcT3LYteDCXEHwB1TO8z9KMFUZXZGfLTAx0&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSJxUViOXlkQVbY1JGammIf3eWsKTGR87jBAX7dpOuxreiPeQGU4kD5bFEu41RWooYk4FNrWYSA5Rbc2KhRt7w1LgE&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQSkmaehkQVABgbkLD1k0HwWABdb9D9MzbFPV4lcIEGoCPaRO4tWTCGaTvFvydwPgJFDb3AiQCXYZpR2kFEmN9u6Ug&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoQtl5InFREnofz6Lb2WpvndErYtO0XvPIs7_Ct3f1fiiNSbGCI7NPQv80IdZOfLDPLbgcWP0xN54FsNsX2UO9QX0CmiUNw_NYAwbLbj-46Rwb4YGoovmFPYcCzRArC-3GVhAWH=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerVB4jVSvyg9mt1K9D2FivnT27QKSG-pyTsZwBMGYEr6L7lLfj-Pryn5ige1GJ-XQrrR6hWGv_tvlhWETTFWArWi_8uKKFHAXfJE_QgBSDfA1Kqbm0O-v-OeR6yEDqRXuR4gGWUqA=w675-h390-n-k-no"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Mandawa"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Mandawa?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Rich cultural heritage, exquisite frescoes, royal havelis, photography spots, 
              traditional markets, and a glimpse into the art and history of Rajasthan.
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

export default Mandawa;