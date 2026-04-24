
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://apnijourney-api.onrender.com/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isAdmin", res.data.isAdmin);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem('loggedInUser', res.data.user.name)
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };


  const googleLogin = async ()=>{
    const result = await signInWithPopup(auth, provider);

    const res = await axios.post("https://apnijourney-api.onrender.com/api/auth/google-login",{
      name: result.user.displayName,
      email: result.user.email
    });

    localStorage.setItem("token",res.data.token);
    navigate("/");
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
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="login-logo"
            className="w-14 h-14"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-blue-700">
          Welcome & Login 👋
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
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none"
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
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md"
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
      <div className="mt-9">

      </div>
      <div>
        <button onClick={googleLogin}>
        Continue with Google
      </button>
      </div>
    </div>
  );
};

export default Login;





///  this right

// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { handleError, handleSuccess } from '../utils'


// const Login = () => {
//   const [loginInfo, setLoginInfo] = useState({
//     email: '',
//     password: ''
//   })

//   const navigate = useNavigate()

//   const handlechange = (e) => {
//     const inputValue = e.target.value
//     const inputName = e.target.name
//     const copyloginInfo = { ...loginInfo }
//     copyloginInfo[inputName] = inputValue
//     setLoginInfo(copyloginInfo)
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     const { email, password } = loginInfo

//     if (!email || !password) {
//       return handleError('Email and password are required')
//     }

//     try {
//       const url = "http://localhost:8000/api/auth/login"
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginInfo)
//       })

//       const result = await response.json()
//       const { success, message, jwtToken, name, error } = result

//       if (success) {
//         handleSuccess(message)
//         localStorage.setItem('token', jwtToken)
//         localStorage.setItem('loggedInUser', name)
//         setTimeout(() => navigate('/'), 100)
//       } else if (error) {
//         handleError(error?.details[0].message)
//       } else {
//         handleError(message)
//       }
//     } catch (err) {
//       handleError(err)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center  from-blue-100 to-blue-300 px-4">
      
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-[8px_8px_24px_0px_rgba(66,68,90,1)] p-8">
        
//         <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//           Welcome Back 👋
//         </h1>

//         <form onSubmit={handleLogin} className="space-y-5">

//           <div>
//             <label className="block text-gray-600 font-medium mb-1">
//               Email
//             </label>
//             <input
//               onChange={handlechange}
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={loginInfo.email}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600 font-medium mb-1">
//               Password
//             </label>
//             <input
//               onChange={handlechange}
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={loginInfo.password}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-6">
//           Don&apos;t have an account?{" "}
//           <Link
//             to="/signup"
//             className="text-blue-700 font-semibold hover:underline"
//           >
//             Signup
//           </Link>
//         </p>

//       </div>
//     </div>
//   )
// }

// export default Login




// it is trial


// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { handleError, handleSuccess } from '../utils'


// const Login = () => {
//   const [loginInfo, setLoginInfo] = useState({
//     email: '',
//     password: ''
//   })

//   const navigate = useNavigate()

//   const handlechange = (e) => {
//     const inputValue = e.target.value
//     const inputName = e.target.name
//     const copyloginInfo = { ...loginInfo }
//     copyloginInfo[inputName] = inputValue
//     setLoginInfo(copyloginInfo)
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     const { email, password } = loginInfo

//     if (!email || !password) {
//       return handleError('Email and password are required')
//     }

//     try {
//       const url = "http://localhost:8000/api/auth/login"
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginInfo)
//       })

//       const result = await response.json()
//       const { success, message, jwtToken, name, error } = result

//       if (success) {
//         handleSuccess(message)
//         localStorage.setItem('token', jwtToken)
//         localStorage.setItem('loggedInUser', name)
//         setTimeout(() => navigate('/'), 100)
//       } else if (error) {
//         handleError(error?.details[0].message)
//       } else {
//         handleError(message)
//       }
//     } catch (err) {
//       handleError(err)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center  from-blue-100 to-blue-300 px-4">
      
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-[8px_8px_24px_0px_rgba(66,68,90,1)] p-8">
        
//         <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//           Welcome Back 👋
//         </h1>

//         <form onSubmit={handleLogin} className="space-y-5">

//           <div>
//             <label className="block text-gray-600 font-medium mb-1">
//               Email
//             </label>
//             <input
//               onChange={handlechange}
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={loginInfo.email}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600 font-medium mb-1">
//               Password
//             </label>
//             <input
//               onChange={handlechange}
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={loginInfo.password}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-6">
//           Don&apos;t have an account?{" "}
//           <Link
//             to="/signup"
//             className="text-blue-700 font-semibold hover:underline"
//           >
//             Signup
//           </Link>
//         </p>

//       </div>
//     </div>
//   )
// }

// export default Login

