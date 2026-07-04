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
        className="w-full  mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-white"
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

          {/* Introduction Section: Varkala */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

            {/* Advanced Radial Background Glows (Coastal Cliff Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-blue-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <span>🌊</span> Destination Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
                Discover Varkala
              </h2>
              <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                Where majestic red cliffs meet the endless Arabian Sea, creating a serene sanctuary of surf, soul, and sunsets.
              </p>
            </div>

            {/* Main Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Premium Introduction (Glass Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
                <div className="text-4xl mb-4">🏖️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Cliffside Jewel of Kerala
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                  Varkala, a calm and mesmerizing coastal town in southern Kerala, stands completely apart from India's typical beach tracks. It is world-renowned for its dramatic, towering laterite cliffs that line the rim of the Arabian Sea.
                </p>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Affectionately known as Papanasam Beach, its waters are believed to wash away the sins of a lifetime. Today, it beautifully bridges a rich 2,000-year-old spiritual heritage with a vibrant, modern global surf and yoga culture.
                </p>

                {/* Quick Stats Banner inside Left Card */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-amber-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-amber-600">Unique</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Geo-Cliffs</p>
                  </div>
                  <div className="bg-blue-50/50 p-3 rounded-2xl">
                    <p className="text-2xl font-black text-blue-600">2000+ Yrs</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Temple Legacy</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Feature Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1: The Iconic North Cliff */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    🧗‍♂️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    The Vibrant North Cliff
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    The buzzing heart of Varkala. Walk along a narrow, cliff-top pathway packed with panoramic open-air seafood cafes, bohemian clothing shacks, and live music spots, all offering front-row views of crashing waves below.
                  </p>
                </div>

                {/* Card 2: Surf & Swell Culture */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-xl font-bold text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    🏄‍♂️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    World-Class Surf Breaks
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Catch premium beach breaks. Whether you are a beginner looking for surf schools or a pro riding the clean early morning swells, beaches like <span className="font-semibold">Black Beach</span> offer fantastic waves.
                  </p>
                </div>

                {/* Card 3: Ayurveda & Yoga Shalas */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    🧘‍♀️
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Holistic Soul Healing
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Recharge your body's energy. Varkala is a top hub for wellness, loaded with cliffside rooftop yoga shalas, sound healing sessions, and authorized centers for traditional, deeply relaxing <span className="font-semibold">Kerala Ayurvedic massages</span>.
                  </p>
                </div>

                {/* Card 4: Janardhana Swamy Temple */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-md hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-xl font-bold text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    🛕
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    2000-Year-Old Heritage
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Explore ancient coastal spirituality. Located close to the beach, the majestic <span className="font-semibold">Janardhana Swamy Temple</span> stands as a historic bastion of Vaishnavite culture, complete with a massive Dutch-gifted bell.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Premium Sticky Note */}
            <div className="mt-12 bg-gradient-to-r from-amber-600 via-orange-600 to-blue-700 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10 max-w-3xl">
                <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
                <p className="text-amber-50 mt-2 text-sm md:text-base leading-relaxed opacity-90">
                  In short, Varkala is an addictive coastal escape. Unlike commercialized beach towns, it maintains a surreal, high-view horizon line where you can sip pour-over coffee on a red cliff edge, watch dolphins play in the deep blue sea, and instantly feel a sense of profound peace.
                </p>
              </div>
            </div>

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

          {/* Best Time to Visit */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">

            {/* Advanced Radial Background Glows (Laterite Cliffs & Arabian Sea Wave Theme) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-teal-50 border border-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🌊 Weather & Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-rose-950 to-gray-950">
                Best Time to Visit Varkala
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Plan your ultimate bohemian cliff-side getaway along Kerala's striking coastline, aligned with breezy winter sunsets, paragliding loops, and calming tides.
              </p>
            </div>

            {/* Main Interactive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
              <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-rose-950/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl font-bold mb-6 border border-rose-100">
                    🌅
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    The Premium Cliff Cycles
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
                    Varkala unveils its absolute finest coastal soul and dry breezy weather from <span className="font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded-md">October to March</span>. After the heavy monsoon tides recede, the tropical climate drops to a comforting sweet spot, bringing daily temperatures between 22°C and 32°C.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    During this premium travel block, cafe hopping across the vibrant <span className="font-semibold text-gray-900">North Cliff layout</span>, paragliding over the continuous beach contours, or walking the sacred sand steps of the 2000-year-old Janardanaswamy Temple feels incredibly refreshing.
                  </p>
                </div>

                {/* Pro Tip Alert Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-rose-50 to-teal-50 rounded-2xl border border-rose-100/50 flex gap-3 items-start">
                  <span className="text-lg mt-0.5">🪂</span>
                  <p className="text-xs md:text-sm text-rose-900 font-medium leading-relaxed">
                    <strong className="text-rose-950">Pro Tip:</strong> Looking to catch Varkala's ultimate adventure window? Target your journey for <strong className="text-rose-950">December to February</strong>. The wind vectors on the cliffs become perfectly consistent, making it the prime cycle for tandem paragliding loops over the ocean and exploring the pristine Black Sand Beach.
                  </p>
                </div>
              </div>

              {/* Right Side: Seasonal Breakdown Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                {/* Season 1: Crisp Bohemian Winters */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ☀️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
                        Breezy Winter Peak (October – March)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The signature tourist window. Skies are crystal clear, the seas are calm for swimming loops, and sunset times reveal a beautiful golden glow from the cliff viewpoints.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Peak Season
                  </span>
                </div>

                {/* Season 2: Warm Shoulder Phase */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-teal-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ⛱️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors duration-200">
                        Humid Pre-Monsoon Cycle (April – May)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        Temperatures and coastal humidity rise significantly. However, it serves as a wonderful, peaceful window for budget backpackers looking for affordable cliff shacks and quiet yoga retreats.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Low Volume
                  </span>
                </div>

                {/* Season 3: Heavy Monsoon Downpours */}
                <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🌧️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
                        Torrential Monsoon Waves (June – September)
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 max-w-md">
                        The Arabian Sea turns fiercely rough, bringing massive tides that submerge the lower beaches. Cliff walkways get slippery and paragliding is completely halted, but the greenery is stunning.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
                    Rough Tides
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Cliffside Retreats & Bohemian Vibes Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">

            {/* Bohemian Background Glows (Sunset Coral & Sea Teal) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-teal-50 border border-orange-100 text-orange-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🌅 The Cliffside Sanctuary
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
                Bohemian Cliff-Top Villas & Zen Stays
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                Varkala ki iconic red cliffs ke edge par base, in stays mein aapko milenge ocean-view yoga shalas, bohemian cafes, aur Arab Sea ki mesmerizing beauty.
              </p>
            </div>

            {/* Advanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1: Cliff-Edge Bohemian Villas (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🛖
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Boho-Luxury Tier
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    Cliff-Edge Bohemian Villas
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Sedimentary cliff ke edge par bane, ye villas offer karte hain panoramic views of the Arabian Sea. Inmein hai private sun-decks, hammock spaces, aur local artsy interiors jo Varkala ki boho-culture ko celebrate karte hain.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
                  Panoramic Cliff Decks & Boho-Chic Interior Design
                </div>
              </div>

              {/* Card 2: Zen Yoga Retreats */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🧘
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                    Zen Yoga Enclaves
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Deep relaxation ka hub. Ye retreats focus karte hain daily sunrise yoga sessions par, organic Ayurvedic meals, aur meditation zones overlooking the vast, rhythmic ocean.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Sunrise Yoga Shalas & Ayurvedic Holistic Diet
                </div>
              </div>

              {/* Card 3: Beachfront Surf-Huts */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🏄
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Surf-Culture Huts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    For thrill-seekers. These huts offer immediate access to Varkala’s surf-friendly beaches, including gear storage, surf lessons, and a vibrant community of fellow travelers.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Surf Gear Storage & Local Lessons Coordination
                </div>
              </div>

              {/* Card 4: Modern Boutique Suites (Featured) */}
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-teal-500/30 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-xl flex items-center justify-center border border-teal-100/70 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      ✨
                    </div>
                    <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
                      Comfort Focused
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-teal-800 transition-colors duration-200">
                    Modern Boutique Cliff-Suites
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Blending modern convenience with Varkala’s raw nature. These suites offer thermal insulation, high-speed Wi-Fi for digital nomads, and concierge assistance for trekking the nearby backwaters.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-teal-600 tracking-wider uppercase">
                  Digital Nomad Friendly & Backwater Trek Concierge
                </div>
              </div>

              {/* Card 5: Eco-Forest Retreats */}
              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                    Eco-Forest Nooks
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Away from the cliff buzz, these forest-bound nooks offer a quiet hideaway amidst coconut groves. Ideal for readers, writers, and those seeking true rejuvenation.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Coconut Grove Hideaways & Silent Reading Zones
                </div>
              </div>

            </div>
          </section>

          {/* Culinary Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-gray-950">Coastal Boho Flavors</h2>
              <p className="text-gray-600 mt-3 text-lg">Fresh tropical fruit bowls, catch-of-the-day seafood grill, and world-cuisine fusion at cliff-top cafes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Culinary Cards here... */}
            </div>
          </section>

          {/* Budget Breakdown Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-cyan-500 selection:text-white">

            {/* Cyber-Atmospheric Background Glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 blur-[140px] rounded-full"></div>
            </div>

            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                🌊 Cliffside Serenity
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                Budget Breakdown for Varkala
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                Experience the dramatic red cliffs, pristine beaches, and bohemian vibes of Kerala's hidden gem.
              </p>
            </div>

            {/* Premium Tier Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Card 1: Budget Traveler */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-cyan-400/60 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg font-bold border border-cyan-100 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      🧘
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                      Boho Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Cliffside Backpacker
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Best for cliff-edge hostels, local Kerala cafe meals, and walking access to the main beach.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏠 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹600 – ₹1.2k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Food</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹400 – ₹700</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🚲 Bike</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹300 – ₹500</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-cyan-600 tracking-tight">
                    ₹1.3k – ₹2.4k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Range */}
              <div className="group bg-white border-2 border-cyan-500 hover:border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative ring-8 ring-cyan-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg font-bold border border-cyan-100 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      ✨
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-md font-bold">
                      Zen Explorer
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Coastal Voyager
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Boutique cliff-view resorts, organic cafes, and yoga sessions by the ocean.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹3k – ₹5k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Meals</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹1k – ₹1.8k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🧘 Yoga</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹500 – ₹800</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-cyan-600 tracking-tight">
                    ₹4.5k – ₹7.6k <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Luxury */}
              <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-blue-400/60 shadow-md hover:shadow-xl hover:shadow-blue-500/5 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg font-bold border border-blue-100 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      👑
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-bold">
                      Luxury Retreat
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Cliffside Sanctuary
                  </h3>
                  <p className="text-gray-600 text-sm mt-1.5 mb-6 font-medium leading-relaxed">
                    Premium Ayurvedic wellness resorts, fine-dine oceanfront restaurants, and private excursions.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🏨 Stay</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹9k – ₹18k+</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">🍽️ Fine</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2.5k – ₹4k</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider pl-1">💆 Spa</span>
                      <span className="text-gray-900 font-extrabold text-sm">₹2k – ₹4k</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-dashed border-gray-200">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Velocity</div>
                  <div className="text-2xl font-black text-blue-600 tracking-tight">
                    ₹13.5k – ₹26k+ <span className="text-xs font-bold text-gray-400">/ day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-500/20 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-cyan-950 font-semibold text-sm md:text-[15px] leading-relaxed">
                  <strong className="text-cyan-800 font-black">Pro Tip:</strong> Varkala’s cliff vibe is unique in India. Stay near the North Cliff to be close to the cafes and nightlife, but explore the quieter stretches towards the south for more privacy.
                </p>
              </div>
            </div>
          </section>

          {/* Shopping Section */}
          <section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-rose-500 selection:text-white">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-purple-50 border border-cyan-100 text-cyan-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                🛍️ Bohemian Vibe
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-cyan-950 to-gray-950">
                Varkala Bazaar Treasures
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
                From eclectic clothing and handmade jewelry to authentic Kerala spices and holistic wellness products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-xl flex items-center justify-center border border-cyan-100/70 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      👗
                    </div>
                    <span className="text-xs font-bold bg-cyan-100/60 text-cyan-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Boho Apparel
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-800 transition-colors duration-200">
                    Eclectic Fashion
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Explore the cliff markets for <span className="font-semibold text-gray-900">flowy bohemian dresses, vibrant harem pants, and cotton tunics</span> that fit the relaxed beach aesthetic.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-cyan-600 tracking-wider uppercase">
                  Beachside Style
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    📿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                    Silver & Gems
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Find <span className="font-semibold text-gray-900">unique handmade silver jewelry and crystal pendants</span> from local artisans selling along the cliff.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
                  Artisan Jewelry
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🌿
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                    Ayurveda Wellness
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Pick up <span className="font-semibold text-gray-900">authentic Ayurvedic oils, herbal soaps, and skincare products</span> that define Kerala’s ancient healing traditions.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
                  Holistic Care
                </div>
              </div>

              <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-xl flex items-center justify-center border border-purple-100/70 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      🌶️
                    </div>
                    <span className="text-xs font-bold bg-purple-100/60 text-purple-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      Flavorful Finds
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-800 transition-colors duration-200">
                    Kerala Spices & Tea
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Take home <span className="font-semibold text-gray-900">fresh black pepper, cardamom, cinnamon, and organic tea leaves</span> sourced from nearby plantations.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Spice Route
                </div>
              </div>

              <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-rose-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-xl flex items-center justify-center border border-rose-100/70 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                    🎨
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                    Home Decor
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
                    Discover <span className="font-semibold text-gray-900">hand-carved wooden artifacts, colorful dreamcatchers, and beachy home accents</span>.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold text-rose-600 tracking-wider uppercase">
                  Boho Decor
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-transparent border border-cyan-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-cyan-950 font-medium text-sm md:text-base leading-relaxed">
                  <strong className="text-cyan-900 font-bold">Shopping Tip:</strong> Most cliff shops are tourist-oriented. Venture a bit further toward the main town area or Janardanaswamy Temple market for better prices and more authentic local crafts.
                </p>
              </div>
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