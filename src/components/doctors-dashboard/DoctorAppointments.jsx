import React, { useState } from "react";

// Dummy Data
const initialAppointments = [
  {
    id: 1,
    patientName: "John Doe",
    date: "2024-08-30",
    time: "10:00 AM",
    reason: "Routine Checkup",
    status: "Pending",
    details: "John has been experiencing mild headaches and fatigue.",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    date: "2024-08-31",
    time: "11:30 AM",
    reason: "Follow-up Visit",
    status: "Confirmed",
    details: "Jane is coming in for a follow-up on her recent surgery.",
  },
  {
    id: 3,
    patientName: "Michael Johnson",
    date: "2024-09-01",
    time: "02:00 PM",
    reason: "Blood Test",
    status: "Cancelled",
    details: "Michael needs to take a blood test as part of his annual checkup.",
  },
];

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleConfirm = (id) => {
    // Simulate an API call to confirm the appointment
    setTimeout(() => {
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: "Confirmed" }
            : appointment
        )
      );
    }, 500);
  };

  const handleCancel = (id) => {
    // Simulate an API call to cancel the appointment
    setTimeout(() => {
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: "Cancelled" }
            : appointment
        )
      );
    }, 500);
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
                  {appointment.patientName}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {appointment.date}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {appointment.time}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {appointment.reason}
                </td>
                <td
                  className={`px-4 py-2 border-b border-gray-200 ${
                    appointment.status === "Pending"
                      ? "text-yellow-600"
                      : appointment.status === "Confirmed"
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
                    disabled={appointment.status === "Confirmed"}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleCancel(appointment.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    disabled={appointment.status === "Cancelled"}
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
            <p><strong>Patient Name:</strong> {selectedAppointment.patientName}</p>
            <p><strong>Date:</strong> {selectedAppointment.date}</p>
            <p><strong>Time:</strong> {selectedAppointment.time}</p>
            <p><strong>Reason:</strong> {selectedAppointment.reason}</p>
            <p><strong>Status:</strong> {selectedAppointment.status}</p>
            <p><strong>Details:</strong> {selectedAppointment.details}</p>
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
