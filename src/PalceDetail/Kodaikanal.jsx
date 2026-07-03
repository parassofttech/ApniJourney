import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  Camera,
  ExternalLink,
  Mountain,
  Trees,
  CloudRain,
} from "lucide-react";

const Kodaikanal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSK8xdWQhhsl8Ys4qBxvm1bEuEKmuhsEJ6OweJq102FjXacfpz82yczCnP6oeefRnuYFGp0CsEdcrwvMXh7wsf5x_w&s=19"
          alt="Kodaikanal"
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
            className="text-4xl font-extrabold text-center text-indigo-700 mb-4"
          >
            🌲 Kodaikanal – The Princess of Hill Stations
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in the **Western Ghats of Tamil Nadu**, Kodaikanal
            is famous for its misty hills, scenic lakes, pine forests,
            and peaceful atmosphere. It is one of South India’s most
            romantic and refreshing hill destinations.
          </motion.p>

          {/* Introduction Section: Kodaikanal */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-violet-600 selection:text-white">

  {/* Advanced Radial Background Glows (Misty Pines & Violet Hills Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-teal-50 border border-violet-100 text-violet-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>🌲</span> Alpine Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950">
      Discover Kodaikanal
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The Princess of Hill Stations—a spectacular, mist-veiled plateau in the Palani Hills where towering pine forests roll directly into mirror-calm waters.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-violet-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🌫️</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Gift of the Forest
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Kodaikanal, sitting beautifully at an elevation of 2,133 meters in Tamil Nadu, translates directly to "The Gift of the Forest" in Tamil. Established as a cool haven by American missionaries in the mid-19th century, it is carved out of massive granite cliffs and deep wilderness.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        Famous for its rare, twelve-yearly blooming <span className="font-semibold">Kurinji flowers</span>, crisp mountain air, and dramatic cloud-touching viewpoints, it offers a profoundly isolating, atmospheric escape from the humid lowlands.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-violet-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-violet-600">2,133m</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">High Elevation</p>
        </div>
        <div className="bg-teal-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-teal-600">12 Yrs</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Kurinji Bloom Cycle</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Star-Shaped Kodaikanal Lake */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-violet-300 shadow-md hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-xl font-bold text-violet-600 mb-5 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
          🛶
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-violet-700 transition-colors duration-200">
          Star-Shaped Kodai Lake
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Row through the mountain fog. This iconic, man-made star-shaped lake sits right at the center of the town, skirted by an 5 km pathway perfect for early morning cycling, horse riding, or peaceful strolls.
        </p>
      </div>

      {/* Card 2: Coaker's Walk Vistas */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-xl font-bold text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          🚶‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          Coaker's Walk Clouds
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Walk directly along the edge of the abyss. This narrow, paved pedestrian path wraps around the steep southern slopes, offering jaw-dropping views of rolling clouds rising from the plains below.
        </p>
      </div>

      {/* Card 3: Pillars Rocks & Shola Ecosystem */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🧗‍♂️
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Colossal Pillar Rocks
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Gaze up at primeval stone structures. Three dramatic, vertically standing granite boulders rise up over 400 feet into the sky, creating a dramatic, mist-filled canyon that disappears into the dense <span className="font-semibold">Shola forests</span>.
        </p>
      </div>

      {/* Card 4: Pine Forest Walks */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-xl font-bold text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          🌲
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Symmetric Pine Grids
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Lose yourself inside cinematic geometric woods. Planted originally by British botanists, these massive, towering pine forests create an atmospheric backdrop of vertical trunks, perfect for eerie photography and quiet hikes.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-slate-950 via-violet-950 to-teal-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-violet-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Kodaikanal is a deeply cinematic, slow-paced alpine retreat. It expertly pairs the misty mystery of primeval evergreen forests and giant stone pillars with the quiet romance of high-altitude water paths, offering one of the most refreshing breaks in South India.
      </p>
    </div>
  </div>

</section>

         

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Discover Kodaikanal
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo9zEfraK4CWrPp6j2YUhu7c7w54MH3FxYqpFqEqHm1zh-cmu1bj28GByMNbuubIhRTLBSx6tA-mt0UWWDTcmY1pAGrV-b7jG1DDSW66LCZ7mtkhKtXXGckABoL8JaFbl-mpX7m=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoWu45L0wbu-FoOjWmvVzQ_4WNCNj4g6ff6bmNadubTsTe_hK4Ympy8yxdNLOi9y_kasoyKNYLQbMsOkmlUW-Di7iofMiAF3wtWl5EVn4UxQQPinvUX4EQ2uoV6wdBqaeD6s0Gm=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwersWgohVbPtShr9k5rRdImOAvZav8fwarfKvNe9rFAFeX8nDbVnvD1UJNDvk4kkriTnJRZ-J-atM0bbtR8IdJq7whL-V_rQEG5z2rCMR-hVrNWLtOVZFavBUQ0yj47o6iPVSZmX2KiUfood=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSwUi8-V-pS8gNL3Rt0xmP8z7fsgsjLm3gSEYSKcAZwTAMnvLLtzkAmQ293FFlsDGwSu2RZKI789OrzfF0b2OsPjGeg&s=19",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR_WSuru2tgbGJybej1lYyqsSMkEtw1N9lB-3TyUBZf-NqV5ZjOfWZDhB0Gu9wkDbf5b-gGtLXvVCcheSTQmlF5tHiy&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqD2NoLWZODeB8lgR60Yw3N_lSPSDD-Gdpjrf48RoaEHZVJb5U8Z8rHcnsC5LsA0GY5kXvQmQcE2b_cHIgVu7-mpJ-DqJvCg4y2MgveoVE8XsQG6VQlUeh6ZyYHeV7mWCL44DA5pQ=w675-h390-n-k-no",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Kodaikanal"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-violet-500 selection:text-white">

  {/* Advanced Radial Background Glows (Highland Mist & Shola Forest Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-violet-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-teal-50 border border-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ⛰️ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950">
      Best Time to Visit Kodaikanal
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect misty retreat aligned with crisp mountain winters, blooming valleys, or fresh monsoon petrichor.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-violet-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center text-2xl font-bold mb-6 border border-violet-100">
          🌲
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Princess of Hills Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Kodaikanal embraces its finest and most crisp travel window from <span className="font-bold text-violet-700 bg-violet-50 px-1.5 py-0.5 rounded-md">October to March</span>. During these winter months, the high altitude triggers beautifully cold mornings and sharp evening breezes ranging comfortably from 8°C to 20°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this peak block, row-boating across the star-shaped <span className="font-semibold text-gray-900">Kodaikanal Lake</span>, walking through the towering Pine Forest loops, and catching the rolling fog at Coaker's Walk feels absolutely magical.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-violet-50 to-teal-50 rounded-2xl border border-violet-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-violet-900 font-medium leading-relaxed">
          <strong className="text-violet-950">Pro Tip:</strong> If you are planning a visit during May, keep a lookout for the annual <strong className="text-violet-950">Bryant Park Flower Show</strong>. The park erupts into stunning multi-colored floral loops, making it an incredible time for photography enthusiasts.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Crisp */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-violet-300 shadow-sm hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-violet-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ❄️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-violet-700 transition-colors duration-200">
              Chilly Winter Peak (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The grand peak tourist cycle. Heavy evening mist blankets the town. Perfect for campfire stays, cycling around the lake, and trekking up to Pillar Rocks.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-violet-100/70 text-violet-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Misty Peak
        </span>
      </div>

      {/* Season 2: Summer Relief */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-teal-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-teal-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors duration-200">
              Pleasant Summer Escape (April – June)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              While South Indian plains face intense summer heat, Kodai stays cool around 25°C. Excellent for escaping the humidity, checking out fruit orchards, and enjoying clear valley views.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Plains Escape
        </span>
      </div>

      {/* Season 3: Monsoon Greens */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">
              Monsoon Magic (July – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Frequent mountain downpours make the rolling Shola hills incredibly green. Waterfalls like Bear Shola Falls jump back to life, creating a beautiful setting for budget backpackers.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Lush Cascades
        </span>
      </div>

    </div>
  </div>

</section>

{/* Best Stays & Resorts Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-emerald-600 selection:text-white">
  
  {/* Shola Forest Background Glows (Fern Green & Mist Silver) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🌲 The Shola Mist Stay Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-emerald-950 to-gray-950">
      Best Hotels & Forest Retreats in Kodaikanal
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From secluded eco-lodges hidden inside pine-drenched valleys to colonial cottages overlooking the ethereal Kodai Lake.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Eco-Lodge Forest Sanctuaries (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🌿
          </div>
          <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Deep-Forest Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
          Eco-Conscious Valley Sanctuaries
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Deep within the Palani Hills, find serenity in premium eco-lodges that blend into the canopy. Featuring floor-to-ceiling glass walls, private balconies facing misty mountain folds, and fireplace-lit interiors designed to keep the crisp, alpine chill of Kodaikanal at bay.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-700 tracking-wider uppercase">
        Glass-Wall Forest Vistas & Alpine Fireplace Comforts
      </div>
    </div>

    {/* Card 2: Lakefront Heritage Villas */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🛶
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Lakefront Heritage Cottages
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For clients who prefer proximity to the town’s heartbeat, these charming, century-old colonial bungalows offer direct access to the Kodai Lake loop, complete with rosewood furniture, antique fireplaces, and private, flower-filled gardens.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Colonial Rosewood Interiors & Private Flower Gardens
      </div>
    </div>

    {/* Card 3: Plantation Luxury Manors */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          ☕
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Working Coffee & Spice Estates
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Elevate the stay with immersive luxury in working estates on the town's outskirts. Wake up to the scent of freshly roasted coffee, guided plantation walks, and open-air decks perfect for yoga amidst rolling, emerald-green mountain slopes.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Guided Plantation Walks & Fresh Estate-Brewed Mornings
      </div>
    </div>

    {/* Card 4: Modern Wellness Huts (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🧘
          </div>
          <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Zen Retreats
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
          Cloud-Top Zen & Yoga Retreats
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Tucked away from the tourism corridor, these zen-inspired minimalist retreats focus on complete digital detox. Featuring meditation halls, organic farm-to-table dining, and silence zones situated right above the cloud layer, these offer a transformative, peaceful escape.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Minimalist Silence Zones & Organic Farm-To-Table Dining
      </div>
    </div>

    {/* Card 5: Smart Adventure Basecamps */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-xl flex items-center justify-center border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥾
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          Adventure Hub Basecamps
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Built for the explorer, these high-end, adventure-focused hostels provide equipment lockers, guided trek briefings every morning, and social lounges for networking with fellow wanderers before setting off to Coakers Walk or Pillar Rocks.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-blue-600 tracking-wider uppercase">
        Guided Trek Briefings & Social Wanderer Lounges
      </div>
    </div>

  </div>
</section>


{/* Restaurants & Cafes Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-orange-500 selection:text-white">
  
  {/* Culinary Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-950/5 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-emerald-50 border border-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🍫 Handmade Chocolate & Forest Flavors
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-orange-950 to-gray-950">
      Best Restaurants & Dining in Kodaikanal
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From cozy cafés serving piping hot organic coffee and handmade chocolates to hidden forest gems serving authentic mountain comfort food.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Cloud-Top Cafes (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
            ☕
          </div>
          <span className="text-xs font-bold bg-orange-100/60 text-orange-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Aromatic Hideaways
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
          Artisanal Coffee & Chocolate Hubs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Kodai is famous for its artisanal culinary scene. Visit iconic, cozy cafés where you can sample small-batch, handmade dark chocolates and organic, shade-grown mountain coffee. These spots are perfect for wrapping up a chilly afternoon with a warm, indulgent treat.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-700 tracking-wider uppercase">
        Handmade Dark Chocolates & Shade-Grown Mountain Roasts
      </div>
    </div>

    {/* Card 2: Mountain Comfort Kitchens */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥘
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Mountain Comfort Kitchens
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For heartier meals, visit established local kitchens known for their fusion comfort food—think spicy, warm Shakshuka, fresh wood-fired thin-crust pizzas, and farm-fresh vegetable soups served in cozy, rustic interiors.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Fusion Shakshuka & Farm-Fresh Wood-Fired Pies
      </div>
    </div>

    {/* Card 3: Plantation Dining Estates */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥗
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Estate-To-Table Fine Dining
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Indulge in fine-dining experiences set within sprawling colonial-era estates. These curated menus prioritize local produce—featuring garden-picked organic vegetables, estate-aged cheeses, and traditional local slow-cooked delicacies.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Garden-Picked Organic Produce & Estate-Aged Cheeses
      </div>
    </div>

    {/* Card 4: Iconic Street Bites (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🥟
          </div>
          <span className="text-xs font-bold bg-emerald-100/60 text-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Bazaar Street Flavors
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors duration-200">
          Bazaar Street-Food & Spicy Local Snacks
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Wander the central bazaars to find hidden gems serving steaming, spicy *Momos*, crispy *Gobi Manchurian*—a local hill favorite—and hot cups of ginger chai. Perfect for grabbing a quick, flavorful bite while shopping for local eucalyptus oils and homemade spice mixes.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Steaming Spicy Momos & Crispy Gobi Manchurian Baskets
      </div>
    </div>

    {/* Card 5: Rustic Tea-Room Traditions */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-xl flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍰
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Colonial Tea-Room Traditions
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Finish your dining journey at old-school tea rooms. Serving classic scones, thick Devonshire-style cream, and piping hot English breakfast tea, these rooms preserve the charming, relaxed colonial social pace of the hill station.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-orange-600 tracking-wider uppercase">
        Classic Scones & Devonshire-Style Cream Traditions
      </div>
    </div>

  </div>

  {/* Travel Guide Tip Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600/10 via-emerald-600/5 to-transparent border border-orange-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-orange-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-orange-900 font-bold">Kodai Misty Transit Tip:</strong> Kodaikanal's forest roads can get incredibly misty, often reducing visibility to near zero after sunset. Always recommend that your travel groups finish their long-distance sightseeing by late afternoon and stick to the well-lit town loops for dinner and evening social walks!
      </p>
    </div>
  </div>

</section>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://www.tamilnadutourism.tn.gov.in/destinations/kodaikanal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
            >
              Visit Tamil Nadu Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kodaikanal;
