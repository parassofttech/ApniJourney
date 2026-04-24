import React, { useEffect, useState } from "react";
import { Users, Map, CreditCard, MessageSquare, ArrowUpRight, Plus, ExternalLink, TrendingUp } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, trips: 0, messages: 0, revenue: 124500 });
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentTrips, setRecentTrips] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_BASE = "https://apnijourney-api.onrender.com/api";

  const chartData = [
    { name: 'Jan', revenue: 45000 },
    { name: 'Feb', revenue: 52000 },
    { name: 'Mar', revenue: 48000 },
    { name: 'Apr', revenue: 61000 },
    { name: 'May', revenue: 55000 },
    { name: 'Jun', revenue: 85000 },
  ];

  const fetchDashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const [usersRes, tripsRes, msgRes] = await Promise.all([
        axios.get(`${API_BASE}/auth/users`, config),
        axios.get(`${API_BASE}/trips/detail`, config),
        axios.get(`${API_BASE}/contact`, config),
      ]);

      // --- 🔍 DATA NORMALIZATION (Fixing the 0 issue) ---
      // Backend structured checks: res.data.user OR res.data.users OR res.data
      const rawUsers = usersRes.data.user || usersRes.data.users || usersRes.data || [];
      const rawTrips = tripsRes.data.trips || tripsRes.data.data || tripsRes.data || [];
      const rawMsgs = msgRes.data.messages || msgRes.data.data || msgRes.data || [];

      // Ensure they are arrays
      const usersArr = Array.isArray(rawUsers) ? rawUsers : [];
      const tripsArr = Array.isArray(rawTrips) ? rawTrips : [];
      const msgArr = Array.isArray(rawMsgs) ? rawMsgs : [];

      setStats({
        users: usersArr.length,
        trips: tripsArr.length,
        messages: msgArr.length,
        revenue: 124500, // Static or calculate from trips if possible
      });

      setRecentUsers(usersArr.slice(-5).reverse());
      setRecentTrips(tripsArr.slice(-5).reverse());
      setRecentMessages(msgArr.slice(-5).reverse());
    } catch (err) {
      console.error("Dashboard Sync Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
        <img src="/logo.png" className="absolute w-6 h-6 animate-pulse" alt="" />
      </div>
    </div>
  );

  const statCards = [
    { label: "Total Users", val: stats.users, icon: <Users size={22}/>, color: "text-blue-600", bg: "bg-blue-50", trend: "+12.5%" },
    { label: "Active Trips", val: stats.trips, icon: <Map size={22}/>, color: "text-emerald-600", bg: "bg-emerald-50", trend: "+8.2%" },
    { label: "Contact Inquiries", val: stats.messages, icon: <MessageSquare size={22}/>, color: "text-amber-600", bg: "bg-amber-50", trend: "Live" },
    { label: "Total Revenue", val: `₹${stats.revenue.toLocaleString()}`, icon: <CreditCard size={22}/>, color: "text-indigo-600", bg: "bg-indigo-50", trend: "+24%" },
  ];

  return (
    <div className="p-4 ml-13 md:ml-65  lg:ml-60 lg:p-8 max-w-[1600px] mx-auto animate-in fade-in duration-700">
      
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center m-10 gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900  tracking-tight">Executive Dashboard</h1>
          <div className="flex items-center gap-2 text-slate-500 mt-1">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-ping"></span>
            <p className="text-sm font-medium">System operational • Last update: Just now</p>
          </div>
        </div>
        <button 
          onClick={() => navigate("/admin/trips")}
          className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-2xl font-bold shadow-xl hover:bg-blue-600 transition-all active:scale-95"
        >
          <Plus size={20} /> Manage Catalog
        </button>
      </div>

      {/* Grid: Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-center mb-4">
              <div className={`p-3.5 rounded-2xl ${card.bg} ${card.color}`}>
                {card.icon}
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black bg-slate-50 px-2 py-1 rounded-full text-slate-400">
                <TrendingUp size={12} /> {card.trend}
              </div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{card.label}</p>
            <h2 className="text-3xl font-black text-slate-800 mt-1">{card.val}</h2>
          </div>
        ))}
      </div>

      {/* Grid: Charts & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Revenue Graph */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black text-slate-800 text-xl tracking-tight">Financial Growth</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full">Monthly</span>
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} dy={10} />
                <YAxis hide />
                <Tooltip 
                   contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold'}}
                />
                <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={4} fill="url(#chartGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* New Members List */}
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-slate-800 text-lg tracking-tight">Newest Members</h3>
            <button onClick={() => navigate("/admin/users")} className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">All</button>
          </div>
          <div className="space-y-5">
            {recentUsers.length > 0 ? recentUsers.map((u) => (
              <div key={u._id} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-600 font-black text-sm border border-white shadow-sm group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-500">
                    {u.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">{u.name}</p>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium italic">{u.email}</p>
                  </div>
                </div>
                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight size={14} className="text-slate-400" />
                </div>
              </div>
            )) : <p className="text-slate-400 text-center py-10">No recent users</p>}
          </div>
        </div>

        {/* Recent Activity Mini-Tables */}
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Recent Expeditions</h4>
            <div className="space-y-4">
              {recentTrips.slice(0, 3).map(t => (
                <div key={t._id} className="flex items-center gap-4 p-3 bg-slate-50/50 rounded-2xl hover:bg-blue-50 transition-colors">
                  <div className="h-12 w-12 bg-white rounded-xl overflow-hidden border border-slate-100 p-1">
                    <img src={t.image || t.photos?.[0] || "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=100"} className="w-full h-full object-cover rounded-lg" alt=""/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800 leading-tight">{t.title}</p>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase mt-1">₹{t.budget || t.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Unread Inquiries</h4>
            <div className="space-y-4">
              {recentMessages.slice(0, 3).map(m => (
                <div key={m._id} className="relative p-4 bg-slate-50/50 rounded-2xl border-l-4 border-amber-400">
                  <p className="text-sm font-bold text-slate-800">{m.name}</p>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-medium italic">"{m.message}"</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;