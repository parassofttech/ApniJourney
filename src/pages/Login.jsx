
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { handleError } from "../utils";
import TripMateLogo   from '../assets/TripMate_app_logo.png'

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if(!form.email || !form.password){
      return handleError("Email or Password is required")
    }

    try {
      const res = await axios.post("https://apnijourney-api.onrender.com/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isAdmin", res.data.isAdmin);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem('loggedInUser', res.data.user.name)
      localStorage.setItem('email', res.data.user.email)
      

      window.dispatchEvent(new Event("storage"));
      
      navigate("/");

    } catch (err) {
      handleError(err.response?.data?.message || "Login failed");
    }
  };


 const googleLogin = async () => {
  try {
    setLoading(true);

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    const res = await axios.post(
      "https://apnijourney-api.onrender.com/api/auth/google-login",
      {
        id: user._id,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }
    );
    
   
    // Token save
    localStorage.setItem("token", res.data.token);
      localStorage.setItem("isAdmin", res.data.user.isAdmin);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem('loggedInUser', res.data.user.name)
      localStorage.setItem('email', res.data.user.email)

    // User data save (optional)
    
    window.dispatchEvent(new Event("storage"));

    navigate("/");

  } catch (error) {
    console.log("Google Login Error:");
  console.log(error.response?.data);
  console.log(error.response?.status);

    handleError(
      error.response?.data?.message || "Google login failed"
    );

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6"
      >
        <div className="flex justify-center mb-2">
          <img
            src={TripMateLogo}
            alt="login-logo"
            className="w-14 h-14"
          />
          <span className="p-2 ml-2 text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent tracking-wide">
  Apni<span className="text-gray-800">Journey</span>
</span>
        </div>

        <h2 className="text-3xl  font-bold  text-blue-700">
           Login 
        </h2>

        {error && (
          <p className="text-red-500 text-center bg-red-50 py-2 rounded-xl">
            {error}
          </p>
        )}

        {/*  AutoComplete disabled */}
        <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
          <div>
            <label className="text-sm text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              autoComplete="new-email" // prevent autofill
              className="
                    peer
                    w-full
                    bg-transparent
                    text-black
                    py-3
                    outline-none
                    border-b
                    border-gray-600
                    placeholder:italic
                    placeholder:text-gray-400
                  "
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password" // prevent autofill
              className="
                    peer
                    w-full
                    bg-transparent
                    text-black
                    py-3
                    outline-none
                    border-b
                    border-gray-600
                    placeholder:italic
                    placeholder:text-gray-400
                  "
            />
          </div>
          <div className="flex justify-start mt-2">
  <Link
    to="/forgot-password"
    className="text-blue-600 text-sm hover:underline"
  >
    Forgot Password?
  </Link>
</div>

          <button
  type="submit"
  className="block w-[50%] mx-auto bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md"
>
  Login
</button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-700 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
      {/* <div className="flex items-center my-6">
  <div className="flex-1 h-px bg-gray-300"></div>

  <span className="px-4 text-sm font-medium text-gray-700 uppercase">
    OR
  </span>

  <div className="flex-1 h-px bg-gray-300"></div>
</div>
      <div className="mt-4">

      </div>
      <button
  onClick={googleLogin}
  className="flex w-[70%] md:w-[60%] lg:w-[45%] items-center justify-center gap-3  rounded-xl border py-3 hover:bg-gray-100 transition"
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    className="w-5 h-5"
  />

  Continue with Google
</button> */}
    </div>
  );
};

export default Login;

