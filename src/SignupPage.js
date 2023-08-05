import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const endpointUrl = "http://localhost:4000/user/createUser";
const userData = {
  fullname:name, 
  email:email,
  password:password
}

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    const jsonuser  = JSON.stringify(userData);
   await axios.post(endpointUrl, userData)
  .then(response => {
    alert("User creation successful:");
navigate('/login');
  })
  .catch(error => {
    console.error("Error creating user:", error);
  });
    // setName("");
    // setEmail("");
    // setPassword("");
  };
  

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
