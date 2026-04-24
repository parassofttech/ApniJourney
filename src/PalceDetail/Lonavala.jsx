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