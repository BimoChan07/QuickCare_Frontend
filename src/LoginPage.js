import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

   const handleSubmit = async(e) => {
    e.preventDefault();
try{
const res =  await axios.post("/user/login", {username, password})
console.log("response from the backend",res)
}
catch(error){
console.log("Error",error)
}
    // console.log("Username:", username);
    // console.log("Password:", password);
    // Reset form fields
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
