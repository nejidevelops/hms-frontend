import React from "react";
import { Outlet } from "react-router-dom";
import DoctorSidebar from "./doctors-dashboard/DoctorSidebar";
import DoctorHeader from "./doctors-dashboard/DoctorsHeader";

const DoctorDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <DoctorHeader />
      <div className="flex flex-1">
        <DoctorSidebar />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
