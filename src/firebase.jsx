// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwnUq_ATv-xGz70m6Kuqg-M1AUDLUku8o",
  authDomain: "travelapp-113.firebaseapp.com",
  projectId: "travelapp-113",
  storageBucket: "travelapp-113.firebasestorage.app",
  messagingSenderId: "1036269365609",
  appId: "1:1036269365609:web:b1dc52c8eefe736881b5f8",
  measurementId: "G-W2FMV26DGX"
};



// const firebaseConfig = {
//   apiKey: "AIzaSyCCjNuwn9Uq9MKbHY8FZDkef9fbQKy9gHg",
//   authDomain: "tripmate11-3.firebaseapp.com",
//   projectId: "tripmate11-3",
//   storageBucket: "tripmate11-3.firebasestorage.app",
//   messagingSenderId: "444197583935",
//   appId: "1:444197583935:web:350a7f3e2ae7fa0509cc8a",
//   measurementId: "G-TYHVN1M65R"
// };



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();