import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TajMahal from "../PalceDetail/TajMahal";
import IndiaGate from "../PalceDetail/IndiaGate";
import Goa from "../PalceDetail/Goa";
import Mumbai from "../PalceDetail/Mumbai";
import Rameshwaram from "../PalceDetail/Rameshwaram";
import Jaipur from "../PalceDetail/Jaipur";

// Sample data — ideally ye data API se aayega
const destinationData = {
  1: {
    name: "Taj Manal",
    state: "Uttar Pradesh",
    description:
      
    <div>
        <TajMahal/>
    </div>,
   
  },
  2: {
    name: "India Gate",
    state: "Delhi",
    description:

    <div>
        <IndiaGate/>
    </div>,
   
  },
  3: {
    name: "Goa",
    state: "Goa",
    description:
    
      <div>
        <Goa/>
      </div>
  },
  4: {
    name: "Mumbai",
    state: "Maharastra",
    description:
     <div>
        <Mumbai/>
      </div>,
  },
  5: {
    name: "Rameshwaram",
    state: "Tamil Nadu",
    description:
      <div>
        <Rameshwaram/>
      </div>,
  },
  6: {
    name: "Jaipur",
    state: "Rajisthan",
    description:

    <div>
        <Jaipur/>
    </div>,
   
  },
};

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinationData[id];

  if (!destination) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Destination not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-9">
      {/* <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-80 object-cover rounded-2xl shadow-lg"
      /> */}
      <h1 className="text-3xl font-bold mt-6">{destination.name}</h1>
      <p className="text-gray-600 italic">{destination.state}</p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        {destination.description}
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        ← Back to Home
      </button>
      
      <br />
      <br /><br /><br /><br />
    </div>
  );
};

export default DestinationDetail;
