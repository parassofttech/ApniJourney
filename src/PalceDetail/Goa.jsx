import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Umbrella, Waves, ExternalLink,ChevronDown, HelpCircle } from "lucide-react";

const Goa = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { q: "What is the best time to visit Goa?", a: "November to February is the best time due to pleasant weather and vibrant nightlife." },
    { q: "Is Goa safe for solo travelers?", a: "Yes, Goa is generally safe, but basic precautions like avoiding isolated areas at night are recommended." },
    { q: "How many days are enough for Goa?", a: "A 4–6 day trip is ideal to explore beaches, nightlife, and attractions comfortably." },
    { q: "What is the cheapest way to travel in Goa?", a: "Renting a scooter is the most affordable and convenient way to explore Goa." },
    { q: "Which airport should I use for Goa?", a: "You can use Dabolim Airport or Manohar International Airport (Mopa)." },
    { q: "Is alcohol cheap in Goa?", a: "Yes, alcohol is cheaper in Goa compared to most Indian states." },
    { q: "What are must-try foods in Goa?", a: "Goan fish curry, prawn curry, vindaloo, and bebinca are must-try dishes." },
    { q: "Can I explore Goa without a car?", a: "Yes, you can use scooters, taxis, or local buses to travel around Goa." },
    { q: "Is Goa expensive for tourists?", a: "Goa can be budget-friendly or luxury depending on your travel style." },
    { q: "What are the top attractions in Goa?", a: "Beaches, forts, churches, nightlife spots, and flea markets are top attractions." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=500&h=500&s=1"
          alt="Baga Beach Goa"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Introduncion */}
        
       <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-cyan-500 selection:text-white">
  
  {/* Advanced Radial Background Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌴</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950">
      Discover Goa
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      A perfect blend of pristine beaches, heritage culture, electrifying nightlife & thrilling adventure.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-blue-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">✨</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        India's Coastal Paradise
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Goa, India’s smallest yet most vibrant state, is a world-famous travel destination known for its golden beaches, tropical charm, and lively atmosphere. 
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Located on the western coast of India along the Arabian Sea, Goa attracts millions of tourists every year who come here seeking relaxation, adventure, and unforgettable experiences that stay forever.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-blue-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-blue-600">30+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Beaches</p>
        </div>
        <div className="bg-cyan-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-cyan-600">Infinite</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Vibes</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Culture */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-xl font-bold text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Heritage & Culture
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A unique blend of Indian and Portuguese culture. From stunning colonial-era churches like the Basilica of Bom Jesus to historic forts like Fort Aguada, every corner tells a rich story.
        </p>
      </div>

      {/* Card 2: Nightlife */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-xl font-bold text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
          🎉
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          Party Capital Vibes
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Famous for its energetic nightlife, pulsing beach parties, music festivals, and shacks that stay alive till dawn. Dance under stars or chill with a peaceful sunset.
        </p>
      </div>

      {/* Card 3: Food Lover's Paradise */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🦐
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Culinary Journey
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A paradise for food lovers. Relish authentic spicy Goan seafood, traditional curries like Vindaloo, and wrap up with the rich layered traditional Bebinca dessert.
        </p>
      </div>

      {/* Card 4: Adventure */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-xl font-bold text-cyan-600 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
          🏄‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Water Sports & Thrills
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Get your adrenaline pumping with thrilling water sports including deep scuba diving, parasailing high above the waves, and high-speed jet skiing across the coast.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-blue-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Goa is not just a destination—it is an experience that combines nature, culture, adventure, and relaxation into one unforgettable journey. Whether you are traveling solo, with friends, or family, Goa promises memories that stay with you forever.
      </p>
    </div>
  </div>

</section>

        {/* best time to visite */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-amber-500 selection:text-white">
  
  {/* Advanced Radial Background Glows (Sunset Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ☀️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Time to Visit Goa
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect beach holiday aligned with the ideal season and local vibes.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-orange-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
          ✨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Golden Window
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          The ultimate time to witness Goa in its true glory is between <span className="font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">November and February</span>. The weather drops to a pleasant 20°C - 28°C, bringing cool coastal breezes perfect for sunbathing, water sports, and endless exploration.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          As peak season kicks in, the entire region bursts with vibrant energy, music festivals, lively beach markets, and beach shacks that sleep till dawn.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-blue-900 font-medium leading-relaxed">
          <strong className="text-blue-950">Pro Tip:</strong> Want to bypass high flight rates and insane crowd levels? Target the shoulder weeks of late October or early March.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Winter (November – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The high season. Absolute goldmine for buzzing nightlife, open-air beach parties, and fully operational water sports.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Peak Season
        </span>
      </div>

      {/* Season 2: Monsoon */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
              Monsoon (June – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Heavy rainfalls repaint Goa into lush tropical greens. Beautiful waterfalls appear, water sports close, but it's perfect for nature lovers.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Nature Escape
        </span>
      </div>

      {/* Season 3: Summer */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🔥
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Summer (March – May)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Hot and highly humid conditions. However, luxury resorts drop prices dramatically, making it a dream for smart budget backpackers.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Budget Friendly
        </span>
      </div>

    </div>
  </div>

</section>

        {/* How to Reach */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-indigo-500 selection:text-white">
  
  {/* Modern Tech-Themed Radial Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-80 h-80 bg-sky-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-indigo-50 border border-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ✈️ Transit Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-950 to-gray-950">
      How to Reach Goa
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-md mx-auto font-medium">
      Seamless travel options mapped out by air, rail, and open roads.
    </p>
  </div>

  {/* Interactive 3-Column Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

    {/* Option 1: By Air */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl font-bold mb-6 border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
          ✈️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-800 transition-colors duration-200">
          By Air
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
          The fastest way to hit the beach. Goa features two operational airports: 
          <span className="font-semibold text-gray-900 bg-sky-50/80 px-1 py-0.5 rounded mx-1">Dabolim Airport</span> (Central/South) and the modern 
          <span className="font-semibold text-gray-900 bg-sky-50/80 px-1 py-0.5 rounded mx-1">Manohar International Airport (Mopa)</span> in North Goa. Both enjoy seamless connectivity across major metros.
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100/80 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Fastest & Most Convenient
      </div>
    </div>

    {/* Option 2: By Train */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold mb-6 border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🚆
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          By Train
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
          Highly accessible via Indian Railways. The state's premium lifelines are 
          <span className="font-semibold text-gray-900 bg-indigo-50/80 px-1 py-0.5 rounded mx-1">Madgaon Junction</span> and 
          <span className="font-semibold text-gray-900 bg-indigo-50/80 px-1 py-0.5 rounded mx-1">Vasco da Gama</span>. Dynamic express lines traversing via Mumbai, Delhi, or Pune offer comfortable overnights.
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100/80 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Pocket Friendly & Scenic
      </div>
    </div>

    {/* Option 3: By Road */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold mb-6 border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🚌
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
          By Road
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
          Flawless national highway configurations link Goa with neighboring states. Private cruisers, self-drives, or luxury sleeper multi-axle buses glide smoothly across the legendary 
          <span className="font-semibold text-gray-900 bg-blue-50/80 px-1 py-0.5 rounded mx-1">Mumbai-Goa</span> and 
          <span className="font-semibold text-gray-900 bg-blue-50/80 px-1 py-0.5 rounded mx-1">Pune-Goa</span> ghat sections.
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100/80 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Perfect Roadtrippers Choice
      </div>
    </div>

  </div>

  {/* Pro-Tip Interactive Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-transparent border border-sky-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-indigo-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-indigo-900 font-bold">Wanderlust Tip:</strong> If your schedule permits, choose the rail or road route—the sweeping panoramas across the lush <span className="underline decoration-sky-400 decoration-2 underline-offset-2">Western Ghats</span> are absolutely breathtaking!
      </p>
    </div>
  </div>

</section>

        {/* Top Attractions */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-emerald-500 selection:text-white">
  
  {/* Advanced Tropical Radial Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-rose-50 border border-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏝️ Hotspots Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Top Attractions in Goa
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Must-visit sun-soaked beaches, historic fort ruins & legendary coastal experiences.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Card 1: Beaches (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏖️
          </div>
          <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
          Sun-Kissed Beaches
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Goa's coastal crown gems include the happening shores of <span className="font-semibold text-gray-900">Baga & Calangute</span>, the bohemian spirit of <span className="font-semibold text-gray-900">Anjuna</span>, and the tranquil pristine bays of <span className="font-semibold text-gray-900">Palolem</span>. Unmatched hubs for deep sunbathing, active swimming, night beach parties, and action-packed water sports.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        North & South Coasts
      </div>
    </div>

    {/* Card 2: Historic Forts */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Historic Forts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Trek through iconic stone defenses like <span className="font-semibold text-gray-900">Fort Aguada</span> and the cinematic cliffside edges of <span className="font-semibold text-gray-900">Chapora Fort</span>, yielding glorious Arabian Sea sunsets and rich centuries-old colonial tales.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Panoramic Views
      </div>
    </div>

    {/* Card 3: Heritage Churches */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☤
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Old Goa Heritage
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Step back into global history with UNESCO World Heritage sites including the grand <span className="font-semibold text-gray-900">Basilica of Bom Jesus</span> and <span className="font-semibold text-gray-900">Se Cathedral</span>, standing proud with intricate Portuguese-baroque architectural frameworks.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        UNESCO Landmarks
      </div>
    </div>

    {/* Card 4: Nightlife (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌙
          </div>
          <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Electrifying
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          Vibrant Nightlife
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Dive deep into the unmatched energy of the night across neon-lit shorelines. Goa's party sectors are packed with pulsating neon open-air raves, high-stakes luxury floating river casinos, and premier beach clubs scattered along the dynamic <span className="font-semibold text-gray-900">Baga, Candolim, and Arpora</span> stretches.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Party Capital Essentials
      </div>
    </div>

    {/* Card 5: Local Markets */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🛍️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Flea Markets
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Hunt for unique bohemian gear, authentic spices, beachwear, and detailed handmade artifacts at legendary local markets like the sprawling coastal <span className="font-semibold text-gray-900">Anjuna Flea Market</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Street Shopping
      </div>
    </div>

    {/* Card 6: Adventure Sports */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🚤
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
          Water Sports
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Trigger your inner thrill-seeker with heavy ocean wind-parasailing, high-speed coastal jet skiing, group banana boat setups, and scuba excursions into pristine coral domains.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Adrenaline Fuel
      </div>
    </div>

  </div>

  {/* Pro-Tip Premium Glass Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 via-rose-500/5 to-transparent border border-emerald-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-emerald-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-emerald-900 font-bold">Explorer Tip:</strong> Head out early morning around 7:00 AM to get empty serene beaches to yourself, and schedule historic fort hikes past 4:30 PM for magnificent sunset lighting!
      </p>
    </div>
  </div>

</section>

        {/* Hotels */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-purple-500 selection:text-white">
  
  {/* Advanced Radial Background Glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-purple-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🏨 Accommodation Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950">
      Best Hotels in Goa
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Handpicked stays curated perfectly for luxury seekers, beach bums, and smart backpackers.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Luxury Resorts (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌟
          </div>
          <span className="text-xs font-bold bg-purple-100/60 text-purple-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
          Luxury Resorts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience ultra-premium coastal stays at iconic destinations like <span className="font-semibold text-gray-900">Taj Exotica Resort & Spa</span> and <span className="font-semibold text-gray-900">The Leela Goa</span>. Absolutely flawless options for honeymoons and premium luxury leisure, complete with private cordoned-off beaches, massive infinity pools, and world-class holistic wellness spas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
        Ultra-Luxury & Heritage
      </div>
    </div>

    {/* Card 2: Mid-Range Hotels */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏝️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Mid-Range Hotels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Highly comfortable, standardized properties like <span className="font-semibold text-gray-900">Fairfield by Marriott</span> and <span className="font-semibold text-gray-900">Resort Rio</span>. These deliver upscale modern amenities, swimming pools, and excellent buffet spreads at highly optimized prices—perfect for family groups.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Value & Comfort Packed
      </div>
    </div>

    {/* Card 3: Budget Stays */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          💰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Budget Hostels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Highly affordable backpacker hostels and social guesthouses nestled along the vibrant centers of <span className="font-semibold text-gray-900">Anjuna & Calangute</span>. Unmatched setups for solo nomads looking to minimize boarding expenses and network seamlessly.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Backpacker Centric
      </div>
    </div>

    {/* Card 4: Beachfront Hotels (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌊
          </div>
          <span className="text-xs font-bold bg-cyan-100/60 text-cyan-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Prime Location
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
          Beachfront Hotels
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Wake up straight to the crashing tides. Properties situated right on the active sands of <span className="font-semibold text-gray-900">Baga & Candolim</span> or facing the peaceful horizon of <span className="font-semibold text-gray-900">Palolem</span>. Secure these stays to unlock instant ocean access, breezy balconies, and unparalleled sunset dining setups right at your doorstep.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
        Sea-Facing Panoramas
      </div>
    </div>

    {/* Card 5: Boutique Hotels */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Boutique Properties
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Artistic, high-concept properties like <span className="font-semibold text-gray-900">Ahilya by the Sea</span>. These offer private heritage charm, customized curated hospitality, and slow-paced quiet spaces far removed from the mainstream commercial grids.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Artistic Curations
      </div>
    </div>

    {/* Card 6: Private Villas (Full Row on Small / Styled) */}
    <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center shrink-0 border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
          🏡
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
            Exclusive Private Villas
          </h3>
          <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
            Tailor-made for big reunion groups and close extended families. Villas scattered across Goa feature dedicated crystal private swimming pools, fully equipped modular kitchen architectures, and absolute 100% boundary privacy for a laid-back retreat.
          </p>
        </div>
      </div>
      <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
        Maximum Privacy
      </span>
    </div>

  </div>

  {/* Smart Booking Advisory Glass Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent border border-purple-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-purple-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-purple-900 font-bold">Booking Window Tip:</strong> Planning a trip during the high-demand season of November to February? Make sure to lock down your stay bookings at least 45 to 60 days early to avoid heavily inflated dynamic spikes!
      </p>
    </div>
  </div>

</section>

        {/* Restaurants */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-rose-500 selection:text-white">
  
  {/* Dynamic Culinary Background Tints */}
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
      Best Restaurants in Goa
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Savor everything from sizzling seaside shacks to high-concept global fine dining hotspots.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Seafood Special (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🦐
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Must Visit
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Seafood Specials
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor the ocean's freshest catch at globally acclaimed culinary landmarks like <span className="font-semibold text-gray-900">Fisherman’s Wharf</span> and <span className="font-semibold text-gray-900">Martin’s Corner</span>. Do not leave the island without diving into authentic local delicacies including traditional spiced prawn curry, golden fish fry, and fiery crab masala.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Fresh Catch & Legacy Spots
      </div>
    </div>

    {/* Card 2: Beach Shacks */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏖️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Beach Shacks
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Unwind completely with direct unobstructed ocean views right across the sands of <span className="font-semibold text-gray-900">Baga, Anjuna, and Palolem</span>. The absolute premier choice for quick midday finger food, curated signature cocktails, and memorable open-air sunset dinners.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Oceanfront Sips
      </div>
    </div>

    {/* Card 3: Fine Dining */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌟
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Fine Dining
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Indulge in premium high-end environments at iconic elite properties like <span className="font-semibold text-gray-900">Thalassa</span> and <span className="font-semibold text-gray-900">Pousada by the Beach</span>, offering unparalleled atmospheric luxury alongside masterfully curated multi-cuisine platters.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Luxury Ambience
      </div>
    </div>

    {/* Card 4: Goan Cuisine (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍛
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Heritage Tastes
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
          Traditional Goan Roots
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Embark on a deep heritage flavor journey with legacy local recipes. Make sure to try authentic coconut-infused Goan fish curry, intensely slow-marinated <span className="font-semibold text-gray-900">Vindaloo</span>, heavily roasted spice-heavy <span className="font-semibold text-gray-900">Xacuti</span>, and wrap up your meals with layers of decadent sweet <span className="font-semibold text-gray-900">Bebinca</span> cake.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Indo-Portuguese Flavors
      </div>
    </div>

    {/* Card 5: Cafes */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Cafés & Chill Hubs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Slow down your afternoons at laid-back sanctuary spaces like the green garden layout of <span className="font-semibold text-gray-900">Artjuna Café</span> or the wood-fired artisanal bakery paradise of <span className="font-semibold text-gray-900">Baba Au Rhum</span> for great coffee and desserts.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Slow Coffee Culture
      </div>
    </div>

    {/* Card 6: Global Cuisine */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌍
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Global Cuisines
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Goa packs highly diverse international palettes. Explore masterfully rolled Italian hand-stretched pizzas, intricate French continental baking plates, and sharp authentic Pan-Asian menus across the active zones of <span className="font-semibold text-gray-900">Candolim and Panjim</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        International Palettes
      </div>
    </div>

  </div>

  {/* Foodie Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-rose-900 font-bold">Foodie Tip:</strong> Always make it a priority to head down to oceanfront shacks right around 5:15 PM. Watching the twilight sweep over the horizon while enjoying freshly seasoned hot seafood platters is an irreplaceable coastal ritual!
      </p>
    </div>
  </div>

</section>

        {/* Budget Breakdown */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-cyan-500 selection:text-white">
  
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
      Budget Breakdown for Goa
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
          Perfect for backpackers and solo travelers looking to scale Goa efficiently on low overheads.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">Validating...</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹800</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🛵 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹700</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-emerald-600 tracking-tight">
          ₹1,500 – ₹3,000 <span className="text-xs font-bold text-gray-400">/ day</span>
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
            🏝️
          </div>
          <span className="text-[10px]  tracking-widest uppercase bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-md font-bold">
            Balanced
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Mid-Range Explorer
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Ideal setup for couples and family units aiming for maximum comfort with zero waste.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,000 – ₹6,000</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹2,000</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1,500</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-cyan-600 tracking-tight">
          ₹4,000 – ₹9,000 <span className="text-xs font-bold text-gray-400">/ day</span>
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
          <span className="text-[10px]  tracking-widest uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-bold">
            Elite Premium
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
          Luxury Opulence
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
          Crafted for high-end honeymoons, elite experiential vacations, and premium resort stays.
        </p>

        {/* Breakdown Items */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
            <span className="text-gray-900 font-extrabold text-sm">₹8,000 – ₹30k+</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,000 – ₹6,000</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Transp.</span>
            <span className="text-gray-900 font-extrabold text-sm">₹2,000 – ₹5,000</span>
          </div>
        </div>
      </div>

      {/* Aggregate */}
      <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
        <div className="text-2xl font-black text-purple-600 tracking-tight">
          ₹12,000 – ₹45k+ <span className="text-xs font-bold text-gray-400">/ day</span>
        </div>
      </div>
    </div>

  </div>

  {/* Pro-Tip Floating Banner */}
  <div className="mt-14 text-center">
    <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-cyan-500/10 via-emerald-500/5 to-transparent border border-cyan-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-cyan-950 font-semibold text-sm md:text-[15px] leading-relaxed">
        <strong className="text-cyan-800 font-black">Smart Commute:</strong> Scooter/scooty rentals are highly recommended to bypass peak tourist choke points and explore hidden remote beaches freely!
      </p>
    </div>
  </div>

</section>

        {/* Local Food */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-orange-500 selection:text-white">
  
  {/* Dynamic Culinary Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-orange-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍽️ Local Gastronomy
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
      Local Food in Goa
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Taste authentic Goan flavors, rich coastal spices & legacy heritage delicacies.
    </p>
  </div>

  {/* Premium Asymmetric Bento Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Seafood Delights (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
            🦐
          </div>
          <span className="text-xs font-bold bg-orange-100/60 text-orange-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Signature Catch
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
          Seafood Delights
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Goa is globally renowned for its ocean-fresh catch. Indulge in classic <span className="font-semibold text-gray-900">prawn curry, golden fish fry, crab masala</span>, and the fiery, tangy <span className="font-semibold text-gray-900">kingfish recheado</span>—all expertly slow-cooked with fresh grated coconut, sharp vinegar, and hand-pounded local masalas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Fresh Atlantic & Coastal Spices
      </div>
    </div>

    {/* Card 2: Goan Curries */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍛
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Goan Curries
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Explore heritage roots with staple stews like the rich, roasted coconut-heavy <span className="font-semibold text-gray-900">Chicken Xacuti</span>, authentic local fish curries, and the iconic, intensely slow-marinated <span className="font-semibold text-gray-900">Pork Vindaloo</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Slow-Cooked Heritage
      </div>
    </div>

    {/* Card 3: Street Food */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-yellow-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-xl flex items-center justify-center border border-yellow-100/70 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌮
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-yellow-700 transition-colors duration-200">
          Street Food
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Grab iconic local quick bites across busy markets and map lines. Dive into crispy savory samosas, local spicy <span className="font-semibold text-gray-900">bhaji pav</span>, deep-fried cutlets, and crisp <span className="font-semibold text-gray-900">mirchi pakoras</span>.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-yellow-600 tracking-wider uppercase">
        Marketplace Munchies
      </div>
    </div>

    {/* Card 4: Desserts (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-pink-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-pink-50 text-xl flex items-center justify-center border border-pink-100/70 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🍮
          </div>
          <span className="text-xs font-bold bg-pink-100/60 text-pink-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Portuguese Influence
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-pink-800 transition-colors duration-200">
          Traditional Desserts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor the famous layered confectionery items that define Goan sweet-making. Do not leave without trying multi-layered <span className="font-semibold text-gray-900">Bebinca</span>, jaggery-infused <span className="font-semibold text-gray-900">Dodol</span>, and the light, velvety biscuit-and-cream layers of a classic <span className="font-semibold text-gray-900">Serradura</span> pudding.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-pink-600 tracking-wider uppercase">
        Confectionery & Sweets
      </div>
    </div>

    {/* Card 5: Drinks */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥥
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Drinks & Elixirs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Refresh yourself instantly with tangy crimson <span className="font-semibold text-gray-900">Kokum juice</span>, sweet tender coconut water, or try authentic local <span className="font-semibold text-gray-900">Feni</span>—the historic cashew or coconut palm spirit.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Coastal Refreshments
      </div>
    </div>

    {/* Card 6: Beach Snacks */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏖️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Beach Shacks
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Unwind completely on the sands with freshly seasoned charcoal-grilled corn, loaded platters, and cold beverages while watching the sunset line.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Sunset Platters
      </div>
    </div>

  </div>

  {/* Smart Culinary Advisory Card */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 via-pink-500/5 to-transparent border border-orange-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-orange-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-orange-900 font-bold">Culinary Tip:</strong> For the most authentic flavor profiles, ditch the heavy commercial hotels and target legacy beach shacks or small ancestral village diners for lunch!
      </p>
    </div>
  </div>

</section>

        {/* Shopping */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-violet-500 selection:text-white">
  
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
      Shopping in Goa
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Explore legendary beach bazaars, dynamic flea markets, and exquisite artisan handicrafts.
    </p>
  </div>

  {/* Premium Bento Grid Arrangement */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Flea Markets (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-violet-300 shadow-lg hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-violet-50 text-xl flex items-center justify-center border border-violet-100/70 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🛒
          </div>
          <span className="text-xs font-bold bg-violet-100/60 text-violet-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Iconic Bazaars
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-violet-800 transition-colors duration-200">
          Flea Markets
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Dive deep into coastal commerce at legendary venues like the sun-drenched <span className="font-semibold text-gray-900">Anjuna Flea Market</span> or the eclectic <span className="font-semibold text-gray-900">Arpora Night Market</span>. Perfect spots to scout for antique junk jewelry, bohemian apparel, hand-woven tapestries, and bespoke vintage souvenirs.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-violet-600 tracking-wider uppercase">
        Vibrant Coastal Bargains
      </div>
    </div>

    {/* Card 2: Beach Fashion */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          👗
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Beach Fashion
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Upgrade your vacation wardrobe instantly near <span className="font-semibold text-gray-900">Baga and Calangute</span> lanes. Score trendy ocean-ready beachwear, flowy boho dresses, polarized sunglasses, and artisan straw hats.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Boho & Coastal Attire
      </div>
    </div>

    {/* Card 3: Handicrafts */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Handicrafts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Goa boasts a rich heritage of tangible art. Discover intricate hand-carved wooden items, shell crafts, gleaming brassware, and brightly glazed <span className="font-semibold text-gray-900">Portuguese-style Azulejos</span> tiles.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Artisan Treasures
      </div>
    </div>

    {/* Card 4: Night Markets (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌙
          </div>
          <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Nightlife Retail
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
          Night Markets
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience entertainment blended with pure retail therapy at the famous <span className="font-semibold text-gray-900">Saturday Night Market (Arpora)</span>. These sprawling night carnivals bring together globally sourced boutique designers, live indie music bands, and arrays of gourmet street food stalls.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Festive Twilight Shopping
      </div>
    </div>

    {/* Card 5: Souvenirs */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎁
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Souvenirs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Take home tactile memories ranging from curated fridge magnets and detailed shell accessories to rich, whole Goan spices pack lines.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Memories & Spices
      </div>
    </div>

    {/* Card 6: Local Stores */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏪
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Local Shops
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Navigate legacy corner stores tucked deep within the alleys of <span className="font-semibold text-gray-900">Panjim</span> and old beachfront grids for budget-friendly authentic items.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Heritage Urban Outlets
      </div>
    </div>

  </div>

  {/* Smart Retail Glass Advisory Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 via-amber-500/5 to-transparent border border-violet-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-violet-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-violet-900 font-bold">Shopping Tip:</strong> Friendly bargaining is a core part of the flea market circuit! Always keep cash handy, maintain a lighthearted conversational approach, and check multiple stalls before sealing a deal.
      </p>
    </div>
  </div>

</section>

        {/* Safety Tips */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-rose-500 selection:text-white">
  
  {/* Dynamic Safeguard Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/15 blur-[130px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-blue-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🛡️ Travel Advisory
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
      Safety Tips in Goa
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Proactive guidelines to keep your coastal getaway secure, smooth, and worry-free.
    </p>
  </div>

  {/* Asymmetric Security Bento Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Beach Safety (Featured Large Block) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏖️
          </div>
          <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Critical Guide
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
          Beach Safety & Currents
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Goa's tides can be highly unpredictable. Strictly avoid swimming in restricted zones, rocky shores, or deep waters. Always scan for flag indicators (<span className="font-semibold text-rose-600">Red means Do Not Enter</span>) and carefully observe real-time patrol instructions from on-duty lifeguards.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
        Oceanfront Security
      </div>
    </div>

    {/* Card 2: Transport Safety */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          自由
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Transport Regulations
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Always strap on protective helmets while operating two-wheelers and carry authentic driving permits. Maintain zero tolerance for drinking and driving, and cross-verify localized speed boundaries.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Safe Commute Rules
      </div>
    </div>

    {/* Card 3: Night Safety */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🌙
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Night Navigation
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Steer clear of unlit, isolated stretches or desolate beach fronts post-midnight. Prioritize well-frequented, brightly lit public zones, especially if navigating the coastlines as a solo explorer.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Nocturnal Awareness
      </div>
    </div>

    {/* Card 4: Water Sports Safety (Featured Large Block) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🚤
          </div>
          <span className="text-xs font-bold bg-sky-100/60 text-sky-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Operator Audit
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-800 transition-colors duration-200">
          Water Sports Protocols
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Ensure you are dealing exclusively with certified, government-approved water adventure hubs. Correctly fasten life jackets during heavy-velocity events like parasailing, jet skiing, or deep marine scuba explorations regardless of swimming expertise.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
        Verified Operators Only
      </div>
    </div>

    {/* Card 5: Valuables */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🎒
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Asset Protection
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Secure personal hardware and wallets at crowded marketplaces. Deploy waterproof bags on the sand lines and avoid holding bulk hard cash when electronic logs work.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
        Smart Itemization
      </div>
    </div>

    {/* Card 6: General Tips */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          📌
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Wellness Essentials
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Counter continuous tropical humidity by hydrating constantly, applying high-factor UV shields, respecting regional ethos, and deflecting pushy unauthorized vendors.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Hydration & Sun Defense
      </div>
    </div>

  </div>

  {/* Reassuring Advisory Footnote */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-blue-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-rose-900 font-bold">Confidence Note:</strong> Goa is highly hospitable and secure for international and domestic travelers alike. Simply applying everyday standard vigilance is more than enough to lock in an incredible coastal journey!
      </p>
    </div>
  </div>

</section>

        {/* 8–10 FAQs */}


       <section className="relative max-w-4xl mx-auto px-6 py-16 selection:bg-indigo-500 selection:text-white">
      
      {/* Dynamic Background Glassy Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-12 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-12 right-12 w-80 h-80 bg-pink-500/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Header / Title Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-indigo-50/80 backdrop-blur-sm text-indigo-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 border border-indigo-100 shadow-sm">
          <HelpCircle size={14} className="animate-pulse" /> Travel Guide
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900">
          FAQs About Goa
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-md mx-auto font-medium">
          Quick, reliable answers to all your essential travel questions.
        </p>
      </div>

      {/* Interactive Accordion List */}
      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`group transition-all duration-300 border rounded-2xl overflow-hidden
                ${isOpen 
                  ? 'border-indigo-400 bg-white/90 shadow-xl shadow-indigo-500/5' 
                  : 'border-gray-200/60 bg-white/60 backdrop-blur-md hover:border-gray-400 hover:bg-white/80'
                }`}
            >
              {/* Question Trigger Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors focus:outline-none"
              >
                <div className="flex gap-4 items-center pr-4">
                  {/* Styled Serial Number Counter */}
                  <span className={`text-xs font-bold w-7 h-7 flex items-center justify-center rounded-xl transition-all duration-300 shrink-0
                    ${isOpen 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Question Text */}
                  <span className={`font-semibold text-base md:text-lg transition-colors duration-200 
                    ${isOpen ? 'text-indigo-950 font-bold' : 'text-gray-800'}`}>
                    {faq.q}
                  </span>
                </div>
                
                {/* Chevron Arrow Icon */}
                <div className={`p-1 rounded-full transition-colors duration-300 ${isOpen ? 'bg-indigo-50' : 'group-hover:bg-gray-100'}`}>
                  <ChevronDown 
                    size={18} 
                    className={`text-gray-400 shrink-0 transition-transform duration-300 ease-out
                      ${isOpen ? 'rotate-180 text-indigo-600' : 'group-hover:text-gray-600'}`} 
                  />
                </div>
              </button>

              {/* Smooth Reveal Wrapper for Answer */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden
                  ${isOpen ? 'max-h-40 border-t border-gray-100/80 bg-gradient-to-b from-indigo-50/10 to-transparent' : 'max-h-0'}`}
              >
                <p className="p-5 text-gray-600 text-sm md:text-base leading-relaxed pl-16 pr-6">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>

        {/* Conclusion */}

        <section className="relative max-w-6xl mx-auto px-6 py-16 selection:bg-teal-500 selection:text-white">
  
  {/* Dynamic Tropical Gradient Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/15 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/15 blur-[120px] rounded-full"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-12">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-teal-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌴 Grand Finale
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Conclusion
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      Why Goa deserves a permanent spot on your ultimate travel bucket list.
    </p>
  </div>

  {/* Premium Bento Summary Dashboard Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
    
    {/* Large Core Statement Block */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-300 shadow-xl hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ✨
        </div>
        <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-snug">
          More Than Just a Destination—Goa is a Complete State of Mind.
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
          Goa seamlessly brings together sun-soaked beaches, rich ancestral culture, adrenaline-fueled adventures, world-class gastronomy, and ultimate tranquility into a single coastal package. Whether you are charting a solo expedition, mapping out a romantic retreat, or syncing schedules with a group of friends, this paradise scales to deliver something deeply personal for every individual.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
          From tracking historic forts and indulging in artisanal coastal food layers to scoring treasures at crowded night bazaars, Goa crafts an unforgettable narrative framework of relaxation and joy that lingers long after the sands fade from your shoes.
        </p>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-100/80 flex flex-wrap items-center gap-6 text-xs font-bold text-teal-600 uppercase tracking-wider">
        <span>🌊 Endless Horizons</span>
        <span>⚡ Vibrant Culture</span>
        <span>🥥 Pure Serenity</span>
      </div>
    </div>

    {/* Right Sidebar Bento Sub-Grid */}
    <div className="flex flex-col gap-6">
      
      {/* Mini Card 1: The Cultural Blend */}
      <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between flex-1">
        <div>
          <span className="text-lg">🏛️</span>
          <h4 className="text-base font-extrabold text-gray-900 mt-2 group-hover:text-emerald-700 transition-colors">
            Unique Heritage Crossway
          </h4>
          <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
            Its unparalleled signature blend of Indian traditions and classic Portuguese influences sets it completely apart from any other standard global coastline.
          </p>
        </div>
      </div>

      {/* Mini Card 2: Final Takeaway Button / CTA */}
      <div className="bg-gradient-to-br from-teal-900 via-teal-950 to-emerald-950 border border-teal-900 shadow-xl rounded-3xl p-6 flex flex-col justify-between flex-1 text-white relative overflow-hidden">
        {/* Decorative inner glow flare */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-400/20 blur-2xl rounded-full"></div>
        
        <div>
          <span className="text-lg">🗺️</span>
          <h4 className="text-base font-bold mt-2 text-teal-200">
            Ready to Begin?
          </h4>
          <p className="text-teal-100/80 text-[13.5px] leading-relaxed mt-2">
            Pack your bags, lock your itineraries, and step straight into a getaway where memories are effortlessly made and locked in forever.
          </p>
        </div>

        <button className="mt-5 w-full bg-white text-teal-950 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl hover:bg-teal-50 transition-colors shadow-md duration-200">
          Plan Your Journey
        </button>
      </div>

    </div>
  </div>

</section>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-800 mb-4 text-center"
          >
            🌴 Goa – The Pearl of the Indian West Coast
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-8"
          >
            Goa, India’s smallest state, is a vibrant paradise known for its{" "}
            <b>sun-kissed beaches</b>, <b>Portuguese heritage</b>, and{" "}
            <b>energetic nightlife</b>. Situated along the{" "}
            <b>Arabian Sea</b>, Goa blends cultural richness, scenic beauty, and
            a laid-back tropical charm like nowhere else.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}

          </div>

          {/* Culture Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-pink-50 to-yellow-50 p-6 rounded-2xl border border-yellow-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-700 mb-3">
              <Sun /> Goa’s Culture & Nightlife
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Goa’s culture is a fusion of <b>Indian and Portuguese</b>{" "}
              traditions. Colorful festivals like{" "}
              <a
                href="https://en.wikipedia.org/wiki/Carnival_in_Goa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Carnival
              </a>
              , <b>Shigmo</b>, and <b>Feast of St. Francis Xavier</b> showcase
              its lively spirit. Nightlife thrives in beach clubs like{" "}
              <b>Tito’s</b>, <b>Mambo’s</b>, and <b>Curlies</b>, offering music,
              food, and freedom under the stars.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Goa
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://media.moustachescapes.com/location/1740561583.jpg",
                "https://seawatersports.com/images/activies/slide/north-goa-trip.jpg",
                "https://static.businessworld.in/Untitled%20design%20-%202024-12-31T052430.892_20241231105033_original_image_31.webp",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYuaakElB6_5jZUsZm4dMst4PvDvvkKVdCg&s",

              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Goa"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* External Travel Links */}
          <div className="mt-8 text-center">
            <a
              href="https://www.goa.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Visit Official Goa Tourism Site <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Goa;
