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

const Patna = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT5k5mjUHBzeQ7XfjVPgjDSRn5iTXpg0fT7YviQc0zpcnk0Seu4LQt38yBg4zCAdDpTTj5PhOxCn5U-Sn5xwg6oJIU&s=19"
            alt="Patna City"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="w-full absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Patna
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Historic Capital of Bihar
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
              Patna, the capital of Bihar, is an ancient city with a rich cultural 
              and historical legacy. Located on the southern banks of the Ganges, 
              it is famous for its educational institutions, historic monuments, 
              and religious sites.
            </p>
          </section>

          {/* Introduction Section: Patna */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Imperial Clay & Riverfront Azure Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-sky-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>📜</span> Ancient Capital Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Patna
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Cradle of Empires—a historic megacity sitting along the majestic Ganges, where ancient Pataliputra's royal lineage meets deep spiritual horizons.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏛️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Ancient Heartbeat of Indian Civilization
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Patna, resting elegantly on the southern bank of the holy river Ganges in Bihar, is one of the oldest continuously inhabited places in human history. Flourishing over two millennia ago as *Pataliputra*, this legendary city served as the supreme seat of power for the mighty Mauryan and Gupta Empires, shaping the geopolitical map of ancient Asia.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        A historical powerhouse of learning that once attracted scholars worldwide, modern Patna elegantly interlocks its structural brick-and-mortar heritage with sacred pilgrimage centers, monumental colonial structures, and vibrant riverfront promenade networks.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">2,500+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Years of History</p>
        </div>
        <div className="bg-sky-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-sky-600">5.75 km</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Mahatma Gandhi Setu</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Takht Sri Patna Sahib */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          ✨
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Takht Sri Patna Sahib
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Pay homage at the magnificent white marble birthplace of Guru Gobind Singh Ji, the tenth Sikh Guru. Standing near the historic old docks, this highly revered Takht exudes serene, deeply spiritual vibes.
        </p>
      </div>

      {/* Card 2: The Monolithic Golghar */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          ⛰️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          The Symmetrical Golghar
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Climb the sweeping twin spiral staircases of this pillarless, beehive-shaped colonial granary built in 1786. The top deck offers an incredible, expansive birds-eye view of the winding river Ganges.
        </p>
      </div>

      {/* Card 3: Bihar Museum Architecture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-slate-300 shadow-md hover:shadow-xl hover:shadow-slate-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl font-bold text-slate-600 mb-5 group-hover:bg-slate-600 group-hover:text-white transition-all duration-300">
          🗿
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-slate-700 transition-colors duration-200">
          The Avant-Garde Bihar Museum
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore a world-class architectural marvel built with weathering Japanese Corten steel. It holds rare historical treasures, including the highly celebrated 2,300-year-old Didarganj Yakshi sandstone sculpture.
        </p>
      </div>

      {/* Card 4: Nit Ghat & River Promenades */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          ⛵
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Ganga Riverfront Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stroll along clean, beautifully paved red-brick ghat networks. Experience calm evening cool breezes, catch traditional wooden sailboat cruises, or witness majestic floating musical light-and-laser setups.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-sky-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Patna is an absolute treasure-trove for heritage curators and archaeological travelers. It flawlessly contrasts its heavy, historic epic timeline with modern state-of-the-art museums and vibrant urban riverfront promenades, anchoring it as a core cultural capital for your platform.
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
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerB9wf-trppWVtMFU9QPF11a8OcJXS3o-PvBel5js_1oS6nhk0HHOIFFSciAFht4Vd9qYXHKFOuJtMzQljT8rfagJQ5-2zpDS9hqsTM7n9QgmBVyUGKk6OrAZFYn4-Od47DyEeGHQTJXNDP=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweohl_aEw8gQG3Kfbu5RvpMfFyXjYmtVojb28MX5-SYLPkJJLkf6Y4heKmC8H_flRPxf2eYzwHBr24NUyawLw0mE7KimuBCWaOFKAn2ajAZy6_yU1LO_gxlf16a6XMRuPIuoF_dqQg=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTq4KZp0cy2yU_XuB6cXXhtt1Qx8Xmn8JlbYYrjoceMvUYOxMkW6dxk6YVyPsB2LN1pSBDF_SWRc1CUoMw8Un0Bu3w&s=19",
                "https://www.savaari.com/blog/wp-content/uploads/2024/04/Patna-Image.webp",
                "https://media.istockphoto.com/id/1393996484/photo/modern-city-construction-with-heavy-traffic-and-bright-blue-sky-at-morning.jpg?s=612x612&w=0&k=20&c=0XxYY8D39gJOhbIR9R75qwaQHaOUvTHj60jLyveBpGQ=",
                "https://www.hindustantimes.com/ht-img/img/2025/09/11/1600x900/Over-2-000-years-ago--Patna-transformed-from-a-vil_1757580204281.jpg"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Patna"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>
          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

  {/* Advanced Radial Background Glows (Ancient Pataliputra & Ganga Riverfront Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-sky-50 border border-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏛️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
      Best Time to Visit Patna
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your historical and spiritual journey to ancient Pataliputra, aligned with crisp Gangetic winter breezes, majestic festival loops, and clear heritage pathways.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-orange-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-2xl font-bold mb-6 border border-orange-100">
          📜
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Gangetic Climate Cycles
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Patna reveals its most welcoming weather, crisp morning mist, and pleasant outdoor conditions from <span className="font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded-md">October to March</span>. After the heavy monsoon currents recede, the North Indian winter brings refreshing daytime temperatures ranging from 12°C to 26°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this premium seasonal block, capturing the panoramic city views from the historic <span className="font-semibold text-gray-900">Golghar</span>, paying homage at the magnificent Takht Sri Patna Sahib, or exploring the rich archaeological ruins of Kumhrar feels deeply immersive and comfortable.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-sky-50 rounded-2xl border border-orange-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">🌅</span>
        <p className="text-xs md:text-sm text-orange-900 font-medium leading-relaxed">
          <strong className="text-orange-950">Pro Tip:</strong> To witness Patna in its absolute peak cultural and spiritual essence, plan your visit during <strong className="text-orange-950">October/November</strong> for the legendary <strong className="text-orange-950">Chhath Puja</strong>. The entire city's Ganga ghats light up with millions of oil lamps, soulful folk melodies, and spectacular solar transition rituals.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Crisp Heritage Winters */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Crisp Winter Exploration (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The gold-standard travel window. Perfectly cool daytime conditions make museum hops, riverfront strolls along Marine Drive, and outdoor monument trails highly pleasant.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Peak Comfort
        </span>
      </div>

      {/* Season 2: Sweeping Monsoon Riverfronts */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Heavy Gangetic Monsoons (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The Ganges swells dramatically to its full capacity, presenting a raw, powerful visual scale. However, heavy downpours bring intense humidity, and lower river ghat paths are frequently submerged.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          High Waters
        </span>
      </div>

      {/* Season 3: Intense Plains Summer */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🔥
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Blazing Plains Summer (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Temperatures intensely scale past 42°C, accompanied by dry, scorching heatwaves (Loo). Outdoor exploration becomes highly exhausting; it remains a very low-occupancy off-season block.
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
              Why Visit Patna?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Historical landmarks, riverside views, cultural heritage, religious sites, 
              and vibrant local markets make Patna a must-visit city in Bihar.
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

export default Patna;