
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, Moon, Camera, Download, Edit3, LogOut, 
  User, Mail, Phone, MapPin, Calendar, Globe, AlignLeft, CheckCircle2 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const defaultProfile = {
  name: "", email: "", phone: "", location: "",
  dob: "", country: "", bio: "", profileImage: "",
};

const Profile = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [editMode, setEditMode] = useState(false);
  const [preview, setPreview] = useState("");
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [savingMsg, setSavingMsg] = useState("");
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const res = await axios.get("https://apnijourney-api.onrender.com/api/auth/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const backendUser = res.data.user;
          if (backendUser) {
            setProfile((prev) => ({ ...prev, name: backendUser.name, email: backendUser.email || "" }));
          }
        }
      } catch (err) { console.warn("Guest Mode Active"); }

      const stored = JSON.parse(localStorage.getItem("loggedInUser"));
      if (stored) {
        setProfile((p) => ({ ...p, ...stored }));
        if (stored.profileImage) setPreview(stored.profileImage);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      setProfile((p) => ({ ...p, profileImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(profile));
    setEditMode(false);
    setSavingMsg("Profile updated successfully!");
    setTimeout(() => setSavingMsg(""), 3000);
  };

  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem("token");
localStorage.removeItem("isAdmin");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300/40 via-green-500/30 to-yellow-400/30 text-black transition-colors duration-500 pb-20 pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* --- Top Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              <User className="text-blue-600" size={36} /> My Account
            </h1>
            <p className="text-slate-500 font-medium">Manage your personal information and travel preferences.</p>
          </motion.div>

          <div className="flex items-center gap-3">
            {loggedInUser ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-xl"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl"
              >
                Login
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- Left Column: Profile Card --- */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="lg:col-span-4">
            <div className="sticky top-28 bg-white bg-gradient-to-b from-blue-400/60 via-green-500/30 to-yellow-400/30 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 text-center z-10">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="w-full h-full bg-black/85 rounded-full overflow-hidden ring-4 ring-blue-900/30 shadow-lg">
                  {preview || profile.profileImage ? (
                    <img
                      src={preview || profile.profileImage}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl font-black text-gray-900 dark:text-blue-400">
                      {profile.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>

                {editMode && (
                  <label className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-black p-3 rounded-full cursor-pointer shadow-xl transition-all duration-300 hover:scale-110">
                    <Camera size={18} />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-1">{profile.name}</h2>
              <p className="text-blue-900 font-bold text-sm mb-4">@{profile.name?.toLowerCase().replace(/\s/g, '_') || 'user'}</p>

              <div className="bg-slate-800/90 rounded-2xl p-4 mb-6 text-sm text-slate-50 italic">
                "{profile.bio || "Add a bio to let people know about your travel spirit!"}"
              </div>

              {/* FIXED CLICKABLE EDIT BUTTON */}
              <button 
                onClick={() => setEditMode(prev => !prev)} 
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                  editMode ? "bg-slate-100 text-slate-600" : "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
                }`}
              >
                {editMode ? "Cancel Editing" : <><Edit3 size={18} /> Edit Profile</>}
              </button>
            </div>
          </motion.div>

          {/* --- Right Column: Details Grid --- */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="lg:col-span-8 space-y-6">
            <div className="bg-gradient-to-b from-blue-300/40 via-green-500/30 to-yellow-400/30 rounded-[2.5rem] p-8 shadow-xl border text-black border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-slate-900">Profile Details</h3>
                {savingMsg && <span className="text-black font-bold text-sm flex items-center gap-1 animate-bounce"><CheckCircle2 size={16}/> {savingMsg}</span>}
              </div>

              <div className="grid grid-cols-1 gap-6  text-black">
                <ProfileInput icon={<User />} label="Full Name" placeholder="Enter your Name" name="name" value={profile.name} editMode={editMode} onChange={handleChange}  />
                <ProfileInput icon={<Mail />} label="Email Address" placeholder="Enter your email" name="email" value={profile.email} editMode={editMode} onChange={handleChange} type="email" />
                <ProfileInput icon={<Phone />} label="Phone Number" placeholder="Enter your Phone No." name="phone" value={profile.phone} editMode={editMode} onChange={handleChange} />
                <ProfileInput icon={<MapPin />} label="City / Location" placeholder="Enter your city" name="location" value={profile.location} editMode={editMode} onChange={handleChange} />
                <ProfileInput icon={<Calendar />} label="Date of Birth" placeholder="Enter your Date of Birth" name="dob" value={profile.dob} editMode={editMode} onChange={handleChange} type="date" />
                <ProfileInput icon={<Globe />} label="Country" placeholder="Enter your Country" name="country" value={profile.country} editMode={editMode} onChange={handleChange} />

                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 mb-2 ml-1">
                    <AlignLeft size={14}/> About Me (Bio)
                  </label>
                  {editMode ? (
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-900 rounded-2xl p-4 text-slate-900 focus:ring-2 ring-blue-500 outline-none transition-all h-32"
                    />
                  ) : (
                    <div className="p-4 rounded-2xl bg-slate-50 text-slate-800 min-h-[100px] border border-transparent">
                      {profile.bio || "No description provided."}
                    </div>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {editMode && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-10 flex justify-end">
                    <button onClick={handleSave} className="px-10 py-4 bg-emerald-500 text-white font-black rounded-2xl shadow-xl hover:bg-emerald-600 transition-all flex items-center gap-2">
                      Save Changes <CheckCircle2 size={20}/>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ProfileInput = ({ icon, label, name, value, editMode, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col">
    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
      {React.cloneElement(icon, { size: 12 })} {label}
    </label>
    {editMode ? (
      <input 
        type={type} name={name} value={value} onChange={onChange} 
        className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 focus:ring-2 ring-blue-500 outline-none transition-all font-medium" 
      />
    ) : (
      <div className="px-4 py-3.5 rounded-2xl bg-slate-50 text-slate-800 font-bold border border-transparent">
        {value ||"_"}
      </div>
    )}
  </div>
);

export default Profile;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [isGuest, setIsGuest] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [editMode, setEditMode] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   // Fetch user data
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setIsGuest(true);
//           setLoading(false);
//           return;
//         }

//         const res = await axios.get("http://localhost:5000/api/auth/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUser(res.data.user);
//         setForm({ name: res.data.user.name, email: res.data.user.email });
//         setIsGuest(false);
//       } catch (err) {
//         console.error("Profile fetch error:", err);
//         setIsGuest(true);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   // Logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     setIsGuest(true);
//     navigate("/login");
//   };

//   // Handle Edit
//   const handleEditToggle = () => {
//     setEditMode(!editMode);
//     setMessage("");
//   };

//   // Save updated profile
//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const res = await axios.put(
//         "http://localhost:5000/api/auth/update",
//         form,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setUser(res.data.user);
//       setEditMode(false);
//       setMessage("✅ Profile updated successfully!");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Error updating profile.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
//           className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full"
//         ></motion.div>
//       </div>
//     );
//   }

//   const displayUser = isGuest
//     ? {
//         name: "Guest Traveler",
//         email: "guest@travelapp.com",
//         createdAt: new Date().toISOString(),
//       }
//     : user;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden"
//       >
//         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-400"></div>

//         {/* Avatar */}
//         <div className="text-center mt-4">
//           <motion.img
//             src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${displayUser.name}`}
//             alt="avatar"
//             className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-green-400 shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           />
//           <h2 className="text-2xl font-bold text-gray-800">{displayUser.name}</h2>
//           <p className="text-gray-500">{displayUser.email}</p>
//         </div>

//         {/* Edit Mode Toggle */}
//         {!isGuest && (
//           <div className="flex justify-center mt-3">
//             <button
//               onClick={handleEditToggle}
//               className="text-sm text-green-600 hover:underline"
//             >
//               {editMode ? "Cancel Edit" : "Edit Profile ✏️"}
//             </button>
//           </div>
//         )}

//         <AnimatePresence>
//           {editMode && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               className="mt-6 space-y-4"
//             >
//               <input
//                 type="text"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 placeholder="Full Name"
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
//               />
//               <input
//                 type="email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 placeholder="Email"
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
//               />
//               <button
//                 onClick={handleSave}
//                 className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition font-semibold"
//               >
//                 Save Changes
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Message */}
//         {message && (
//           <p className="text-center mt-4 text-green-600 font-medium">{message}</p>
//         )}

//         {/* Details */}
//         {!editMode && (
//           <div className="mt-6 space-y-3 text-gray-700">
//             <div className="flex justify-between border-b pb-2">
//               <span className="font-semibold">Joined On</span>
//               <span>{new Date(displayUser.createdAt).toLocaleDateString()}</span>
//             </div>
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="mt-8 flex justify-center">
//           {isGuest ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
//             >
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Profile;


