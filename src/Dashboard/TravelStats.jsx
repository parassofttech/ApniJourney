import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Briefcase, Calendar, CheckCircle, MapPin, TrendingUp, Loader2 } from "lucide-react";



const StatCard = ({ title, value, icon: Icon, color, delay }) => (

  <motion.div

    initial={{ opacity: 0, y: 20 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.5, delay }}

    whileHover={{ y: -5, transition: { duration: 0.2 } }}

    className="relative overflow-hidden bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 group"

  >

    {/* Decorative Background Shape */}

    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-700 ${color}`} />

   

    <div className="relative z-10 flex flex-col gap-3">

      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color} text-white shadow-lg`}>

        <Icon size={24} />

      </div>

      <div>

        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{title}</p>

        <h3 className="text-3xl font-black text-slate-800 mt-1">{value}</h3>

      </div>

     

      {/* Mini "Insight" Badge */}

      <div className="flex items-center gap-1 text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full w-fit">

        <TrendingUp size={10} /> +12% this month

      </div>

    </div>

  </motion.div>

);



const TravelStats = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [trips, setTrips] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    if (!token) navigate("/login");

  }, [token, navigate]);



  useEffect(() => {

    if (!token) return;

    const fetchTrips = async () => {

      try {

        const res = await axios.get("https://apnijourney-api.onrender.com/api/trips", {

          headers: { Authorization: `Bearer ${token}` },

        });

        const data = res.data?.trips || res.data?.data || (Array.isArray(res.data) ? res.data : []);

        setTrips(data);

      } catch (err) {

        setTrips([]);

      } finally {

        setLoading(false);

      }

    };

    fetchTrips();

  }, [token]);



  if (!token) return null;



  const total = trips.length;

  const today = new Date();

  const upcoming = trips.filter(t => t.startDate && new Date(t.startDate) > today).length;

  const completed = trips.filter(t => t.endDate && new Date(t.endDate) < today).length;

  const uniqueDest = [...new Set(trips.map(t => t.destination))].length;



  return (

    <div className="max-w-6xl mx-auto py-12 px-6 bg-gradient-to-b from-blue-400/95 via-blue-400/30 to-blue-400/10 -z-10">

     

      {/* Header with Glass Effect */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

        <div>

          <h2 className="text-4xl font-black text-slate-900 tracking-tight">

            Travel <span className="text-blue-600">Insights</span>

          </h2>

          <p className="text-slate-500 font-medium">Tracking your journeys across the globe.</p>

        </div>

       

        {loading && (

          <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-full border border-blue-100">

            <Loader2 className="animate-spin" size={18} />

            Updating Data...

          </div>

        )}

      </div>



      {/* Grid Layout */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard

          title="Total Trips"

          value={total}

          icon={Briefcase}

          color="bg-blue-600"

          delay={0.1}

        />

        <StatCard

          title="Upcoming"

          value={upcoming}

          icon={Calendar}

          color="bg-indigo-600"

          delay={0.2}

        />

        <StatCard

          title="Completed"

          value={completed}

          icon={CheckCircle}

          color="bg-emerald-500"

          delay={0.3}

        />

        <StatCard

          title="Destinations"

          value={uniqueDest}

          icon={MapPin}

          color="bg-orange-500"

          delay={0.4}

        />

      </div>



      {/* Quick Summary / Progress Section */}

      {!loading && total > 0 && (

        <motion.div

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          className="mt-12 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl"

        >

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="max-w-sm text-center md:text-left">

              <h4 className="text-2xl font-bold mb-2">You're a Nomad! 🌍</h4>

              <p className="text-slate-400 text-sm leading-relaxed">

                You have completed <span className="text-white font-bold">{completed}</span> trips so far.

                Keep exploring to unlock the "World Traveler" badge!

              </p>

            </div>

           

            {/* Minimalist Progress Circle */}

            <div className="flex items-center gap-6">

               <div className="text-right">

                  <p className="text-slate-400 text-xs font-bold uppercase">Completion Rate</p>

                  <p className="text-3xl font-black">{total > 0 ? Math.round((completed/total)*100) : 0}%</p>

               </div>

               <div className="w-20 h-20 rounded-full border-[6px] border-slate-700 flex items-center justify-center relative">

                  <div className="absolute inset-0 rounded-full border-[6px] border-blue-500 border-t-transparent animate-pulse" />

                  <TrendingUp className="text-blue-400" />

               </div>

            </div>

          </div>



          {/* Abstract Bg Decor */}

          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

        </motion.div>

      )}

    </div>

  );

};



export default TravelStats;