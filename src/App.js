import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Doctor Consult</h1>
        <p>Get expert medical advice from the comfort of your home.</p>
      </header>
      <main className="main-content">
        <section className="feature-section">
          <div className="feature">
            <img src="/images/feature1.png" alt="Find a Doctor" />
            <h2>Find a Doctor</h2>
            <p>
              Browse and search for doctors based on their specialty and
              location.
            </p>
          </div>
          <div className="feature">
            <img src="/images/feature2.png" alt="Book Appointment" />
            <h2>Book Appointment</h2>
            <p>Schedule a convenient appointment with your chosen doctor.</p>
          </div>
          <div className="feature">
            <img src="/images/feature3.png" alt="Virtual Consultation" />
            <h2>Virtual Consultation</h2>
            <p>Have a video or chat consultation with your doctor.</p>
          </div>
        </section>
        <section className="cta-section">
          <h2>Start Your Consultation Today</h2>
          <a href="/signup" className="btn-primary">
            Sign Up
          </a>
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Doctor Consult. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
