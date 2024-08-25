import React from "react";
import { FaCalendarAlt, FaClipboardList, FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorHome = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Welcome, Doctor!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center">
          <FaClipboardList className="text-blue-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Today's Appointments</h2>
            <p className="text-gray-600">Manage and view all appointments scheduled for today.</p>
            <Link to="/doctor-dashboard/appointments" className="text-blue-600 hover:underline">
              View Appointments
            </Link>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center">
          <FaCalendarAlt className="text-green-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
            <p className="text-gray-600">Keep track of your upcoming appointments.</p>
            <Link to="/doctor-dashboard/upcoming" className="text-green-600 hover:underline">
              View Upcoming
            </Link>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg shadow-md flex items-center">
          <FaUserMd className="text-purple-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Manage Patients</h2>
            <p className="text-gray-600">Access and update patient records and information.</p>
            <Link to="/doctor-dashboard/patients" className="text-purple-600 hover:underline">
              Manage Patients
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Important Notices</h2>
        <ul className="list-disc list-inside">
          <li>New guidelines for patient interactions during COVID-19.</li>
          <li>Upcoming hospital event: Annual Medical Conference.</li>
          <li>Reminder: Complete your annual certification by the end of the month.</li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorHome;
