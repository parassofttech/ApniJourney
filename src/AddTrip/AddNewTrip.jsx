

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Camera,
  MapPin,
  Calendar,
  Wallet,
  Star,
  NotebookPen,
  User,
} from "lucide-react";
import { handleError, handleSuccess } from "../utils";
 
const AddTrip = () => {
  const userName = localStorage.getItem("loggedInUser");

const [trip, setTrip] = useState({
  name: userName || "",
  title: "",
  destination: "",
  category: "",
  startDate: "",
  endDate: "",
  budget: "",
  rating: "",
  description: "",
  notes: "",
  photos: [], // File objects store honge
});

const [previewImages, setPreviewImages] = useState([]);
const [message, setMessage] = useState("");
const [progress, setProgress] = useState(0);
const [uploading, setUploading] = useState(false);
 

  //  Progress calculation
  useEffect(() => {
    const fields = ["title", "destination", "startDate"];
    const filled = fields.filter((f) => trip[f] !== "").length;
    setProgress(Math.round((filled / fields.length) * 100));
  }, [trip]);

  //  Handle text change
  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

 

  //  Handle photo upload
 const handlePhotoUpload = (e) => {
  const files = Array.from(e.target.files);

  // Sirf image files allow
  const imageFiles = files.filter((file) =>
    file.type.startsWith("image/")
  );

  if (imageFiles.length === 0) {
    handleError(" Please select valid image files.");
    return;
  }

  const maxSize = 10 * 1024 * 1024; // 10 MB

  const validFiles = imageFiles.filter((file) => {
    if (file.size > maxSize) {
      alert(`${file.name} is larger than 10 MB.`);
      return false;
    }
    return true;
  });

  // Total images 10 se zyada na ho
  const totalImages = trip.photos.length + validFiles.length;

  if (totalImages > 10) {
    handleError("You can upload a maximum of 10 images.");
    return;
  }

  // Purani + nayi images
  setTrip((prev) => ({
    ...prev,
    photos: [...prev.photos, ...validFiles],
  }));

  // Purane previews + naye previews
  const newPreviews = validFiles.map((file) =>
    URL.createObjectURL(file)
  );

  setPreviewImages((prev) => [...prev, ...newPreviews]);

  // Same image dobara select karne ke liye
  e.target.value = "";
};

const removeImage = (index) => {
  URL.revokeObjectURL(previewImages[index]);

  setPreviewImages((prev) =>
    prev.filter((_, i) => i !== index)
  );

  setTrip((prev) => ({
    ...prev,
    photos: prev.photos.filter((_, i) => i !== index),
  }));
};

useEffect(() => {
  return () => {
    previewImages.forEach((url) => URL.revokeObjectURL(url));
  };
}, [previewImages]);

  //  Submit trip (Send to MongoDB)
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!trip.title || !trip.destination || !trip.startDate) {
    handleError("⚠️ Please fill all required fields!");
    return;
  }

  const token = localStorage.getItem("token");

  if (!token) {
    handleError(" Please login first.");
    return;
  }

  try {
    setUploading(true);

    const formData = new FormData();

    // Text Fields
    formData.append("name", trip.name);
    formData.append("title", trip.title);
    formData.append("destination", trip.destination);
    formData.append("category", trip.category);
    formData.append("startDate", trip.startDate);
    formData.append("endDate", trip.endDate);
    formData.append("budget", trip.budget);
    formData.append("rating", trip.rating);
    formData.append("description", trip.description);
    formData.append("notes", trip.notes);

    // Multiple Images
    trip.photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    const response = await axios.post(
      "https://apnijourney-api.onrender.com/api/trips",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.success) {
      handleSuccess(" Trip added successfully!");

      // Reset Form
      setTrip({
        name: userName || "",
        title: "",
        destination: "",
        category: "",
        startDate: "",
        endDate: "",
        budget: "",
        rating: "",
        description: "",
        notes: "",
        photos: [],
      });

      previewImages.forEach((url) => URL.revokeObjectURL(url));
setPreviewImages([]);
      setProgress(0);
    } else {
      handleError(" Failed to save trip.");
    }
  } catch (error) {
    console.error(error);

    handleError(
      error.response?.data?.message || " Image upload failed."
    );
  } finally {
    setUploading(false);

    
  }
};

