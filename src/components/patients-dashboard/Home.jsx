import React from 'react'

function Home() {
  return (
    <><div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
      <p>No upcoming appointments.</p>
    </div><div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Medical History</h2>
        <p>Your medical history is currently empty.</p>
      </div><div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <p>First Name: [First Name]</p>
        <p>Last Name: [Last Name]</p>
        <p>Email: [Email]</p>
      </div></>
  )
}

export default Home