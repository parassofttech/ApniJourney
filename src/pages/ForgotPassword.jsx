import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {
  Mail,
  ArrowLeft,
  Send,
  Loader2,
} from "lucide-react";
import TripMateLogo from "../assets/TripMate_app_logo.png";
import { handleError, handleSuccess } from "../utils";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return handleError("Please enter your email");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://apnijourney-api.onrender.com/api/auth/forgot-password",
        {
          email,
        }
      );

      handleSuccess(
        res.data.message || "OTP sent successfully"
      );

      navigate("/verify-forgot-otp", {
        state: {
          email,
        },
      });
    } catch (err) {
      handleError(
        err.response?.data?.message ||
          "Unable to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-green-100 flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
      >
        {/* Logo */}

        <div className="flex justify-center items-center gap-3 mb-8">
          <img
            src={TripMateLogo}
            alt="logo"
            className="w-16 h-16"
          />

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent">
            Apni
            <span className="text-gray-800">
              Journey
            </span>
          </h1>
        </div>

        {/* Heading */}

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Forgot Password
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Don't worry! Enter your registered email
          address and we'll send you a verification
          OTP.
        </p>

        {/* Form */}

        <form
          onSubmit={handleForgotPassword}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600 transition">
              <Mail
                className="text-gray-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 ml-3 outline-none bg-transparent"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition flex justify-center items-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  className="animate-spin"
                />
                Sending OTP...
              </>
            ) : (
              <>
                <Send size={18} />
                Send OTP
              </>
            )}
          </button>
        </form>

        {/* Back */}

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;