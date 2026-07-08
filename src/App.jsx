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

import AdminTrips from "./admin/pages/AdminTrips";
import Users from "./admin/pages/Users";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import LatestArticlesDetails from "./Home/LatestArticlesDetails";
import SoloTravel from "./TravelGuidePages/SoloTravel";
import BestPlace from "./TravelGuidePages/BestPlace";
import HoneymoonDestination from "./TravelGuidePages/HoneymoonDestination";
import MonsoonTravel from "./TravelGuidePages/MonsoonTravel";
import BudgetTravel from "./TravelGuidePages/BudgetTravel";
import WeekendTrips from "./TravelGuidePages/WeekendTrips";
import PackingChecklist from "./TravelGuidePages/PackingChecklist";
import ThingsDoInGoa from "./TravelGuidePages/ThingsDoInGoa";
import ScrollToTop from "./ScrollToTop";

import TripsBlog from "./pages/TripsBlog";
import AdminDashboard from "./admin/pages/AdminDashboard";
import Admin from "./admin/pages/Admin";


const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="flex flex-col h-screen">
        {/* Main Content Area */}
        
        <Header/>
        <div id="main-content" className="flex-1 overflow-auto">
          
          <div className="mb-16">

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
            <Route path="/photos" element={<PhotoGalleryPage />} />
            <Route path="/weatherpage" element={<WeatherInfoPage />} />
            <Route path="/verify" element={<VerifyOTP />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/article/:id" element={<LatestArticlesDetails />} />
            <Route path="/solo-travel" element={<SoloTravel />} />
            <Route path="/best-places" element={<BestPlace />} />
            <Route path="/honeymoon-destinations" element={<HoneymoonDestination />} />
            <Route path="/monsoon-travel" element={<MonsoonTravel />} />
            <Route path="/budget-travel" element={<BudgetTravel />} />
            <Route path="/weekend-trips" element={<WeekendTrips/>} />
            <Route path="/packing-checklist" element={<PackingChecklist/>} />
            <Route path="/things-to-do-goa" element={<ThingsDoInGoa/>} />
            <Route path="/trips-blog" element={<TripsBlog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
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
