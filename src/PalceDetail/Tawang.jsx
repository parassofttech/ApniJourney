import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Tawang = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-sky-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🏔️ HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://storage.googleapis.com/stateless-www-justwravel-com/2022/10/TAWANG-COVER-FOR-WEBSTORY.jpg"
            alt="Tawang"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Arunachal
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-sky-950 tracking-tighter leading-none mb-6 italic"
            >
              Tawang
            </motion.h1>
            <p className="text-sky-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Land of Monasteries & Mountains
            </p>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              A mystical Himalayan town where ancient monasteries, snow-covered passes,
              and crystal-clear alpine lakes create an unforgettable high-altitude escape.
            </motion.p>
          </header>

          {/* 📊 INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-blue-50 to-sky-50 rounded-[2.5rem] border border-blue-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-blue-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-sky-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-sky-500" /> Legendary Landmarks
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🛕" bold="Tawang Monastery" text="Largest monastery in India" />
                <AttractionItem emoji="🏔️" bold="Sela Pass" text="High altitude mountain pass" />
                <AttractionItem emoji="🌊" bold="Madhuri Lake" text="Serene alpine lake" />
                <AttractionItem emoji="🪖" bold="War Memorial" text="Tribute to brave soldiers" />
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-sm relative overflow-hidden group"
            >
              <Snowflake className="absolute -right-6 -top-6 text-emerald-200/40 w-32 h-32 group-hover:scale-125 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3 italic">
                <Mountain className="text-emerald-500" /> Alpine Adventures
              </h2>
              <div className="space-y-4">
                <AdventureItem text="Drive Through Sela Pass" />
                <AdventureItem text="Snow Trekking & Photography" />
                <AdventureItem text="Monastery Exploration" />
              </div>
            </motion.div>

            {/* Culture & Food */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2.5rem] border border-orange-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-orange-500" /> Cultural Essence
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Experience Monpa traditions, butter tea rituals, and vibrant
                Buddhist festivals that bring the mountains alive.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#MonpaCulture", "#ButterTea", "#HimalayanVibes", "#SnowLand"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-orange-400 border border-orange-100 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Travel Intel */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden shadow-blue-900/20"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <Plane className="text-sky-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Tezpur Airport" />
                <TravelDetail icon={<Train />} label="Railway Access" value="Tezpur / Guwahati" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Mar – Jun & Sep – Nov" />
                <TravelDetail icon={<MapPin />} label="From Guwahati" value="~520 KM (12 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-sky-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://tourscart.in/wp-content/uploads/2023/12/20200316_132710-1024x1016.jpg", title: "Tawang Monastery" },
                { url: "https://tourgeniesimplify.travel.blog/wp-content/uploads/2025/07/tawang1-1.jpg", title: "Sela Pass" },
                { url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/be/fd/1a.jpg", title: "Madhuri Lake" },
                { url: "https://s7ap1.scene7.com/is/image/incredibleindia/singsur-ani-gompa-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1742170099687", title: "War Memorial" },
                { url: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Tawang_destination_landscape_1_l_639_957.jpg", title: "Snow Peaks" },
                { url: "https://static2.tripoto.com/media/filter/tst/img/400504/TripDocument/1497093749_img_0137.jpg", title: "Mountain Sunset" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt="Tawang "
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      {/* <h3 className="text-white text-xl font-bold tracking-wide">
                        {item.title}
                      </h3> */}
                      <p className="text-white/70 text-sm">
                        Tawang • Arunachal Pradesh
                      </p>
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
              className="inline-flex items-center gap-4 bg-sky-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(2,132,199,0.3)] hover:bg-sky-700 transition-all"
            >
              Start Your Journey <ArrowUpRight size={20} />
            </motion.a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-sky-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-emerald-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-sky-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-sky-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-sky-100">{value}</span>
  </div>
);

export default Tawang;