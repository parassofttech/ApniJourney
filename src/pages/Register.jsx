import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../utils'

const Register = () => {

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // ✅ Handle Input Change (clean version)
  const handleChange = (e) => {
    const { name, value } = e.target

    setSignupInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // ✅ Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, password } = signupInfo

    if (!name || !email || !password) {
      return handleError('All fields are required')
    }

    try {
      setLoading(true)

      const response = await fetch(
        "https://apnijourney-api.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(signupInfo)
        }
      )

      // ❗ Check if server responded
      if (!response) {
        throw new Error("Server not responding")
      }

      const data = await response.json()
      console.log("API RESPONSE 👉", data)

      // ✅ Correct way to handle response
      if (response.ok) {
        handleSuccess(data.message || "Signup successful")

        // navigate to verify page
        navigate('/verify', { state: { email } })

      } else {
        handleError(data.message || "Signup failed")
      }

    } catch (err) {
      console.log("ERROR 👉", err)
      handleError(err.message || "Network error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-100 via-green-50 to-white px-4">

      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-[8px_8px_24px_rgba(66,68,90,0.35)]">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Account 🚀
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={signupInfo.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-lg font-semibold transition
              ${loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 text-white"
              }`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing...
              </div>
            ) : (
              "Sign Up"
            )}
          </button>

        </form>

        {/* Login */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register





// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Register = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const { name, email, password } = form;

//     // ✅ Validation
//     if (!name || !email || !password) {
//       setError("All fields are required!");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address!");
//       return;
//     }

//     if (password.length < 4) {
//       setError("Password must be at least 4 characters long!");
//       return;
//     }

//     // ✅ Backend API call
//     try {
//       const res = await fetch("http://localhost:8000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Registration failed");
//         return;
//       }

//       alert("Registration successful!");
//       setForm({ name: "", email: "", password: "" }); // ✅ Clear form after success
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Try again!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-white flex items-center justify-center px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6"
//       >
//         <div className="flex justify-center mb-4">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/2981/2981011.png"
//             alt="register-logo"
//             className="w-14 h-14"
//           />
//         </div>

//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Create Your Account 🧭
//         </h2>

//         {error && (
//           <p className="text-center text-red-500 bg-red-50 py-2 rounded-xl">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleRegister} className="space-y-4" autoComplete="off">
//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
//               autoComplete="new-name" // ✅ Prevents auto-fill
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
//               autoComplete="new-email" // ✅ Prevents auto-fill
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Create a strong password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
//               autoComplete="new-password" // ✅ Prevents pre-fill
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-md"
//           >
//             Register
//           </button>
//         </form>

//         <div className="text-center text-sm text-gray-500 mt-4">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-green-500 font-medium hover:underline"
//           >
//             Login
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;




