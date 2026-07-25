import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Wallet,
  Shield,
  Cloud,
  Compass,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../Home/Footer";
import FounderSection from "../components/FounderSection";
import HeroSection from '../assets/images/about-herosection.webp';
import Image from '../assets/images/image-abt.webp';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400/30 via-green-400/30 to-yellow-300/40 text-slate-100 overflow-hidden selection:bg-blue-500 selection:text-white relative">
      
      {/* SEO & Meta Configuration */}
      <Helmet>
        <title>About ApniJourney - Your Smart Travel Companion</title>
        <meta name="description" content="Discover how ApniJourney simplifies travel planning, expense tracking, and document management with smart AI-driven features." />
      </Helmet>

      {/* Background Neon Glowing Ambient Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={HeroSection}
            alt="Travel background"
            className="w-full h-full object-cover scale-105  filter saturate-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/60 via-[#070b14]/85 to-[#070b14]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase shadow-lg shadow-blue-500/5 backdrop-blur-md">
            <Sparkles size={14} className="animate-pulse" />
            Next-Gen Travel Ecosystem
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.1]">
            About <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">ApniJourney</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Your all-in-one smart travel companion engineered to capture, organize, and manage every unforgettable moment of your expedition.
          </p>
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block text-blue-400 font-semibold text-sm tracking-wider uppercase">
             Reclaim Your Adventures
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-700 leading-tight">
              Travel Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Chaos</span>
            </h2>

            <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-normal">
              ApniJourney is meticulously built to eradicate travel friction. From archiving tickets and legal documents to monitoring live expenses and tracking destination routes, everything synchronizes in one unified secure dashboard.
            </p>

            <div className="space-y-3  pt-2">
              {[
                "Zero app switching — all documents & receipts in one place",
                "Automated smart budget breakdowns & expense tracking",
                "Real-time route logging and memories curation"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-slate-900">
                  <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src={Image}
                alt="Travel Planning Dashboard"
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 relative  ">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl  sm:text-4xl font-black text-black mb-4">
              What Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">ApniJourney</span> Powerful
            </h2>
            <p className="text-slate-800 text-sm sm:text-base">
              Engineered with advanced tech stacks to give you a butter-smooth experience across all devices.
            </p>
          </div>

          <div className="grid rounded-3xl bg-gray-700 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
              icon={<MapPin />}
              title="Trip Management"
              desc="Store destinations, exact timeline dates, transport records, and hotel reservations securely."
            className="bg-gray-700 text-gray-900"/>
            <Feature
              icon={<Wallet />}
              title="Smart Expense Tracker"
              desc="Monitor daily cashflows with categorized breakdowns and automated currency insights."
            />
            <Feature
              icon={<Cloud />}
              title="Encrypted Cloud Backup"
              desc="Industrial-grade cloud vault for tickets, passports, bookings, and identification files."
            />
            <Feature
              icon={<Compass />}
              title="GPS & Navigation"
              desc="Track live transit routes, visited checkpoints, and destination coordinates effortlessly."
            />
            <Feature
              icon={<Shield />}
              title="Privacy First"
              desc="End-to-end encrypted architecture with secure session tokens protecting your personal data."
            />
            <Feature
              icon={<Users />}
              title="Group Collaboration"
              desc="Share live trip itineraries and split trip expenses seamlessly with family and friends."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-blue-900">
            Why Modern Travelers Choose Us
          </h2>
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
            Unlike legacy booking applications that discard you after checkout, ApniJourney stays with you throughout your experiential lifecycle—merging travel diaries, expense logs, and vaults.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-700 rounded-3xl">
          <Stat title="All-in-One Hub" desc="Everything organized into a single intuitive interface" />
          <Stat title="Offline Ready" desc="Access crucial tickets and logs even without stable connection" />
          <Stat title="Instant Logs" desc="Capture memories, photos, and notes on the go" />
          <Stat title="Eco-Conscious" desc="100% paperless digital travel vault ecosystem" />
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <div className="">
        <FounderSection />
      </div>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden border-t border-white/5 bg-gradient-to-tr from-blue-900/30 via-indigo-950/40 to-[#070b14] text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Start Your Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Smarter</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Organize. Track. Explore. Remember. Join hundreds of travelers transforming how they explore the world.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => navigate('/')}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Platform</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* REUSABLE FEATURE CARD */
const Feature = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.2 }}
    className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg hover:border-blue-500/30 hover:bg-slate-900/80 transition-all group"
  >
    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 flex items-center justify-center rounded-2xl mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

/* REUSABLE STAT CARD */
const Stat = ({ title, desc }) => (
  <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all text-left">
    <div className="w-2 h-2 rounded-full bg-blue-400 mb-4 shadow-sm shadow-blue-400" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default About;