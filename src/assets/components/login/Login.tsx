import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './/HomePage.css'; // Assuming you have a CSS file for styling
// import './HomePage.css';
// import "./all.min.css"; // Import FontAwesome icons

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(role=="admin"){
        navigate('/admin-dashboard');
    }
    else if(role=="supervisor") {
        navigate('/supervisor-dashboard');
    }

  };






  return (
    <div className="container">
      <div className="left-section">
        <img src="image.png" alt="Logo" />
      </div>
      <div className="right-section">
        <h2 className="login-title">Login</h2>
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <i className="fa-solid fa-envelope icon"></i>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-group">
              <i className="fa-solid fa-lock icon"></i>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="role-selection">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="admin">Admin</label>

              <input
                type="radio"
                id="supervisor"
                name="role"
                value="supervisor"
                checked={role === "supervisor"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="supervisor">Supervisor</label>
            </div>

            <button type="submit" className="login-button">
              <strong>Login</strong>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
