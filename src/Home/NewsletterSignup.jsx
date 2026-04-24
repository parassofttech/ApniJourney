import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-400/30 via-green-400/30 to-blue-300/40 -z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
        >
          Stay Updated ✉️
        </motion.h2>
        <p className="text-gray-500 text-sm mb-6">
          Get exclusive offers and travel tips delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-3 bg-gray-100 p-3 rounded-xl shadow-inner"
        >
          <div className="flex items-center w-full md:w-auto flex-1 bg-white px-3 py-2 rounded-lg border">
            <Mail className="text-gray-500 mr-2" size={18} />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 transition"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
