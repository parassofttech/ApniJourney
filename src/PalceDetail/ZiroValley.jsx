import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Camera,
  Plane,
  Train,
  Calendar,
  ArrowUpRight,
  Utensils,
  Compass,
  Trees,
  Music,
  Sunrise
} from "lucide-react";

const ZiroValley = () => {
  return (
    <div className="min-h-screen bg-[#f4fbf6] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >
        {/* 🌾 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSNpNnPTtG4IT3_dVGpPGTA5hZibNOJza-3hxrvXurh_sUWSoIo9St36NewqWFOoeWkQIvAbYf7H73LRBCZSIbCAwE&s=19"
            alt="Ziro Valley"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Arunachal Pradesh
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
              className="text-5xl md:text-8xl font-black text-green-950 tracking-tighter leading-none mb-6 italic"
            >
              Ziro Valley
            </motion.h1>
            <p className="text-green-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Land of Apatani Tribe
            </p>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              A peaceful emerald bowl tucked in the Eastern Himalayas,
              Ziro Valley is where pine forests meet tribal heritage and
              music flows under open skies — a true
              <span className="text-green-900 font-bold italic"> hidden paradise</span>.
            </motion.p>
          </header>

          {/* Introduction Section: Ziro Valley */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

  {/* Advanced Radial Background Glows (Mystical Eco-Valley Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌾</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Ziro Valley
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      A breathtaking, high-altitude plateau where ancient tribal heritage thrives amidst misty pine forests and golden terrace fields.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏞️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The UNESCO Heritage Soul of Lower Subansiri
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Ziro Valley, nestled peacefully in the mountain ranges of Arunachal Pradesh at an elevation of 1,500+ meters, is a surreal escape forgotten by time. It is a stunning layout of flat, lush agricultural wetlands enclosed by majestic pine-clad ridges.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Home to the historically rich <span className="font-semibold">Apatani Tribe</span>, Ziro is celebrated globally for its exemplary eco-friendly, sustainable co-existence models and its legendary under-the-stars independent music culture.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">1,500m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Elevation</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">UNESCO</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Tentative List</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Ancient Apatani Culture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🛖
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Indigenous Apatani Tribe
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Encounter one of India's most fascinating communities. Known for their intricate facial tattoos and iconic bamboo nose plugs (Yaping Hullo), the elder Apatanis hold deep, nature-worshipping animist beliefs.
        </p>
      </div>

      {/* Card 2: Sustainable Wet Rice-Fish Cultivation */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🌾
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Terraced Paddy & Fish Farming
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Marvel at the brilliant terrace layouts. The valley utilizes a unique indigenous system where fish are reared simultaneously inside flooded rice fields, perfectly managing the eco-system without any modern machinery.
        </p>
      </div>

      {/* Card 3: Ziro Music Festival */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          🎸
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          Ziro Festival of Music
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The Woodstock of India. Every autumn, music lovers from across the globe trek to the valley for the <span className="font-semibold">Ziro Music Festival</span>, an eco-friendly outdoor fest built entirely out of locally sourced bamboo.
        </p>
      </div>

      {/* Card 4: Pine Groves & Treks */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🌲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Misty Trails of Talley Valley
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore boundless nature trails. Trek through the dense, cloud-kissed heights of the nearby <span className="font-semibold">Talley Valley Wildlife Sanctuary</span>, home to endangered clouded leopards, rare bamboo species, and wild orchids.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-emerald-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Ziro Valley is a slow-travel dreamscape. It offers a rare window into an ancient, deeply sustainable lifestyle, wrapped completely in towering blue pines and misty horizons, making it a soothing antidote to the frantic pace of the modern world.
      </p>
    </div>
  </div>

</section>

          

          {/* GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-green-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSOEZOAuXJEU4z54yFPdGKAovu23LqBabMYZ08JsMush2o6flF-jnexbgk1f3cLLaRf7i5uQIlHRzapC-_JwNRNfaSt&s=19", title: "Ziro Paddy Fields" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRnVqNoNVmjAbOvrtAQJNGmVOGcjBfLDlQrjh1BzDVlwF45A3dbXh7tycaLvWPpU8J2uUVtDuSGlyGYuQTOMPDNYZY&s=19", title: "Talley Valley Forest" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQIAjpOgKguUxHoyf6U7pKCZLuVGw7sW1CZeNZZhze0kJveNOxqPGFo_5ashI3pVVsIEtzOl-xUl5WwJxjPJYwHcpz7&s=19", title: "Himalayan Sunrise" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQbW_dkK036YYu_hX2gIgkFoj8y_qqTU9LJcwpq_VvrqKYP_fhevNhnN1wR8aiXUjLu6KqhZQsCm6HqFMvdzCfEofw&s=19", title: "Tribal Village" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQhzh12pdCl1fteEtadyEzqz9d7dI_6DkxLHV6uTfif-y0eno9sGgpcm5pdBKYeFpDy2Cy1gsYp0vza46lPqV4oG1s&s=19", title: "Pine Hills" },
                { url: "https://meanderwander.com/wp-content/uploads/2020/09/Ziro-Festival-of-Music.jpg", title: "Festival Nights" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt="Zero Velley"
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      {/* <h3 className="text-white text-xl font-bold">{item.title}</h3> */}
                      <p className="text-white/70 text-sm">Ziro Valley • Arunachal Pradesh</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-500 selection:text-white">

  {/* Advanced Radial Background Glows (Indigenous Valley & Musical Mist Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-violet-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌾 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Best Time to Visit Ziro Valley
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect northeastern high-altitude escape aligned with pristine green summers, golden harvest fields, and iconic music loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6 border border-emerald-100">
          🛖
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Plateau Harvest Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Ziro Valley boasts a remarkably soothing, pleasant climate across two key loops: <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">March to May</span> (spring blooms) and <span className="font-bold text-violet-700 bg-violet-50 px-1.5 py-0.5 rounded-md">October to November</span> (autumn golden harvest). Temperatures hover cleanly between 15°C and 25°C, keeping outdoor exploration exceptionally refreshing.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these pristine blocks, exploring the unique sustainable farming patterns at <span className="font-semibold text-gray-900">Hong Village</span>, understanding the deep cultural loops of the tattooed Apatani tribe elders, or trekking up Kile Pakho ridge feels deeply transcendental.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-violet-50 rounded-2xl border border-emerald-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">🎸</span>
        <p className="text-xs md:text-sm text-emerald-900 font-medium leading-relaxed">
          <strong className="text-emerald-950">Pro Tip:</strong> Looking for the ultimate independent cultural vibe? Pack your bags for late September to catch the legendary outdoor <strong className="text-emerald-950">Ziro Festival of Music</strong>. The entire valley fills up with global indie artists, camping setups under the stars, and cool rain-washed pine horizons.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Golden Autumn & Festival */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-violet-300 shadow-sm hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-violet-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌾
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-violet-700 transition-colors duration-200">
              September Music & Golden Harvest (Sep – November)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The valley transforms completely from lush green to a glittering golden yellow just before the rice harvest. Perfect weather for cultural village strolls and open-air musical loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-violet-100/70 text-violet-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Harvest Peak
        </span>
      </div>

      {/* Season 2: Crisp Spring Green */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌸
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Pleasant Valley Spring (March – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Refreshing post-winter mountain breezes with bright, colorful local orchid blooms. Ideal window for high-altitude trekking across the Talley Valley Wildlife Sanctuary loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Lush Spring
        </span>
      </div>

      {/* Season 3: Sub-Zero Winter Chill */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ❄️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
              Frosty Winter Loops (December – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The temperature drops sharply, touching sub-zero levels (-1°C to 10°C) with thick morning frost layers over the pine trees. Recommended strictly for raw, quiet winter lovers.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Frozen Phase
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
              href="https://arunachaltourism.com"
              className="inline-flex items-center gap-4 bg-green-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:bg-green-700 transition-all"
            >
              Discover Ziro <ArrowUpRight size={20} />
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
      <b className="text-green-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const CultureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl font-bold text-slate-700 hover:bg-white transition-all">
    {text}
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

export default ZiroValley;