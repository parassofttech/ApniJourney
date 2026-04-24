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

const Patna = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT5k5mjUHBzeQ7XfjVPgjDSRn5iTXpg0fT7YviQc0zpcnk0Seu4LQt38yBg4zCAdDpTTj5PhOxCn5U-Sn5xwg6oJIU&s=19"
            alt="Patna City"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Patna
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Historic Capital of Bihar
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
              Patna, the capital of Bihar, is an ancient city with a rich cultural 
              and historical legacy. Located on the southern banks of the Ganges, 
              it is famous for its educational institutions, historic monuments, 
              and religious sites.
            </p>
          </section>

          {/* ATTRACTIONS */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 mb-12 italic text-center">
              Must Visit Attractions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Golghar", desc: "Massive granary built by the British in 1786." },
                { title: "Patna Sahib Gurudwara", desc: "Historic Sikh shrine, birthplace of Guru Gobind Singh." },
                { title: "Mahavir Mandir", desc: "Famous Hindu temple dedicated to Lord Hanuman." },
                { title: "Patna Museum", desc: "Exhibits artifacts, ancient coins, and historical relics." }
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
                "Ganga Aarti",
                "Heritage Walks",
                "Local Cuisine Tasting",
                "Photography",
                "Shopping Traditional Crafts",
                "Riverfront Relaxation"
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Jay Prakash Narayan Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Patna Junction" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="From New Delhi" value="1,000 KM (~16 hrs by train)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 2 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Golghar → Patna Museum → Patna Sahib Gurudwara" />
              <ItineraryDay day="Day 2" text="Mahavir Mandir → Gandhi Maidan → Local Markets" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Summers are hot (30°C – 45°C), winters are mild (10°C – 20°C), and monsoon brings moderate rainfall. 
              Best visiting months are October to March.
            </p>
          </section>

          {/* GALLERY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic mb-12 text-center">
              Photo Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerB9wf-trppWVtMFU9QPF11a8OcJXS3o-PvBel5js_1oS6nhk0HHOIFFSciAFht4Vd9qYXHKFOuJtMzQljT8rfagJQ5-2zpDS9hqsTM7n9QgmBVyUGKk6OrAZFYn4-Od47DyEeGHQTJXNDP=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweohl_aEw8gQG3Kfbu5RvpMfFyXjYmtVojb28MX5-SYLPkJJLkf6Y4heKmC8H_flRPxf2eYzwHBr24NUyawLw0mE7KimuBCWaOFKAn2ajAZy6_yU1LO_gxlf16a6XMRuPIuoF_dqQg=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTq4KZp0cy2yU_XuB6cXXhtt1Qx8Xmn8JlbYYrjoceMvUYOxMkW6dxk6YVyPsB2LN1pSBDF_SWRc1CUoMw8Un0Bu3w&s=19",
                "https://www.savaari.com/blog/wp-content/uploads/2024/04/Patna-Image.webp",
                "https://media.istockphoto.com/id/1393996484/photo/modern-city-construction-with-heavy-traffic-and-bright-blue-sky-at-morning.jpg?s=612x612&w=0&k=20&c=0XxYY8D39gJOhbIR9R75qwaQHaOUvTHj60jLyveBpGQ=",
                "https://www.hindustantimes.com/ht-img/img/2025/09/11/1600x900/Over-2-000-years-ago--Patna-transformed-from-a-vil_1757580204281.jpg"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Patna"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Patna?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Historical landmarks, riverside views, cultural heritage, religious sites, 
              and vibrant local markets make Patna a must-visit city in Bihar.
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

export default Patna;