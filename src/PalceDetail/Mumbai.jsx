import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Building2, Train, Camera, Sun, 
  Info, ExternalLink, Music, Utensils, Waves, 
  Navigation, Sparkles, Clock
} from "lucide-react";

const Mumbai = () => {
  const [activeTab, setActiveTab] = useState("history");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#a3e7ed] text-white selection:bg-yellow-500 selection:text-black">
      
      {/* 🏙️ HERO SECTION WITH PARALLAX & OVERLAY */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweobPhkL6Hf8ABMR_29sATaWv-3koSfTysGvDb_sckNw1lZlKqoZGPhof_zzmUVm1_KBZuVnQsXrgzAdceBPwQdSMikhYZIvCA2jiuvKLgxpuWiTtkKj6fmAimP-s-sYSrAaGSsRcJHUZK0W=w675-h390-n-k-no"
            alt="Mumbai Marine Drive"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#0a0a0a]" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 text-yellow-500 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6"
          >
            The Financial Heart of India
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-4 italic"
          >
            MUM<span className="text-yellow-500">BAI</span>
          </motion.h1>
          <motion.p className="text-gray-400 max-w-2xl text-lg font-medium">
            A kaleidoscopic blend of dreams, drama, and sea breezes. From colonial grandeur to Bollywood neon.
          </motion.p>
        </div>

        {/* Introduction Section: Mumbai */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-600 selection:text-white">

  {/* Advanced Radial Background Glows (Marine Horizon & Neon Skyline Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-amber-50 border border-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏙️</span> City Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
      Discover Mumbai
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The City of Dreams—a spectacular sea-facing megalopolis where magnificent Victorian Gothic spires rise alongside soaring skyscrapers and cinematic coastlines.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌊</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The High-Octane Pulse of India
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Mumbai, formerly Bombay, is a thrilling collection of seven islands seamlessly stitched into a high-speed financial and creative capital. Edged beautifully by the Arabian Sea, it is a place where old colonial history explicitly locks arms with India's global futures.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Home to Bollywood, the historic <span className="font-semibold">Koli fishermen</span>, and iconic seaside promenades, Mumbai runs on an unmatched, addictive collective spirit, proving that it never truly sleeps.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-indigo-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-indigo-600">5.6km</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Sea Link Span</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">No. 2</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Art Deco Hub globally</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Colonial Grandeur & Gateway */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Victorian Gothic & Gateway
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Gaze at architectural royalty. Walk the timeless streets of South Bombay to view the basalt basalt arcs of the <span className="font-semibold">Gateway of India</span> and the majestic, sprawling UNESCO-listed facades of Chhatrapati Shivaji Maharaj Terminus.
        </p>
      </div>

      {/* Card 2: Marine Drive & Skyways */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🌉
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Queen's Necklace Arc
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Trace the shining seaside rim. Catch a breathtaking sunset along the C-shaped <span className="font-semibold">Marine Drive</span> crescent, or cross the open sea at maximum speed via the towering architectural cables of the Bandra-Worli Sea Link.
        </p>
      </div>

      {/* Card 3: Elephanta Island Caves */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🗿
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Elephanta Cave Sanctums
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Sail back into prehistoric time. Take a scenic ferry ride across Mumbai Harbor to map out the spectacular 5th-century rock-cut temple caves of Elephanta Island, highlighting the iconic, colossal monolithic <span className="font-semibold">Sadashiva Trimurti</span> sculpture.
        </p>
      </div>

      {/* Card 4: Culinary Rituals - Cutting Chai & Vada Pav */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🍔
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Street Gastronomy Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Bite directly into real city culture. Indulge in hot, garlicky <span className="font-semibold">Vada Pav</span>, buttery Pav Bhaji, and sharp Cutting Chai at bustling Khau Gallis, or sample premium coastal seafood within legacy South Mumbai institutions.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-slate-950 via-indigo-950 to-amber-900 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-indigo-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Mumbai is an exhilarating coastal powerhouse. It flawlessly weaves the classic, structural romance of legacy ocean lookouts and heritage stone architecture with a relentless modern ambition, generating an infectious energy that leaves travelers completely awestruck.
      </p>
    </div>
  </div>

</section>

        {/* Floating Quick Stats */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 hidden md:grid grid-cols-4 gap-4">
          {[
            { label: "Population", val: "20M+" },
            { label: "Islands", val: "7 Merged" },
            { label: "Icon", val: "Bollywood" },
            { label: "Vibe", val: "Electric" }
          ].map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-center">
              <p className="text-[10px] text-gray-500 uppercase font-black">{s.label}</p>
              <p className="text-xl font-bold text-yellow-500">{s.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🗺️ INTERACTIVE CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Dynamic Tabs */}
          <div className="lg:col-span-7">
            <div className="flex gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
              {["history", "culture", "vibes"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    activeTab === tab 
                    ? "bg-yellow-500 text-black shadow-[0_0_30px_rgba(234,179,8,0.3)]" 
                    : "bg-white/5 text-gray-500 hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {activeTab === "history" && (
                  <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                      <Clock className="text-yellow-500" /> The 7 Island Legacy
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      Before the skyscrapers, there were seven volcanic islands. Gifted as dowry to King Charles II, Mumbai evolved from a fishing hamlet into the <span className="text-white font-bold">"Urbs Prima in Indis"</span> (First City of India). Every stone in South Mumbai tells a tale of British Raj, freedom struggles, and the rise of a global giant.
                    </p>
                  </div>
                )}
                {activeTab === "culture" && (
                  <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                      <Music className="text-pink-500" /> Bollywood & Beyond
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      Mumbai is the home of <span className="text-white font-bold">Indian Cinema</span>. It's a place where Ganesh Chaturthi drums echo in the same streets that host red-carpet galas. Its food culture ranges from the humble 5-rupee Vada Pav to Michelin-star dining, defining a true melting pot.
                    </p>
                  </div>
                )}
                {activeTab === "vibes" && (
                  <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                      <Waves className="text-blue-500" /> The Sea Breeze Life
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      Life in Mumbai is measured by the rhythmic rush of the <span className="text-white font-bold">Local Trains</span> and the evening calm at Marine Drive. It’s a city of contrasts: the glamour of Bandra vs. the historic soul of Fort.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Quick Info Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-10 space-y-6">
              <div className="bg-yellow-500 p-8 rounded-[3rem] text-black">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                  <Navigation size={24} /> Travel Kit
                </h3>
                <div className="space-y-4">
                  <InfoRow icon={<Sun size={18}/>} label="Best Visit" val="Nov – Feb (Winter)" />
                  <InfoRow icon={<Clock size={18}/>} label="Ideal Stay" val="4-5 Days" />
                  <InfoRow icon={<Utensils size={18}/>} label="Must Eat" val="Misal Pav, Keema" />
                  <InfoRow icon={<Sparkles size={18}/>} label="Experience" val="Night Safari" />
                </div>
                <button className="w-full mt-8 bg-black text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-900 transition-all">
                  Get City Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 📸 MASONRY GALLERY */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">The Mumbai <span className="text-yellow-500">Aesthetic</span></h2>
            <p className="text-gray-500">Glimpses of the maximum city through the lens.</p>
          </div>
          
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {[
              "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTXQaoorjuzEzY1-y8zTfKvXGCVEWWLKNRETOkSKVQCaxmgfEFJyPczVlr67L8M6nYyXHdWTbUZMis9E0MqzwljsRE&s=19",
              "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerfhlIx_zZFsK8Y__hWHbACOdkO9HpBKuXuXnsXM7UMx31Qu6c2s8hs1IwVUYVBuHOL0dHQTlxjMUpOFLv7Bwycm7jW7LfHB7OWk3JKqT05TdgbpwxRFsW0KRcxZ4e47DlBQ8M=w675-h390-n-k-no",
              "https://lh3.googleusercontent.com/gps-cs-s/AHVAwept1G0N4MjMK4JRa7j3B4n2cHOUx91HpzQxgVVL6o5yzGoXfwF4MaMYSeEmWp_ix0SgNXVlIz9joUlFK4loA51JCmM7ZAz9oJB25R-97DV-kppjsBRn2Phy01GzYrJARu_Ai5nj=w675-h390-n-k-no",
              "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRnqyz0vDJDFJCdhx6eL_kIEKcHGCAg6zRcvPOxMUrYU9bqhdYkZ5rfsRSqacz2xjetLzQhCKRCFqsD28-0JvELJvM&s=19",
              "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqFBQzv4UedwJCypmHHXWVZV5S2UbqVnmlgjHopUswU4GlY59jdFslFGtkSixWG1HU_bDIOopMTw147bRxCgyZOuPNeS223FMNA381B812n_-5Muxjo6J7l_XllYEfGoATIoC5MMg=w675-h390-n-k-no",
              "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQtHG_dkzAdT9jI5dih-lvyG6YT0Vt_ypilTsz2Aw1KJyFaHIynmBKkyfK6n11iNRHUK_RLeQcAXMsZYIFk45ehRNc&s=19"
            ].map((url, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[2.5rem] group border border-white/10"
              >
                <img src={url} alt="Mumbai" className="w-full h-auto  transition-all duration-700" />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-500 selection:text-white">

  {/* Advanced Radial Background Glows (Metropolitan Coastline & City Lights Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌊 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
      Best Time to Visit Mumbai
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect coastal city escape aligned with breezy winter sunsets and dramatic monsoon coffee loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-6 border border-indigo-100">
          🏙️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Maximum City Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Mumbai welcomes its most pleasant and comfortable travel loop from <span className="font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these winter months, the intense tropical humidity breaks down, replaced by cool sea breezes averaging a highly enjoyable 18°C - 30°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this ideal timeline, walking across the iconic <span className="font-semibold text-gray-900">Colaba Causeway</span>, catching sunset drives over the Bandra-Worli Sea Link, or taking ferry loops to Elephanta Caves feels completely effortless.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl border border-indigo-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-indigo-900 font-medium leading-relaxed">
          <strong className="text-indigo-950">Pro Tip:</strong> Want to witness the true emotional heartbeat of Mumbai? Plan your trip around late August or September to witness the grand <strong className="text-indigo-950">Ganesh Chaturthi</strong> festival, when the entire city erupts in massive cultural street loops and spectacular processions.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🍦
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
              Mild Winters (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The premium tourist cycle. Low humidity levels make it perfect for late-night Marine Drive walks, open-air music festivals, street-food exploration, and celebrity spotting.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Coastal Breeze
        </span>
      </div>

      {/* Season 2: Monsoon Drama */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Monsoon Romance (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Heavy, iconic downpours. While local trains encounter delays, watching massive ocean waves crash against the Worli Seaface with piping hot cutting chai is an irreplaceable vibe.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Marine Rains
        </span>
      </div>

      {/* Season 3: Summer Sultry Heat */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Summer Humidity (April – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Intense sticky humidity with mercury touching 35°C. Outdoor exploration triggers quick exhaustion, making it an excellent time to duck into premium air-conditioned malls, theaters, and luxury hotel bars.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Indoor Loops
        </span>
      </div>

    </div>
  </div>

</section>
{/* Best Hotels & Resorts Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-600 selection:text-white">
  
  {/* Coastal Heritage Background Glows (Arabian Sea Teal & Gateway Gold) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-amber-50 border border-cyan-100 text-cyan-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏙️ The Maximum City Stay Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
      Best Hotels & Luxury Resorts in Mumbai
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From legendary grand heritage hotels facing the Arabian Sea in South Bombay to ultra-modern sea-facing luxury towers in Bandra and Juhu.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Iconic Royal Heritage (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
            👑
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Colonial Grand Luxury
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          The Taj Mahal Palace & Historic South Bombay Hotels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience unrivaled colonial majesty by anchoring your stay near Colaba. Iconic architectural marvels like <span className="font-semibold text-gray-900">The Taj Mahal Palace</span> present rich Edwardian Moorish vaulted ceilings, legendary high-tea lounges, floating sea-facing balconies, and absolute front-row vistas of the historic Gateway of India framing the bay.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
        Moorish Grand Pillars & Signature Sea-View Butler Suites
      </div>
    </div>

    {/* Card 2: Queen's Necklace Art Deco Skyscrapes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          💎
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Marine Drive Skyline Panoramas
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Book breathtaking premium heights directly perched over Nariman Point or Marine Drive at luxury monoliths like <span className="font-semibold text-gray-900">The Oberoi</span>. Watch the entire C-shaped curve of the glowing street lamps glisten beautifully at midnight.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Panoramic Queen's Necklace Facing Glass Windows
      </div>
    </div>

    {/* Card 3: Coastal Suburban Beach Resorts */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-coral-500/30 shadow-lg hover:shadow-xl hover:shadow-coral-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏖️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Juhu & Bandra Elite Coastal Stays
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Unwind in the vibrant suburban heartlands near the golden stretches of Juhu Beach or Bandra West. Celebrated high-end boutique properties give you instant access to celebrity lanes, beachfront infinity decks, and premium open-air pools.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Beachfront Cocktail Lounges & Celebrity Neighborhood Circles
      </div>
    </div>

    {/* Card 4: High-Velocity Business Enclaves (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm">
            💼
          </div>
          <span className="text-xs font-bold bg-cyan-100/60 text-cyan-950 px-3 py-1 rounded-full uppercase tracking-wider">
            BKC Corporate Hub
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
          Bandra-Kurla Complex (BKC) Ultra-Luxury Atriums
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Perfect for modern executives and corporate delegations demanding frictionless premium logistics. Properties inside BKC like <span className="font-semibold text-gray-900">The Trident</span> feature massive, naturally lit architectural glass lobbies, automated smart suites, signature spa enclaves, and direct access to high-end consulates.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Helipad Transit Triggers & Automated Executive Smart Hubs
      </div>
    </div>

    {/* Card 5: Smart Airport Transit Pods */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ✈️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Chhatrapati Shivaji Terminal Airport Hotels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Optimized for quick international layovers. Sleek, hyper-soundproofed luxury airport hotels offer high-speed workstation terminals, premium breakfast bars, and rapid sky-bridge paths straight to Terminal 2 gates.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Soundproofed Glass Walls & Express Runway Overlooks
      </div>
    </div>

  </div>
</section>


{/* Restaurants & Cafes Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">
  
  {/* Culinary Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-950/5 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-cyan-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🦀 Butter-Garlic Crabs & Irani Chai
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
      Best Restaurants & Food Spots in Mumbai
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From iconic coastal seafood legends dripping in coastal butter-garlic masalas to nostalgic, bun-maska serving old Irani cafes.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Coastal Seafood Institutions (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🦀
          </div>
          <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Arabian Sea Catch
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
          Legendary Coastal Seafood Culinary Vaults
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor Mumbai’s undisputed crown jewel of seafood dining at iconic institutions like <span className="font-semibold text-gray-900">Trishna</span> or <span className="font-semibold text-gray-900">Mahesh Lunch Home</span> in Fort. These globally revered food halls dish out monumental platefuls of signature <span className="font-semibold text-gray-900">Butter Garlic Mud Crabs</span>, rich Mangalorean style Surmai tawa fries, and incredibly delicate, piping hot soft Neer Dosas dripping with thick coconut seafood curries.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
        Signature Butter Garlic Pepper Crabs & Crispy Bombil Platters
      </div>
    </div>

    {/* Card 2: Nostalgic Irani Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Vintage Parsi-Irani Café Icons
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Step right into old-world Bombay nostalgia at landmarks like <span className="font-semibold text-gray-900">Kyani & Co.</span> or <span className="font-semibold text-gray-900">Britannia & Co.</span> Gather around classic checkered tablecloths for sweet, aromatic Irani Chai paired with heavily buttered Bun Maska, famous berry pulavs, and authentic mutton dhansak.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Classic Bun Maska Plates & Rich Fragrant Berry Pulavs
      </div>
    </div>

    {/* Card 3: Elite High-End Global Bistros */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥂
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Colaba & BKC Modern Fine Dining
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience world-class culinary art inside beautifully converted warehouses or high-rises. Award-winning spots like <span className="font-semibold text-gray-900">The Bombay Canteen</span> present ultra-modern, highly creative reinventions of regional Indian dishes alongside state-of-the-art cocktail mixology.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Progressive Indian Gastronomy & Handcrafted Botanical Spritzers
      </div>
    </div>

    {/* Card 4: Street Food Havens & Pav Grills (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍔
          </div>
          <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Born In Bombay
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
          Hyper-Local Vada Pav & Pav Bhaji Street Hotspots
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Trace the pulsating soul of Mumbai’s fast-paced food grid. From the fiery, golden-fried garlic <span className="font-semibold text-gray-900">Vada Pav</span> hubs outside Kirti College to massive, butter-drenched tawa-fried <span className="font-semibold text-gray-900">Pav Bhaji</span> stalls like Sardar or Cannon, this is culinary performance art under blazing night lights.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Blazing Large-Tava Masalas & Spicy Fried Green Chillies
      </div>
    </div>

    {/* Card 5: Late Night Juices & Overstuffed Sandwiches */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥪
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Midnight Bombay-Toasted Sandwich Hubs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Dine right at the curb with massive multi-layered <span className="font-semibold text-gray-900">Bombay Grill Sandwiches</span>. Stacked with thinly sliced beets, potatoes, cucumbers, spicy mint chutney, and a mountain of shredded processed cheese, it's a legendary midnight comfort food.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Grilled Charcoal Multi-Decker Sandwiches & Fresh Seasonal Fruit Cream Bowls
      </div>
    </div>

  </div>

  {/* Travel Guide Tip Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600/10 via-cyan-600/5 to-transparent border border-orange-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-orange-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-orange-900 font-bold">Mumbai Local Mobility Tip:</strong> To beat Mumbai's heavy peak-hour road traffic between South Bombay and the Western Suburbs, leverage the iconic Local Train network or take the breathtaking **Atal Setu / Bandra-Worli Sea Link** highway lanes for a completely seamless, panoramic coastal transit layout!
      </p>
    </div>
  </div>

</section>

        {/* 🔗 FOOTER ACTION */}
        <div className="mt-32 text-center bg-white/5 p-16 rounded-[4rem] border border-white/10">
          <Sparkles className="mx-auto text-yellow-500 mb-6" size={48} />
          <h2 className="text-3xl font-black mb-6">Ready to Experience the Chaos?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="https://mumbaicity.gov.in/" target="_blank" className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 transition-all">
              Official Portal
            </a>
            {/* <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="bg-white/10 text-white px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white/20 transition-all">
              Back to Top
            </button> */}
          </div>
        </div>

      </div>
    </div>
  );
};

// Reusable Small Info Row
const InfoRow = ({ icon, label, val }) => (
  <div className="flex items-center justify-between border-b border-black/10 pb-3">
    <div className="flex items-center gap-2">
      <span className="opacity-60">{icon}</span>
      <span className="text-[10px] font-black uppercase tracking-wider opacity-60">{label}</span>
    </div>
    <span className="text-xs font-black">{val}</span>
  </div>
);

export default Mumbai;