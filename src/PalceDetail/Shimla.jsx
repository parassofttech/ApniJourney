import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee,Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Shimla = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-sky-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >
        {/* 🏔️ HERO SECTION - Cinematic Zoom */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTAMheFDLwFUgWS3f-NyNtnVuH45cGEwZ5tOEZ1BS6-SJ7ZsGCrl9FOSq_v1tVwcEzO_ql-XWiqowvDGPVPZ-weQUBt&s=19"
            alt="Shimla Hills"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          {/* Floating Tag */}
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Explore Himachal</span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          {/* Header Section */}
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-sky-950 tracking-tighter leading-none mb-6 italic"
            >
              Shimla
            </motion.h1>
            <p className="text-sky-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">The Queen of Hills</p>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Walk through the whispering pines and Victorian shadows. Shimla isn't just a destination; 
              it's a <span className="text-sky-900 font-bold italic">colonial dream</span> frozen in the Himalayan mist.
            </motion.p>
          </header>


          {/* Introduction Section: Shimla */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

  {/* Advanced Radial Background Glows (Heritage Raj-Era Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🚂</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Discover Shimla
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The timeless Queen of Hills, where majestic colonial heritage meets pine-scented mountain ridges.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-rose-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">👑</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Queen of Hills
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Shimla, the iconic capital of Himachal Pradesh, stands as a grand testament to natural beauty intertwined with rich British-era history. Once the summer capital of British India, it preserves its old-world charm effortlessly.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Stretching across a 12-kilometer ridge in the lower Himalayas, Shimla offers dynamic street vistas, pedestrian-only avenues, and a majestic backdrop of oak and deodar forests.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">2,205m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Altitude</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">UNESCO</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Toy Train Route</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Colonial Architecture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Colonial Architecture & History
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step back into the 19th century. From the magnificent, Scottish-baronial style <span className="font-semibold">Viceregal Lodge</span> to the Neo-Gothic architecture of Christ Church on The Ridge, history is etched in stone.
        </p>
      </div>

      {/* Card 2: The Ridge & Mall Road Vibe */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          🌇
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          The Mall Road Vibe
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A completely vehicle-free pedestrian paradise. Enjoy evening strolls on the bustling <span className="font-semibold">Mall Road</span>, explore local handicraft emporiums, or just relax on the wooden benches watching the sunset.
        </p>
      </div>

      {/* Card 3: Himachali Flavors */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🍲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Traditional Himachali Dham
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A true feast for your tastebuds. Dive into authentic Himachali cuisine with a slow-cooked festival meal called <span className="font-semibold">Dham</span>, sweet and savory Sepu Badi, and delicious street-side chana kulcha.
        </p>
      </div>

      {/* Card 4: Toy Train Magic */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🚂
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Kalka-Shimla Toy Train
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience a legendary fairy-tale journey. The UNESCO World Heritage narrow-gauge train chugs slowly through 103 dark tunnels, over 800 bridges, and past spectacular pine-covered valley bends.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-rose-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Shimla is a brilliant blend of colonial nostalgia, romantic misty walks, and vibrant mountain culture. It remains the perfect all-weather mountain escape that promises a vintage hill station experience you will cherish forever.
      </p>
    </div>
  </div>

</section>


    

          {/* 📊 INFO GRID - Advanced Bento Style */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Top Attractions */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-blue-50 to-sky-50 rounded-[2.5rem] border border-blue-100/50 shadow-sm relative overflow-hidden group"
            >
              <Landmark className="absolute -right-6 -top-6 text-blue-200/40 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-sky-900 mb-8 flex items-center gap-3  italic">
                <Compass className="text-sky-500" /> Legendary Landmarks
              </h2>
              <ul className="space-y-5">
                <AttractionItem emoji="🏞️" bold="The Ridge" text="Panoramic Himalayan skyline" />
                <AttractionItem emoji="🏛️" bold="Christ Church" text="Vintage Neo-Gothic soul" />
                <AttractionItem emoji="🚡" bold="Jakhoo Hill" text="Guardian Hanuman statue" />
                <AttractionItem emoji="🌸" bold="Mall Road" text="The heart of hill-culture" />
              </ul>
            </motion.div>

            {/* Adventure Section */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-sm relative overflow-hidden group"
            >
              <Snowflake className="absolute -right-6 -top-6 text-emerald-200/40 w-32 h-32 group-hover:scale-125 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3 italic">
                <Mountain className="text-emerald-500" /> Alpine Adventures
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between group/item cursor-default hover:bg-white transition-all">
                  <span className="font-bold text-slate-700">Skiing in Kufri</span>
                  <ArrowUpRight size={18} className="text-emerald-400 opacity-0 group-hover/item:opacity-100 transition-all" />
                </div>
                <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between group/item cursor-default hover:bg-white transition-all">
                  <span className="font-bold text-slate-700">Mountain Biking Trails</span>
                  <ArrowUpRight size={18} className="text-emerald-400 opacity-0 group-hover/item:opacity-100 transition-all" />
                </div>
                <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between group/item cursor-default hover:bg-white transition-all">
                  <span className="font-bold text-slate-700">Mashobra Forest Camping</span>
                  <ArrowUpRight size={18} className="text-emerald-400 opacity-0 group-hover/item:opacity-100 transition-all" />
                </div>
              </div>
            </motion.div>

            {/* Culture & Food */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2.5rem] border border-orange-100/50 shadow-sm"
            >
              <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3 italic">
                <Utensils className="text-orange-500" /> Culinary Heritage
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                From the spicy <span className="text-orange-700 font-bold">Himachali Dham</span> to a vintage coffee at the 
                <span className="text-orange-700 font-bold"> Indian Coffee House</span>, Shimla's food tells a story of royalty and warmth.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#Sidu", "#PahadiThali", "#SimlaTimes", "#Handicrafts"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-orange-400 border border-orange-100 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Travel Intel - Dark Glass Section */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden shadow-blue-900/20"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3 italic">
                <Plane className="text-sky-400" /> Travel Intel
              </h2>
              <div className="space-y-5">
                <TravelDetail icon={<Train />} label="The Toy Train" value="UNESCO Heritage Route" />
                <TravelDetail icon={<Plane />} label="Nearest Hub" value="Jubbarhatti Airport" />
                <TravelDetail icon={<Calendar />} label="Best Season" value="Oct – Feb (Snowfall)" />
                <TravelDetail icon={<MapPin />} label="From Delhi" value="~340 KM (7 hrs)" />
              </div>
            </motion.div>
          </div>

          {/* 📸 PREMIUM GALLERY */}
<section className="mt-28">
  <div className="flex items-center justify-between mb-14">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
      <Camera className="text-sky-500" /> Visual Escape
    </h2>
    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {[
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbcqncvHS2FGpyj2H42x66QQL9OZSkdQlhHWcQD8nXeKtmfSE9WLAIdEo_iexq1D9Mm5aTO1okxMGPhu3b_C3jmTRlMLNfqKsOv6KHXVKLyXIDE327OI9lKDS2JzSRtdhRUYT4=w675-h390-n-k-no",
    title: "The Ridge",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-TwYf2kw7QcA-feARujdCswlTUN7ZE2VxA&s",
    title: "Christ Church",
  },
  {
    url: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
    title: "Snow Covered Hills",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT26w-bCNNNc_X_UPmRNKt3jcldgFqIbu-8Kc7E4caSaDq3txzAuN33iIak2jTvN53SJhsydV51kSI2T0G-YpZ2XD4&s=19",
    title: "Valley Sunset",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSN45kh2-N8OPGK8XMVokSHJTxX-G25EVG8vyy2v74OyB49qqAAbfxT3PLucFKlXQ7o1o8Ir3XWs9CSu3hCaI2R4IEn&s=19",
    title: "Mall Road",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQb3vj83Fqw7C2VFlYJlztiHid3LrJPErxDWduBxqHm5gBsqZBjRTIuIfv0PVp9XNFR3ACMM3ZxpMdqyo8RQTbnUos&s=19",
    title: "Jakhoo Temple",
  },
].map((item) => (
  <motion.div
    key={item.title}
    whileHover={{ scale: 1.03 }}
    className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
  >
    <div className="w-full h-72 overflow-hidden">
      <img
        src={item.url}
        alt={`Shimla - ${item.title}`}
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
          Shimla • Himachal Pradesh
        </p>
      </div>
    </div>
  </motion.div>
))}
  </div>
</section>
          {/* 🚀 CALL TO ACTION */}
          <div className="mt-20 text-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://himachaltourism.gov.in"
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

// --- Reusable Modern Components ---

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all cursor-default">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-sky-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 group hover:border-sky-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-sky-400 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-sky-100">{value}</span>
  </div>
);

export default Shimla;