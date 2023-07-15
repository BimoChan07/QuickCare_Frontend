import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/appointments">Appointments</a>
          </li>
          <li>
            <a href="/doctors">Doctors</a>
          </li>
          <li>
            <a href="/patients">Patients</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          {/* <li>
            <a href="/contact">Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
