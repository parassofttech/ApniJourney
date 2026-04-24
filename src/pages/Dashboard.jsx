import React, { useState, useEffect } from "react";
import TripCard from "../components/TripCard";
import { Link } from "react-router-dom";

import HeaderTopBar from '../Dashboard/HeaderTopBar'
import QuickStats from '../Dashboard/QuickStats'
import AddNewTripButton from "../Dashboard/AddNewTripButton"
import UpcomingTrips from '../Dashboard/UpcomingTrips'

import{getTrips } from "../services/api"

import TripDetail from "./TripDetail";
import TripsList from "../Dashboard/TripsList";
import Trips from "./Trips";
import PhotoGallery from "../Dashboard/PhotoGalleryDash";
import PhotoGalleryDash from "../Dashboard/PhotoGalleryDash";
import TravelStats from "../Dashboard/TravelStats";
import TravelGoals from "../Dashboard/TravelGoals";
import Budges from "../Dashboard/Badges";
import Notifications from "../Dashboard/Notifications";
import BudgetTracker from "../Dashboard/BudgetTracker";
import NotesJournal from "../Dashboard/NotesJournal";
import MapView from "../Dashboard/MapView";
import WeatherInfo from "../Dashboard/WeatherInfo";
import PastTrips from "../Dashboard/PastTrips";
import Footer from "../Home/Footer"

const Dashboard = () => {
  const [trips, setTrips] = useState([]);

//  const fetchWeather = async ()=>{
//    const url = "https://goweather.herokuapp.com/weather/Ny"

//   const res = await fetch(url,

//   ).then((value)=>{
//     console.log(value)
//     return value.json()
//   }).then((value2)=>{
//     console.log(value2)
//   })
//  }



const [weather, setWeather]= useState('')
const [temperature,setTemereture] = useState('')
// const fetchApi = async()=>{
  const res = fetch("510bcf437caefe44b7f1ffcaef70c320").then((value)=>{
    return value.json()
  }).then((value2)=>{
    console.log(value2)
    })
  //   if(res.data){
  //     setWeather(res.data)
  //   }
  //    const temp =  value2.temperature
  //    console.log(temp)
  //    setTemereture(temp)
  // })
  

// console.log(temp)
// }

// useEffect(()=>{
//   setWeather(res)
//   console.log(res)
// },[])

  useEffect(() => {
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(storedTrips);
  }, []);

  return (
    
    <div className="pt-[6px] mb-[10px] bg-gradient-to-b from-blue-400/30 via-green-400/30 to-blue-300/40 -z-10">

      
       

{/* 🔥 Hero Section with Background Video */}
<section className="relative w-full h-[80vh] overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="https://cdn.pixabay.com/video/2022/09/24/132382-753435508_large.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
    <h1 className="text-5xl font-bold mb-4">
      Explore Your Travel Journey ✈️
    </h1>
    <p className="text-lg max-w-2xl mb-6">
      Plan, Track and Relive your amazing trips with our smart dashboard.
    </p>

    <Link
      to="/add-trip"
      className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-lg transition duration-300"
    >
      Start New Trip
    </Link>
  </div>

</section>
        {/* <div className="relative bottom-[40px]  mt-[30px]"><HeaderTopBar/></div> */}
        <div className="mt-[90px]"></div>
        <div className="text-3xl text-purple-600  flex justify-center font-bold">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-4">
      Welcome to Your Travel Dashboard ✈️
    </h2>
        </div>
        <div>
       <p>{}</p> 
       

      </div>
        
        <div className=""><TravelStats/></div>
        {/* <div className="relative bottom-[40px]"><QuickStats/></div> */}
         <div><TravelGoals/></div>
       
        <div className="bg-gray-200"><UpcomingTrips/></div>
         <div><AddNewTripButton/></div>
         {/* <div className="relative bottom-[40px]"><TripsList/></div> */}
         
         <div className="relatitve top-[40px] mt-[40px]" ><Trips/></div>
         <div><PastTrips/></div>
         <div><PhotoGalleryDash/></div>
        
         <div> <Budges/> </div>
         <div  className="mt-10"><Notifications/></div>
         <div className="mt-10"><BudgetTracker/></div>
         <div className="mt-10"><NotesJournal/></div>
         {/* <div><MapView/></div> */}
         <div><WeatherInfo/></div>



         <div className="max-sm:hidden min-lg:visible"><Footer/></div>






        {/* <div className="relative bottom-[40px]"><TripDetail/></div> */}
        
        {/* <div><AddTripForm/></div> */}
        
    </div>
  );
};

export default Dashboard;
