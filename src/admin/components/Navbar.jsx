import React, { useState, useEffect } from "react";
import { Bell, Search, LogOut, User, Settings, Command, ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 px-4 md:px-6 h-16 md:h-20 flex items-center justify-between
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-[#F8FAFC]"
      }`}
    >
      {/* 🔹 LEFT: Mobile Menu + Logo */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Icon */}
        <button onClick={()=> navigate("")} className="md:hidden p-2 rounded-lg hover:bg-slate-200">
          <Menu size={20} />
        </button>

        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold text-slate-800">
          ApniJourney
        </h1>
      </div>

      {/* 🔍 Search Bar (Hide on Mobile) */}
      <div className="hidden md:flex items-center relative group">
        <div className="absolute left-3 text-slate-400 group-focus-within:text-blue-500">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-10 py-2 bg-slate-200/50 focus:bg-white border-2 border-transparent focus:border-blue-500/20 outline-none rounded-xl w-[250px] lg:w-[350px] text-sm transition-all"
        />
        <div className="absolute right-3 hidden lg:flex items-center gap-1 bg-slate-300/50 px-1.5 py-0.5 rounded-md">
          <Command size={10} />
          <span className="text-[10px] font-bold">K</span>
        </div>
      </div>

      {/* 🔔 RIGHT SECTION */}
      <div className="flex items-center gap-2 md:gap-3">
        
        {/* Mobile Search Icon */}
        <button className="md:hidden p-2 hover:bg-slate-200 rounded-lg">
          <Search size={20} />
        </button>

        {/* Notifications */}
        <div
          onClick={() => navigate("/admin/message")}
          className="relative p-2 hover:bg-slate-200 rounded-xl cursor-pointer"
        >
          <Bell size={20} className="text-slate-600" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center gap-2 md:gap-3 p-1.5 rounded-xl hover:bg-slate-200"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              PS
            </div>

            {/* Hide text on mobile */}
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-slate-800">ApniJourney</p>
              <p className="text-[10px] text-emerald-500">Online</p>
            </div>

            <ChevronDown
              size={14}
              className={`transition-transform ${
                dropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {dropdown && (
            <div className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-xl py-2">
              <div className="px-4 py-2 border-b">
                <p className="text-xs text-gray-500">Signed in as</p>
                <p className="text-sm font-semibold truncate">
                  apnijourneyin@gmail.com
                </p>
              </div>

              <button
                onClick={() => navigate("/profile")}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <User size={16} /> Profile
              </button>

              <button
                onClick={() => navigate("/admin/settings")}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <Settings size={16} /> Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-100 text-red-600 text-sm"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;