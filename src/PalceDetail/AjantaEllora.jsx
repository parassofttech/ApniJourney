import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Snowflake,
  Plane,
  Train,
  Compass,
  Camera,
  Landmark,
  Calendar
} from "lucide-react";

const AjantaEllora = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] py-12 px-4 sm:px-8 font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://www.onacheaptrip.com/wp-content/uploads/Kailasa-Temple-at-Ellora-Caves-Aurangabad.jpg"
            alt="Ajanta Ellora Caves"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Ajanta & Ellora
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              UNESCO World Heritage Marvel
            </p>
          </div>
        </div>

        <div className="p-8 md:p-16 -mt-16 relative z-10 bg-white rounded-t-[3rem]">

          {/* ABOUT SECTION */}
          <section className="mb-24 text-center">
            <h2 className="text-4xl font-black text-green-900 italic mb-8">
              About The Destination
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Ajanta and Ellora Caves are among India’s greatest historical treasures,
              located near Aurangabad in Maharashtra. These rock-cut caves date back
              to 2nd century BCE and showcase remarkable Buddhist, Hindu, and Jain
              sculptures and paintings carved directly into the mountains.
            </p>
          </section>

          {/* Introduction Section: Ajanta & Ellora Caves */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-700 selection:text-white">

            {/* Advanced Radial Background Glows (Ancient Basalt & Golden Fresco Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-stone-600/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-stone-100 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🗿</span> UNESCO Heritage Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Ajanta & Ellora
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Monolithic Wonders—a breathtaking manifestation of rock-cut architectural genius, timeless stone frescoes, and ancient spiritual convergence.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-stone-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🪓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Where Living Stone Whispers Ancient History
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Nestled in the rugged basalt cliffs of Chhatrapati Sambhajinagar (Aurangabad) district in Maharashtra, the twin cave complexes of Ajanta and Ellora stand as the ultimate pinnacle of Indian rock-cut art. Carved by generations of master artisans using only chisels and hammers, these structures represent an unparalleled artistic epic.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  While <span className="font-semibold">Ajanta</span> features pristine Buddhist prayer halls adorned with world-famous, expressive wall paintings, <span className="font-semibold">Ellora</span> showcases a magnificent harmony of Buddhist, Hindu, and Jain shrines—including the single largest monolithic stone excavation on the planet.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">64+</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Rock-Cut Caves</p>
                  </div>
                  <div className="bg-stone-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-stone-600">No. 1</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Monolithic Structure</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: The Iconic Kailasa Temple */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🏛️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Colossal Kailasa Temple
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Behold Cave 16 at Ellora—a structural engineering miracle. Carved from the top-down out of a single piece of solid basalt mountain rock, this double-story temple complex is twice the size of the Parthenon.
                  </p>
                </div>

                {/* Card 2: Ajanta's Masterful Frescoes */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-stone-300 shadow-md hover:shadow-xl hover:shadow-stone-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-xl font-bold text-stone-600 mb-5 group-hover:bg-stone-600 group-hover:text-white transition-all duration-300">
                    🎨
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-stone-700 transition-colors duration-200">
                    The Timeless Wall Paintings
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Trace the origins of classical Indian art. Ajanta’s dark chambers hold vivid, centuries-old frescoes of Padmapani and Vajrapani, utilizing natural mineral pigments that still glow beautifully under soft light.
                  </p>
                </div>

                {/* Card 3: The Horseshoe River Bend */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🌊
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    The Waghora Gorge Panoramas
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Appreciate the dramatic horseshoe canyon setting. Walk along the scenic viewpoint where a British officer hunting tigers in 1819 accidentally rediscovered the entrance to these long-forgotten, overgrown caves.
                  </p>
                </div>

                {/* Card 4: Three Faiths Architecture */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    🕉️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Spiritual Amalgamation
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Explore a historic lesson in cultural harmony. Ellora’s 34 public caves stretch side-by-side across the cliff face, highlighting the beautifully peaceful coexistence of Buddhist, Hindu, and Jain spiritual philosophies.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-stone-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Ajanta & Ellora is an absolute bucket-list marvel for design thinkers, history enthusiasts, and architectural purists. It challenges everything we understand about structural limitations, offering a profoundly moving, slow-travel look into India's classic golden age.
                </p>
              </div>
            </div>

          </section>



          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://etimg.etb2bimg.com/photo/119427856.cms",
                "https://breathedreamgo.com/wp-content/uploads/2010/03/India-for-Beginners-custom-tours-5.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpKHsd9BWJheuU5AEY76G-uFnBNbnMV7aEA&s",
                "https://readerin.com/wp-content/uploads/2026/01/ajanta-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-1.jpg",
                "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tzy55knjxvk4f7tb7fyk.jpg",
                "https://www.drishtiias.com/images/uploads/1576485286_image1.jpg"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Ajanta Ellora"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-16 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Ajanta & Ellora?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              A masterpiece of ancient Indian architecture, spiritual heritage,
              and artistic excellence. Perfect destination for history lovers,
              photographers, and cultural explorers.
            </p>
          </section>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Advanced Radial Background Glows (Monolithic Rocks & Ancient Heritage Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-sky-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🗿 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Time to Visit Ajanta & Ellora
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your historic exploration to India's greatest architectural wonders aligned with pleasant winter walking loops, misty monsoon ravines, and global cultural festivals.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
                    🏛️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Historical Walking Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    The absolute finest window to map out the cave circuits is from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. Because exploring these expansive rock-cut wonders requires hours of outdoor walking and open-air climbing, the mild winters (15°C - 30°C) offer the ultimate climate comfort.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this peak block, standing in front of the awe-inspiring monolithic architecture of <span className="font-semibold text-gray-900">Kailash Temple (Cave 16)</span> at Ellora or admiring the timeless Jataka tale murals at Ajanta feels highly immersive without the exhaustion of the Deccan heat.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-sky-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
                    <strong className="text-sky-950">Pro Tip:</strong> Want to immerse yourself in classical arts? Try to align your winter travels with the iconic <strong className="text-amber-950">Ellora Ajanta International Festival</strong> held around November/December. The historic backdrop lights up beautifully with live music loops and classical dance showcases from India's master artists.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Crisp Historical Winters */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
                        Crisp Heritage Winters (October – March)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The absolute gold-standard travel window. Exceptionally pleasant skies make it highly seamless to explore both complex architectures extensively without breaking a sweat.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Peak Comfort
                  </span>
                </div>

                {/* Season 2: Rainwashed Ravines */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-sky-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-700 transition-colors duration-200">
                        Lush Monsoon Waterfalls (June – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        A visually breathtaking season. The dry Deccan landscapes transform into deep velvet green, and the iconic Waghora river waterfall cascades dramatically right opposite the Ajanta horseshoe cave loops.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-sky-100/70 text-sky-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Scenic Peak
                  </span>
                </div>

                {/* Season 3: Extreme Deccan Summer */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🔥
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
                        Intense Summer Heatwaves (April – May)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Temperatures climb intensely, frequently breaching 42°C. The blazing sun makes trekking the rocky staircases highly draining. If visiting, restrict your exploration strictly to early morning slots.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Off Season
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Heritage Explorations Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-700 selection:text-white">

            {/* Ancient Background Glows (Sandstone & Charcoal) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-700/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-slate-50 border border-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🏛️ Echoes of Ancient Stone
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Monolithic Heritage & Cave Retreats
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Journey through the masterpieces of Ajanta and Ellora. Experience stays that blend modern hospitality with the profound, meditative spirit of India's ancient rock-cut architecture.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Luxury Heritage Resorts (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏺
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Heritage Luxury Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Monolithic Heritage Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Luxury residences situated near the caves, designed with terracotta accents and basalt stone architecture. Enjoy curated history tours that start from your doorstep, ensuring a seamless experience of the UNESCO sites.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
                  UNESCO Site Logistics & Basalt Stone Architecture
                </div>
              </div>

              {/* Card 2: Artistic Boutique Stays */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-slate-500/30 shadow-lg hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-xl flex items-center justify-center border border-slate-100/70 group-hover:bg-slate-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-slate-700 transition-colors duration-200">
                    Artistic Boutique Stays
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Immerse yourself in the world of Ajanta frescoes. These boutique stays feature interior themes inspired by ancient cave murals, providing a uniquely scholarly and calm ambiance for history enthusiasts.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-slate-600 tracking-wider uppercase">
                  Fresco-Inspired Decor & Scholarly Ambiance
                </div>
              </div>

              {/* Card 3: Archaeological Expedition Basecamps */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧭
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Archaeological Basecamps
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Designed for the serious explorer. These basecamps offer expert-led guided explorations of the deeper, less-visited cave complexes and lecture sessions on ancient Buddhist and Jain iconography.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Expert-Led Iconography Lectures & Deep-Cave Tours
                </div>
              </div>

              {/* Card 4: Modern Comfort & Connectivity (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-slate-500/30 shadow-lg hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 text-xl flex items-center justify-center border border-slate-100/70 group-hover:bg-slate-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ✨
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Modern Transit
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-slate-800 transition-colors duration-200">
                    Aurangabad Boutique Suites
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Centrally located in Aurangabad, these suites offer the perfect bridge between city comfort and cave exploration. Enjoy premium connectivity, airport transfers, and specialized travel desks for Ajanta and Ellora day trips.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-slate-600 tracking-wider uppercase">
                  Seamless Aurangabad-to-Cave Transit Concierge
                </div>
              </div>

              {/* Card 5: Nature-Meditative Enclaves */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧘
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Meditative Rock Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Focus on silence and history. These retreats are located in the scenic hills surrounding the cave complexes, offering meditation spaces that mirror the quiet, cave-like interiors.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Cave-Style Meditation Spaces & Scenic Hill Vistas
                </div>
              </div>

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
                🏛️ UNESCO Heritage
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Ajanta & Ellora
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Step back into history with these ancient rock-cut masterpieces located near Aurangabad, Maharashtra.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-amber-400/60 shadow-md hover:shadow-xl hover:shadow-amber-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold border border-amber-100 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      🎒
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      History Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Heritage Backpacker
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for budget lodges in Aurangabad, local buses, and street-style Maharashtrian meals.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹700 – ₹1.2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹500</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚌 Transport</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹600</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹1.3k – ₹2.3k <span className="text-xs font-bold text-gray-400">/ day</span>
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
                      Comfort Explorer
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Cultural Voyager
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Standard hotels, guided tours for deeper context, and hired cabs for comfortable inter-city travel.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹1.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Cab</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹2.5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹4.5k – ₹8k <span className="text-xs font-bold text-gray-400">/ day</span>
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
                      Luxury Heritage
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Royal Expeditions
                  </h3>
                  <p className="text-gray-600 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium resorts, private guides with historical expertise, and luxury chauffeured vehicles.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹7k – ₹12k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Fine</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2.5k – ₹4k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹12.5k – ₹21k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-amber-800 font-black">Pro Tip:</strong> Ajanta Caves remain closed on Mondays, and Ellora Caves remain closed on Tuesdays. Plan your visit accordingly to ensure both are covered.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-indigo-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🎨 Ancient Artisans
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Artistry of Aurangabad
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Bring home a piece of history with exquisite Himroo fabrics, Paithani sarees, and stone-carved replicas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      👘
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Heritage Textiles
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Himroo & Paithani
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Aurangabad is famous for <span className="font-semibold text-gray-900">Himroo weaving</span> (a blend of silk and cotton) and the regal <span className="font-semibold text-gray-900">Paithani sarees</span> known for their intricate gold borders.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Royal Woven Crafts
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🗿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Stone Replicas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find <span className="font-semibold text-gray-900">small stone-carved Buddha idols and rock-cut replicas</span> that pay homage to the caves' ancient craftsmanship.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Stone Artistry
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Ajanta Paintings
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Purchase <span className="font-semibold text-gray-900">reproductions of famous Ajanta cave murals</span>, beautifully painted on canvas or local art paper.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Mural Prints
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      📿
                    </div>
                    <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Traditional Adornments
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
                    Bidriware & Jewelry
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore intricate <span className="font-semibold text-gray-900">Bidri metal work</span> and <span className="font-semibold text-gray-900">traditional Maharashtrian jewelry</span> featuring elegant stone settings.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Metal & Ornaments
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏺
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Souvenir Keepsakes
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Pick up <span className="font-semibold text-gray-900">carved wood artifacts and brassware</span> that capture the timeless spirit of this heritage city.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Artisan Artifacts
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-indigo-500/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-amber-900 font-bold">Shopping Tip:</strong> While local stalls offer many replicas, visit the government-approved emporiums in Aurangabad for authentic Himroo textiles and high-quality craftsmanship.
                </p>
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-green-600 text-white text-xl font-black rounded-full shadow-2xl hover:bg-green-700 transition-all"
            >
              Plan Your Trip Now ✈️
            </motion.button>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

const TravelDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
    <div className="flex items-center gap-4">
      <div className="text-green-400">{icon}</div>
      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
        {label}
      </span>
    </div>
    <span className="font-black text-green-100">{value}</span>
  </div>
);

const ItineraryDay = ({ day, text }) => (
  <div className="bg-green-50 p-8 rounded-3xl shadow-md">
    <h3 className="text-xl font-black text-green-800 mb-3">{day}</h3>
    <p className="text-slate-600">{text}</p>
  </div>
);

export default AjantaEllora;