import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Train,
  Bus,
  Hotel,
  ArrowRight,
  PlaneTakeoff,
  ShieldCheck,
} from "lucide-react";

const travelOptions = [
  {
    id: 1,
    type: "Train",
    icon: <Train className="w-8 h-8 text-blue-500" />,
    description: "Fast-track IRCTC bookings with real-time status.",
    link: "https://www.irctc.co.in/",
    accent: "bg-blue-500",
  },
  {
    id: 2,
    type: "Bus",
    icon: <Bus className="w-8 h-8 text-rose-500" />,
    description: "Intercity luxury bus rides at the best prices.",
    link: "https://www.redbus.in/",
    accent: "bg-rose-500",
  },
  {
    id: 3,
    type: "Hotel",
    icon: <Hotel className="w-8 h-8 text-emerald-500" />,
    description: "Curated premium stays for every budget.",
    link: "https://www.booking.com/",
    accent: "bg-emerald-500",
  },
];

const TravelBooking = () => {
  const [forms, setForms] = useState({});

  const handleChange = (id, e) => {
    const { name, value } = e.target;

    setForms((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [name]: value,
      },
    }));
  };

  const handleBooking = (id, link) => {
  const data = forms[id];

  const isHotel = id === 3;

  if (isHotel) {
    if (!data?.state || !data?.city || !data?.date) {
      alert("⚠️ Please fill State, City and Date!");
      return;
    }
  } else {
    if (!data?.from || !data?.to || !data?.date) {
      alert("⚠️ Please fill all fields!");
      return;
    }
  }

  // 🔥 SAVE TO LOCALSTORAGE (THIS WAS MISSING)
  const previousBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const newBooking = {
    id,
    type: travelOptions.find((o) => o.id === id)?.type,
    ...data,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem(
    "bookings",
    JSON.stringify([...previousBookings, newBooking])
  );

  // open site
  const newTab = window.open(link, "_blank");
  if (!newTab) alert("Popup blocked!");

  // reset form
  setForms((prev) => ({
    ...prev,
    [id]: {},
  }));
};

  return (
    <section className="py-20 px-6 min-h-screen bg-gradient-to-b from-yellow-200/40 to-purple-200/10">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-black">
          Book Your Next <span className="text-blue-600">Trip</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {travelOptions.map((option) => {
          const data = forms[option.id] || {};
          const isHotel = option.id === 3;

          return (
            <motion.div
              key={option.id}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-3xl shadow-lg"
            >
              <div className="flex justify-between mb-4">
                {option.icon}
                <ShieldCheck className="text-green-500" />
              </div>

              <h3 className="text-xl font-bold">{option.type} Booking</h3>
              <p className="text-sm text-gray-500 mb-4">
                {option.description}
              </p>

              {/* INPUTS */}
              <div className="space-y-3">

                {/* TRAIN / BUS */}
                {!isHotel && (
                  <>
                    <input
                      name="from"
                      value={data.from || ""}
                      onChange={(e) => handleChange(option.id, e)}
                      placeholder="From"
                      className="w-full p-3 bg-gray-100 rounded-xl"
                    />

                    <input
                      name="to"
                      value={data.to || ""}
                      onChange={(e) => handleChange(option.id, e)}
                      placeholder="To"
                      className="w-full p-3 bg-gray-100 rounded-xl"
                    />
                  </>
                )}

                {/* HOTEL ONLY */}
                {isHotel && (
                  <>
                    <input
                      name="state"
                      value={data.state || ""}
                      onChange={(e) => handleChange(option.id, e)}
                      placeholder="State"
                      className="w-full p-3 bg-gray-100 rounded-xl"
                    />

                    <input
                      name="city"
                      value={data.city || ""}
                      onChange={(e) => handleChange(option.id, e)}
                      placeholder="City"
                      className="w-full p-3 bg-gray-100 rounded-xl"
                    />
                  </>
                )}

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={data.date || ""}
                    onChange={(e) => handleChange(option.id, e)}
                    className="w-full pl-10 p-3 bg-gray-100 rounded-xl"
                  />
                </div>
              </div>

              <button
                onClick={() => handleBooking(option.id, option.link)}
                className={`mt-5 w-full ${option.accent} text-white py-3 rounded-xl font-bold flex justify-center gap-2`}
              >
                Book Now <ArrowRight />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TravelBooking;