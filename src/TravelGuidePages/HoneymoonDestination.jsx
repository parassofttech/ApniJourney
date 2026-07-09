import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Sparkles, Info, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// 8 Honeymoon Destinations Database
const honeymoonPlaces = [
  { id: "udaipur", name: "Udaipur", state: "Rajasthan", tag: "Royal", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/763687523.jpg?k=089cbeeec18c02ac3270c033f62935615d49d2ffd289b5afa19667018a374356", desc: "Palaces & lake-side sunsets.", longDesc: "Often called the 'Venice of the East', Udaipur offers a royal atmosphere perfect for couples. With its majestic palaces, quiet boat rides on Lake Pichola, and rooftop dining under the stars, it is the ultimate destination for a fairytale honeymoon." },
  { id:"manali", name: "Manali", state: "Himachal", tag: "Adventure", image: "https://www.naturetravelagency.com/uploads/1703234831best%20time%20to%20visit%20Manali%20for%20snowfall.jpg", desc: "Digital nomad hub with mountain charm.", longDesc: "Old Manali is the quintessential solo hub. It’s perfect for digital nomads looking for reliable Wi-Fi in cozy cafes, coupled with the raw beauty of the Himalayas. You can work during the day and head for a Bhrigu Lake trek on the weekend. The community here is incredibly welcoming, making it easy to form lifelong friendships." },
  { id: "goa", name: "South Goa", state: "Goa", tag: "Beach", image: "https://media.moustachescapes.com/location/1740561583.jpg", desc: "Private beaches and luxury.", longDesc: "South Goa is perfect for couples who want to enjoy the beach without the crowd. With its pristine, quiet sands and luxury boutique resorts, it offers a romantic backdrop where you can spend your days in a hammock and your evenings enjoying a candlelight dinner." },
  { id: "shimla", name: "Shimla", state: "Himachal", tag: "Classic", image: "https://www.naturetravelagency.com/uploads/1703234831best%20time%20to%20visit%20Manali%20for%20snowfall.jpg", desc: "Colonial charm & snowy peaks.", longDesc: "Shimla remains a timeless classic for honeymooners. Its colonial-era architecture, winding mountain roads, and cozy cafes offer a nostalgic and romantic vibe. Whether it's walking through the Ridge or staying in a quiet cottage, Shimla captures the essence of romance." },
  { id: "gokarna", name: "Gokarna", state: "Karnataka", tag: "Value", image: "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-3-attr-hero?qlt=82&ts=1742159961340", desc: "Beach life, low price tag.", longDesc: "Gokarna is the perfect alternative to expensive beach destinations. With simple beach shacks and budget-friendly cafes, you can enjoy sun, sand, and solitude while keeping your expenses well under control." },
  { id: "andaman-islands", name: "Havelock Island", state: "Andaman", tag: "Tropical", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1000", desc: "Crystal clear turquoise waters.", longDesc: "For couples who love the ocean, Havelock Island is a dream. White sand beaches, luxury water-front villas, and incredible sunset cruises make this a tropical honeymoon heaven. It's truly a hidden gem for newly-weds." },
  { id: "ooty", name: "Ooty", state: "Tamil Nadu", tag: "Nature", image: "https://clubmahindra.gumlet.io/blog/media/section_images/ultimate-o-8ac88a2da056a3d.jpg?w=376&dpr=2.6", desc: "The Queen of Hill Stations.", longDesc: "Ooty offers a blend of old-world charm and lush botanical beauty. The toy train ride through the Nilgiri hills and walks through the Rose Garden create a serene and romantic environment for couples to bond and relax." },
  { id: "jaisalmer", name: "Jaisalmer", state: "Rajasthan", tag: "Unique", image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-sam-sand-dunes-jaisalmer-city-hero?qlt=82&ts=1726660014904", desc: "Desert magic and starry nights.", longDesc: "For an unconventional and magical honeymoon, Jaisalmer offers desert camping under the stars. Experience golden sunsets over the dunes and luxury glamping in the Thar Desert—a unique adventure that you will cherish for a lifetime." }
];

const HoneymoonDestination = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 selection:bg-rose-500 selection:text-white">
      
      {/* Hero Section */}
      <header className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-gray-50 -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8">LOVE <span className="text-rose-500 italic">Escapes.</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Begin your beautiful chapter together in the most enchanting locations crafted for romance and unforgettable memories.
          </p>
          <button className="bg-gray-950 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all">Explore Destinations</button>
        </motion.div>
      </header>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-5xl font-black tracking-tight mb-4">Romantic Paradises</h2>
          <p className="text-gray-500 font-medium">8 handpicked getaways for couples who cherish privacy and beauty.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {honeymoonPlaces.map((dest, i) => (
            <motion.div whileHover={{ y: -12 }} key={i} className="group relative cursor-pointer">
              <div className="relative h-[190px] md:h-[290px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={dest.image} alt={dest.name}
                loading="lazy"
                decoding="async"
                fetchPriority="low"  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">{dest.tag}</span>
                </div>
                <div className="absolute bottom-4 left-8">
                  <h3 className="text-2xl font-black text-white leading-tight">{dest.name}</h3>
                  <p className="text-rose-300 font-bold text-sm tracking-wide">{dest.state}</p>
                  <Link to={`/destinations/${dest.id}`} className="flex text-sm md:text-2xl font-black text-white leading-tight mt-2">
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
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4"><Info size={40}/> Romance Dossier</h2>
        <div className="space-y-16">
          {honeymoonPlaces.map((dest, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-3xl font-black mb-4 text-gray-950">{dest.name}, {dest.state}</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-rose-500 pl-6">{dest.longDesc}</p>
              <div className="mt-8 flex gap-4 text-sm font-bold text-gray-500">
                <span className="flex items-center gap-1"><Heart size={16} className="text-rose-500"/> Romantic Setting</span>
                <span className="flex items-center gap-1"><Sparkles size={16}/> Luxury Vetted</span>
                <span className="flex items-center gap-1"><Star size={16}/> Couple Approved</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HoneymoonDestination;