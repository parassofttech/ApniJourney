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

const Varkala = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT3r8pAql--y9i9v9KigBGP8Radx7WrzqlGkE76-3XpUsaBKcpWzfCo4yjykJEGVYp6Pl3vPrFuAtc6PRSXq_DHT0A&s=19"
            alt="Varkala Beach"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Varkala
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              Cliffside Paradise of Kerala
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
              Located in Kerala, Varkala is famous for its dramatic red cliffs
              overlooking the Arabian Sea. Known for its peaceful beaches,
              yoga retreats, Ayurvedic therapies, and spiritual atmosphere,
              Varkala is a perfect blend of relaxation and coastal beauty.
            </p>
          </section>

          {/* ATTRACTIONS */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 mb-12 italic text-center">
              Must Visit Attractions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Varkala Cliff", desc: "Scenic cliffside promenade with cafes & ocean views." },
                { title: "Papanasam Beach", desc: "Sacred beach known for sunset views." },
                { title: "Janardanaswamy Temple", desc: "Ancient temple dedicated to Lord Vishnu." },
                { title: "Kappil Beach", desc: "Serene beach with backwaters nearby." }
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
                "Beach Walks",
                "Yoga & Meditation",
                "Ayurvedic Spa",
                "Sunset Watching",
                "Cliff Shopping",
                "Seafood Dining"
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Trivandrum Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Varkala Sivagiri Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="From Trivandrum" value="45 KM (~1 hr)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 2 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Varkala Cliff Walk → Papanasam Beach → Sunset View" />
              <ItineraryDay day="Day 2" text="Temple Visit → Kappil Beach → Ayurvedic Spa → Local Market" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Tropical coastal climate with warm summers and pleasant winters.
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
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerYHLTmFGMMJawqIfdHg88UT6BS-SEEaobicW2wQYtN9y4eUdP4IA4ZYyoXZ1sghrSpvDCVdAv1faQEFm3zPTfTxtOLjnOzJZeLfzG4elBsuKHEUw_fOonULP6hYFGvTDrsOENjZzj1Fio=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTBFjo_KgCP6aYMa_-5y340UW5Sk91qQabCq8irZfJAisqc_BVX0mPdpwE-z0mwFz99e7aEHgDDonG1ZJNAVOxfoMw&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweorxcxkkQakF1SkVYi7x6vsRT4Z6DmDMC_WjdUs6pIwHlKEaWeC4gNKWtpgClBn7xewe8cfEDfHocF4YL1pMbEFqjbhRjNi8cIcHqannCYON4VgT9ehYknKlLso04JIeoREDimOew=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwertoKk7ZHfGebJ7PfbpOvAEA3mfm3YgBa7ZbzKhMiouxojxsVqHnNF5LfF8NVuaYuX3xcQgImVmnrsGAgK9qtlXQspyN3Z7Z8Qv7gn_Zhmok5dKjahfkw7VHZqLT4bdNO7tlEP8=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRBjIoeHYpgNwFh1U6hI8-Bu3B5GwRFHJqxmgEME2WdhvXXmu2jCGesyNgABI-QGY5CK_yhOKySHR80W6Z5lh7sSck&s=19",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0G9CqeLoNCUyhY_gstvhmnqvFoLZimb3BSg&s"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Varkala"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-16 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Varkala?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Stunning cliff views, peaceful beaches, yoga retreats,
              Ayurvedic wellness, and a relaxed coastal vibe make Varkala
              one of Kerala’s most charming beach destinations.
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

export default Varkala;