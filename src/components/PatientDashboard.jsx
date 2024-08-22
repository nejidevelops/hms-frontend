// src/components/PatientDashboard.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './patients-dashboard/Sidebar';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';

const PatientDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <div className="text-2xl font-semibold">Patient Dashboard</div>
          <div className="relative">
            <button 
              className="text-2xl"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <FaUserCircle />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <button 
                  className="block w-full px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
