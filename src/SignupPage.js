import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");

  const endpointUrl = "http://localhost:4000/user/createUser";
  const userData = {
    fullname: name,
    email: email,
    username: username,
    password: password,
    contactNo: contactNo,
    address: address,
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Contact No:", contactNo);
    console.log("Address:", address);

    const jsonuser = JSON.stringify(userData);
    await axios
      .post(endpointUrl, userData)
      .then((response) => {
        alert("User creation successful:");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
    // setName("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <h2 className="signup-heading">Sign Up</h2>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Full Name"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            placeholder="Username"
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder=" Password"
          />
        </div>

        <div>
          <input
            type="text"
            id="contactNo"
            value={contactNo}
            onChange={handleContactNoChange}
            required
            placeholder="Contact No"
          />
        </div>

        <div>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
            placeholder="Address"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
