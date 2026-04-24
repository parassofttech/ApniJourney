import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Info,
  Camera,
  ExternalLink,
  TreePine,
  Landmark,
} from "lucide-react";

const MountAbu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR6Wxe3kUF-Liy3tn6bJ977_DVOx50X8S4TsEOrHhvciI1Q3ACtKZCO3Fachu5-xNa-1rB1Tu9uILdCcLc9bdxiX_8&s=19"
          alt="Mount Abu"
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
            className="text-4xl font-extrabold text-center text-green-700 mb-4"
          >
            🌄 Mount Abu – The Only Hill Station of Rajasthan
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-8"
          >
            Nestled in the **Aravalli Range**, Mount Abu is Rajasthan’s
            only hill station. Known for its cool climate, scenic lakes,
            spiritual temples, and lush greenery, it offers a peaceful
            escape from the desert heat.
          </motion.p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-green-50 rounded-2xl shadow-sm border border-green-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Info /> Historical Significance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Mount Abu has been an important religious and cultural
                center for centuries. It is famous for the
                **Dilwara Jain Temples**, known for their stunning marble
                carvings. The region also holds significance in Hindu
                mythology.
              </p>
            </motion.div>

            {/* Attractions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-emerald-700 mb-3">
                <Camera /> Must-Visit Attractions
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🛕 <b>Dilwara Temples:</b> Marble masterpiece</li>
                <li>🌅 <b>Nakki Lake:</b> Boating & sunset views</li>
                <li>🏔️ <b>Guru Shikhar:</b> Highest peak of Aravalli</li>
                <li>🌳 <b>Sunset Point:</b> Scenic evening spot</li>
              </ul>
              <a
                href="https://tourism.rajasthan.gov.in/mount-abu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-emerald-700 mt-3 underline hover:text-emerald-900"
              >
                Visit Rajasthan Tourism <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Nature */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-lime-50 rounded-2xl shadow-sm border border-lime-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-lime-700 mb-3">
                <TreePine /> Nature & Wildlife
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Surrounded by forests and rocky hills, Mount Abu is
                home to the **Mount Abu Wildlife Sanctuary**.
                You can spot rare flora, fauna, and enjoy trekking
                through scenic trails.
              </p>
            </motion.div>

            {/* Travel Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-teal-50 rounded-2xl shadow-sm border border-teal-200"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-700 mb-3">
                <MapPin /> Travel Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>🕒 <b>Best Time:</b> October – March</li>
                <li>🎟️ <b>Ideal Duration:</b> 2–3 days</li>
                <li>🚆 <b>Nearest Railway:</b> Abu Road (28 km)</li>
                <li>✈️ <b>Nearest Airport:</b> Udaipur Airport</li>
                <li>🏨 <b>Stay:</b> Hill resorts, heritage hotels</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-300"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
              <Mountain /> Peaceful Escape
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mount Abu is perfect for a **relaxing vacation**. Enjoy
              boating in Nakki Lake, trekking to Guru Shikhar,
              and witnessing beautiful sunsets. The cool breeze
              and serene atmosphere make it a romantic and peaceful
              getaway.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              📸 Gallery – Explore Mount Abu
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbyKIr-dDJZy8Nc0zJggZ0sQPJbuY-x1ztVfrozdLYVx4ODaesGARj3i6Up60BZoWjhOUDBKKdIiXU-Wg_0xlHSau54mxMvL6hXqbY1rrh_X-aMFRgDOMy_YGXnh3JY3BUMEr3=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoM2LsCIt2P0j0Ud3zJEziwPy-gWXHSCqu-REqsPU2eyIFEsEY6cEcshRpMf5BAp4PboREpfx7sKBPjajBfwJ3rkRFfRrvPV1qJhC9PQklvoDxL-N_Ah9qBfTxTn_Nqgi2VRHQr=w675-h390-n-k-no",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGYwxcq2OpMs0T9J_todyitNXY7V9KO40WZWXeGtrGk54uf_68N9Xe4MfKj8hMm-7rp28EgmRH9TE8SoDW6Aw6h1sVMkn4JG-4lJapPDHizxKC6Zcq_zaxwD5vyvCFBwEN2PDMrQ=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ3bxItjMqC7euH7A_HFMATyw5-T1dfdB7F-_8BBHOUO50Kdmf5hcLPnpfnZjeOT0hm4EfhgKhzoXCZ34n_Yt7t5Sw&s=19",
                "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerD4tnJG2SRJEmerhSeyP4uK7pqv9tOybXpfYTBK5R7d_xB0-EGg3QtaUgC1AczOJEPSukQ0x_yoP5grATZSNDrIsby6MzZhqTvPsPDQPNZpAD_rT6c2aNasMy89M471QiWXhko=w675-h390-n-k-no",
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT6gjqp3rk_ESP0cMq4q2dweQXIXYlAAzbEk0eil1Vjg9tJzjljPtE9aVGVy4iSme7y6vPQAOoZ8wwuSLYX4vmeW18&s=19",
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Mount Abu"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl shadow-md h-52 w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Tourism Link */}
          <div className="mt-8 text-center">
            <a
              href="https://tourism.rajasthan.gov.in/mount-abu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold"
            >
              Visit Rajasthan Tourism <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MountAbu;
