import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Compass, Info, Star, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Best Destinations Database
const bestPlaces = [
  { id:"manali", name: "Manali", state: "Himachal", tag: "Adventure", image: "https://www.naturetravelagency.com/uploads/1703234831best%20time%20to%20visit%20Manali%20for%20snowfall.jpg", desc: "Digital nomad hub with mountain charm.", longDesc: "Old Manali is the quintessential solo hub. It’s perfect for digital nomads looking for reliable Wi-Fi in cozy cafes, coupled with the raw beauty of the Himalayas. You can work during the day and head for a Bhrigu Lake trek on the weekend. The community here is incredibly welcoming, making it easy to form lifelong friendships." },
  { id: "goa", name: "South Goa", state: "Goa", tag: "Beach", image: "https://media.moustachescapes.com/location/1740561583.jpg", desc: "Private beaches and luxury.", longDesc: "South Goa is perfect for couples who want to enjoy the beach without the crowd. With its pristine, quiet sands and luxury boutique resorts, it offers a romantic backdrop where you can spend your days in a hammock and your evenings enjoying a candlelight dinner." },
  
  { id: "gokarna", name: "Gokarna", state: "Karnataka", tag: "Value", image: "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-3-attr-hero?qlt=82&ts=1742159961340", desc: "Beach life, low price tag.", longDesc: "Gokarna is the perfect alternative to expensive beach destinations. With simple beach shacks and budget-friendly cafes, you can enjoy sun, sand, and solitude while keeping your expenses well under control." },
  { id: "rishikesh", name: "Rishikesh", state: "Uttarakhand", tag: "Spiritual", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUEJYMzJ3a4Y74HPHE5fHcKK58Z6ZMJl8vDlE2UXwA4Up5gLrLSMZVB8&s=10", desc: "The Yoga Capital of the World.", longDesc: "Rishikesh offers a perfect blend of thrill and tranquility. Whether you want to try white-water rafting on the Ganges or participate in a silent meditation retreat, the town's energy is unmatched. It is a world-class hub for spiritual growth and adventure." },
  { id:"ladakh", name: "Leh-Ladakh", state: "Ladakh", tag: "Wild", image: "https://www.kashmirtourpackage.org/blog/wp-content/uploads/2024/02/Leh-Ladakh.jpg", desc: "Rugged mountains and starry skies.", longDesc: "Ladakh tests your resilience and rewards you with otherworldly beauty. Solo travelers here often bond over shared taxi rides or motorcycling expeditions. The silence of the high-altitude deserts and the kindness of the local homestays create a transformative experience for anyone traveling solo." },
   {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tag: "Heritage",
    image: "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Jaipur.jpg?w=1000&ssl=1",
    desc: "The Pink City’s royal grandeur.",
    longDesc: "Jaipur offers a royal experience with its magnificent forts and bustling bazaars. As a solo traveler, the city is incredibly easy to navigate. Spend your days hopping between the Hawa Mahal and Amer Fort, and your evenings getting lost in the colorful markets of Johari Bazaar. It's a goldmine for photography lovers and culture seekers."
  },
  { id: "rishikesh", name: "Rishikesh", state: "Uttarakhand", tag: "Low-Cost", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUEJYMzJ3a4Y74HPHE5fHcKK58Z6ZMJl8vDlE2UXwA4Up5gLrLSMZVB8&s=10", desc: "Spiritual stay, minimal spend.", longDesc: "Rishikesh offers world-class backpacker hostels that are both cheap and social. You can enjoy free river-side views, affordable yoga classes, and delicious local food, making it an excellent choice for a budget-friendly solo adventure." },
  { id: "hampi", name: "Hampi", state: "Karnataka", tag: "Heritage", image: "https://s7ap1.scene7.com/is/image/incredibleindia/a-journey-through-masthead-hero-1?qlt=82&ts=1727368343764", desc: "Ancient ruins and history.", longDesc: "Hampi is a dreamer's paradise and a UNESCO World Heritage site. Stepping into Hampi feels like traveling back to the glory of the Vijayanagara Empire. The massive boulders and temple ruins create a landscape that is truly unique and historically profound." }
];

const BestPlace = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 selection:bg-indigo-600 selection:text-white">
      
      {/* Hero Section */}
      <header className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-gray-50 -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8">TOP <span className="text-indigo-600 italic">Picks.</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover the highest-rated destinations that offer unparalleled experiences, breathtaking views, and lifelong memories.
          </p>
          <button className="bg-gray-950 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all">Explore Top Places</button>
        </motion.div>
      </header>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black tracking-tight mb-4">Elite Destinations</h2>
            <p className="text-gray-500 font-medium">Curated list of our most cherished travel spots.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestPlaces.map((dest, i) => (
            <motion.div whileHover={{ y: -12 }} key={i} className="group relative cursor-pointer">
              <div className="relative h-[190px] md:h-[290px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">{dest.tag}</span>
                </div>
                <div className="absolute bottom-4 left-8">
                  <h3 className="text-2xl font-black text-white leading-tight">{dest.name}</h3>
                  <p className="text-indigo-300 font-bold text-sm tracking-wide">{dest.state}</p>
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
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4"><Info size={40}/> Destination Insights</h2>
        <div className="space-y-16">
          {bestPlaces.map((dest, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-3xl font-black mb-4 text-indigo-950">{dest.name}, {dest.state}</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-indigo-500 pl-6">{dest.longDesc}</p>
              <div className="mt-8 flex gap-4 text-sm font-bold text-gray-500">
                <span className="flex items-center gap-1"><MapPin size={16}/> Highly Recommended</span>
                <span className="flex items-center gap-1"><ShieldCheck size={16}/> Top Rated</span>
                <span className="flex items-center gap-1"><Star size={16}/> Verified Experience</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BestPlace;