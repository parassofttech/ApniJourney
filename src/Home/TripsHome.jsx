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
  MapPin,
  Calendar,
  IndianRupee,
  Star,
  Eye,
  Plus,
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
  const [comments] = useState({
    1: 12,
    2: 8,
    3: 16,
    4: 22,
  });

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
        `https://apnijourney-api.onrender.com/api/trips/${id}`
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
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-black">
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

      <div className="max-w-3xl mx-auto py-10 space-y-10">

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

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h3 className="font-bold text-gray-900">
              {trip.userName || "Traveler"}
            </h3>

            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <MapPin size={14} />
              {trip.destination}
            </div>

          </div>

        </div>

        <MoreHorizontal className="cursor-pointer" />

      </div>

      

      {/* ---------- Trip Image ---------- */}

      <div className="w-full h-[500px] bg-gray-100">
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
      size={120}
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

            <button onClick={() => toggleLike(id)}>
              <Heart
                size={28}
                className={`transition ${
                  likedPosts[id]
                    ? "fill-red-500 text-red-500"
                    : "text-gray-700"
                }`}
              />
            </button>

            <button
onClick={()=>{
setSelectedTrip(trip);
setOpenComments(true);
}}
>
<MessageCircle size={28}/>
</button>

            
            <button onClick={() => shareTrip(trip)}>
    <Send size={27}/>
</button>

          </div>

          <button onClick={() => toggleSave(id)}>
            <Bookmark
              size={27}
              className={`${
                savedPosts[id]
                  ? "fill-black text-black"
                  : "text-gray-700"
              }`}
            />
          </button>

        </div>

        {/* Likes */}

        <p className="mt-4 font-bold text-gray-900">
          {(likedPosts[id] ? 1 : 0) +
            240 +
            index} Likes
        </p>

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

        <button className="mt-3 text-gray-500">
          View all {comments[id] || 0} comments
        </button>

        {/* Date */}

        <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
          <Calendar size={15} />
          {trip.startDate?.split("T")[0]}
        </div>

        {/* Info Cards */}

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-3">

            <IndianRupee className="text-green-600" />

            <div>

              <p className="text-xs text-gray-500">
                Budget
              </p>

              <p className="font-bold">
                ₹{trip.budget?.toLocaleString() || 0}
              </p>

            </div>

          </div>

          <div className="bg-yellow-50 rounded-2xl p-4 flex items-center gap-3">

            <Star className="fill-yellow-400 text-yellow-400" />

            <div>

              <p className="text-xs text-gray-500">
                Rating
              </p>

              <p className="font-bold">
                {trip.rating || "4.8"}
              </p>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-6 pb-6">

          <Link
            to={`/trip/${id}`}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700 transition"
          >
            <Eye size={18} />
            View Details
          </Link>

          <button
            onClick={() => handleDelete(id)}
            className="px-5 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            Delete
          </button>

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