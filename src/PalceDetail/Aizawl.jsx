import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Snowflake, Plane, 
  Train, Compass, Coffee, Camera, Utensils, 
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Aizawl = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🌄 HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQI2yCR_IJirulsB9-gmmdlYiw5rqGdaXYKcjrJ-DN4k4tdeslUWDCCdeH-9eVWjDofam3M4lwiY2KQuiy3PXMbAzE&s=19"
            alt="Aizawl Hills"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Mizoram
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">
          
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-purple-950 tracking-tighter leading-none mb-6 italic"
            >
              Aizawl
            </motion.h1>
            <p className="text-purple-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              The Hills of Mizoram
            </p>
            <div className="h-1.5 w-20 bg-purple-500 mx-auto rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Aizawl, perched on the rolling hills of Mizoram, charms with its vibrant culture, 
              colorful markets, and panoramic views. The city is a gateway to the lush Northeast.
            </motion.p>
          </header>

          {/* Introduction Section: Aizawl */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-600 selection:text-white">

  {/* Advanced Radial Background Glows (Cloud-Kissed Ridges & Bamboo Heritage Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-rose-50 border border-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🏙️</span> Highland Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
      Discover Aizawl
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Citadel of Clouds—a stunning vertical capital perched dramatically on jagged mountain ridges, where vibrant Mizo folklore meets a clean, music-loving modern rhythm.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">⛪</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        A Vertical City Built in the Sky
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Aizawl, the scenic capital of Mizoram standing proud at 1,120 meters above sea level, is an architectural marvel of pure vertical persistence. Spread across a series of sharp, interlocking mountain ridges, the city looks down on the sweeping Tlawng and Tuirial river valleys, with timber-framed houses tiering down precipitous slopes.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        As the cultural heartland of the Mizo people, Aizawl is celebrated for its highly disciplined traffic culture, rich textile traditions, and acoustic music scenes. It serves as a peaceful, misty gateway to unexplored bamboo forests and rolling blue mountain ranges.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-indigo-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-indigo-600">1,120m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Ridge Elevation</p>
        </div>
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">100%</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Discipline No-Honk City</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Solomon's Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          The Majestic Solomon's Temple
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Marvel at a masterpiece of modern stone architecture. Constructed out of pristine white marble imported from Agra, this massive, multi-pinnacled cathedral sits amidst tranquil, pine-scented hills on the city's outskirts.
        </p>
      </div>

      {/* Card 2: Mizoram State Museum */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🎋
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Mizo Tribal Chronicles
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Deconstruct the epic history of the highland clans. Located right at the city center, this ethnological museum houses a rare repository of traditional Mizo clothing, ancient hunting weapons, and historic bamboo musical instruments.
        </p>
      </div>

      {/* Card 3: Hmuifang Tlang Hill Excursion */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          ⛰️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Hmuifang Mountain Ridges
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk through pristine alpine grasslands. A short, spectacular drive away from the city reveals towering cliffs shrouded in year-long mist, offering unbeatable vantage points to witness deep, endless mountain horizons.
        </p>
      </div>

      {/* Card 4: KV Paradise (The Taj of Mizoram) */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕊️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Serene KV Paradise
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Visit a unique monument dedicated to timeless love. Built on a steep cliffside, this grand three-story white mausoleum offers a melancholic charm, complete with glass display cases and premium panoramic views of the city valley below.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-indigo-950 via-slate-900 to-rose-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-indigo-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Aizawl is a beautifully civilized, highly progressive mountain retreat. It completely challenges standard chaotic urban realities, offering crisp ridge-line breezes, soulful acoustic cafes, and an exceptionally polite, community-driven social fabric—making it a mandatory destination for offbeat explorers.
      </p>
    </div>
  </div>

</section>

          

          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-purple-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoldbBOwe0D-gPqje3A_GvR5ZjtnXNEu50ykZzU2g2_SyaO4jpXkYtvS0tb5izAgGAN6nQ1tkaMUvcX-aZpP-FkKDkCE0HkY2vpbRI0s6Rocgt2tpumxAq9vYWxzNOSdjLGKgwO=w675-h390-n-k-no", title: "Durtlang Hills" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerLgSob111la9mNxWj7fl4ketDLPqiMvR5gbMFjQkE26YTJOXTXAlAqzA7iOO-PRcoszdDhWNopGyYBvl52OliEulDEpXV72N-o-zn9EJSdAA4a_w7h-a6lwdqTomN7lsyMUZ96cewKRyg9=w675-h390-n-k-no", title: "Main Bazaar" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQJyJeVPUaPNNj4OWXIxR4Zqf7Jisn9brHIu2gT4jKQz1bOqKEyYG0O-BIOje_zKoqtlYgLmZGoJdXrfJFNd1SMan8&s=19", title: "Sunset View" },
                { url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRfcabx86rYsC4-rY0FbuRYLg-zw4EhJAbLs-qrHVbyfdGgOlpXNEDD7RfvNufc6dc6A_R7yPWm1VnKoZAArNqm4OU&s=19", title: "Cultural Market" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoyPQ67CNbsBr7hy6NESZ9cIRG4alOv_1pi7TQ_VDeNgWCp8T1smESFFArnbi2GCCyPaFpJ_3l46y-kE7kQSm9qCGxgN3fYSgLUJFSaNHgyJFnf7ARiWzICmyJEv9ijF_Q_99E5=w675-h390-n-k-no", title: "Hills Panorama" },
                { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweprQ4PtfGObDDU2_PPaaUf1fXXLTcByKZ-pUmBZIMP4KOh3hhYzjPkaFxe5v8KQwZdPitHbBRvSR9CxX4HcwEWP1ONOKSULyFKr4oKbt80-kABb8GmBdQANnOvV0vyI05nfMDxL=w675-h390-n-k-no", title: "Local Cuisine" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Aizawl - ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-500 selection:text-white">

  {/* Advanced Radial Background Glows (Ridge City Skyline & Valley Mist Theme) */}
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
      Best Time to Visit Aizawl
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect hillside capital exploration aligned with festive autumn colors, cloud-kissed winter mornings, and refreshing spring breezes.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-6 border border-indigo-100">
          🏡
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Highland Ridge Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Aizawl opens its most comforting and visual travel loops from <span className="font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-md">October to March</span>. Perched dramatically on vertical mountain crests, the city enjoys a crisp sub-tropical climate during these months, with daytime temperatures hovering gracefully between 15°C and 25°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this clear block, catching the surreal sunrise over a sea of clouds from <span className="font-semibold text-gray-900">Durtlang Hills</span>, exploring the quiet bamboo trails of Reiek Tlang, or navigating the cascading street tiers of Bara Bazar feels incredibly magical.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl border border-indigo-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">🌾</span>
        <p className="text-xs md:text-sm text-indigo-900 font-medium leading-relaxed">
          <strong className="text-indigo-950">Pro Tip:</strong> Want to experience the absolute peak of traditional Mizo heritage? Schedule your trip for early March to witness the energetic <strong className="text-indigo-950">Chapchar Kut</strong> spring festival. The entire city erupts with color, community feasts, and iconic Cheraw (bamboo) dance competitions.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Crisp Winter Clouds */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ❄️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
              Chilly Winter Peak (November – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The premium tourist window. Sharp, mist-laden mornings opening up to glorious blue skies. Ideal for peak trekking at Reiek, church visits, and enjoying vibrant Christmas and New Year lighting loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Misty Ridge
        </span>
      </div>

      {/* Season 2: Festival Spring */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌸
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Vibrant Heritage Spring (March – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The landscape gets pleasantly warmer but remains highly comfortable under gentle mountain breezes. Perfect for observing the historic post-harvest jhum cultivation festivals and cultural parades.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Cultural Spring
        </span>
      </div>

      {/* Season 3: Heavy Monsoon Downpours */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Torrential Monsoon Phase (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The steep terrain receives intense, heavy rainfall. Dense fog drops visibility significantly, and mountain roads are highly susceptible to sudden landslides. Travel is not recommended.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Heavy Rains
        </span>
      </div>

    </div>
  </div>

</section>
{/* Best Stays & Highland Retreats Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-600 selection:text-white">
  
  {/* Highland Background Glows (Teal & Misty White) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-slate-50 border border-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ☁️ The Misty Highland Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Terraced Highland Stays & Mizo Retreats
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Experience life perched on the ridge-tops. From boutique homestays offering panoramic valley views to heritage lodges deep in Mizo cultural heartlands.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Boutique Ridge-Top Villas (Featured) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
            ⛰️
          </div>
          <span className="text-xs font-bold bg-teal-100/60 text-teal-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Highland
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
          Ridge-Top Boutique Villas
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Perched on Aizawl’s famous ridges, these villas offer unobstructed views of the Tlawng river valley. Perfect for those looking to wake up above the clouds with modern amenities and local Mizo hospitality.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-700 tracking-wider uppercase">
        Valley-View Terraces & Cloud-Line Balconies
      </div>
    </div>

    {/* Card 2: Cultural Heritage Homestays */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-slate-500/30 shadow-lg hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-slate-50 text-xl flex items-center justify-center border border-slate-100/70 group-hover:bg-slate-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏠
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-slate-700 transition-colors duration-200">
          Heritage Mizo Homestays
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Deep dive into Mizo culture. Stay with local families to experience authentic Mizo cuisine, traditional folk stories, and the warmth of the 'Zofest' lifestyle in the heart of Aizawl.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-slate-600 tracking-wider uppercase">
        Local Culinary Experiences & Traditional Storytelling
      </div>
    </div>

    {/* Card 3: Nature-Enclave Retreats */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍃
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Forest-Edge Nature Enclaves
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Located on the outskirts where the city meets the wild. These retreats are surrounded by thick greenery, offering quiet pathways for morning treks and evening forest walks.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Forest Trekking Pathways & Quiet Wildlife Vistas
      </div>
    </div>

    {/* Card 4: Modern City Center Stays (Featured) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-slate-500/30 shadow-lg hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 text-xl flex items-center justify-center border border-slate-100/70 group-hover:bg-slate-600 group-hover:text-white transition-all duration-300 shadow-sm">
            ✨
          </div>
          <span className="text-xs font-bold bg-teal-100/60 text-teal-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Modern Aizawl
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-slate-800 transition-colors duration-200">
          Urban Highland Suites
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Centralized for your Aizawl shopping and city exploration. Featuring modern amenities, reliable connectivity for digital nomads, and easy transport access to local markets like Bara Bazar.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-slate-600 tracking-wider uppercase">
        Digital Nomad Friendly & Bara Bazar Proximity
      </div>
    </div>

    {/* Card 5: Research & Learning Hubs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Mizo Art & Culture Hubs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Collaborative spaces for travelers interested in Mizo handloom, tribal jewelry crafting, and local music traditions. Meet local artists and contribute to cultural preservation.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Handloom Crafting Workshops & Mizo Music Sessions
      </div>
    </div>

  </div>
</section>

{/* Culinary Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-600 selection:text-white">
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-teal-600/10 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <h2 className="text-4xl font-black text-gray-950">Mizo Gastronomy</h2>
    <p className="text-gray-600 mt-3 text-lg">Experience authentic Mizo soul food: Bai, Sawhchiar, and fresh bamboo-shoot delights.</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {/* Culinary Cards here... */}
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
      <b className="text-purple-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-purple-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-purple-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-purple-100">{value}</span>
  </div>
);

export default Aizawl;