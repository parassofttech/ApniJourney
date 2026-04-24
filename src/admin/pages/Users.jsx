import React, { useState, useEffect } from "react";
import { Trash2, UserCheck, UserX, Search, MoreVertical, Mail, Calendar, ShieldAlert } from "lucide-react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://apnijourney-api.onrender.com/api/auth/users";
  const token = localStorage.getItem("token");
  const authConfig = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL, authConfig);
      const data = Array.isArray(res.data.user) ? res.data.user : (Array.isArray(res.data) ? res.data : []);
      setUsers(data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user permanently?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`, authConfig);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      alert("Error deleting user");
    }
  };

  const handleToggleBlock = async (user) => {
    try {
      await axios.put(`${API_URL}/${user._id}/toggleBlock`, {}, authConfig);
      setUsers(users.map((u) => u._id === user._id ? { ...u, blocked: !u.blocked } : u));
    } catch (err) {
      alert("Failed to update status");
    }
  };

  // Filter logic for search
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex h-96 items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="p-2 ml-13 md:ml-65  lg:ml-60 space-y-6 animate-in fade-in duration-500">
      
      {/* --- Top Header & Search --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="ml-10">
          <h1 className="text-2xl font-extrabold text-slate-800">User Directory</h1>
          <p className="text-slate-500 text-sm">Manage your community and account permissions</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full md:w-80 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* --- Table Container --- */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-500 text-[13px] uppercase tracking-wider">
                <th className="p-5 font-semibold">User Details</th>
                <th className="p-5 font-semibold">Status</th>
                <th className="p-5 font-semibold">Registration</th>
                <th className="p-5 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-blue-50/30 transition-colors group">
                    {/* User Info with Avatar */}
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 flex items-center justify-center font-bold text-sm shadow-sm">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 leading-none">{user.name}</p>
                          <div className="flex items-center gap-1 text-slate-500 mt-1">
                            <Mail size={12} />
                            <span className="text-xs">{user.email}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="p-5">
                      {user.blocked ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold ring-1 ring-red-200">
                          <ShieldAlert size={12} /> Blocked
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold ring-1 ring-emerald-200">
                          <UserCheck size={12} /> Active
                        </span>
                      )}
                    </td>

                    {/* Registration Date (Mockup or real date) */}
                    <td className="p-5 text-slate-500">
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <Calendar size={14} />
                        {new Date(user.createdAt || Date.now()).toLocaleDateString()}
                      </div>
                    </td>

                    {/* Action Buttons */}
                    <td className="p-5">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleToggleBlock(user)}
                          title={user.blocked ? "Unblock User" : "Block User"}
                          className={`p-2 rounded-xl transition-all shadow-sm active:scale-90 ${
                            user.blocked 
                            ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white" 
                            : "bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white"
                          }`}
                        >
                          {user.blocked ? <UserCheck size={18} /> : <UserX size={18} />}
                        </button>

                        <button
                          onClick={() => handleDelete(user._id)}
                          title="Delete User"
                          className="p-2 bg-red-50 text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-90"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-10 text-center text-slate-400 italic">
                    No users found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;