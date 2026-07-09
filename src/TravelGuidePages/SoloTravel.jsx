import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Compass, Info, Star, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Content Database
const destinations = [
    {id:"hampi", name: "Hampi", state: "Karnataka", tag: "Heritage", image: "https://s7ap1.scene7.com/is/image/incredibleindia/a-journey-through-masthead-hero-1?qlt=82&ts=1727368343764", desc: "Ancient ruins and boulder-strewn landscapes.", longDesc: "Hampi is a dreamer's paradise. As a UNESCO World Heritage site, it offers a glimpse into the Vijayanagara Empire. Solo travelers love it for its laid-back 'Hippie Island' vibe, cheap guest houses, and the ease of renting bicycles to explore the ruins at your own pace. The sunrise at Matanga Hill is a spiritual experience." },
  { id:"manali", name: "Manali", state: "Himachal", tag: "Adventure", image: "https://www.naturetravelagency.com/uploads/1703234831best%20time%20to%20visit%20Manali%20for%20snowfall.jpg", desc: "Digital nomad hub with mountain charm.", longDesc: "Old Manali is the quintessential solo hub. It’s perfect for digital nomads looking for reliable Wi-Fi in cozy cafes, coupled with the raw beauty of the Himalayas. You can work during the day and head for a Bhrigu Lake trek on the weekend. The community here is incredibly welcoming, making it easy to form lifelong friendships." },
  {id:"udaipur",  name: "Udaipur", state: "Rajasthan", tag: "Culture", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/763687523.jpg?k=089cbeeec18c02ac3270c033f62935615d49d2ffd289b5afa19667018a374356", desc: "Lakes, palaces, and artistic cafes.", longDesc: "Udaipur is safe, clean, and visually stunning. The city is highly walkable, which is great for solo explorers. Spend your evenings at Ambrai Ghat, take a local Rajasthani cooking class, or simply enjoy a boat ride on Lake Pichola. It’s a city that feels like a warm hug for anyone traveling alone." },
  { id:"kerala", name: "Kerala", state: "Kerala", tag: "Relax", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000", desc: "Cliff-side serenity and beach vibes.", longDesc: "If you need to disconnect to reconnect, Varkala is your spot. The unique red cliffs overlooking the Arabian Sea provide a meditative backdrop. Practice yoga, surf the waves, and enjoy fresh organic meals in cliff-side cafes. It is quieter than Goa and deeply rejuvenating." },
  {id:"rishikesh",  name: "Rishikesh", state: "Uttarakhand", tag: "Spiritual", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUEJYMzJ3a4Y74HPHE5fHcKK58Z6ZMJl8vDlE2UXwA4Up5gLrLSMZVB8&s=10", desc: "The Yoga Capital of the World.", longDesc: "Rishikesh isn't just for thrill-seekers; it’s a sanctuary for the soul. The hostels here are world-class, fostering a community of travelers who love yoga, meditation, and white-water rafting. The Ganga Aarti at Parmarth Niketan is a must-see for every solo traveler." },
  { id:"ladakh", name: "Leh-Ladakh", state: "Ladakh", tag: "Wild", image: "https://www.kashmirtourpackage.org/blog/wp-content/uploads/2024/02/Leh-Ladakh.jpg", desc: "Rugged mountains and starry skies.", longDesc: "Ladakh tests your resilience and rewards you with otherworldly beauty. Solo travelers here often bond over shared taxi rides or motorcycling expeditions. The silence of the high-altitude deserts and the kindness of the local homestays create a transformative experience for anyone traveling solo." },
  { id:"gokarna",
    name: "Gokarna",
    state: "Karnataka", 
    tag: "Beach", 
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-3-attr-hero?qlt=82&ts=1742159961340",
     desc: "Unspoiled beaches and quiet trails.", longDesc: "Gokarna is the perfect alternative to the commercial noise of Goa. The beach-hopping trek from Om Beach to Paradise Beach is a solo traveler’s delight. You can stay in beach shacks, enjoy bonfire nights with fellow travelers, and truly enjoy solitude." },
  {id:"pondicherry",  name: "Pondicherry", state: "Tamil Nadu", tag: "Colonial", image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Pondicherry-Travel-Guide-840x425.jpg", desc: "French quarters and serene vibes.", longDesc: "The White Town of Pondicherry feels like a fragment of France dropped in India. The bicycle culture, yellow-painted buildings, and the nearby Auroville make it an intellectually stimulating place to visit solo. It’s peaceful, artsy, and very safe for everyone." },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    tag: "Beach",
    image: "https://media.moustachescapes.com/location/1740561583.jpg", // Aap apni URL use kar sakte hain
    desc: "Sun, sand, and the ultimate solo retreat.",
    longDesc: "Goa is a perfect blend of lively beach shacks and quiet coastal paths. For solo travelers, it offers a vibrant social scene where you can meet people from across the globe. Whether you are exploring the heritage of South Goa or the nightlife of the North, it is one of the safest and most social destinations for an independent wanderer."
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tag: "Heritage",
    image: "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Jaipur.jpg?w=1000&ssl=1",
    desc: "The Pink City’s royal grandeur.",
    longDesc: "Jaipur offers a royal experience with its magnificent forts and bustling bazaars. As a solo traveler, the city is incredibly easy to navigate. Spend your days hopping between the Hawa Mahal and Amer Fort, and your evenings getting lost in the colorful markets of Johari Bazaar. It's a goldmine for photography lovers and culture seekers."
  }
];

const SoloTravel = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 selection:bg-indigo-600 selection:text-white">
      
      {/* Hero Section */}
      <header className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-gray-50 -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8">SOLO <span className="text-indigo-600 italic">Vibes.</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Traveling alone is the most profound act of self-love you can perform. Discover our curated collection of India's most solo-friendly gems.
          </p>
          <button className="bg-gray-950 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all">Start Your Odyssey</button>
        </motion.div>
      </header>

      {/* Destination Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
  <div className="flex flex-col md:flex-row justify-between items-end mb-12">
    <div>
      <h2 className="text-5xl font-black tracking-tight mb-4">The 10 Paradises</h2>
      <p className="text-gray-500 font-medium">Handpicked safe havens for your next solo odyssey.</p>
    </div>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {destinations.map((dest, i) => (
      <motion.div 
        whileHover={{ y: -12 }} 
        key={i} 
        className="group relative cursor-pointer"
      >
        {/* Card Container */}
        <div className="relative h-[190px] md:h-[290px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
          
          {/* Image Layer */}
          <img 
            src={dest.image} 
            alt={dest.name} 
            loading="lazy"
                decoding="async"
                fetchPriority="low" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

          {/* Badge & Content */}
          <div className="absolute top-6 left-6">
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
              {dest.tag}
            </span>
          </div>

          <div className="absolute bottom-4 left-8">
            <h3 className="text-2xl font-black text-white leading-tight">{dest.name}</h3>
            <p className="text-indigo-300 font-bold text-sm tracking-wide">{dest.state}</p>
             <Link to={`/destinations/${dest.id}`} className="flex text-sm md:text-2xl font-black text-white leading-tight">
          Read more <ArrowRight size={18}/></Link>
          </div>
          
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Deep Dive Details Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4"><Info size={40}/> Expert Dossier (Solo Guide)</h2>
        <div className="space-y-16">
          {destinations.map((dest, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-3xl font-black mb-4 text-indigo-950">{dest.name}, {dest.state}</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-indigo-500 pl-6">{dest.longDesc}</p>
              <div className="mt-8 flex gap-4 text-sm font-bold text-gray-500">
                <span className="flex items-center gap-1"><MapPin size={16}/> Solo-Friendly</span>
                <span className="flex items-center gap-1"><ShieldCheck size={16}/> Vetted Stay</span>
                <span className="flex items-center gap-1"><Star size={16}/> High Community Rating</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <footer className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gray-950 rounded-[3rem] p-16 text-white text-center">
          <h2 className="text-4xl font-black mb-8">Travel Safely. Travel Fearlessly.</h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12">
            Solo travel requires preparation. Always share your itinerary with family, carry a power bank, 
            trust your intuition, and never hesitate to ask locals for help. Your confidence is your biggest asset.
          </p>
          <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold">Read Full Safety Handbook</button>
        </div>
      </footer>
    </div>
  );
};

export default SoloTravel;