import React from "react";
import { Calendar, MapPin, Star } from "lucide-react";

const TripCard = ({ trip }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
      <div className="h-48 w-full overflow-hidden relative">
        <img
          src={`https://source.unsplash.com/400x300/?${trip.destination}`}
          alt={trip.destination}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          Upcoming
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {trip.destination}
          </h3>

          <div className="flex items-center text-gray-500 text-sm mb-2 space-x-2">
            <Calendar size={16} />
            <span>
              {trip.startDate} - {trip.endDate}
            </span>
          </div>

          <div className="flex items-center text-gray-500 text-sm mb-2 space-x-2">
            <MapPin size={16} />
            <span>{trip.destination.split(",")[0]}</span>
          </div>

          {trip.notes && (
            <p className="text-gray-600 text-sm mt-2">{trip.notes}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
