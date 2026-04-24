import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Camera,
  Plane,
  Train,
  Calendar,
  ArrowUpRight,
  Utensils,
  Compass,
  Building2,
  Waves
} from "lucide-react";

const Bhopal = () => {
  return (
    <div className="min-h-screen bg-[#f3f9ff] py-12 px-4 sm:px-8 font-sans selection:bg-cyan-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌊 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTYdKDG5yMz4G5tZT5d-zjft0J0-eyhxayr6uVmRBvKSS0vv7qrecetKH8AcpnSydXaNnb7vv5lxXcF2qg6Kvo3XBg&s=19"
            alt="Bhopal Lake"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Heart of Madhya Pradesh
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
              className="text-5xl md:text-8xl font-black text-cyan-950 tracking-tighter leading-none mb-6 italic"
            >
              Bhopal
            </motion.h1>
            <p className="text-cyan-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The City of Lakes
            </p>
            <div className="h-1.5 w-20 bg-cyan-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Where shimmering lakes meet timeless mosques and royal heritage.
              Bhopal is a poetic blend of <span className="text-cyan-900 font-bold italic">nature and Nawabi elegance</span>.
            </motion.p>
          </header>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Landmarks */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[2.5rem] border border-cyan-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-cyan-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-cyan-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-cyan-500" /> Iconic Landmarks
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🌊" bold="Upper Lake" text="Sunset views & boat rides" />
                <AttractionItem emoji="🕌" bold="Taj-ul-Masajid" text="One of Asia’s largest mosques" />
                <AttractionItem emoji="🏛️" bold="Bharat Bhavan" text="Art, theatre & culture hub" />
                <AttractionItem emoji="🌿" bold="Van Vihar" text="Lakeside national park" />
              </ul>
            </motion.div>

            {/* Heritage */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-sm relative overflow-hidden group"
            >
              <Building2 className="absolute -right-6 -top-6 text-emerald-200/40 w-32 h-32 group-hover:scale-125 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3 italic">
                <Landmark className="text-emerald-500" /> Royal Heritage
              </h2>
              <div className="space-y-4">
                <HeritageItem text="Shaukat Mahal – Indo-Islamic architecture" />
                <HeritageItem text="Gohar Mahal – Lakeside palace charm" />
                <HeritageItem text="Sanchi Stupa – UNESCO World Heritage Site" />
              </div>
            </motion.div>

            {/* Food */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2.5rem] border border-orange-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-orange-500" /> Nawabi Flavours
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                From spicy <span className="text-orange-700 font-bold">Bhopali Gosht Korma</span> 
                to sweet <span className="text-orange-700 font-bold">Jalebi-Poha mornings</span>, 
                the city serves unforgettable tastes.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#StreetFood", "#LakeViewCafe", "#NawabiCuisine", "#MPFood"].map(tag => (
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
                <Plane className="text-cyan-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Airport" value="Raja Bhoj Airport" />
                <TravelDetail icon={<Train />} label="Railway" value="Bhopal Junction" />
                <TravelDetail icon={<Calendar />} label="Best Time" value="Oct – March" />
                <TravelDetail icon={<MapPin />} label="From Delhi" value="~770 KM" />
              </div>
            </motion.div>
          </div>

          {/* GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-cyan-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerIk5YyK31KWBv2AcKF-7hB8DqlQ1arwck4RrGBngJp5NMyMJtZAM41dOeUgHrFj-YeIQRO4UK1zJkXWUVJR7xFy0tysgbJYtDPFryy0mAJUXY07Fz-TzEewShz_6VslHVGMbc=w675-h390-n-k-no", title: "Upper Lake Sunset" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoW9-ajzbwcI0t5JA3F9pfXJrpp27G30-etL34VWpzwsYaCJ0r5tlSq4_788fdtDrkQtdz9DG6LU6WFkr-hj654dRm4yWyiadQuhOUgadKpdXaF1ybRff2oT3bnyHm96gFQv6k=w675-h390-n-k-no", title: "Taj-ul-Masajid" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSfUeD7uy9du4IyX3rRtvjmc-KA6jGqnErGMFC71JY3HTYkIAxe5IJBIDFZv8_iJJYpS4qdYNLxES7peBcawaeHFp4&s=19", title: "Sanchi Stupa" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT6l20hR-RZ6CmTYDe04AyTmqA4EqmRhxRc4H-Vdogvid1GpSsUSJ1J1K5seoGiXS74_22ZdeabMx_zicmQKWLzggQ&s=19", title: "Van Vihar" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerGuK7nn_jkCxIpuw3YrtHV6RgBHXJoZC6mSWbS3MWldVJcjQVx9V1YiMejrsRvq_MXxtX6KRWnJmoORasyTWkXyb3QaXIOCSdCILaqxCRR4W5AdCGhmYVcRajnDnmy4Yb5RMiN=w675-h390-n-k-no", title: "Shaukat Mahal" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweofNVvnWokPhEYlrTm55bWLMGi6ZTLEb9S0lsDirqXTHWasFpjIPg8EKxryOv5Rw-1vFMtoa0vLCJoidY4H5B-IGsKXAv0m7WsSy9u7JyLLFPED7H5ZpXYCaWq8TwykoGe_iczg=w675-h390-n-k-no", title: "Lake View Night" },
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
                      <p className="text-white/70 text-sm">Bhopal • Madhya Pradesh</p>
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
              className="inline-flex items-center gap-4 bg-cyan-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(8,145,178,0.3)] hover:bg-cyan-700 transition-all"
            >
              Discover Bhopal <ArrowUpRight size={20} />
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
      <b className="text-cyan-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const HeritageItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl font-bold text-slate-700 hover:bg-white transition-all">
    {text}
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-cyan-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-cyan-100">{value}</span>
  </div>
);

export default Bhopal;