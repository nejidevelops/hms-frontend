// src/components/patients-dashboard/PatientHeader.jsx
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PatientHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("accessToken"); // Assuming you're using a token-based system
    window.location.href = "/login"; // Redirect to the login page after logout
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Patient Dashboard</h1>
      <div className="relative">
        <FaUserCircle
          size={28}
          onClick={handleDropdownToggle}
          className="cursor-pointer"
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
            <Link
              to="/patient-dashboard/profile"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              to="/patient-dashboard/settings"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientHeader;
