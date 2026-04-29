import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddTrip from "./pages/AddTrip";
import TripDetail from "./pages/TripDetail";
import Trip from "./pages/Trips";
import IndiaGate from "./components/IndiaGate";
import DestinationDetail from "./pages/DestinationDetail";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Trips from "./pages/Trips";
import Profile from "./pages/Profile";
import Destinations from "./components/Destinations";
import DestinationDetails from "./components/DestinationDetails";
import Contact from "./components/Contact";
import Food from "./pages/Food";
import FoodDetail from "./pages/FoodDetail";
import NationalParkDetail from "./pages/NationalParkDetail";
import NationalPark from "./pages/NationalPark";
import About from "./pages/About";
import PhotoGalleryPage from "./pages/PhotoGalleryPage";
import WeatherInfoPage from "./pages/WeatherInfoPage";
import VerifyOTP from "./pages/VerifyOTP";
import AdminRoutes from "./admin/routes/AdminRoutes";
import AdminTrips from "./admin/pages/AdminTrips";
import Users from "./admin/pages/Users";


const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Main Content Area */}
        
        <Header/>
        <div className="flex-1 overflow-auto">
          <AdminRoutes />
          <div className="mb-18">

          </div>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-trip" element={<AddTrip />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Register/>} />
            <Route path="/trip/:id" element={<TripDetail />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/indiagate" element={<IndiaGate />} /> {/* Optional */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetails />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/food" element={<Food />} />
            <Route path="/food/:slug" element={<FoodDetail />} />
            <Route path="/national-park" element={<NationalPark />} />
            <Route path="/national-park/:id" element={<NationalParkDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/photo" element={<PhotoGalleryPage />} />
            <Route path="/weatherpage" element={<WeatherInfoPage />} />
            <Route path="/verify" element={<VerifyOTP />} />
            {/* <Route path="admin-trips" element={<AdminTrips />} />
            <Route path="/admin/users" element={<Users />} /> */}


            

            
          </Routes>
        </div>

        

        {/* Bottom Navigation */}
       

        {/* Footer */}
        
         <NavBar />
         
      </div>
    </Router>
  );
};

export default App;
