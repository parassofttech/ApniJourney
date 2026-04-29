import { Routes, Route } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import Dashboard from "../pages/Dashboard";
import Trips from "../pages/AdminTrips";
import Users from "../pages/Users";
import Bookings from "../pages/Bookings";
import ContactMessages from "../pages/ContactMessages";
import Settings from "../pages/Settings";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="trips" element={<Trips />} />
        <Route path="users" element={<Users />} />
        <Route path="message" element={<ContactMessages />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>

    
  );
};

export default AdminRoutes;


// import { Navigate } from "react-router-dom";

// const AdminRoute = ({ children }) => {
//   const isAdmin = localStorage.getItem("isAdmin");

//   return isAdmin === "true" ? children : <Navigate to="/" />;
// };

// export default AdminRoute;