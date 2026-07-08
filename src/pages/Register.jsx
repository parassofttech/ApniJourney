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

        <span className="ml-4  text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent tracking-wide">
  Apni<span className="text-gray-800">Journey</span>
</span>

        <h1 className="text-3xl mt-4 font-bold ml-2 text-black/80 mb-6">
          Create Account 
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
            <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    h-0.5
                    w-0
                    bg-cyan-500
                    transition-all
                    duration-300
                    peer-focus:w-full
                  "
                ></span>
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
            <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    h-0.5
                    w-0
                    bg-cyan-500
                    transition-all
                    duration-300
                    peer-focus:w-full
                  "
                ></span>
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

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`block w-[60%] mx-auto bg-blue-700 text-white py-3 rounded-xl font-semibold transition
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
