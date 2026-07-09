import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  MoreVertical,
  MapPin,
  Calendar,
  IndianRupee,
  Star,
  Eye,
  Plus,
  Delete,
  DeleteIcon,
  Trash2,
  Share2,
  Flag ,
  Edit,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { handleError, handleSuccess } from "../utils";

const TripsHome = () => {

  const userName = localStorage.getItem("loggedInUser")
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [animateLike, setAnimateLike] = useState(null);
  const [openComments,setOpenComments]=useState(false);
const [selectedTrip,setSelectedTrip]=useState(null);
const [stats, setStats] = useState({ trips: 0 });

  // Store likes
  const [likedPosts, setLikedPosts] = useState({});

  // Store saved posts
  const [savedPosts, setSavedPosts] = useState({});

  // Dummy comments count
  
  const [comments, setComments] = useState({
    

  });
  const [searchTerm, setSearchTerm] = useState("");
const [commentText, setCommentText] = useState({
});
const [showComments, setShowComments] = useState({});

const [showMenu, setShowMenu] = useState({});
const [openMenu, setOpenMenu] = useState(null);


  const [users, setUsers] = useState([]);

  const navigate = useNavigate()
  // const [loading, setLoading] = useState(true);

  const API_URL = "https://apnijourney-api.onrender.com/api/auth/users";
  const token = localStorage.getItem("token");
  const authConfig = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

 
  
 
const currentUser = JSON.parse(localStorage.getItem("user"));

const handleChange = (e, tripId) => {
  const { value } = e.target;
  setCommentText((prev) => ({
    ...prev,
    [tripId]: value, // Specific trip id ke liye text update hoga
  }));
};



const fetchUsers = async () => {
   
    try {
      const res = await axios.get(API_URL, authConfig);
      const data = Array.isArray(res.data.user) ? res.data.user : (Array.isArray(res.data) ? res.data : []);
      setUsers(data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch users");
    } finally {
      
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    
   
    try {
      setLoading(true);

      const res = await axios.get(
        "https://apnijourney-api.onrender.com/api/trips/detail"
      );

      const data = res.data.trips || res.data.data || res.data;
      
      setStats({
      
        trips: data.length,
        
      });
      setTrips(data.slice(-6).reverse());
      
      // setTrips(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Failed to fetch trips");
    } finally {
      setLoading(false);
    }
  };
  

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this trip?")) return;

    try {
      await axios.delete(
        `https://apnijourney-api.onrender.com/api/trips/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }
      );
      handleSuccess("Your Trip is deleted")

      fetchTrips()

      setTrips((prev) =>
        prev.filter((trip) => (trip._id || trip.id) !== id)
      );
    } catch (err) {
      console.log(err);
      handleError("Delete failed");
    }
  };

 const toggleLike = async (id) => {

  if(!token){
    return handleError("Please login to like this trip.");
  }
  try {
    // Instant UI update
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        const tripId = trip._id || trip.id;

        if (tripId !== id) return trip;

        const isLiked = trip.likes?.includes(currentUser?._id || currentUser?.id);

        return {
          ...trip,
          likes: isLiked
            ? trip.likes.filter((userId) => userId !== currentUser?._id || currentUser?.id)
            : [...(trip.likes || []), currentUser?._id || currentUser?.id],
        };
      })
    );

    // Animation
    setAnimateLike(id);

    setTimeout(() => {
      setAnimateLike(null);
    }, 600);


    // Backend update
    await axios.post(
      `https://apnijourney-api.onrender.com/api/trips/${id}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    


  } catch (err) {
    console.log(err.response?.data);

    // Error aaye to data wapas fetch kar lo
    fetchTrips();
   
  }
};

  const toggleSave = (id) => {
    setSavedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const shareTrip = async (trip) => {
  const url = `${window.location.origin}/trip/${trip._id}`;

  if (navigator.share) {
    await navigator.share({
      title: trip.title,
      text: trip.description,
      url,
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("Trip link copied.");
  }
};
const addComment = async (tripId) => {
 
  const text = commentText[tripId];

  if (!text?.trim()) return;
  if(!token)
  return handleError("Please login to comment this trip.");

  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      `https://apnijourney-api.onrender.com/api/comments/${tripId}`,
      { text: text ,
      name: currentUser?.name || userName || "Anonymous"},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    
    setComments((prev) => ({
      ...prev,
      [tripId]: [...(prev[tripId] || []), res.data],
    }));

   
    setCommentText((prev) => ({
      ...prev,
      [tripId]: "",
    }));

    
    setShowComments((prev) => ({
      ...prev,
      [tripId]: true,
    }));

    
  } catch (err) {
    console.log(err);
    handleError("Failed to add comment"+ (err.response?.data?.message || "Unauthorized"));
  }
};

const getComments = async (tripId) => {
  
  if (!tripId) {
    console.error("Error: Trip ID is undefined!");
    return;
  }

  try {
    if (showComments[tripId]) {
      setShowComments((prev) => ({ ...prev, [tripId]: false }));
      return;
    }

    const res = await axios.get(
      `https://apnijourney-api.onrender.com/api/comments/${tripId}`
    );

    setComments((prev) => ({
      ...prev,
      [tripId]: res.data,
    }));

    setShowComments((prev) => ({ ...prev, [tripId]: true }));
  } catch (err) {
    console.error("Backend Error:", err.response?.data || err.message);
  }
};

// TripsHome.jsx ke top level par add karein
useEffect(() => {
  const fetchAllCommentCounts = async () => {
    try {
      // Har trip ke liye loop chala kar count laayein
      trips.forEach(async (trip) => {
        const tripId = trip._id || trip.id;
        const res = await axios.get(`https://apnijourney-api.onrender.com/api/comments/${tripId}`);
        
        // State update karein taaki UI update ho jaye
        setComments((prev) => ({
          ...prev,
          [tripId]: res.data,
        }));
      });
    } catch (err) {
      console.log("Error loading initial comments:", err);
    }
  };

  if (trips.length > 0) {
    fetchAllCommentCounts();
  }
}, [trips]); // Jab bhi trips load honge, ye chalega

useEffect(() => {
  const handleClick = () => setOpenMenu(null);

  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex justify-center items-center">
        <div className="text-xl font-bold animate-pulse">
          Loading Trips...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50 to-zinc-100 relative">
  {/* Modern Ambient Mesh Light Effect */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-cyan-100/30 via-transparent to-blue-100/40 pointer-events-none"/>
  
  {/* Top Header - Glassmorphic Aesthetic */}
  <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-2">
          Journeys <span className="animate-bounce text-xl md:text-2xl">✈️</span>
        </h1>
        <p className="text-xs font-semibold text-gray-400 mt-0.5">
          ✨ Exploring {trips.length} Travel Stories
        </p>
      </div>

      <Link
        to="/add-trip"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 font-semibold text-sm shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
      >
        <Plus size={16} />
        Add Trip
      </Link>
    </div>
  </div>

  {/* Error Alert Box */}
  {error && (
    <div className="max-w-2xl mx-auto mt-6  bg-rose-50 border border-rose-100 text-rose-600 p-4 rounded-xl text-sm font-medium flex items-center gap-2">
      <span>⚠️</span> {error}
    </div>
  )}

  {/* Main Feed Container */}
  <div className="max-w-xl mx-auto px-4 py-8 space-y-8">
    {trips.map((trip, index) => {
      if (!trip) return null;
      const id = trip._id || trip.id;

      return (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          {/* ---------- Post Header ---------- */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50">
            <div className="flex items-center gap-3">
              {/* Dynamic User Avatar */}
              <div className="relative">
  {trip.userPhoto ? (
    // Condition 1: Agar user ne photo lagayi hai
    <img
      src={trip.userPhoto}
      alt={trip.name || "User"}
      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-50"
       loading="lazy"
                 
                  fetchPriority="low"
    />
  ) : (
    // Condition 2: Agar photo nahi hai, toh Name ka First Letter dikhega (Dynamic Vibrant Background ke sath)
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm tracking-wider uppercase ring-2 ring-blue-50 shadow-sm">
      {(trip.name || trip.userName || "U").charAt(0)}
    </div>
  )}
  
  {/* Active Status Dot */}
  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
</div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm tracking-tight hover:text-blue-600 cursor-pointer transition">
                  {trip.name || trip.userName || "Traveler"}
                </h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                  <MapPin size={12} className="text-blue-500 shrink-0" />
                  <span className="font-medium text-gray-600 truncate max-w-[180px]">{trip.destination}</span>
                </div>
              </div>
            </div>

            {/* Menu Dropdown Control */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu(openMenu === id ? null : id);
                }}
                className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition"
              >
                <MoreVertical size={18} />
              </button>

              {openMenu === id && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-9 right-0 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 z-50 py-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
                >
                  <button
                    onClick={() => navigate(`/trip/${id}`)}
                    className="w-full px-4 py-2 text-left text-xs font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 transition"
                  >
                    <Eye size={15} className="text-gray-400" /> View Details
                  </button>

                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: trip.title || "Travel Story",
                          text: trip.destination,
                          url: `${window.location.origin}/trip/${id}`,
                        });
                      } else {
                        shareTrip?.(trip);
                      }
                    }}
                    className="w-full px-4 py-2 text-left text-xs font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 transition"
                  >
                    <Share2 size={15} className="text-gray-400" /> Share
                  </button>

                  {(trip.userId === currentUser?._id || trip.userId === currentUser?.id) && (
                    <div className="border-t border-gray-50 mt-1 pt-1">
                      <button
                        onClick={() => handleDelete(id)}
                        className="w-full px-4 py-2 text-left text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 transition"
                      >
                        <Trash2 size={15} /> Delete Post
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ---------- Trip Image Viewport ---------- */}
          <div className="relative w-full aspect-[4/5] md:aspect-[4/4] bg-slate-50 overflow-hidden group">
            {/* Pop-up Double Tap Heart Feedback */}
            {animateLike === id && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
                exit={{ scale: 1.4, opacity: 0 }}
                className="absolute  inset-0 z-20 flex items-center justify-center pointer-events-none"
              >
                <Heart className="fill-white text-white drop-shadow-xl" size={80} />
              </motion.div>
            )}
{trip.photos?.length > 0 ? (
         <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={0}
  slidesPerView={1}
  className="trip-swiper w-full h-full"
>
  {trip.photos?.map((photo, index) => (
    <SwiperSlide key={index}>
      <img
        src={photo}
        alt={`Trip ${index + 1}`}
        onDoubleClick={() => toggleLike(id)}
        className="w-full h-full object-cover cursor-pointer"
        loading="lazy"
      />
    </SwiperSlide>
  ))}
</Swiper>
) : (
  <div className="w-full h-full flex items-center justify-center">
    No Image 
  </div>
)}



          </div>

          {/* ---------- Action Toolbar ---------- */}
          <div className="px-4 pt-3.5 flex items-center justify-between">
            <div className="flex gap-4">
              {/* Like Button */}
              <button
  onClick={() => toggleLike(id)}
  className="group flex items-center gap-1.5 text-gray-700 hover:text-rose-500 transition"
>
  <Heart
  size={22}
  className={`transition-transform duration-150 active:scale-95 ${
   trip.likes?.includes(currentUser?._id||currentUser?.id)
      ? "fill-rose-500 text-rose-500 scale-105"
      : "text-gray-700"
  }`}
/>

<span
  className={`text-xs font-bold ${
    trip.likes?.includes(currentUser?._id||currentUser?.id)
      ? "text-rose-600"
      : "text-gray-600"
  }`}
>
  {trip.likes?.length || ""}
</span>
</button>

              {/* Comments Toggle Trigger */}
              <button
                onClick={() => getComments(id)}
                className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition"
              >
                <MessageCircle size={21} />
                <span className="text-xs font-bold text-gray-600">{comments[id]?.length || ""}</span>
              </button>

              {/* Share Icon */}
              <button 
                onClick={() => shareTrip?.(trip)}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                <Send size={21} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Bookmark Save */}
              <button 
                onClick={() => toggleSave(id)}
                className="text-gray-700 hover:text-amber-500 transition"
              >
                <Bookmark
                  size={22}
                  className={savedPosts[id] ? "fill-amber-500 text-amber-500" : ""}
                />
              </button>
            </div>
          </div>

          {/* ---------- Context Info & Descriptions ---------- */}
          <div className="px-4 pb-4 pt-2">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-bold text-gray-900 mr-1.5 hover:underline cursor-pointer">
                {trip.name || trip.userName || "Traveler"}
              </span>
              <span>visited </span>
              <span className="font-bold text-blue-600 tracking-tight">
                {trip.destination}
              </span>
              <span className="text-gray-600">. {trip.description || "An unforgettable journey with amazing views."}</span>
            </p>

            {/* View Comments Static Trigger Row */}
            <button 
              onClick={() => getComments(id)} 
              className="mt-1 md:mt-1.5 text-xs font-semibold text-gray-400 hover:text-blue-500 transition block"
            >
              View all {comments[id]?.length || 0} comments
            </button>

            {/* Dynamic Dropdown Slide Panel for Comments */}
            {showComments[id] && (
              <div className="mt-3.5 border-t border-gray-50 pt-3.5 space-y-3 animate-in slide-in-from-top-2 duration-200">
                {/* Inline Quick Comment Input Box */}
                <div className="flex gap-2.5 pl-2 items-center bg-gray-50 rounded-xl p-1.5 border border-gray-100">
                  {/* <span className="text-xs font-bold text-gray-500 pl-2 shrink-0 max-w-[80px] truncate">
                    {currentUser?.name || "Me"}
                  </span> */}
                  <input
                    type="text"
                    value={commentText[id] || ""}
                    onChange={(e) => handleChange(e, id)}
                    placeholder="Add a comment..."
                    className="flex-1 bg-transparent text-xs text-gray-800 outline-none placeholder-gray-400"
                  />
                  <button
                    onClick={() => addComment(id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                  >
                    Post
                  </button>
                </div>

                {/* Scrolled Inner List */}
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {(comments[id] || []).length > 0 ? (
                    (comments[id] || []).map((comment) => (
                      <div
                        key={comment._id || comment.id || Math.random()} 
                        className="bg-slate-50/70 rounded-xl px-3.5 py-2 border border-gray-100 text-xs"
                      >
                        <span className="font-bold text-gray-900 block mb-0.5">
                          {comment.name || "Anonymous"}
                        </span>
                        <p className="text-gray-600 leading-normal">{comment.text}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-[11px] text-gray-400 py-1">No comments yet. Start the conversation!</p>
                  )}
                </div>
              </div>
            )}

            {/* Date Tag Row */}
            <div className="mt-1.5 md:mt-3 flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <Calendar size={12} className="text-gray-300" />
              {trip.startDate ? trip.startDate.split("T")[0] : "Recent"}
            </div>

            {/* Details Footer CTA Button */}
            <div className="mt-1 md:mt-4 pt-2 md:pt-3.5 border-t border-gray-50 flex gap-2">
              <Link
                to={`/trip/${id}`}
                className="w-full bg-slate-50 text-gray-800 py-2 rounded-xl flex justify-center items-center gap-1.5 font-bold text-xs hover:bg-blue-50 hover:text-blue-600 border border-gray-100 transition duration-200"
              >
                <Eye size={14} />
                View Full Details
              </Link>
            </div>
          </div>
        </motion.div>
      );
    })}

    {/* Load More Button Wrapper */}
    <div className="flex justify-center pt-2">
      <button onClick={()=>navigate("/trips-blog")} className="bg-blue-200 text-gray-800 font-bold border border-gray-200  px-6 py-4 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-200 transform active:scale-98">
        View More Journeys
      </button>
    </div>
  </div>
</div>
  );

  // ---------- Empty State ----------

  if (trips.length === 0) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-md w-full">

          <div className="text-7xl mb-6">🏕️</div>

          <h2 className="text-3xl font-bold text-gray-800">
            No Trips Yet
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            Looks like you haven't shared any travel memories.
            Start your first adventure today and inspire others.
          </p>

          <Link
            to="/add-trip"
            className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            <Plus size={20} />
            Add Your First Trip
          </Link>

        </div>
      </div>
    );
  }

  // ---------- Main Feed ----------

  return (
    <div className="min-h-screen bg-[#fafafa]">

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b backdrop-blur-lg">
        <div className="max-w-3xl mx-auto h-16 flex items-center justify-between px-5">

          <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            ApniJourney
          </h1>

          <Link
            to="/add-trip"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition"
          >
            + New Trip
          </Link>

        </div>
      </div>

      {/* Feed */}
      <div className="max-w-3xl mx-auto py-8 space-y-8">

        {/* 👇 Part 2 ka trips.map() yahi paste karna */}

      </div>

      {/* Footer */}

      <div className="py-10 text-center text-gray-400 text-sm">
        ❤️ Made with love by ApniJourney
      </div>

      {/* Scrollbar Hide */}

      <style jsx>{`
        body{
          background:#fafafa;
        }

        ::-webkit-scrollbar{
          width:8px;
        }

        ::-webkit-scrollbar-thumb{
          background:#d1d5db;
          border-radius:20px;
        }

        ::-webkit-scrollbar-track{
          background:transparent;
        }
          
          
      `}</style>

    </div>
  );
};

export default TripsHome;