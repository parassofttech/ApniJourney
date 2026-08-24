import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, Globe, Heart, Linkedin, Mail, Quote, Code, Cpu, ShieldCheck, Award, Rocket, Terminal } from "lucide-react";

const FounderSection = () => {
  // --- 3D TILT EFFECT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [6, -6]); 
  const rotateY = useTransform(x, [-100, 100], [-6, 6]); 

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
  const initials = founderName.split(' ').map(n => n[0]).join('');

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#020617]">
      
      {/* 1. ADVANCED ANIMATED BACKGROUND GLOWS & PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -60, 0], y: [0, -70, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-blue-600/15 rounded-full blur-[140px]"
        />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* 2. TITLE SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-slate-900/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple-400 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] mb-6 backdrop-blur-md">
            <Sparkles size={14} className="mr-2 animate-pulse" /> Founder & CEO
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
            Engineering The Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500">Of Intelligent Travel</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mt-4 font-medium">
            Bridging cutting-edge full-stack architectures with seamless global exploration ecosystems at ApniJourney.
          </p>
        </motion.div>

        {/* 3. MAIN INTERACTIVE 3D TILT CARD */}
        <div style={{ perspective: 2000 }} className="flex justify-center">
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full flex flex-col lg:flex-row items-center gap-12 p-8 md:p-14 
                       bg-slate-900/80 backdrop-blur-xl rounded-[40px] border border-slate-800 
                       shadow-[0_25px_60px_-15px_rgba(2,6,23,0.9)]
                       hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] 
                       transition-all duration-500 ease-out"
          >
            
            {/* A. IMAGE BLOCK WITH BADGES */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.8rem] opacity-30 group-hover:opacity-60 blur-md transition-opacity duration-500" />
              
              <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-[2.5rem] overflow-hidden bg-slate-950 border-2 border-slate-700/80 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-slate-800 font-black text-8xl select-none">
                  {initials}
                </div>
                <img
                  src="/paras.jpeg"
                  alt={founderName}
                  className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.style.opacity = 0; }}
                />
                
                {/* Floating Status Badge on Image */}
                <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-semibold text-emerald-300 tracking-wider">ONLINE & BUILDING</span>
                </div>
              </div>

              {/* Social Action Buttons */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                <a 
                  href="https://in.linkedin.com/in/paras-sahu-02849029a" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3.5 bg-slate-900 rounded-2xl border border-slate-700 text-slate-300 hover:text-blue-400 hover:border-blue-500 hover:scale-110 hover:-translate-y-1 shadow-lg transition-all"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:apnijourneyin@gmail.com" 
                  className="p-3.5 bg-slate-900 rounded-2xl border border-slate-700 text-slate-300 hover:text-rose-400 hover:border-rose-500 hover:scale-110 hover:-translate-y-1 shadow-lg transition-all"
                  title="Send Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://apnijourney.in" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3.5 bg-slate-900 rounded-2xl border border-slate-700 text-slate-300 hover:text-purple-400 hover:border-purple-500 hover:scale-110 hover:-translate-y-1 shadow-lg transition-all"
                  title="Visit Website"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>

            {/* B. DETAILED TEXT CONTENT BLOCK */}
            <div className="flex-1 text-center lg:text-left mt-4 lg:mt-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{founderName}</h3>
                  <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-1">
                    Founder & CEO — ApniJourney
                  </p>
                </div>
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                  <Terminal size={14} /> Final Year B.Tech Innovator
                </div>
              </div>

              {/* Mission Statement */}
              <div className="relative mt-6 p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 shadow-inner">
                <Quote className="text-blue-500/30 absolute top-4 right-4" size={32} />
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium relative z-10">
                  "At <span className="text-blue-400 font-semibold">ApniJourney</span>, we are redefining modern travel technology. By blending lightning-fast full-stack web engineering, automated itineraries, and data-driven intelligence, our mission is to eliminate friction, optimize logistics, and make global discovery effortless for everyone."
                </p>
              </div>

              {/* Core Pillars / Features Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Global Trip Management", desc: "End-to-end itinerary automation", color: "text-blue-400", bg: "bg-blue-500/10" },
                  { icon: Cpu, label: "Next-Gen Tech Stack", desc: "React, Node.js & Scalable Cloud", color: "text-purple-400", bg: "bg-purple-500/10" },
                  { icon: ShieldCheck, label: "Transparent & Secure", desc: "Zero hidden fees & trusted guides", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { icon: Rocket, label: "User-Centric Velocity", desc: "Ultra-responsive mobile workflows", color: "text-rose-400", bg: "bg-rose-500/10" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/60 hover:border-slate-700 transition-all">
                    <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} mt-0.5`}><item.icon size={18} /></div>
                    <div>
                      <h4 className="text-slate-200 font-bold text-sm">{item.label}</h4>
                      <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Stats */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-between gap-6">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                  <Award size={16} className="text-purple-400" /> Recognized for Advanced UI/UX & IoT Engineering
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                  <Code size={16} className="text-blue-400" /> Lucknow, India 🇮🇳
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;