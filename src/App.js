import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Switch as RouterSwitch } from "react-router";

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
        <nav>
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
          </ul>
        </nav>

        <RouterSwitch>
          <Route exact path="/" component={Homepage} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/doctors" component={DoctorProfile} />
          <Route path="/appointments" component={BookAppointment} />
          <Route path="/notifications" component={Notification} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </RouterSwitch>
      </div>
    </Router>
  );
};

export default App;
