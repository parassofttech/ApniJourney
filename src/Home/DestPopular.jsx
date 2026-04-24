import React from "react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    name: "Taj Mahal",
    state: "India",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
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
      "https://www.naturetravelagency.com/uploads/1703234831best%20time%20to%20visit%20Manali%20for%20snowfall.jpg",
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
      "https://www.kashmirtourpackage.org/blog/wp-content/uploads/2024/02/Leh-Ladakh.jpg",
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
      "https://d22eux7aqicogj.cloudfront.net/assets/destination-hero-image/varanasi.webp",
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
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
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
      "https://seasontours.org/wp-content/uploads/2024/03/2-13.webp",
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
      "https://www.easeindiatrip.com/blog/wp-content/uploads/2024/11/Andaman-and-Nicobar-Islands-04.jpg",
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
