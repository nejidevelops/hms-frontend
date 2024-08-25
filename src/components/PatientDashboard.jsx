// src/components/PatientDashboard.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./patients-dashboard/Sidebar";
import PatientHeader from "./patients-dashboard/Header";
const PatientDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <PatientHeader />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
