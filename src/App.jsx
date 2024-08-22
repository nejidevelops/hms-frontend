import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PatientDashboard from "./components/PatientDashboard";
import PrivateRoute from './PrivateRoute';
import Home from "./components/patients-dashboard/Home";
import Profile from "./components/patients-dashboard/Profile";
import Appointments from "./components/patients-dashboard/Appointments";
import Reports from "./components/patients-dashboard/Reports";
import PublicLayout from './PublicLayout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <LandingPage />
          </PublicLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicLayout>
            <Signup />
          </PublicLayout>
        }
      />
      <Route
        path="/login"
        element={
          <PublicLayout>
            <Login />
          </PublicLayout>
        }
      />
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
  );
}

export default App;
