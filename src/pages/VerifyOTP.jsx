import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ShieldCheck, Loader2 } from "lucide-react";
import { handleError, handleSuccess } from "../utils";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ email auto aayega
  const email = location.state?.email;

  // ❗ safety (agar direct open kare)
  if (!email) {
    navigate("/signup");
  }

  const verify = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        "https://apnijourney-api.onrender.com/api/auth/verify-otp",
        { email, otp }
      );

      if (data.success) {
        handleSuccess("OTP Verified 🎉");
        navigate("/login");
      }
    } catch (error) {
      handleError(
        error.response?.data?.message || "Something went wrong ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-10"
      >

        <div className="text-center mb-8">
          <ShieldCheck className="mx-auto text-indigo-600 mb-3" size={32} />
          <h2 className="text-3xl font-bold">Enter OTP</h2>
          <p className="text-gray-500 text-sm">
            OTP sent to your email
          </p>
        </div>

        {/* OTP ONLY */}
        <input
          type="text"
          maxLength={6}
          placeholder="Enter OTP"
          className="w-full px-4 py-3 border rounded-xl mb-6 text-center text-lg tracking-widest"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={verify}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Verifying...
            </>
          ) : (
            "Verify OTP"
          )}
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="mt-5 text-gray-600 hover:text-blue-600"
        >
          ← Back
        </button>

      </motion.div>
    </div>
  );
}





// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { Mail, ShieldCheck, Loader2 } from "lucide-react";
// import { handleError, handleSuccess } from "../utils";

// export default function VerifyOTP() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);
// const [countdown, setCountdown] = useState(0);
//   const navigate = useNavigate();

//   const verify = async () => {
//   if (!email || !otp) {
//     alert("Please enter email and OTP");
//     return;
//   }

//   try {
//     setLoading(true);

//     const { data } = await axios.post(
//       "http://localhost:8000/api/auth/verify-otp",
//       { email, otp }
//     );

//     if (data.success) {
      
//       handleSuccess(data.message || "OTP Verified Successfully 🎉" )
//       navigate("/login");
//     }

//   } catch (error) {
//     const message =
//       error.response?.data?.message || "Something went wrong ❌";

//     handleError(message)
//   } finally {
//     setLoading(false);
//   }
// };



  
// const resendOtp = async () => {
//   try {
//     setResendLoading(true);

//     const response = await axios.post(
//       "http://localhost:8000/api/auth/resend-otp",
//       { email }
//     );

//     console.log(response.data);
//     alert("OTP sent successfully ✅");

//   } catch (error) {
//     console.log(error.response?.data || error.message);
//     alert(error.response?.data?.message || "Something went wrong ❌");
//   } finally {
//     setResendLoading(false);
//   }
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.95 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md bg-white/60 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 border border-white/40"
//       >
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//             <ShieldCheck className="text-indigo-600" size={32} />
//           </div>
//           <h2 className="text-3xl font-black text-gray-800">
//             Verify OTP
//           </h2>
//           <p className="text-gray-500 text-sm mt-2">
//             Enter your email and OTP sent to your inbox
//           </p>
//         </div>

//         {/* Email Input */}
//         <div className="mb-5">
//           <label className="text-xs font-bold text-gray-600 uppercase tracking-widest">
//             Email
//           </label>
//           <div className="flex items-center gap-3 mt-2 bg-white rounded-xl px-4 py-3 border border-gray-200 focus-within:border-indigo-500 transition">
//             <Mail size={18} className="text-gray-400" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full outline-none bg-transparent text-gray-700"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* OTP Input */}
//         <div className="mb-8">
//           <label className="text-xs font-bold text-gray-600 uppercase tracking-widest">
//             OTP Code
//           </label>
//           <input
//             type="text"
//             placeholder="Enter 6-digit OTP"
//             maxLength={6}
//             className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none transition"
//             onChange={(e) => setOtp(e.target.value)}
//           />
//         </div>

//         {/* Verify Button */}
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           onClick={verify}
//           disabled={loading}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
//         >
//           {loading ? (
//             <>
//               <Loader2 className="animate-spin" size={18} />
//               Verifying...
//             </>
//           ) : (
//             "Verify Now"
//           )}
//         </motion.button>

//         {/* Footer */}
//         {/* <p className="text-center text-xs text-gray-400 mt-6">
//   Didn't receive OTP?{" "}
  
//   {countdown > 0 ? (
//     <span className="text-gray-400 font-semibold">
//       Resend in {countdown}s
//     </span>
//   ) : (
//     <span
//       onClick={resendOtp}
//       className={`font-bold cursor-pointer transition-all ${
//         resendLoading
//           ? "text-gray-400 cursor-not-allowed"
//           : "text-indigo-600 hover:underline"
//       }`}
//     >
//       {resendLoading ? "Sending..." : "Resend"}
//     </span>
//   )}
// </p> */}

// <button
//   type="button"
//   onClick={() => navigate('/signup')}
//   className="mt-6 text-gray-700 hover:text-blue-700 
//   font-medium transition duration-200"
// >
//   ← Back to Signup
// </button>
//       </motion.div>
//     </div>
//   );
// }









