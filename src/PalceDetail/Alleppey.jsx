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

const Alleppey = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSZDYX7yuE8KCyeboD0OQq66kk3JrbJ6ZtCM3hKpNl2avVigyWRLkOgPWjTrBbIiGhH2S5nKIeMjxgvA_2UqifMMg4&s=19"
            alt="Alleppey Backwaters"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Alleppey
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Venice of the East
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
              Alleppey, also called Alappuzha, is famous for its tranquil backwaters,
              houseboat cruises, lush paddy fields, and traditional Kerala village life.
              It is often referred to as the "Venice of the East".
            </p>
          </section>

          {/* Introduction Section: Alleppey */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-600 selection:text-white">

            {/* Advanced Radial Background Glows (Lagoon Estuary & Palm Canopy Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🛶</span> Maritime Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
                Discover Alleppey
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Venice of the East—a surreal watery labyrinth where majestic houseboats glide through mirror-like lagoons, interconnected canals, and vibrant floating villages.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🌴</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A Liquid Wilderness Carved in Emerald
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Alleppey (Alappuzha), anchored perfectly along the edge of the sprawling Vembanad Lake in Kerala, is a stunning geographic masterclass in slow, aquatic living. Fringed by thousands of leaning coconut palms, this unique coastal plain forms the gateway to a vast, multi-tiered ecosystem of natural backwaters and brackish canals.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Steeped in maritime trading history, Alleppey is world-renowned for its heritage <span className="font-semibold">Kettuvallam houseboats</span>—ancient spice vessels beautifully re-engineered using bamboo mats and coir ropes into floating luxury suites. It offers an intimate window into a quiet world where life unfolds entirely on water.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-teal-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-teal-600">Vembanad</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">India's Longest Lake</p>
                  </div>
                  <div className="bg-emerald-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-emerald-600">Below 0</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Kuttanad Sea Level</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: Traditional Houseboat Cruises */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    🚢
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Heritage Houseboat Voyages
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Board a hand-crafted wooden flagship cruiser. Drift overnight past shimmering marshlands while enjoying fresh, locally harvested Karimeen (pearl spot fish) fry prepared by your private onboard chef.
                  </p>
                </div>

                {/* Card 2: Narrow Village Canal Kayaking */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🚣‍♂️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Interlocking Canal Kayaking
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Paddle through the ultra-narrow veins of the backwaters. Kayaking gets you up close to local villages, duck farming collectives, toddy shops, and children paddling mini canoes to school.
                  </p>
                </div>

                {/* Card 3: Kuttanad Agro-Tourism */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🌾
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Below-Sea-Level Farms
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Explore the "Rice Bowl of Kerala." Witness <span className="font-semibold">Kuttanad</span>, a striking agricultural valley where vast, bright green paddy fields are cultivated up to 2.5 meters *below* sea level using massive dikes.
                  </p>
                </div>

                {/* Card 4: Marari Beach & Coir Heritage */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    🏖️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Pristine Marari Coastline
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Unwind on a quiet, undeveloped white-sand paradise. Located just a short drive away from the hectic docks, Marari Beach provides a tranquil escape with wild sea-grass dunes and peaceful fishing hamlets.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-teal-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Alleppey is an absolute masterpiece of water-based travel architecture. It seamlessly transitions you out of chaotic overland rhythms into a soothing, low-impact world of premium houseboat bays and intimate canal trails—making it a mandatory slow-travel pivot for your platform.
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
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepf3i7Fhj_lP1LjbSAyM1RDujIC23Xs_znxInKbZdyTyGNhsHC4zdyuXaDDMN3WBcyGzWhlTl8a5n5yWgR2xIDNCDjeaVr0c0QGzRmERfuphVsVFQiib1j0nkUhA_BKqV8RoXA=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepAcguekLYTWW3NIwcyW2E9VAoQrDpEXDpSOP0vdmFXdMdLqI9ILwEeB1nSBemeImlm9udIaFryN-3DMy4jP2MuP4Ap3o_WYz6p8To3tICRzLqcxJafY3LI-ICBkpafI3-TbV5j=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer8c2Iji8ApTwt7yDrWhe-_GXaj7amyaip6ueMFEq-zkfM3H5dmDuLRtbSHkXf1DknUnR5WyVj2rYLQfpbGxXxPpBIzmz7kRxIxHBNep7u0BuxtcVDYq4gvq0NJMWjzqyswSASR=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQqOVQENYN0emd9yDqzTB7BCLywL63G2AOrxIyZod9Ro2BuUQcIewtZbRkE1PsCgKN1ny8uKKLJWEyGRFsIckl9bg0&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerQ0XRBy7PzVSo2Ce3D4zQ05hIg89vqtzKrrAsFNOIJ9yjcTsTx5bp4wu7QraBAf1F0uSvCNPfn30DkVkMxfC6myeGfIlcnhglBcG1bX3QJHNOFkXiD678qRl-pi-kGq8m-GFGy=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQiU79-_fEc_vw8YeQFx1gRzzMDjYndTTh4f359n170TfNiNuUC8cBoz-f2Ll0FI00cPqFxdLrLsE1S1L0yPcCEHQE&s=19"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Alleppey"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-teal-500 selection:text-white">

            {/* Advanced Radial Background Glows (Tranquil Backwaters & Palm Grove Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛶 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
                Best Time to Visit Alleppey
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your serene escape to India's ultimate backwater kingdom, aligned with smooth houseboat cruising winds, pleasant winter sun, and legendary boat races.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl font-bold mb-6 border border-teal-100">
                    🌅
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Liquid Highway Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Alleppey welcomes its most flawless, breezy, and pleasant cruising weather from <span className="font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded-md">October to March</span>. As the heavy monsoon depressions clear up, the humidity drops to its annual minimum, offering beautiful daytime temps between 20°C and 32°C.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this premium seasonal block, booking a vintage luxury <span className="font-semibold text-gray-900">Kettuvallam (Houseboat)</span> cruise, canoeing through the micro-canals of Kuttanad, or watching the orange sun melt into Alleppey Beach feels exceptionally magical and peaceful.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">🏆</span>
                  <p className="text-xs md:text-sm text-teal-900 font-medium leading-relaxed">
                    <strong className="text-teal-950">Pro Tip:</strong> Want to witness the ultimate adrenaline rush on water? Plan your travel loop around the <strong className="text-emerald-950">second Saturday of August</strong> to witness the world-famous <strong className="text-teal-950">Nehru Trophy Boat Race</strong> on Punnamada Lake. The atmosphere goes electric with massive snake boats rowing in perfect rhythm!
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Crisp Winter Houseboats */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-teal-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌾
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors duration-200">
                        Cool Winter Cruising (October – February)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The ultimate high-demand travel cycle. Mild breezes blow continuously across the lagoons, making overnight houseboat stays, village walks, and open-air kayaking completely effortless.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Peak Window
                  </span>
                </div>

                {/* Season 2: Warm Tropical Transits */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
                        Humid Tropical Summers (March – May)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Temperatures edge past 35°C, raising backwater humidity levels significantly. It works as an exceptional low-crowd window to secure high-end premium houseboats at heavily slashed off-season rates.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Budget Friendly
                  </span>
                </div>

                {/* Season 3: Torrential Monsoon Lagoons */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
                        Dramatic Monsoon Magic (June – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The backwaters swell with heavy downpours, turning the entire landscape hyper-green. While open houseboats face strict cruising limits during heavy rains, it is the prime time for authentic Ayurvedic treatments.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Ayurveda Phase
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Backwater Retreats & Houseboat Experiences Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

            {/* Backwater Background Glows (Teal & Emerald) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-100 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛶 The Venice of the East Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
                Luxury Houseboats & Backwater Sanctuaries
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Drift through Kerala’s serene waterways. From premium private houseboats to eco-resorts nestled between coconut groves and emerald canals.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Premium Private Houseboats (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ⛵
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Signature Experience
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Premium Private Houseboats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Your own floating villa on the backwaters. Featuring wooden interiors, on-board gourmet Keralan dining, and sundecks perfect for observing village life as you glide past green paddy fields.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-700 tracking-wider uppercase">
                  Floating Gourmet Dining & Canal-Side Village Vistas
                </div>
              </div>

              {/* Card 2: Riverside Heritage Resorts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏠
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    Riverside Heritage Resorts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Restored traditional Keralan architecture right on the riverbank. Experience lush coconut groves, private swimming pools, and access to traditional canoe rides.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Traditional Canoe Rides & Coconut Grove Landscapes
                </div>
              </div>

              {/* Card 3: Eco-Conscious Backwater Lodges */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Eco-Conscious Backwater Lodges
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Immerse yourself in nature without leaving a footprint. These lodges focus on sustainable tourism, farm-to-table dining, and guided bird-watching walks along the wetlands.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Wetland Bird Watching & Sustainable Farm Dining
                </div>
              </div>

              {/* Card 4: Modern Comfort Suites (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ✨
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      City Comfort
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
                    Alleppey Boutique Suites
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Perfectly positioned for exploring the city and the canals. Featuring high-speed internet for work, seamless houseboat booking services, and proximity to local markets.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Digital Nomad Connectivity & Houseboat Booking Concierge
                </div>
              </div>

              {/* Card 5: Ayurveda Wellness Hubs */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧘
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Ayurveda Wellness Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Healing by the water. These retreats combine ancient Keralan Ayurveda treatments with the meditative rhythm of the backwaters, providing deep detoxification and rest.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Ancient Ayurveda Treatments & Meditative Detox
                </div>
              </div>

            </div>
          </section>

          {/* Culinary Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-gray-950">Keralan Backwater Flavors</h2>
              <p className="text-gray-600 mt-3 text-lg">Indulge in Karimeen Pollichathu, traditional Sadya, and local fresh coconut-infused delicacies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Culinary Cards here... */}
            </div>
          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/10 to-amber-400/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🛶 Venice of the East
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Alleppey
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Navigate through serene backwaters, palm-fringed canals, and traditional houseboats in Kerala's liquid heart.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-orange-400/60 shadow-md hover:shadow-xl hover:shadow-orange-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg font-bold border border-orange-100 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      🚣
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Backwater Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Canal Backpacker
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for homestays near the canals, local Kerala meals, and shared Shikara boat rides.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹700 – ₹1.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹600</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🛶 Shikara</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹1.4k – ₹2.9k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-orange-500 hover:border-orange-400 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-orange-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg font-bold border border-orange-100 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md font-bold">
                      Houseboat Vibe
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Canal Voyager
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Standard houseboats with meals included, comfortable resorts, and scenic boat tours.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹6k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🛶 Boat</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹5k – ₹10k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-amber-400/60 shadow-md hover:shadow-xl hover:shadow-amber-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold border border-amber-100 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md font-bold">
                      Luxury Retreat
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Horizon Luxury
                  </h3>
                  <p className="text-gray-600 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium private luxury houseboats, high-end waterfront resorts, and fine-dine Keralan cuisine.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹10k – ₹20k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Fine</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚗 Priv.</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹15k – ₹29k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-orange-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-orange-800 font-black">Pro Tip:</strong> For the most authentic experience, book a houseboat that includes a sunset cruise through the narrow canals. If budget is an issue, public ferry rides offer stunning views for just a few rupees!
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛶 Cultural Finds
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Alleppey Market Finds
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Explore the riverside markets for coir products, traditional handlooms, and aromatic Kerala spices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🧶
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Coir Products
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    Coir & Hemp Crafts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Alleppey is famous for <span className="font-semibold text-gray-900">durable coir mats, carpets, wall hangings, and rustic baskets</span> made from local coconut fibers.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Signature Local Craft
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    👕
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Kerala Textiles
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Pick up traditional <span className="font-semibold text-gray-900">Kasavu sarees (white with gold border) and cotton lungis</span> that are perfect for tropical weather.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Traditional Loom
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🫚
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Kerala Spices
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Don't miss buying <span className="font-semibold text-gray-900">fresh cardamom, peppercorns, cloves, and cinnamon</span> known for their superior aromatic quality.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Aromatic Pantry
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🎨
                    </div>
                    <span className="text-xs font-bold bg-rose-100/60 text-rose-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Art & Souvenirs
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-800 transition-colors duration-200">
                    Handicrafts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover <span className="font-semibold text-gray-900">intricate wooden models of houseboats, Kathakali face masks, and brass figurines</span> which make for excellent heritage souvenirs.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Heritage Decor
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🖼️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Wall Art
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find <span className="font-semibold text-gray-900">beautiful paintings and sketches</span> that depict the serene backwater life of Alleppey.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Artistic Memories
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-orange-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-orange-900 font-bold">Shopping Tip:</strong> Visit the Alappuzha Market near the canal junction for the best prices on bulk spices. Always check for quality and authenticity when buying traditional handlooms.
                </p>
              </div>
            </div>
          </section>
          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Alleppey?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Peaceful backwaters, traditional Kerala culture, houseboat experiences,
              scenic beauty, delicious cuisine, and perfect weekend getaway from Kochi.
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

export default Alleppey;