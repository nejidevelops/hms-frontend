// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaCalendarAlt, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 flex flex-col">
      <div className="p-4 text-center text-2xl font-semibold border-b border-gray-700">
        Patient Dashboard
      </div>
      <nav className="flex-grow mt-6">
        <ul>
          <li>
            <NavLink 
              to="/patient-dashboard/home" 
              className="flex items-center p-4 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaHome className="mr-3" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/patient-dashboard/profile" 
              className="flex items-center p-4 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaUser className="mr-3" /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/patient-dashboard/appointments" 
              className="flex items-center p-4 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaCalendarAlt className="mr-3" /> Appointments
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/patient-dashboard/reports" 
              className="flex items-center p-4 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaFileAlt className="mr-3" /> Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
