import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Bike,
  Camera,
  Info,
  ExternalLink,
  CloudSnow,
} from "lucide-react";

const LehLadakh = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRdMowPzk3k7rxm2KlWmMejTK48BCEw6kxVa-0GrQvOO2HYdb-tidpOdHwk1AvEp03k2aySO5vz938SQ25Obj1I6d8&s=19"
          alt="Leh Ladakh Mountains"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTpS5il7ARF3ieMtyhQ5YsAnVNH-ysZwHmX3pMKjq0b1l1vv0ggZWanyuKzOv4Cb_9Hs4KcUS9UdtzSzvEXqrocALk&s=19")
          }
        />

        {/* Content Section */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-blue-800 mb-4"
          >
            🏔️ Leh–Ladakh – Land of High Passes
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Leh–Ladakh, often called the **“Roof of India”**, is an otherworldly
            destination surrounded by snow-clad mountains, ancient monasteries,
            turquoise lakes, and endless adventure routes. Located in **Jammu &
            Kashmir (Union Territory)**, it’s a dream for bikers, travelers, and
            spiritual seekers alike.
          </motion.p>

         {/* Introduction Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-20 selection:bg-sky-500 selection:text-white">
  
  {/* Tactical High-Altitude Atmosphere Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 to-indigo-500/5 blur-[150px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="mb-12 space-y-4">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-transparent border border-sky-500/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-sky-600 dark:text-sky-400 backdrop-blur-md">
      🏔️ Trans-Himalayan Frontier
    </div>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
      Ladakh: The Land of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-600">High Mountain Passes</span>
    </h2>
    <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl">
      Perched at an average elevation of over 11,000 feet, Ladakh is a mesmerizing cold desert landscape offering a radical confluence of barren peaks and stark blue skies.
    </p>
  </div>

  {/* Asymmetric Bento Grid System */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Card 1: Core Essence (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-sky-400/50 transition-all duration-300">
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-sky-50 text-sky-600 shrink-0 shadow-inner">✨</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">The Cold Desert Reality</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            Ladakh represents an unparalleled blend of raw exploration and deep spiritual tranquility. It is a realm defined by ancient Tibetan Buddhist monasteries, fluttering prayer flags, and high-altitude mountain ranges that constantly challenge a traveler's ultimate endurance.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-700">11,000ft Base</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Trans-Himalayan</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2: Geographic Hub (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-indigo-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-300"></div>
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner">📍</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Geographic Hub</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            Leh District, Union Territory of Ladakh, India. This strategic frontier features rugged high-altitude valleys and deep geological canyons bordering sensitive international lines.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3: Primary Gateway (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-blue-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-blue-50 text-blue-600 shadow-inner">✈️</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Primary Gateway</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            Kushok Bakula Rimpochee Airport (IXL), Leh. Standing as one of the highest commercial airports globally, flight operations run strictly in the early morning due to intense mountain thermal winds.
          </p>
        </div>
      </div>
    </div>

    {/* Card 4: Signature Landscapes (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300">
      <div className="absolute -top-12 -left-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0 shadow-inner">🐫</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Extraterrestrial Terrains</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            From the deep shifting shades of turquoise waters at Pangong Tso to the cold sand dunes of Nubra Valley populated by rare double-humped Bactrian camels—every corner of Ladakh outlines a surreal visual layout that genuinely feels like another planet.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700">Pangong Tso</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Bactrian Camels</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 5: Best Travel Horizon (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-amber-50 text-amber-600 shadow-inner">☀️</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Ideal Horizon</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            **May to September** unlocks the optimum high summer and early autumn travel window, guaranteeing open mountain passes and standard climate stabilization ranging safely between 10°C and 25°C.
          </p>
        </div>
      </div>
    </div>

    {/* Card 6: Cultural Core & Heritage (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-purple-50 text-purple-600 shrink-0 shadow-inner">🕉️</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Cultural Essence & Silk Route Legacy</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            Centuries-old architectural structures like Thiksey, Hemis, and Diskit monasteries keep the ancient Tibetan Buddhist spiritual essence alive. Historically configured as a pivotal segment of the Silk Route, this region showcases profound Indo-Aryan heritage and unique historical depth.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700">Ancient Monasteries</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Silk Route Legacy</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* Best Time to Visit Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-20 selection:bg-amber-500 selection:text-white">
  
  {/* Tactical High-Altitude Atmosphere Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 to-emerald-500/5 blur-[150px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="mb-12 space-y-4">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-transparent border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 backdrop-blur-md">
      📅 Seasonal Horizon Analysis
    </div>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
      Best Time to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-600">Explore Ladakh</span>
    </h2>
    <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl">
      Ladakh's weather operates on near-polar dynamics. Use this asymmetrical blueprint to understand pass opening timelines, climate shifts, and seasonal safety variations.
    </p>
  </div>

  {/* Asymmetric Bento Grid System */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Card 1: Peak Season - June to September (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300">
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-amber-50 text-amber-600 shrink-0 shadow-inner">☀️</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">The Golden Window (June - Sept)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            This is the absolute peak and structurally safest window for trans-Himalayan exploration. Both the Manali-Leh and Srinagar-Leh overland highways are fully operational. Pangong Tso reflects its signature deep shades of turquoise blue, and valley temperatures maintain a comfortable daytime baseline between 15°C and 25°C. Highly recommended for motorcycling expeditions and standard road trips.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700">All Passes Open</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Optimum Oxygen Levels</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2: Shoulder Window - May (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all duration-300"></div>
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">🏔️</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Early Summer (May)</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            May marks the launch of the regional tourism cycle. While the Srinagar highway generally clears early, the Manali axis can remain restricted. Travelers can witness massive, pristine snow walls lining the approaches to Chang La and Khardung La passes, making it a highly photogenic period.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3: Shoulder Window - October (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-blue-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-blue-50 text-blue-600 shadow-inner">🍁</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">The Autumn Crisp (October)</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            October welcomes the onset of sub-zero temperatures. Peak crowds dissipate rapidly, leaving behind a stark landscape painted in brilliant golden and deep crimson tones. Overland highways start closing due to unpredictable blizzards late in the month; fly-in tracking is heavily prioritized.
          </p>
        </div>
      </div>
    </div>

    {/* Card 4: Extreme Winter - Nov to April (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-indigo-400/50 transition-all duration-300">
      <div className="absolute -top-12 -left-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0 shadow-inner">❄️</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Frozen Desert (Nov - April)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            Extreme polar conditions set in as mercury drops between -15°C and -30°C. Water bodies, including Pangong Tso, freeze into thick, solid ice mirrors. Both main highways are completely shut. This extreme frame is exclusively navigated by elite adventure trekkers targeting the iconic **Chadar Trek** over the frozen Zanskar River.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700">Fly-in Operations Only</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Sub-Zero Alpine Gear Required</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 5: Infrastructure & Border Road Access (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-purple-50 text-purple-600 shadow-inner">⛓️</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Pass Clearance Status</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            The BRO (Border Roads Organisation) drives precision mechanical clearance across all strategic sectors. Early seasonal transitions can trigger road closures from sudden cloudbursts, requiring continuous status monitoring before departure.
          </p>
        </div>
      </div>
    </div>

    {/* Card 6: Cultural Festivals Window (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-rose-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-rose-500/10 rounded-full blur-xl group-hover:bg-rose-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-rose-50 text-rose-600 shrink-0 shadow-inner">🎭</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Monastery Festivals (June - July)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            To explore the authentic anthropological layers of the region, coordinate your schedule around the **Hemis Festival** or **Thiksey Gustor**. Monasteries transform into spiritual hubs featuring sacred Cham Masked Dances performed by resident lamas, projecting the deep centuries-old spiritual architecture of Ladakh.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-700">Cham Dance Live Tracking</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Cultural Peak Access</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* Best Hotels & Stays Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-20 selection:bg-rose-500 selection:text-white">
  
  {/* Tactical High-Altitude Atmosphere Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/10 to-indigo-500/5 blur-[150px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="mb-12 space-y-4">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/10 via-indigo-500/5 to-transparent border border-rose-500/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-rose-600 dark:text-rose-400 backdrop-blur-md">
      🏨 Luxury & Boutique Hospitality
    </div>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
      Where to Stay: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600">Premium Accommodations</span>
    </h2>
    <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl">
      From high-end ultra-luxury alpine resorts in Leh to hyper-localized glamping setups near pristine high-altitude lakes.
    </p>
  </div>

  {/* Asymmetric Bento Grid System */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Card 1: Ultimate Luxury Hub - Leh (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-rose-400/50 transition-all duration-300">
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-rose-500/10 rounded-full blur-xl group-hover:bg-rose-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-rose-50 text-rose-600 shrink-0 shadow-inner">👑</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">The Grand Dragon Ladakh (Leh)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            The benchmark of premium luxury in the cold desert. Completely winterized with central heating, magnificent double-glazed windows framing the Stok Kangri mountain range, and state-of-the-art oxygen-equipped recovery lounges. Located strategically close to Leh Palace, it balances elite modern amenities with traditional Ladakhi geometric architecture.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-700">Centralized Heating</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">5-Star Standard</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2: Boutique & Heritage - Leh (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-indigo-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-300"></div>
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner">🏛️</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">The Zen Ladakh</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            An eco-conscious luxury boutique hotel featuring locally crafted wood carvings, private villas, and an indoor temperature-controlled swimming pool. Perfect for travelers prioritizing quiet wellness.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3: Hyper-Luxury Glamping - Nubra (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">🎪</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">The Ultimate Travelling Camp</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            Chamba Camp (Diskit/Thiksey). Ultra-exclusive canvas luxury tents featuring private butler services, customized gourmet dining, and elevated wooden decks framing ancient monasteries.
          </p>
        </div>
      </div>
    </div>

    {/* Card 4: Eco-Luxury Retreat - Nimmu (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300">
      <div className="absolute -top-12 -left-12 w-28 h-28 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-amber-50 text-amber-600 shrink-0 shadow-inner">🌳</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Nimmu House (Nimmu Valley)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            A meticulously restored historical royal heritage house nestled at the confluence of the Indus and Zanskar rivers. Surrounded by dense apricot orchards, this stay offers immersive architectural authenticity combined with modern sustainability standards, away from the standard commercial rush of Leh town.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700">Royal Heritage</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Eco-Sustainable</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 5: High-Altitude Lakeside Luxury - Pangong (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-blue-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-blue-50 text-blue-600 shadow-inner">🌊</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Pangong Eco-Resort</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            Premium luxury wooden cottages located right near the shoreline of Pangong Tso (Spangmik). Features insulated structural walls to tackle sub-zero night drop-offs and unobstructed lake-view panoramas.
          </p>
        </div>
      </div>
    </div>

    {/* Card 6: Premium Alpine Experience - Hunder (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-purple-50 text-purple-600 shrink-0 shadow-inner">🏔️</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Stone Hedge Luxury Resort (Nubra Valley)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            An architectural masterpiece constructed out of local mountain river stones in Hunder. Outfitted with massive panoramic clear glass facades that provide 360-degree dramatic tracking of the Karakoram range. Features private balconies, heated water frameworks, and manicured organic gardens.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700">Karakoram Views</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Stone Architecture</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


{/* Best Restaurants & Cafes Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-20 selection:bg-orange-500 selection:text-white">
  
  {/* Tactical High-Altitude Atmosphere Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 blur-[150px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="mb-12 space-y-4">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 backdrop-blur-md">
      🍽️ Trans-Himalayan Gastronomy
    </div>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
      Where to Eat: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-red-600">Culinary Hotspots</span>
    </h2>
    <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl">
      From authentic hyper-local Ladakhi and Tibetan culinary spaces to premium modern garden cafes serving high-altitude global comfort food.
    </p>
  </div>

  {/* Asymmetric Bento Grid System */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Card 1: Authentic Heritage Dining - Leh (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-orange-400/50 transition-all duration-300">
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-orange-50 text-orange-600 shrink-0 shadow-inner">🥟</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">The Tibetan Kitchen (Leh)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            The undisputed culinary institution of Leh town. Featuring a beautiful open-air traditional courtyard setting, this spot specializes in authentic Tibetan and Ladakhi multi-course slow-cooked meals. Must-order delicacies include their famous hand-rolled *Menthuk* (thick noodle soup), pristine artisanal *Momos*, and *Shabalay* (deep-fried meat/veg bread) paired with warm butter tea.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-700">Traditional Courtyard</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Authentic Tibetan</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2: Modern German Bakery Culture - Leh (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-300"></div>
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-amber-50 text-amber-600 shadow-inner">☕</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Pumpernickel German Bakery</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            Located right in the bustling Old Leh Market. Famous for high-altitude freshly brewed espresso shots, legendary apple pies, yak cheese sandwiches, and artisanal tracking breakfast platters for early travelers.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3: Rooftop Views & Global Eats - Leh (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-indigo-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner">🌆</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Bon Appétit</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            A minimalist, high-end fine dining space crafted out of traditional mud architecture. Features a premium rooftop deck with unobstructed sunset views of the Stok range, serving elegant continental and tandoori infusions.
          </p>
        </div>
      </div>
    </div>

    {/* Card 4: Organic Farm-to-Table Experience - Leh (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300">
      <div className="absolute -top-12 -left-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0 shadow-inner">🌱</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Alchi Kitchen (Leh / Alchi)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            A pioneering culinary venture celebrating lost Ladakhi recipes with a modern farm-to-table spin. Spearheaded by local women chefs, it offers a highly curated dining architecture. Don't miss their sweet and savory *Khambir* (local fermented whole-wheat bread) and *Thukpa* varieties loaded with organic valley greens.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700">Farm-to-Table</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Women-Led Enterprise</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 5: Hippie-Vibe Garden Oasis - Leh (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-yellow-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-yellow-50 text-yellow-600 shadow-inner">🌳</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Lala's Art Café</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            A cozy, bohemian structural restoration project right in Old Leh town. Offers an artistic layout featuring local photography, smooth cold brews, vegan treats, and a highly intimate mountain terrace.
          </p>
        </div>
      </div>
    </div>

    {/* Card 6: Premium Desert Oasis Comfort - Nubra Valley (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-red-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-red-50 text-red-600 shrink-0 shadow-inner">🍛</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Crazy Burger & Himalayan Cafe (Hunder)</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            A structural culinary surprise tucked deep within the cold sand dunes of Nubra Valley. Known for serving remarkably juicy gourmet burgers, piping hot sizzlers, and premium multi-cuisine comfort layouts designed perfectly to refuel riders after navigating the challenging terrain of Khardung La.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-red-500/10 text-red-700">Rider Fuel Stop</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Nubra Valley Hub</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Info /> History & Heritage
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Leh and Ladakh were once part of the ancient **Silk Route**
                connecting Tibet with Central Asia. The region boasts centuries-old
                Buddhist monasteries such as **Thiksey**, **Hemis**, and **Diskit**.
                You can witness the influence of **Tibetan culture, art, and
                spirituality** throughout the valley.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Camera /> Top Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🏞️ <b>Pangong Tso:</b> A breathtaking high-altitude lake</li>
                <li>🕌 <b>Hemis Monastery:</b> Largest and richest monastery in Ladakh</li>
                <li>🕍 <b>Shanti Stupa:</b> Symbol of world peace overlooking Leh</li>
                <li>🌌 <b>Nubra Valley:</b> Desert between snow mountains</li>
                <li>🛕 <b>Thiksey Monastery:</b> Replica of Potala Palace in Tibet</li>
              </ul>
              <a
                href="https://ladakh.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-green-700 mt-3 underline hover:text-green-900"
              >
                Visit Ladakh Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Adventure */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-yellow-700 mb-3">
                <Bike /> Adventure & Activities
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Leh–Ladakh is a paradise for adventure lovers. Popular experiences
                include **biking across Khardung La (world’s highest motorable
                road)**, **river rafting in Zanskar**, **trekking**, and **camping by
                Pangong Lake**. Every turn on these mountain roads reveals a new
                wonder.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-pink-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time to Visit:</b> May – September</li>
                <li>🚗 <b>By Road:</b> From Manali or Srinagar via scenic highways</li>
                <li>✈️ <b>Nearest Airport:</b> Kushok Bakula Rimpochee Airport, Leh</li>
                <li>🏍️ <b>Famous Route:</b> Manali → Leh → Nubra → Pangong → Kargil</li>
                <li>🏡 <b>Stay:</b> Boutique hotels, monasteries, campsites</li>
              </ul>
            </motion.div>
          </div>

          {/* Culture & People */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border border-green-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
              <CloudSnow /> Culture & People
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ladakh’s people are warm, humble, and deeply spiritual. Their
              culture is influenced by **Tibetan Buddhism**, visible in art, dance,
              and prayer flags fluttering across mountains. Traditional dishes like
              **Thukpa**, **Momos**, and **Butter Tea** offer a taste of the
              Himalayas.
            </p>
          </motion.div>


          {/* Safety Advisory Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-20 selection:bg-rose-500 selection:text-white">
  
  {/* Tactical High-Altitude Atmosphere Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/10 to-blue-500/5 blur-[150px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="mb-12 space-y-4">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/10 via-blue-500/5 to-transparent border border-rose-500/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-rose-600 dark:text-rose-400 backdrop-blur-md">
      🚨 Critical Mountain Protocols
    </div>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
      High-Altitude <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600">Safety Matrix</span>
    </h2>
    <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl">
      Ladakh ka terrain jitna khoobsurat hai, utna hi unpredictable bhi. Safe aur smooth execution ke liye in 6 core parameters ko strictly follow karein.
    </p>
  </div>

  {/* Asymmetric Bento Grid System */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Card 1: Acclimatization (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-rose-400/50 transition-all duration-300">
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-rose-500/10 rounded-full blur-xl group-hover:bg-rose-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-rose-50 text-rose-600 shrink-0 shadow-inner">🏔️</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Mandatory Acclimatization</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            Leh land karte hi pehle **24 to 48 hours** complete rest compulsory hai. Zero physical exertion. Aapka body direct 11,500 ft ki thin air ko tabhi adapt kar payega jab aap rest karenge, varna AMS (Acute Mountain Sickness) risk critical ho jata hai.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-700">No Sleeping Hits</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Diamox Consult</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2: Hydration & Diet (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-blue-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-blue-50 text-blue-600 shadow-inner">💧</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Hydration Rule</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            Thin atmospheric pressure me dehydration fast hota hai. Din me kam se kam **4-5 Liters paani** piyein. Light carbs consume karein aur alcohol/smoking ko strictly avoid karein.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3: Permits & Verification (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-purple-50 text-purple-600 shadow-inner">📄</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Inner Line Permits (ILP)</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            Pangong Tso, Nubra Valley, aur Hanle jaise sensitive border zones ke liye **ILP (Inner Line Permit)** mandatory hai. Leh counter ya online portal se documents verify karakar multiple physical copies carry karein.
          </p>
        </div>
      </div>
    </div>

    {/* Card 4: Terrain & Driving Protocols (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300">
      <div className="absolute -top-12 -left-12 w-28 h-28 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-amber-50 text-amber-600 shrink-0 shadow-inner">🏍️</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Water Crossings & Passes</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            Khardung La aur Chang La jaise high passes par afternoon me snow melt hone se heavy water crossings (**Pagas**) bante hain. Passes ko hamesha **early morning (before 10 AM)** cross karein jab water level lowest ho. Non-local vehicles restricted ho sakte hain, local taxi laws follow karein.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700">Early Pass Clearance</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">Local Taxi Pre-booked</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 5: Telecom Connectivity (Single Width) */}
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300">
      <div className="flex flex-col h-full justify-between space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-3xl p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">📡</span>
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Network Blackouts</h3>
          <p className="text-gray-600 text-xs leading-relaxed font-medium">
            Ladakh me sirf **Postpaid SIM cards** (majorly Jio aur Airtel) kaam karte hain. Leh se aage nikalte hi signal dead zones milenge, isliye offline maps aur emergency contacts pehle hi download kar lein.
          </p>
        </div>
      </div>
    </div>

    {/* Card 6: Extreme Weather & Layers (Double Width) */}
    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-indigo-400/50 transition-all duration-300">
      <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-300"></div>
      <div className="flex items-start gap-5">
        <span className="text-3xl p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0 shadow-inner">🧥</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Thermal Dynamics & UV Shield</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            Ladakh me dhoop aur chhav ka temperature gap radical hota hai—aapko ek saath sunburn aur frostbite ho sakta hai. Ek heavy jacket ke bajaye **multi-layered clothing** pehnein. UV radiation se bachne ke liye high-grade SPF-50+ sunscreen aur polarized sunglasses lagana mat bhoolna.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700">Windproof Outer Shell</span>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">UV-400 Protection</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Leh & Ladakh
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTpS5il7ARF3ieMtyhQ5YsAnVNH-ysZwHmX3pMKjq0b1l1vv0ggZWanyuKzOv4Cb_9Hs4KcUS9UdtzSzvEXqrocALk&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRubr_9AOTLET5xqioNR_j9Qf0jKmrgcQSaVfnObOPXSaTodbewYEyox0xvTdPX0rOKKrImxWh53GzkxoWXoN6Xcs&s=19",
                "https://zoyotrip.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-24-at-1.09.20-PM-1-1024x1024.jpeg.webp",
                "https://images.indianexpress.com/2019/01/leh-ladakh-getty-images-759.jpg",
               
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Leh Ladakh"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1596813362035-6b76c3c86b07?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://ladakh.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Visit Ladakh Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LehLadakh;
