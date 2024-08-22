import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PatientDashboard from "./components/PatientDashboard";
import PrivateRoute from './PrivateRoute';
import Home from "./components/patients-dashboard/Home";
import Profile from "./components/patients-dashboard/Profile";
import Appointments from "./components/patients-dashboard/Appointments";
import Reports from "./components/patients-dashboard/Reports";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/patient-dashboard/*"
          element={
            <PrivateRoute>
              <PatientDashboard>
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="appointments" element={<Appointments />} />
                  <Route path="reports" element={<Reports />} />
                </Routes>
              </PatientDashboard>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
