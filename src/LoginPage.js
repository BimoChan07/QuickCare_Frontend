import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
const navigate = useNavigate();
  const [email, setUsername] = useState("");
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
const res =  await axios.post("http://localhost:4000/user/login", {email, password})
console.log("response from the backend",res)
navigate("/")
}
catch(error){
console.log("Error",error)
}

  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
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
