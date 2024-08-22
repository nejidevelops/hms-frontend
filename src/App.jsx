import LandingPage from "./components/LandingPage"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import PatientDashboard from "./components/PatientDashboard"
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-dashboard" element={<PrivateRoute element={PatientDashboard} />} />
      </Routes>
    </>
  )
}

export default App
