import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: "goa",
    title: "Goa: The Paradise Beyond Beaches 🌴",
    image: "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Goa-Travel.jpg?w=1000&ssl=1",
    date: "October 10, 2025",
    excerpt:
      "Goa’s charm lies not only in its beaches but also in its villages, art cafés, and backwater adventures. Explore Goa like never before.",
  },
  {
    id: "ladakh",
    title: "Leh-Ladakh: Journey to the Roof of the World 🏔️",
    image: "https://www.kashmirtourpackage.org/blog/wp-content/uploads/2024/02/Leh-Ladakh.jpg",
    date: "September 25, 2025",
    excerpt:
      "A high-altitude wonderland of monasteries, mountain passes, and crystal-clear lakes that redefine adventure and peace together.",
  },
  {
    id: "varanasi",
    title: "Varanasi: Eternal City of Lights 🕉️",
    image: "https://d22eux7aqicogj.cloudfront.net/assets/destination-hero-image/varanasi.webp",
    date: "August 30, 2025",
    excerpt:
      "Witness the Ganga Aarti, spiritual serenity, and India’s timeless essence in one of the world’s oldest living cities.",
  },
  {
    id: "darjeeling",
    title: "Darjeeling: The Queen of Hills 🍃",
    image: "https://hikerwolf.com/wp-content/uploads/2020/04/Darjeeling-toy-train-route.jpg",
    date: "July 12, 2025",
    excerpt:
      "Ride the toy train, sip aromatic teas, and wake up to views of the mighty Kanchenjunga in this misty hill station.",
  },
  {
    id: "jaipur",
    title: "Rajasthan: Colors, Culture & Royalty 👑",
    image: "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Jaipur.jpg?w=1000&ssl=1",
    date: "June 20, 2025",
    excerpt:
      "From Jaipur’s palaces to Jaisalmer’s dunes, Rajasthan is an epic tale of kings, architecture, and hospitality.",
  },
  {
    id: "srinagar",
    title: "Srinagar",
    image: "https://s3.india.com/wp-content/uploads/2024/06/10-Must-Do-Activities-in-Srinagar.jpg?impolicy=Medium_Widthonly&w=350&h=263",
    date: "May 28, 2025",
    excerpt:
      "Famous for Dal Lake houseboats, Mughal gardens, and snow-capped peaks — heaven on earth.",
  },
];

const BlogHighlights = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);

  // 🔄 Auto-scroll animation
  useEffect(() => {
    let animationFrame;
    const scroll = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 0.5;
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-cyan-100 to-white overflow-hidden">
      {/* Animated Glows */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent"
        >
          ✨ Featured Travel Stories
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Dive into inspiring journeys, insider guides, and breathtaking visuals from across India’s most magical destinations.
        </p>

        {/* Slider Section */}
        <motion.div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-4 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="min-w-[340px] bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform-gpu cursor-pointer border border-cyan-100"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-sm font-semibold text-blue-700 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <CalendarDays className="w-4 h-4" /> {blog.date}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-blue-800 mb-2 hover:text-cyan-600 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5">{blog.excerpt}</p>
                <button className="flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                 <Link to={`/destinations/${blog.id}`}>Read More</Link>
                   <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Scrolling Text */}
        <motion.div
          className="mt-16 text-gray-500 text-base whitespace-nowrap overflow-hidden font-medium"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          🧭 Wanderlust Chronicles · 🕌 Heritage Tales · 🏝️ Beach Escapes · 🏞️ Mountain Adventures · 🍛 Food Trails · 🌅 Hidden Getaways · 🚗 Road Trip Diaries · 🌄
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHighlights;

