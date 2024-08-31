import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patient_username: '',
    doctor_username: '',
    date: '',
    time: '',
    notes: '',
    status: 'pending'
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch current user's profile
    axios.get('https://hms-api-0pge.onrender.com/api/users/profile/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => {
        setCurrentUser(response.data.username);
        setNewAppointment(prevState => ({
          ...prevState,
          patient_username: response.data.username,
        }));
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });

    // Fetch doctors
    axios.get('https://hms-api-0pge.onrender.com/api/users/list/doctors/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => {
        if (Array.isArray(response.data)) {
          setDoctors(response.data);
        } else {
          console.error('Unexpected response data for doctors:', response.data);
          setDoctors([]);
        }
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
        setDoctors([]);
      });

    // Fetch appointments
    axios.get('https://hms-api-0pge.onrender.com/api/appointments/list/')
      .then(response => {
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error('Unexpected response data:', response.data);
          setAppointments([]);
        }
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
        setAppointments([]);
      });
  }, []);

  const handleChange = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://hms-api-0pge.onrender.com/api/appointments/create/', newAppointment)
      .then(response => {
        setAppointments([...appointments, response.data]);
        setNewAppointment({
          patient_username: currentUser || '',
          doctor_username: '',
          date: '',
          time: '',
          notes: '',
          status: 'pending'
        });
      })
      .catch(error => {
        console.error('Error creating appointment:', error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Appointments</h2>

      {appointments.length > 0 ? (
        <ul className="space-y-4">
          {appointments.map(appointment => (
            <li key={appointment.id} className="p-4 bg-white shadow rounded flex flex-col gap-2">
              <p className="text-gray-700"><strong>Doctor:</strong> {appointment.doctor.first_name} {appointment.doctor.last_name}</p>
              <p className="text-gray-700"><strong>Date:</strong> {appointment.date}</p>
              <p className="text-gray-700"><strong>Time:</strong> {appointment.time}</p>
              <p className="text-gray-700"><strong>Notes:</strong> {appointment.notes || 'No notes'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No appointments found.</p>
      )}

      <h3 className="text-2xl font-semibold mt-10 text-center text-gray-700">Create a New Appointment</h3>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-600">Patient Username:</label>
          <input
            type="text"
            name="patient_username"
            value={newAppointment.patient_username}
            onChange={handleChange}
            className="border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-600">Doctor:</label>
          <select
            name="doctor_username"
            value={newAppointment.doctor_username}
            onChange={handleChange}
            className="border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select a doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.username} value={doctor.username}>
                {doctor.first_name} {doctor.last_name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-600">Date:</label>
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleChange}
            className="border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-600">Time:</label>
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleChange}
            className="border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-600">Notes (optional):</label>
          <textarea
            name="notes"
            value={newAppointment.notes}
            onChange={handleChange}
            className="border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all duration-200">
          Create Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointments;
