import logo from "./logo.svg";
import "./App.css";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

// export default App;

/* import React, { useState } from "react";

const AnotherApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Another App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default AnotherApp;
 */
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
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
          <Link to="/signup" className="btn-primary">
            Sign Up
          </Link>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Doctor Consult. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
