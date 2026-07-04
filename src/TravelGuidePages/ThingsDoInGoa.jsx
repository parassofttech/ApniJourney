import React, { useState } from 'react';

export default function ThingsDoInGoa() {
  // --- CHOSEN CATEGORY TAB STATE ---
  const [activeTab, setActiveTab] = useState('beaches');

  // --- DYNAMIC EXPERIENCES DATABASE ---
  const goaData = {
    beaches: [
      {
        title: "Palolem Beach",
        tag: "South Goa • Scenic",
        desc: "A stunning crescent-shaped paradise lined with leaning coconut palms and colorful beach shacks. Perfect for dolphin-spotting cruises and early morning kayak journeys.",
        highlight: "Famous for Silent Noise discos.",
        icon: "🏝️"
      },
      {
        title: "Ashwem & Mandrem",
        tag: "North Goa • Boutique",
        desc: "Clean, uncrowded stretches of silver sand offering a peaceful escape from the commercial crowds. Home to premium wellness retreats and high-end bohemian daybeds.",
        highlight: "Best for peaceful sunset walks.",
        icon: "🌊"
      },
      {
        title: "Anjuna Beach",
        tag: "North Goa • Heritage",
        desc: "Famous for its striking black volcanic rock formations and legendary hippie culture. It comes alive with bustling open-air artisan markets every Wednesday.",
        highlight: "Great rocky viewpoints.",
        icon: "🎸"
      }
    ],
    nightlife: [
      {
        title: "HillTop Vagator",
        tag: "Vagator • Cult Venue",
        desc: "Goa’s iconic open-air sanctuary for electronic and psytrance music lovers. Renowned globally for its neon-lit palm canopies and stellar international DJ lineups.",
        highlight: "Unmissable Sunday sunset parties.",
        icon: "🎪"
      },
      {
        title: "Curlies & Shiva Valley",
        tag: "Anjuna • Beachside",
        desc: "Legendary beach shacks that transform into vibrant, neon-lit raves as midnight approaches, letting you dance right on the sand under a starry sky.",
        highlight: "Classic beachside party hubs.",
        icon: "🌙"
      },
      {
        title: "Panaji Floating Casinos",
        tag: "Mandovi River • Luxury",
        desc: "Step aboard massive, multi-tiered offshore gaming vessels docked on the Mandovi River. Offers live entertainment, premium buffets, and continuous dynamic gaming action.",
        highlight: "Open 24/7 with luxury vibes.",
        icon: "🚢"
      }
    ],
    sports: [
      {
        title: "Scuba Diving at Grande Island",
        tag: "Deep Sea • Adventure",
        desc: "Dive deep into the Arabian Sea to explore colorful coral gardens, volcanic rock structures, and fascinating sunken shipwrecks alongside sea turtles.",
        highlight: "PADI certified instructors available.",
        icon: "🤿"
      },
      {
        title: "Kiteboarding at Morjim",
        tag: "Morjim Beach • Extreme",
        desc: "Morjim's predictable wind currents and flat waters make it India's premium destination to learn or practice high-energy kiteboarding and windsurfing.",
        highlight: "Best visited from Nov to March.",
        icon: "🏄‍♂️"
      },
      {
        title: "White Water Rafting",
        tag: "Mahdei River • Monsoon",
        desc: "Tackle wild, high-octane Class II and III rapids cutting right through the dense, pristine jungles of the Mhadei Wildlife Sanctuary.",
        highlight: "Exclusive monsoon adventure sport.",
        icon: "🚣‍♂️"
      }
    ],
    forts: [
      {
        title: "Cabo de Rama Fort",
        tag: "Canacona • Wild Ruins",
        desc: "A sprawling, atmospheric medieval cliffside fortress steeped in rich mythology. Offers absolute, panoramic cliffside views of the crashing turquoise sea below.",
        highlight: "Incredible, quiet sunset photography spot.",
        icon: "🏰"
      },
      {
        title: "Fort Aguada & Lighthouse",
        tag: "Sinquerim • Portuguese Heritage",
        desc: "A massive, beautifully preserved 17th-century Portuguese coastal stronghold featuring an iconic four-story stone lighthouse and expansive water storage systems.",
        highlight: "Overlooks the vast Arabian sea canvas.",
        icon: "🛡️"
      }
    ],
    cafes: [
      {
        title: "Baba Au Rhum",
        tag: "Anjuna • Culinary Craft",
        desc: "A beautiful garden café hidden among lush bamboo groves. Famous for artisanal wood-fired pizzas, fresh flaky croissants, and freshly roasted espresso.",
        highlight: "Excellent digital-nomad workspace.",
        icon: "☕"
      },
      {
        title: "Gunpowder",
        tag: "Assagao • Heritage Dining",
        desc: "Set inside a charming, old Portuguese villa, serving incredible Peninsular South Indian food. Pair their fluffy appams with intense Kerala beef fry or malabar curries.",
        highlight: "Advanced reservation highly recommended.",
        icon: "🌶️"
      }
    ],
    hidden: [
      {
        title: "Netravali Bubbling Lake",
        tag: "Sanguem • Mystical",
        desc: "A sacred stone temple pond tucked deep inside South Goa. Continuous columns of natural methane bubbles rise to the surface whenever you clap your hands.",
        highlight: "Natural geological wonder.",
        icon: "🔮"
      },
      {
        title: "Chorla Ghat Wilderness",
        tag: "Goa-Border • Mist Canopy",
        desc: "A pristine tropical cloud forest nesting on the intersection of three state borders. Home to rare orchids, hidden twin waterfalls, and eco-luxury forest lodges.",
        highlight: "Paradise for wildlife trekkers.",
        icon: "🦎"
      }
    ]
  };

  const tabsList = [
    { id: 'beaches', label: 'Beaches', icon: '🏖️' },
    { id: 'nightlife', label: 'Nightlife', icon: '✨' },
    { id: 'sports', label: 'Water Sports', icon: '⚡' },
    { id: 'forts', label: 'Historic Forts', icon: '🛡️' },
    { id: 'cafes', label: 'Cafés & Food', icon: '🍳' },
    { id: 'hidden', label: 'Hidden Gems', icon: '💎' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-600 selection:text-white font-sans antialiased pb-24">
      
      {/* 
          1. HERO SECTION: THE TROPICAL ESCAPE ANCHOR
*/}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white py-28 px-4 sm:px-6 lg:px-8 shadow-2xl">
        {/* Abstract Fluid Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>
        
        {/* Soft Organic Neon Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-teal-300 uppercase mb-6 shadow-inner">
            <span>🌴</span> ApniJourney Ultimate Guide
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-teal-200">
            Goa Experience Blueprint
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover sun-drenched beaches, high-octane water sports, legendary nightlife strips, vintage Portuguese forts, culinary cafés, and pristine hidden inland gems.
          </p>
        </div>
      </div>

      {/*  2. ADVANCED INTERACTIVE TAB NAVIGATION*/}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 p-3 rounded-3xl shadow-xl shadow-slate-300/40 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 min-w-max md:justify-center">
            {tabsList.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 ${
                    isSelected 
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/20 scale-105' 
                      : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 
          3. EXPERIENCE CONTENT CARDS GRID
         */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Dynamic Category Sub-Header */}
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
            Curated {activeTab} Selection
          </h2>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Hand-picked, high-impact spots verified by our expert architects.
          </p>
        </div>

        {/* Dynamic Content Mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goaData[activeTab].map((item, index) => (
            <div 
              key={index}
              className="group bg-white border border-slate-100 hover:border-teal-200 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Icon and Tags Block */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="text-2xl bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors duration-300">
                    {item.tag}
                  </span>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-950 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed mt-3">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Insight Badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/50 p-3 rounded-2xl border-dashed">
                <p className="text-xs font-medium text-slate-500 leading-snug">
                  <span className="font-bold text-teal-600 uppercase tracking-wide mr-1">Pro Insight:</span> 
                  {item.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 
            4. BOTTOM ARCHITECTURAL VERDICT BANNER
            */}
        <div className="mt-20 bg-gradient-to-r from-slate-950 via-teal-950 to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
          
          <div className="relative z-10 max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-black tracking-wide">Ready to design your customized Goa itinerary?</h4>
              <p className="text-teal-100/70 mt-1.5 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
                Combine high-octane water sports with slow, quiet hidden gems across our state-of-the-art dashboards to map out the perfect tropical getaway.
              </p>
            </div>
            <button className="bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-slate-950 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-teal-400/20 active:scale-95 whitespace-nowrap">
              Launch Trip Builder
            </button>
          </div>
        </div>

      </main>

    </div>
  );
}