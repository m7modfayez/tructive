

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "admin",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email format").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoginError("");

        const response = await axios.post("https://trucktive.runasp.net/Auth/Login", values);

        const { token, role } = response.data;

        localStorage.setItem("token", token);

        if (role === "Admin") {
          navigate("/admin-dashboard");
        } else if (role === "Supervisor") {
          navigate("/supervisor-dashboard");
        } else {
          navigate("/login-page");
        }
      } catch (error) {
        console.error("Login error:", error);

        setLoginError(" Invalid email or password. Please try again. ");


      }
    },
  });

  return (
    <div className="container">
      <div className="left-section">
        <h1>Tructive</h1>
      </div>
      <div className="right-section">
        <h2 className="login-title">Login</h2>
        <div className="login-box">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}

            <label htmlFor="password">Password</label>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} style={{ marginRight: "10px" }} />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}

            <div className="role-selection">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={formik.values.role === "admin"}
                onChange={formik.handleChange}
              />
              <label htmlFor="admin">Admin</label>

              <input
                type="radio"
                id="supervisor"
                name="role"
                value="supervisor"
                checked={formik.values.role === "supervisor"}
                onChange={formik.handleChange}
              />
              <label htmlFor="supervisor">Supervisor</label>
            </div>

            {loginError && <div className="error-message">{loginError}</div>}

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

