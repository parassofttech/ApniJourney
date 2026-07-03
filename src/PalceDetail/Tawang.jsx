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

          {/* Introduction Section: Tawang */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

  {/* Advanced Radial Background Glows (Mystical Himalayan Border Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-amber-50 border border-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏔️</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
      Discover Tawang
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The hidden land of dawn-lit mountains, pristine glacial valleys, and the soaring heritage of the Monpa soul.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-cyan-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">☸️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Mystical Corner of Arunachal
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Tawang, perched at a breathtaking altitude of 3,048 meters in the northwestern corner of Arunachal Pradesh, is a ruggedly beautiful paradise. It is a land deeply steeped in Tibetan Buddhist culture, dramatic mountain passes, and stunning alpine lakes.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Home to the welcoming Monpa tribe, this remote valley is bounded by Tibet to the north and Bhutan to the southwest, serving as a peaceful guardian of timeless ancient wisdom and high-altitude wilderness.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-cyan-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-cyan-600">3,048m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Town Altitude</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">2nd Largest</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Monastery in World</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The Tawang Monastery */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-xl font-bold text-cyan-600 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          The Great Tawang Monastery
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Founded in the 17th century, <span className="font-semibold">Gaden Namgyal Lhatse</span> is India's largest monastery. Perched like a citadel on a ridge, it houses priceless ancient scriptures and a magnificent 26-foot gilded Buddha statue.
        </p>
      </div>

      {/* Card 2: Sela Pass Ascent */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-xl font-bold text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          ❄️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          The Mighty Sela Pass
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The breathtaking gateway to Tawang at 13,700 feet. Experience the surreal thrill of crossing through absolute snow, framed beautifully by the frozen, mystical waters of the sacred <span className="font-semibold">Sela Lake</span>.
        </p>
      </div>

      {/* Card 3: High-Altitude Glacial Lakes */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          💧
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Madhuri Lake & Beyond
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Discover remote glacial lakes hidden in the mountains. Visit <span className="font-semibold">Sangetsar Lake (Madhuri Lake)</span>, formed by an earthquake, where upright dead tree trunks emerge eerily out of crystal-clear mountain waters.
        </p>
      </div>

      {/* Card 4: Monpa Cuisine & Hospitality */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🍲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Hearty Monpa Flavors
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Warm your soul in the cold weather. Try authentic Monpa delicacies like <span className="font-semibold">Zan</span> (a savory millet porridge), handmade spicy buckwheat noodles, traditional momos, and hot butter tea.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-cyan-700 via-teal-700 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-cyan-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Tawang is a raw journey into the clouds. It requires a bit of effort to reach, but the reward is an unparalleled frontier experience blending pristine, snow-clad valleys with powerful, tranquil Buddhist roots that will stay etched in your memory forever.
      </p>
    </div>
  </div>

</section>

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