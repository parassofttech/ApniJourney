import React, { useState } from "react";
import { 
  User, Shield, Bell, Globe, Camera, Save, 
  Lock, Eye, EyeOff, CheckCircle2, Moon, Sun 
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPass, setShowPass] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Tabs Configuration
  const tabs = [
    { id: "profile", label: "Account Profile", icon: <User size={18} /> },
    { id: "security", label: "Security & Privacy", icon: <Shield size={18} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { id: "system", label: "System Preferences", icon: <Globe size={18} /> },
  ];

  return (
    <div className="p-4 ml-13 md:ml-65  lg:ml-60 lg:p-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div className="m-10">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">System Settings</h1>
        <p className="text-slate-500 font-medium mt-1">Configure your workspace and administrative preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* --- Sidebar Tabs --- */}
        <div className="lg:w-64 flex flex-col gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeTab === tab.id 
                ? "bg-slate-900 text-white shadow-xl shadow-slate-200 translate-x-2" 
                : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {tab.icon}
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* --- Main Content Area --- */}
        <div className="flex-1 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 lg:p-10">
          
          {/* 1. Profile Section */}
          {activeTab === "profile" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-slate-50">
                <div className="relative group">
                  <div className="h-24 w-24 rounded-[2rem] bg-gradient-to-tr from-blue-600 to-indigo-600 p-1">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&topType=ShortHairShortFlat&facialHairType=BeardMedium&clotheType=BlazerShirt&eyeType=Default" 
                      alt="Avatar" 
                      className="h-full w-full object-cover rounded-[1.8rem] bg-white"
                    />
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-lg border border-slate-100 text-blue-600 hover:scale-110 transition-transform">
                    <Camera size={16} />
                  </button>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-black text-slate-800">Admin Master</h3>
                  <p className="text-sm text-slate-400 font-medium">Super Administrator • India</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" placeholder="Admin Master" />
                <InputGroup label="Email Address" placeholder="admin@tripmate.com" type="email" />
                <InputGroup label="Phone Number" placeholder="+91 98765 43210" />
                <InputGroup label="Location" placeholder="Mumbai, India" />
              </div>

              <div className="pt-4 flex justify-end">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                  <Save size={18} /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* 2. Security Section */}
          {activeTab === "security" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-6">Update Password</h3>
                <div className="space-y-4 max-w-md">
                  <InputGroup label="Current Password" type="password" />
                  <div className="relative">
                    <InputGroup label="New Password" type={showPass ? "text" : "password"} />
                    <button 
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-10 text-slate-400"
                    >
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600" />
                    <div>
                      <p className="text-sm font-bold text-emerald-900">2FA is currently active</p>
                      <p className="text-xs text-emerald-700">Your account is extra secure.</p>
                    </div>
                  </div>
                  <button className="text-xs font-black uppercase tracking-widest text-emerald-700">Configure</button>
                </div>
              </div>
            </div>
          )}

          {/* 3. System Preferences (Toggles) */}
          {activeTab === "system" && (
            <div className="space-y-6 animate-in fade-in duration-500">
               <ToggleGroup 
                  icon={<Moon size={20} className="text-indigo-600" />} 
                  title="Dark Mode Interface" 
                  desc="Switch between light and dark themes." 
                  enabled={darkMode} 
                  onChange={() => setDarkMode(!darkMode)}
               />
               <ToggleGroup 
                  icon={<Globe size={20} className="text-blue-600" />} 
                  title="Public API Access" 
                  desc="Enable third-party applications to access data." 
                  enabled={true} 
               />
               <ToggleGroup 
                  icon={<CheckCircle2 size={20} className="text-emerald-600" />} 
                  title="Auto-Maintenance" 
                  desc="Run system cleanups every 24 hours." 
                  enabled={false} 
               />
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="p-20 text-center text-slate-400">
                <Bell size={48} className="mx-auto mb-4 opacity-20" />
                <p className="font-bold">Notification Center</p>
                <p className="text-sm">Customize how you receive alerts.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// Reusable Input Component
const InputGroup = ({ label, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 ml-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-700"
    />
  </div>
);

// Reusable Toggle Component
const ToggleGroup = ({ icon, title, desc, enabled, onChange }) => (
  <div className="flex items-center justify-between p-6 hover:bg-slate-50 rounded-[2rem] transition-colors border border-transparent hover:border-slate-100">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-800">{title}</h4>
        <p className="text-xs text-slate-500 font-medium">{desc}</p>
      </div>
    </div>
    <button 
      onClick={onChange}
      className={`w-12 h-6 rounded-full transition-colors relative ${enabled ? "bg-blue-600" : "bg-slate-200"}`}
    >
      <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${enabled ? "left-7" : "left-1"}`} />
    </button>
  </div>
);

export default Settings;