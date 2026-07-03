import React from "react";
import { motion } from "framer-motion";
import { MapPin, Church, Waves, PartyPopper } from "lucide-react";


const RishikeshHaridwar = () => {
  const galleryImages = [
    "https://himalayanoutback.com/wp-content/uploads/2022/04/Interesting-Facts-About-Rishikesh.jpg",
    "https://s3.india.com/wp-content/uploads/2024/05/Feature-Image_-Rishikesh.jpg",
    "https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg",
    "https://planashleygo.com/wp-content/uploads/2023/03/Rishikesh-1.jpg",
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src={galleryImages[0]}
          alt="Rishikesh Haridwar"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-80 md:h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://i0.wp.com/stampedmoments.com/wp-content/uploads/2023/01/rishikesh-2.jpg?fit=1024%2C768&ssl=1")
          }
        />

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-4"
          >
            🌊 Rishikesh & Haridwar – Spiritual & Adventure Hub
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8 text-sm md:text-base"
          >
            Nestled along the sacred <b>Ganges River</b>, Rishikesh and Haridwar are
            renowned for <b>spiritual retreats, yoga centers, pilgrimage, and adventure activities</b>.
          </motion.p>

          {/* Introduction Section: Rishikesh */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

  {/* Advanced Radial Background Glows (Spiritual Adventure Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🧘‍♂️</span> Destination Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950">
      Discover Rishikesh
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Yoga Capital of the World, where the holy Ganga breaks free from the Himalayas into a haven of spirituality and thrilling rapids.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🕉️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Gateway to the Gods
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Rishikesh, nestled beautifully in the foothills of the Himalayas in Uttarakhand, is a timeless center of spiritual energy. It is where sages, seekers, and adrenaline junkies meet along the banks of a clean, emerald-green Ganga.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Famously catapulted onto the global stage by The Beatles in 1968, the town beautifully bridges ancient Vedic ashrams, sacred suspension bridges, and India's premier whitewater rafting routes.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">Global</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Yoga Capital</p>
        </div>
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-600">Grade IV</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">River Rapids</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Iconic Suspension Bridges */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🌉
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Lakshman & Ram Jhula
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk across iconic engineering marvels. These massive iron suspension bridges sway gently above the gushing Ganga, connecting vibrant streets lined with bustling multi-story temples, yoga ashrams, and local gemstone markets.
        </p>
      </div>

      {/* Card 2: Ganga Aarti at Parmarth Niketan */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🪔
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Divine Sunset Ganga Aarti
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience soulful evening magic at <span className="font-semibold">Triveni Ghat</span> or Parmarth Niketan. Watch the sunset illuminate rows of brass lamps as beautiful Vedic chants echo over the floating diyas on the river.
        </p>
      </div>

      {/* Card 3: Whitewater Rafting & Adventure */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          High-Adrenaline Rapids
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Conquer the waves of the wild river. Battle iconic rapids like 'Three Blind Mice' and 'The Golf Course' starting from <span className="font-semibold">Shivpuri</span>, or push your limits with bungee jumping over deep wilderness valleys.
        </p>
      </div>

      {/* Card 4: Ashrams & Sound Healing */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🧘‍♀️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Vedic Ashrams & Meditation
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Unplug completely inside serene sanctuaries. Visit the legendary graffiti-covered <span className="font-semibold">Beatles Ashram</span> or enroll in authentic sound healing workshops and certified multi-day yoga courses.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-teal-700 via-emerald-700 to-orange-600 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-teal-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Rishikesh holds a rare, dual-sided soul. It lets you switch effortlessly from quiet, meditative riverside mornings inside traditional ashrams to high-octane river rafting and cliff jumps by afternoon—crafting a unique holistic reset.
      </p>
    </div>
  </div>

</section>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Spiritual Significance */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-yellow-700 mb-2">
                <MapPin /> Spiritual Significance
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Haridwar is one of the seven holiest places in India, famous for
                the <b>Ganga Aarti at Har Ki Pauri</b>. Rishikesh is known as the Yoga Capital of the World.
              </p>
            </motion.div>

            {/* Temples */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
             <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
  <Church /> Famous Temples
</h2>

              <ul className="text-gray-700 text-sm md:text-base space-y-1">
                <li>🛕 <b>Mansa Devi Temple:</b> Hilltop temple with ropeway access</li>
                <li>🛕 <b>Chandi Devi Temple:</b> Scenic views & spiritual vibes</li>
                <li>🛕 <b>Triveni Ghat:</b> Evening aarti & sacred rituals</li>
              </ul>
            </motion.div>

            {/* Adventure Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-green-700 mb-2">
                <Waves /> Adventure & Experiences
              </h2>
              <ul className="text-gray-700 text-sm md:text-base space-y-1">
                <li>🌊 White water rafting on the Ganges</li>
                <li>🧗 Rock climbing and trekking in the Himalayas</li>
                <li>🛶 Kayaking & river camping</li>
                <li>🧘 Yoga & meditation retreats</li>
              </ul>
            </motion.div>

            {/* Festivals */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-orange-700 mb-2">
                <PartyPopper /> Festivals
              </h2>
              <ul className="text-gray-700 text-sm md:text-base space-y-1">
                <li>🕯️ Ganga Dussehra</li>
                <li>🎉 International Yoga Festival (Rishikesh)</li>
                <li>🎶 Kumbh Mela (Haridwar)</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Rishikesh & Haridwar
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {galleryImages.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`RishikeshHaridwar ${i}`}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1581031405421-8a9e49c3c7b4?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RishikeshHaridwar;
