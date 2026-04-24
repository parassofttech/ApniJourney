

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, Compass, Star, ArrowRight, Filter } from "lucide-react";
import Footer from "../Home/Footer";

const destinationsData = [
  {
    name: "Manali",
    id: "manali",
    category: "Mountains",
    location: "Himachal Pradesh, India",
    description: "A paradise for adventure lovers with snow-capped peaks, pine forests, and vibrant cafes.",
    image: "https://www.naturetravelagency.com/uploads/1703234831best%20time%20to%20visit%20Manali%20for%20snowfall.jpg",
    rating: 4.8
  },
  {
    name: "Jaipur",
    id: "jaipur",
    category: "Heritage",
    location: "Rajasthan, India",
    description: "Explore the Pink City’s royal palaces, bustling bazaars, and timeless forts showcasing Rajput culture.",
    image: "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Jaipur.jpg?w=1000&ssl=1",
    rating: 4.7
  },
  {
    name: "Kerala",
    id: "kerala",
    category: "Nature",
    location: "Kerala, India",
    description: "Cruise through tranquil canals on houseboats surrounded by lush greenery and serene coconut palms.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000",
    rating: 4.9
  },
  {
    name: "Ladakh",
    id: "ladakh",
    category: "Mountains",
    location: "Leh, India",
    description: "Witness breathtaking landscapes, monasteries, and starry skies in India’s high-altitude desert.",
    image: "https://www.kashmirtourpackage.org/blog/wp-content/uploads/2024/02/Leh-Ladakh.jpg",
    rating: 4.9
  },
  {
    name: "Darjeeling",
    id: "darjeeling",
    category: "Mountains",
    location: "West Bengal, India",
    description: "Ride the toy train and sip world-famous tea amidst misty hills and panoramic Himalayan views.",
    image: "https://hikerwolf.com/wp-content/uploads/2020/04/Darjeeling-toy-train-route.jpg",
    rating: 4.6
  },
  {
    name: "Goa",
    id: "goa",
    category: "Beaches",
    location: "Goa, India",
    description: "Golden beaches, vibrant nightlife, Portuguese heritage — Goa is India’s coastal charm.",
    image: "https://media.moustachescapes.com/location/1740561583.jpg",
    rating: 4.8
  },
  {
    name: "Rishikesh",
    id: "rishikesh",
    category: "Spiritual",
    location: "Uttarakhand, India",
    description: "The yoga capital of the world — perfect for meditation, rafting, and spiritual rejuvenation.",
    image: "https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg",
    rating: 4.7
  },
  {
    name: "Taj Mahal",
    id: "taj-mahal",
    category: "Heritage",
    location: "Uttar Pradesh, India",
    description: "Home to the majestic Taj Mahal — a timeless symbol of love and one of the Seven Wonders.",
    image: "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Agra-imghh.jpg?w=1000&ssl=1",
    rating: 5.0
  },
  {
    name: "Varanasi",
    id: "varanasi",
    category: "Spiritual",
    location: "Uttar Pradesh, India",
    description: "Experience spiritual India along the sacred Ganges — where life, death, and devotion meet.",
    image: "https://www.wildernesstravel.com/wp-content/uploads/2024/11/varanasi-ganges-river-india-1680x826.jpg",
    rating: 4.8
  },
  {
    name: "Andaman Islands",
    id: "andaman-islands",
    category: "Beaches",
    location: "Bay of Bengal, India",
    description: "Crystal-clear waters, coral reefs, and tropical adventures await in this island paradise.",
    image: "https://www.easeindiatrip.com/blog/wp-content/uploads/2024/11/Andaman-and-Nicobar-Islands-04.jpg",
    rating: 4.9
  },
  {
    name: "Shimla",
    id: "shimla",
    category: "Mountains",
    location: "Himachal Pradesh, India",
    description: "The Queen of Hills — known for colonial charm, snowy peaks, and scenic toy train rides.",
    image: "https://s3.india.com/wp-content/uploads/2024/05/Feature-Image_-Shimla-2.jpg",
    rating: 4.5
  },
  {
    name: "Udaipur",
    id: "udaipur",
    category: "Heritage",
    location: "Rajasthan, India",
    description: "The City of Lakes — a romantic destination with stunning palaces and shimmering waters.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/763687523.jpg?k=089cbeeec18c02ac3270c033f62935615d49d2ffd289b5afa19667018a374356",
    rating: 4.8
  },
  {
    name: "Srinagar",
    id: "srinagar",
    category: "Nature",
    location: "Jammu & Kashmir, India",
    description: "Famous for Dal Lake houseboats, Mughal gardens, and snow-capped peaks — heaven on earth.",
    image: "https://www.distinctdestinations.in/DistinctDestinationsBackEndImg/BlogImage/srinagar-city-of-gardens-lakes-and-the-gateway-to-the-paradise-on-earth-valley-L-distinctdestinations.jpg",
    rating: 4.9
  },
  {
    name: "Chhattisgarh",
    id: "chhattisgarh",
    category: "Nature",
    location: "Chhattisgarh, India",
    description: "Untouched beauty with waterfalls like Chitrakote and lush Kanger Valley forests.",
    image: "https://static.toiimg.com/photo/61783642/.jpg",
    rating: 4.3
  },
  {
    name: "Cherrapunji",
    id: "cherrapunji",
    category: "Nature",
    location: "Meghalaya, India",
    description: "The wettest place on Earth — home to living root bridges and lush, emerald valleys.",
    image: "https://imgcld.yatra.com/ytimages/image/upload/v1517482183/AdvNation/ANN_DES76/ann_bottom_Cherrapunji_mLjALE.jpg",
    rating: 4.7
  },
  {
    name: "Ooty",
    id: "ooty",
    category: "Mountains",
    location: "Tamil Nadu, India",
    description: "A charming hill station with tea gardens, lakes, and the famous Nilgiri Mountain Railway.",
    image: "https://clubmahindra.gumlet.io/blog/media/section_images/ultimate-o-8ac88a2da056a3d.jpg?w=376&dpr=2.6",
    rating: 4.5
  },
  {
    name: "Mysore",
    id: "mysore",
    category: "Heritage",
    location: "Karnataka, India",
    description: "A city of heritage and culture, best known for its grand palace and Dussehra festivities.",
    image: "https://cdn.britannica.com/27/242227-050-48358A10/Mysore-Palace-Mysuru-Karnataka-India.jpg",
    rating: 4.6
  },
  {
    name: "Rameshwaram",
    id: "rameshwaram",
    category: "Spiritual",
    location: "Tamil Nadu, India",
    description: "A sacred coastal town linked to the Ramayana, with stunning sea bridges and temples.",
    image: "https://www.tirthayatra.org/wp-content/uploads/2025/03/Rameswaram-_-Pilgrim-Centres-1.png",
    rating: 4.7
  },
  {
    name: "Pondicherry",
    id: "pondicherry",
    category: "Beaches",
    location: "Puducherry, India",
    description: "A French Riviera of the East — colorful houses, seaside cafes, and serene beaches.",
    image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Pondicherry-Travel-Guide-840x425.jpg",
    rating: 4.6
  },
  {
    name: "Rann of Kutch",
    id: "rann-of-kutch",
    category: "Nature",
    location: "Gujarat, India",
    description: "A surreal white salt desert famous for its vibrant Rann Utsav and starry night skies.",
    image: "https://www.rannutsav.in/wp-content/uploads/2025/07/Road-to-Heaven-Kutch-2-1024x495.jpg",
    rating: 4.8
  },
  {
    name: "Mumbai",
    id: "mumbai",
    category: "Metropolitan",
    location: "Maharashtra, India",
    description: "The city of dreams — where modernity meets heritage, and the energy never fades.",
    image: "https://greatruns.com/wp-content/uploads/2017/04/mumbai-cover.jpeg",
    rating: 4.7
  },
  {
    name: "Hyderabad",
    id: "hyderabad",
    category: "Metropolitan",
    location: "Telangana, India",
    description: "A blend of old-world charm and modern tech — from Charminar to world-class Biryani.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1742190636845",
    rating: 4.6
  },
  {
    name: "Amritsar",
    id: "amritsar",
    category: "Spiritual",
    location: "Punjab, India",
    description: "Home to the Golden Temple — the spiritual heart of Punjab with rich history and food.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAS5uiPHNbQ6-JcP_f10nVuuA_cC4kz4ipg&s",
    rating: 4.9
  },
  {
    name: "Jaisalmer",
    id: "jaisalmer",
    category: "Heritage",
    location: "Rajasthan, India",
    description: "The Golden City — famous for its sandstone fort, desert safaris, and royal heritage.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-sam-sand-dunes-jaisalmer-city-hero?qlt=82&ts=1726660014904",
    rating: 4.7
  },
  {
    name: "Mount Abu",
    id: "mount-abu",
    category: "Mountains",
    location: "Rajasthan, India",
    description: "Rajasthan’s only hill station, known for Dilwara Temples and scenic Nakki Lake.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Mount_Abu.jpg",
    rating: 4.4
  },
  {
    name: "Kodaikanal",
    id: "kodaikanal",
    category: "Mountains",
    location: "Tamil Nadu, India",
    description: "The Princess of Hill Stations — misty valleys, lakes, and pine forests.",
    image: "https://www.indiantempletour.com/wp-content/uploads/2022/08/Kodaikanal-Package-Tour.jpg",
    rating: 4.6
  },
  {
    name: "Hampi",
    id: "hampi",
    category: "Heritage",
    location: "Karnataka, India",
    description: "A UNESCO World Heritage Site with stunning ruins of the Vijayanagara Empire.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/a-journey-through-masthead-hero-1?qlt=82&ts=1727368343764",
    rating: 4.8
  },
  {
    name: "Gokarna",
    id: "gokarna",
    category: "Beaches",
    location: "Karnataka, India",
    description: "A peaceful beach town offering spiritual vibes and pristine coastlines.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Delight_india.jpg",
    rating: 4.5
  },
  {
    name: "Coorg",
    id: "coorg",
    category: "Nature",
    location: "Karnataka, India",
    description: "The Scotland of India — coffee plantations, waterfalls, and misty hills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdreTvnBvRz4qDbNXLJwIVkZFLnz1ovMGrA&s",
    rating: 4.7
  },
  {
    name: "Khajuraho",
    id: "khajuraho",
    category: "Heritage",
    location: "Madhya Pradesh, India",
    description: "World-famous temples known for intricate sculptures and unique architecture.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-l2YRKxGRskifVOhOi-Ko-9IoVedYqO2rQw&s",
    rating: 4.6
  },
  {
    name: "Bhopal",
    id: "bhopal",
    category: "Metropolitan",
    location: "Madhya Pradesh, India",
    description: "The City of Lakes — blending natural beauty with historical monuments.",
    image: "https://www.treebo.com/blog/wp-content/uploads/2022/11/Header-image-Bhopal.jpg",
    rating: 4.3
  },
  {
    name: "Pachmarhi",
    id: "pachmarhi",
    category: "Mountains",
    location: "Madhya Pradesh, India",
    description: "A serene hill station surrounded by caves, waterfalls, and dense forests.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CPz5-ZBaKGYPDX8Z_nITDERdw276WDXZGQ&s",
    rating: 4.5
  },
  {
    name: "Gangtok",
    id: "gangtok",
    category: "Mountains",
    location: "Sikkim, India",
    description: "A gateway to the Himalayas with monasteries, lakes, and mountain views.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-3-attr-hero?qlt=82&ts=1742159961340",
    rating: 4.8
  },
  {
    name: "Ziro Valley",
    id: "ziro-valley",
    category: "Nature",
    location: "Arunachal Pradesh, India",
    description: "A tranquil valley known for rice fields, tribal culture, and music festivals.",
    image: "https://s3.india.com/wp-content/uploads/2025/07/What-Makes-Ziro-Valley-So-Special_-10-Things-Thatll-Blow-Your-Mind.jpg",
    rating: 4.6
  },
  {
    name: "Tawang",
    id: "tawang",
    category: "Mountains",
    location: "Arunachal Pradesh, India",
    description: "A spiritual town with India’s largest monastery and snow-covered landscapes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/TawangMonastery-ArunachalPradesh-1.jpg",
    rating: 4.7
  },
  {
    name: "Kaziranga",
    id: "kaziranga",
    category: "Nature",
    location: "Assam, India",
    description: "A wildlife haven famous for one-horned rhinoceroses and lush grasslands.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Beauty_of_Kaziranga_National_Park.jpg",
    rating: 4.8
  },
  {
    name: "Majuli",
    id: "majuli",
    category: "Nature",
    location: "Assam, India",
    description: "The world’s largest river island, rich in culture and natural beauty.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScl1MGFZLJF2tLp9K1S8hMrZvgpNb9FEXwDw&s",
    rating: 4.5
  },
  {
    name: "Dzukou Valley",
    id: "dzukou-valley",
    category: "Nature",
    location: "Nagaland, India",
    description: "A breathtaking valley known for seasonal flowers and trekking trails.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/8e/e2/01/get-lost.jpg?w=1200&h=-1&s=1",
    rating: 4.7
  },
  {
    name: "Aizawl",
    id: "aizawl",
    category: "Mountains",
    location: "Mizoram, India",
    description: "A scenic hill city with vibrant culture and panoramic mountain views.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQLbojf7tMAU51pR_OVxCfCxhHcpH7yYANg&s",
    rating: 4.4
  },
  {
    name: "Ujjain",
    id: "ujjain",
    category: "Spiritual",
    location: "Madhya Pradesh, India",
    description: "One of the holiest cities in India, famous for Mahakaleshwar Jyotirlinga.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1E965sW7KBtel7O9B2BFEBAXL5nnFuVFLg&s",
    rating: 4.8
  },
  {
    name: "Pushkar",
    id: "pushkar",
    category: "Spiritual",
    location: "Rajasthan, India",
    description: "A sacred town known for the Brahma Temple and the annual Camel Fair.",
    image: "https://images.prismic.io/travelfika/aAoliPIqRLdaBkoF_image_1.webp?auto=format,compress",
    rating: 4.5
  },
  {
    name: "Mahabaleshwar",
    id: "mahabaleshwar",
    category: "Mountains",
    location: "Maharashtra, India",
    description: "A cool hill station famous for strawberries, viewpoints, and waterfalls.",
    image: "https://cdnbbsr.s3waas.gov.in/s37cac11e2f46ed46c339ec3d569853759/uploads/2025/01/202501161323928359.jpg",
    rating: 4.6
  },
  {
    name: "Lonavala",
    id: "lonavala",
    category: "Mountains",
    location: "Maharashtra, India",
    description: "A popular weekend getaway with lush greenery and misty hills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCwtQm6Z4XVYVm6g1BO_oaaz0g-a16ucwjQ&s",
    rating: 4.5
  },
  {
    name: "Ajanta-Ellora",
    id: "ajanta-ellora",
    category: "Heritage",
    location: "Maharashtra, India",
    description: "Ancient rock-cut caves showcasing remarkable Buddhist and Hindu art.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0a6eNoRtMVO18H4os0ugvR_WSO-Snibtu-A&s",
    rating: 4.8
  },
  {
    name: "Kanyakumari",
    id: "kanyakumari",
    category: "Beaches",
    location: "Tamil Nadu, India",
    description: "The southernmost tip of India where three seas meet in a beautiful confluence.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/bb/cf/09/thiruvalluvar-statue.jpg?w=1200&h=700&s=1",
    rating: 4.7
  },
  {
    name: "Varkala",
    id: "varkala",
    category: "Beaches",
    location: "Kerala, India",
    description: "A unique cliff-side beach destination with yoga retreats and sunsets.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl3ccrRi84WuNN4PZY6iHfPlamAcWR9UfKQ&s",
    rating: 4.6
  },
  {
    name: "Alleppey",
    id: "alleppey",
    category: "Nature",
    location: "Kerala, India",
    description: "Famous for backwaters, houseboats, and tranquil lagoons.",
    image: "https://media4.thrillophilia.com/images/photos/000/012/900/original/1551428022_alleppeyPlaces_feature.png",
    rating: 4.9
  },
  {
    name: "Kumbhalgarh",
    id: "kumbhalgarh",
    category: "Heritage",
    location: "Rajasthan, India",
    description: "Known for the Great Wall of India and its majestic hilltop fort.",
    image: "https://www.tripsavvy.com/thmb/aAGwc8xIxFZ6IAd-MsJjomh80jE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-186361655-5c1b7361c9e77c00019049d3.jpg",
    rating: 4.7
  },
  {
    name: "Mandawa",
    id: "mandawa",
    category: "Heritage",
    location: "Rajasthan, India",
    description: "A heritage town famous for painted havelis and royal forts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRjBrDcXeJbktSeSqkFpvkM1fHlsuQXKRrw&s",
    rating: 4.3
  },
  {
    name: "Patna",
    id: "patna",
    category: "Metropolitan",
    location: "Bihar, India",
    description: "An ancient city with deep historical roots dating back to the Magadha Empire.",
    image: "https://chanakyapatna.com/wp-content/uploads/2025/02/top-10-things-to-do-in-patna.jpg",
    rating: 4.1
  },
  {
    name: "Nalanda",
    id: "nalanda",
    category: "Heritage",
    location: "Bihar, India",
    description: "Home to the ruins of the world’s first residential university.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAt7WI2k8y8V6arnjJWfI8k18_RPOWhS7KVA&s",
    rating: 4.6
  },
  {
    name: "Bhubaneswar",
    id: "bhubaneswar",
    category: "Heritage",
    location: "Odisha, India",
    description: "The Temple City of India, rich in ancient architecture and culture.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJf0FjybTDTWe5D4Icb-wfn5tQRMRB4VlMdw&s",
    rating: 4.5
  }
];

