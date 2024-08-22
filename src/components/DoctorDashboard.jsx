import React from "react";
import { Outlet } from "react-router-dom";

const DoctorDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Doctor Dashboard</h2>
      <Outlet />
    </div>
  );
};

export default DoctorDashboard;
