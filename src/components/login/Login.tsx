import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import logo from "/logo.png";

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle demo login
  const handleDemoLogin = async () => {
    const demoCredentials = {
      email: "admin_trucktiveegypt@trucktive.com",
      password: "P@ssw0rd"
    };
    
    // Set form values to demo credentials
    await formik.setValues({
      email: demoCredentials.email,
      password: demoCredentials.password,
      role: "admin"
    });
    
    // Trigger form submission
    formik.handleSubmit();
  };

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
        setIsLoading(true);

        const response = await axios.post(`https://trucktive.runasp.net/Auth/Login`, values);

        const { token, role, id, firstName } = response.data;
        console.log("Login response:", response.data);

        localStorage.setItem("token", token);
        localStorage.setItem("userId", id);
        localStorage.setItem("userName", firstName)
        if (role === "Supervisor"){
           localStorage.setItem("companyId", response.data.profileData.companyId); 
           localStorage.setItem("SupervisorId", response.data.profileData.id);
        }

        if (role === "Admin") {
          navigate("/admin-dashboard");
        } else if (role === "Supervisor") {
          navigate("/supervisor-dashboard");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Login error:", error);
        setLoginError(" Invalid email or password. Please try again. ");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="Trucktive" className="login-logo" />
        
        <form onSubmit={formik.handleSubmit} className="login-form">
          <div className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your account</p>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FontAwesomeIcon icon={faEnvelope} />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-input ${formik.touched.email && formik.errors.email ? 'error' : ''}`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="form-error">{formik.errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <FontAwesomeIcon icon={faLock} />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-input ${formik.touched.password && formik.errors.password ? 'error' : ''}`}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="form-error">{formik.errors.password}</div>
            )}
          </div>

          {loginError && (
            <div className="alert alert-danger">
              {loginError}
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-lg w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="login-footer">
          <div className="login-divider">
            <span>OR</span>
          </div>
          <button 
            type="button" 
            className="btn btn-outline w-full" 
            onClick={handleDemoLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Demo Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
