// src/components/Udaipur.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Ship, Crown, Camera, Plane, Train } from "lucide-react";

const Udaipur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-white to-blue-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full  mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://cdn.sanity.io/images/ocl5w36p/prod5/a26edf09fdf26580a0a120ddb8d729bdcfb42b56-1280x1760.jpg?w=380"
          alt="Udaipur City Palace"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1600697395542-ef48a7c3b9b5?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Title */}
        <div className="p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-amber-800 mb-4"
          >
            🌇 Udaipur – The City of Lakes
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
          >
            Known as the **“Venice of the East”**, Udaipur is a city of timeless
            beauty, grand palaces, serene lakes, and royal heritage. Set against
            the backdrop of the **Aravalli Hills**, it’s one of Rajasthan’s most
            romantic and picturesque destinations.
          </motion.p>

          {/* Introduction Section: Udaipur */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Regal Lake Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-amber-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>👑</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
      Discover Udaipur
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Venice of the East, where white marble palaces float gracefully on shimmering lakes beneath the Aravalli hills.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🏰</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The City of Lakes
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Udaipur, the historic capital of the Mewar kingdom in Rajasthan, is universally celebrated for its unmatched romantic charm, majestic fortresses, and interlocking lake ecosystems that seamlessly frame the old city.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Founded in 1559 by Maharana Udai Singh II, the city boasts a spectacular network of heritage Havelis, sprawling royal gardens, and a rich legacy of vibrant folk arts and tangible luxury.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-indigo-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-indigo-600">7 Lake</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Connected Network</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">1559</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Mewar Foundation</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: The City Palace Complex */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          The Grand City Palace
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Rajasthan's largest palace complex. Perched right on the banks of Lake Pichola, this monumental architectural fusion of Rajput and Mughal styles features intricate mirror-work, colored glass windows, and grand courtyards.
        </p>
      </div>

      {/* Card 2: Lake Pichola Boat Cruises */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          ⛵
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Lake Pichola & Lake Palace
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Take a magical golden hour boat cruise across <span className="font-semibold">Lake Pichola</span>. Watch the breathtaking ivory structure of Jag Niwas (now Taj Lake Palace) appear as if floating magically right on top of the water surface.
        </p>
      </div>

      {/* Card 3: Saheliyon-ki-Bari Gardens */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          ⛲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Saheliyon-ki-Bari Fountains
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into the legendary Courtyard of the Maidens. Built for royal ladies, this historic garden features lush lotus pools, marble elephant structures, and natural siphoned fountains imported directly from England in the 18th century.
        </p>
      </div>

      {/* Card 4: Rajasthani Folk Heritage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          💃
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Bagore-ki-Haveli Art
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Immerse yourself in pure culture. Witness the famous evening Dharohar folk dance show at <span className="font-semibold">Bagore-ki-Haveli</span>, showcasing incredible fire-pot balances, traditional puppet theater, and Mewari music.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-indigo-700 via-purple-700 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-indigo-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Udaipur is an architectural love letter written across water. Its blend of white marble heritage, slow-paced lakeside cafes, and vibrant traditional art creates a profoundly romantic, premium experience unmatched anywhere else in India.
      </p>
    </div>
  </div>

</section>


          {/* Info Sections */}
         

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Udaipur Gallery – Royal Reflections
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {[
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/763687523.jpg?k=089cbeeec18c02ac3270c033f62935615d49d2ffd289b5afa19667018a374356&o=&hp=1",
                "https://static.toiimg.com/photo/msid-82304823,width-96,height-65.cms",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGN2rvi6DT6yPxHy3QHEKwsi0NPNWlTVCJ8g&s",
                "https://static.toiimg.com/photo/32606661.cms",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3TiqXutrEjUqLMIFlkTKL-Gi0RPT2lIcwQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75hzf9FtSf_nKKIRArv83tTH5C5uRG_kMog&s",
                
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Udaipur View"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1600697395542-ef48a7c3b9b5?auto=format&fit=crop&w=1200&q=80")
                  }
                />
              ))}
            </div>
          </div>
          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Royal Lakes & White Palace Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      👑 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Time to Visit Udaipur
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect romantic escape aligned with pleasant lake breezes and brilliant royal sunsets.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
          ⛵
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Lake City Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Udaipur is at its absolute majestic peak from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these winter months, temperatures glide smoothly between 10°C - 25°C, making it highly comfortable to cruise through the waters and walk across grand courtyards.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this premium cycle, iconic hotspots like the <span className="font-semibold text-gray-900">Lake Pichola boat circuits</span>, City Palace, and Saheliyon-ki-Bari are packed with vibrant folk dance festivals and heritage light shows.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
          <strong className="text-amber-950">Pro Tip:</strong> Want to enjoy crowd-free rooftop views and snag premium heritage haveli stays at unbelievable discounts? Book your travel loop during the late monsoon weeks of September when the lakes are brimming with fresh rainwater.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🏰
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Winter Royalty (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The premium tourist season. Ideal for sunset boating loops, exploring Chittorgarh Fort day trips, and witnessing the grand World Music Festival strings.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Regal Peak
        </span>
      </div>

      {/* Season 2: Summer Heat */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Summer Heatwaves (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Intense desert heat climbing up to 40°C. Recommended for late evening palace explorations, relaxing indoor spa loops, and booking top-tier luxury resorts at massive price slashes.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Budget Windows
        </span>
      </div>

      {/* Season 3: Monsoon Romanticism */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Monsoon Romance (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Refreshing rains fill up Fatehsagar and Pichola lakes completely. The Aravalli hills turn highly lush green, turning the Monsoon Palace views extremely cinematic.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Lush Lakes
        </span>
      </div>

    </div>
  </div>

</section>
        </div>
      </motion.div>
    </div>
  );
};

export default Udaipur;
