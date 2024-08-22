import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone_number: "",
    role: "",
    specialization: "",
    age: "",
    availability: false,
    gender: "",
    date_of_birth: "",
    medical_history: "",
    assigned_doctor: "",
    profile_image: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hms-api-0pge.onrender.com/api/users/signup/",
        formData
      );
      setMessage("User registered successfully!");
      navigate('/login')
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-32 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            pattern="^\+?1?\d{9,15}$"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          >
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Optional"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Optional"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Availability</label>
          <input
            type="checkbox"
            name="availability"
            checked={formData.availability}
            onChange={handleChange}
            className="mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Optional"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Medical History</label>
          <textarea
            name="medical_history"
            value={formData.medical_history}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Optional"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Assigned Doctor</label>
          <input
            type="number"
            name="assigned_doctor"
            value={formData.assigned_doctor}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Optional"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Profile Image URL</label>
          <input
            type="url"
            name="profile_image"
            value={formData.profile_image}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Optional"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-red-500 font-semibold">{message}</p>
      )}
    </div>
  );
}
