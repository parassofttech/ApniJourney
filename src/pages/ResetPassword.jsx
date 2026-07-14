import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import TripMateLogo from "../assets/TripMate_app_logo.png";
import { handleError, handleSuccess } from "../utils";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  // Password Strength
  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = getStrength();

  const strengthColor = [
    "bg-gray-300",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  const strengthText = [
    "",
    "Weak",
    "Fair",
    "Good",
    "Strong",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return navigate("/forgot-password");
    }

    if (!password || !confirmPassword) {
      return handleError("Please fill all fields");
    }

    if (password.length < 8) {
      return handleError("Password must be at least 8 characters");
    }

    if (password !== confirmPassword) {
      return handleError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://apnijourney-api.onrender.com/api/auth/reset-password",
        {
          email,
          password,
        }
      );

      handleSuccess(
        res.data.message || "Password Reset Successfully"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      handleError(
        err.response?.data?.message ||
          "Failed to reset password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-green-100 flex justify-center items-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
      >
        {/* Logo */}

        <div className="flex justify-center items-center gap-3 mb-8">
          <img
            src={TripMateLogo}
            alt=""
            className="w-16 h-16"
          />

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent">
            Apni
            <span className="text-gray-800">
              Journey
            </span>
          </h1>
        </div>

        {/* Icon */}

        <div className="flex justify-center mb-5">
          <CheckCircle
            className="text-green-500"
            size={65}
          />
        </div>

        {/* Heading */}

        <h2 className="text-3xl font-bold text-center">
          Create New Password
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Your new password must be different from the previous one.
        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Password */}

          <div>

            <label className="font-semibold text-gray-700">
              New Password
            </label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">

              <Lock size={20} className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="flex-1 ml-3 outline-none bg-transparent"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff />
                ) : (
                  <Eye />
                )}
              </button>

            </div>

            {/* Strength */}

            {password && (
              <>
                <div className="w-full h-2 rounded-full bg-gray-200 mt-3 overflow-hidden">

                  <div
                    className={`h-full transition-all duration-300 ${strengthColor[strength]}`}
                    style={{
                      width: `${strength * 25}%`,
                    }}
                  />

                </div>

                <p className="text-sm mt-2 font-semibold">
                  Strength :
                  <span
                    className={`ml-2 ${
                      strength === 4
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}
                  >
                    {strengthText[strength]}
                  </span>
                </p>
              </>
            )}

          </div>

          {/* Confirm Password */}

          <div>

            <label className="font-semibold text-gray-700">
              Confirm Password
            </label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">

              <Lock size={20} className="text-gray-400" />

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                className="flex-1 ml-3 outline-none bg-transparent"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                {showConfirm ? (
                  <EyeOff />
                ) : (
                  <Eye />
                )}
              </button>

            </div>

            {confirmPassword &&
              password !== confirmPassword && (
                <p className="text-red-500 text-sm mt-2">
                  Passwords do not match
                </p>
              )}

            {confirmPassword &&
              password === confirmPassword && (
                <p className="text-green-600 text-sm mt-2">
                  Passwords matched ✔
                </p>
              )}

          </div>

          {/* Button */}

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition disabled:opacity-70"
          >
            {loading
              ? "Updating Password..."
              : "Reset Password"}
          </button>

        </form>

        {/* Back */}

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>
        </div>

      </motion.div>

    </div>
  );
};

export default ResetPassword;