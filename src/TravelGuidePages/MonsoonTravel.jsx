import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, MapPin, Leaf, Info, Star, ArrowRight, Umbrella } from 'lucide-react';
import { Link } from 'react-router-dom';

// Monsoon Destinations Database
const monsoonPlaces = [
  { id: "coorg", name: "Coorg", state: "Karnataka", tag: "Greenery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdreTvnBvRz4qDbNXLJwIVkZFLnz1ovMGrA&s", desc: "Coffee estates in the rain.", longDesc: "Coorg transforms into a lush emerald paradise during the monsoon. The smell of wet earth and coffee beans, combined with misty hills and cascading waterfalls, makes it a serene retreat. It is the perfect place to enjoy a book while the rain pours outside." },
  { id: "cherrapunji", name: "Cherrapunji", state: "Meghalaya", tag: "Rainy", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1000", desc: "The wettest place on Earth.", longDesc: "Experience the true essence of monsoon in Cherrapunji. With dramatic waterfalls like Nohkalikai and living root bridges, the landscape becomes incredibly vibrant. It’s a surreal experience to witness nature in its most raw and rain-drenched form." },
  { id: "lonavala", name: "Lonavala", state: "Maharashtra", tag: "Mist", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCwtQm6Z4XVYVm6g1BO_oaaz0g-a16ucwjQ&s", desc: "Sahyadri’s mist-covered hills.", longDesc: "Lonavala is a monsoon classic. As the rains hit the Sahyadri mountains, the entire region is covered in a thick blanket of fog and greenery. Ideal for short drives, hot chai, and watching the clouds dance through the valleys." },
   { id: "ooty", name: "Ooty", state: "Tamil Nadu", tag: "Nature", image: "https://clubmahindra.gumlet.io/blog/media/section_images/ultimate-o-8ac88a2da056a3d.jpg?w=376&dpr=2.6", desc: "The Queen of Hill Stations.", longDesc: "Ooty offers a blend of old-world charm and lush botanical beauty. The toy train ride through the Nilgiri hills and walks through the Rose Garden create a serene and romantic environment for couples to bond and relax." },
  { id: "udaipur", name: "Udaipur", state: "Rajasthan", tag: "Lakes", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/763687523.jpg?k=089cbeeec18c02ac3270c033f62935615d49d2ffd289b5afa19667018a374356", desc: "The City of Lakes in the rain.", longDesc: "Monsoon brings a new life to the lakes of Udaipur. The city looks clean, vibrant, and incredibly peaceful when it rains. Sitting by the Fateh Sagar lake with local snacks while it drizzles is an experience that captures the city's true charm." },
  { id: "mahabaleshwar", name: "Mahabaleshwar", state: "Maharashtra", tag: "Hilltop", image: "https://cdnbbsr.s3waas.gov.in/s37cac11e2f46ed46c339ec3d569853759/uploads/2025/01/202501161323928359.jpg", desc: "Strawberry fields and fog.", longDesc: "Known for its strawberries, Mahabaleshwar during the monsoon is all about deep greens and cool breezes. The viewpoints offer a breathtaking spectacle of endless clouds and rain-fed landscapes, perfect for those seeking tranquility." },
   { id: "pondicherry", name: "Pondicherry", state: "Tamil Nadu", tag: "Savings", image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Pondicherry-Travel-Guide-840x425.jpg", desc: "French charm, budget price.", longDesc: "Pondicherry is great for those who love walking or cycling. Most of the charm lies in wandering the streets of the White Town, which costs nothing. Many affordable hostels and local cafes offer great vibes without a heavy price tag." },
  { id: "gangtok", name: "Gangtok", state: "Sikkim", tag: "Mountains", image: "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-3-attr-hero?qlt=82&ts=1742159961340", desc: "Clouds over the Himalayas.", longDesc: "Gangtok in the monsoon is a mystical experience. The clouds play hide and seek with the peaks, and the mountain streams are in full force. It’s a great destination for those who find beauty in the moody, rain-filled Himalayan atmosphere." }
];

const MonsoonTravel = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 selection:bg-emerald-500 selection:text-white">
      
      {/* Hero Section */}
      <header className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-gray-50 -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8">RAINY <span className="text-emerald-600 italic">Bliss.</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Embrace the magic of the monsoon. Discover destinations where rain breathes life into nature's most beautiful landscapes.
          </p>
          <button className="bg-gray-950 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all">Explore Rainy Gems</button>
        </motion.div>
      </header>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-5xl font-black tracking-tight mb-4">Monsoon Paradises</h2>
          <p className="text-gray-500 font-medium">8 handpicked locations that become magical during the rainy season.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {monsoonPlaces.map((dest, i) => (
            <motion.div whileHover={{ y: -12 }} key={i} className="group relative cursor-pointer">
              <div className="relative h-[190px] md:h-[290px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">{dest.tag}</span>
                </div>
                <div className="absolute bottom-4 left-8">
                  <h3 className="text-2xl font-black text-white leading-tight">{dest.name}</h3>
                  <p className="text-emerald-300 font-bold text-sm tracking-wide">{dest.state}</p>
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
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4"><Info size={40}/> Monsoon Dossier</h2>
        <div className="space-y-16">
          {monsoonPlaces.map((dest, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-3xl font-black mb-4 text-gray-950">{dest.name}, {dest.state}</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-emerald-500 pl-6">{dest.longDesc}</p>
              <div className="mt-8 flex gap-4 text-sm font-bold text-gray-500">
                <span className="flex items-center gap-1"><CloudRain size={16} className="text-emerald-500"/> Rain Ready</span>
                <span className="flex items-center gap-1"><Leaf size={16}/> Nature's Best</span>
                <span className="flex items-center gap-1"><Umbrella size={16}/> Scenic Beauty</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MonsoonTravel;