import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ShieldCheck,
  ArrowLeft,
  RefreshCcw,
} from "lucide-react";
import TripMateLogo from "../assets/TripMate_app_logo.png";
import { handleError, handleSuccess } from "../utils";

const VerifyForgotOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const [seconds, setSeconds] = useState(60);

  const inputs = useRef([]);

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, []);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const arr = [...otp];
    arr[index] = value;
    setOtp(arr);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length !== 6) {
      return handleError("Enter complete OTP");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://apnijourney-api.onrender.com/api/auth/verify-forgot-otp",
        {
          email,
          otp: code,
        }
      );

      handleSuccess(
        res.data.message || "OTP Verified"
      );

      navigate("/reset-password", {
        state: {
          email,
        },
      });
    } catch (err) {
      handleError(
        err.response?.data?.message ||
          "Invalid OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    try {
      await axios.post(
        "https://apnijourney-api.onrender.com/api/auth/forgot-password",
        {
          email,
        }
      );

      handleSuccess("OTP Sent Again");

      setSeconds(60);
    } catch (err) {
      handleError(
        err.response?.data?.message ||
          "Failed to resend OTP"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-green-100 flex items-center justify-center px-4">

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
      >
        {/* Logo */}

        <div className="flex justify-center items-center gap-3 mb-8">
          <img
            src={TripMateLogo}
            className="w-16 h-16"
          />

          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent">
            Apni
            <span className="text-gray-800">
              Journey
            </span>
          </h1>
        </div>

        <div className="flex justify-center mb-4">
          <ShieldCheck
            className="text-blue-600"
            size={60}
          />
        </div>

        <h2 className="text-3xl font-bold text-center">
          Verify OTP
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Enter the 6-digit code sent to
        </p>

        <p className="text-center font-semibold text-blue-600 mb-8">
          {email}
        </p>

        <form
          onSubmit={verifyOTP}
          className="space-y-8"
        >
          <div className="flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) =>
                  (inputs.current[index] = el)
                }
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) =>
                  handleChange(
                    e.target.value,
                    index
                  )
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                className="w-12 h-14 border-2 rounded-xl text-center text-2xl font-bold outline-none focus:border-blue-600"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold"
          >
            {loading
              ? "Verifying..."
              : "Verify OTP"}
          </button>
        </form>

        <div className="mt-6 text-center">
          {seconds > 0 ? (
            <p className="text-gray-500">
              Resend OTP in{" "}
              <span className="font-bold">
                {seconds}s
              </span>
            </p>
          ) : (
            <button
              onClick={resendOTP}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <RefreshCcw size={18} />
              Resend OTP
            </button>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/forgot-password"
            className="inline-flex items-center gap-2 text-blue-600"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyForgotOTP;