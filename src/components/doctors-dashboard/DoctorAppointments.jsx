import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showDrugModal, setShowDrugModal] = useState(false);
  const [drugDetails, setDrugDetails] = useState([{ drug: "", dosage: "" }]);

  // Predefined drugs and dosages
  const availableDrugs = [
    "Paracetamol",
    "Ibuprofen",
    "Amoxicillin",
    "Metformin",
    "Atorvastatin",
  ];
  const dosageOptions = ["1 x 1", "1 x 2", "1 x 3", "2 x 1", "2 x 2", "2 x 3"];

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

  // Handle drug details change
  const handleDrugChange = (index, field, value) => {
    const updatedDrugs = [...drugDetails];
    updatedDrugs[index][field] = value;
    setDrugDetails(updatedDrugs);
  };

  // Add a new drug field
  const addDrugField = () => {
    setDrugDetails([...drugDetails, { drug: "", dosage: "" }]);
  };

  // Function to handle API call for updating appointment status
  const updateAppointmentStatus = async (
    id,
    status,
    drugPrescriptions = null
  ) => {
    try {
      const payload = {
        status,
        drug_prescription: drugPrescriptions || {},
      };

      const response = await axios.patch(
        `https://hms-api-0pge.onrender.com/api/appointments/update/${id}/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Update the local state after a successful API call
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: response.data.status }
            : appointment
        )
      );
    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
  };

  // Confirm appointment and optionally recommend drugs
  const handleConfirm = (appointment) => {
    setSelectedAppointment(appointment);
    setShowDrugModal(true);
  };

  const submitDrugRecommendations = () => {
    const drugPrescriptions = drugDetails.reduce((acc, drug) => {
      if (drug.drug && drug.dosage) {
        acc[drug.drug] = drug.dosage;
      }
      return acc;
    }, {});

    updateAppointmentStatus(
      selectedAppointment.id,
      "accepted",
      drugPrescriptions
    );
    setShowDrugModal(false);
    setDrugDetails([{ drug: "", dosage: "" }]);
    setSelectedAppointment(null);
  };

  const handleReject = (id) => {
    updateAppointmentStatus(id, "rejected");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Manage Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">
                Patient Name
              </th>
              <th className="px-4 py-2 border-b border-gray-200">Date</th>
              <th className="px-4 py-2 border-b border-gray-200">Time</th>
              <th className="px-4 py-2 border-b border-gray-200">Reason</th>
              <th className="px-4 py-2 border-b border-gray-200">Status</th>
              <th className="px-4 py-2 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
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
                  <td className="px-4 py-2 border-b border-gray-200 flex gap-2 items-center justify-center">
                    {appointment.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleConfirm(appointment)}
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => handleReject(appointment.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {appointment.status === "accepted" && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
                        Confirmed
                      </span>
                    )}
                    {appointment.status === "rejected" && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-md">
                        Rejected
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-6 text-center text-gray-600 italic border-b border-gray-200"
                >
                  No appointments available at the moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Drug Recommendations */}
      {showDrugModal && selectedAppointment && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              Drug Recommendations
            </h3>
            {drugDetails.map((drug, index) => (
              <div key={index} className="flex gap-4 mb-4">
                <select
                  value={drug.drug}
                  onChange={(e) =>
                    handleDrugChange(index, "drug", e.target.value)
                  }
                  className="w-1/2 p-2 border rounded"
                >
                  <option value="">Select Drug</option>
                  {availableDrugs.map((drugName) => (
                    <option key={drugName} value={drugName}>
                      {drugName}
                    </option>
                  ))}
                </select>
                <select
                  value={drug.dosage}
                  onChange={(e) =>
                    handleDrugChange(index, "dosage", e.target.value)
                  }
                  className="w-1/2 p-2 border rounded"
                >
                  <option value="">Select Dosage</option>
                  {dosageOptions.map((dosage) => (
                    <option key={dosage} value={dosage}>
                      {dosage}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button
              onClick={addDrugField}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
            >
              Add Drug
            </button>
            <div className="mt-6 text-right">
              <button
                onClick={submitDrugRecommendations}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
              >
                Submit
              </button>
              <button
                onClick={() => setShowDrugModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointments;
