import React from "react";
import { motion } from "framer-motion";
import { MapPin, Church, Waves, PartyPopper } from "lucide-react";


const RishikeshHaridwar = () => {
  const galleryImages = [
    "https://himalayanoutback.com/wp-content/uploads/2022/04/Interesting-Facts-About-Rishikesh.jpg",
    "https://s3.india.com/wp-content/uploads/2024/05/Feature-Image_-Rishikesh.jpg",
    "https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg",
    "https://planashleygo.com/wp-content/uploads/2023/03/Rishikesh-1.jpg",
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-100 py-10 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          src={galleryImages[0]}
          alt="Rishikesh Haridwar"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-80 md:h-[420px] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://i0.wp.com/stampedmoments.com/wp-content/uploads/2023/01/rishikesh-2.jpg?fit=1024%2C768&ssl=1")
          }
        />

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-4"
          >
            🌊 Rishikesh & Haridwar – Spiritual & Adventure Hub
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8 text-sm md:text-base"
          >
            Nestled along the sacred <b>Ganges River</b>, Rishikesh and Haridwar are
            renowned for <b>spiritual retreats, yoga centers, pilgrimage, and adventure activities</b>.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Spiritual Significance */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-200"
            >
              <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-yellow-700 mb-2">
                <MapPin /> Spiritual Significance
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Haridwar is one of the seven holiest places in India, famous for
                the <b>Ganga Aarti at Har Ki Pauri</b>. Rishikesh is known as the Yoga Capital of the World.
              </p>
            </motion.div>

            {/* Temples */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-blue-50 rounded-2xl shadow-sm border border-blue-200"
            >
             <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
  <Church /> Famous Temples
</h2>

              <ul className="text-gray-700 text-sm md:text-base space-y-1">
                <li>🛕 <b>Mansa Devi Temple:</b> Hilltop temple with ropeway access</li>
                <li>🛕 <b>Chandi Devi Temple:</b> Scenic views & spiritual vibes</li>
                <li>🛕 <b>Triveni Ghat:</b> Evening aarti & sacred rituals</li>
              </ul>
            </motion.div>

            {/* Adventure Activities */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-green-700 mb-2">
                <Waves /> Adventure & Experiences
              </h2>
              <ul className="text-gray-700 text-sm md:text-base space-y-1">
                <li>🌊 White water rafting on the Ganges</li>
                <li>🧗 Rock climbing and trekking in the Himalayas</li>
                <li>🛶 Kayaking & river camping</li>
                <li>🧘 Yoga & meditation retreats</li>
              </ul>
            </motion.div>

            {/* Festivals */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-orange-50 rounded-2xl shadow-sm border border-orange-200"
            >
              <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-orange-700 mb-2">
                <PartyPopper /> Festivals
              </h2>
              <ul className="text-gray-700 text-sm md:text-base space-y-1">
                <li>🕯️ Ganga Dussehra</li>
                <li>🎉 International Yoga Festival (Rishikesh)</li>
                <li>🎶 Kumbh Mela (Haridwar)</li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Rishikesh & Haridwar
            </h2>
            <div className="grid sm:grid-cols-2  gap-4">
              {galleryImages.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`RishikeshHaridwar ${i}`}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1581031405421-8a9e49c3c7b4?auto=format&fit=crop&w=900&q=80")
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RishikeshHaridwar;
