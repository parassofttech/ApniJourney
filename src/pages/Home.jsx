import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
const HeroSection = lazy(() => import("../Home/HeroSection"));
const DestPopular = lazy(() => import("../Home/DestPopular"));
const PopularDestinations = lazy(() => import("../Home/PopularDestinations"));
const TourismLanding = lazy(() => import("../Home/TourismLanding"));
const TripsHome = lazy(() => import("../Home/TripsHome"));
const WildlifeSlider = lazy(() => import("../Home/WildlifeSlider"));
const TravelBooking = lazy(() => import("../Home/TravelBooking"));
const WhyChooseApnijourney = lazy(() => import("../Home/WhyChooseApnijourney"));
const OffersSection = lazy(() => import("../Home/OffersSection"));
const BlogHighlights = lazy(() => import("../Home/BlogHighlights"));
const WeatherInfo = lazy(() => import("../Dashboard/WeatherInfo"));
const CTASection = lazy(() => import("../Home/CTASection"));
const TravelGuide = lazy(() => import("../Home/TravelGuide"));
const LatestTravelArticles = lazy(() => import("../Home/LatestTravelArticles"));
const FAQs = lazy(() => import("../Home/FAQs"));
const FeaturesSection = lazy(() => import("../Home/FeaturesSection"));
const TestimonialsSection = lazy(() => import("../Home/TestimonialsSection"));
const NewsletterSignup = lazy(() => import("../Home/NewsletterSignup"));

import Logo  from "../assets/images/logo.png"



const Home = () => {
  return (
   
   <Suspense fallback={
   
   <div className="flex h-[80vh] items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
        <img src={Logo}   className="absolute w-11 h-11 animate-pulse" alt="" />
      </div>
    </div>
  }>
  <HeroSection />
  <div className="relative "><DestPopular/></div>
  <PopularDestinations />

  
    
  

  
    <TripsHome />
    <TourismLanding />
  

  
    <WildlifeSlider />
 

    <TravelBooking />
  

 
    <WhyChooseApnijourney />
  


    <OffersSection />
  

  
    {/* <BlogHighlights /> */}
  

 
    {/* <WeatherInfo /> */}
  

  
    <CTASection />
  

 
    <TravelGuide />
  

  
    <LatestTravelArticles />
 

  
    <FAQs />
  

  
    <FeaturesSection />
 

  
    <TestimonialsSection />
  

  
    <NewsletterSignup />
    <div className="max-sm:hidden min-lg:visible"><Footer/></div>
  
</Suspense>
  );
};

export default Home;
