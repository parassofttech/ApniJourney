import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Snowflake,
  Camera,
  Plane,
  Train,
  Calendar,
  ArrowUpRight,
  Utensils,
  Compass,
  Landmark,
  CloudSun
} from "lucide-react";

const Gangtok = () => {
  return (
    <div className="min-h-screen bg-[#f3f8ff] py-12 px-4 sm:px-8 font-sans selection:bg-indigo-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >
        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQTnQW_Y-ihZnf70MkQNBtnVKTOiiu2jBXUNZ0_f54-si_CkrUHCDN9aHpiUgN5GdKa9va0TKQCGX6LGqpJYu6t1aY&s=19"
            alt="Gangtok Mountains"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Eastern Himalayas
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
              className="text-5xl md:text-8xl font-black text-indigo-950 tracking-tighter leading-none mb-6 italic"
            >
              Gangtok
            </motion.h1>
            <p className="text-indigo-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Gateway to Sikkim
            </p>
            <div className="h-1.5 w-20 bg-indigo-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Wrapped in clouds and prayer flags, Gangtok blends 
              <span className="text-indigo-900 font-bold italic"> Buddhist serenity</span> 
              with Himalayan adventure.
            </motion.p>
          </header>

          {/* Introduction Section: Gangtok */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-700 selection:text-white">

  {/* Advanced Radial Background Glows (Himalayan Ridges & Monastic Gold Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-rose-900/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-sky-50 border border-rose-100 text-rose-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏔️</span> Alpine Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Discover Gangtok
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Cloud-Kissed Ridge—a pristine, high-altitude sanctuary where ancient Buddhist prayer wheels spin against the dramatic backdrop of the mighty Khangchendzonga.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-rose-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏮</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Capital Above the Clouds
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Gangtok, rising beautifully at an elevation of 1,650 meters along a dramatic cloud-swept ridge in Sikkim, stands as a beacon of clean, organized, and culturally rich mountain living. Translating directly to "Hill Top" in the local tongue, it has evolved from an ancient silk-route trading post into a hyper-clean, pedestrian-first highland escape.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Enveloped by rare orchid sanctuaries, misty rhododendron trails, and continuous vistas of the world's third-highest peak (<span className="font-semibold">Mt. Khangchendzonga</span>), Gangtok effortlessly pairs sharp modern infrastructure with deep, timeless Tibetan Buddhist mysticism.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-700">1,650m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Highland Altitude</p>
        </div>
        <div className="bg-sky-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-sky-600">8,586m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Khangchendzonga Peak</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Rumtek Monastery */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-700 mb-5 group-hover:bg-rose-700 group-hover:text-white transition-all duration-300">
          ☸️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          The Dharma of Rumtek
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into absolute spiritual symmetry. Perched on a hill facing Gangtok, the 16th-century <span className="font-semibold">Rumtek Monastery</span> serves as a world-renowned seat of Tibetan Buddhism, filled with priceless gold reliquaries and ancient murals.
        </p>
      </div>

      {/* Card 2: MG Marg Promenade */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🚶‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          MG Marg Boulevard
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stroll through India's premier smoke-free, litter-free pedestrian promenade. Lined with European-style benches, vibrant mountain cafes, and traditional handicraft boutiques, it is the beating urban heart of the capital.
        </p>
      </div>

      {/* Card 3: Nathu La Pass & Tsomgo Lake */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🏔️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Glacial Lakes & Silk Routes
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Ascend to frozen heights. Take a breathtaking drive to the sacred, oval-shaped <span className="font-semibold">Tsomgo (Changu) Lake</span>, which reflects changing mountain colors, and proceed further to the historic Indo-China border at Nathu La Pass.
        </p>
      </div>

      {/* Card 4: Gangtok Ropeway Aerial Vistas */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🚡
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Sky-High Ropeway
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Glide silently over mountain crevices. This premium zig-zag cable car ride offers a dramatic bird's-eye view of the cascading city grid, deep green valleys, and mist-veiled hills sprawling far below.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-rose-950 via-slate-900 to-sky-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-rose-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Gangtok is a brilliantly sophisticated Himalayan gateway. It seamlessly bridges the deep, monastic silence of ancient chanting halls with the modern culinary energy of its cafes and clean, alpine nature trails—making it an absolute crown-jewel experience for Northeast expeditions.
      </p>
    </div>
  </div>

</section>

          

          {/* GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-indigo-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqYtGv2LZ-OwcEnstbcijPD04YyCkfPSHs2NqRF1mdPyrvJ7AZRbCh3loIpQOUJdRiGk5oyJEgb465hgEiE4kZdVIO-7-DrEoyjPfEnTwsjBJ4TLxk-bmuCCxlXCKWM-SuzKvyU=w675-h390-n-k-no", title: "Tsomgo Lake" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSHxMevBWsBuBN3unb_QIHrLf-pRbqyBXIJLc02cbTkgxw5pdFlawykJKjVcaF057nYTotTByo8TCRs_1awT1AV71k&s=19", title: "Gangtok Hills" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepgznslt966R1plHXuFz12le0TL9UrfHrPVoKAnlh3F2ODGAj9aPLvl3y7yMNscsZkbgc7gUFx9CnkY0g5fZ4seGSduZ7U0s1jtpcdhXQn2i9OhN4gX7Ucr3zbYvUlirmz8Wlft=w675-h390-n-k-no", title: "Rumtek Monastery" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ0E5w5trotmFiXnnHPqtxLE3GA54Fvz0hA5Qap0RZl_3Tz1wxKVzCCQsX2oMXQW1lbZOvp3ie4uKnT4lDsyqAkRYI&s=19", title: "Nathula Pass" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoFqytVLmlgdM6hCS1IT9Zo72n13MYmJ27ZX70vDrwJAOYyEeNwwWtcQ1Fg_p5UWipZsuam517Mi_W3dvKJu-ohgHqH8RNdA8WXjKghKFC-4wyUvZ0KNSVHDpgRmjWOKdEpyZyv=w675-h390-n-k-no", title: "MG Marg" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqTb_rehkg29sW72ss2BMA508FrGFnszh3WJhd2-10I9NOJPCzDciysqeEt9yPpKPIFFo8nYp_y4gkSdWBHtTSHelR32yXhR8TFw_XfJG5ChNWAGLhrBcm1NS-GnN__3hBsS8D90g=w675-h390-n-k-no", title: "Himalayan Sunrise" },
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
                      <p className="text-white/70 text-sm">Gangtok • Sikkim</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-500 selection:text-white">

  {/* Advanced Radial Background Glows (Himalayan Mist & Glacial Horizon Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ⛰️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
      Best Time to Visit Gangtok
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect Eastern Himalayan retreat aligned with crisp snow-bound winters, vibrant spring orchid blooms, or clear peak horizons.
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
          The Dual Himalayan Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Gangtok offers two premium tourist cycles: <span className="font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-md">March to May</span> for a vibrant spring and <span className="font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">October to mid-December</span> for crisp winter skies. During these peak windows, temperatures hover comfortably between 10°C and 22°C, escaping the harsh sub-zero freeze while offering maximum accessibility.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these clear blocks, driving up to the high-altitude <span className="font-semibold text-gray-900">Tsomgo Lake</span> and Baba Mandir, walking along the car-free loops of MG Marg, or catching sunrise panoramas over Mt. Kanchenjunga feels absolutely surreal.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl border border-indigo-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-indigo-900 font-medium leading-relaxed">
          <strong className="text-indigo-950">Pro Tip:</strong> Looking to see heavy snow? Target late December to February. While high-altitude permits to Nathu La Pass often get blocked due to thick snow accumulation, the frozen loops of Tsomgo Lake offer an unbelievable winter-wonderland experience.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Autumn Horizon */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🍁
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
              Clear Autumn Peaks (October – December)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The grand post-monsoon cycle. The atmosphere clears up completely, offering the absolute sharpest, unobstructed view loops of snow-capped Himalayan ranges.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Crystal Views
        </span>
      </div>

      {/* Season 2: Spring Blooms */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌸
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Vibrant Spring & Flowers (March – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              As snow melts, rhododendrons and exotic orchids erupt across the valleys. Beautiful, pleasant daytime climate—perfect for exploring Rumtek Monastery.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Valley Blooms
        </span>
      </div>

      {/* Season 3: Monsoon Rains */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Heavy Monsoon Phase (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The mountain terrain receives intense rainfall, often resulting in landslides and road closures along the Teesta River loops. Avoid heavy travel during this period.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Unstable Zone
        </span>
      </div>

    </div>
  </div>

</section>

          {/* CTA */}
          <div className="mt-20 text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.sikkimtourism.gov.in"
              className="inline-flex items-center gap-4 bg-indigo-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:bg-indigo-700 transition-all"
            >
              Explore Gangtok <ArrowUpRight size={20} />
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
      <b className="text-indigo-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl font-bold text-slate-700 hover:bg-white transition-all">
    {text}
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-indigo-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-indigo-100">{value}</span>
  </div>
);

export default Gangtok;