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

const Lonavala = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQDrY-TqRzEYc6mVMVgtU1sL6K4dY6MJFRE0Kke0P5yos1DK6QeGZusDVOe_PkWNm_-VQNPbLXjc4x3tbsHumMft2g&s=19"
            alt="Lonavala Hills"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Lonavala
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              Jewel of the Sahyadri
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
              Located between Mumbai and Pune, Lonavala is a scenic hill station
              known for misty mountains, waterfalls, caves, and lush green valleys.
              Famous for its chikki and monsoon beauty, it is one of the most
              popular weekend getaways in Maharashtra.
            </p>
          </section>

          {/* Introduction Section: Lonavala */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

  {/* Advanced Radial Background Glows (Monsoon Canyons & Mist Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌧️</span> Monsoon Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Lonavala
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Mist-Shrouded Gateway—a dramatic, high-altitude Sahyadri landscape where rolling emerald hills break open into gushing waterfalls and ancient rock-cut caves.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">⛰️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Beating Heart of the Western Ghats
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Lonavala, perched beautifully at an altitude of 622 meters along the sweeping Sahyadri mountain range in Maharashtra, is a spectacular sanctuary of cloud, rock, and rain. Serving as a crucial mountain pass connecting the Deccan Plateau to the coastal Konkan, this hill station transforms into a living, emerald green wonderland during the monsoon season.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Famed for its deep canyon drop-offs, historic hill forts like <span className="font-semibold">Lohagad</span>, and prehistoric Buddhist rock architecture, Lonavala pairs the untamed energy of seasonal cloudbursts with the warm nostalgia of its iconic golden-hued jaggery <span className="font-semibold">chikki</span> factories.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">622m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Pass Elevation</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">2,200+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Yrs Old Karla Caves</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Tiger's Leap Point */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🐅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Sheer Tiger's Leap
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand on a massive cliffside edge resembling a leaping tiger. Offering a dizzying drop into pristine green valleys, this point comes alive with low-flying clouds sweeping directly over the viewing deck.
        </p>
      </div>

      {/* Card 2: Bhaja & Karla Rock-Cut Caves */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          ☸️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Prehistoric Rock Architecture
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step back into the 2nd century BC. Explore the monumental <span className="font-semibold">Karla Caves</span>, housing India's largest grand Buddhist Chaitya (prayer hall), supported by majestic ancient teakwood beams.
        </p>
      </div>

      {/* Card 3: Bhushi & Kune Waterfalls */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          💦
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Cascading Hydraulic Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience the rush of pure mountain runoff. Watch the spectacular three-tiered <span className="font-semibold">Kune Falls</span> crash down 200 meters against black basalt stone, shrouded in thick, crisp jungle mist.
        </p>
      </div>

      {/* Card 4: Rajmachi Fort Vantage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🏰
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          The Guard of Rajmachi
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Trace the rugged battlements of Maratha military architecture. Overlooking the historic Bhor Ghat trade route, this twin-fort structure offers unmatched views of deep forested valleys and seasonal firefly trails.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-sky-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Lonavala is a dynamic, cloud-swept escape from urban hustle. It masterfully bridges the raw, dramatic beauty of the monsoon-drenched Sahyadri valleys with ancient archaeological wonders and classic highland comfort, making it a staple retreat for conscious weekend explorers.
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
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQnGnYz6Wx9cHTcn_jHq6FECmdejB3K8t0N5M6IwVqjhtq9eZjtav8GyBTgjtUfyVfVm5UcMQ1bsZjU_mmlZ68ibPo&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoaeXs6by-1rILlF5_oJNfJnv5no5MS9jQrCD72QoJmexs9JHk9AQmQfXi-RzNsd8cuXedjPbNJcsd8wGw7GX8S7H2g6SnrgQNS-wzrV5_6LamvSIaNKHBtKCVHi0a8vKU3Eg4vyg=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer8UUAMwhTJdeH7QVqrgHU9GcganPB-QbBvQZ0Pq0iMAaeZosVIuXjOsa6gjxBViK2yO_fZ9HsSvcfdhaV1fOhvnFDhqZUJRV5HONXZU1FP4RTmTHfdXRgyG6jjJDdMgJIprwgu_g=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweonF-PO0ymAbRuZNZLzVDlHxKF4VjxLjG2sNVGl4oVAyR6MSdFCS2HO0cOQm9I85IfsvNjmoXAZPnLQbDWn7U4E-msrf1tzs3mjpOTKZcQS0yKzBlYTH_P-MW8jPJe35o1DBaaY=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSOYFCpqAwDTAFgf6gNGAaviO7V18mM6xxa6lVvAUNefPv6a1BkkrWErSryVN_sdfmXPOQ8CK98RCtYmkvCL2sqXGY&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQAAAHvWVYLxfxRfED9x9r9AkUpGLjI66xeeRvGtOeRPLtrZZPyI5VdVnkj5TfFZMsq9dc7T9OPKnahNRqcw7gb0YA&s=19"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Lonavala"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">

  {/* Advanced Radial Background Glows (Sahyadri Mist & Waterfall Cascade Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌧️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Best Time to Visit Lonavala
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your absolute escape to Mumbai and Pune's favorite hill gateway, aligned with dramatic seasonal downpours, misty winter peaks, and sweet chikki loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl font-bold mb-6 border border-teal-100">
          ⛰️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Dual-Peak Valley Cycles
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Lonavala rules over two entirely contrasting premium windows: <span className="font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded-md">June to September</span> for intense monsoon magic and roaring cascades, and <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">October to March</span> for crisp, clear-sky winter trekking loops. Standing at 622 meters, the daytime climate remains beautifully refreshing throughout the tourist blocks.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these operational blocks, exploring the ancient rock-cut architecture of <span className="font-semibold text-gray-900">Karla and Bhaja Caves</span>, watching the floating cloud pillows drift at Tiger's Point, or driving past the shimmering waters of Pawna Lake feels deeply liberating.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-teal-900 font-medium leading-relaxed">
          <strong className="text-teal-950">Pro Tip:</strong> Want to enjoy Lonavala's ultimate monsoon loops without the massive weekend expressway gridlocks? Plan your travels for <strong className="text-teal-950">Tuesday to Thursday</strong> during July or August. You'll get empty viewpoint pathways, serene fog cushions, and highly discounted boutique valley stays.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Dramatic Monsoons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-teal-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors duration-200">
              Iconic Monsoon Cascades (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The absolute signature season. The hills turn an intense velvet green, dense fog drops visibility to a few meters, and waterfalls like Bhushi Dam erupt in full glory. Absolute paradise for road trips.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Monsoon Peak
        </span>
      </div>

      {/* Season 2: Crisp Winters & Treks */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛺
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Crisp Winter Skies & Fort Treks (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The air turns delightfully cool, dry, and clean. Exceptional visibility makes it the prime time for lakeside camping loops at Pawna and ascending high-altitude forts like Lohagad or Rajmachi.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Perfect Trekking
        </span>
      </div>

      {/* Season 3: Humid Summer Escapes */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Warm Summer Getaways (April – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Daytime temperatures get moderately warm, crossing 35°C, but the evening hill breeze brings refreshing relief. Highly frequented by weekenders looking to escape coastal city humidity.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Low Season
        </span>
      </div>

    </div>
  </div>

</section>

{/* Best Stays & Cliff-Edge Retreats Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-blue-600 selection:text-white">
  
  {/* Highland Background Glows (Mist Blue & Forest Green) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌧️ The Sahyadri Gateway Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950">
      Cliff-Edge Villas & Monsoon Retreats
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Experience the raw beauty of the Western Ghats. From luxury villas perched on cliff edges to peaceful forest-bound lodges perfect for a rain-drenched weekend.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Cliff-Edge Boutique Villas (Featured) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            ⛰️
          </div>
          <span className="text-xs font-bold bg-blue-100/60 text-blue-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Cliff-View
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
          Cliff-Edge Boutique Villas
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Perched on the rugged ridges of the Sahyadris, these villas offer wrap-around balconies with uninterrupted views of the valley waterfalls. Perfect for witnessing the monsoon magic from the comfort of a heated indoor pool.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-700 tracking-wider uppercase">
        Valley Waterfall Views & Heated Indoor Pools
      </div>
    </div>

    {/* Card 2: Heritage Forest Cottages */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌲
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Heritage Forest Cottages
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Nestled deep within the forested outskirts of Lonavala. These cottages are built from stone and wood, offering a rustic experience with modern amenities and private forest-trail access.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Private Forest Trails & Stone-Wood Rustic Architecture
      </div>
    </div>

    {/* Card 3: Adventure Basecamps */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧗
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Adventure Basecamps
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For the thrill-seekers. These camps offer guided rock climbing, rappel sessions down local gorges, and expert-led treks to the historic Lohagad or Visapur Forts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Fort Trekking & Expert-Led Rappelling Sessions
      </div>
    </div>

    {/* Card 4: Modern City Central Suites (Featured) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            ✨
          </div>
          <span className="text-xs font-bold bg-blue-100/60 text-blue-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Modern Hub
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
          Modern Lonavala Suites
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Located close to the Mumbai-Pune expressway. Perfect for quick getaways with high-speed internet, premium concierge service for local sight-seeing, and easy transit to nearby lakes.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Expressway Connectivity & Local Lake Transit Concierge
      </div>
    </div>

    {/* Card 5: Wellness & Yoga Enclaves */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧘
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Wellness Yoga Enclaves
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Rejuvenate in the misty hills. These enclaves focus on holistic health, with open-air yoga shalas, organic garden-to-plate dining, and meditation sessions overlooking the foggy valleys.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Open-Air Yoga Shalas & Garden-to-Plate Dining
      </div>
    </div>

  </div>
</section>

{/* Culinary Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-blue-600 selection:text-white">
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <h2 className="text-4xl font-black text-gray-950">Lonavala’s Hill Flavors</h2>
    <p className="text-gray-600 mt-3 text-lg">Famous Chikki, steaming Vada Pav, and roasted sweet corn to enjoy in the monsoon mist.</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {/* Culinary Cards here... */}
  </div>
</section>


          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-16 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Lonavala?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Perfect monsoon getaway, scenic trekking trails, waterfalls,
              ancient caves, and quick weekend escape from Mumbai & Pune.
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

export default Lonavala;