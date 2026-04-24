import React, { useState, useEffect } from "react";
import { Trash2, CheckCircle, XCircle } from "lucide-react";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://apnijourney-api.onrender.com/api/bookings"; // backend URL

  // Fetch bookings from backend
  const fetchBookings = async () => {
    try {
      const res = await axios.get(API_URL);
      setBookings(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Delete booking
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  // Toggle booking status (confirmed/cancelled)
  const handleToggleStatus = async (booking) => {
    try {
      const updatedBooking = {
        ...booking,
        status: booking.status === "Confirmed" ? "Cancelled" : "Confirmed",
      };
      await axios.put(`${API_URL}/${booking._id}/status`, updatedBooking);
      setBookings(
        bookings.map((b) =>
          b._id === booking._id ? { ...b, status: updatedBooking.status } : b
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div className="ml-[26vh] space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bookings Management</h1>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">User</th>
              <th className="p-4">Trip</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{booking.userName}</td>
                <td className="p-4">{booking.tripName}</td>
                <td className="p-4">{booking.amount}</td>
                <td className="p-4">
                  {booking.status === "Confirmed" ? (
                    <span className="text-green-500 font-semibold">
                      Confirmed
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      Cancelled
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="p-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleToggleStatus(booking)}
                    className={`px-3 py-1 rounded-xl text-white transition ${
                      booking.status === "Confirmed"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {booking.status === "Confirmed" ? (
                      <XCircle size={16} />
                    ) : (
                      <CheckCircle size={16} />
                    )}
                  </button>

                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;