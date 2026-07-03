import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Info,
  Camera,
  ExternalLink,
  Utensils,
  Flag,
} from "lucide-react";

const Amritsar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQdZi-oDfvN2_KUn7cMrOj-bwPABeqG_oDkJvBkf5egGmv-T445apepLKb2XBwTzaD08TZnUJXwGOV6t95vMwLNOBo&s=19"
          alt="Golden Temple"
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
            className="text-4xl font-extrabold text-center text-orange-700 mb-4"
          >
            🛕 Amritsar – The Spiritual Heart of Punjab
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Located in the heart of **Punjab**, Amritsar is one of India’s most
            sacred cities, famous for the **Golden Temple**, rich Sikh history,
            patriotic landmarks, and legendary Punjabi food. The city blends
            **spiritual peace, history, and vibrant culture** beautifully.
          </motion.p>

          {/* Introduction Section: Amritsar */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Spiritual Radiance & Divine Sunset Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      <span>✨</span> Spiritual Spotlight
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Discover Amritsar
    </h2>
    <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
      The jewel of Punjab—a deeply spiritual, high-vibrational sanctuary where gold-plated spires mirror across sacred waters and heroic history echoes through ancient lanes.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Column: Premium Introduction (Glass Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 sticky top-6">
      <div className="text-4xl mb-4">🪯</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        The Spiritual Heart of the Sikhs
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
        Amritsar, literally meaning the "Pool of Nectar," was founded in 1577 by Guru Ram Das Ji. Located in the fertile northwestern plains of Punjab, it stands as an unmatched epicenter of intense devotion, community service, and monumental culinary heritage.
      </p>
      <p className="text-gray-600 leading-relaxed text-[15.5px]">
        It is a city that captures your senses instantly—from the calming, continuous hymns echoing over pristine marble courtyards to the dramatic patriotic fervor at the national border and the rich, buttery aromas of its legendary street kitchens.
      </p>
      
      {/* Quick Stats Banner inside Left Card */}
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
        <div className="bg-amber-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-amber-600">100k+</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Fed Daily (Langar)</p>
        </div>
        <div className="bg-orange-50/50 p-3 rounded-2xl">
          <p className="text-2xl font-black text-orange-600">750kg</p>
          <p className="text-xs font-semibold text-gray-500 uppercase mt-0.5">Pure Gold Plating</p>
        </div>
      </div>
    </div>

    {/* Right Column: Dynamic Feature Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card 1: Sri Harmandir Sahib */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          🕌
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Golden Temple
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Witness absolute spiritual beauty. The magnificent <span className="font-semibold">Sri Harmandir Sahib</span> floats gracefully within a massive pool of holy water, welcoming people of all faiths through its four doors representing universal equality.
        </p>
      </div>

      {/* Card 2: Wagah Border Ceremony */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl font-bold text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
          🫡
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
          Wagah Border Beating Retreat
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Feel the roaring high-octane energy. Drive out to the international border to experience the electrifying, synchronized military drills and flag-lowering ceremony alongside thousands of cheering spectators.
        </p>
      </div>

      {/* Card 3: Jallianwala Bagh Chronicles */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl font-bold text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
          🧱
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Jallianwala Bagh Memorial
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Step into India's historic freedom struggle. Walk through the narrow entrance corridor to pay respects at the solemn memorial garden, where preserved bullet-marked brick walls and the historic Martyr's Well trace the events of 1919.
        </p>
      </div>

      {/* Card 4: Culinary Icon - Amritsari Kulcha */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-yellow-300 shadow-md hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-xl font-bold text-yellow-600 mb-5 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
          🧈
        </div>
        <h4 className="text-lg font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-200">
          Legendary Dhaba Gastronomy
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Indulge in a buttery feast. Savor the flaky, wood-fired crunch of authentic ghee-laden <span className="font-semibold">Amritsari Kulchas</span>, creamy Dal Makhani, and thick tall glasses of sweet Lassi at iconic heritage culinary stops.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Premium Sticky Note */}
  <div className="mt-12 bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
    <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
    <div className="relative z-10 max-w-3xl">
      <h4 className="text-xl font-extrabold tracking-wide">The Ultimate Verdict</h4>
      <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed opacity-90">
        In short, Amritsar is a deeply moving travel experience. It perfectly combines the unmatched spiritual peace of the golden shrines and selfless communal devotion with a fiercely patriotic border pulse and world-class culinary art, creating memories that stay with you forever.
      </p>
    </div>
  </div>

</section>

        

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Discover Amritsar
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://static.toiimg.com/photo/77692462.cms",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoC2MqlY_IWRC2W-xEdKTY5nj4EezUCwFghHbRjiX7MNZ1JVywxAPNXTClzSkgTexzEMvFWcjCEVCwHCQfwfKMfS190hw1YCja5qtK4gdmO_gXUObpkPV43IwsqleKHMMR0l-A=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerCOafhvUKnSDV-8TNAYzXpmAOAav7gKX4g3r-epiMPneJVpE_ez2L9E-sQfEQ1Pssr9HPOtLcKy2SDhzbqxoGWBEzwMwMxmLkzqvjE3Uq7ggIITZc8Ch-grU8EkY7FKACShbS8Ig=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwersSiih3I-rYbTnBYD9Vl7fUmFxDW0UIRBp5An3nrxVSsp7sWAFLryPNJzwCnILrTYo52Sx15Bh-8z4GkpuV8CkZH27mlQhEDOtA-9dgtbRRdtbk7lnb2JUiyHemzsAQjQ6YenEjOrWzqPS=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTTqWS5nI0QcEim8phdxrMb1j9449kdLtIc2MOlKrmnveLcSGHqFRxb1ygfoPBoy_unOrV7-PTtvJnR0w3OI0r6SJY&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrBjfjEy6uH7p9ydAXwz9_cPfIqSyPjwLvApgtkIMnJbD3gdgKEoAc6U6xv1FAG1jUAWAg9obKvc7fHbDI1xi4YZy1LmROoAVZEZcSFdFREhPAS6d7uM15Ew3mMXvAtLpAoukdSA=w675-h390-n-k-no",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Amritsar"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">

  {/* Advanced Radial Background Glows (Sacred Golden Aura & Rich Heritage Theme) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/10 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      ✨ Weather & Planning
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Time to Visit Amritsar
    </h2>
    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto font-medium leading-relaxed">
      Plan your perfect spiritual getaway aligned with crisp winter suns, vibrant festivals, and legendary street food loops.
    </p>
  </div>

  {/* Main Interactive Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Peak Season Overview (Glassmorphic Card) */}
    <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-amber-950/5 rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-6 border border-amber-100">
          ੴ
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Sacred Punjab Windows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15.5px] mb-4">
          Amritsar is exceptionally inviting and comfortable from <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">October to March</span>. During this winter phase, the intense northern plains heat completely breaks down, bringing crisp, cool days and chilly nights between 5°C - 25°C.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          During this premium block, walking through the beautifully redesigned <span className="font-semibold text-gray-900">Heritage Street</span>, sitting peacefully by the Sarovar at the Golden Temple, and watching the energetic flag ceremony at the Wagah Border feels incredibly pleasant.
        </p>
      </div>

      {/* Pro Tip Alert Section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
        <span className="text-lg mt-0.5">💡</span>
        <p className="text-xs md:text-sm text-amber-900 font-medium leading-relaxed">
          <strong className="text-amber-950">Pro Tip:</strong> Eager to see the Golden Temple dazzling at its absolute grandest? Try to plan your travel loop around <strong className="text-amber-950">Gurpurab</strong> or <strong className="text-amber-950">Diwali/Bandi Chhor Divas</strong>, when the entire complex is illuminated with millions of lights and spectacular fireworks displays.
        </p>
      </div>
    </div>

    {/* Right Side: Seasonal Breakdown Matrix */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Season 1: Winter Peak */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-amber-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            ☀️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors duration-200">
              Crisp Winters (October – March)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The grand peak tourist cycle. Favorable weather for all-day city expeditions, visiting Jallianwala Bagh, and binging on hot, crispy Amritsari Kulchas with melting butter loops.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-amber-100/70 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Golden Peak
        </span>
      </div>

      {/* Season 2: Spring Celebrations */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-rose-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌾
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-rose-700 transition-colors duration-200">
              Spring & Baisakhi (April)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              The air turns warmer but the fields fill up with golden harvest loops. Perfect for catching the high-energy celebrations, bhangra beats, and traditional fairs of Baisakhi.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-rose-100/70 text-rose-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Harvest Beats
        </span>
      </div>

      {/* Season 3: Summer & Monsoons */}
      <div className="group bg-white/50 backdrop-blur-md border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="w-0.5 md:w-12 h-12 rounded-xl bg-orange-50 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-200">
              Summer Heat & Monsoon (May – September)
            </h4>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Temperatures flare past 40°C followed by humid monsoon downpours. Outdoor walks are best saved for peaceful midnight temple loops or enjoying cold tall glasses of sweet Lassi.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-orange-100/70 text-orange-800 px-3 py-1 rounded-full self-start sm:self-auto">
          Quiet Windows
        </span>
      </div>

    </div>
  </div>

</section>
{/* Best Hotels & Resorts Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-600 selection:text-white">
  
  {/* Spiritual Heritage Background Glows (Golden Shimmer & Crimson Phulkari) */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-900/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Header Title Section */}
  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-red-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🙏 The Sacred Heritage Stay Guide
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Hotels & Luxury Resorts in Amritsar
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From premium luxury stays within walking distance of the Golden Temple to expansive, rustic wellness eco-resorts capturing true Punjabi village life.
    </p>
  </div>

  {/* Advanced Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Sacred Golden Temple Hub (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
            🕌
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Divine Corridor Tier
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Premium Stays Inside the Golden Temple Corridor
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Immerse your travelers directly into the spiritual epicenter. Premium hospitality spots located right along the beautifully designed Heritage Street or Town Hall corridor place you within a 5-minute barefoot walk of <span className="font-semibold text-gray-900">Sri Harmandir Sahib</span>, allowing your group to easily attend the breathtaking early morning Palki Sahib ceremony.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
        Heritage Street Walkways & 24/7 Gurbani Audio Streams
      </div>
    </div>

    {/* Card 2: High-End Urban Luxury */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-500/30 shadow-lg hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🏨
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Ranjit Avenue Luxury Outposts
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Choose upscale modern comfort in Amritsar's elite commercial hub. Flagship properties like <span className="font-semibold text-gray-900">Taj Swarna</span> or Radisson Blu offer sprawling swimming pools, world-class luxury spas, and swift transit connections toward the Wagah Border.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Five-Star Wellness Spas & International Transit Desks
      </div>
    </div>

    {/* Card 3: Authentic Punjabi Farmstays */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-emerald-500/30 shadow-lg hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center border border-emerald-100/70 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🚜
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
          Rustic Heritage Farmstays & Villages
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Experience authentic Punjabi hospitality at stunning eco-farms like <span className="font-semibold text-gray-900">Amritsar Vikas Farms</span>. These properties feature beautiful green mustard field boundaries, exciting tractor rides, and traditional open-air clay hearth dining.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-emerald-600 tracking-wider uppercase">
        Mustard Field Walking Paths & Open-Air Tractor Safaris
      </div>
    </div>

    {/* Card 4: Colonial Heritage Mansions (Featured - Larger width) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🏡
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Historic Haveli Living
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Restored Grand Havelis & Vintage Boutique Bungalows
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Discover old-world charm in painstakingly restored structures showcasing magnificent Nanakshahi brick architecture. These boutique spaces feature deep central courtyards, beautifully exposed vintage brick walls, high-set archways, and curated Punjabi folk antiquities.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Exposed Nanakshahi Brick Interiors & Central Folk Courtyards
      </div>
    </div>

    {/* Card 5: Smart Transit & Group Lodges */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-500/30 shadow-lg hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🧳
          </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Smart Group Hotels near Mall Road
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Perfect for families and group itineraries. Highly accessible business-class hotels provide vast multi-bed executive suites, prompt 24x7 kitchen service, and direct multi-utility vehicle parking zones.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Multi-Bed Family Suites & Direct Highway Access
      </div>
    </div>

  </div>
</section>


{/* Restaurants & Cafes Section */}
<section className="relative max-w-6xl mx-auto md:px-6 py-16 selection:bg-amber-500 selection:text-white">
  
  {/* Culinary Background Tints */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-950/5 blur-[120px] rounded-full"></div>
  </div>

  <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-red-50 border border-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
      🧈 Pure Desi Ghee & Crispy Kulcha Layers
    </div>
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-amber-950 to-gray-950">
      Best Restaurants & Food Havens in Amritsar
    </h2>
    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-medium">
      From insanely flaky, wood-fired Amritsari Kulchas dripping in pure butter to the legendary, divine community kitchen experience at Guru Ka Langar.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

    {/* Card 1: Iconic Amritsari Kulcha Hubs (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🫓
          </div>
          <span className="text-xs font-bold bg-amber-100/60 text-amber-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Clay Oven Legends
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors duration-200">
          Legendary Crisp-Layered Amritsari Kulcha Outlets
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Savor the ultimate gold-standard of breakfast culinary craft at world-famous legacy institutions like <span className="font-semibold text-gray-900">Bhai Kulwant Singh Kulchawale</span> or <span className="font-semibold text-gray-900">The Kulcha Land</span>. These clay-oven masters serve hyper-flaky, multiple-layered <span className="font-semibold text-gray-900">Amritsari Kulchas</span> stuffed with spiced potatoes and cauliflower, crushed by hand right before your eyes to unleash fresh butter pools, and paired with tangy chole and sweet-sour onion chutney.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-700 tracking-wider uppercase">
        Hand-Crushed Layered Pastry Techniques & Endless Butter Pools
      </div>
    </div>

    {/* Card 2: Iconic Dhabas for Dal Makhani */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-500/30 shadow-lg hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🍲
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
          Historic Punjabi Dhaba institutions
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Step into standard culinary folklore at globally recognized heritage dhabas like <span className="font-semibold text-gray-900">Kesar Da Dhaba</span> (established 1916) or <span className="font-semibold text-gray-900">Bharawan Da Dhaba</span>. Experience rich, slow-simmered, charcoal-fired Dal Makhani cooked for over 12 hours, served alongside immense, crispy laccha parathas.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        12-Hour Slow Charcoal Simmers & Giant Laccha Parathas
      </div>
    </div>

    {/* Card 3: Divine Guru Ka Langar */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥣
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          The Spiritual Community Kitchen: Guru Ka Langar
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Participate in the world's most humbling, colossal community dining paradigm inside the Golden Temple complex. Sit cross-legged on jute mats inside the grand halls alongside thousands of daily pilgrims to receive delicious, soul-satisfying dal, simple rotis, and divine kheer prepared entirely by volunteers.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Humbling Mega-Scale Volunteer Service & Hot Soulful Kada Prasad
      </div>
    </div>

    {/* Card 4: Iconic Non-Veg Legacy Grills (Featured Large Layout) */}
    <div className="group md:col-span-2 bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-red-500/30 shadow-lg hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-xl flex items-center justify-center border border-red-100/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
            🐟
          </div>
          <span className="text-xs font-bold bg-red-100/60 text-red-950 px-3 py-1 rounded-full uppercase tracking-wider">
            Amritsari Street Grills
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-red-800 transition-colors duration-200">
          Famous Amritsari Fish & Tandoori Tawa Hubs
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          For non-vegetarian culinary routes, explore legendary heritage joints like <span className="font-semibold text-gray-900">Beera Chicken House</span> or <span className="font-semibold text-gray-900">Makhan Fish corner</span>. Feast on the iconic <span className="font-semibold text-gray-900">Amritsari Fish Fry</span>—tender fish cubes coated in a spicy, carom-seeded (*ajwain*) gram flour batter and fried to absolute golden perfection.
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-red-600 tracking-wider uppercase">
        Ajwain-Infused Gram Flour Batters & Whole Tandoori Chicken Grills
      </div>
    </div>

    {/* Card 5: Tall Sweet Cream Lassi Creameries */}
    <div className="group bg-white/60 backdrop-blur-xl border border-gray-200/60 hover:border-amber-500/30 shadow-lg hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100/70 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
          🥛
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
          Monumental Frothy Punjabi Lassi Corners
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mt-3">
          Quench your thirst with giant steel tumblers of authentic <span className="font-semibold text-gray-900">Amritsari Lassi</span> at legacy milk shops like Ahuja Milk Bhandar. It is a slow-churned, ultra-thick yogurt drink topped with a massive, decadent dollop of fresh milk cream (*malai*).
        </p>
      </div>
      <div className="mt-6 text-xs font-bold text-amber-600 tracking-wider uppercase">
        Giant Steel Tumblers & Heavy Malai Spoon Scoops
      </div>
    </div>

  </div>

  {/* Travel Guide Tip Banner */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/10 via-red-600/5 to-transparent border border-amber-100/70 backdrop-blur-md px-6 py-4 rounded-2xl text-left max-w-2xl mx-auto shadow-sm">
      <span className="text-xl shrink-0">💡</span>
      <p className="text-amber-950 font-medium text-sm md:text-base leading-relaxed">
        <strong className="text-amber-900 font-bold">Amritsar Spiritual Etiquette Tip:</strong> While accessing the pristine marble parikrama lines of the Golden Temple complex, keep your head completely covered with a scarf or bandana at all times, remove your footwear at the designated step-counters, and wash your feet in the shallow entry water streams!
      </p>
    </div>
  </div>

</section>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://punjabtourism.punjab.gov.in/amritsar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition font-semibold"
            >
              Visit Punjab Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Amritsar;
