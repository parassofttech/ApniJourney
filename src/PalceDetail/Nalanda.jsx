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

const Nalanda = () => {
  return (
    <div className="w-full  bg-[#f4faff] font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg/1280px-Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg"
            alt="Nalanda Ruins"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Nalanda
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              Ancient Seat of Learning
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
              Nalanda, located in Bihar, was an ancient center of higher learning, dating back to the 5th century.
              The ruins of Nalanda University showcase remarkable Buddhist architecture and historical significance,
              attracting scholars and tourists from around the world.
            </p>
          </section>

          {/* Introduction Section: Nalanda */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">

            {/* Advanced Radial Background Glows (Monastic Clay & Saffron Light Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>📜</span> UNESCO Ancient Heritage Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Discover Nalanda
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                The Light of Asia—the ruins of the world's premier residential university, standing as a monumental testament to classical Indian architecture, philosophy, and intellectual dominance.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🧱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Epicenter of Ancient Knowledge Systems
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Nalanda, located just a short distance from Patna and Rajgir in Bihar, is a globally awe-inspiring archaeological wonder. Flourishing from the 5th century CE to the 12th century CE under the patronage of the Gupta and Pala Empires, this sprawling brick-built Mahavihara hosted over 10,000 international scholars and 2,000 revered teachers.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Designed with meticulous geometrical precision, the excavated ruins reveal a stunning grid of grand monasteries, step-down water reservoirs, symmetric prayer stupas, and specialized cooling cellars, anchoring it as a deeply moving monument to human wisdom.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">9 Million</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Manuscripts Lost</p>
                  </div>
                  <div className="bg-orange-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-orange-600">11+</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Layered Monasteries</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: The Great Stupa of Sariputra */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🏛️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Sariputra Monument
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Gaze at Temple No. 3—the defining architectural icon of Nalanda. This massive, multi-tiered pyramid structure features multiple corner towers adorned with beautiful, classical stucco art niches of Buddhist deities.
                  </p>
                </div>

                {/* Card 2: Dharma Gunj (The Library Devastation) */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    📜
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    The Legendary Nine-Story Library
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Trace the tragic history of *Dharma Gunj* (The Mountain of Truth), the institution's legendary library complex. Historical accounts state that the burning repository of knowledge smoked for three straight months after foreign attacks.
                  </p>
                </div>

                {/* Card 3: Advanced Thermal Engineering */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-stone-300 shadow-md hover:shadow-xl hover:shadow-stone-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-xl font-bold text-stone-600 mb-5 group-hover:bg-stone-600 group-hover:text-white transition-all duration-300">
                    📐
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-stone-700 transition-colors duration-200">
                    Symmetric Brick Monasteries
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Examine the highly advanced architectural grid layouts. Built entirely with beautifully thick burnt bricks, the double-story residential halls feature central shared courtyards, stone ventilation networks, and internal drainage canals.
                  </p>
                </div>

                {/* Card 4: Xuanzang Memorial Hall */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl font-bold text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    🎐
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                    The Hiuen Tsang Repository
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Visit the peaceful contemporary peace pavilion nearby, built in honor of Xuanzang (Hiuen Tsang), the brave 7th-century Chinese traveler who documented Nalanda’s academic curricula and stellar operational discipline.
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
                  In short, Nalanda is an absolutely profound destination for global design minds, thinkers, and historical purists. It beautifully documents structural engineering and early human academic infrastructure, offering an incredible, quiet look into classic India's golden age of logic and philosophy.
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
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxWuJnVsXYV33Fr4ZSptjq7dpQhJ-ijNMdg&s",
                "https://images.squarespace-cdn.com/content/v1/5b735348266c075124b0ffb3/1623232107561-C7JSMTMIOG1AEAMH6JCG/Nalanda+image.jpg?format=1500w",
                "https://s7ap1.scene7.com/is/image/incredibleindia/10-nalanda-bihar-city-hero-new?qlt=82&ts=1742172163876",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiXXgKP3p0OM7IQj8xuQfhTrrVsCBRNjYqw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHL8pVfaUbSDD6WIL9mjLrsykNPcux9TCCag&s",
                "https://pbs.twimg.com/media/HBriX8IbgAgqveP.jpg"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Nalanda"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

            {/* Advanced Radial Background Glows (Ancient Brick Ruins & Scholarly Heritage Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-emerald-50 border border-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                📜 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Best Time to Visit Nalanda
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your historic walking exploration across the UNESCO World Heritage university ruins, aligned with pleasant winter breezes and crisp, unshaded outdoor trails.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-orange-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-2xl font-bold mb-6 border border-orange-100">
                    🏛️
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Archaeological Walking Windows
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Nalanda is best explored during the cool, dry winter stretch from <span className="font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded-md">October to March</span>. Because walking across the sprawling, unshaded brick residential complexes and massive stupa structures takes hours under the open sky, mild daytime conditions (12°C to 25°C) are essential.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this premium seasonal block, climbing the steps of the iconic <span className="font-semibold text-gray-900">Sariputra Stupa (Temple No. 3)</span>, walking through the ancient classroom cells, or mapping history at the Nalanda Archaeological Museum feels incredibly engaging and physically refreshing.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-emerald-50 rounded-2xl border border-orange-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-xs md:text-sm text-orange-900 font-medium leading-relaxed">
                    <strong className="text-orange-950">Pro Tip:</strong> Looking for a deeply immersive heritage circuit? Combine your Nalanda winter loop with the nearby <strong className="text-emerald-950">Rajgir Mahotsav</strong>, usually celebrated around <strong className="text-orange-950">November/December</strong>. It offers a spectacular showcase of classical dances, martial arts, and vibrant folk music loops just a short transit away.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Crisp Historical Winters */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
                        Crisp Heritage Winters (October – March)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The gold-standard travel window. Gentle sunshine makes it perfect for extensive open-air photography and walking tours, followed by chilly, refreshing evenings.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Peak Comfort
                  </span>
                </div>

                {/* Season 2: Rainwashed Ancient Terracotta */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-emerald-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-200">
                        Monsoon Showers & Greenery (July – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The surrounding manicured lawns and countryside gardens break into rich emerald green. The rain washes the 1,500-year-old structures, bringing out a beautiful, deep earthy texture.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Lush Vistas
                  </span>
                </div>

                {/* Season 3: Extreme Plains Summer */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🔥
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
                        Blazing Plains Summer (April – June)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Temperatures intensely branch past 42°C, accompanied by dry, scorching winds. Walking on the open, radiating brick masonry becomes highly draining. If visiting, stick strictly to early morning hours.
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
          {/* Heritage Wisdom & Scholarly Retreats Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-700 selection:text-white">

            {/* Ancient Background Glows (Brick Red & Wisdom Gold) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 text-orange-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                📜 The Eternal Seat of Learning Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Monastic Heritage Stays & Scholarly Retreats
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Walk in the footsteps of ancient scholars. Experience stays designed to mirror the meditative ambiance of Nalanda, blending historical reverence with serene modern comfort.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Monastic-Inspired Boutique Retreats (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🛕
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Heritage Scholar Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    Monastic Heritage Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Reside in rooms inspired by the ancient 'viharas'. These retreats feature minimalist design, terracotta elements, and meditative garden courtyards that provide a peaceful base for exploring the Nalanda ruins.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
                  Vihara-Inspired Architecture & Meditative Gardens
                </div>
              </div>

              {/* Card 2: Knowledge-Seeker Eco-Lodges */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    📚
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Scholar’s Eco-Lodges
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Focused on the intellect. These lodges offer quiet reading nooks, personal study spaces, and guest-led discussions about the historical significance of the Nalanda University complex.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Personal Study Nooks & Historical Discussion Lounges
                </div>
              </div>

              {/* Card 3: Archaeological Basecamps */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧭
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Exploration Basecamps
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    The hub for serious history hunters. These basecamps offer expert guides, archaeology-focused day tours, and easy transit to nearby sites like Pawapuri and Rajgir.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Expert-Led Archaeological Tours & Regional Site Logistics
                </div>
              </div>

              {/* Card 4: Modern Boutique Suites (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ✨
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Modern Transit
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Nalanda Boutique Suites
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Blending modern connectivity with archaeological wonder. Perfect for digital nomads who need to work while exploring the ancient world, featuring high-speed Wi-Fi and curated local experiences.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Digital Nomad Connectivity & Archaeological Concierge
                </div>
              </div>

              {/* Card 5: Wellness & Contemplative Enclaves */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧘
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Contemplative Wellness Enclaves
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find clarity in quiet surroundings. These enclaves provide silent meditation halls, light Ayurvedic nourishment, and guided nature walks in the peaceful rural landscape.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Silent Meditation Halls & Light Ayurvedic Nourishment
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
                📜 World Heritage Site
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Nalanda
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Walk through the ruins of one of the world's oldest residential universities.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-amber-400/60 shadow-md hover:shadow-xl hover:shadow-amber-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold border border-amber-100 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      🚲
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Nomad Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Scholar Backpacker
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for simple guesthouses in Bihar Sharif, local public transport, and street-style authentic meals.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹800</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹200 – ₹300</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🎟️ Entry</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹40 – ₹100</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹700 – ₹1.2k <span className="text-xs font-bold text-gray-400">/ day</span>
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
                      🏰
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md font-bold">
                      Heritage Vibe
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    History Voyager
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Stay at comfortable tourist complexes, private taxis, and guided tours of Nalanda & Rajgir.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹3k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹600 – ₹1k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚙 Cab</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹800 – ₹1.5k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-amber-600 tracking-tight">
                    ₹3k – ₹5.5k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-orange-400/60 shadow-md hover:shadow-xl hover:shadow-orange-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg font-bold border border-orange-100 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md font-bold">
                      Premium Retreat
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Nalanda Imperial
                  </h3>
                  <p className="text-gray-600 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium resorts in nearby Rajgir, full-day private chauffeur, and exclusive historical tours.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹5k – ₹10k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Fine</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1.5k – ₹2.5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">✨ Guide</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹2k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-orange-600 tracking-tight">
                    ₹8k – ₹15k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-amber-800 font-black">Pro Tip:</strong> Visit Nalanda in combination with Rajgir (only 15km away) to make the most of your trip—it covers history, nature, and spirituality in one go.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-purple-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-purple-50 border border-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🏺 Heritage Crafts
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Nalanda Market Finds
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Take home a piece of history with authentic regional crafts and traditional souvenirs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🏺
                    </div>
                    <span className="text-xs font-bold bg-amber-100/60 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Pottery
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
                    Terracotta Artifacts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore beautiful <span className="font-semibold text-gray-900">terracotta statues and miniature replicas</span> of the Nalanda ruins, perfect for home decor.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Historical Keepsakes
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧶
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                    Handloom Textiles
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Pick up <span className="font-semibold text-gray-900">handwoven fabrics and traditional scarves</span> reflecting the regional weaving styles of Bihar.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Textile Heritage
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-sky-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-xl flex items-center justify-center border border-sky-100/70 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    📿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                    Rudraksha & Beads
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find <span className="font-semibold text-gray-900">traditional prayer beads and spiritual artifacts</span> that resonate with the site's ancient Buddhist legacy.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Spiritual Souvenirs
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🎨
                    </div>
                    <span className="text-xs font-bold bg-emerald-100/60 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Fine Art
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
                    Madhubani Souvenirs
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Bring back <span className="font-semibold text-gray-900">small Madhubani art pieces</span> such as hand-painted bookmarks, coasters, or wall hangings.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Cultural Treasure
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    📦
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Handcrafted Boxes
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Look for <span className="font-semibold text-gray-900">intricately designed wooden or metallic jewelry boxes</span>, perfect for gifting.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Artisan Gift
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-purple-500/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-amber-900 font-bold">Shopping Tip:</strong> Purchase your souvenirs near the entrance of the Nalanda Archaeological Site or in the local market of Rajgir for a wider variety of authentic crafts.
                </p>
              </div>
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Nalanda?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Explore one of the world’s oldest centers of learning, witness ancient Buddhist architecture,
              and immerse yourself in history, culture, and heritage of Bihar.
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

export default Nalanda;