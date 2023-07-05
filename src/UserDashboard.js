import React from "react";

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">User Dashboard</h2>
      <div className="dashboard-section">
        <h3 className="dashboard-section-heading">Upcoming Appointments</h3>
        <ul className="appointments-list">
          {/* Render a list of upcoming appointments */}
          <li className="appointment-item">Appointment 1 - Date and Time</li>
          <li className="appointment-item">Appointment 2 - Date and Time</li>
          <li className="appointment-item">Appointment 3 - Date and Time</li>
        </ul>
      </div>
      <div className="dashboard-section">
        <h3 className="dashboard-section-heading">Profile Management</h3>
        <div className="profile-info">Profile Information</div>
      </div>
      <div className="dashboard-section">
        <h3 className="dashboard-section-heading">Payment Management</h3>
        <div className="payment-info">Payment Information</div>
      </div>
    </div>
  );
};

export default UserDashboard;
