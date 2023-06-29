// import logo from "./logo.svg";
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
import "./App.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to QuickCare</h1>
        <p>Get expert medical advice from the comfort of your home.</p>
      </header>
      <main className="main-content">
        <section className="feature-section">
          <div className="feature">
            <img src="" alt="Find a Doctor" />
            <h2>Find a Doctor</h2>
            <p>
              Browse and search for doctors based on their specialty and
              location.
            </p>
          </div>
          <div className="feature">
            <img src="" alt="Book Appointment" />
            <h2>Book Appointment</h2>
            <p>Schedule a convenient appointment with your chosen doctor.</p>
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
        <p>&copy; 2023 QuickCare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
