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
  });

  const [currentUser, setCurrentUser] = useState(null);

  // Dummy array of doctors
  const doctors = [
    { username: 'drsmith', first_name: 'John', last_name: 'Smith' },
    { username: 'drjones', first_name: 'Emma', last_name: 'Jones' },
    { username: 'drbrown', first_name: 'Michael', last_name: 'Brown' },
  ];

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
        });
      })
      .catch(error => {
        console.error('Error creating appointment:', error);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Appointments</h2>

      {appointments.length > 0 ? (
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id} className="mb-4 p-4 bg-white shadow rounded">
              <p><strong>Doctor:</strong> {appointment.doctor.first_name} {appointment.doctor.last_name}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Notes:</strong> {appointment.notes || 'No notes'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}

      <h3 className="text-xl font-semibold mt-6">Create a New Appointment</h3>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label className="block mb-2">Patient Username:</label>
          <input
            type="text"
            name="patient_username"
            value={newAppointment.patient_username}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            disabled // Disable the input to prevent modification
          />
        </div>
        <div>
          <label className="block mb-2">Doctor:</label>
          <select
            name="doctor_username"
            value={newAppointment.doctor_username}
            onChange={handleChange}
            className="border p-2 rounded w-full"
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
        <div>
          <label className="block mb-2">Date:</label>
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Time:</label>
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Notes (optional):</label>
          <textarea
            name="notes"
            value={newAppointment.notes}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          Create Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointments;
