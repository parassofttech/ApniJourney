import React from 'react'
import AddNewTrip from '../AddTrip/AddNewTrip'
import Trips from './Trips'
import MyBookings from '../components/MyBookings'
import TripManager from '../AddTrip/TripManager'
import TravelBooking from '../Home/TravelBooking'

const AddTrip = () => {
  return (
    <div>
       <div><AddNewTrip/></div>
       <div><Trips/></div>
       <div><TravelBooking/></div>
       <div><MyBookings/></div>
       <div><TripManager/></div>
      
    </div>
  )
}

export default AddTrip
