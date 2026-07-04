import React, { useState } from 'react';

const PackingChecklist=()=> {
  // --- REAL-TIME CHECKLIST STATE MANAGEMENT ---
  const [checklist, setChecklist] = useState({
    documents: [
      { id: 'doc1', task: 'Original Passport / Visa Copies', checked: true },
      { id: 'doc2', task: 'Digital & Physical Travel Insurance', checked: false },
      { id: 'doc3', task: 'Hotel Bookings & Flight Boarding Passes', checked: true },
      { id: 'doc4', task: 'Driver\'s License / National ID Card', checked: false },
    ],
    electronics: [
      { id: 'elec1', task: 'Universal Travel Adapter', checked: false },
      { id: 'elec2', task: 'Power Bank (10,000mAh+ recommended)', checked: true },
      { id: 'elec3', task: 'Charging Cables & Brick Blocks', checked: false },
      { id: 'elec4', task: 'Noise-Canceling Wireless Earbuds', checked: false },
    ],
    clothing: [
      { id: 'cloth1', task: 'Weather-Adaptive Layered Outfits', checked: false },
      { id: 'cloth2', task: 'Comfortable Waterproof Trek/Walking Shoes', checked: false },
      { id: 'cloth3', task: 'Microfiber Fast-Drying Towel', checked: true },
      { id: 'cloth4', task: 'UV Protection Sunglasses & Sun Hat', checked: false },
    ],
    toiletries: [
      { id: 'toil1', task: 'TSA-Approved Refillable Toiletry Bottles', checked: true },
      { id: 'toil2', task: 'High SPF Sunscreen & Moisturizer', checked: false },
      { id: 'toil3', task: 'Personal Mini First-Aid Kit & Prescriptions', checked: false },
      { id: 'toil4', task: 'Hydrating Wet Wipes & Sanitizer', checked: false },
    ],
  });

  // --- ACCODRION ACCESSIBILITY STATE ---
  const [activeTip, setActiveTip] = useState(0);

  // --- TOGGLE CHECKBOX LOGIC ---
  const handleToggle = (category, id) => {
    setChecklist((prev) => ({
      ...prev,
      [category]: prev[category].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  // --- DYNAMIC CALCULATIONS FOR PROGRESS ---
  const allItems = Object.values(checklist).flat();
  const totalItems = allItems.length;
  const packedItems = allItems.filter((item) => item.checked).length;
  const completionPercentage = Math.round((packedItems / totalItems) * 100) || 0;

  // --- VISUAL PRO TIPS DATA ---
  const proTips = [
    {
      title: 'The Smart Roll Method vs Folding',
      desc: 'Roll your clothes tightly instead of folding them flat. This not only eliminates aggressive wrinkles but also saves up to 30% more space in your prime luggage compartment.',
      emoji: '🧳'
    },
    {
      title: 'Keep Critical Documents Digital First',
      desc: 'Upload clear scans of your passport, visas, and insurance vouchers to a secure cloud drive accessible offline. Keep hard copies strictly separate from original documents.',
      emoji: '☁️'
    },
    {
      title: 'The Heavy Base Weight Distribution Rule',
      desc: 'Always place your heaviest physical assets—like hard shoes, tech adapters, and toiletry bags—at the very bottom of your wheeled suitcase near the base to lower the center of gravity.',
      emoji: '⚖️'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-600 selection:text-white font-sans antialiased pb-24">
      
      {/* =========================================================================
          1. HERO SECTION: PREMIUM VISUAL ANCHOR
          ========================================================================= */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 shadow-2xl">
        {/* Futuristic Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
        
        {/* Fluid Ambient Glowing Spheres */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-cyan-300 uppercase mb-6 shadow-inner">
            <span>⚡</span> Pack Like a Pro
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300">
            Smart Packing Assistant
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Eliminate pre-trip anxiety. Use our interactive architectural checklist to organize, log, and track your gear before your upcoming journey.
          </p>
        </div>

        {/* Floating Real-time HUD Statistics Card */}
        <div className="relative max-w-3xl mx-auto mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-4">
            <div className="text-center sm:text-left">
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Current Progress</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {packedItems} <span className="text-slate-500 text-lg font-medium">/ {totalItems} Packed</span>
              </h3>
            </div>
            <div className="text-4xl font-black text-cyan-400 bg-cyan-950/40 px-5 py-2 rounded-2xl border border-cyan-500/20">
              {completionPercentage}%
            </div>
          </div>

          {/* Dynamic Progress Bar Component */}
          <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
            <div 
              className="bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 h-full rounded-full transition-all duration-700 ease-out shadow-lg shadow-cyan-500/50"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DETAILED GRID CHECKLIST SECTION
          ========================================================================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left + Middle Content Spans: Multi-Category Interactive Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Category: Documents */}
            <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-6 hover:border-cyan-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl bg-cyan-50 p-2.5 rounded-2xl text-cyan-600 font-bold">📄</span>
                <h3 className="text-xl font-bold text-slate-900">Essential Documents</h3>
              </div>
              <div className="space-y-3.5">
                {checklist.documents.map((item) => (
                  <label key={item.id} className={`flex items-start gap-3.5 p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${item.checked ? 'bg-emerald-50/40 border-emerald-100 text-slate-500 line-through' : 'bg-slate-50/50 border-slate-100 hover:bg-slate-50 text-slate-800'}`}>
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onChange={() => handleToggle('documents', item.id)}
                      className="mt-1 w-5 h-5 rounded-md text-cyan-600 border-slate-300 focus:ring-cyan-500 accent-cyan-600"
                    />
                    <span className="text-sm font-medium leading-snug">{item.task}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category: Electronics */}
            <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-6 hover:border-amber-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl bg-amber-50 p-2.5 rounded-2xl text-amber-600 font-bold">🔌</span>
                <h3 className="text-xl font-bold text-slate-900">Tech & Gadgets</h3>
              </div>
              <div className="space-y-3.5">
                {checklist.electronics.map((item) => (
                  <label key={item.id} className={`flex items-start gap-3.5 p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${item.checked ? 'bg-emerald-50/40 border-emerald-100 text-slate-500 line-through' : 'bg-slate-50/50 border-slate-100 hover:bg-slate-50 text-slate-800'}`}>
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onChange={() => handleToggle('electronics', item.id)}
                      className="mt-1 w-5 h-5 rounded-md text-cyan-600 border-slate-300 focus:ring-cyan-500 accent-cyan-600"
                    />
                    <span className="text-sm font-medium leading-snug">{item.task}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category: Clothing */}
            <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-6 hover:border-indigo-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl bg-indigo-50 p-2.5 rounded-2xl text-indigo-600 font-bold">👕</span>
                <h3 className="text-xl font-bold text-slate-900">Apparel & Gear</h3>
              </div>
              <div className="space-y-3.5">
                {checklist.clothing.map((item) => (
                  <label key={item.id} className={`flex items-start gap-3.5 p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${item.checked ? 'bg-emerald-50/40 border-emerald-100 text-slate-500 line-through' : 'bg-slate-50/50 border-slate-100 hover:bg-slate-50 text-slate-800'}`}>
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onChange={() => handleToggle('clothing', item.id)}
                      className="mt-1 w-5 h-5 rounded-md text-cyan-600 border-slate-300 focus:ring-cyan-500 accent-cyan-600"
                    />
                    <span className="text-sm font-medium leading-snug">{item.task}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category: Toiletries */}
            <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-6 hover:border-rose-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl bg-rose-50 p-2.5 rounded-2xl text-rose-600 font-bold">🧴</span>
                <h3 className="text-xl font-bold text-slate-900">Grooming & Health</h3>
              </div>
              <div className="space-y-3.5">
                {checklist.toiletries.map((item) => (
                  <label key={item.id} className={`flex items-start gap-3.5 p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${item.checked ? 'bg-emerald-50/40 border-emerald-100 text-slate-500 line-through' : 'bg-slate-50/50 border-slate-100 hover:bg-slate-50 text-slate-800'}`}>
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onChange={() => handleToggle('toiletries', item.id)}
                      className="mt-1 w-5 h-5 rounded-md text-cyan-600 border-slate-300 focus:ring-cyan-500 accent-cyan-600"
                    />
                    <span className="text-sm font-medium leading-snug">{item.task}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================================
              3. RIGHT COLUMN: PREMIUM PRO TIPS ACCORDION HANGER
              ========================================================================= */}
          <div className="lg:col-span-1 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-950/20 sticky top-6">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm tracking-widest uppercase mb-4">
              <span>💡</span> Expert Vault
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-6">Pro Packing Hacks</h3>
            
            <div className="space-y-4">
              {proTips.map((tip, idx) => {
                const isOpen = activeTip === idx;
                return (
                  <div 
                    key={idx} 
                    className={`border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-slate-800/40 border-cyan-500/30 shadow-lg' : 'bg-transparent'}`}
                  >
                    <button
                      onClick={() => setActiveTip(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-sm sm:text-base text-slate-100 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg bg-slate-800 w-8 h-8 rounded-xl flex items-center justify-center">{tip.emoji}</span>
                        <span>{tip.title}</span>
                      </div>
                      <span className={`text-xs text-slate-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-800/60' : 'max-h-0'}`}>
                      <p className="p-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro Call-to-action banner inside sidebar */}
            <div className="mt-8 p-4 bg-gradient-to-r from-cyan-950 to-slate-900 border border-cyan-500/10 rounded-2xl text-center">
              <p className="text-xs text-cyan-200 font-semibold leading-relaxed">
                🚀 Tip: Ready to take off? Triple-check your gate numbers and currency limits on the Dashboard before locking up.
              </p>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}


export default  PackingChecklist