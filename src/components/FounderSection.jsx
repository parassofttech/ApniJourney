import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, Globe, Heart, Linkedin, Mail, Quote, ExternalLink } from "lucide-react";

const FounderSection = () => {
  // --- 3D TILT EFFECT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [7, -7]); 
  const rotateY = useTransform(x, [-100, 100], [-7, 7]); 

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const founderName = "Paras Sahu";
  const initials = founderName.split(' ').map(n=>n[0]).join('');

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#020617]">
      
      {/* 1. ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -60, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 2. TITLE SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-slate-800 px-4 py-1.5 text-xs font-semibold text-purple-400 border border-slate-700 mb-6">
            <Sparkles size={14} className="mr-2" /> Founder Spotlight
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
            The Visionary <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Behind ApniJourney</span>
          </h2>
        </motion.div>

        {/* 3. MAIN CARD */}
        <div style={{ perspective: 2000 }} className="flex justify-center">
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 p-10 md:p-16 
                       bg-[#0f172a] rounded-[40px] border border-slate-800 shadow-[20px_20px_60px_#080b14,-20px_-20px_60px_#16233d]
                       hover:border-blue-500/50 transition-all duration-500 ease-out"
          >
            
            {/* A. IMAGE BLOCK */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-[2rem] overflow-hidden bg-[#1e293b] border-2 border-slate-700">
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-black text-8xl">
                  {initials}
                </div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGeEbP3nrtzJA/profile-displayphoto-shrink_200_200/B56ZpQCMbyKEAY-/0/1762279346709?e=2147483647&v=beta&t=Y6oUc5PAUMh5STJvJ5u_9Z5QtCyP7cLk5q_2HhKNfwY"
                  alt={founderName}
                  className="relative z-10 w-full h-full object-cover transition-all duration-700"
                  onError={(e) => { e.target.style.opacity = 0; }}
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                <a href="https://in.linkedin.com/in/paras-sahu-02849029a" target="_blank" rel="noreferrer" className="p-3 bg-[#1e293b] rounded-2xl border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400 hover:-translate-y-1 transition-all">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:apnijourneyin@gmail.com" className="p-3 bg-[#1e293b] rounded-2xl border border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-400 hover:-translate-y-1 transition-all">
                  <Mail size={22} />
                </a>
              </div>
            </div>

            {/* B. TEXT CONTENT BLOCK */}
            <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
              <Quote className="text-blue-500 opacity-20 mb-4 hidden md:block" size={48} />
              <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{founderName}</h3>
              <p className="text-xl font-medium text-slate-400 mt-2">Founder & Lead Architect</p>

              <div className="mt-8 relative">
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  "At <span className="text-blue-400">ApniJourney</span>, we don’t just book trips; we engineer seamless travel experiences. Our mission is to bridge the gap between complex logistics and the joy of discovery, making world exploration accessible, transparent, and entirely stress-free."
                </p>
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-500/30 rounded-full hidden md:block" />
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Global Access", color: "text-blue-400" },
                  { icon: Sparkles, label: "Smart Planning", color: "text-purple-400" },
                  { icon: Heart, label: "Passenger-First", color: "text-rose-400" },
                  { icon: Sparkles, label: "Zero Hidden Costs", color: "text-emerald-400" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-[#1e293b]/50 p-4 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-colors">
                    <div className={`p-2 bg-slate-900 rounded-xl ${item.color}`}><item.icon size={20} /></div>
                    <span className="text-slate-200 font-semibold text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;