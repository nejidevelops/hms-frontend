import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hms-api-0pge.onrender.com/api/token/",
        credentials
      );
      const { access, refresh } = response.data;
  
      // Store tokens
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
  
      // Fetch user profile to determine the role
      const userResponse = await axios.get(
        "https://hms-api-0pge.onrender.com/api/v1/users/me/",
        { headers: { Authorization: `Bearer ${access}` } }
      );
      
      const userRole = userResponse.data.role; // Assume role is in the 'role' field
  
      if (userRole === "patient") {
        navigate("/patient-dashboard/home");
      } else if (userRole === "doctor") {
        navigate("/doctor-dashboard/home");
      } else {
        setMessage("Invalid role. Please contact support.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Invalid credentials. Please try again.");
    }
  };
  
  
  return (
    <div className="max-w-md mx-auto mt-32 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-red-500 font-semibold">{message}</p>
      )}
    </div>
  );
}
