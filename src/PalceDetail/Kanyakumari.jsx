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

          {/* Introduction Section: Kanyakumari */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-indigo-600 selection:text-white">

  {/* Advanced Radial Background Glows (Ocean Confluence & Sunrise Crimson Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-rose-50 border border-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>⚓</span> Geographical Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950">
      Discover Kanyakumari
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Land's End—a spectacular, wind-swept coastal frontier where three mighty oceans merge, and sacred rock memorials guard India's southernmost tip.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌊</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Where Three Ocean Currents Interlock
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Kanyakumari, formerly known as Cape Comorin, stands proudly at the absolute southernmost point of mainland India in Tamil Nadu. It is a geographically magical destination where the Arabian Sea, the Bay of Bengal, and the vast Indian Ocean meet in a dramatic, multi-hued watery convergence known as the *Triveni Sangam*.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Steeped in spiritual lore and dedicated to the virgin goddess Kanya Kumari, this rugged coastline is globally unique: it is one of the rare places on Earth where you can watch the <span className="font-semibold">sun rise and set from the exact same beach</span>, especially breathtaking during full moon nights.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-indigo-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-indigo-600">3 Seas</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Triveni Sangam</p>
        </div>
        <div className="bg-rose-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-rose-600">133 ft</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Thiruvalluvar Statue</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Vivekananda Rock Memorial */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-indigo-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          🪨
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
          Vivekananda Rock Memorial
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Take a brief, thrilling ferry ride to the offshore structural monument where Swami Vivekananda meditated in 1892. The architectural design seamlessly reflects distinct stone carving styles from across India.
        </p>
      </div>

      {/* Card 2: Thiruvalluvar Statue */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          🗿
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
          The Colossal Stone Icon
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Gaze at the massive 133-foot-tall stone sculpture of the legendary Tamil poet and philosopher Thiruvalluvar. The monument's precise height symbolically honors the 133 chapters of his timeless work, the *Tirukkural*.
        </p>
      </div>

      {/* Card 3: Kanyakumari Amman Temple */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🛕
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The 3,000-Year-Old Shrine
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Visit the ancient sea-facing temple dedicated to Goddess Bhagavathi. It is famous for the deity's striking diamond nose ring, which historical accounts claim gleamed so brightly that ships mistook it for a lighthouse.
        </p>
      </div>

      {/* Card 4: Multi-Reflective Sunsets & Sands */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-xl font-bold text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          🌅
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
          Celestial Horizon Displays
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Stroll along the rocky shores to witness the sky turn brilliant shades of crimson and violet. Walk past unique stretches of beach where mineral-rich geological forces have left patches of multi-colored volcanic sand.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-indigo-950 via-slate-900 to-rose-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-indigo-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Kanyakumari is a deeply poetic geographic finale. It beautifully balances the immense power of overlapping marine currents with legendary rock-cut monuments and serene maritime rituals, making it a powerful spiritual and visual anchor for travelers tracking the layout of the Indian subcontinent.
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