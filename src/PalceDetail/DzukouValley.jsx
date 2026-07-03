import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const DzukouValley = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://static.toiimg.com/img/97834455/Master.jpg"
            alt="Dzukou Valley"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Nagaland
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
              Dzukou Valley
            </motion.h1>
            <p className="text-green-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The Hidden Gem of Northeast
            </p>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Nestled in the hills of Nagaland and Manipur, Dzukou Valley is famous for its 
              seasonal flowers, pristine meadows, and the serene Dzukou River.
            </motion.p>
          </header>

          {/* Introduction Section: Dzukou Valley */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

  {/* Advanced Radial Background Glows (Alpine Mist & Wild Lily Trails Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-purple-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🥾</span> Adventure Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Dzukou Valley
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Valley of Celestial Shadows—a surreal, high-altitude dreamscape of endless rolling green topography, hidden caves, and mist-choked seasonal blooms.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏔️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Hidden Eden of the Northeast
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Dzukou Valley, perched majestically at an altitude of 2,452 meters behind the Japfü Peak on the border of Nagaland and Manipur, is one of India's most breathtaking wilderness treasures. Completely untouched by commercial roads, this volcanic crater basin is famed for its uniquely sculpted, velvet-green knolls that resemble rolling ocean waves.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Accessible only by an exhilarating trek through dense mossy forests, the valley floor is sliced by two crystal-clear rivers—the Dzukou and Japfü. It is globally celebrated for its stark, otherworldly eco-isolation and the legendary, endemic <span className="font-semibold">Dzukou Lily</span>.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">2,452m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Base Elevation</p>
        </div>
        <div className="bg-purple-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-purple-600">Endemic</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Dzukou Lily Blooms</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The Wave-Like Topography */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          ⛰️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Misty Velvet Knolls
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Gaze at a landscape unlike any other on earth. The valley's completely unique, continuous rolling green hills are sculpted with geometric precision, throwing dramatic shadows as clouds drift rapidly across the basin.
        </p>
      </div>

      {/* Card 2: The Endemic Dzukou Lily */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          🌸
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          The Pink Lily Monsoon
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Time your trek with the summer rains. During the peak blooming season of June and July, the valley floor transforms into a surreal canvas of white and pink, blanketed by the rare, endemic <span className="font-semibold">Lilium chitrangadae</span>.
        </p>
      </div>

      {/* Card 3: Razor Edge Trekking Routes */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🧗‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Viswema & Jakhama Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Earn your vistas. Trek through the steep stone stairs of Jakhama or negotiate the high, muddy bamboo brush paths of Viswema, navigating a dense primeval canopy that breaks open into the vast rim of the valley.
        </p>
      </div>

      {/* Card 4: Off-Grid Star Gazing & Caves */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🌌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Glacial Streams & Night Skies
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Camp completely off the grid. Pitch tents near the freezing natural rock shelters, dip your feet in the crystal streams, and experience absolute cosmic clarity with unpolluted views of the Milky Way.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-purple-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Dzukou Valley is a pristine alternative reality for hardcore trekkers and design-forward slow travelers. It completely eliminates modern noise, offering raw geographical beauty, crisp mountain currents, and a therapeutic stillness that redefines eco-adventure.
      </p>
    </div>
  </div>

</section>

         

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-green-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://roytellstales.com/wp-content/uploads/2020/01/IMG_20191210_1600370001-scaled.jpg", title: "Dzukou Blooms" },
                { url: "https://roytellstales.com/wp-content/uploads/2020/01/unexplored-northeast-LttRy5IZ-RA-unsplash.jpg", title: "Valley View" },
                { url: "https://cdn1.tripoto.com/media/filter/tst/img/2123218/Image/1686820194_camping_in_dzukou_the_outdoor_backpacker.jpg.webp", title: "Camping Site" },
                { url: "https://i.redd.it/lqic36uc0y6b1.jpg", title: "River Flow" },
                { url: "https://media.assettype.com/homegrown%2Fimport%2Fbook%2F11304-fvqdlqgivs-1558087647.jpg?w=480&auto=format%2Ccompress&fit=max", title: "Sunrise Hills" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bHbfCQ1CJUUSIJdCuhrNWVjMpo6SU37xIA&s", title: "Valley Trek" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Dzukou Valley - ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

  {/* Advanced Radial Background Glows (Celestial Valley & Floating Cloud Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ⛰️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Best Time to Visit Dzukou Valley
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your ultimate northeastern trekking loop aligned with emerald summer slopes, rare endemic flower blooms, or frost-covered winter horizons.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
          🌸
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Highland Blooming Cycles
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Dzukou Valley shifts its magic across two distinct peak windows: <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">June to September</span> for intense lush greenery and rare flower blooms, and <span className="font-bold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded-md">October to March</span> for completely clear crisp views. Sitting at 2,452 meters, the day weather stays incredibly pleasant while winter nights frequently dive near freezing points.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these pristine blocks, ascending the steep trails from <span className="font-semibold text-gray-900">Viswema or Jakhama villages</span>, walking through the completely flat dwarf-bamboo carpet loops, or exploring natural caves near freezing streams feels like stepping onto another planet.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
          <strong className="text-emerald-950">Pro Tip:</strong> Want to catch the exclusive pink and white blanket across the landscape? Target the monsoon onset from <strong className="text-emerald-950">late June to mid-July</strong>. This is the precise window when the endemic, ultra-rare <strong className="text-rose-950">Dzukou Lily</strong> blooms across the riverbeds, offering an unforgettable sight despite occasional light showers.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Emerald Rain & Blooms */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌿
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Lush Monsoon & Lily Blooms (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The valley turns an unbelievable shade of neon green. While the trekking trails require good physical grip due to rain mud, the mist-laden slopes and exploding flower fields make it the most iconic season.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Lush Peak
        </span>
      </div>

      {/* Season 2: Crystal Blue Autumn */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-cyan-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-cyan-700 transition-colors duration-200">
              Clear Autumn Skylines (October – November)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The rains exit completely, giving way to bright golden sunshine and flawless horizon loops. The absolute prime time for stargazing and setting up outdoor valley campsites.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-cyan-100/70 text-cyan-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Perfect Skies
        </span>
      </div>

      {/* Season 3: Frosty Deep Winter */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ❄️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
              Frozen Crisp Winters (December – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The valley floor switches to pale brown hues, and early morning frost completely freezes the running riverbeds. Perfect for adventurers chasing cold alpine nights and crisp sunny mornings.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Frozen Slopes
        </span>
      </div>

    </div>
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
    <ArrowUpRight size={18} className="text-green-400" />
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

export default DzukouValley;