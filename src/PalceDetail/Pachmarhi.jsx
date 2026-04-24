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