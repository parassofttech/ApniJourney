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
        className="w-full mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
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
      <div className="inline-block gap-5">
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-sky-50 text-sky-600 shrink-0 shadow-inner">✨</span>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">The Cold Desert Reality</h3>
          <p className="text-gray-600 text-sm leading-relaxed items-start font-medium">
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner">📍</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-blue-50 text-blue-600 shadow-inner">✈️</span>
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
      <div className=" inline-block gap-5">
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0 shadow-inner">🐫</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-amber-50 text-amber-600 shadow-inner">☀️</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-purple-50 text-purple-600 shrink-0 shadow-inner">🕉️</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-amber-50 text-amber-600 shrink-0 shadow-inner">☀️</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">🏔️</span>
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
          <span className="inline-block md:text-3xl md:p-3.55 rounded-2xl bg-blue-50 text-blue-600 shadow-inner">🍁</span>
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
      <div className="md:flex items-start inline-block gap-5">
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0 shadow-inner">❄️</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-purple-50 text-purple-600 shadow-inner">⛓️</span>
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
      <div className="flex items-start md:inline-block gap-5">
        <span className=" md:text-3xl md:p-3.5 rounded-2xl bg-rose-50 text-rose-600 shrink-0 shadow-inner">🎭</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-rose-50 text-rose-600 shrink-0 shadow-inner">👑</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner">🏛️</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">🎪</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-amber-50 text-amber-600 shrink-0 shadow-inner">🌳</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-blue-50 text-blue-600 shadow-inner">🌊</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-purple-50 text-purple-600 shrink-0 shadow-inner">🏔️</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-orange-50 text-orange-600 shrink-0 shadow-inner">🥟</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-amber-50 text-amber-600 shadow-inner">☕</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner">🌆</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0 shadow-inner">🌱</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-yellow-50 text-yellow-600 shadow-inner">🌳</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-red-50 text-red-600 shrink-0 shadow-inner">🍛</span>
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


