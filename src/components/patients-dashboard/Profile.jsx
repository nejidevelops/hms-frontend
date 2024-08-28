import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    phone_number: '',
    role: 'patient', // Assuming the role is patient
    age: '',
    gender: '',
    date_of_birth: '',
    medical_history: '',
    assigned_doctor: '',
    profile_image: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch profile data on component mount
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://hms-api-0pge.onrender.com/api/users/profile/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch profile data. Please try again.');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', profile);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Profile Image:</label>
        <div className="mt-2 flex items-center">
          <img
            src={profile.profile_image || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="w-24 h-24 rounded-full mr-4"
          />
          <button className="bg-blue-500 text-white p-2 rounded">Change</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={profile.first_name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={profile.last_name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="tel"
            name="phone_number"
            value={profile.phone_number}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth:</label>
          <input
            type="date"
            name="date_of_birth"
            value={profile.date_of_birth}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender:</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Medical History:</label>
          <textarea
            name="medical_history"
            value={profile.medical_history}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
