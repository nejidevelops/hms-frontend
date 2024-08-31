import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Fetch appointments for the logged-in doctor
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "https://hms-api-0pge.onrender.com/api/appointments/list/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  // Function to handle API call for updating appointment status
  const updateAppointmentStatus = async (id, status) => {
    try {
      const response = await axios.patch(
        `https://hms-api-0pge.onrender.com/api/appointments/update/${id}/`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Update the local state after a successful API call
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === id ? { ...appointment, status: response.data.status } : appointment
        )
      );
    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
  };

  // Functions to confirm or cancel the appointment
  const handleConfirm = (id) => {
    updateAppointmentStatus(id, "accepted");
  };

  const handleCancel = (id) => {
    updateAppointmentStatus(id, "cancelled");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Manage Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">Patient Name</th>
              <th className="px-4 py-2 border-b border-gray-200">Date</th>
              <th className="px-4 py-2 border-b border-gray-200">Time</th>
              <th className="px-4 py-2 border-b border-gray-200">Reason</th>
              <th className="px-4 py-2 border-b border-gray-200">Status</th>
              <th className="px-4 py-2 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-200">
                  {`${appointment.patient.first_name} ${appointment.patient.last_name}`}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {appointment.date}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {appointment.time}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {appointment.notes || "N/A"}
                </td>
                <td
                  className={`px-4 py-2 border-b border-gray-200 ${
                    appointment.status === "pending"
                      ? "text-yellow-600"
                      : appointment.status === "accepted"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {appointment.status}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <button
                    onClick={() => handleViewDetails(appointment)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleConfirm(appointment.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mr-2"
                    disabled={appointment.status === "accepted"}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleCancel(appointment.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    disabled={appointment.status === "cancelled"}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for viewing details */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Appointment Details</h3>
            <p>
              <strong>Patient Name:</strong>{" "}
              {`${selectedAppointment.patient.first_name} ${selectedAppointment.patient.last_name}`}
            </p>
            <p>
              <strong>Date:</strong> {selectedAppointment.date}
            </p>
            <p>
              <strong>Time:</strong> {selectedAppointment.time}
            </p>
            <p>
              <strong>Reason:</strong> {selectedAppointment.notes || "N/A"}
            </p>
            <p>
              <strong>Status:</strong> {selectedAppointment.status}
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedAppointment(null)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointments;
