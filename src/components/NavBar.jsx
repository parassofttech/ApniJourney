// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Home, PlusCircle, User, Map, MapPin } from "lucide-react";

// const NavBar = () => {
//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-gray-400 border-t shadow-lg flex justify-around items-center py-2 z-50">

//       <NavItem to="/" icon={<Home size={22} />} label="Home" />
//       <NavItem to="/destinations" icon={<MapPin size={22} />} label="Places" />
//       <NavItem to="/dashboard" icon={<Map size={22} />} label="Status" />
//       <NavItem to="/add-trip" icon={<PlusCircle size={22} />} label="Add"  isFab="true" />
//       <NavItem to="/profile" icon={<User size={22} />} label="Profile" />

//     </nav>
//   );
// };

// const NavItem = ({ to, icon, label, isFab }) => {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `flex flex-col items-center text-xs transition-all duration-200 ${
//           isActive
//             ? "text-blue-600"
//             : "text-gray-500 hover:text-blue-500"
//         }`
//       }
//     >
//       {icon}
//       <span className="mt-1">{label}</span>
//     </NavLink>
//   );
// };

// export default NavBar;










// import React from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Home, PlusCircle, User, Map, MapPin } from "lucide-react";

// const NavBar = () => {
//   const navItems = [
//     { to: "/", icon: <Home size={24} />, label: "Home" },
//     { to: "/destinations", icon: <MapPin size={24} />, label: "Places" },
//     { to: "/add-trip", icon: <PlusCircle size={32} />, label: "Add", isFab: true },
//     { to: "/dashboard", icon: <Map size={24} />, label: "Stats" },
//     { to: "/profile", icon: <User size={24} />, label: "Profile" },
//   ];

//   return (
//     <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4">
//       {/* Glassmorphism Container */}
//       <nav className="flex items-center justify-around w-full max-w-md bg-black/80 backdrop-blur-xl border border-white/10 py-3 px-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
        
//         {navItems.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.to}
//             className={({ isActive }) => `
//               relative flex flex-col items-center transition-all duration-300
//               ${item.isFab ? "-mt-12" : ""}
//               ${isActive ? "text-emerald-400" : "text-slate-400 hover:text-white"}
//             `}
//           >
//             {({ isActive }) => (
//               <>
//                 {/* Floating Effect for Center Button */}
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className={`
//                     flex items-center justify-center
//                     ${item.isFab 
//                       ? "bg-emerald-500 text-white p-4 rounded-full shadow-[0_10px_20px_rgba(16,185,129,0.4)] border-4 border-[#0a0f0b]" 
//                       : "p-2"}
//                   `}
//                 >
//                   {item.icon}
//                 </motion.div>

//                 {/* Label (Hidden for FAB) */}
//                 {!item.isFab && (
//                   <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
//                     {item.label}
//                   </span>
//                 )}

//                 {/* Active Indicator Dot */}
//                 {isActive && !item.isFab && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute -bottom-1 w-1 h-1 bg-emerald-400 rounded-full"
//                   />
//                 )}
//               </>
//             )}
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default NavBar;





import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, PlusCircle, User, Map, MapPin } from "lucide-react";

const NavBar = () => {
  const navItems = [
    { to: "/", icon: <Home size={24} />, label: "Home" },
    { to: "/destinations", icon: <MapPin size={24} />, label: "Places" },
    { to: "/add-trip", icon: <PlusCircle size={25} />, label: "Add", isFab: true },
    { to: "/dashboard", icon: <Map size={24} />, label: "Stats" },
    { to: "/profile", icon: <User size={24} />, label: "Profile" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 flex w-full z-50">
      {/* Glassmorphism Container */}
      <nav className="flex items-center justify-around w-full bg-black/80 backdrop-blur-xl border border-white/10 py-1 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
        
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) => `
              relative flex flex-col items-center transition-all duration-300
              ${item.isFab ? "-mt-4" : ""}
              ${isActive ? "text-emerald-400" : "text-slate-400 hover:text-white"}
            `}
          >
            {({ isActive }) => (
              <>
                {/* Floating Effect for Center Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    flex items-center justify-center
                    ${item.isFab 
                      ? "bg-emerald-500 text-white p-4 rounded-full shadow-[0_10px_20px_rgba(16,185,129,0.4)] border-4 border-[#0a0f0b]" 
                      : "p-2"}
                  `}
                >
                  {item.icon}
                </motion.div>

                {/* Label (Hidden for FAB) */}
                {!item.isFab && (
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
                    {item.label}
                  </span>
                )}

                {/* Active Indicator Dot */}
                {isActive && !item.isFab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-1 h-1 bg-emerald-400 rounded-full"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;