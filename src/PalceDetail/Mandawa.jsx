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

const Mandawa = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTbYOadwRj7gi_F2B2WaA60o2fZfo4bmhjCTO9NMBg6H6tQMdbZwUazbyKiKWcr-XNaSp5BX3kikgnSdP9IH1yAwTM&s=19"
            alt="Mandawa Fort"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Mandawa
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              The Art City of Rajasthan
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
              Mandawa, located in Rajasthan’s Shekhawati region, is famous for its stunning 
              havelis adorned with frescoes, traditional Rajasthani architecture, and rich heritage. 
              It is a photographer’s paradise and a cultural hotspot.
            </p>
          </section>

          {/* ATTRACTIONS */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 mb-12 italic text-center">
              Must Visit Attractions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Mandawa Fort", desc: "Historic fort with frescoes and royal architecture." },
                { title: "Havelis of Mandawa", desc: "Intricate paintings and traditional Rajasthani art." },
                { title: "Rang Mahal", desc: "Famous for colorful frescoes and murals." },
                { title: "Surajpol", desc: "Entrance gate showcasing Rajputana architecture." }
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
                "Fort Exploration",
                "Photography",
                "Fresco Tour",
                "Cultural Walks",
                "Shopping Local Handicrafts",
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
              <TravelDetail icon={<Plane />} label="Nearest Airport" value="Jaipur International Airport" />
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Mandawa Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="Distance from Jaipur" value="180 KM (~4 hrs)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 2 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Mandawa Fort → Havelis Tour → Local Market" />
              <ItineraryDay day="Day 2" text="Rang Mahal → Surajpol → Cultural Walk → Return" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Hot summers (32°C – 45°C), mild winters (10°C – 25°C), and little rainfall. 
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
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcShZfiFA8Pv-nY9ISsi6i9jjMXWFDVm4gchsYe-YOgM_n6u5m60CHKr21cc9FAK22DcbTYDNfGz5s0zvqmbWVRIRlw&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRCn-brTtqKNv0SuLQ5GzvSvrxFF5jYatR9lvl4c-v_IsmU1imIurjBJcT3LYteDCXEHwB1TO8z9KMFUZXZGfLTAx0&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSJxUViOXlkQVbY1JGammIf3eWsKTGR87jBAX7dpOuxreiPeQGU4kD5bFEu41RWooYk4FNrWYSA5Rbc2KhRt7w1LgE&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQSkmaehkQVABgbkLD1k0HwWABdb9D9MzbFPV4lcIEGoCPaRO4tWTCGaTvFvydwPgJFDb3AiQCXYZpR2kFEmN9u6Ug&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoQtl5InFREnofz6Lb2WpvndErYtO0XvPIs7_Ct3f1fiiNSbGCI7NPQv80IdZOfLDPLbgcWP0xN54FsNsX2UO9QX0CmiUNw_NYAwbLbj-46Rwb4YGoovmFPYcCzRArC-3GVhAWH=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerVB4jVSvyg9mt1K9D2FivnT27QKSG-pyTsZwBMGYEr6L7lLfj-Pryn5ige1GJ-XQrrR6hWGv_tvlhWETTFWArWi_8uKKFHAXfJE_QgBSDfA1Kqbm0O-v-OeR6yEDqRXuR4gGWUqA=w675-h390-n-k-no"
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Mandawa"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Mandawa?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Rich cultural heritage, exquisite frescoes, royal havelis, photography spots, 
              traditional markets, and a glimpse into the art and history of Rajasthan.
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

export default Mandawa;