const Destinations = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Mountains", "Beaches", "Heritage", "Spiritual"];

  const filteredDestinations = destinationsData.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || place.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400/30 via-green-500/30 to-yellow-400/30 -z-10 ">
      
      {/* 🏔️ IMMERSIVE HERO SECTION */}
      <section className="relative w-full min-h-[75vh] md:h-[60vh] flex items-center justify-center py-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center w-full ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="bg-white/20 backdrop-blur-md text-cyan-200 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-white/20 mb-4">
              Explore the Incredible
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Our <span className="text-cyan-400">Destinations</span>
            </h1>
          </motion.div>

          {/* 🔍 Interactive Search & Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full md:max-w-5xl mx-auto bg-white rounded-2xl md:rounded-full p-3 md:p-2 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-2">
            <div className="flex items-center flex-1 px-4 w-full">
              <Search className="text-gray-400 w-5 h-5 mr-2" />
              <input 
                type="text" 
                placeholder="Search by city or state..."
                className="w-full py-3 outline-none text-gray-700"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="hidden md:block h-8 w-[1px] bg-gray-200"></div>

            <div className="flex overflow-x-auto gap-2 p-1 no-scrollbar w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    filter === cat ? "bg-cyan-500 text-white shadow-lg" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🌏 DESTINATIONS GRID */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex items-end justify-between mb-12">
            <div className="text-left">
                <h2 className="text-4xl font-black text-gray-900">Popular Getaways</h2>
                <p className="text-gray-500 mt-2">Carefully curated experiences for every traveler.</p>
            </div>
            <div className="hidden md:flex gap-2">
                <div className="p-3 bg-white shadow-md rounded-full text-cyan-500 cursor-pointer hover:bg-cyan-500 hover:text-white transition">
                    <Compass className="w-6 h-6" />
                </div>
            </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          <AnimatePresence>
            {filteredDestinations.map((place) => (
              <motion.div
                layout
                key={place.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-800">{place.rating || "4.5"}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <button 
                       onClick={() => navigate(`/destinations/${place.id}`)}
                       className="w-full bg-cyan-400 text-blue-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                        Explore Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    { place.location}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {place.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400 italic">No destinations found matching your search.</h3>
          </div>
        )}
      </section>
      <Footer/>
    </div>
  );
};

export default Destinations;