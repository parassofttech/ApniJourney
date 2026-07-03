import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Info,
  Camera,
  ExternalLink,
  TreePine,
  Landmark,
} from "lucide-react";

const MountAbu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR6Wxe3kUF-Liy3tn6bJ977_DVOx50X8S4TsEOrHhvciI1Q3ACtKZCO3Fachu5-xNa-1rB1Tu9uILdCcLc9bdxiX_8&s=19"
          alt="Mount Abu"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[420px] object-cover"
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center text-green-700 mb-4"
          >
            🌄 Mount Abu – The Only Hill Station of Rajasthan
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Nestled in the **Aravalli Range**, Mount Abu is Rajasthan’s
            only hill station. Known for its cool climate, scenic lakes,
            spiritual temples, and lush greenery, it offers a peaceful
            escape from the desert heat.
          </motion.p>

          {/* Introduction Section: Mount Abu */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

  {/* Advanced Radial Background Glows (Mist-Covered Peaks & Serene Oasis Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>⛰️</span> Highland Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Mount Abu
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      Rajasthan's solitary hill station—a lush, mist-shrouded granite oasis tucked inside the Aravalli Range, offering dramatic rocky horizons and legendary marble marvels.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🍃</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Verdant Oasis of the Desert State
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Mount Abu, sitting at an altitude of over 1,200 meters in the ancient Aravalli Range, stands as a refreshing, cool sanctuary from Rajasthan’s sweeping sun-drenched plains. Historically serving as a royal summer retreat, it features dense forests, pristine lakes, and bizarre rock formations.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Beyond its panoramic eco-trails, the mountain carries immense architectural and spiritual weight, serving as home to the otherworldly <span className="font-semibold">Dilwara Temples</span> and the global headquarters of the Brahma Kumaris.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">1,722m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Highest Peak (Guru Shikhar)</p>
        </div>
        <div className="bg-sky-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-sky-600">11th Cent</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Dilwara Temple Roots</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Dilwara Jain Temples */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🏛️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Marvelous Dilwara Temples
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into a world of pure white stone poetry. The <span className="font-semibold">Dilwara Jain Temples</span> are internationally renowned for their impossibly intricate marble carvings, delicate ceiling domes, and ornate pillars that rival any sculpture on Earth.
        </p>
      </div>

      {/* Card 2: Nakki Lake */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          The Mystical Nakki Lake
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Cruise across a sacred, high-altitude lake. Legend says <span className="font-semibold">Nakki Lake</span> was dug out by the gods using their fingernails (nakh). Rent a paddleboat, walk the cobblestone lakeside path, and gaze up at the iconic Toad Rock.
        </p>
      </div>

      {/* Card 3: Guru Shikhar Summit */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🦅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Guru Shikhar Peak
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand at the highest point of the Aravallis. Drive up to <span className="font-semibold">Guru Shikhar</span> to breathe in crisp mountain air and view an endless, sweeping panoramic grid of the valley below, home to an ancient temple of Lord Dattatreya.
        </p>
      </div>

      {/* Card 4: Sunset Point Vistas */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🌅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          Sunset Point Carnivals
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Watch the sun dip behind the rugged horizon. Join the lively evening crowds at Sunset Point, where the sky transitions through vivid crimson and amber gradients over lush green mountain ridges.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-sky-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Mount Abu is a surprising, high-altitude sanctuary. It expertly balances the serene, cool nature of an alpine escape with the monumental, heavy craftsmanship of legendary ancient marble structures, offering an entirely unique break from the typical desert trail.
      </p>
    </div>
  </div>

</section>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Info /> Historical Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Mount Abu has been an important religious and cultural
                center for centuries. It is famous for the
                **Dilwara Jain Temples**, known for their stunning marble
                carvings. The region also holds significance in Hindu
                mythology.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-emerald-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🛕 <b>Dilwara Temples:</b> Marble masterpiece</li>
                <li>🌅 <b>Nakki Lake:</b> Boating & sunset views</li>
                <li>🏔️ <b>Guru Shikhar:</b> Highest peak of Aravalli</li>
                <li>🌳 <b>Sunset Point:</b> Scenic evening spot</li>
              </ul>
              <a
                href="https://tourism.rajasthan.gov.in/mount-abu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-emerald-700 mt-3 underline hover:text-emerald-900"
              >
                Visit Rajasthan Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Nature */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-lime-50 rounded-2xl shadow-sm border border-lime-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-lime-700 mb-3">
                <TreePine /> Nature & Wildlife
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Surrounded by forests and rocky hills, Mount Abu is
                home to the **Mount Abu Wildlife Sanctuary**.
                You can spot rare flora, fauna, and enjoy trekking
                through scenic trails.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-teal-50 rounded-2xl shadow-sm border border-teal-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>🚆 <b>Nearest Railway:</b> Abu Road (28 km)</li>
                <li>✈️ <b>Nearest Airport:</b> Udaipur Airport</li>
                <li>🏨 <b>Stay:</b> Hill resorts, heritage hotels</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
              <Mountain /> Peaceful Escape
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mount Abu is perfect for a **relaxing vacation**. Enjoy
              boating in Nakki Lake, trekking to Guru Shikhar,
              and witnessing beautiful sunsets. The cool breeze
              and serene atmosphere make it a romantic and peaceful
              getaway.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Mount Abu
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbyKIr-dDJZy8Nc0zJggZ0sQPJbuY-x1ztVfrozdLYVx4ODaesGARj3i6Up60BZoWjhOUDBKKdIiXU-Wg_0xlHSau54mxMvL6hXqbY1rrh_X-aMFRgDOMy_YGXnh3JY3BUMEr3=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoM2LsCIt2P0j0Ud3zJEziwPy-gWXHSCqu-REqsPU2eyIFEsEY6cEcshRpMf5BAp4PboREpfx7sKBPjajBfwJ3rkRFfRrvPV1qJhC9PQklvoDxL-N_Ah9qBfTxTn_Nqgi2VRHQr=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGYwxcq2OpMs0T9J_todyitNXY7V9KO40WZWXeGtrGk54uf_68N9Xe4MfKj8hMm-7rp28EgmRH9TE8SoDW6Aw6h1sVMkn4JG-4lJapPDHizxKC6Zcq_zaxwD5vyvCFBwEN2PDMrQ=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ3bxItjMqC7euH7A_HFMATyw5-T1dfdB7F-_8BBHOUO50Kdmf5hcLPnpfnZjeOT0hm4EfhgKhzoXCZ34n_Yt7t5Sw&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerD4tnJG2SRJEmerhSeyP4uK7pqv9tOybXpfYTBK5R7d_xB0-EGg3QtaUgC1AczOJEPSukQ0x_yoP5grATZSNDrIsby6MzZhqTvPsPDQPNZpAD_rT6c2aNasMy89M471QiWXhko=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT6gjqp3rk_ESP0cMq4q2dweQXIXYlAAzbEk0eil1Vjg9tJzjljPtE9aVGVy4iSme7y6vPQAOoZ8wwuSLYX4vmeW18&s=19",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Mount Abu"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://tourism.rajasthan.gov.in/mount-abu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold"
            >
              Visit Rajasthan Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MountAbu;
