import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Goa from "../PalceDetail/Goa";
import Manali from '../PalceDetail/Manali'
import Jaipur from "../PalceDetail/Jaipur";
import LehLadakh from "../PalceDetail/LehLadakh";
import RishiKeshHaridwar from "../PalceDetail/RishiKeshHaridwar";
import TajMahal from '../PalceDetail/TajMahal';
import Varanasi from '../PalceDetail/Varanasi';
import Darjeeling from "../PalceDetail/Darjeeling";
import Srinagar from '../PalceDetail/Srinagar';
import CherrapunjiMeghalaya from "../PalceDetail/CherrapunjiMeghalaya";
import OotyTamil from '../PalceDetail/OotyTamil';
import Rameshwaram from '../PalceDetail/Rameshwaram';
import Pondicherry from '../PalceDetail/Pondicherry';
import ShillongMeghalaya from '../PalceDetail/ShillongMeghalaya';
import Mumbai from '../PalceDetail/Mumbai';
import Andaman from "../PalceDetail/Andaman";
import Shimla from "../PalceDetail/Shimla";
import Udaipur from "../PalceDetail/Udaipur";
import Mysore from "../PalceDetail/Mysore";
import RannOfKutch from "../PalceDetail/RannOfKutch";
import Hyderabad from "../PalceDetail/Hyderabad";
import KeralaBackwaters from "../PalceDetail/KeralaBackwaters";
import Chhattisgarh from "../PalceDetail/Chhattisgarh";
import Amritsar from "../PalceDetail/Amritsar";
import Jaisalmer from "../PalceDetail/Jaisalmer";
import MountAbu from "../PalceDetail/MountAbu";
import Hampi from "../PalceDetail/Hampi";
import Kodaikanal from "../PalceDetail/Kodaikanal";
import Gokarna from "../PalceDetail/Gokarna";
import Coorg from "../PalceDetail/Coorg";
import Khajuraho from "../PalceDetail/Khajuraho";
import Bhopal from "../PalceDetail/Bhopal";
import Pachmarhi from "../PalceDetail/Pachmarhi";
import Gangtok from "../PalceDetail/Gangtok";
import ZiroValley from "../PalceDetail/ZiroValley";
import Tawang from "../PalceDetail/Tawang";
import KazirangaNationalPark from "../PalceDetail/KazirangaNationalPark";
import Majuli from "../PalceDetail/Majuli";
import DzukouValley from "../PalceDetail/DzukouValley";
import Aizawl from "../PalceDetail/Aizawl";
import Ujjain from "../PalceDetail/Ujjain";
import Pushkar from "../PalceDetail/Pushkar";
import Mahabaleshwar from "../PalceDetail/Mahabaleshwar";
import Lonavala from "../PalceDetail/Lonavala";
import AjantaEllora from "../PalceDetail/AjantaEllora";
import Kanyakumari from "../PalceDetail/Kanyakumari";
import Varkala from "../PalceDetail/Varkala";
import Alleppey from "../PalceDetail/Alleppey";
import Kumbhalgarh from "../PalceDetail/Kumbhalgarh";
import Mandawa from "../PalceDetail/Mandawa";
import Patna from "../PalceDetail/Patna";
import Nalanda from "../PalceDetail/Nalanda";
import Bhubaneswar from "../PalceDetail/Bhubaneswar";

