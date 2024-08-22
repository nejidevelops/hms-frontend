import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]); // Initialize as an empty array
  const [newAppointment, setNewAppointment] = useState({
    patient_username: '',
    doctor_username: '',
    date: '',
    time: '',
    notes: '',
  });

  useEffect(() => {
    axios.get('https://hms-api-0pge.onrender.com/api/appointments/list/')
      .then(response => {
        // Check if the response data is an array
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error('Unexpected response data:', response.data);
          setAppointments([]); // Set to an empty array if response is not as expected
        }
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
        setAppointments([]); // Set to an empty array on error
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
          patient_username: '',
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
          <label className="block mb-2">Doctor Username:</label>
          <input
            type="text"
            name="doctor_username"
            value={newAppointment.doctor_username}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
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