useEffect(() => {
  return () => {
    previewImages.forEach((url) => URL.revokeObjectURL(url));
  };
}, [previewImages]);

  let getEnquiry =()=>{  
    axios.get(`https://apnijourney-api.onrender.com/api/trips`).then((res)=>{
      return res.data
    }).then((finalData)=>{
        setTripList(finalData.tripList)
    })
  }

  return (
  <div className="flex flex-col w-full relative overflow-hidden">

    {/* Animated Background */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>

    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-indigo-50 to-cyan-100 flex justify-center items-start py-12 px-4 md:px-10 relative z-10">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl grid md:grid-cols-3 gap-8"
      >

        {/* Left Side: Form */}
        <div className="md:col-span-2 bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-10">

          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6 text-center tracking-wide">
            🧳 Add New Trip
          </h2>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 h-3 rounded-full shadow-lg"
            />
          </div>

          {message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center text-sm font-semibold py-3 rounded-xl mb-6 backdrop-blur-md ${
                message.includes("✅")
                  ? "bg-green-100/70 text-green-600"
                  : "bg-red-100/70 text-red-600"
              }`}
            >
              {message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Reusable Input Style */}
            {[
              
              { label: "Trip Title *", name: "title", icon: <NotebookPen className="inline mr-2 text-blue-600" />, placeholder: "e.g. Goa Adventure Trip" },
              { label: "Destination *", name: "destination", icon: <MapPin className="inline mr-2 text-red-500" />, placeholder: "e.g. Goa, India" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block font-semibold text-gray-600 mb-2">
                  {field.icon} {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={trip[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full bg-white/80 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all outline-none"
                />
              </div>
            ))}

            {/* Category */}
            <div>
              <label className="block font-semibold text-gray-600 mb-2">Category</label>
              <select
                name="category"
                value={trip.category}
                onChange={handleChange}
                className="w-full bg-white/80 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              >
                <option value="">Select Category</option>
                <option>Adventure</option>
                <option>Family Trip</option>
                <option>Honeymoon</option>
                <option>Solo Travel</option>
                <option>Road Trip</option>
                <option>Beach Vacation</option>
                <option>Mountain Trek</option>
              </select>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold text-gray-600 mb-2">
                  <Calendar className="inline mr-2 text-indigo-500" /> Start Date *
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={trip.startDate}
                  onChange={handleChange}
                  className="w-full bg-white/80 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-600 mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={trip.endDate}
                  onChange={handleChange}
                  className="w-full bg-white/80 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            {/* Budget & Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold text-gray-600 mb-2">
                  <Wallet className="inline mr-2 text-green-500" /> Estimated Budget (₹)
                </label>
                <input
                  type="number"
                  name="budget"
                  value={trip.budget}
                  onChange={handleChange}
                  placeholder="e.g. 25000"
                  className="w-full bg-white/80 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-600 mb-2">
                  <Star className="inline mr-2 text-yellow-500" /> Rating (1 - 5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={trip.rating}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  placeholder="Give your experience rating"
                  className="w-full bg-white/80 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold text-gray-600 mb-2">Trip Description</label>
              <textarea
                name="description"
                value={trip.description}
                onChange={handleChange}
                rows="4"
                placeholder="Write about your travel experience..."
                className="w-full bg-white/80 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block font-semibold text-gray-600 mb-2">Personal Notes</label>
              <textarea
                name="notes"
                value={trip.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Special memories or notes"
                className="w-full bg-white/80 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block font-semibold text-gray-600 mb-2">
                <Camera className="inline mr-2 text-pink-500" /> Upload Trip Photos
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="w-full bg-white/80 border border-dashed border-blue-300 p-4 rounded-2xl hover:bg-blue-50 transition"
              />
            </div>
              <p className="ml-6 text-gray-600">Each image should be less than 10Mb</p>
            {/* Preview */}
            {previewImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {previewImages.map((src, index) => (
  <div key={index} className="relative">
    <img
      src={src}
      className="h-32 w-full rounded-xl object-cover"
      alt=""
    />

    <button
      type="button"
      onClick={() => removeImage(index)}
      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7"
    >
      ✕
    </button>
  </div>
))}
              </div>
            )}
              
            {/* Submit */}
            <div className="text-center mt-8">
  <motion.button
    whileHover={!uploading ? { scale: 1.05 } : {}}
    whileTap={!uploading ? { scale: 0.95 } : {}}
    type="submit"
    disabled={uploading}
    className={`w-full md:w-auto px-12 py-4 text-white font-bold rounded-2xl transition-all tracking-wide ${
      uploading
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 shadow-[0_15px_40px_rgba(59,130,246,0.35)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.45)]"
    }`}
  >
    {uploading ? (
      <div className="flex items-center justify-center gap-3">
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>Uploading...</span>
      </div>
    ) : (
      "✨ Add Trip"
    )}
  </motion.button>
</div>

          </form>
        </div>

      </motion.div>
    </div>
  </div>
);
};

export default AddTrip;