{/* Budget Breakdown Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">
  
  {/* Cyber-Atmospheric Background Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-300/10 to-cyan-300/10 blur-[140px] rounded-full"></div>
  </div>

  {/* Header Block */}
  <div className="text-center mb-16">
    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
      ⚡ Financial Planner
    </span>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
      Budget Breakdown for Ladakh
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Analyze daily cost structures and pick the ideal travel configuration that matches your pace.
    </p>
  </div>

  {/* Premium Tier Matrix */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

    {/* Card 1: Budget Traveler */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-emerald-400/60 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
            💸
          </div>
          <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
            Eco Tier
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Budget Nomad
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Perfect for backpackers and solo travelers looking to scale Ladakh efficiently on low overheads using homestays.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1,500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🛵 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹500 – ₹1,000</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-emerald-600 tracking-tight">
          ₹1,700 – ₹3,300 <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

    {/* Card 2: Mid Range (Featured Column) */}
    <div className="group bg-white border-2 border-cyan-500 hover:border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-cyan-500/5">
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
        Recommended
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg font-bold border border-cyan-100 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
            🏔️
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-md font-bold">
            Balanced
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Mid-Range Explorer
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Ideal setup for groups and family units aiming for insulated stays, private cabs, and maximum pass coverage.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,500 – ₹5,500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1,500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,000 – ₹4,000</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-cyan-600 tracking-tight">
          ₹5,300 – ₹11,000 <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

    {/* Card 3: Luxury */}
    <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-purple-400/60 shadow-md hover:shadow-xl hover:shadow-purple-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg font-bold border border-purple-100 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
            🌟
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-bold">
            Elite Premium
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Luxury Opulence
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Crafted for premium travelers wanting centralized heating properties, luxury camps, and high-end transport options.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹9,000 – ₹20k+</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹1,500 – ₹3,500</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹4,500 – ₹7,000</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-purple-600 tracking-tight">
          ₹15,000 – ₹30.5k+ <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

  </div>

  {/* Pro-Tip Floating Banner */}
  <div className="mt-14 text-center">
    <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-cyan-500/10 via-emerald-500/5 to-transparent border border-cyan-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-cyan-950 font-semibold text-sm md:text-[15px] leading-relaxed">
        <strong className="text-cyan-800 font-black">Smart Commute:</strong> Sharing local cabs via union pools or splitting private SUV rates with groups is the absolute best strategy to drastically minimize the transportation overhead across the circuit!
      </p>
    </div>
  </div>

</section>
{/* Shopping Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-violet-500 selection:text-white">
  
  {/* Dynamic Retail Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-violet-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-amber-50 border border-violet-100 text-violet-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🛍️ Retail Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950">
      Shopping in Manali
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Explore bustling mountain avenues, authentic handloom cooperatives, and Tibetan artisan craft hubs.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Tibetan Market (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-violet-300 shadow-lg hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-violet-50 text-xl flex items-center justify-center border border-violet-100/70 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🎡
          </div>
          <span className="text-xs font-bold bg-violet-100/60 text-violet-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Iconic Bazaars
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-violet-800 transition-colors duration-200">
          Tibetan Market & Flea Alleys
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Dive deep into mountain commerce at the iconic central <span className="font-semibold text-gray-900">Tibetan Market</span>. Perfect spots to scout for detailed silver amulets, bamboo-crafted artifacts, hand-woven carpets, spinning prayer wheels, and intricate singing bowls.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-violet-600 tracking-wider uppercase">
        Vibrant Cultural Bargains
      </div>
    </div>

    {/* Card 2: Winter & Mountain Fashion */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧥
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Winter Wear
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Upgrade your mountain wardrobe instantly along <span className="font-semibold text-gray-900">Mall Road</span> lanes. Score heavy fleece jackets, cozy woolen caps, polarized snow shades, and embroidered leather boots.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Alpine & Warm Attire
      </div>
    </div>

    {/* Card 3: Handloom & Handicrafts */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧶
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Kullu Handlooms
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          The valley boasts a rich heritage of tangible art. Discover certified pure wool weavers at state cooperatives like <span className="font-semibold text-gray-900">Bhuttico</span>, famous for geometric Kullu shawls and heavy pashminas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Artisan Weaves & Heritage
      </div>
    </div>

    {/* Card 4: Old Manali Boutiques (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏘️
          </div>
          <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Bohemian Retail
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          Old Manali Alley Shops
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience a laid-back retail journey blended with hippy subcultures inside the rustic slopes of <span className="font-semibold text-gray-900">Old Manali Lanes</span>. These boutique wooden shops bring together indie silver jewelry, hemp bags, customized dreamcatchers, and trippy custom-painted merchandise.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Boho Hillside Emporiums
      </div>
    </div>

    {/* Card 5: Local Food Souvenirs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍎
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Orchard Treasures
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Take home tactile memories ranging from farm-fresh Apple Jams and organic rhododendron juices to local wild honey and packaged Himachali fruit wines.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Flavors & Fresh Preserves
      </div>
    </div>

    {/* Card 6: Herbal Extracts & Saffron */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌱
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Spices & Shilajit
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Navigate legacy corner stores tucked inside <span className="font-semibold text-gray-900">Manu Market</span> for budget-friendly authentic items like pure strands of Kashmiri saffron, organic tea packs, and high-altitude resin extracts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        High-Altitude Herbal Roots
      </div>
    </div>

  </div>

  {/* Smart Retail Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 via-amber-500/5 to-transparent border border-violet-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-violet-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-violet-900 font-bold">Shopping Tip:</strong> Polite bargaining works wonderfully in open flea stalls and the Tibetan market! However, for pure woolen items like handloom blankets and shawls, always stick to the government-authorized fixed price outlets like Bhuttico to ensure genuine quality.
      </p>
    </div>
  </div>

</section>



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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-rose-50 text-rose-600 shrink-0 shadow-inner">🏔️</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-blue-50 text-blue-600 shadow-inner">💧</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-purple-50 text-purple-600 shadow-inner">📄</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-amber-50 text-amber-600 shrink-0 shadow-inner">🏍️</span>
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
          <span className="inline-block md:text-3xl md:p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">📡</span>
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
        <span className="md:text-3xl md:p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0 shadow-inner">🧥</span>
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
            <div className="grid sm:grid-cols-2    lg:grid-cols-3 gap-4">
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
