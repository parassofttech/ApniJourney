import React from "react";
import DestinationCard from "./DestinationCard";

import TajMahal from "../assets/images/tajmahal.webp"

const destinations = [
  {
    name: "Taj Mahal",
    state: "India",
    image: TajMahal,
    description:
     <div>
        <ul className="text-start">
            <li><b>Best for:</b> History & architecture </li>
            <li><b>Highlights:</b> Taj Mahal, Agra Fort, Mehtab Bagh</li>
            <li><b>Best time:</b> November to February</li>
        </ul>
     </div>,
  },
  {
    name: "Manali",
    state: "Himachal Pradesh",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR3KXQM9jumObFgdcyHKs2KOADAQk8VZBcjhJSXJcFVMra8Mfy1OlJfL6WZZB4Cc6CLrb4F_5fM3y88zYKUKv-BycU&s=19",
    description: 
    <div>
        <ul className="text-start">
            <li><b>Best for:</b> Mountains, honeymoon, adventure sports</li>
            <li><b>Highlights:</b>Solang Valley, Rohtang Pass, Paragliding, River Rafting</li>
            <li><b>Best time:</b> March to June, December to February (for snow)</li>   
        </ul>
    </div>,
  },
  {
    name: "Leh-Ladakh",
    state: "jammu & Kashmir",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSBcqo1nOQOED8H8pwdzKkTNMr7KZTP8-hrqQDdfUmi_bajm6X0F1IQbAoOvMEnNIry-Iu5PfYaMm2VtAWhvfll6qs&s=19",
    description:
       <div>
        <ul className="text-start">
            <li><b>Best for: </b> Adventure, Road Trips, Biking
</li>
            <li><b>Highlights: </b> Pangong Lake, Nubra Valley, Magnetic Hill, monasteries
</li>
            <li><b>Best time:</b> May to September
</li>
            
        </ul>
    </div>,
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    image:
      "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Jaipur.jpg?w=1000&ssl=1",
    description:
      <div>
        <ul className="text-start">
            <li><b>Best for: </b> Royal architecture & heritage
</li>
            <li><b>Highlights: </b> Amber Fort, Hawa Mahal, City Palace, local bazaars
</li>
            <li><b>Best time:</b>October to March</li>
            
        </ul>
    </div>,
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    image:
      "https://img.magnific.com/premium-photo/unset-varanasi-ghats-ganges-river-with-boats-sacred-temples_1076263-6699.jpg?semt=ais_hybrid&w=740&q=80",
    description:
      <div>
        <ul className="text-start">
            <li><b>Best for: </b>Spiritual experience
</li>
            <li><b>Highlights: </b> Ganga Aarti, Kashi Vishwanath Temple, boat rides on Ganga

</li>
            <li><b>Best time:</b>October to March
</li>
            
        </ul>
    </div>,
  },
  {
    name: "Kerala",
    state: "Kerala",
    image:
      "https://img.magnific.com/premium-photo/kerala-most-beautiful-place-india_1111209-1012.jpg",
    description:
       <div>
        <ul className="text-start">
            <li><b>Best for: </b>Backwaters, Ayurveda, and nature
</li>
            <li><b>Highlights: </b> Alleppey houseboats, Munnar hills, Thekkady wildlife</li>
            <li><b>Best time:</b>September to March
</li>
            
        </ul>
    </div>,
  },
  {
    name: "Udaipur",
    state: "Rajasthan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73iLDTHiapDv7z2PBqCdIIVchcu4n1mfzOA&s",
    description:
      <div>
        <ul className="text-start">
            <li><b>Best for: </b>Lakes and palaces
</li>
            <li><b>Highlights: </b>Lake Pichola, City Palace, Jag Mandir, boat rides
</li>
            <li><b>Best time:</b>October to March</li>
        </ul>
    </div>,
  },
  {
    name: "RiShiKesh & Haridwar",
    state: "Uttarakhand",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUEJYMzJ3a4Y74HPHE5fHcKK58Z6ZMJl8vDlE2UXwA4Up5gLrLSMZVB8&s=10",
    description:
      <div>
        <ul className="text-start">
            <li><b>Best for: </b>Spirituality & adventure</li>
            <li><b>Highlights: </b>Yoga retreats, Ganga Aarti, river rafting, camping
</li>
            <li><b>Best time:</b>September to April
</li>
            
        </ul>
    </div>,
  },
   {
    name: "Goa",
    state: "Goa",
    image:
      "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Goa-Travel.jpg?w=1000&ssl=1",
    description:
      <div>
        <ul className="text-start">
             <li><b>Best for: </b> Beaches, nightlife, and culture
</li>
            <li><b>Highlights: </b> Baga Beach, Fort Aguada, Dudhsagar Falls, Old Goa churches
</li>
            <li><b>Best time:</b>November to February
</li>
            
        </ul>
    </div>,
  },
  {
    name: "Andaman & Nicobar ",
    state: "Andaman & Nicobar islands",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTMvToRnVYNagM-Ho2M3cBME3PY0Y7aZ4lToUIK4-WpJAAWBaMvAPKx_qGs8jK7Z5QdhjeZWFWq5c1FHInN0elnf6eG&s=19",
    description:
       <div>
        <ul className="text-start">
            <li><b>Best for: </b>Beach lovers & scuba diving
</li>
            <li><b>Highlights: </b>Radhanagar Beach, Cellular Jail, Havelock Island</li>
            <li><b>Best time:</b> October to May
</li>
            
        </ul>
    </div>,
  },
 
];

const DestPopular = () => {
  return (
    <div className="min-h-[300px] bg-gray-50">
      <DestinationCard destinations={destinations} />
    </div>
  );
};

export default DestPopular;
