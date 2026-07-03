import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Camera,
  Plane,
  Train,
  Calendar,
  ArrowUpRight,
  Utensils,
  Compass,
  Trees,
  Waves,
  Landmark
} from "lucide-react";

const Pachmarhi = () => {
  return (
    <div className="min-h-screen bg-[#f2fbf7] py-12 px-4 sm:px-8 font-sans selection:bg-emerald-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQBKJe6I5dFlPHuuSAvlZR5VPWpoTNi35sSiCWXC_YH8ZKDazxXeDiFJshEijLH5Byuc0mvo72ZCI-55mXVf4cOkLs&s=19"
            alt="Pachmarhi Hills"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Satpura Queen
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">

          {/* HEADER */}
          <header className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-emerald-950 tracking-tighter leading-none mb-6 italic"
            >
              Pachmarhi
            </motion.h1>
            <p className="text-emerald-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Queen of Satpura
            </p>
            <div className="h-1.5 w-20 bg-emerald-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Hidden in the lush folds of the Satpura ranges, Pachmarhi is where
              waterfalls whisper, caves echo legends, and forests breathe serenity.
              A true <span className="text-emerald-900 font-bold italic">nature sanctuary</span>.
            </motion.p>
          </header>

          {/* Introduction Section: Pachmarhi */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

  {/* Advanced Radial Background Glows (Wild Valleys & Mystical Caves Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌲</span> Highland Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Pachmarhi
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Queen of Satpura—a tranquil, biosphere sanctuary packed with monumental sandstone gorges, cascading wild falls, and ancient rock-cut cave lore.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🐒</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Verdant Crown of Central India
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Pachmarhi, nestled beautifully at an altitude of 1,067 meters inside the pristine Satpura Range of Madhya Pradesh, is a refreshing alpine treasure. Discovered for modern travelers by British Captain James Forsyth in 1857, this hill station is completely enveloped by deep Sal, Teak, and wild bamboo forests.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Protected within a vast <span className="font-semibold">UNESCO Biosphere Reserve</span>, Pachmarhi gracefully balances its colonial heritage bungalows with sacred tribal shrines, massive steep cliffs, and a rich, untouched biodiversity.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">1,352m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Highest Peak (Dhupgarh)</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">UNESCO</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Biosphere Status</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Dhupgarh Sunset */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🌅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Majestic Dhupgarh Crest
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand on the highest point of Central India. <span className="font-semibold">Dhupgarh</span> offers dramatic, unobstructed vistas of twilight valleys, drawing crowds daily to watch the sun sink behind layers of jagged Satpura ridges.
        </p>
      </div>

      {/* Card 2: Bee Falls Cascades */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🌊
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Thundering Bee Falls
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Feel the force of a spectacular 35-meter plunge. Also known as Jamuna Prapat, <span className="font-semibold">Bee Falls</span> flows smoothly down rugged rocks into a clear pool, providing the city's purest natural bathing experience.
        </p>
      </div>

      {/* Card 3: Pandav Caves Rock Lore */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🗿
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          The Mythical Pandav Caves
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Climb up to ancient rock chambers. Carved meticulously into a sandstone hillock, these five rock-cut caves are legendary for housing the Pandavas during their exile, now overlooking a manicured hillside garden.
        </p>
      </div>

      {/* Card 4: Jata Shankar Mystical Caves */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🔱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Jata Shankar Abyss
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Descend into a sacred subterranean limestone cave. Hidden under massive boulders, <span className="font-semibold">Jata Shankar</span> contains natural stalagmite formations resembling Shiva’s matted locks, flanked by cool stream currents.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Pachmarhi is a beautifully untamed highland sanctuary. It flawlessly bridges the spiritual mystery of deep, hidden rock shrines with the pure adventure of steep canyon trails and thunderous falls, offering an absolute masterpiece of an eco-break.
      </p>
    </div>
  </div>

</section>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Natural Wonders */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[2.5rem] border border-emerald-100/50 shadow-sm relative overflow-hidden group"
            >
              <Mountain className="absolute -right-6 -top-6 text-emerald-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-emerald-500" /> Natural Wonders
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🌊" bold="Bee Falls" text="Crystal clear cascading beauty" />
                <AttractionItem emoji="🕳️" bold="Pandav Caves" text="Mythological rock shelters" />
                <AttractionItem emoji="🌄" bold="Dhoopgarh" text="Highest sunset point in MP" />
                <AttractionItem emoji="🌿" bold="Satpura National Park" text="Wildlife & jungle safari" />
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-[2.5rem] border border-teal-100/50 shadow-sm relative overflow-hidden group"
            >
              <Trees className="absolute -right-6 -top-6 text-teal-200/40 w-32 h-32 group-hover:scale-125 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-teal-900 mb-8 flex items-center gap-3 italic">
                <Mountain className="text-teal-500" /> Forest Adventures
              </h2>
              <div className="space-y-4">
                <AdventureItem text="Trekking to Handi Khoh" />
                <AdventureItem text="Jungle Safari Experience" />
                <AdventureItem text="Rock Climbing & Valley Views" />
              </div>
            </motion.div>

            {/* Local Taste */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2.5rem] border border-orange-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-orange-500" /> Local Flavours
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Enjoy simple tribal cuisine and local delicacies surrounded by forests.
                Warm chai at hill viewpoints is a must-have experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#NatureRetreat", "#Waterfalls", "#Satpura", "#PeacefulStay"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-orange-400 border border-orange-100 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Travel Intel */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <Plane className="text-emerald-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Bhopal (200 KM)" />
                <TravelDetail icon={<Train />} label="Nearest Rail" value="Pipariya (50 KM)" />
                <TravelDetail icon={<Calendar />} label="Best Time" value="Oct – March" />
                <TravelDetail icon={<MapPin />} label="Altitude" value="1,067 m above sea level" />
              </div>
            </motion.div>
          </div>

          {/* GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-emerald-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTFe9G0XRHHLNBz7Y8ldebGrwkHviqZSAMAuKAHTsIpp6OcdTqSvsJQS_UIWCTOdUJ0b1SaPqNPMbCqctk1QGeYaasU&s=19", title: "Bee Falls" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerfIL8lQWxe8M8AZaw97QhFA2iJ1yxUvQPfP6VyOF9ZSqamz7K_GCvSho9mbQYWk5uJZxXKfXQV26Na72PVrWOn4frup2l79UhzTDX4TUvrrzI_SspagWzLzV6sDq8CxE6B6oLE=w675-h390-n-k-no", title: "Pandav Caves" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepGEzHIcCEWhsqqdgdFH7VBa08PtO1lSOdDExeyw0nx21drlJJ3rCQAAYG5stlhVC9Uw3D43felbL_sh5grRBpWE_BC1Bgvhm73yTHoHaz1QgLXNYBv-W5phUBPXcDHeCt9Army=w675-h390-n-k-no", title: "Satpura Forest" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqhlZ41y-6o8qpO9wxQJrPcVfx51Ecr2jaLCnJDE41pH3KPzl8VSe1KlEbLOY7QUBCGoIg6cFSb1puzw_CMbUx8VQLliKj71v7jVmATolNXSB7uHReBNbsPDf3Eo9EBxo3ZD3v8=w675-h390-n-k-no", title: "Dhoopgarh Sunset" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS2m1Q2gEBrwWZkel21TrIEIDDwZ4_ni2KvF_DnATOTi4msmbp2yBCV8R377JY1bjnkLc-bCvmquZILXZuDSaAM1l0v&s=19", title: "Mountain Trails" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRIftRMGCBV-UhsTI3P_uESgnMTNOuE_moaJvYLJxwlNPfF1rpCPfpCkQyj-tgwv3js1y3wSaLre7Ots_fUnjztfv0&s=19" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                      <p className="text-white/70 text-sm">Pachmarhi • Madhya Pradesh</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-20 text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.mptourism.com"
              className="inline-flex items-center gap-4 bg-emerald-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition-all"
            >
              Explore Pachmarhi <ArrowUpRight size={20} />
            </motion.a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

// Reusable Components

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all cursor-default">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-emerald-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl font-bold text-slate-700 hover:bg-white transition-all">
    {text}
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-emerald-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-emerald-100">{value}</span>
  </div>
);

export default Pachmarhi;