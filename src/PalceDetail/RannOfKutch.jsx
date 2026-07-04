// src/components/RannOfKutch.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sun, Tent, Plane, Camera, Gift } from "lucide-react";

const RannOfKutch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-100 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full  mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src="https://www.laurewanders.com/wp-content/uploads/2024/12/Great-Rann-of-Kutch00001.jpg"
          alt="Rann of Kutch"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
          onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1577814288070-91c598d5947c?auto=format&fit=crop&w=1200&q=80")
          }
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-amber-800 mb-4"
          >
            🏜️ Rann of Kutch – The White Desert of India
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-10"
          >
            Spread across the **Thar Desert**, the Rann of Kutch in Gujarat is one of
            the world’s largest salt deserts. Every winter, it transforms into a
            cultural carnival during the **Rann Utsav**, where the desert glows under
            the moonlight and folk music fills the air. ✨
          </motion.p>

          {/* Introduction Section: Rann of Kutch */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-600 selection:text-white">

            {/* Advanced Radial Background Glows (Surreal Salt Desert & Moonlit Night Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-400/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-slate-100 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🏜️</span> Landscape Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
                Discover Rutch
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Great Rann of Kutch—a colossal, blindingly white salt desert that morphs into a surreal, glowing silver mirror under a full moon.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🧂</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Infinite White Salt Wilderness
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  The Great Rann of Kutch in Gujarat is one of the largest salt deserts in the world. Spanning over 7,500 square kilometers, this seasonal salt marsh remains completely submerged under shallow sea waters during monsoons, leaving behind an endless, crusty white landscape as it dries.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  It is a land of sensory contradictions—where a stark, zero-vegetation flatline completely collides with the hyper-vibrant attire, mirror-work crafts, and rhythmic desert folk music of the nomadic <span className="font-semibold">Kutchi tribes</span>.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-indigo-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-indigo-600">7,500+</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Sq Kilometers</p>
                  </div>
                  <div className="bg-rose-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-rose-600">4 Months</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Rann Utsav festival</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: The Full Moon Magic */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    🌕
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    Surreal Full Moon Nights
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Experience optical poetry. Standing in the middle of the desert on a clear full moon night reveals an ethereal glowing silver landscape, where the flat horizon dissolves entirely into the starry sky.
                  </p>
                </div>

                {/* Card 2: Rann Utsav Tent City */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    🎪
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    The Grand Rann Utsav
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Immerse in desert luxury. The winter festival transforms Dhordo into a massive, premium Tent City filled with traditional folk dancers, camel safaris, starlit dining, and paramotoring over the salt pans.
                  </p>
                </div>

                {/* Card 3: Kalo Dungar Views */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🦅
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Kalo Dungar Panoramic Edge
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Scale the Black Hill. As the absolute highest point in Kutch, <span className="font-semibold">Kalo Dungar</span> offers a sweeping, jaw-dropping view where the vast desert flats seamlessly blur into the ocean horizon.
                  </p>
                </div>

                {/* Card 4: Artisan Craft Villages */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🧵
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Heritage Craft Villages
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Trace indigenous geometry. Travel to local artisan hamlets like <span className="font-semibold">Bhujodi and Nirona</span> to witness master creators practicing rogue Rogan painting, block printing, and intricate Kutchi embroidery.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-800 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-indigo-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, the Rann of Kutch is a highly cinematic geography. It cleanly strips away landscape noise to deliver a pristine, minimalist white backdrop balanced by intense regional artistry, offering one of the most uniquely isolating travel experiences in Asia.
                </p>
              </div>
            </div>

          </section>


          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Rann of Kutch Gallery – White Sands & Colorful Traditions
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://m.media-amazon.com/images/S/pv-target-images/54db22ae37635a39268314aa0c33c5c41c9c584626f7abea86a531e0344b1f42._SX1080_FMjpg_.jpg",
                "https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg",
                "https://i.ytimg.com/vi/ZiRLz9s669I/maxresdefault.jpg",
                "https://kutchtourism.in/wp-content/uploads/2024/12/Full-Moon-Night-In-The-Rann-of-Kutch-1-1-1024x630.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKym6FD3Ocmixnm2mr8Sq5pCKKlF3d5R0HMbiYonv3Qkeb-xIw0bMtHA5jDnIN_CfHtM&usqp=CAU",
                "https://www.tourmyindia.com/blog//wp-content/uploads/2023/04/Top-Things-to-Do-in-Kutch-Gujarat.jpg",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Rann of Kutch"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1577814288070-91c598d5947c?auto=format&fit=crop&w=1200&q=80")
                  }
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

            {/* Advanced Radial Background Glows (White Salt Desert & Kutchi Culture Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-slate-200/20 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-orange-50 border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🐪 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-slate-950 to-gray-950">
                Best Time to Visit Rann of Kutch
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your perfect desert getaway aligned with completely dried salt fields, cool night winds, and festival loops.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-700 flex items-center justify-center text-2xl font-bold mb-6 border border-slate-200">
                    🎪
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Great Salt Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    The Great Rann of Kutch is exclusively accessible and enjoyable from <span className="font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded-md">November to February</span>. During this winter block, monsoon waters dry out entirely, transforming the massive basin into a pristine white sheet under pleasant 12°C - 25°C daytime conditions.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this premium timeline, the world-famous <span className="font-semibold text-gray-900">Rann Utsav tent city loops</span>, Dhordo cultural hubs, Kala Dungar peaks, and local artisan handicraft markets are fully operational.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-slate-100 to-orange-50 rounded-2xl border border-slate-200/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-slate-900 font-medium leading-relaxed">
                    <strong className="text-slate-950">Pro Tip:</strong> To experience the salt desert at its absolute most surreal, book your travel loops strictly around the <strong className="text-orange-950">Full Moon nights</strong>. The vast white landscape glows brilliantly silver under the moon, creating a magical view.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Winter Rann Utsav Peak */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ✨
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
                        Winter Glory (November – February)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The grand peak cycle. The salt flats are perfectly white and dry. Ideal for camel cart safaris, cultural folk dance spectacles, paramotoring loops, and chilly stargazing nights.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    White Desert Peak
                  </span>
                </div>

                {/* Season 2: Shoulder / Transition Weeks */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-slate-300 shadow-sm hover:shadow-lg hover:shadow-slate-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-slate-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌤️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-slate-700 transition-colors duration-200">
                        Shoulder Months (March & October)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Weather gets progressively warmer or marks the start of the drying sequence. The tent cities are usually packed up, but independent travelers can explore the salt flats with zero tourist crowds.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-slate-100/70 text-slate-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Off-Beat Windows
                  </span>
                </div>

                {/* Season 3: Monsoon Inundation */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
                        Monsoon Flooding (April – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Intense summer heat followed by heavy monsoon water filling the marshland basin. The entire desert turns completely into an submerged inland sea loop, making it inaccessible for walking.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Submerged Marsh
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Best Hotels & Resorts Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-600 selection:text-white">

            {/* Desert Horizon Background Glows (Salt White, Saffron Sunset & Indigo Nights) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-900/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-indigo-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🐪 The Great Salt Desert Stay Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Best Hotels, Resorts & Tent Cities in Kutch
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From the spectacular luxury glamping clusters at Dhordo Tent City to traditional mud-cottage Bhungas near the white salt desert.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Premium Luxury Glamping (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🎪
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Rann Utsav Prime
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    The Official Tent City & Premium Glamping Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Immerse yourself directly into the carnival core at the luxurious <span className="font-semibold text-gray-900">Tent City Dhordo</span> or premium eco-resorts close by. These immense seasonal setups offer beautifully crafted, air-conditioned Swiss chalets, grand premium dining halls serving royal Gujarati thalis, high-end cultural pavilions, and seamless VIP transport layouts directly reaching the white salt horizon.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
                  AC Swiss Tents & Custom Desert Stargazing Gazebos
                </div>
              </div>

              {/* Card 2: Authentic Vernacular Bhungas */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-500/30 shadow-lg hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-900 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🛖
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    Traditional Kutchi Bhunga Cottages
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Stay inside signature mud-brick circular houses called <span className="font-semibold text-gray-900">Bhungas</span> available at premium heritage resorts. Built to withstand fierce desert winds, they feature gorgeous interior clay reliefs, authentic intricate mirror-work details, and rustic thatch finishes.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Clay Relief Borders & Hand-Carved Mirror Aesthetics
                </div>
              </div>

              {/* Card 3: Peaceful Eco-Resorts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Tranquil Eco-Villas near Hodka Village
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Escape the massive crowds by checking into locally-run boutique eco-villages near Hodka. These spaces focus on quiet rural community interaction, offering incredible artisanal workshop linkages and beautiful courtyard bonfires under the clear sky.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Open-Air Courtyard Bonfires & Village Craft Tours
                </div>
              </div>

              {/* Card 4: Heritage Stays in Bhuj Hub (Featured - Larger width) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏰
                    </div>
                    <span className="text-xs font-bold bg-indigo-100/60 text-indigo-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Historic Gateway Hub
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    Classic Business Hotels & Royal Palaces in Bhuj
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For a reliable, highly connected itinerary, position your group inside the historic city of <span className="font-semibold text-gray-900">Bhuj</span>. Excellent modern premium options and vintage palace residencies provide structured luxury amenities, prompt 24x7 travel desks, and instant access to Aina Mahal, Prag Mahal, and the Bhuj airport corridors.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Airport Transit Lounges & Heritage City Access
                </div>
              </div>

              {/* Card 5: Coastal Mandvi Retreats */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-500/30 shadow-lg hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌊
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    Coastal Mandvi Beach Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Extend your desert circuit to the Arabian Sea lines. Beautiful luxury tented retreats directly situated on private beaches inside the Vijay Vilas Palace perimeter offer serene golden sands and gorgeous flamingo spotting loops.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Private Palace Beaches & Wood-Deck Sunsets
                </div>
              </div>

            </div>
          </section>


          {/* Restaurants & Cafes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

            {/* Culinary Background Tints */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-950/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-indigo-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🍛 Royal Bajra Rotlas & Ghee Swirls
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Best Restaurants & Dining Spots in Kutch
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From unlimited, authentic Kathiyawadi and Kutchi thalis rich with hand-churned buttermilk to warm winter jaggery crumbles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Iconic Authentic Kutchi Thali Spaces (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🫓
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Traditional Village Rasoi
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    Traditional Kutchi & Kathiyawadi Thali Diners
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Indulge in authentic local hospitality at highly rated culinary hubs like <span className="font-semibold text-gray-900">Green Rock Restaurant</span> in Bhuj or heritage dining setups inside Hodka. These legendary dining rooms feature rustic, endless courses of thick wood-fired <span className="font-semibold text-gray-900">Bajra na Rotla</span> smeared with fresh white butter, savory *Ringan no Oro* (smoky roasted eggplant mash), spicy garlicky chutneys, sweet *Vadi*, and bowls of endless cold buttermilk.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
                  Unlimited Desi Ghee Spreads & Infinite Chhas Rounds
                </div>
              </div>

              {/* Card 2: Famous Spicy Kutchi Dabeli Hubs */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-500/30 shadow-lg hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🍔
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    The Original Spicy Kutchi Dabeli Outlets
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    You simply cannot skip the birthplace of <span className="font-semibold text-gray-900">Dabeli</span>! Street food stalls across Mandvi and Bhuj press soft buns with a highly specific sweet-and-spicy potato mash, loaded with crunch roasted peanuts, fresh pomegranate seeds, and iconic garlic chutneys.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Tava-Grilled Butter Buns & Pomegranate Crunches
                </div>
              </div>

              {/* Card 3: Sweet Mawa Halwa Parlours */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥛
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Famous Kutchi Sweet-Mawa Confectioneries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Satiate your post-meal dessert cravings at historic milk sweet counters like <span className="font-semibold text-gray-900">Khavda Sweet House</span>. Their signature item is the rich caramelised <span className="font-semibold text-gray-900">Kutchi Dry Mawa</span>, a slow-boiled condensed milk sweet delicately infused with green cardamom and saffron.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Authentic Khavda Dry-Mawa Cakes & Pakwans
                </div>
              </div>

              {/* Card 4: Open-Air Highway Food Squares (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-500/30 shadow-lg hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌾
                    </div>
                    <span className="text-xs font-bold bg-indigo-100/60 text-indigo-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Rann Highway Pitstops
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
                    Breezy Highway Food Courts & Traditional Dhabas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Fuel your road-trip along the expansive Bhuj-Dhordo highway corridor. Modern multi-cuisine open-sky plazas provide clean resting washrooms and a mixed menu of piping hot Punjabi paneer gravies, crispy hot butter parathas, and light snacks for crisp winter evening drives.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Clay-Oven Tandoori Spreads & Fast Highway Munchies
                </div>
              </div>

              {/* Card 5: Smart Transit Cafes */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    ☕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Artisanal Coffee & Quick-Bite Stations
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For urban travelers needing a swift dose of modern caffeine, cozy contemporary cafes inside Bhuj serve rich espresso variations, loaded grilled vegetable paninis, and refreshing iced sodas to beat the sharp afternoon desert sun.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Chilled Espresso Blends & Grilled Cheesy Paninis
                </div>
              </div>

            </div>

            {/* Travel Guide Tip Banner */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600/10 via-indigo-600/5 to-transparent border border-orange-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-orange-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-orange-900 font-bold">Rann of Kutch Traveler Tip:</strong> Because the White Rann borders high-security military zones near the frontier, it is absolutely mandatory to acquire a tourism permit online or at the Bhirandiyara checkpoint. Keep your original government ID card physical copies accessible before entering the main desert access lines!
                </p>
              </div>
            </div>

          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-300/10 to-yellow-300/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🏜️ White Desert Planner
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Rann of Kutch
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Analyze daily cost structures to witness the ethereal beauty of the White Rann and the vibrant culture of Kutch.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-orange-400/60 shadow-md hover:shadow-xl hover:shadow-orange-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg font-bold border border-orange-100 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      ⛺
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Desert Backpacker
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for budget explorers utilizing homestays in Hodka or Bhirandiyara and local transport.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1,500</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚌 Local</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹200 – ₹500</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹1,400 – ₹2,800 <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-orange-500 hover:border-orange-400 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-orange-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg font-bold border border-orange-100 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md font-bold">
                      Balanced
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Cultural Explorer
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for families choosing traditional Bhungas (mud huts) and curated cultural tours.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🛖 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹7k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚕 Cab</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹3k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹5,500 – ₹12k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-yellow-400/60 shadow-md hover:shadow-xl hover:shadow-yellow-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center text-lg font-bold border border-yellow-100 shadow-sm group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-md font-bold">
                      Elite Desert
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Rann Luxury
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium tents or heritage resorts, personalized safaris, and exclusive desert experiences.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹10k – ₹25k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹6k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-yellow-600 tracking-tight">
                    ₹15k – ₹36k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-orange-500/10 via-yellow-500/5 to-transparent border border-orange-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-orange-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-orange-800 font-black">Pro Tip:</strong> Visit during the full moon to witness the salt desert glowing under moonlight—an otherworldly experience. Also, ensure you book your permits in advance!
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Handicraft Haven
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Shopping in Kutch
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Explore the legendary Kutch handicrafts: mirror work, Rogan art, and intricate embroideries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧵
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Traditional Art
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Kutchi Embroidery & Mirror Work
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover vibrant <span className="font-semibold text-gray-900">embroidery with mirror work</span> on textiles. These traditional fabrics are the heart of Kutch’s heritage.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Authentic Textile Craft
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Rogan Art
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Experience the rare <span className="font-semibold text-gray-900">Rogan art</span>—a unique textile printing technique where boiled castor oil and natural pigments are used to create stunning motifs.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Rare Heritage Craft
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-yellow-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-xl flex items-center justify-center border border-yellow-100/70 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏺
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-yellow-700 transition-colors duration-200">
                    Terracotta Crafts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Take home <span className="font-semibold text-gray-900">hand-painted terracotta items</span>, which showcase the primitive and artistic clay-work traditions of the region.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-yellow-600 tracking-wider uppercase">
                  Primitive Artistry
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      📿
                    </div>
                    <span className="text-xs font-bold bg-purple-100/60 text-purple-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Silver Jewelry
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
                    Kutchi Silverwork
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore intricate, hand-crafted <span className="font-semibold text-gray-900">silver ornaments and jewelry</span>, designed with traditional ethnic motifs that define Kutch’s fashion.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Heritage Silver Ornaments
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🪵
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Woodwork
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Kutch is known for exquisite <span className="font-semibold text-gray-900">hand-carved wooden artifacts</span>, ranging from ornate furniture to intricate utility items.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Artisan Wood Crafts
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-orange-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-rose-900 font-bold">Shopping Tip:</strong> Visit local craft villages like Nirona or Gandhi Nu Gam. Buying directly from the artisans ensures you get authentic products while supporting the local economy!
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default RannOfKutch;
