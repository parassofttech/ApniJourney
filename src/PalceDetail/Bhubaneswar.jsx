import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Plane,
  Train,
  Compass,
  Coffee,
  Camera,
  Utensils,
  ArrowUpRight,
  Landmark,
  Calendar,
  Snowflake
} from "lucide-react";

const Bhubaneswar = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQKIotNBa25J-H3nGS6eYEx7qkZb3RKbQs59i60abRtwWSZ3WbFzwrsqX-z90zwCz_LCnMr55BswjoZKc6GtU1-Onc&s=19"
            alt="Bhubaneswar City"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Bhubaneswar
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Temple City of India
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
              Bhubaneswar, the capital of Odisha, is renowned for its ancient temples,
              rich cultural heritage, and beautiful architecture. Known as the "Temple City,"
              it is a major hub for history enthusiasts, spiritual travelers, and art lovers.
            </p>
          </section>

          {/* Introduction Section: Bhubaneswar */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

            {/* Advanced Radial Background Glows (Kalinga Sandstone & Heritage Orange Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🛕</span> Kalinga Heritage Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Discover Bhubaneswar
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Temple City of India—a brilliant administrative capital where ancient stone structural engineering seamlessly paths into modern, eco-forward urban greenways.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🗿</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Where Sacred Geometry Meets Planned Urbanism
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Bhubaneswar, the clean and leafy capital of Odisha, gets its name from *Tribhubaneswar* (The Lord of Three Worlds). Historically bragging over 7,000 sandstone shrines, it forms the crucial starting apex of the famous East-Coast Golden Triangle, preserving a continuous structural timeline spanning over 2,500 years.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Designed in its modern layout by German architect Otto Königsberger in 1948, Bhubaneswar is a rare city that gracefully interfaces its rich <span className="font-semibold">Kalinga style stone-cut architecture</span> with pristine global hockey infrastructure, high-density tech parks, and heavily shaded public parks.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">Deula</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Kalinga Style</p>
                  </div>
                  <div className="bg-orange-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-orange-600">Top 5</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Greenest Cities</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: Lingaraj Temple Architecture */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🔱
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Great Lingaraj Spire
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Deconstruct the crown jewel of Kalinga architecture. Rising to a staggering 180 feet, this 11th-century monument features incredible sandstone reliefs, representing the perfect culinary union of Harihara (Shiva and Vishnu).
                  </p>
                </div>

                {/* Card 2: Udayagiri & Khandagiri Caves */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    🧗‍♂️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Udayagiri Rock Chambers
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Explore twin hillside rock networks dating back to the 2nd century BCE under Emperor Kharavela. Check out the multi-layered *Rani Gumpha* cave, featuring highly complex historical friezes and early theater steps.
                  </p>
                </div>

                {/* Card 3: Mukteswar Temple (Gem of Odisha) */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl font-bold text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    🕌
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                    Mukteswar Torana Archway
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Examine the iconic heavy stone archway (*Torana*) of the 10th-century Mukteswar shrine. Renowned as the "Gem of Odishan Architecture," it exhibits fine intricate carvings of smiling stylized faces and mythical lions.
                  </p>
                </div>

                {/* Card 4: Dhauli Peace Pagoda & Ashokan Edicts */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🕊️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Dhauli Giri Peace Shanti Stupa
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Stand on the hill overlooking the Daya River where the brutal Kalinga War transformed Emperor Ashoka towards peace. The bright white peace dome sits right above rare, rock-engraved major rock edicts from 257 BCE.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Bhubaneswar is a phenomenal slow-travel hub that expertly balances immense stone heritage preservation with top-tier modern planning. It beautifully avoids the high-friction chaos of typical old spiritual centers, providing an exceptionally clean, scannable, and culturally packed urban asset for your digital nomad map.
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
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo7nzE0v0OYMjxq6OdBQEW6aBG9pqABTgxEnuPYk9Hy1mi2fKMVBkz92l5LLMFlIMoANDNC3N7DJZkuGik1BR8jZnMZkP49MbOxyPF7OG1L5lYrRHszMc7I8iANnVKfeAVySKo=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGfOpGa54eB0d9f1AuV9Mp-H3YSH0hXie2Xx0Z6KrOx7tIgplNzMioUkfR-DtoqTuJQDa9FT_KwKuFs4QJBrtfsyVJJrTxTG4FMqr2I16PJoQgiIcykqplF0yVfJ37F-O2ruaZ=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSoHLUle2P4U2G4sYgUqZeY9SBgBxxfaIicNJYJMQfzuktg4vQnu2ErmBUF5h45tSBqihGEHdL_dQ5bKrYiVgLVo2g&s=19",
                "https://etimg.etb2bimg.com/photo/101281045.cms",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqlRt3bCjyyxWhD_iTyRdDvX6m6dNblKSd-pVKUuz_HZUrFNYFgYVoOIRiymLVhx60otQdWHqzLoVgmPBYVY5s62vzx-hyVUFFQ1S8KB47T4ioPdyn2UlEAR_JG9wvHZOw4vFpk=w675-h390-n-k-no",
                "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1742167192930"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Bhubaneswar"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Advanced Radial Background Glows (Kalinga Sandstone Temples & Sacred Waters Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛕 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Best Time to Visit Bhubaneswar
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your heritage trail across Odisha's majestic capital, aligned with pleasant winter temple tours, clear breezy days, and legendary cultural festivals.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
                    🔱
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Heritage Temple Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Bhubaneswar unfolds its absolute finest weather, cool refreshing winds, and dry sunny days from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. Because exploring the thousands of stone temples requires substantial outdoor foot walking, winters are ideal with comforting temperatures between 15°C and 28°C.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this premium seasonal block, admiring the towering spire of <span className="font-semibold text-gray-900">Lingaraj Temple</span>, exploring the intricate stone carvings of Mukteshwar Temple, or climbing the ancient rock-cut caves of Udayagiri & Khandagiri feels completely comfortable and delightful.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-teal-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💃</span>
                  <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
                    <strong className="text-amber-950">Pro Tip:</strong> Looking to immerse yourself in classical artistry? Aim your winter trip for <strong className="text-amber-950">January/February</strong> to witness the renowned <strong className="text-amber-950">Mukteswar Dance Festival</strong> and Rajarani Music Festival. Experiencing world-class Odissi performances live against the backdrop of beautifully lit 10th-century temples is absolutely surreal.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Crisp Heritage Winters */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
                        Breezy Winter Peak (October – March)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The ultimate time for sightseeing. Pleasant daytime warmth followed by refreshing, cool evenings makes temple tours, open-air zoo excursions, and shopping loops incredibly easy.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Peak Season
                  </span>
                </div>

                {/* Season 2: Heavy Tropical Monsoons */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-teal-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors duration-200">
                        Lush Coastal Monsoons (July – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The city receives substantial downpours, transforming nearby wetlands and historic caves into rich, vibrant green landscapes. Good for budget travelers who favor misty, rainwashed vistas.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Lush Vistas
                  </span>
                </div>

                {/* Season 3: Humid Summer Heatwaves */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🔥
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
                        Intense Tropical Summers (April – June)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Temperatures heavily soar past 40°C with high coastal humidity, making midday outdoor walking extremely exhausting. Sightseeing during this time must be strictly timed for early mornings.
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

          {/* Temple Heritage & Cultural Retreats Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

            {/* Temple Background Glows (Sandstone Gold & Sacred Teal) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-teal-50 border border-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛕 The Temple City Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Heritage Temple Stays & Architectural Retreats
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Explore the Kalingan architectural marvels. From luxury heritage stays reflecting ancient temple aesthetics to peaceful retreats near the sacred Bindu Sagar.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Kalingan Heritage Resorts (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏛️
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Temple Heritage Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Kalingan Heritage Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Luxury residences inspired by the intricate carvings of Lingaraj and Mukteshwar temples. Enjoy curated architectural walking tours, traditional Odissi dance evenings, and serene courtyard dining.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
                  Architectural Walking Tours & Odissi Cultural Evenings
                </div>
              </div>

              {/* Card 2: Sacred Lake Enclaves */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    💧
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Bindu Sagar Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Quiet sanctuaries located near the sacred Bindu Sagar lake. These retreats emphasize silence, meditation, and morning temple rituals, offering a deep spiritual connection to the city's ancient roots.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Meditation Rituals & Sacred Lake Contemplation
                </div>
              </div>

              {/* Card 3: Artisan & Craft Basecamps */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Artisan Craft Basecamps
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For the culture enthusiast. These camps facilitate workshops in Pattachitra painting and stone carving, providing direct access to the local artisan communities of Odisha.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Pattachitra Workshops & Artisan Community Access
                </div>
              </div>

              {/* Card 4: Modern Business & Heritage Suites (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ✨
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Modern Transit
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                    Bhubaneswar City Boutique Suites
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Centralised comfort. Perfectly positioned for business travelers or family explorers, featuring high-speed Wi-Fi, premium transit concierge for Konark/Puri day-trips, and luxury amenities.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Digital Nomad Connectivity & Konark-Puri Trip Concierge
                </div>
              </div>

              {/* Card 5: Nature-Meditative Enclaves */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Eco-Nature Sanctuaries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Escape into greenery near the city edge. These sanctuaries offer lush garden landscapes, bird-watching trails, and yoga sessions designed for holistic rejuvenation.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Garden Landscapes & Holistic Yoga Sanctuaries
                </div>
              </div>

            </div>
          </section>

          {/* Culinary Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-gray-950">Odian Temple Flavors</h2>
              <p className="text-gray-600 mt-3 text-lg">Taste the authentic Abadha (temple food), Chenna Poda, and local fresh seafood delicacies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Culinary Cards here... */}
            </div>
          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-400/10 to-orange-400/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🛕 Temple City
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Bhubaneswar
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Experience the blend of ancient Kalingan architecture and modern urban energy.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-rose-400/60 shadow-md hover:shadow-xl hover:shadow-rose-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold border border-rose-100 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      🚲
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Temple Backpacker
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Ideal for hostels near the old city, local Odia 'thali' joints, and city bus transit.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹600 – ₹1.2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹250 – ₹500</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🎟️ Entry</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹30 – ₹80</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹900 – ₹1.8k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-rose-500 hover:border-rose-400 shadow-xl hover:shadow-2xl hover:shadow-rose-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-rose-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold border border-rose-100 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md font-bold">
                      Urban Explorer
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Heritage Voyager
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Stay at comfortable 3-star business hotels, cab-based travel, and visits to Khandagiri/Udayagiri.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2.5k – ₹4.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚙 Cab</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹700 – ₹1.2k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-rose-600 tracking-tight">
                    ₹4k – ₹7.2k <span className="text-xs font-bold text-gray-400">/ day</span>
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
                      Premium Retreat
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Bhubaneswar Imperial
                  </h3>
                  <p className="text-gray-600 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Luxury five-star resorts, private chauffeurs for day trips, and fine dining experiences.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹7k – ₹15k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Fine</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">✨ Tours</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹3k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹10k – ₹22k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-rose-500/10 via-orange-500/5 to-transparent border border-rose-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-rose-800 font-black">Pro Tip:</strong> Dedicate a day for the 'Golden Triangle'—Bhubaneswar, Puri, and Konark—for the ultimate Odisha experience.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-purple-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-indigo-50 border border-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Artistic Heritage
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Bhubaneswar Market Finds
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From intricate Pattachitra to silver filigree, take home the soul of Odisha's craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🎨
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Fine Art
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Pattachitra Paintings
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover traditional <span className="font-semibold text-gray-900">Pattachitra</span>, cloth-based scroll paintings with rich, mythological storytelling in vibrant colors.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Odisha Pride
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🥈
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Silver Filigree
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore exquisite <span className="font-semibold text-gray-900">Tarakasi</span> (silver filigree) jewelry and artifacts—a hallmark of Cuttack & Bhubaneswar artistry.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Delicate Craft
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏺
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Stone Carvings
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Hand-carved <span className="font-semibold text-gray-900">sandstone sculptures</span> inspired by the architectural mastery of the Konark Sun Temple.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Ancient Skill
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-indigo-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-xl flex items-center justify-center border border-indigo-100/70 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      👗
                    </div>
                    <span className="text-xs font-bold bg-indigo-100/60 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Textiles
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-800 transition-colors duration-200">
                    Sambalpuri Ikat
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Shop for authentic <span className="font-semibold text-gray-900">Sambalpuri sarees and fabrics</span>, globally renowned for their tie-dye 'Ikat' weaving technique.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Handwoven Luxury
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🪴
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Applique Work
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Check out <span className="font-semibold text-gray-900">Pipili Applique</span>, a vibrant needlework art used for colorful bags, wall hangings, and umbrellas.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Vibrant Textile
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/10 via-indigo-500/5 to-transparent border border-rose-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-rose-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-rose-900 font-bold">Shopping Tip:</strong> Visit 'Ekamra Haat'—it is a dedicated artisan village in the heart of Bhubaneswar that offers a vast range of authentic crafts at standardized prices.
                </p>
              </div>
            </div>
          </section>
          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Bhubaneswar?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Discover a city blending ancient temples, vibrant culture, and rich heritage,
              perfect for history enthusiasts, spiritual travelers, and photographers.
            </p>
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

// Reusable Components
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

export default Bhubaneswar;