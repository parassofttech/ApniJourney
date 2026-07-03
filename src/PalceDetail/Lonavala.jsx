import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Snowflake,
  Plane,
  Train,
  Compass,
  Coffee,
  Camera,
  Utensils,
  ArrowUpRight,
  Landmark,
  Calendar,
  Sun
} from "lucide-react";

const Lonavala = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQDrY-TqRzEYc6mVMVgtU1sL6K4dY6MJFRE0Kke0P5yos1DK6QeGZusDVOe_PkWNm_-VQNPbLXjc4x3tbsHumMft2g&s=19"
            alt="Lonavala Hills"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Lonavala
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              Jewel of the Sahyadri
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
              Located between Mumbai and Pune, Lonavala is a scenic hill station
              known for misty mountains, waterfalls, caves, and lush green valleys.
              Famous for its chikki and monsoon beauty, it is one of the most
              popular weekend getaways in Maharashtra.
            </p>
          </section>

          {/* Introduction Section: Lonavala */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">

  {/* Advanced Radial Background Glows (Monsoon Canyons & Mist Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌧️</span> Monsoon Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Discover Lonavala
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Mist-Shrouded Gateway—a dramatic, high-altitude Sahyadri landscape where rolling emerald hills break open into gushing waterfalls and ancient rock-cut caves.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">⛰️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Beating Heart of the Western Ghats
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Lonavala, perched beautifully at an altitude of 622 meters along the sweeping Sahyadri mountain range in Maharashtra, is a spectacular sanctuary of cloud, rock, and rain. Serving as a crucial mountain pass connecting the Deccan Plateau to the coastal Konkan, this hill station transforms into a living, emerald green wonderland during the monsoon season.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Famed for its deep canyon drop-offs, historic hill forts like <span className="font-semibold">Lohagad</span>, and prehistoric Buddhist rock architecture, Lonavala pairs the untamed energy of seasonal cloudbursts with the warm nostalgia of its iconic golden-hued jaggery <span className="font-semibold">chikki</span> factories.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-emerald-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-emerald-600">622m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Pass Elevation</p>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">2,200+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Yrs Old Karla Caves</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Tiger's Leap Point */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🐅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          The Sheer Tiger's Leap
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stand on a massive cliffside edge resembling a leaping tiger. Offering a dizzying drop into pristine green valleys, this point comes alive with low-flying clouds sweeping directly over the viewing deck.
        </p>
      </div>

      {/* Card 2: Bhaja & Karla Rock-Cut Caves */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          ☸️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Prehistoric Rock Architecture
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step back into the 2nd century BC. Explore the monumental <span className="font-semibold">Karla Caves</span>, housing India's largest grand Buddhist Chaitya (prayer hall), supported by majestic ancient teakwood beams.
        </p>
      </div>

      {/* Card 3: Bhushi & Kune Waterfalls */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          💦
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Cascading Hydraulic Trails
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Experience the rush of pure mountain runoff. Watch the spectacular three-tiered <span className="font-semibold">Kune Falls</span> crash down 200 meters against black basalt stone, shrouded in thick, crisp jungle mist.
        </p>
      </div>

      {/* Card 4: Rajmachi Fort Vantage */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🏰
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          The Guard of Rajmachi
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Trace the rugged battlements of Maratha military architecture. Overlooking the historic Bhor Ghat trade route, this twin-fort structure offers unmatched views of deep forested valleys and seasonal firefly trails.
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
        In short, Lonavala is a dynamic, cloud-swept escape from urban hustle. It masterfully bridges the raw, dramatic beauty of the monsoon-drenched Sahyadri valleys with ancient archaeological wonders and classic highland comfort, making it a staple retreat for conscious weekend explorers.
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
                { title: "Tiger Point", desc: "Panoramic valley views and sunset spot." },
                { title: "Bhushi Dam", desc: "Popular monsoon picnic and waterfall area." },
                { title: "Karla & Bhaja Caves", desc: "Ancient Buddhist rock-cut caves." },
                { title: "Rajmachi Fort", desc: "Trekking destination with historic fort ruins." }
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
                "Trekking",
                "Waterfall Visits",
                "Cave Exploration",
                "Photography",
                "Chikki Shopping",
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Pune Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Lonavala Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="June – February" />
              <TravelDetail icon={<MapPin />} label="Distance from Mumbai" value="83 KM (~2 hrs)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 3 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Tiger Point → Lion’s Point → Local Market" />
              <ItineraryDay day="Day 2" text="Bhushi Dam → Karla Caves → Sunset View" />
              <ItineraryDay day="Day 3" text="Rajmachi Trek → Shopping → Return Journey" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Lonavala enjoys pleasant summers, heavy monsoon rainfall with
              stunning waterfalls, and cool winters. Monsoon season is the
              most popular time to visit.
            </p>
          </section>

          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQnGnYz6Wx9cHTcn_jHq6FECmdejB3K8t0N5M6IwVqjhtq9eZjtav8GyBTgjtUfyVfVm5UcMQ1bsZjU_mmlZ68ibPo&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoaeXs6by-1rILlF5_oJNfJnv5no5MS9jQrCD72QoJmexs9JHk9AQmQfXi-RzNsd8cuXedjPbNJcsd8wGw7GX8S7H2g6SnrgQNS-wzrV5_6LamvSIaNKHBtKCVHi0a8vKU3Eg4vyg=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer8UUAMwhTJdeH7QVqrgHU9GcganPB-QbBvQZ0Pq0iMAaeZosVIuXjOsa6gjxBViK2yO_fZ9HsSvcfdhaV1fOhvnFDhqZUJRV5HONXZU1FP4RTmTHfdXRgyG6jjJDdMgJIprwgu_g=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweonF-PO0ymAbRuZNZLzVDlHxKF4VjxLjG2sNVGl4oVAyR6MSdFCS2HO0cOQm9I85IfsvNjmoXAZPnLQbDWn7U4E-msrf1tzs3mjpOTKZcQS0yKzBlYTH_P-MW8jPJe35o1DBaaY=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSOYFCpqAwDTAFgf6gNGAaviO7V18mM6xxa6lVvAUNefPv6a1BkkrWErSryVN_sdfmXPOQ8CK98RCtYmkvCL2sqXGY&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQAAAHvWVYLxfxRfED9x9r9AkUpGLjI66xeeRvGtOeRPLtrZZPyI5VdVnkj5TfFZMsq9dc7T9OPKnahNRqcw7gb0YA&s=19"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Lonavala"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-16 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Lonavala?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Perfect monsoon getaway, scenic trekking trails, waterfalls,
              ancient caves, and quick weekend escape from Mumbai & Pune.
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

export default Lonavala;