import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserMd, FaClipboardList } from "react-icons/fa";

const DoctorSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-semibold border-b border-gray-700">
        Doctor Dashboard
      </div>
      <nav className="mt-8 flex flex-col space-y-2">
        <NavLink
          to="/doctor-dashboard/home"
          className="flex items-center p-3 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaHome className="mr-2" />
          Home
        </NavLink>
        <NavLink
          to="/doctor-dashboard/patients"
          className="flex items-center p-3 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaUserMd className="mr-2" />
          Patients
        </NavLink>
        <NavLink
          to="/doctor-dashboard/appointments"
          className="flex items-center p-3 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaClipboardList className="mr-2" />
          Appointments
        </NavLink>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
};

export default DoctorSidebar;
