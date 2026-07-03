import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Plane, Train, Compass, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Majuli = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-yellow-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌊 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSikQ7Q2-4phXjJJMISPbho1z3hByTSpuWAoAeIphowKS545Z8Ss_IMDJAGcIMNUY81-FSjwDCULt5oUGLyW7XnkPs&s=19"
            alt="Majuli Island"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Assam
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
              Majuli
            </motion.h1>
            <p className="text-yellow-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The River Island Paradise
            </p>
            <div className="h-1.5 w-20 bg-yellow-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              The world’s largest river island, Majuli, floats gracefully on the Brahmaputra, 
              blending vibrant tribal culture, Satras, and serene landscapes into a unique experience.
            </motion.p>
          </header>

          {/* Introduction Section: Majuli Island */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

  {/* Advanced Radial Background Glows (Mystical Riverland & Sunset Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-amber-50 border border-sky-100 text-sky-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏝️</span> Cultural Heartland
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      Enchanting Majuli
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The World's Largest River Island—a floating oasis of absolute spiritual serenity, vibrant neo-Vaishnavite culture, and timeless tribal heritage nestled in the embrace of the Brahmaputra.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-sky-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🛶</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        A Soul-Stirring Cultural Floating Landscape
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Majuli, shaped by the shifting currents of the mighty Brahmaputra River in Assam, is a mesmerizing landscape where spirituality seamlessly blends with the natural rhythm of water. It stands proud as the cradle of Assamese civilization and the ultimate vibrant epicentre of the unique <span className="font-semibold">Neo-Vaishnavite movement</span>.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Accessible only via a scenic ferry ride, this shrinking paradise offers an escape into a simpler world. It is a place characterized by mist-covered rice fields, traditional stilt houses of the Mising tribe, and an artistic legacy that has been fiercely guarded for over five centuries.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-sky-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-sky-600">No. 1</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Largest River Island</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">500+ Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Living Art Legacy</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Monastic Satras */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
          🛕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Sacred Monastic Satras
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore historic monasteries like Kamalabari and Auniati. Immerse yourself in soul-stirring *Borgeet* recitations, elegant Sattriya classical dances, and the timeless philosophy of Saint Srimanta Sankardeva.
        </p>
      </div>

      {/* Card 2: Samaguri Mask Making */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
          🎭
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Handcrafted Mask-Making
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into the famous Samaguri Satra, where master artisans dedicate their lives to crafting intricate, lifelike mythological masks out of bamboo, clay, and cow dung for dynamic *Bhaona* folk dramas.
        </p>
      </div>

      {/* Card 3: Mising Tribal Heritage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
          🏡
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Mising Tribal Hamlets
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Cycle through peaceful villages to interact with the indigenous Mising tribe. Discover their beautifully raised bamboo stilt houses (*Sang Ghar*) and witness the intricate art of weaving *Mirizim* shawls.
        </p>
      </div>

      {/* Card 4: Sunset Countryside Cycling */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
          🚲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Sunset Trails & Country Boats
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Rent a bicycle to explore peaceful country trails, or rent a hand-paddled boat at sunset on the expansive wetlands to watch rare migratory birds settle against a dramatic, glowing golden horizon.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-sky-950 via-slate-900 to-amber-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-sky-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        Majuli isn't just a location to tick off a list; it is a profoundly slow-paced sensory experience. It challenges the rapid rush of the modern world, making it a dream destination for travelers looking for spiritual grounding, authentic folk art, and deep cultural immersion.
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
                <Compass className="text-yellow-500" /> Cultural Highlights
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🏯" bold="Satras" text="Neo-Vaishnavite monasteries" />
                <AttractionItem emoji="🎨" bold="Tribal Art" text="Mask-making and pottery" />
                <AttractionItem emoji="🌾" bold="Floodplains" text="Lush green paddy fields" />
                <AttractionItem emoji="🛶" bold="River Life" text="Majuli's floating charm" />
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[2.5rem] border border-amber-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Plane className="text-orange-500" /> Experiences
              </h2>
              <div className="space-y-4">
                <AdventureItem text="Boat Rides on Brahmaputra" />
                <AdventureItem text="Cycling Across the Island" />
                <AdventureItem text="Village Walks & Photography" />
              </div>
            </motion.div>

            {/* Culture */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] border border-green-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-green-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-green-500" /> Local Cuisine
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Taste authentic Assamese dishes like <span className="text-green-700 font-bold">pitha</span>, 
                <span className="text-green-700 font-bold">masor tenga</span>, and fresh river fish specialties.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#Satras", "#RiverIsland", "#MajuliVibes", "#AssamCulture"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-green-400 border border-green-100 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
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
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Jorhat Airport" />
                <TravelDetail icon={<Train />} label="Railway Access" value="Sibsagar Junction" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Nov – Mar" />
                <TravelDetail icon={<MapPin />} label="From Guwahati" value="~300 KM (6 hrs)" />
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
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSRzHvBvthkGKifT_elXixLliIIjRfwNk4yj3zGWShid9GPsPkCZTkJONfe8FuxLCUXHQjJJZYrqrAusm_QExwypTc&s=19", title: "Majuli Satras" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSIagVn8BeWFfhGxgNlxGTaDeSJNaiIqmIx7Oam_GN2tzELzD4aEHfvDHhTVRIusRKm0BoBFMPfs4tzGO2uvGa_fwI&s=19", title: "Brahmaputra River" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRxI4llH72NYhj_2PfmnoOJ3PtIpeu4Wi6db-dVcic0P1LpqLmqSnVECTMXQtce_A5zgpLz2eh7UC4IJff86-FSXj4&s=19", title: "Local Pottery" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSJS8UOHFzoxqbeiIuOUBdirX3u2_VfYAuFDBXhbDFbHuVEAD9rlwSt8YkY7ae8yls-mYdbU9p4JTUCI6CqqF4O51U&s=19", title: "Cycling Across Fields" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerM3K4puYdGwPdDjsIJrIz0XRfwOQzsLQMO7iFVvNV6nKLf5HY6UnDrxGniiNvQGHw35_tdP2B4IJwD3OoWLPNXbbFA0Nez2JmW4G6bpfO2hM17yd8q9CWLRqNMO8n6sTObxXUk=w675-h390-n-k-no", title: "Village Walks" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqLBqJ11gsnAs_gG5ELs_i8IozDHoLHHRiMKM1JBUmcZ6KOOfOcS64uup-Bpo_LUgR9aheGn4_TuQ7wv0qpsEjZdo7XzIfduGYsYqusWit0cH_1N2zL3N5XCfXnwasHasmbI00Y2Q=w675-h390-n-k-no", title: "River Life" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Majuli - ${item.title}`}
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

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-yellow-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-orange-400" />
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

export default Majuli;