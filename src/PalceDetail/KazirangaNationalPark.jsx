import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Plane, 
  Train, Compass, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar, Trees
} from "lucide-react";

const KazirangaNationalPark = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌿 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://bigcatsindia.com/wp-content/uploads/2024/10/big-five-kaziranga.webp"
            alt="Kaziranga National Park"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
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
              className="text-5xl md:text-8xl font-black text-green-950 tracking-tighter leading-none mb-6 italic"
            >
              Kaziranga
            </motion.h1>
            <p className="text-green-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Land of the One-Horned Rhino
            </p>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              A breathtaking wildlife sanctuary where tall elephant grass, wetlands,
              and dense forests protect rare species in their natural habitat.
            </motion.p>
          </header>

          {/* Introduction Section: Kaziranga */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-700 selection:text-white">

  {/* Advanced Radial Background Glows (Wild Floodplains & Swamp Mist Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-lime-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-lime-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🦏</span> Wildlife Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Kaziranga
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Untamed Sanctuary—a magnificent UNESCO World Heritage frontier where prehistoric giants roam freely across the sprawling, mist-veiled tall grasslands of Assam.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌿</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Last Stronghold of Prehistoric Giants
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Kaziranga National Park, located along the fertile floodplains of the mighty Brahmaputra River in Assam, stands as one of the world's most successful wildlife conservation epics. Sprawling across a dense expanse of tall elephant grass, marshy swamps, and tropical moist forests, it is a landscape frozen in deep evolutionary time.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        As a prized <span className="font-semibold">UNESCO World Heritage site</span>, Kaziranga proudly protects the global majority of the vulnerable Great Indian One-Horned Rhinoceros. It also boasts an incredibly high density of royal Bengal tigers, wild water buffaloes, and majestic swamp deer.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">2,400+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">One-Horned Rhinos</p>
        </div>
        <div className="bg-lime-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-lime-600">UNESCO</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Heritage Status</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The One-Horned Rhino Legacy */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🦏
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Monolithic Rhino Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Witness a true conservation miracle up close. Watch these armor-plated, prehistoric giants graze peacefully alongside riverine lakes, dominating a landscape they have safely claimed for centuries.
        </p>
      </div>

      {/* Card 2: Open-Top Jeep Safaris */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-lime-300 shadow-md hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-lime-50 flex items-center justify-center text-xl font-bold text-lime-600 mb-5 group-hover:bg-lime-600 group-hover:text-white transition-all duration-300">
          🤠
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-lime-700 transition-colors duration-200">
          Deep-Range Jeep Safaris
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Traverse diverse ecological zones. Venture deep into the Central, Western, or Eastern ranges in an open-top 4x4, tracking elusive Bengal tigers, wild elephants, and wild water buffaloes through dense timber tracks.
        </p>
      </div>

      {/* Card 3: Dawn Mist Elephant Exploration */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🐘
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Misty Elephant Meadows
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Catch the park at golden hour. Watch massive herds of Asian elephants emerge from the towering, morning-mist-shrouded <span className="font-semibold">elephant grass</span> fields as the sun crests over the horizon.
        </p>
      </div>

      {/* Card 4: Birdwatcher's Wetland Paradise */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🦅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Avian Beels & Swamps
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore an Important Bird Area (IBA). The park's numerous seasonal water bodies (<span className="font-semibold">beels</span>) host thousands of migratory waterbirds, pelicans, fishing eagles, and the rare Bengal florican.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-lime-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Kaziranga is a dramatic cinematic spectacle of raw wildlife resilience. It perfectly balances the deep, primeval stillness of its swampy wilderness with the pure, heart-racing thrill of dynamic safari encounters—making it an absolute bucket-list destination for serious wilderness explorers.
      </p>
    </div>
  </div>

</section>

          {/* 📊 INFO GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] border border-green-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-green-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-green-900 mb-8 flex items-center gap-3 italic">
                <Compass className="text-green-500" /> Wildlife Highlights
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🦏" bold="One-Horned Rhino" text="Largest population in the world" />
                <AttractionItem emoji="🐅" bold="Royal Bengal Tiger" text="High tiger density reserve" />
                <AttractionItem emoji="🐘" bold="Asian Elephants" text="Wild herds roaming freely" />
                <AttractionItem emoji="🦅" bold="Bird Paradise" text="Home to 450+ bird species" />
              </ul>
            </motion.div>

            {/* Adventure */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3 italic">
                <Mountain className="text-emerald-500" /> Safari Experiences
              </h2>
              <div className="space-y-4">
                <AdventureItem text="Jeep Safari Adventure" />
                <AdventureItem text="Elephant Safari Ride" />
                <AdventureItem text="Bird Watching Tours" />
              </div>
            </motion.div>

            {/* Culture */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2.5rem] border border-orange-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-orange-500" /> Local Culture
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Experience Assamese hospitality, traditional Bihu dance,
                and local cuisine like fish curry and pitha.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#RhinoLand", "#BihuVibes", "#WildlifeSafari", "#AssamTourism"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-orange-400 border border-orange-100 uppercase tracking-widest">
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
                <Plane className="text-green-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Plane />} label="Nearest Airport" value="Jorhat Airport" />
                <TravelDetail icon={<Train />} label="Railway Access" value="Furkating Junction" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Nov – Apr" />
                <TravelDetail icon={<MapPin />} label="From Guwahati" value="~220 KM (4 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-green-500" /> Visual Safari
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://www.kaziranga-national-park.com/blog/wp-content/uploads/2025/07/Rhino-Conservation-Success-Story.jpg", title: "One Horned Rhino" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6f0ztws2yogJQQ0cpFTmcVPRo6isy1PNUfg&s", title: "Elephant Herd" },
                { url: "https://res.cloudinary.com/roundglass/image/upload/v1726570023/rg/collective/media/assam-kaziranga-juvenile-tusker-elephant-rhino-background-dhritiman-mukherjee_i6zpln.jpg", title: "Safari Jeep" },
                { url: "https://www.savaari.com/blog/wp-content/uploads/2024/08/Kaziranga-National-Park.webp", title: "Wetlands" },
                { url: "https://etimg.etb2bimg.com/thumb/msid-121282833,width-1200,height-900,resizemode-4/.jpg", title: "Grasslands" },
                { url: "https://static2.tripoto.com/media/filter/tst/img/2052458/TripDocument/1620756281_kaziranga.jpg", title: "Tiger Reserve" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt="Kaziranga "
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
      <b className="text-green-900 font-black tracking-tight">{bold}:</b> {text}
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
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-green-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-green-100">{value}</span>
  </div>
);

export default KazirangaNationalPark;