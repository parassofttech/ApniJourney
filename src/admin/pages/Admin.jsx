import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Sidebar from "../components/Sidebar";



const Admin = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex">

     

      <Sidebar/>
      <AdminDashboard/>
     

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
      

    </div>
  );
};

export default Admin;