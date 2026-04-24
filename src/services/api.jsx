import axios from "axios";

const API = axios.create({
  baseURL: "https://apnijourney-api.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Trips
export const getTrips = () => API.get("/trips");
export const addTrip = (data) => API.post("/trips", data);

// Auth
export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
