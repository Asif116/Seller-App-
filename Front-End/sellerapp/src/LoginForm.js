import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use `useNavigate` for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in both fields!");
      return;
    }
    // If login is successful, navigate to the home page
    alert(`Logged in as: ${username}`);
    navigate("/"); // Redirect to the home page after login
  };

  return (
    <div className="container mt-4">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
