import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Homepage from "./Homepage";
import UserDashboard from "./UserDashboard";
import DoctorProfile from "./DoctorProfile";
import BookAppointment from "./BookAppointment";
import Notification from "./Notification";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo-container">
            <img
              src="quickcare-logo.png"
              alt="QuickCare Logo"
              className="logo"
            />
            <span className="brand-name">QuickCare</span>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/doctors">Find Doctors</Link>
            </li>
            <li>
              <Link to="/appointments">Book Appointment</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="route-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/doctors" element={<DoctorProfile />} />
            <Route path="/appointments" element={<BookAppointment />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
