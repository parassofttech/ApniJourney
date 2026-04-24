import React, { useState } from "react";

const TripForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = { title, destination, startDate, endDate };
    onSubmit(newTrip);
    setTitle("");
    setDestination("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow rounded-xl space-y-3"
    >
      <input
        type="text"
        placeholder="Trip Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Save Trip
      </button>
    </form>
  );
};

export default TripForm;
