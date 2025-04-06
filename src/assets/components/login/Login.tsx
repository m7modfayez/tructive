// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import './/HomePage.css'; // Assuming you have a CSS file for styling
// // import './HomePage.css';
// // import "./all.min.css"; // Import FontAwesome icons

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("admin");
//   const navigate = useNavigate();


//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if(role=="admin"){
//         navigate('/admin-dashboard');
//     }
//     else if(role=="supervisor") {
//         navigate('/supervisor-dashboard');
//     }

//   };






//   return (
//     <div className="container">
//       <div className="left-section">
//         <img src="image.png" alt="Logo" />
//       </div>
//       <div className="right-section">
//         <h2 className="login-title">Login</h2>
//         <div className="login-box">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>

            
//             <div className="input-group">
//               <i className="fa-solid fa-envelope icon"></i>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <label htmlFor="password">Password</label>
//             <div className="input-group">
//               <i className="fa-solid fa-lock icon"></i>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="role-selection">
//               <input
//                 type="radio"
//                 id="admin"
//                 name="role"
//                 value="admin"
//                 checked={role === "admin"}
//                 onChange={(e) => setRole(e.target.value)}
//               />
//               <label htmlFor="admin">Admin</label>

//               <input
//                 type="radio"
//                 // style={{backgroundColor: "white"}}
//                 id="supervisor"
//                 name="role"
//                 value="supervisor"
//                 checked={role === "supervisor"}
//                 onChange={(e) => setRole(e.target.value)}
//               />
//               <label htmlFor="supervisor">Supervisor</label>
//             </div>

//             <button type="submit" className="login-button">
//               <strong>Login</strong>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

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
        console.log(" Sending login request with values:", values);
    
        const response = await axios.post("https://trucktive.runasp.net/Auth/Login", values);
    
        console.log(" Response from API:", response);
    
        const { token, role } = response.data;
    
        localStorage.setItem("token", token);
        console.log(" Token stored in localStorage:", token);
    
        if (role === "admin") {
          navigate("/admin-dashborad");
        } else if (role === "supervisor") {
          navigate("/supervisor-dashborad");
        } else {
          navigate("/login-page");
        }
      } catch (error) {
        console.error("Login error:", error);
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
