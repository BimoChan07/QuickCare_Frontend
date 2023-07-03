import React, { useState } from "react";

const AppointmentBookingPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform appointment booking logic here, such as sending a request to the server
    console.log("Doctor:", selectedDoctor);
    console.log("Date:", selectedDate);
    console.log("Time:", selectedTime);
    // Reset form fields
    setSelectedDoctor("");
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <div className="booking-container">
      <h2 className="booking-heading">Appointment Booking</h2>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="doctor">Doctor:</label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={handleDoctorChange}
            required
          >
            <option value="">Select a doctor</option>
            <option value="Dr. Neha Bajimaya">Dr. Neha Bajimaya</option>
            <option value="Dr. Nidhi Bajimaya">Dr. Nidhi Bajimaya</option>
            <option value="Dr. Bhola Rijal">Dr. Bhola Rijal</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentBookingPage;
