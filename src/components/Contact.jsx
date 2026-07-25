import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Sparkles, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all required fields!");
      setStatusType("error");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    try {
      setLoading(true);
      setStatus("Sending your message...");
      setStatusType("info");

      const res = await axios.post("https://apnijourney-api.onrender.com/api/contact/send", formData);

      if (res.data.success) {
        setStatus("Message sent successfully! We'll get back soon.");
        setStatusType("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again!");
      setStatusType("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500/30 via-green-400/30 to-yellow-300/40 text-slate-100 py-24 px-6 relative overflow-hidden selection:bg-blue-500 selection:text-white">
      
      {/* SEO & Meta Tags */}
      <Helmet>
        <title>Contact Us - ApniJourney</title>
        <meta name="description" content="Get in touch with the ApniJourney team for feedback, support, or partnership queries." />
      </Helmet>

      {/* Background Ambient Neon Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase shadow-lg shadow-blue-500/5 backdrop-blur-md">
            <Sparkles size={14} className="animate-pulse" />
            We're Here to Help
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Conversation</span>
          </h1>

          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-xl mx-auto font-normal">
            Have questions, feature suggestions, or feedback? Reach out to our team anytime.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto items-start">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {status && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-2xl flex items-center gap-3 text-sm font-medium ${
                statusType === "success"
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  : statusType === "error"
                  ? "bg-rose-500/10 border border-rose-500/20 text-rose-400"
                  : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
              }`}
            >
              {statusType === "success" && <CheckCircle2 size={18} className="shrink-0" />}
              {statusType === "error" && <AlertCircle size={18} className="shrink-0" />}
              {statusType === "info" && <Sparkles size={18} className="shrink-0 animate-spin" />}
              <span>{status}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none">
                <MapPin size={20} />
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full bg-slate-950/50 text-white pl-12 pr-4 py-4 rounded-2xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition placeholder:text-slate-500 text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none">
                <Mail size={20} />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="w-full bg-slate-950/50 text-white pl-12 pr-4 py-4 rounded-2xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition placeholder:text-slate-500 text-sm sm:text-base"
              />
            </div>

            {/* Subject */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none">
                <Phone size={20} />
              </span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject / Inquiry Topic"
                className="w-full bg-slate-950/50 text-white pl-12 pr-4 py-4 rounded-2xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition placeholder:text-slate-500 text-sm sm:text-base"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                className="w-full bg-slate-950/50 text-white p-4 rounded-2xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition placeholder:text-slate-500 text-sm sm:text-base resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-60"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <Send size={18} />
            </motion.button>

          </form>
        </motion.div>

        {/* Contact Info Details & Direct Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-400 shadow-sm shadow-blue-400" />
              Direct Info
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">Location</h4>
                  <p className="text-slate-400 text-sm mt-0.5">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">Phone Support</h4>
                  <p className="text-slate-400 text-sm mt-0.5">+91 6307478350</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">Email Address</h4>
                  <p className="text-slate-400 text-sm mt-0.5">apnijourneyin@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 via-indigo-950/30 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
              <MessageSquare size={24} />
            </div>
            <h4 className="text-lg font-bold text-white">Quick Response Guarantee</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our team typically replies to queries and feedback within 24 working hours.
            </p>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Contact;