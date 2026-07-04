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

          {/* Best Hotels & Resorts Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-600 selection:text-white">

            {/* Kashmir Valley Background Glows (Chinar Leaf Crimson & Glacial Mist Tints) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🍁 Paradise Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Best Hotels & Resorts in Srinagar
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From legendary carved cedar-wood houseboats floating on quiet waters to elite luxury mountain resorts.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Iconic Luxury Houseboats (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-600/30 shadow-lg hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-700 group-hover:text-white transition-all duration-300 shadow-sm">
                      ⛵
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-900 px-3 py-1 rounded-full uppercase tracking-wider">
                      Heritage Water Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Luxury Heritage Houseboats on Dal & Nigeen Lake
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Experience the absolute romance of Kashmir aboard ultra-premium houseboats like <span className="font-semibold text-gray-900">Sukoon Houseboat</span> or the royal groups of <span className="font-semibold text-gray-900">WelcomHeritage Gurkha Houseboats</span>. Handcrafted from native cedar wood (Deodar) and decorated with intricate Kashmiri Khatamband ceilings and handmade silk carpets, these floating palaces feature private sun decks and attached baths, offering a peaceful escape from the main city buzz.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-700 tracking-wider uppercase">
                  Cedar Carvings & Dedicated 24/7 Shikara Porters
                </div>
              </div>

              {/* Card 2: 5-Star Elite Lake Resorts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏰
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
                    The Khyber & Palace Enclaves
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For global travelers looking for standard luxury, properties like <span className="font-semibold text-gray-900">Taj Palace Srinagar (The Lalit Grand Palace)</span> or <span className="font-semibold text-gray-900">Vivanta Dal View</span> are exceptional choices. Nestled on the high Zabarwan mountain slopes, they offer jaw-dropping views of the lake basin along with vast manicured lawns.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
                  Zabarwan Mountain Ridges & Infinity Decks
                </div>
              </div>

              {/* Card 3: Boulevard Road Boutique Stays */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌸
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Boulevard Promenades
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Stay right where the local culture lives along the vibrant Boulevard Road. Upscale boutique properties like <span className="font-semibold text-gray-900">Fortune Resort Heevan</span> offer quick walking access to the main Shikara ghats, local Kashmiri art emporiums, and iconic Mughal gardens.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Immediate Access to Ghat No. 1-15 & Lake Walks
                </div>
              </div>

              {/* Card 4: Modern Orchard Wellness Retreats (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-500/30 shadow-lg hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏊‍♂️
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Premium Contemporary Wellness
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Contemporary Mountain Resorts & Walnut Orchard Villas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For family groups looking for spacious and secluded layouts, resorts around <span className="font-semibold text-gray-900">Harwan</span> or the outer valleys provide an incredible alternative. These modern properties feature floor-to-ceiling glass panel walls framing apple and walnut orchards, world-class steam spas, multi-cuisine open decks, and central temperature heating for chilly mountain nights.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Orchard Green Panoramas & Central Climate Heating
                </div>
              </div>

              {/* Card 5: Backpacker & Solo Hostel Havens */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎒
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Social Backpacker Lofts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Budget-friendly, highly social hostels and cozy wooden homestays located around the peaceful corners of <span className="font-semibold text-gray-900">Rajbagh</span> or Nigeen slopes. They are perfect options for solo travelers seeking community kitchen hubs, shared cycling tracks, and local trek guides.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Co-Working Coffee Spaces & Trekking Circles
                </div>
              </div>

              {/* Card 6: Off-Grid Out-of-City Wilderness Stays */}
              <div className="group md:col-span-3 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-500/30 shadow-lg hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-1">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center shrink-0 border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    🏔️
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                      Dachigam Forest Outposts & Luxury Eco-Glamping
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mt-2 max-w-3xl">
                      Escape completely toward the pristine buffers of <span className="font-semibold text-gray-900">Dachigam National Park</span>. These unique eco-resorts and luxury glass glamping pods swap city crowds for bubbling mountain freshwater streams, quiet trout-fishing trails, and deep nature walks under dense pine canopies.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-950 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
                  Untamed Valley Wilderness
                </span>
              </div>

            </div>

            {/* Houseboat Water Advisory Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-600/10 via-amber-600/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-rose-900 font-bold">Houseboat Transit Note:</strong> Luxury houseboats are fixed structures floating on the water and accessed exclusively via small Shikaras. Always double-check if your booking includes complimentary unlimited Shikara pick-and-drop links to the main Boulevard road ghats!
                </p>
              </div>
            </div>

          </section>


          {/* Restaurants & Cafes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

            {/* Kashmiri Culinary Background Tints */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-900/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Section Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                ☕ Wazwan & Cafe Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Restaurants & Cafes in Srinagar
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From majestic traditional multi-course Wazwan halls to cozy lake-facing specialty artisan coffee cafes.
              </p>
            </div>

            {/* Premium Bento Grid Arrangement */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Authentic Wazwan Institutions (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🍖
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Legendary Wazwan Centers
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Ahdoos Restaurant & Traditional Culinary Pillars
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Step into a century of culinary heritage at the world-famous <span className="font-semibold text-gray-900">Ahdoos Restaurant</span> or the iconic <span className="font-semibold text-gray-900">Mughal Darbar</span> on Residency Road. Universally loved for their authentic, multi-course feast, they serve legendary hand-pounded delicacies like <span className="font-semibold text-gray-900">Rista</span> (meatballs in saffron gravy), <span className="font-semibold text-gray-900">Gustaba</span>, and rich velvet <span className="font-semibold text-gray-900">Rogan Josh</span> that highlight genuine Kashmiri culinary craft.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
                  Authentic Wazwan Courses & Traditional Copper Tramis
                </div>
              </div>

              {/* Card 2: Aesthetic Floating Lake Cafes */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-500/30 shadow-lg hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ☕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Chai Jaai Tea Rooms
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Sip beautiful, fragrant local brews inside artsy, highly aesthetic spaces like <span className="font-semibold text-gray-900">Chai Jaai</span>. Adorned with Cotswold-inspired pink walls and classic copper samovars, it's the perfect spot to try traditional pink salt <span className="font-semibold text-gray-900">Noon Chai</span> and fresh baker-flatbreads (<span className="font-semibold text-gray-900">Girda</span>).
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Aromatic Pink Noon Chai & Fresh Girda Bakeries
                </div>
              </div>

              {/* Card 3: Modern Boulevard Lake-View Cafes */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Boulevard Lake Decks
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Unwind along contemporary open decks like <span className="font-semibold text-gray-900">Cafe Liberty</span> or lake-front spots. Enjoy single-origin espresso shots, artisan thin-crust wood pizzas, and fresh walnut pastries while watching Shikaras pass under golden-hour rays.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Lake Front Panoramas & Modern Fusion Snacks
                </div>
              </div>

              {/* Card 4: Traditional Bakeries & Bakery Hubs (Featured Large Layout) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-500/30 shadow-lg hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🥖
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Kandur Heritage
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Local Kandur Bakeries & Golden Crust Teatime Hubs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover the authentic morning life of Srinagar by visiting traditional mud-oven bakeries, known as <span className="font-semibold text-gray-900">Kandurs</span>, in downtown or Rajbagh corridors. Sample fresh-out-of-the-coals <span className="font-semibold text-gray-900">Tsot</span>, crispy sesame <span className="font-semibold text-gray-900">Telvor</span>, or sweet butter biscuits (<span className="font-semibold text-gray-900">Bakarkhani</span>) paired with fresh saffron Kahwa.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Hot Clay-Oven Tsot & Saffron Kahwa Blends
                </div>
              </div>

              {/* Card 5: Vintage Continental Dining Halls */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Grand Chinar Gardens
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Dine underneath ancient, massive chinar trees at high-end hotel heritage gardens. Feast on premium North Indian curries and fine European continental sizzlers accompanied by cold mountain breezes.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Heritage Garden Seating & Elite Continental Platters
                </div>
              </div>

              {/* Card 6: Pure Vegetarian Heritage Kitchens */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-500/30 shadow-lg hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥬
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Clean Veg Punjabi Dhabas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For family groups searching for strict pure vegetarian options, multiple top-rated spots like <span className="font-semibold text-gray-900">Krishna Vaishno Dhaba</span> near Sonwar offer highly authentic, comforting, and piping hot North Indian dishes.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Pristine Family-Friendly Vegetarian Layouts
                </div>
              </div>

            </div>

            {/* Culinary Wazwan Advisory Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/10 via-rose-600/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-amber-900 font-bold">Wazwan Dining Advisory:</strong> Authentic Wazwan dishes are traditionally prepared by expert chefs (Vastas) using fresh minced meat processed early in the morning. For the absolute finest experience, try planning your heavy Wazwan dinners by 8:00 PM before top heritage outlets start running out of signature cuts like Rista!
                </p>
              </div>
            </div>

          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-300/10 to-indigo-300/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🌸 Paradise Planner
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Srinagar
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Analyze daily cost structures to experience the timeless beauty of Dal Lake, Mughal gardens, and Kashmiri hospitality.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-rose-400/60 shadow-md hover:shadow-xl hover:shadow-rose-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold border border-rose-100 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      🚣
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Valley Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for solo explorers staying in budget guest houses or local home-stays near Nigeen Lake.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1,800</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹500 – ₹900</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚣 Shikara</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹600</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹1,600 – ₹3,300 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-rose-500 hover:border-rose-400 shadow-xl hover:shadow-2xl hover:shadow-rose-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-rose-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-indigo-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold border border-rose-100 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      🏠
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Houseboat Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for families wanting to experience a stay on iconic Dal Lake houseboats and garden tours.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹4k – ₹9k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹3k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Cab</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹3k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹7,000 – ₹15k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-indigo-400/60 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold border border-indigo-100 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Premium
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Royal Kashmiri
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Crafted for luxury heritage hotels, private Shikara sunset cruises, and fine dining.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹15k – ₹40k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹7k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹6k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-indigo-600 tracking-tight">
                    ₹21k – ₹53k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-rose-500/10 via-indigo-500/5 to-transparent border border-rose-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-rose-800 font-black">Pro Tip:</strong> Experience a sunrise on a Shikara ride through the floating vegetable market in Dal Lake. It’s a photographer’s dream and the most tranquil way to start your day.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Market Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Shopping in Srinagar
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Discover the heart of Kashmir through hand-woven Pashmina, ornate Papier-Mâché, and aromatic saffron.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧶
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Luxury Textile
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Pashmina & Woolens
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Kashmiri Pashmina is legendary for its unparalleled softness and warmth. Explore authentic, hand-embroidered wraps that are true masterpieces of craftsmanship.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Timeless Elegance
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Papier-Mâché Art
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover colorful, hand-painted boxes, trays, and vases. This ancient Kashmiri art form is a perfect, lightweight souvenir that captures the valley's vibrant patterns.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Artisan Crafted Decor
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ✨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    Pure Saffron (Kesar)
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Take home the finest saffron from Pampore. It’s globally renowned for its quality, aroma, and deep color—an essential taste of Kashmir.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Liquid Gold Spice
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🪵
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Wood Craft
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Walnut Wood Carving
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Kashmiri <span className="font-semibold text-gray-900">walnut wood carvings</span> are world-famous. Find intricate furniture, jewelry boxes, and statues that reflect centuries of artistic expertise.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Masterful Wood Art
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🫖
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Kashmiri Kahwa Tea
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Bring the warmth of Srinagar back home with authentic Kahwa tea leaves, blended with almonds, cinnamon, and cardamom.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Aromatic Tradition
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-amber-900 font-bold">Shopping Tip:</strong> Visit the government-run emporiums to ensure authenticity for high-value items like Pashmina and Saffron. For wood carvings and Papier-Mâché, exploring the local markets near the Old City offers the best craftsmanship and stories!
                </p>
              </div>
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

export default Srinagar;
