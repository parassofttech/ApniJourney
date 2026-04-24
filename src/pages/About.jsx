import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Wallet,
  Shield,
  Cloud,
  Compass,
  Users,
  Globe,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import FounderSection from "../components/FounderSection";

const About = () => {
  const navigate = useNavigate()
  return (
    <div className=" bg-gradient-to-b from-blue-400/30 via-green-400/30 to-yellow-300/40 -z-10 text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000"
            alt="Travel"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0a0f1c]/90 to-[#0a0f1c]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            About ApniJourney
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300">
            Your Smart Travel Companion for capturing, organizing and managing
            every moment of your journey.
          </p>
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-blue-700 font-bold mb-6">
              Travel Without Chaos
            </h2>
            <p className="text-black leading-relaxed text-lg">
              ApniJourney is designed to eliminate travel confusion.
              From storing tickets and documents to tracking expenses and routes,
              everything stays in one secure place.
              No more switching between apps, notes, screenshots, and receipts.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2000"
            alt="Travel Planning"
            className="rounded-3xl shadow-2xl border border-white/10"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white/5 py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
            What Makes ApniJourney Powerful
          </h2>

          <div className="grid bg-[#0a0f1c] rounded-3xl p-4 md:grid-cols-3 gap-10">

            <Feature
              icon={<MapPin />}
              title="Trip Management"
              desc="Store destinations, dates, transport details, and accommodation information in one place."
              className="bg-[#0a0f1c]"
            />

            <Feature
              icon={<Wallet />}
              title="Expense Tracker"
              desc="Track daily expenses with categorized summaries and budget insights."
            />

            <Feature
              icon={<Cloud />}
              title="Cloud Backup"
              desc="Secure cloud storage for tickets, passports, hotel bookings, and documents."
            />

            <Feature
              icon={<Compass />}
              title="GPS & Navigation"
              desc="Track routes, visited locations, and get real-time navigation assistance."
            />

            <Feature
              icon={<Shield />}
              title="Secure & Private"
              desc="Encrypted storage with secure login to protect your travel data."
            />

            <Feature
              icon={<Users />}
              title="Group Sharing"
              desc="Share trip details and expenses with friends and family easily."
            />

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto py-28 px-6 text-center">

        <h2 className="text-4xl text-blue-700 font-bold mb-10">
          Why Travelers Love ApniJourney
        </h2>

        <p className="text-slate-900 max-w-3xl mx-auto text-lg leading-relaxed">
          Unlike traditional travel apps that focus only on booking,
          ApniJourney focuses on your entire journey experience.
          It combines a trip diary, expense manager, GPS tagging,
          and document vault into one seamless ecosystem.
        </p>

        <div className="grid bg-[#0a0f1c] p-4 rounded-3xl md:grid-cols-4 gap-8 mt-16">

          <Stat title="All-in-One" desc="Everything organized in one app" />
          <Stat title="Offline Mode" desc="Works without internet" />
          <Stat title="Real-Time Logs" desc="Capture memories instantly" />
          <Stat title="Eco Friendly" desc="No paper tickets or receipts" />

        </div>
      </section>
      <FounderSection/>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-600/50 to-indigo-400/40 py-20 text-center">
        <h2 className="text-4xl text-indigo-600 font-bold mb-6">
          Start Your Journey Smarter
        </h2>
        <p className="text-white mb-10">
          Organize. Track. Explore. Remember.
        </p>

        <button onClick={()=>navigate('/')} className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold flex items-center gap-3 mx-auto hover:scale-105 transition">
          Explore App <ArrowRight size={18} />
        </button>
      </section>
    <Footer/>
    </div>
  );
};

/* COMPONENTS */

const Feature = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white/5 p-8 rounded-3xl border border-white/10 transition-all"
  >
    <div className="w-14 h-14 bg-blue-500/20 text-blue-400 flex items-center justify-center rounded-xl mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </motion.div>
);

const Stat = ({ title, desc }) => (
  <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

export default About;