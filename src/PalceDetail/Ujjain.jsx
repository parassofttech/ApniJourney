import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Ujjain = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-yellow-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweoHgOriTQv941bfYG2Y5xt3aXdKdFa2JvIh0WfKjvYVXE3sihHueB9K5jWNyTELmpw9UQNoFHkurmrVVBtMw0RWezRof74Dj-z9MKSrb0rLtPfc-uuZQ_tCk1H9bj-QOZ9PVitt=w675-h390-n-k-no"
            alt="Ujjain Temple"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Ujjain
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-yellow-950 tracking-tighter leading-none mb-6 italic"
            >
              Ujjain
            </motion.h1>
            <p className="text-yellow-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              City of Temples
            </p>
            <div className="h-1.5 w-20 bg-yellow-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Ujjain, one of India’s oldest cities, is steeped in history and spirituality. 
              Known for the **Mahakaleshwar Jyotirlinga**, it attracts pilgrims and history lovers alike.
            </motion.p>
          </header>

          {/* Introduction Section: Ujjain */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

  {/* Advanced Radial Background Glows (Sacred Spiritual Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🔱</span> Spiritual Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
      Discover Ujjain
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The eternal city of Mahakal, where ancient cosmic science, sacred river ghats, and divine legends converge.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-orange-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🕉️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Greenwich of Ancient India
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Ujjain, resting gracefully on the holy banks of the Shipra River in Madhya Pradesh, is one of India's most ancient and holiest tirthas. Historically known as Avantika, it has been a glorious center of spiritual awakening, astronomical science, and poetic literature for millennia.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        As a prime meridian city of ancient Indian geographers and one of the rare four hosts of the monumental Simhastha Kumbh Mela, Ujjain radiates an undeniable cosmic and mystical energy.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-600">1 of 12</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Jyotirlingas</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">12 Years</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Kumbh Cycle</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Mahakaleshwar Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🔱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Mahakaleshwar & Bhasma Arti
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The soul of Ujjain. Home to the self-manifested, south-facing <span className="font-semibold">Mahakaleshwar Jyotirlinga</span>. Experience the mystical vibrations of the world-famous, early morning Bhasma Aarti that purifies the senses.
        </p>
      </div>

      {/* Card 2: Shipra Ghats & Sandhya Aarti */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🪔
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Ram Ghat & Sacred Waters
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Find serene moments at the iconic <span className="font-semibold">Ram Ghat</span>. As dusk settles, watch the river reflective banks light up beautifully with rows of brass lamps during the spectacular evening Shipra Aarti.
        </p>
      </div>

      {/* Card 3: Shree Mahakal Lok Corridor */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Grand Mahakal Lok
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk through a magnificent open-air museum. The newly built, ultra-modern <span className="font-semibold">Shree Mahakal Lok Corridor</span> features nearly 200 majestic murals and statues depicting the timeless lore of Shiva Purana.
        </p>
      </div>

      {/* Card 4: Ancient Astronomy & Culture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🌞
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Ved Shala & Academic Legacy
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A glorious center of cosmic calculation. Explore the 18th-century <span className="font-semibold">Jantar Mantar (Ved Shala)</span>, designed by Raja Jaisingh, which still computes precise planetary movements and solar eclipses.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-orange-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Ujjain is not just a geographical destination—it is a profound spiritual awakening. It merges legacy Vedic science with raw, intense devotion, offering every visitor an authentic glimpse into the timeless, cosmic heartbeat of spiritual India.
      </p>
    </div>
  </div>

</section>

          {/* 📊 INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-[2.5rem] border border-yellow-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-yellow-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-yellow-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-yellow-500" /> Must-Visit Temples
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🛕" bold="Mahakaleshwar" text="One of the 12 Jyotirlingas" />
                <AttractionItem emoji="🛕" bold="Kal Bhairav Temple" text="Iconic deity of Ujjain" />
                <AttractionItem emoji="🌊" bold="Kshipra River" text="Sacred river for rituals" />
                <AttractionItem emoji="🛕" bold="Harsiddhi Temple" text="Ancient spiritual site" />
              </ul>
            </motion.div>

            {/* Cultural Experiences */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2.5rem] border border-amber-100/50 shadow-sm relative overflow-hidden group"
            >
              <h2 className="text-2xl font-black text-amber-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-amber-500" /> Local Culture & Cuisine
              </h2>
              <div className="space-y-4">
                <CulinaryItem text="Traditional Malwa dishes" />
                <CulinaryItem text="Street food at Main Bazaar" />
                <CulinaryItem text="Festivals like Kumbh Mela" />
              </div>
            </motion.div>

            {/* Travel Info */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <Plane className="text-yellow-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Devi Ahilya Airport, Indore" />
                <TravelDetail icon={<Train />} label="Nearest Railway" value="Ujjain Junction" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Oct – Mar" />
                <TravelDetail icon={<MapPin />} label="From Bhopal" value="~190 KM (4 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-yellow-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSXED_LUFx6RTkuPmXPFBkujVkhXY7GAidXmIwHmJae4E2jpBEJuoKgHXUHMplLkNd-_7WKNMQsNTCDr1HEC_8ssrw&s=19", title: "Mahakaleshwar" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrQ2uaDztx0aXyn4c_Q9cnOt8dQiKI0qEqBN0zeUWPdgMw7rOmbYCKeTB61XXthfD846drAAB7G4zmjF2p6UjnfvcD_Ti2wNkirOjeKm03eLZ3I7iVbmGLRlIBV9clA7r7a8m5DY7uGOxf=w675-h390-n-k-no", title: "Kal Bhairav Temple" },
                { url: "https://images.trvl-media.com/place/8904/a2d05a53-2ff7-42d1-bcce-83cb12b4ee47.jpg", title: "Kshipra River" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTQxJIzpT51LyV53C-wC1L3wNfhV-8HLjHLiF469ZftRMHkgb25A1_mO2Qj-uVxHaxZC11ji43X8h4mYgQG6pU-Etk&s=19", title: "Harsiddhi Temple" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT6zggYNEBjmiIHwLlw_cIrZeXZXZquDb56BA1ZJeUIFinbzkC88OYDU43cCHTcjLjfVnpQptKRjFv1StmASgSDaFE&s=19", title: "Main Bazaar" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSopv-5yhK_XPIthIcI-WcVeFh2j3ZYEWGE6T6x9TeYXTKsobSa8xMYH2vfRfkOWhY8tqmoUewmQp8T3r0oB6xh3fo&s=19", title: "Ujjain Hills" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Ujjain - ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

// --- Reusable Components ---
const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-yellow-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const CulinaryItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-yellow-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-yellow-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-yellow-100">{value}</span>
  </div>
);

export default Ujjain;