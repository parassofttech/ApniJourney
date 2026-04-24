import React, { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, Search, Calendar, MapPin, DollarSign, Filter, ExternalLink } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const API_URL = "https://apnijourney-api.onrender.com/api/trips";

  const fetchTrips = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/detail`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data.trips || res.data.data || res.data || [];
      setTrips(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Is trip ko delete karna chahte hain?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTrips(trips.filter((trip) => trip._id !== id));
    } catch (error) {
      alert("Delete karne mein error aaya!");
    }
  };

  // Filter trips based on search
  const filteredTrips = trips.filter(trip => 
    trip.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex h-96 items-center justify-center">
      <div className="animate-bounce flex space-x-2">
        <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
        <div className="h-3 w-3 bg-blue-600 rounded-full delay-75"></div>
        <div className="h-3 w-3 bg-blue-600 rounded-full delay-150"></div>
      </div>
    </div>
  );

  return (
    <div className="p-2 ml-13 md:ml-65  lg:ml-60  space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center ml-15 justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900  tracking-tight">Trips Inventory</h1>
          <p className="text-slate-500 font-medium">Manage destinations, pricing, and schedules.</p>
        </div>
        {/* <button 
          onClick={() => navigate("/admin/add-trip")}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:shadow-blue-400 transition-all active:scale-95"
        >
          <Plus size={20} strokeWidth={3} /> Add New Expedition
        </button> */}
      </div>

      {/* --- Filter Bar --- */}
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Search by destination or title..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 font-medium transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-5 py-3 bg-slate-100 text-slate-600 rounded-2xl font-semibold hover:bg-slate-200 transition-colors">
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* --- Modern Trips Table --- */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-[11px] uppercase tracking-[0.2em] font-black border-b border-slate-100">
                <th className="p-6">Trip Details</th>
                <th className="p-6">Investment</th>
                <th className="p-6">Duration</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTrips.map((trip) => (
                <tr key={trip._id} className="hover:bg-blue-50/30 transition-all group">
                  {/* Trip Info with Thumbnail */}
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-20 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 shadow-sm border border-white">
                        <img 
                          src={trip.photos[0] || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=200&auto=format&fit=crop"} 
                          alt="trip" 
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-slate-800 truncate leading-tight group-hover:text-blue-600 transition-colors">
                          {trip.title}
                        </p>
                        <p className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                          <MapPin size={12} className="text-blue-500" /> {trip.location || "Multiple Sites"}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Pricing */}
                  <td className="p-6 font-mono font-bold text-slate-700">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <DollarSign size={14} />
                      {Number(trip.budget).toLocaleString('en-IN')}
                    </div>
                  </td>

                  {/* Dates */}
                  <td className="p-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Calendar size={12} className="text-slate-400" />
                        {new Date(trip.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                      </div>
                      <div className="w-8 h-[2px] bg-slate-100 ml-4"></div>
                      <div className="text-[10px] font-medium text-slate-400 ml-4">
                        {new Date(trip.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                      </div>
                    </div>
                  </td>

                  {/* Dynamic Status Badge */}
                  <td className="p-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-wider ring-1 ring-blue-100">
                      Confirmed
                    </span>
                  </td>

                  {/* Clean Actions */}
                  <td className="p-6">
                    <div className="flex justify-center gap-2">
                      <button className="p-2.5 text-blue-500 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-xl transition-all shadow-sm active:scale-90">
                        <Pencil size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(trip._id)}
                        className="p-2.5 text-red-500 bg-red-50 hover:bg-red-600 hover:text-white rounded-xl transition-all shadow-sm active:scale-90"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTrips.length === 0 && (
            <div className="p-20 text-center">
              <div className="inline-flex p-6 rounded-full bg-slate-50 text-slate-300 mb-4">
                <MapPin size={48} />
              </div>
              <p className="text-slate-400 font-medium">No trips found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTrips;