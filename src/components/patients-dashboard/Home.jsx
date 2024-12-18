import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [userProfile, setUserProfile] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user profile and appointments data on component mount
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const headers = { Authorization: `Bearer ${token}` };

        // Fetch user profile
        const profileResponse = await axios.get(
          "https://hms-api-0pge.onrender.com/api/users/profile/",
          { headers }
        );
        setUserProfile(profileResponse.data);

        // Fetch user appointments
        const appointmentsResponse = await axios.get(
          "https://hms-api-0pge.onrender.com/api/appointments/list/",
          { headers }
        );
        setAppointments(appointmentsResponse.data);
      } catch (err) {
        setError("Failed to load data.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Upcoming Appointments
        </h2>
        {appointments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-800 mb-2">
                  <strong className="text-blue-600">Doctor:</strong>{" "}
                  {appointment.doctor.first_name} {appointment.doctor.last_name}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong className="text-blue-600">Date:</strong>{" "}
                  {appointment.date}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong className="text-blue-600">Time:</strong>{" "}
                  {appointment.time}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong className="text-blue-600">Status:</strong>{" "}
                  <span
                    className={`inline-block px-2 py-1 rounded ${
                      appointment.status === "accepted"
                        ? "bg-green-100 text-green-700"
                        : appointment.status === "cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {appointment.status.charAt(0).toUpperCase() +
                      appointment.status.slice(1)}
                  </span>
                </p>
                <p className="text-gray-800">
                  <strong className="text-blue-600">Notes:</strong>{" "}
                  {appointment.notes || "No notes available"}
                </p>
                {appointment.status === "accepted" &&
                  appointment.drug_prescription && (
                    <div className="mt-6 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex justify-center items-center">
                          💊
                        </div>
                        <p className="ml-3 text-lg font-semibold text-gray-800">
                          Drug Prescription
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <ul className="space-y-2">
                          {Object.entries(appointment.drug_prescription).map(
                            ([drug, dosage]) => (
                              <li
                                key={drug}
                                className="flex justify-between items-center bg-white rounded-md p-3 shadow-sm border border-gray-300"
                              >
                                <span className="text-gray-700 font-medium">
                                  {drug}
                                </span>
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm font-semibold">
                                  {dosage}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center italic">
            No appointments available at the moment.
          </p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Medical History</h2>
        {userProfile?.medical_history ? (
          <p>{userProfile.medical_history}</p>
        ) : (
          <p>Your medical history is currently empty.</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        {userProfile ? (
          <>
            <p>
              <strong>First Name:</strong> {userProfile.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {userProfile.last_name}
            </p>
            <p>
              <strong>Email:</strong> {userProfile.email}
            </p>
          </>
        ) : (
          <p>Unable to fetch profile information.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
