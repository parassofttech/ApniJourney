import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Snowflake,
  Plane,
  Train,
  Compass,
  Coffee,
  Camera,
  Utensils,
  ArrowUpRight,
  Landmark,
  Calendar,
  Sun
} from "lucide-react";

const Mahabaleshwar = () => {
  return (
    <div className="min-h-screen bg-[#f4faff]  font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://mahabaleshwartourism.in/images/places-to-visit/headers/mahabaleshwartourism-header-mahabaleshwar-tourism.jpg.jpg"
            alt="Mahabaleshwar Hills"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Mahabaleshwar
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              Queen of the Western Ghats
            </p>
          </div>
        </div>

        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white rounded-t-[3rem]">

          {/* ABOUT SECTION */}
          <section className="mb-24 text-center">
            <h2 className="text-4xl font-black text-green-900 italic mb-8">
              About The Destination
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Located in the Sahyadri range of Maharashtra at 1,353 meters above sea level,
              Mahabaleshwar is famous for lush forests, misty valleys, waterfalls,
              strawberry farms, and colonial charm. It was once the summer capital
              of the Bombay Presidency during British rule.
            </p>
          </section>

          {/* Introduction Section: Mahabaleshwar */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-600 selection:text-white">

  {/* Advanced Radial Background Glows (Evergreen Forests & Valley Mist Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-rose-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-emerald-50 border border-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🍓</span> Highland Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Discover Mahabaleshwar
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Queen of Maharashtra's Hills—a soaring, mist-veiled tableland of sprawling strawberry fields, ancient cliffside lookouts, and dense forest canopies.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-rose-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌿</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Verdant Cradle of Five Holy Rivers
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Mahabaleshwar, resting beautifully on a massive plateau within the rugged Sahyadri Mountain Range (Western Ghats), is a breathtaking sanctuary of cloud and canopy. Perched at an altitude of 1,353 meters, this historic hill station serves as the source of five sacred rivers, including the mighty Krishna River.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Famed for its year-long crisp mountain air and cool microclimate, it produces over <span className="font-semibold">85% of India's strawberries</span>. Here, old colonial stone bungalows blend seamlessly with rugged red laterite cliffs, cascading waterfalls, and thick, untouched evergreen reserves.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">1,353m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Plateau Altitude</p>
        </div>
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">85%+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Strawberry Harvest</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Arthur's Seat & Canyons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          ⛰️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          The Dramatic Arthur's Seat
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand over the "Queen of Points." Looming at 1,470 meters, <span className="font-semibold">Arthur's Seat</span> offers a sheer drop into the deep Brahma-Arayan canyon, where rising air currents famously push light objects right back up.
        </p>
      </div>

      {/* Card 2: Venna Lake Boating */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Scenic Venna Lake
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Glide through the mountain mist. Surrounded by tall, leafy trees and vibrant lakeside food stalls, a rowboat ride on the clear, sprawling waters of <span className="font-semibold">Venna Lake</span> is a classic highland leisure experience.
        </p>
      </div>

      {/* Card 3: Strawberry Farm Tourism */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🍓
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Agro-Tourism & Orchards
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk through endless, sweet-scented berry patches. Visit dynamic farms along the Panchgani road to pick fresh strawberries, mulberry treats, and enjoy the iconic local dessert—fresh strawberry cream.
        </p>
      </div>

      {/* Card 4: Panch Ganga Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🛕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Old Mahabaleshwar Mysticism
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Discover the spiritual roots of the plateau. The 13th-century stone <span className="font-semibold">Panch Ganga Temple</span> captures the underground convergence of 5 rivers flowing cleanly out of a carved stone cow spout.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-rose-950 via-slate-900 to-emerald-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-rose-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Mahabaleshwar is a beautifully balanced mountain escape. It perfectly combines the nostalgic luxury of old colonial viewpoints with the pure rustic charm of sweet agro-tourism and dramatic Sahyadri cliffside trails, making it an exceptional wellness retreat.
      </p>
    </div>
  </div>

</section>

         

          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerFnce1eisU2H_pdPTjLWVsXW31qEPstbMcMWNtAS1wTNilkYp59QqZK4ppW5ZXOS8bg96c9xZJSWCFS56jtipLvqwlIBOJ2awryV6SgYevxrf-xihdrnz6jbCjQaFHA76SB1Wf=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep3RmcqM9C5Jf8liLUfABjKHJ_5Ud9hzu8eqBmchmd9mwibQ43aM2TuJOrLVAjF2oiLdzGoOfZzCRkAQxd2dO9PJrPF4fQHBq65hY06sODACqjRq7iEHghhUwzMyS0tcK9BTxf6BQ=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRHp40QSfEnm_XdlyPrs017KDaXfn6-otHSo0Jk9bng9ytAXJyk7EFd2kK6NrsWsu4xBg-jM3yiaWDV6xlHOBRV9imc&s=19",
                "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRh--7fueLb_0Rjluw5s_dvGG6hwtLl1sB6PmE3N9cgtnUeUH9E3-Ggru-wjr38aK03SdC-2RJ2i9oYCgxSQzmshUk&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoFbXAwYq447Pt4HKRMzp2ztKDNC3zAQp50DhMOuQqp4Iv_aZjJN7YM9Y-fJDQAJa5A29GzQReV5gf8GDtO5PH1AHRmv4qDKkrHhuj0sgIbQNjMaYXR18F02I7wqBNkggV-cBgv=w675-h390-n-k-no"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Mahabaleshwar"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

  {/* Advanced Radial Background Glows (Sahyadri Ridges & Berry Harvest Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-emerald-50 border border-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍓 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Best Time to Visit Mahabaleshwar
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect Western Ghats getaway aligned with mist-covered Sahyadri viewpoints, sweet winter strawberry harvests, or dramatic monsoon waterfall loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-rose-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl font-bold mb-6 border border-rose-100">
          ⛰️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Highland Plateau Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Mahabaleshwar experiences its premier tourist peak from <span className="font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded-md">October to March</span>. Sitting at an altitude of 1,353 meters in the Sahyadri range, the mountain climate during these months becomes beautifully cool and crisp, keeping daytime temperatures between 15°C and 25°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this premium cycle, viewing the sharp canyon drops from <span className="font-semibold text-gray-900">Arthur's Seat</span>, boating on the quiet waters of Venna Lake, or exploring the dramatic volcanic remnants of the massive Wilson Point feels extraordinarily refreshing.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-rose-50 to-emerald-50 rounded-2xl border border-rose-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-rose-900 font-medium leading-relaxed">
          <strong className="text-rose-950">Pro Tip:</strong> Looking to see the hills at their sweetest? Target your travel loop between <strong className="text-rose-950">December and February</strong>. This is the peak winter harvest window when local farms are overflowing with fresh strawberries, allowing you to go garden-picking or attend the vibrant local berry festivals.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Crisp Winter & Berry Harvest */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🍦
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Crisp Winters & Strawberries (October – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The ultimate golden window. Delightful, sun-kissed mornings followed by breezy, cold mountain nights. Perfect for sightseeing, farm tours, and relishing fresh strawberry cream loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Peak Window
        </span>
      </div>

      {/* Season 2: Pleasant Summer Retreat */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Mellow Summer Getaway (March – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              As the plains heat up, Mahabaleshwar remains highly comforting with pleasant winds. A highly popular holiday loop for families looking to escape the coastal humidity of Mumbai and Pune.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Hill Retreat
        </span>
      </div>

      {/* Season 3: Torrential Monsoon Clouds */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
              Dramatic Monsoon Cascades (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The plateau receives heavy, relentless rainfall. Dense fog rolls over the cliffs, and massive waterfalls like Lingmala erupt in full force. Gorgeous for monsoon trekkers, but driving lines require extra care.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Heavy Mist
        </span>
      </div>

    </div>
  </div>

</section>

{/* Best Stays & Highland Retreats Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-red-600 selection:text-white">
  
  {/* Highland Background Glows (Strawberry Red & Misty White) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-emerald-50 border border-red-100 text-red-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍓 The Strawberry Highland Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-red-950 to-gray-950">
      Heritage Colonial Bungalows & Valley Retreats
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From restored British-era bungalows nestled in dense forests to modern eco-retreats overlooking the vast, misty Sahyadri valleys.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Colonial Heritage Bungalows (Featured) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-500/30 shadow-lg hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏰
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Colonial Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
          Heritage Colonial Bungalows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Step back in time within restored estate bungalows. Featuring high ceilings, antique wooden furniture, and private verandas that open into lush, strawberry-scented gardens.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-700 tracking-wider uppercase">
        Antique Estate Architecture & Strawberry Garden Verandas
      </div>
    </div>

    {/* Card 2: Valley-View Eco-Retreats */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏔️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Valley-View Eco-Retreats
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience the Sahyadri mountains from the edge. These eco-lodges feature expansive glass walls and private viewing decks perfect for watching the sunset over the deep, misty valleys.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Sahyadri Sunset Decks & Panoramic Glass Suites
      </div>
    </div>

    {/* Card 3: Strawberry Farm Stays */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-500/30 shadow-lg hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍓
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Farm-to-Table Stays
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Live amidst the fruit fields. These farm-stays allow you to participate in daily berry-picking sessions, farm-fresh breakfasts, and learn about organic farming in the hills.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Organic Berry Picking & Farm-Fresh Breakfasts
      </div>
    </div>

    {/* Card 4: Modern Comfort Boutique Suites (Featured) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            ✨
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Modern Hills
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
          Modern Boutique Hill-Suites
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Contemporary hill-station comfort. Featuring thermal insulation for the misty nights, heated indoor pools, and dedicated concierge teams to arrange treks to Pratapgad Fort.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Heated Indoor Pools & Pratapgad Fort Trek Coordination
      </div>
    </div>

    {/* Card 5: Nature & Wellness Hubs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-500/30 shadow-lg hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧘
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Wellness Enclaves
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Focus on rejuvenation. Surrounded by forest, these enclaves offer forest-bathing sessions, yoga terraces, and detox diets based on seasonal hill produce.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Forest-Bathing Sessions & Seasonal Detox Diets
      </div>
    </div>

  </div>
</section>

{/* Dining Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-red-600 selection:text-white">
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <h2 className="text-4xl font-black text-gray-950">Hillside Gastronomy</h2>
    <p className="text-gray-600 mt-3 text-lg">Indulge in Fresh Strawberries with Cream, Corn Pattice, and local Maharashtrian delicacies.</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {/* Culinary Cards here... */}
  </div>
</section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Mahabaleshwar?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Romantic getaways, family trips, budget friendly travel,
              scenic beauty, adventure activities, and perfect weekend escape
              from Pune & Mumbai.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-green-600 text-white text-xl font-black rounded-full shadow-2xl hover:bg-green-700 transition-all"
            >
              Plan Your Trip Now ✈️
            </motion.button>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

// Reusable Components
const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
    <div className="flex items-center gap-4">
      <div className="text-green-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
        {label}
      </span>
    </div>
    <span className="font-black text-green-100">{value}</span>
  </div>
);

const ItineraryDay = ({ day, text }) => (
  <div className="bg-green-50 p-8 rounded-3xl shadow-md">
    <h3 className="text-xl font-black text-green-800 mb-3">{day}</h3>
    <p className="text-slate-600">{text}</p>
  </div>
);

export default Mahabaleshwar;