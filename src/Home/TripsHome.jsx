import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const TripsHome = () => {

  
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
  
  const [comments, setComments] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
const [commentText, setCommentText] = useState({});
const [showComments, setShowComments] = useState({});

const [showMenu, setShowMenu] = useState({});
const [openMenu, setOpenMenu] = useState(null);


  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const API_URL = "https://apnijourney-api.onrender.com/api/auth/users";
  const token = localStorage.getItem("token");
  const authConfig = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

 
  
 
const currentUser = JSON.parse(localStorage.getItem("user"));


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

  // if (loading) return (
  //   <div className="flex h-96 items-center justify-center">
  //     <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600"></div>
  //   </div>
  // );

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
      setTrips(data.slice(-8).reverse());

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

      setTrips((prev) =>
        prev.filter((trip) => (trip._id || trip.id) !== id)
      );
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  const toggleLike = (id) => {
  setLikedPosts((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));

  setAnimateLike(id);

  setTimeout(() => {
    setAnimateLike(null);
  }, 600);
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

  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      `https://apnijourney-api.onrender.com/api/comments/${tripId}`,
      { text: text },
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
    alert("Failed to add comment"+ (err.response?.data?.message || "Unauthorized"));
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-blue-100">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-white to-blue-100"/>
      {/* Top Header */}

      <div className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

          <div>
            <h1 className="md:text-3xl font-black">
              My Journeys ✈️
            </h1>

            <p className="text-gray-500">
              {trips.length} Travel Posts
            </p>
          </div>

          <Link
            to="/add-trip"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            <Plus size={18} />
            Add Trip
          </Link>

        </div>
      </div>

      {/* Error */}

      {error && (
        <div className="max-w-3xl mx-auto mt-5 bg-red-100 text-red-600 p-4 rounded-xl">
          {error}
        </div>
      )}

      {/* Feed */}

      <div className="max-w-3xl  mx-auto py-10 space-y-10">

        {trips.map((trip, index) => {

         
  const id = trip._id || trip.id;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
    >
      {/* ---------- Post Header ---------- */}

      

<div className="flex items-center justify-between px-5 py-4">

  {/* Left */}
  <div className="flex items-center gap-3">
    <img
            src="https://i.pravatar.cc/150?img=12"
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>

            <h3 className="font-bold text-2xl text-gray-900">
              {trip.name || "Traveler"}
            </h3>
            {/* <div>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                <div>{user._id}</div>
              )  )):(<div></div>)
                }
            </div> */}

            <div className="flex items-center gap-1 text-gray-900 text-sm">
              <MapPin size={14} />
              {trip.destination}
            </div>

          </div>
    

    
  </div>

  {/* Right Menu */}
  <div className="relative ml-4">

    <button
      onClick={(e) => {
        e.stopPropagation();
        setOpenMenu(openMenu === trip._id ? null : trip._id);
      }}
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <MoreVertical size={20} />
    </button>

    {openMenu === trip._id && (
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-10 right-0 w-52 bg-white rounded-xl shadow-2xl border z-50"
      >
        <button
          onClick={() => navigate(`/trip/${trip._id}`)}
          className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100"
        >
          <Eye size={18} />
          View Details
        </button>

        <button
          onClick={() => {
            navigator.share({
              title: trip.title,
              text: trip.destination,
              url: `${window.location.origin}/trip/${trip._id}`,
            });
          }}
          className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100"
        >
          <Share2 size={18} />
          Share
        </button>

        {trip.userId === currentUser._id || trip.userId === currentUser.id ? (
  <button
    onClick={() => handleDelete(id)}
    className="flex ml-4 py-2 pb-4 text-red-600  hover:bg-red-600 transition"
  >
    <Trash2 size={24}/>Delete
  </button>
):(<div className="hidden">
  
</div>)}
      </div>
    )}

  </div>

</div>
      

      {/* ---------- Trip Image ---------- */}

      <div className="w-full h-[450px]  bg-gray-100">
        {/* like show in image */}
      {animateLike === id && (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1.4, opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <Heart
      className="fill-red-500 text-red-500"
      size={100}
    />
  </motion.div>
)}
        {trip.photos?.length ? (
          <img
            src={trip.photos[0]}
            alt={trip.destination}
            onDoubleClick={()=>toggleLike(id)}
            className="w-full h-full object-cover transition duration-700 cursor-pointer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

      </div>

      {/* ---------- Action Buttons ---------- */}

      <div className="px-5 pt-4">

        <div className="flex items-center justify-between">

          <div className="flex gap-5">

            <button onClick={() => toggleLike(id)}
              className="flex flex-row items-center gap-2">
              <Heart
                size={28}
                className={` transition ${
                  likedPosts[id]
                    ? "fill-red-500 text-red-500"
                    : "text-gray-700"
                  
                }`,"flex "}
                
              />
              <span className=" text-black">
          {(likedPosts[id] ? 1 : 0) +
            5 +
            index}
        </span>
            </button>

            <button
  onClick={() => getComments(trip._id)}
  className="flex items-center gap-2 hover:text-blue-600 transition"
>
  <MessageCircle size={22} />
  <span>{comments[trip._id || trip.id]?.length || 0}</span>
</button>

            
            <button onClick={() => shareTrip(trip)}>
    <Send size={27}/>
</button>

          </div>

          <div className="flex gap-4 ">
            <button onClick={() => toggleSave(id)}
              className="">
            <Bookmark
              size={27}
              className={`${
                savedPosts[id]
                  ? "fill-black text-black"
                  : "text-gray-700"
              }`}
            />
          </button>
          
         {trip.userId === currentUser._id || trip.userId === currentUser.id ? (
  <button
    onClick={() => handleDelete(id)}
    className="  text-red-600  hover:bg-red-600 transition"
  >
    <Trash2 size={24}/>
  </button>
):(<div className="hidden">
  
</div>)}
          </div>
        </div>
   
        

       

        {/* Caption */}

        <p className="mt-2 text-gray-700 leading-7">
          <span className="font-bold">
            {trip.userName || "Traveler"}
          </span>{" "}
          visited{" "}
          <span className="font-semibold text-blue-600">
            {trip.destination}
          </span>
          . {trip.description || "An unforgettable journey with amazing views and memories."}
        </p>

        {/* Comments */}
        

       <button onClick={()=>getComments(trip._id)} className="mt-2 text-gray-800">
  {/* .length use karein, taaki "Array" render na ho, "Number" render ho */}
  View all {comments[trip._id || trip.id]?.length || 0} comments
</button>


       {showComments[trip._id || trip.id] && (
  <div className="mt-4 border-t pt-4">
    {/* 1. Comment Input Section */}
    <div className="flex gap-2">
      <input
        type="text"
        value={commentText[trip._id || trip.id] || ""}
        onChange={(e) =>
          setCommentText({
            ...commentText,
            [trip._id || trip.id]: e.target.value,
          })
        }
        placeholder="Write a comment..."
        className="flex-1 border rounded-xl px-4 py-2 outline-none"
      />
      <button
        onClick={() => addComment(trip._id || trip.id)}
        className="bg-blue-600 text-white px-4 rounded-xl"
      >
        Post
      </button>
    </div>

    {/* 2. Comments List Section (Ek hi jagah map karein) */}
    <div className="mt-4 space-y-2">
      {(comments[trip._id || trip.id] || []).map((comment) => (
        <div
          key={comment._id || Math.random()} // Unique ID use karein
          className="bg-gray-100 rounded-xl px-4 py-2"
        >
          <p className="font-bold text-sm text-black">
            {trip.name || "Anonymous"}
          </p>
          <p className="text-gray-900">{comment.text}</p>
        </div>
      ))}
    </div>
    {/* Sirf tab dikhega jab login user hi trip ka owner ho */}

  </div>
)}


        {/* Date */}

        <div className="mt-3 flex items-center gap-2 text-gray-400 text-sm">
          <Calendar size={15} />
          {trip.startDate?.split("T")[0]}
        </div>

        

        {/* Buttons */}

        <div className="flex gap-3 mt-5 pb-6">

          <Link
            to={`/trip/${id}`}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700 transition"
          >
            <Eye size={18} />
            View Details
          </Link>

          {/* Sirf tab dikhega jab login user hi trip ka owner ho */}


        </div>

      </div>

    </motion.div>
  );
})}

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