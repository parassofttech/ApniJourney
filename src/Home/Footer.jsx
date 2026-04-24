import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Heart,
  Send,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="relative min-h-[500px] flex items-end text-gray-200 overflow-hidden">
      
      {/* 🎥 Background Video with Overlay */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/852368/852368-hd_1280_720_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      {/* 🧪 Main Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full max-w-7xl mx-auto px-6 pb-10 pt-20"
      >
        
        {/* 💎 Glass Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-14 shadow-2xl">
          
          {/* BRAND SECTION (4 Cols) */}
          <motion.div variants={itemVariants} className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6 group cursor-default">
              <span className="text-3xl animate-bounce">✈️</span>
              <h2 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400">
                ApniJourney
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Redefining the way you travel. Smart planning, seamless memories, 
              and a world of adventures waiting for you.
            </p>
            
            {/* Newsletter Simple Input */}
            <div className="relative max-w-sm group">
              <input 
                type="email" 
                placeholder="Get travel updates..." 
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500"
              />
              <button className="absolute right-2 top-2 p-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-transform active:scale-95">
                <Send size={20} />
              </button>
            </div>
          </motion.div>

          {/* QUICK LINKS (3 Cols) */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h3 className="text-white font-bold text-xl mb-6">Explore</h3>
            <ul className="space-y-4">
              {["Home", "My Trips", "Add Trip", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-md">
                    <span className="h-px w-0 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT (4 Cols) */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <h3 className="text-white font-bold text-xl mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <a href="mailto:apnijourneyin@gmail.com" className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email Us</p>
                  <p className="text-gray-200">apnijourneyin@gmail.com</p>
                </div>
              </a>

              <a href="tel:+916307479350" className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-green-600/20 transition-colors">
                  <Phone className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Call Us</p>
                  <p className="text-gray-200">+91 6307479350</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-purple-600/20 transition-colors">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-gray-200">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 🌐 SOCIALS & COPYRIGHT */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 px-4">
          
          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              { icon: Github, color: "hover:bg-gray-800" },
              { icon: Linkedin, color: "hover:bg-blue-700" },
              { icon: Instagram, color: "hover:bg-pink-600" }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`p-4 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 ${social.color}`}
              >
                <social.icon size={22} />
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center md:text-right">
            <p className="text-gray-500 text-sm mb-2 font-medium">
              © {year} ApniJourney. All rights reserved.
            </p>
            <p className="flex items-center justify-center md:justify-end gap-2 text-md text-gray-300">
              Crafted with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by 
              <span className="font-bold text-white hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1">
                Paras <ExternalLink size={14} />
              </span>
            </p>
          </motion.div>

        </div>

      </motion.div>

      {/* Decorative Shimmer Animation CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        h2 {
          background-size: 200% auto;
          animation: shimmer 5s linear infinite;
        }
      `}</style>

    </footer>
  );
};

export default Footer;