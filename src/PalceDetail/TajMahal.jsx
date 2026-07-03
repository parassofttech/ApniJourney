import React from "react";

/**
 * TajMahal.jsx
 * Simple, mobile-friendly info card with photo for Taj Mahal.
 * - Place this inside src/components/
 * - Usage: import TajMahal from "./components/TajMahal";
 */

const TajMahal = () => {
  return (
    <section className="max-w-3xl mx-auto p-4">
      {/* Photo */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          // Unsplash photo for Taj Mahal (stable query-based URL)
          src="https://assets.architecturaldigest.in/photos/68aee6b6c217baca2192039c/16:9/w_1616,h_909,c_limit/Untitled%20design%20-%202025-08-27T163622.470.png"
          alt="Taj Mahal, Agra"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="mt-4 text-2xl font-extrabold text-gray-900">Taj Mahal</h1>

      {/* Short Summary */}
      <p className="mt-2 text-gray-700 text-sm leading-relaxed">
        The Taj Mahal is an ivory-white marble mausoleum located on the right
        bank of the Yamuna river in Agra, Uttar Pradesh, India. It was
        commissioned by the Mughal emperor Shah Jahan in 1631 in memory of his
        wife Mumtaz Mahal. The complex was mostly completed in the mid-17th
        century and is widely regarded as a masterpiece of Mughal architecture.
      </p>

      {/* Introduction Section: Taj Mahal */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Imperial Gold & Ivory Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>✨</span> World Wonder Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      The Taj Mahal
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      An ivory-white marble testament to eternal love, standing as the pinnacle of Mughal architectural brilliance.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🕌</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        A Monument of Eternal Love
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Situated gracefully on the southern bank of the Yamuna River in Agra, the Taj Mahal is globally recognized as the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal, this stunning complex spans over 42 acres of perfectly symmetrical geometric layout.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-700">1648</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Year Completed</p>
        </div>
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-700">7 New</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Wonders of World</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Architectural Symmetry */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          📐
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Flawless Absolute Symmetry
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Every component of the structure—from the four independent minarets to the central dome—adheres to strict bilateral symmetry, with the sole exception of Shah Jahan's own cenotaph.
        </p>
      </div>

      {/* Card 2: Pietra Dura Inlay */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          💎
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Intricate Pietra Dura Craft
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The walls are finely embedded with exquisite semi-precious stones like lapis lazuli, jade, and turquoise, creating flawless floral patterns carved directly into the pure Makrana marble.
        </p>
      </div>

      {/* Card 3: Dynamic Color Changing */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🌅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Changing Hues
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The monument dramatically shifts its color tone depending on the time of day: a soft pinkish glow at early sunrise, dazzling pearly white at noon, and a magical golden hue under full moonlight nights.
        </p>
      </div>

      {/* Card 4: Charbagh Garden Layout */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🌳
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Majestic Charbagh
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The main structure faces a classic Persian <span className="font-semibold">Charbagh</span> garden, divided into four quadrants by raised pathways and a central reflecting pool that perfectly mirrors the monument.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        The Taj Mahal isn't merely an architectural feat; it's an emotional experience written in stone. Its perfect proportions and shifting morning glow make it a bucket-list destination that fundamentally redefines what a monument can evoke.
      </p>
    </div>
  </div>

</section>

{/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-sky-500 selection:text-white">

  {/* Advanced Radial Background Glows (Spiritual Ganges & Adventure Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-orange-50 border border-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌊 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      Best Time to Visit Rishikesh
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect valley escape aligned with ideal river rapids and pleasant yoga weather loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-sky-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl font-bold mb-6 border border-sky-100">
          🧘‍♂️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The River & Yoga Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Rishikesh experiences its ultimate peak from <span className="font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">October to March</span> when the climate settles between a cool 15°C - 25°C, providing crystal-clear emerald waters for white-water rafting and a breezy ambiance for outdoor meditation.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During these high-energy weeks, spiritual nodes like Laxman Jhula, Triveni Ghat, and the newly active <span className="font-semibold text-gray-900">Shivpuri camping loops</span> flood with adventure seekers, international yoga enthusiasts, and evening aarti crowds.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-sky-50 to-orange-50 rounded-2xl border border-sky-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-sky-900 font-medium leading-relaxed">
          <strong className="text-sky-950">Pro Tip:</strong> Want to attend world-class sessions during the International Yoga Festival or catch heavy monsoon clearance discounts before rafting opens? Late September or early March are beautiful, less crowded buffer windows.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Peak Winter & Spring */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ⛺
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
              Winter & Spring (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The high adventure window. Absolute prime time for high-grade river rafting, beach camping alongside Ganges, and cafe hopping in Tapovan.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Prime Rafting
        </span>
      </div>

      {/* Season 2: Summer Escape */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Summer (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Warm days touching 35°C. Rafting operates heavily till June. Ideal for taking holy dips in the river, cooling off at Neer Garh waterfalls, and exploring luxury wellness resorts.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Summer Rapids
        </span>
      </div>

      {/* Season 3: Holy Monsoon */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🔱
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Monsoon (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Heavy rains fill the Ganges, shutting down all river rafting and water sports completely. Perfect for internal rejuvenation, ashram stays, and experiencing the legendary Savan/Kanwar Mela vibes.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Spiritual Retreats
        </span>
      </div>

    </div>
  </div>

</section>

       {/* Best Hotels Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
  
  {/* Advanced Radial Background Glows (Imperial Mughal Court & Marble Reflection Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      👑 Royal Stay Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Hotels Near Taj Mahal
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Handpicked ultra-luxury Mughal palaces, panoramic monument-view decks, and comfortable modern stays.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Ultra-Luxury Palace (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
            🕌
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
            7-Star Elite Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          The Oberoi Amarvilas & Ultra-Luxury Palaces
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience unrivaled regal opulence at world-renowned destinations like <span className="font-semibold text-gray-900">The Oberoi Amarvilas</span>. Located just 600 meters from the monument, every single room offers uninterrupted, breathtaking views of the Taj Mahal. Indulge in royal Mughal arches, sprawling reflection pools, private terraced lawns, and dedicated golf-buggy transfers directly to the heritage gates.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Imperial Living & Absolute Taj Proximity
      </div>
    </div>

    {/* Card 2: Premium Monument View Hotels */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏢
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Premium Rooftop Views
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Secure incredible viewing decks at premium properties like <span className="font-semibold text-gray-900">Taj Hotel & Convention Centre</span> or <span className="font-semibold text-gray-900">Radisson Hotel Agra</span>. These offer stunning rooftop infinity pools looking over the white dome horizon, modern wellness layouts, and massive banquet grids.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Modern Rooftops & Skyline Vistas
      </div>
    </div>

    {/* Card 3: Boutique Heritage Properties */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏺
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Boutique Heritage Havelis
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Immerse yourself into authentic vintage charm at properties reflecting classic red-sandstone aesthetics. These feature lush inner courtyards, traditional Jharokha window frameworks, and localized folk dance showcases perfect for cultural travelers.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Classic Courtyards & Local Culture
      </div>
    </div>

    {/* Card 4: Executive Business & Leisure Blocks (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🛡️
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Reliability
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Fatehabad Road Luxury Business Hubs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Explore sprawling luxury parameters along the main Fatehabad Road circuit, featuring grand setups like <span className="font-semibold text-gray-900">ITC Mughal</span> and <span className="font-semibold text-gray-900">Courtyard by Marriott</span>. These massive estates host premium Mughal-inspired landscape gardens, expansive multi-cuisine buffets, signature luxury spas, and comprehensive family play zones.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Sprawling Estate Luxury & Hospitality
      </div>
    </div>

    {/* Card 5: Smart Budget & Traveler Hubs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎒
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Smart Backpacker Spaces
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Highly secure, vibrant budget hostels and homestays located within the pedestrian-only Taj East Gate area. Excellent common room environments for backpackers, complete with quick bicycle rentals and walking tour groups.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
        Pocket-Friendly Walkway Stays
      </div>
    </div>

    {/* Card 6: Ultra-Premium Private Luxury Residences */}
    <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center shrink-0 border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
          💎
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
            Exclusive Luxury Villas & Premium Suites
          </h3>
          <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
            Tailor-made for VIP groups and family gatherings requiring total privacy. These high-end properties offer private temperature-controlled dip pools, butler service pipelines, and bespoke open-air terrace dinners looking out toward the distant Yamuna banks.
          </p>
        </div>
      </div>
      <span className="text-xs font-bold tracking-wider uppercase bg-red-100/70 text-red-800 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
        Complete Elite Seclusion
      </span>
    </div>

  </div>

  {/* Smart Booking Advisory Glass Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-amber-900 font-bold">Booking Window Tip:</strong> Visiting for the legendary Full Moon night viewings or during the pleasant winter peak of December to February? Book your monument-facing terrace views months in advance to outrun heavy premium surge windows!
      </p>
    </div>
  </div>

</section>


{/* Restaurants Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">
  
  {/* Dynamic Culinary Background Tints (Mughlai Fine Dine & Rooftop Lounges) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍽️ Culinary Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Best Restaurants & Cafes Near Taj Mahal
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Savor everything from aromatic clay-oven imperial Mughlai feasts to modern, artistic rooftop espresso spaces.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Authentic Imperial Mughlai (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍖
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Legendary Fine Dining
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Imperial Mughlai Fine Dining & Clay-Oven Grills
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Indulge in legendary, slow-cooked royal culinary arts at elite icons like <span className="font-semibold text-gray-900">Peshawri (ITC Mughal)</span> and <span className="font-semibold text-gray-900">Pinch of Spice</span>. These are absolute milestones for gastronomic purists, offering world-famous slow-simmered rich black dals, clay-oven tandoori kebabs, saffron-infused mutton biryanis, and rich Mughlai gravy configurations.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Timeless Slow-Cooked Royal Mughlai Heritage
      </div>
    </div>

    {/* Card 2: Iconic Local Breakfast & Sweets */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥞
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Bedai Breakfast Loops
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Dive into local breakfast traditions at generational institutions like <span className="font-semibold text-gray-900">Deviram Sweets</span>. Try the crispy, lentil-stuffed <span className="font-semibold text-gray-900">Bedai Puri</span> paired with fiery potato gravies, fresh curd, and piping hot, syrupy jalebis.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Agra's Signature Local Morning Trails
      </div>
    </div>

    {/* Card 3: Modern Skyline Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Taj-Facing Panoramic Cafes
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor artisanal espresso shots and continental bakes at modern setup spaces near Taj Ganj. These deliver sweeping sunset views over the marble domes, making them prime blocks for evening relaxation.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Aesthetic Rooftop Monument Layouts
      </div>
    </div>

    {/* Card 4: Authentic Multi-Cuisine Hubs (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍲
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Traveler Hotspots
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
          Taj East Gate Multi-Cuisine Diners
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Unwind at top-voted global traveler spots like <span className="font-semibold text-gray-900">Sanskriti Restaurant</span> or hubs along the premium walkways. These offer exceptionally reliable multi-cuisine menus spanning traditional North Indian spreads, fresh tandoori appetizers, and comforting global continental options.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Optimized Family Comfort Dining
      </div>
    </div>

    {/* Card 5: Social & Impact Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌱
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Sheroes Hangout
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Visit the inspirational <span className="font-semibold text-gray-900">Sheroes Hangout</span>, a deeply impactful social cafe run completely by brave acid attack survivors. Stop by for heartfelt conversations, great library setups, and delicious home-style vegetarian snacks.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Conscious Social Dining
      </div>
    </div>

    {/* Card 6: Traditional Petha Trail */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍬
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Authentic Petha Lounges
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          No Agra excursion is complete without visiting authentic hubs like <span className="font-semibold text-gray-900">Panchi Petha</span>. Secure premium boxes of classic translucent white pethas, saffron Angoori variations, and rich roasted dry-fruit configurations.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Agra's Signature Confectionery
      </div>
    </div>

  </div>

  {/* Foodie Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-rose-900 font-bold">Foodie Tip:</strong> Plan your high-end Mughlai dinner at Peshawri around 8:00 PM. Watching their expert chefs handle massive iron skewers over roaring open coals while you enjoy tender Sikandari Raan with massive artisan tandoori naans is an incredible culinary experience!
      </p>
    </div>
  </div>

</section>

      {/* Key facts grid */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <strong className="block text-gray-800">Location</strong>
          <span className="text-gray-600">Agra, Uttar Pradesh, India</span>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <strong className="block text-gray-800">Built</strong>
          <span className="text-gray-600">c. 1631–1653 (17th century)</span>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <strong className="block text-gray-800">Built for</strong>
          <span className="text-gray-600">Mumtaz Mahal (wife of Shah Jahan)</span>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <strong className="block text-gray-800">Style</strong>
          <span className="text-gray-600">Mughal architecture</span>
        </div>
      </div>


      {/* More info and link */}
      <div className="mt-4 text-sm text-gray-600 space-y-2">
        <p>
          The complex includes the main mausoleum, a large charbagh (formal
          garden), a mosque, and other auxiliary buildings. The white marble
          was sourced from Makrana (Rajasthan) and the site is famous for its
          symmetry and intricate inlay work.
        </p>

        <p>
          For official description and UNESCO listing, visit the UNESCO page
          (link below).
        </p>

        <a
          className="inline-block mt-2 text-blue-600 underline"
          href="https://whc.unesco.org/en/list/252"
          target="_blank"
          rel="noreferrer"
        >
          Read more on UNESCO
        </a>
        <br />
      </div>
       <br /> <br /> <br /> 
    </section>
  );
};

export default TajMahal;
