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

const Manali = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] font-sans selection:bg-green-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
      >

        {/* HERO SECTION */}
        <div className="relative h-[500px] overflow-hidden group">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQyXzRVsuzbC9aPqM93sZJ1Z2zxV5N8W7cDAnnDOvqgXAEwrvGnAPeaLRvlPjKUCX4l47JdudsWtr72WpB-UkZcC7M&s=19"
            alt="Manali Hills"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Manali
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Valley of Gods
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
              Nestled in the Kullu Valley of Himachal Pradesh, Manali is a popular hill station 
              surrounded by snow-capped mountains, lush valleys, and rivers. Known for adventure sports, 
              apple orchards, and scenic beauty, it attracts honeymooners, trekkers, and nature lovers.
            </p>
          </section>

          {/* ATTRACTIONS */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 mb-12 italic text-center">
              Must Visit Attractions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Rohtang Pass", desc: "Snow-capped mountain pass offering adventure and scenic views." },
                { title: "Hadimba Temple", desc: "Ancient wooden temple surrounded by cedar forests." },
                { title: "Solang Valley", desc: "Popular for skiing, paragliding, and zorbing." },
                { title: "Manu Temple", desc: "Historic temple dedicated to Sage Manu." }
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
                "River Rafting",
                "Paragliding",
                "Snow Sports",
                "Photography",
                "Local Market Shopping"
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Kullu-Manali Airport (Bhuntar)" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Joginder Nagar Railway Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – February" />
              <TravelDetail icon={<MapPin />} label="Distance from Delhi" value="540 KM (~12 hrs by road)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 3 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Hadimba Temple → Old Manali → Mall Road" />
              <ItineraryDay day="Day 2" text="Rohtang Pass Excursion → Solang Valley Adventure Activities" />
              <ItineraryDay day="Day 3" text="Vashisht Hot Springs → Manu Temple → Local Markets" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Summers are pleasant (15°C – 30°C), winters are cold with snowfall (0°C – 15°C), 
              and monsoon brings moderate rainfall. Best visiting months are October to February.
            </p>
          </section>

          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0YcZTsX9AcNInXvW7kSRqM3s0NxsO3bsDASKbfULHSTd1VbeM0eycnXRY0Q7DeGgxxHyebSOzw0ZeKtAP3qwdrGN0HUI6Ol31dtpMqoAcVoN0fMj-BhANCP9A-hgQeqZoSo2c=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepFVBHZuCqRj99KFQxIQfYycUvCTBtdlcUb5QX2bGhppowus-oehtBIzQ66V3mylTnLqK3ypAxB-s14r9M-tqAJM0MK7AmbiPk0MZW-EeUdumqfGvGwT76TKguIvSW8aiwAhT8=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRPlS89pBrLwhqgpntjCNFRUfYvLGSwFJw0GVA4xJ-q7cDQkKGlCc7nVBwIZOpPJZolHrg1EhSP24wb7jFlR3uk3iI&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweraUXkV7Ad9ggpDHpL3x7IScKuu9bqfAIoJzqNOvbhVFn4_At06EqfJ8Qnh6Gmh-wtRKkKw3CmmZF4IRwwR73FU-LVsKWAPWl7pqAKfyM52uxZWqgq76snkK2NGsOKeAAOJ7E1_=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTECfLF3SfvdVWteW23gC5ZYgaU_qSI97NBKvb466TH5LOxmoHny1K5zbcXuv-MeN2ZZmZ4pVE8MAMSC_16MqEX-EE&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQlmJeaLOiVRItXiOXLcN9nkMyKQ01g11uB0ZCAtO4ymG-luzZ2YfXHbkPFEovD5PubZJ4btRWiMS8WndIU87w47Gw&s=19"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Manali"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Manali?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              For adventure seekers, honeymooners, and nature lovers, Manali offers snow-clad mountains, thrilling activities, 
              and serene landscapes, making it a perfect all-season destination.
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

export default Manali;