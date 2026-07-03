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
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
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
{/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-500 selection:text-white">

  {/* Advanced Radial Background Glows (Snowy Ridge & Colonial Heritage Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ❄️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
      Best Time to Visit Shimla
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect colonial hill escape aligned with fresh snowfall windows and pleasant summer loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-6 border border-indigo-100">
          🏔️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Queen of Hills Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Shimla features two premium travel windows: the pleasant summer escape from <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">March to June</span> with comfortable days around 15°C - 30°C, and the magical winter snow wonderland from <span className="font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-md">December to February</span> when temperatures plummet to freezing lows.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these peaks, the historic <span className="font-semibold text-gray-900">Mall Road</span> circuit, The Ridge, and the snow-laden slopes of Kufri come alive with ice skating loops, colonial heritage walks, and busy local bazaars.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl border border-indigo-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-indigo-900 font-medium leading-relaxed">
          <strong className="text-indigo-950">Pro Tip:</strong> Want to capture crisp, clear views of the snow-capped Himalayas without the crazy summer or winter crowds? Book your trip during the golden autumn months of October and November.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Snow Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛄
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
              Winter (December – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The high white season. Prime time for catching live snowfall, skiing loops in Kufri, exploring Christ Church under frost, and enjoying the open-air Ice Skating Rink.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Snow Magic
        </span>
      </div>

      {/* Season 2: Summer Escape */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Summer (March – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Pleasant mountain climate. Ideal for riding the legendary Toy Train, trekking through pine forests, and escaping the intense heatwaves of the plains.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Peak Holiday
        </span>
      </div>

      {/* Season 3: Monsoons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Monsoon (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Heavy mountain downpours with dense rolling fog. Landslide margins close major highway loops, but it offers deep emerald greens and heavy luxury resort discounts.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Monsoon Fog
        </span>
      </div>

    </div>
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