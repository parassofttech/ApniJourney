import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Info, Waves, Sparkles, Camera } from "lucide-react";

const Srinagar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://s3.india.com/wp-content/uploads/2024/06/10-Must-Do-Activities-in-Srinagar.jpg?impolicy=Medium_Widthonly&w=350&h=263"
          alt="Srinagar Dal Lake"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1575311371166-b17bb1bca161?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-blue-800 mb-4"
          >
            🌸 Srinagar – Paradise on Earth
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Srinagar, the summer capital of **Jammu & Kashmir**, is famous for its **Dal Lake**, 
            **Mughal gardens**, and **houseboats**. Nestled in the Himalayas, it is a perfect blend of 
            **natural beauty, culture, and history**, attracting travelers from all over the world.
          </motion.p>

          {/* Introduction Section: Srinagar */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">

  {/* Advanced Radial Background Glows (Kashmiri Valley Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-rose-50 border border-teal-100 text-teal-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🛶</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Discover Srinagar
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      Heaven on Earth, where shimmering alpine lakes mirror the majestic Zabarwan range and golden Chinar alleys.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌸</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Summer Capital of Paradise
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Srinagar, nestled gracefully in the heart of the Kashmir Valley along the banks of the Jhelum River, is a timeless masterpiece of natural beauty, iconic houseboats, and vibrant waterfront heritage.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Sitting at an altitude of 1,585 meters, it captures the hearts of global travelers with its floating marketplace cultures, winding historic canals, and snow-dusted mountain horizons that change look every season.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">1,585m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Altitude</p>
        </div>
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">Timeless</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Shikara Vibe</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Dal Lake & Houseboats */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Dal Lake & Shikara Life
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience a floating ecosystem. From relaxing inside intricate, hand-carved wooden cedar houseboats to gliding smoothly on a traditional <span className="font-semibold">Shikara boat</span> past vibrant floating vegetable bazaars.
        </p>
      </div>

      {/* Card 2: Royal Mughal Gardens */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🏰
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Imperial Mughal Terraces
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk through the royal lawns of history. Discover cascading water fountains, terraced stone architecture, and centuries-old Chinar canopies at the legendary <span className="font-semibold">Shalimar Bagh</span> and Nishat Bagh.
        </p>
      </div>

      {/* Card 3: Wazwan & Saffron Tea */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          ☕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Kashmiri Culinary Heritage
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          A treat for culinary enthusiasts. Sip on authentic, almond-loaded pink <span className="font-semibold">Kahwa tea</span> infused with pure saffron, and relish the slow-cooked royal multicourse flavors of Kashmiri Wazwan.
        </p>
      </div>

      {/* Card 4: Old Town Heritage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Ancient Wooden Architecture
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Explore the soul of Old Srinagar. Witness stunning wooden pagodas and heritage shrines like the historic <span className="font-semibold">Jamia Masjid</span> and Khanqah-e-Moula, reflecting pure Kashmiri architectural styles.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-teal-600 via-emerald-600 to-rose-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-teal-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Srinagar is not just a destination—it is a poetic dream captured in reality. It combines the calming rhythm of lake life with royal history and exceptional hospitality, crafting an old-world paradise experience that stays with you forever.
      </p>
    </div>
  </div>

</section>

         

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Srinagar
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://s7ap1.scene7.com/is/image/incredibleindia/dal-lake-srinagar-j_k-tri-hero?qlt=82&ts=1727163903213&wid=800",
                "https://levoyageautrement-ec2.s3.eu-west-3.amazonaws.com/public/img/upload/gallery/unavoidable/3020/img-2024-11-14-03-37-07-9%2Bthumb---jammu-and-kashmir---dal-lake-in-srinagar-%C2%A9tongik---as_206889994-showfront-487-366.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKwXh6uWtuT99rmZw4rAK8G8Myp2veIdmSg&s",
                "https://planashleygo.com/wp-content/uploads/2023/04/Srinagar-1.jpg",
                "https://imagedelivery.net/y9EHf1toWJTBqJVsQzJU4g/www.indianholiday.com/2025/06/places-to-visit-in-srinagar.png/w=700,h=304",
                "https://www.kashmironline.com/top-destinations/srinagar/images/Downtown.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRwldIXdHMc3Y-YMm_RX9CU-DGskJ28_5sQ&s",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Srinagar"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1575311371166-b17bb1bca161?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">

  {/* Advanced Radial Background Glows (Dal Lake & Paradise Valley Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-rose-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌸 Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Best Time to Visit Srinagar
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect Kashmiri holiday aligned with blooming flower loops, pleasant summers, and fresh winter snow windows.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl font-bold mb-6 border border-teal-100">
          🏔️
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Paradise Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Srinagar is exceptionally beautiful in two major cycles: the refreshing summer and spring escape from <span className="font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded-md">March to October</span> when temperatures cruise around a pleasant 15°C - 30°C, and the pure snow wonderland phase from <span className="font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-md">December to February</span>.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During the warm months, the iconic <span className="font-semibold text-gray-900">Dal Lake Shikara routes</span>, Nishat Bagh, and Shalimar gardens offer golden suns, while winter blankets the houseboats in pure white magic.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-teal-50 to-rose-50 rounded-2xl border border-teal-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-teal-900 font-medium leading-relaxed">
          <strong className="text-teal-950">Pro Tip:</strong> Eager to catch Asia's largest Indira Gandhi Memorial Tulip Garden in full vibrant bloom? Plan your travel loop strictly around the early April window, as these unique flowers last for just a few weeks.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Spring & Summer Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-teal-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌷
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors duration-200">
              Spring & Summer (March – August)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Extremely pleasant climate. Absolute prime time for blooming orchards, floating market loops, peaceful evening houseboats, and escaping mainland heat waves.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Valley Peak
        </span>
      </div>

      {/* Season 2: Golden Autumn */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🍁
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Autumn Magic (September – November)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              A treat for photographers. Chinar trees shed golden-orange leaves across valley fields, the mountain air turns highly crisp, and apple harvests are fully ripe.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Golden Chinar
        </span>
      </div>

      {/* Season 3: White Winter */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-indigo-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ❄️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-200">
              Winter Chill (December – February)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Freezing lows turning the landscape white. Ideal for day-trip skiing loops in Gulmarg, experiencing frozen edges of lakes, and enjoying hot Kahwa tea sips.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Snow Wonderland
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

export default Srinagar;