// 🗺️ Destination data matching the IDs from Destinations.jsx
const destinationData = {
  
  "manali": {
    title: "Manali",
    description:
       <div>
         <Manali/>
      </div>,
   
    activities: ["Trekking", "Skiing", "Camping", "Paragliding"],
    
    location: "Himachal Pradesh, India",
  },
  "jaipur": {
    title: "Jaipur",
    description:
      <div>
        <Jaipur/>
      </div>,
   
    activities: ["Sightseeing", "Shopping", "Photography", "Cultural Tours"],
   
    location: "Rajasthan, India",
  },
  "kerala": {
    title: "Kerala",
    description:
      <div>
        <KeralaBackwaters/>
      </div>,
    
    activities: ["Houseboat Ride", "Village Tour", "Fishing", "Bird Watching"],
    
    location: "Kerala, India",
  },
  "ladakh": {
    title: "Ladakh",
    description:
     <div>
        <LehLadakh/>
      </div>,
   
    activities: ["Biking", "Trekking", "Camping", "Photography"],
    
    location: "Leh, India",
  },
  "darjeeling": {
    title: "Darjeeling",
    description:
     <div>
        <Darjeeling/>
      </div>,
    
   location: "West Bengal, India",
  },
   "goa": {
    title: "Goa",
    description:
      <div>
        <Goa/>
      </div>,
    // bestTime: "November to February",
    activities: ["Beach Parties", "Surfing", "Scuba Diving", "Sunbathing"],
    
    location: "Goa, India",
  },
   "rishikesh": {
    title: "Rishikesh",
    description:
     <div>
        <RishiKeshHaridwar/>
      </div>,
   
    activities: ["Biking", "Trekking", "Camping", "Photography"],
    
    location: "Uttarakhand, India",
  },
  "taj-mahal": {
    title: "Taj Mahal",
    description:
     <div>
        <TajMahal/>
      </div>,
  
    location: "Uttar Pradesh, India",
  },
  "varanasi": {
    title: "Varanasi",
    description:
     <div>
        <Varanasi/>
      </div>,
   
    
   location: "Uttar Pradesh, India",
  },
  "andaman-islands": {
    title: "Andaman Islands",
    description:
     <div>
        <Andaman/>
      </div>,
   
    
    
   location: "Bay of Bengal, India",
  },
  "shimla": {
    title: "Shimla",
    description:
     <div>
        <Shimla/>
      </div>,

    
    location: "Himachal Pradesh, India",
  },
  "udaipur": {
    title: "Udaipur",
    description:
     <div>
        <Udaipur/>
      </div>,
   
    
    
   location: "Rajasthan, India",
  },
  "srinagar": {
    title: "Srinagar",
    description:
     <div>
        <Srinagar/>
      </div>,
 
   location: "Jammu & Kashmir, India",
  },
  "chhattisgarh": {
    title: "Chhattisgarh",
    description:
     <div>
        <Chhattisgarh/>
      </div>,

   location: "Chhattisgarh, India",
  },
  "cherrapunji": {
    title: "Cherrapunji",
    description:
     <div>
        <CherrapunjiMeghalaya/>
      </div>,
    
    location: "Meghalaya, India",
  },
  "ooty": {
    title: "Ooty",
    description:
     <div>
        <OotyTamil/>
      </div>,

    location: "Tamil Nadu, India",
  },
  "mysore": {
    title: "Mysore",
    description:
     <div>
        <Mysore/>
      </div>,

  location: "Karnataka, India",
  },
  "rameshwaram": {
    title: "Rameshwaram",
    description:
     <div>
        <Rameshwaram/>
      </div>,
 location: "Tamil Nadu, India",
  },
  "pondicherry": {
    title: "Pondicherry",
    description:
     <div>
        <Pondicherry/>
      </div>,
   location: "Puducherry, India",
  },
  "rann-of-kutch": {
    title: "Rann of Kutch",
    description:
     <div>
        <RannOfKutch/>
      </div>,
 
    location: "Gujarat, India",
  },
  
  "mumbai": {
    title: "Mumbai",
    description:
     <div>
        <Mumbai/>
      </div>,
  location: "Maharashtra, India",
  },
  "hyderabad": {
    title: "Hyderabad",
    description:
     <div>
        <Hyderabad/>
      </div>,
   location: "Telangana, India",
  },
  "amritsar": {
  title: "Amritsar",
  description: <Amritsar />,
  location: "Punjab, India",
},

"jaisalmer": {
  title: "Jaisalmer",
  description: <Jaisalmer />,
  location: "Rajasthan, India",
},

"mount-abu": {
  title: "Mount Abu",
  description: <MountAbu />,
  location: "Rajasthan, India",
},

"kodaikanal": {
  title: "Kodaikanal",
  description: <Kodaikanal />,
  location: "Tamil Nadu, India",
},

"hampi": {
  title: "Hampi",
  description: <Hampi />,
  location: "Karnataka, India",
},

"gokarna": {
  title: "Gokarna",
  description: <Gokarna />,
  location: "Karnataka, India",
},

"coorg": {
  title: "Coorg",
  description: <Coorg />,
  location: "Karnataka, India",
},

"khajuraho": {
  title: "Khajuraho",
  description: <Khajuraho />,
  location: "Madhya Pradesh, India",
},

"bhopal": {
  title: "Bhopal",
  description: <Bhopal />,
  location: "Madhya Pradesh, India",
},

"pachmarhi": {
  title: "Pachmarhi",
  description: <Pachmarhi />,
  location: "Madhya Pradesh, India",
},

"gangtok": {
  title: "Gangtok",
  description: <Gangtok />,
  location: "Sikkim, India",
},

"ziro-valley": {
  title: "Ziro Valley",
  description: <ZiroValley />,
  location: "Arunachal Pradesh, India",
},

"tawang": {
  title: "Tawang",
  description: <Tawang />,
  location: "Arunachal Pradesh, India",
},

"kaziranga": {
  title: "Kaziranga National Park",
  description: <KazirangaNationalPark />,
  location: "Assam, India",
},

"majuli": {
  title: "Majuli",
  description: <Majuli />,
  location: "Assam, India",
},

"dzukou-valley": {
  title: "Dzukou Valley",
  description: <DzukouValley />,
  location: "Nagaland, India",
},

"aizawl": {
  title: "Aizawl",
  description: <Aizawl />,
  location: "Mizoram, India",
},

"ujjain": {
  title: "Ujjain",
  description: <Ujjain />,
  location: "Madhya Pradesh, India",
},

"pushkar": {
  title: "Pushkar",
  description: <Pushkar />,
  location: "Rajasthan, India",
},

"mahabaleshwar": {
  title: "Mahabaleshwar",
  description: <Mahabaleshwar />,
  location: "Maharashtra, India",
},

"lonavala": {
  title: "Lonavala",
  description: <Lonavala />,
  location: "Maharashtra, India",
},

"ajanta-ellora": {
  title: "Ajanta & Ellora Caves",
  description: <AjantaEllora />,
  location: "Maharashtra, India",
},

"kanyakumari": {
  title: "Kanyakumari",
  description: <Kanyakumari />,
  location: "Tamil Nadu, India",
},

"varkala": {
  title: "Varkala",
  description: <Varkala />,
  location: "Kerala, India",
},

"alleppey": {
  title: "Alleppey",
  description: <Alleppey />,
  location: "Kerala, India",
},

"kumbhalgarh": {
  title: "Kumbhalgarh",
  description: <Kumbhalgarh />,
  location: "Rajasthan, India",
},

"mandawa": {
  title: "Mandawa",
  description: <Mandawa />,
  location: "Rajasthan, India",
},

"patna": {
  title: "Patna",
  description: <Patna />,
  location: "Bihar, India",
},

"nalanda": {
  title: "Nalanda",
  description: <Nalanda />,
  location: "Bihar, India",
},

"bhubaneswar": {
  title: "Bhubaneswar",
  description: <Bhubaneswar />,
  location: "Odisha, India",
},

  
 
};

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = destinationData[id];

  if (!data) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Destination Not Found 😢</h2>
        <button
          onClick={() => navigate("/destinations")}
          className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      

      {/* Detail Section */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          {data.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* Best Time Card */}
          {/* <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3 text-cyan-600">
              <Calendar className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Best Time to Visit</h3>
            </div>
            <p className="text-gray-600">{data.bestTime}</p>
          </motion.div> */}

          {/* Activities Card */}
         
        </div>

        {/* Google Map Embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg border">
          <iframe
            title="destination-map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              data.location
            )}&output=embed`}
            className="w-full h-80 border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;
