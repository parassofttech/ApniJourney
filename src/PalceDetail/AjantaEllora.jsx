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
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
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

          {/* ATTRACTIONS */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 mb-12 italic text-center">
              Must Visit Attractions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Ajanta Caves", desc: "Ancient Buddhist caves with stunning murals." },
                { title: "Ellora Caves", desc: "34 caves representing Buddhist, Hindu & Jain faiths." },
                { title: "Kailasa Temple", desc: "World’s largest monolithic rock-cut temple." },
                { title: "Daulatabad Fort", desc: "Historic hill fort near the caves." }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="p-8 bg-green-50 rounded-3xl shadow-lg border border-green-100"
                >
                  <h3 className="text-xl font-black text-green-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* THINGS TO DO */}
          <section className="mb-28 text-center">
            <h2 className="text-3xl font-black text-green-900 italic mb-14">
              Things To Experience
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                "Explore Rock-Cut Caves",
                "Photography",
                "Historical Walk",
                "Temple Architecture Study",
                "Museum Visit",
                "Sunset Views"
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white rounded-3xl shadow-xl border border-green-100"
                >
                  <h3 className="font-black text-green-900">{item}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* TRAVEL INFO */}
          <section className="mb-28 bg-slate-900 text-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-black mb-10 italic text-center">
              Travel Information
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Aurangabad Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Aurangabad Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="Distance from Aurangabad" value="~30 KM" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 2 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Explore Ajanta Caves → Photography → Museum Visit" />
              <ItineraryDay day="Day 2" text="Ellora Caves → Kailasa Temple → Daulatabad Fort" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Summers can be hot, while winters are pleasant and ideal for exploring.
              Best time to visit is between October and March.
            </p>
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