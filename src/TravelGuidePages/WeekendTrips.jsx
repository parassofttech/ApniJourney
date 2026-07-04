import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Info, Star, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Weekend Trips Database
const weekendPlaces = [
  { id: "agra", name: "Agra", state: "Uttar Pradesh", tag: "Heritage", image: "https://images.unsplash.com/photo-1564507592333-c64657065969?q=80&w=1000", desc: "A weekend with the Taj.", longDesc: "Perfect for a 2-day getaway. Explore the architectural marvel of the Taj Mahal, the grand Agra Fort, and local markets. It’s a short, culturally rich trip that fits perfectly into any weekend schedule." },
  { id: "mussoorie", name: "Mussoorie", state: "Uttarakhand", tag: "Hill-Station", image: "https://images.unsplash.com/photo-1596706692790-843864a78107?q=80&w=1000", desc: "Queen of the hills.", longDesc: "Drive up to the mountains for a refreshing 48-hour escape. Walk the Mall Road, see the Kempty Falls, and enjoy the cool mountain air. It's the ideal place to rejuvenate before the work week begins." },
  { id: "jaipur", name: "Jaipur", state: "Rajasthan", tag: "Royal", image: "https://images.unsplash.com/photo-1599661046289-e318872545d1?q=80&w=1000", desc: "The Pink City charm.", longDesc: "Spend your weekend exploring the Hawa Mahal, Amer Fort, and local Rajasthani cuisine. Jaipur’s connectivity makes it one of the easiest and most vibrant weekend destinations for a short break." },
  { id: "kasol", name: "Kasol", state: "Himachal", tag: "Adventure", image: "https://images.unsplash.com/photo-1589487391730-58f208197793?q=80&w=1000", desc: "Valley vibes in 2 days.", longDesc: "For those who prefer a bit of adventure, Kasol is great for a quick weekend trek. Enjoy the Parvati river views, campfire nights, and the laid-back pace of the valley life." },
  { id: "pondicherry", name: "Pondicherry", state: "Tamil Nadu", tag: "Coastal", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1000", desc: "A French weekend.", longDesc: "Pondicherry offers a unique blend of French architecture and beach relaxation. Spend two days cycling through the white town, visiting Auroville, and relaxing by the serene coastal shores." },
  { id: "lonavala", name: "Lonavala", state: "Maharashtra", tag: "Getaway", image: "https://images.unsplash.com/photo-1583339626359-00109968a3f8?q=80&w=1000", desc: "Sahyadri’s quick escape.", longDesc: "Escape the city rush for a weekend in the Sahyadri mountains. Whether it's the monsoon or winter, the hill station offers trekking trails, caves, and beautiful viewpoints perfect for a short trip." },
  { id: "udaipur", name: "Udaipur", state: "Rajasthan", tag: "Scenic", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/763687523.jpg?k=089cbeeec18c02ac3270c033f62935615d49d2ffd289b5afa19667018a374356", desc: "Royal comfort for 2 days.", longDesc: "Experience luxury and history in just 48 hours. Enjoy boat rides on Lake Pichola and visits to the City Palace. It’s a compact destination that packs in a lot of charm for a quick weekend break." },
  { id: "dharamshala", name: "Dharamshala", state: "Himachal", tag: "Spiritual", image: "https://images.unsplash.com/photo-1563298723-d8fca3c57f49?q=80&w=1000", desc: "Peace in the mountains.", longDesc: "A peaceful weekend retreat to the home of the Dalai Lama. Monastery visits, mountain trails, and Tibetan cafes provide the perfect environment for a quick mental reset before returning to the grind." }
];

const WeekendTrips = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 selection:bg-indigo-500 selection:text-white">
      
      {/* Hero Section */}
      <header className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-50 -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8">WEEKEND <span className="text-indigo-600 italic">Escapes.</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Don't wait for the long holidays. Refresh your mind with these perfect 48-hour getaways.
          </p>
          <button className="bg-gray-950 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all">Explore Weekends</button>
        </motion.div>
      </header>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-5xl font-black tracking-tight mb-4">48-Hour Paradises</h2>
          <p className="text-gray-500 font-medium">8 perfect trips designed for your weekend schedule.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {weekendPlaces.map((dest, i) => (
            <motion.div whileHover={{ y: -12 }} key={i} className="group relative cursor-pointer">
              <div className="relative h-[190px] md:h-[290px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">{dest.tag}</span>
                </div>
                <div className="absolute bottom-4 left-8">
                  <h3 className="text-2xl font-black text-white leading-tight">{dest.name}</h3>
                  <p className="text-blue-300 font-bold text-sm tracking-wide">{dest.state}</p>
                  <Link to={`/weekend/${dest.id}`} className="flex text-sm md:text-2xl font-black text-white leading-tight mt-2">
                    Read more <ArrowRight size={18} className="ml-2 mt-1"/>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4"><Info size={40}/> Weekend Dossier</h2>
        <div className="space-y-16">
          {weekendPlaces.map((dest, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-3xl font-black mb-4 text-gray-950">{dest.name}, {dest.state}</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-indigo-500 pl-6">{dest.longDesc}</p>
              <div className="mt-8 flex gap-4 text-sm font-bold text-gray-500">
                <span className="flex items-center gap-1"><Clock size={16} className="text-indigo-500"/> 48 Hour Trip</span>
                <span className="flex items-center gap-1"><Calendar size={16}/> Weekend Ready</span>
                <span className="flex items-center gap-1"><Zap size={16}/> Quick Access</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WeekendTrips;