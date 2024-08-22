import React from 'react';

export default function PatientDashboard() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
      <p className="text-lg mb-4">Welcome to your dashboard. Here you can manage your appointments, view your medical history, and update your profile.</p>
      
      {/* Example sections */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        <p>No upcoming appointments.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Medical History</h2>
        <p>Your medical history is currently empty.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <p>First Name: [First Name]</p>
        <p>Last Name: [Last Name]</p>
        <p>Email: [Email]</p>
      </div>
    </div>
  );
}
