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

const Kanyakumari = () => {
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
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRQdjxmxgcS_bsklD1Hj02yAJfGuPc983ue7cKyATMAhJbyddYtSbTXIHfABJubOvdvE2erUqdz0Xf2cb-JZETDCs1s&s=19"
            alt="Kanyakumari Beach"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-6xl md:text-8xl font-black italic drop-shadow-2xl">
              Kanyakumari
            </h1>
            <p className="uppercase tracking-[0.4em] text-sm mt-3 text-green-200">
              Land of Three Seas
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
              Located at the southernmost tip of India in Tamil Nadu,
              Kanyakumari is where the Arabian Sea, Bay of Bengal,
              and Indian Ocean meet. Famous for its spectacular sunrise
              and sunset views, it is a place of spiritual importance,
              scenic beauty, and cultural heritage.
            </p>
          </section>

          {/* ATTRACTIONS */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 mb-12 italic text-center">
              Must Visit Attractions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Vivekananda Rock Memorial", desc: "Meditation site dedicated to Swami Vivekananda." },
                { title: "Thiruvalluvar Statue", desc: "133-feet tall statue of the Tamil poet." },
                { title: "Kanyakumari Beach", desc: "Famous for sunrise & sunset views." },
                { title: "Padmanabhapuram Palace", desc: "Historic wooden palace architecture." }
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
                "Sunrise Watching",
                "Boat Ride to Memorial",
                "Photography",
                "Temple Visit",
                "Beach Walk",
                "Local Shopping"
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
              <TravelDetail icon={<Train />} label="Nearest Railway" value="Kanyakumari Station" />
              <TravelDetail icon={<Calendar />} label="Best Time" value="October – March" />
              <TravelDetail icon={<MapPin />} label="From Trivandrum" value="90 KM (~2 hrs)" />
            </div>
          </section>

          {/* ITINERARY */}
          <section className="mb-28">
            <h2 className="text-3xl font-black text-green-900 italic text-center mb-12">
              Suggested 2 Day Itinerary
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <ItineraryDay day="Day 1" text="Vivekananda Rock → Thiruvalluvar Statue → Beach Sunset" />
              <ItineraryDay day="Day 2" text="Temple Visit → Palace Tour → Local Market → Return" />
            </div>
          </section>

          {/* WEATHER */}
          <section className="mb-28 text-center bg-green-50 p-12 rounded-3xl shadow-lg">
            <Snowflake className="mx-auto text-green-500 w-14 h-14 mb-6" />
            <h2 className="text-3xl font-black text-green-900 italic mb-4">
              Climate & Weather
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Tropical climate with warm summers and pleasant winters.
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
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTpZctQGAxDEvBGFpVUv219w17P3FrBRFtF9fKO3nQqZJdOYRXNOkKYZhSMqFhnTcXoQEpAZzUShT_So65WWGH0_nk&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTLPQA0Ila7FZmvRXQf3nBcE0hCfB1EMqdVMgNPov05Bdv-MVOKgeOiCPfZVn0Ltc911mEENUP8lpj9WPVN-KEXEdY&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqIGJQvwKYTvvPwYXAotDip9quxnjaQX8tLNMncrMvOur0F5F-ziR1QpizQBZUQWJaDXGMJ6myn3H4lCrNUwPuVCBRyX9szDgpLdVm97C6sKNuGcFLzJV1MB6ULNR8AN-twVavc=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcReJ63QdDNHnjVFn_-D16UJsxVE-gD2Ij1QZHMqMbeKWW8w5mSpxefpxY167dxNv-USDSaVe5O_WYKwkMKStDkkF9S3&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepTW4H7HbgD5p3POjayx0zx9wi_t6cfyYUMyCNJXaNTTqCYzrRhYxtMqyRHmtWnuwz-IvBDyAubJ83TjYAtSpgypW0jUJXM0AIL9vIuMwTK0BuT3Rx-Y6HHSbYhKMHrhuqs6OU3=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0d_Pu-s9xJ4d8JsBgTAiVMG8oQhBp-o0tmP8DANRuCia65Mne1wgENiUcxP1HabrF8_giEhxW4sS6YEmmoll_8Fa1GIzs-0_JNwzJe1GDpXMUWJGZfsm8WuoM_IPBtbLj9o0H=w675-h390-n-k-no",
              
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt="Kanyakumari"
                  className="rounded-3xl shadow-xl h-64 w-full object-cover"
                />
              ))}
            </div>
          </section>

          {/* WHY VISIT */}
          <section className="mb-28 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-16 rounded-3xl text-center shadow-2xl">
            <h2 className="text-4xl font-black italic mb-6">
              Why Visit Kanyakumari?
            </h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Unique geographical location, spiritual significance,
              breathtaking sunrise & sunset views, and cultural richness.
              A must-visit destination in South India.
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

export default Kanyakumari;