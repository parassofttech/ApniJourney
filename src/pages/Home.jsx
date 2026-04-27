import React from "react";
import { Link } from "react-router-dom";
import HeroSection from '../Home/HeroSection'
import SearchBar from '../Home/SearchBar'
import PopularDestinations from '../Home/PopularDestinations'
// import UpcomingTrips from '../Dashboard/UpcomingTrips'
import FeaturesSection from '../Home/FeaturesSection'
import OffersSection from '../Home/OffersSection'
import TestimonialsSection from '../Home/TestimonialsSection'
import BlogHighlights from '../Home/BlogHighlights'
import PhotoGallery from '../Home/PhotoGallery'
import CTASection from '../Home/CTASection'
import AppHighlights from '../Home/AppHighlights'
import NewsletterSignup from '../Home/NewsletterSignup'
import Footer from '../Home/Footer'
import DestinationCard from "../Home/DestinationCard";
// import Destination from "../Home/Destination";
import DestPopular from "../Home/DestPopular";

import TravelBooking from "../Home/TravelBooking";
import UpcomingTrips from "../Home/UpcomingTrips";
import TourismLanding from "../Home/TourismLanding";
import WildlifeSlider from "../Home/WildlifeSlider";
import WeatherInfo from "../Dashboard/WeatherInfo";




const Home = () => {
  return (
   
    <div>

    
      <h1 className="hidden">
      ApniJourney -  Explore Travel Destinations and Weather Information
      </h1>
        <div><HeroSection/></div>
        {/* <div><SearchBar/></div> */}
        <div className="relative "><DestPopular/></div>
        <div><PopularDestinations/></div>
        {/* <div><DestinationCard/></div> */}
        
        {/* <div><UpcomingTrips/></div> */}
         <div><TravelBooking/></div>
         
         <div><TourismLanding/></div>
        
        <div><OffersSection/></div>

        <div><WildlifeSlider/></div>
       
        <div><BlogHighlights/></div>
        {/* <div className="mb-7"><PhotoGallery/></div> */}
        <div><WeatherInfo/></div>
        <div><CTASection/></div>
        
        <div><FeaturesSection/></div>
        {/* <div className="max-sm:hidden min-lg:visible"><AppHighlights/></div> */}
         <div><TestimonialsSection/></div>
        <div ><NewsletterSignup/></div>
        
        <div className="max-sm:hidden min-lg:visible"><Footer/></div>
    </div>
  );
};

export default Home;
