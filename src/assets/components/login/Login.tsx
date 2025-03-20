import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const LoginPage = () => {

  
// try{
//   async function Login( values){
//     let {data}= await axios.post("",values)


// localStorage.setItem("userToken",data.token)
//    }
// }catch(error){
//   console.log(error)

// }


  
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
      // try {
      //   const response = await loginAPI("",values); 
      //   const { token } = response.data;
      //   localStorage.setItem("token", token);
    
      //   if (values.role === "admin") {
      //     navigate("/admin-dashborad");
      //   } else if (values.role === "supervisor") {
      //     navigate("/supervisor-dashborad");
      //   }
      // } catch (error) {
      //   console.error("Login error:", error);
      // }
    }
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
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}

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
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}

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




