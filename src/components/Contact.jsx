import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    setStatus("⚠️ Please fill all required fields!");
    return;
  }

  try {
    const res = await axios.post("https://apnijourney-api.onrender.com/api/contact/send", formData);

    if (res.data.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  } catch (error) {
    setStatus("❌ Something went wrong. Try again!");
  }

  setTimeout(() => setStatus(""), 4000);
};


  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-400/30 via-green-400/30 to-yellow-300/40 -z-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          📬 Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mt-3 text-lg"
        >
          Have questions or feedback? Reach out to us anytime!
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-8 space-y-6 hover:shadow-3xl transition-all"
        >
          {status && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center bg-green-100 text-green-700 py-2 rounded-xl font-medium"
            >
              {status}
            </motion.div>
          )}

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 p-4 rounded-xl pl-12 focus:ring-2 focus:ring-blue-400 transition"
            />
            <MapPin className="absolute left-4 top-4 w-5 h-5 text-blue-500" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4 rounded-xl pl-12 focus:ring-2 focus:ring-blue-400 transition"
            />
            <Mail className="absolute left-4 top-4 w-5 h-5 text-blue-500" />
          </div>

          {/* Subject */}
          <div className="relative">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-gray-300 p-4 rounded-xl pl-12 focus:ring-2 focus:ring-blue-400 transition"
            />
            <Phone className="absolute left-4 top-4 w-5 h-5 text-blue-500" />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="6"
            className="w-full border border-gray-300 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white shadow-2xl rounded-3xl p-8 space-y-4 hover:shadow-3xl transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">📍 Contact Here </h3>
            <p className="text-gray-600 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500" /> Lucknow , Uttar Pradesh, India
            </p>
            <p className="text-gray-600 flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" /> +91 6307478350
            </p>
            <p className="text-gray-600 flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" /> apnijourneyin@gmail.com
            </p>
          </div>

          {/* <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1234567890!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63c1234567%3A0x1234567890abcdef!2sMumbai!5e0!3m2!1sen!2sin!4v1697846320123!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-3xl"
            ></iframe>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
