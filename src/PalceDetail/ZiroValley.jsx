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
  Music,
  Sunrise
} from "lucide-react";

const ZiroValley = () => {
  return (
    <div className="min-h-screen bg-[#f4fbf6] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >
        {/* 🌾 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSNpNnPTtG4IT3_dVGpPGTA5hZibNOJza-3hxrvXurh_sUWSoIo9St36NewqWFOoeWkQIvAbYf7H73LRBCZSIbCAwE&s=19"
            alt="Ziro Valley"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Arunachal Pradesh
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
              className="text-5xl md:text-8xl font-black text-green-950 tracking-tighter leading-none mb-6 italic"
            >
              Ziro Valley
            </motion.h1>
            <p className="text-green-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Land of Apatani Tribe
            </p>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              A peaceful emerald bowl tucked in the Eastern Himalayas,
              Ziro Valley is where pine forests meet tribal heritage and
              music flows under open skies — a true
              <span className="text-green-900 font-bold italic"> hidden paradise</span>.
            </motion.p>
          </header>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Natural Beauty */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] border border-green-100/50 shadow-sm relative overflow-hidden group"
            >
              <Mountain className="absolute -right-6 -top-6 text-green-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-green-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-green-500" /> Natural Wonders
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🌾" bold="Paddy Fields" text="Iconic step farming landscape" />
                <AttractionItem emoji="🌲" bold="Talley Valley" text="Dense forest sanctuary" />
                <AttractionItem emoji="🌄" bold="Kile Pakho" text="Panoramic sunrise views" />
                <AttractionItem emoji="🌿" bold="Pine Groves" text="Tranquil walking trails" />
              </ul>
            </motion.div>

            {/* Culture */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-[2.5rem] border border-teal-100/50 shadow-sm relative overflow-hidden group"
            >
              <Music className="absolute -right-6 -top-6 text-teal-200/40 w-32 h-32 group-hover:scale-125 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-teal-900 mb-8 flex items-center gap-3 italic">
                <Trees className="text-teal-500" /> Tribal Culture
              </h2>
              <div className="space-y-4">
                <CultureItem text="Apatani Tribal Heritage" />
                <CultureItem text="Ziro Music Festival" />
                <CultureItem text="Traditional Bamboo Houses" />
              </div>
            </motion.div>

            {/* Food */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2.5rem] border border-orange-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-orange-500" /> Local Flavours
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Taste authentic tribal cuisine, bamboo shoot dishes,
                smoked meats, and local rice beer —
                simple yet deeply rooted in tradition.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#Apatani", "#MusicFestival", "#NorthEastIndia", "#EcoTourism"].map(tag => (
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
                <Plane className="text-green-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Lilabari (Assam)" />
                <TravelDetail icon={<Train />} label="Nearest Rail" value="Naharlagun" />
                <TravelDetail icon={<Calendar />} label="Best Time" value="March – October" />
                <TravelDetail icon={<MapPin />} label="Altitude" value="1,500 m above sea level" />
              </div>
            </motion.div>
          </div>

          {/* GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-green-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSOEZOAuXJEU4z54yFPdGKAovu23LqBabMYZ08JsMush2o6flF-jnexbgk1f3cLLaRf7i5uQIlHRzapC-_JwNRNfaSt&s=19", title: "Ziro Paddy Fields" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRnVqNoNVmjAbOvrtAQJNGmVOGcjBfLDlQrjh1BzDVlwF45A3dbXh7tycaLvWPpU8J2uUVtDuSGlyGYuQTOMPDNYZY&s=19", title: "Talley Valley Forest" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQIAjpOgKguUxHoyf6U7pKCZLuVGw7sW1CZeNZZhze0kJveNOxqPGFo_5ashI3pVVsIEtzOl-xUl5WwJxjPJYwHcpz7&s=19", title: "Himalayan Sunrise" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQbW_dkK036YYu_hX2gIgkFoj8y_qqTU9LJcwpq_VvrqKYP_fhevNhnN1wR8aiXUjLu6KqhZQsCm6HqFMvdzCfEofw&s=19", title: "Tribal Village" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQhzh12pdCl1fteEtadyEzqz9d7dI_6DkxLHV6uTfif-y0eno9sGgpcm5pdBKYeFpDy2Cy1gsYp0vza46lPqV4oG1s&s=19", title: "Pine Hills" },
                { url: "https://meanderwander.com/wp-content/uploads/2020/09/Ziro-Festival-of-Music.jpg", title: "Festival Nights" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt="Zero Velley"
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      {/* <h3 className="text-white text-xl font-bold">{item.title}</h3> */}
                      <p className="text-white/70 text-sm">Ziro Valley • Arunachal Pradesh</p>
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
              href="https://arunachaltourism.com"
              className="inline-flex items-center gap-4 bg-green-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:bg-green-700 transition-all"
            >
              Discover Ziro <ArrowUpRight size={20} />
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
      <b className="text-green-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const CultureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl font-bold text-slate-700 hover:bg-white transition-all">
    {text}
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-green-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-green-100">{value}</span>
  </div>
);

export default ZiroValley;