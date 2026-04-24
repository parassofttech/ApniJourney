import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Contact, GalleryHorizontal, Menu, Plus, X, 
  Home,
  MapPin,
  LayoutDashboard,
  Utensils,
  Trees,
  CloudSun,
  PlusCircle,
  Image,
  Info,
  Phone,
  Shield,
} from "lucide-react";
import TripMateLogo   from '../assets/TripMate_app_logo.png'

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInUser,setLoggedInUser]= useState('')
  const isAdmin = localStorage.getItem("isAdmin");

  useEffect(()=>{
     setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-lg fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4   flex lg:items-center position  justify-between">
        {/* LOGO */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={TripMateLogo}
            alt="ApniJourny Logo"
            className="w-10 h-10"
          />
          <h2 className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-400 to-purple-400">
                ApniJourney
              </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex  md:space-x-6 lg:space-x-4 items-center">
          <Link
            to="/"
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"          >
            Dashboard
          </Link>
          <Link
            to="/destinations"
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"          >
            Places
          </Link>
          <Link
            to="/food"
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"          >
            Foods
          </Link>
          <Link
            to="/national-park"
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"          >
            National Parks
          </Link>
          <Link
                to="/weatherpage"
                onClick={() => setMenuOpen(false)}
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"              >
                Weather Page
              </Link>
          <Link
            to="/add-trip"
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"          >
            Add Trip
          </Link>
          <Link
            to="/photo"
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"          >
            Photos
          </Link>
          <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"              >
                About
              </Link>
          <Link
            to="/contact"
            className="relative text-gray-700 font-medium transition duration-300 
            hover:text-blue-600 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-600 
             after:transition-all after:duration-300 
             hover:after:w-full"          >
            Contact
          </Link>
          {isAdmin === "true" && (
  <Link
  to="/admin/dashboard"
    onClick={() => setMenuOpen(false) }
    className="bg-gray-500  text-white px-3 py-1 rounded-lg hover:text-blue-600 font-medium transition"
  >
    Admin

  </Link>
)}
          <div className="">
            
             {loggedInUser ? (
  <div className="relative ">
    <button
      onClick={() => navigate("/profile")}
      className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 hover:border-blue-700 transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" // default profile image
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </button>
  </div>
) : (
  <button
    onClick={handleLoginClick}
    className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
  >
    Login
  </button>
)}

              </div>

          {/* Login Button */}
          
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none fixed position right-4 align-middle mt-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
         <div className="lg:hidden flex fixed position right-14">
            
             {loggedInUser ? (
  <div className="relative ">
    <button
      onClick={() => navigate("/profile")}
      className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 hover:border-blue-700 transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" // default profile image
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </button>
  </div>
) : (
  <button
    onClick={handleLoginClick}
    className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition"
  >
    Login
  </button>
)}

              </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-300 shadow-lg border-t border-gray-100"
          >
            <div className="flex font-bold  flex-col space-y-4 p-5">
              <Link
  to="/"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <Home size={18} /> Home
</Link>

<Link
  to="/destinations"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <MapPin size={18} /> Places
</Link>

<Link
  to="/dashboard"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <LayoutDashboard size={18} /> Dashboard
</Link>

<Link
  to="/food"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <Utensils size={18} /> Foods
</Link>

<Link
  to="/national-park"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <Trees size={18} /> National Parks
</Link>

<Link
  to="/weatherpage"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <CloudSun size={18} /> Weather Page
</Link>

<Link
  to="/add-trip"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <PlusCircle size={18} /> Add Trip
</Link>

<Link
  to="/photo"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <Image size={18} /> Photos
</Link>

<Link
  to="/about"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <Info size={18} /> About
</Link>

<Link
  to="/contact"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
>
  <Phone size={18} /> Contact
</Link>
              {isAdmin === "true" && (
  <Link
  to="/admin/dashboard"
    onClick={() => setMenuOpen(false) }
    className="bg-gray-500 flex w-20  text-white px-3 py-1 rounded-lg hover:text-blue-600 font-medium transition"
  >
    <div className="flex gap-2 -ml-2"> <Shield size={18} />
    Admin</div>

  </Link>
)}

              <div className="hidden lg:flex">
                {loggedInUser ? (
  <div className="relative">
    <button
      onClick={() => navigate("/profile")}
      className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 hover:border-blue-700 transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" // default profile image
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </button>
  </div>
) : (
  <button
    onClick={handleLoginClick}
    className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
  >
    Login
  </button>
)}

              </div>
              {/* <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLoginClick();
                }}
                className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Login
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;





