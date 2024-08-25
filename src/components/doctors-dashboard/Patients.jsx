import React, { useState } from "react";

// Dummy Data
const initialPatients = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    gender: "Male",
    contact: "john.doe@example.com",
    address: "123 Main St, Springfield",
    medicalHistory: "No significant medical history.",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 45,
    gender: "Female",
    contact: "jane.smith@example.com",
    address: "456 Elm St, Springfield",
    medicalHistory: "Diabetes and hypertension.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 50,
    gender: "Male",
    contact: "michael.johnson@example.com",
    address: "789 Oak St, Springfield",
    medicalHistory: "High cholesterol.",
  },
];

const Patients = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Manage Patients</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">Name</th>
              <th className="px-4 py-2 border-b border-gray-200">Age</th>
              <th className="px-4 py-2 border-b border-gray-200">Gender</th>
              <th className="px-4 py-2 border-b border-gray-200">Contact</th>
              <th className="px-4 py-2 border-b border-gray-200">Address</th>
              <th className="px-4 py-2 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-200">{patient.name}</td>
                <td className="px-4 py-2 border-b border-gray-200">{patient.age}</td>
                <td className="px-4 py-2 border-b border-gray-200">{patient.gender}</td>
                <td className="px-4 py-2 border-b border-gray-200">{patient.contact}</td>
                <td className="px-4 py-2 border-b border-gray-200">{patient.address}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <button
                    onClick={() => handleViewDetails(patient)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for viewing details */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Patient Details</h3>
            <p><strong>Name:</strong> {selectedPatient.name}</p>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Gender:</strong> {selectedPatient.gender}</p>
            <p><strong>Contact:</strong> {selectedPatient.contact}</p>
            <p><strong>Address:</strong> {selectedPatient.address}</p>
            <p><strong>Medical History:</strong> {selectedPatient.medicalHistory}</p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedPatient(null)}
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

export default Patients;
