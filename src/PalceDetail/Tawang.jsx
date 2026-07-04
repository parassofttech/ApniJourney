import React from "react";
import { motion } from "framer-motion";
import {
  MapPin, Mountain, Snowflake, Plane,
  Train, Compass, Coffee, Camera, Utensils,
  ArrowUpRight, Landmark, Calendar
} from "lucide-react";

const Tawang = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-sky-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* 🏔️ HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://storage.googleapis.com/stateless-www-justwravel-com/2022/10/TAWANG-COVER-FOR-WEBSTORY.jpg"
            alt="Tawang"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Explore Arunachal
            </span>
          </div>
        </div>

        {/* 📝 CONTENT AREA */}
        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white/40 backdrop-blur-lg rounded-t-[3rem]">

          <header className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-sky-950 tracking-tighter leading-none mb-6 italic"
            >
              Tawang
            </motion.h1>
            <p className="text-sky-600/60 font-black uppercase tracking-[0.5em] text-xs mb-8">
              Land of Monasteries & Mountains
            </p>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            >
              A mystical Himalayan town where ancient monasteries, snow-covered passes,
              and crystal-clear alpine lakes create an unforgettable high-altitude escape.
            </motion.p>
          </header>

          {/* Introduction Section: Tawang */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

            {/* Advanced Radial Background Glows (Mystical Himalayan Border Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-amber-50 border border-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🏔️</span> Destination Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
                Discover Tawang
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The hidden land of dawn-lit mountains, pristine glacial valleys, and the soaring heritage of the Monpa soul.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-cyan-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">☸️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Mystical Corner of Arunachal
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Tawang, perched at a breathtaking altitude of 3,048 meters in the northwestern corner of Arunachal Pradesh, is a ruggedly beautiful paradise. It is a land deeply steeped in Tibetan Buddhist culture, dramatic mountain passes, and stunning alpine lakes.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Home to the welcoming Monpa tribe, this remote valley is bounded by Tibet to the north and Bhutan to the southwest, serving as a peaceful guardian of timeless ancient wisdom and high-altitude wilderness.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-cyan-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-cyan-600">3,048m</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Town Altitude</p>
                  </div>
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">2nd Largest</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Monastery in World</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: The Tawang Monastery */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-xl font-bold text-cyan-600 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                    🕌
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">
                    The Great Tawang Monastery
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Founded in the 17th century, <span className="font-semibold">Gaden Namgyal Lhatse</span> is India's largest monastery. Perched like a citadel on a ridge, it houses priceless ancient scriptures and a magnificent 26-foot gilded Buddha statue.
                  </p>
                </div>

                {/* Card 2: Sela Pass Ascent */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-xl font-bold text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    ❄️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    The Mighty Sela Pass
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    The breathtaking gateway to Tawang at 13,700 feet. Experience the surreal thrill of crossing through absolute snow, framed beautifully by the frozen, mystical waters of the sacred <span className="font-semibold">Sela Lake</span>.
                  </p>
                </div>

                {/* Card 3: High-Altitude Glacial Lakes */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    💧
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Madhuri Lake & Beyond
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Discover remote glacial lakes hidden in the mountains. Visit <span className="font-semibold">Sangetsar Lake (Madhuri Lake)</span>, formed by an earthquake, where upright dead tree trunks emerge eerily out of crystal-clear mountain waters.
                  </p>
                </div>

                {/* Card 4: Monpa Cuisine & Hospitality */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🍲
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Hearty Monpa Flavors
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Warm your soul in the cold weather. Try authentic Monpa delicacies like <span className="font-semibold">Zan</span> (a savory millet porridge), handmade spicy buckwheat noodles, traditional momos, and hot butter tea.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-cyan-700 via-teal-700 to-amber-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-cyan-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Tawang is a raw journey into the clouds. It requires a bit of effort to reach, but the reward is an unparalleled frontier experience blending pristine, snow-clad valleys with powerful, tranquil Buddhist roots that will stay etched in your memory forever.
                </p>
              </div>
            </div>

          </section>



          {/* 📸 GALLERY */}
          <section className="mt-28">
            <div className="flex items-center justify-between mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic flex items-center gap-3">
                <Camera className="text-sky-500" /> Visual Escape
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "https://tourscart.in/wp-content/uploads/2023/12/20200316_132710-1024x1016.jpg", title: "Tawang Monastery" },
                { url: "https://tourgeniesimplify.travel.blog/wp-content/uploads/2025/07/tawang1-1.jpg", title: "Sela Pass" },
                { url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/be/fd/1a.jpg", title: "Madhuri Lake" },
                { url: "https://s7ap1.scene7.com/is/image/incredibleindia/singsur-ani-gompa-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1742170099687", title: "War Memorial" },
                { url: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Tawang_destination_landscape_1_l_639_957.jpg", title: "Snow Peaks" },
                { url: "https://static2.tripoto.com/media/filter/tst/img/400504/TripDocument/1497093749_img_0137.jpg", title: "Mountain Sunset" }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-white/40"
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={item.url}
                      alt="Tawang "
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      {/* <h3 className="text-white text-xl font-bold tracking-wide">
                        {item.title}
                      </h3> */}
                      <p className="text-white/70 text-sm">
                        Tawang • Arunachal Pradesh
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

            {/* Advanced Radial Background Glows (High-Alpine Snow & Monastic Glow Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-amber-50 border border-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🏔️ Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
                Best Time to Visit Tawang
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your perfect high-altitude pilgrimage aligned with crystal-clear autumn skylines, vibrant rhododendron spring spreads, or snow-capped wonders.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-cyan-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-2xl font-bold mb-6 border border-cyan-100">
                    ☸️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Pristine Mountain Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Sitting at an elevation of over 10,000 feet, Tawang reveals its most spectacular and safe travel windows from <span className="font-bold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded-md">March to May</span> and <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to November</span>. Temperatures during these peak blocks stay between 5°C and 20°C, offering sharp visibility before the deep freeze sets in.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During these clear months, navigating the magnificent curves of the hair-raising <span className="font-semibold text-gray-900">Sela Pass</span>, spending silent hours inside the legendary Tawang Monastery, or capturing the reflection of Madhuri Lake feels absolutely breathtaking.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-50 to-amber-50 rounded-2xl border border-cyan-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-cyan-900 font-medium leading-relaxed">
                    <strong className="text-cyan-950">Pro Tip:</strong> Looking to see the ultimate cultural spectacle of Monpa tribes? Plan your loop around late February or early March to witness the vibrant <strong className="text-amber-950">Losar Festival</strong> (New Year) or late October for the Tawang Festival, featuring traditional masked Monastic dances.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Clear Autumn */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-cyan-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🍁
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-cyan-700 transition-colors duration-200">
                        Crystal Blue Autumn (October – November)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The premium window for landscape photography. Rainclouds disappear entirely, offering crisp mountain sun and the sharpest possible views of deep valleys and snow ridges.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-cyan-100/70 text-cyan-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Peak Clear
                  </span>
                </div>

                {/* Season 2: Spring Rhododendrons */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌸
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
                        Blooming Alpine Springs (March – May)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        As sub-zero ice packs start to melt, valleys erupt with massive spreads of wild rhododendrons and alpine blossoms. Roads are highly stable and the daytime sun feels wonderful.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Valley Blooms
                  </span>
                </div>

                {/* Season 3: Sub-Zero Heavy Snow */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ❄️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
                        Frozen Winter Cycles (December – February)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Temperatures dive way below 0°C, and heavy blizzards frequently block the Sela Pass path. Recommended only for hardcore adventure loops seeking intense raw snow blocks.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Snow Locked
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Best Stays & Himalayan Retreats Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-blue-600 selection:text-white">

            {/* Himalayan Peak Background Glows (Glacier Blue & Saffron) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-800/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                ❄️ The Dawn-Lit Mountain Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950">
                Heritage Monastic Stays & Mountain Retreats
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From cozy stays nestled in the shadow of the massive Tawang Monastery to high-altitude lodges designed to embrace the serene beauty of the Eastern Himalayas.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Monastic Heritage Stays (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      📿
                    </div>
                    <span className="text-xs font-bold bg-blue-100/60 text-blue-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Heritage Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
                    Monastic Heritage Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Experience unparalleled peace near the Tawang Monastery. These retreats feature traditional Monpa architecture, warm communal prayer spaces, and balconies that offer stunning views of the valley waking up at dawn.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-700 tracking-wider uppercase">
                  Monastery-View Balconies & Authentic Monpa Architecture
                </div>
              </div>

              {/* Card 2: High-Altitude Glacier Lodges */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏔️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Glacier & Lake View Lodges
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Located on the route to Sela Pass, these lodges are built to handle the majestic chill. Perfect for photographers and travelers looking for front-row seats to frozen lakes and snow-dusted peaks.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Sela Pass Proximity & Frozen Lake Vistas
                </div>
              </div>

              {/* Card 3: Cozy Pine Forest Cottages */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌲
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Cozy Pine-Wood Cottages
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Nestled in quiet pine groves, these cottages offer a rustic escape. With indoor fireplaces and wood-paneled rooms, they provide the warmth needed after a long day of exploring Tawang’s high-altitude secrets.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Indoor Fireplaces & Rustic Pine-Wood Interiors
                </div>
              </div>

              {/* Card 4: Modern Comfort Suites (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ✨
                    </div>
                    <span className="text-xs font-bold bg-blue-100/60 text-blue-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Modern Elegance
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Modern Himalayan Comfort Suites
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Luxury meets the Himalayas. Featuring high-end thermal insulation, expansive windows for mountain vistas, and 24/7 concierge support to arrange local transit to Bum La Pass or Madhuri Lake.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Bum La Pass Transit & Thermal-Insulated Suites
                </div>
              </div>

              {/* Card 5: Adventure Basecamps */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥾
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Explorer Adventure Hubs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Designed for trekkers and mountain bikers. Offering gear storage, essential cold-weather equipment rentals, and communal areas for sharing trekking experiences across the Arunachal high-lands.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Cold-Weather Gear Rentals & Trekker Social Lounges
                </div>
              </div>

            </div>
          </section>

          {/* Dining Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-gray-950">High-Altitude Culinary Traditions</h2>
              <p className="text-gray-600 mt-3 text-lg">Hearty Butter Tea, Thukpa, and authentic Monpa delicacies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Local Food/Culinary Cards here */}
            </div>
          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/10 to-orange-400/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🧘 High-Altitude Serenity
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Tawang
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Experience the spiritual tranquility of Arunachal’s crown jewel, home to India’s largest monastery.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-amber-400/60 shadow-md hover:shadow-xl hover:shadow-amber-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold border border-amber-100 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      📿
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Pilgrim Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Monastery Nomad
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Focus on budget guesthouses, monastery canteens, and sharing local cabs to reach high-altitude passes.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹600 – ₹1.2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹600</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚌 Shared</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹1,300 – ₹2,600 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-amber-500 hover:border-amber-400 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-amber-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold border border-amber-100 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Mountain Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for comfortable boutique hotels, hiring private cabs for Sela Pass, and exploring local cafes.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹5.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Cab</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹3.5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹6,000 – ₹11,000 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-orange-400/60 shadow-md hover:shadow-xl hover:shadow-orange-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg font-bold border border-orange-100 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Comfort
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Himalayan Luxe
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium mountain lodges, private guided tours to remote lakes, and exclusive dining experiences.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹9k – ₹20k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹5k – ₹8k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹17k – ₹33k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-amber-800 font-black">Pro Tip:</strong> Tawang is at high altitude. Plan for at least 1-2 days of acclimatization. Obtain your Inner Line Permit (ILP) and carry physical copies as network can be unreliable in high mountain passes.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-indigo-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🧶 Monpa Culture
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Shopping in Tawang
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Discover authentic Monpa craftsmanship, sacred Buddhist items, and warm mountain-ready gear.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧶
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Woolen Heritage
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Hand-woven Shawls
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore intricate <span className="font-semibold text-gray-900">Monpa shawls</span>, known for their unique patterns and exceptional warmth, perfect for high-altitude winters.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Authentic Craft
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏺
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    Buddhist Artifacts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Collect <span className="font-semibold text-gray-900">prayer wheels, singing bowls, and statues</span> blessed at the Tawang Monastery.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Spiritual Souvenirs
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🪵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Wooden Crafts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Admire hand-carved <span className="font-semibold text-gray-900">traditional masks and wooden bowls</span>, staples of local Monpa daily life.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Artisan Woodwork
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      📿
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Sacred Beads
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Mala Beads
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find authentic <span className="font-semibold text-gray-900">Rudraksha and Dzi stone malas</span>, used by monks and locals for meditation.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Spiritual Jewelry
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Local Herbs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Shop for <span className="font-semibold text-gray-900">wild medicinal herbs and organic teas</span> found in the mountain ranges surrounding Tawang.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Mountain Flora
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-indigo-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-rose-900 font-bold">Shopping Tip:</strong> The shops near the Tawang Monastery entrance are excellent for religious items, but for textiles and everyday crafts, check the local market stalls where you can engage with local weavers directly.
                </p>
              </div>
            </div>
          </section>
          {/* CTA */}
          <div className="mt-20 text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://arunachaltourism.com"
              className="inline-flex items-center gap-4 bg-sky-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(2,132,199,0.3)] hover:bg-sky-700 transition-all"
            >
              Start Your Journey <ArrowUpRight size={20} />
            </motion.a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const AttractionItem = ({ emoji, bold, text }) => (
  <li className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/50 transition-all">
    <span className="text-2xl">{emoji}</span>
    <p className="text-slate-700 font-medium">
      <b className="text-sky-900 font-black tracking-tight">{bold}:</b> {text}
    </p>
  </li>
);

const AdventureItem = ({ text }) => (
  <div className="p-4 bg-white/60 rounded-2xl flex items-center justify-between hover:bg-white transition-all">
    <span className="font-bold text-slate-700">{text}</span>
    <ArrowUpRight size={18} className="text-emerald-400" />
  </div>
);

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-sky-500/50 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-sky-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
    <span className="font-black text-sm text-sky-100">{value}</span>
  </div>
);

export default Tawang;